---
title: 'GopherCon 2018 - An Over-Engineering Disaster with Macaroons'
authors:
  - name: Guillaume J. Charmes for the GopherCon Liveblog
publishDate: 2018-08-28T00:00-06:00
tags: [
  "gophercon"
]
slug: gophercon-2018-an-over-engineering-disaster-with-macaroons
description: 'This is a story about cool new technology, over-engineering, and coconut cookies.'
heroImage: https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg
published: true
---

Presenter: [Tess Rinearson](https://www.gophercon.com/agenda/speakers/279062)

Liveblogger: [Guillaume J. Charmes](https://twitter.com/charme_g)

This is a story about cool new technology, over-engineering, and coconut cookies.

## Summary

Macaroon is an exciting new technology that promises to solve the authentication/authorization problem.

Tess Rinearson, VP of Engineering at Chain, walk us through the journey of her team about adopting the technology.

---

## An Over-Engineering Disaster with Macaroons

## Auth is a common problem

When building a server, auth is a common problem, and by "auth", I mean the
twin problem of "who are you", a.k.a. "authentication" and "what can you do" a.k.a. "authorization".

## Before Macaroon

When starting, the auth system was using BasicAuth, check that the user/password pair is valid and
set the user in the context:

```go

// Authenticate returns the request with added tokens in the context.
func (a *API) Authenticate(req *http.Request) (*http.Request, error) {
	ctx := req.Context()

	// Fetch the username / password from headers using Basic Auth.
	user, pw, ok := req.BasicAuth()
	if !ok {
		return "", errors.New("no token")
	}
	// Check the basic auth to see if the user has access.
	err = a.checkTokenAuthn(ctx, user, pw)
	if err != nil {
		return "", errors.New("unauthenticated")
	}
	if user != "" {
		// If request was successfully authn'd, pass the user along.
		ctx = newContextWithUser(ctx, user)
	}
	return req.WithContext(ctx), nil
}
```

Once the authentication is done, we move on to the authorization.
Each route has a "policy", we run the user against that policy to know
if the user has access.


```go
func (a *Authorizer) Authorize(req *http.Request) error {
	// Pull the policy based on the route.
	policies := a.policyByRoute[req.RequestURI]
	if policies == nil {
		return errors.New("missing policy on this route")
	}
	// Get the grants from the policy.
	grants, err := a.grantsByPolicies(policies)
	if err != nil {
		return errors.Wrap(err)
	}
	// Check if the user has one of the grant.
	for _, g := range grants {
		if accessTokenData(g) == authn.Token(ctx) {
			return nil
		}
	}
	return ErrNotAuthorized
}
```

This approach seemed quite straightforward, however finding the right approach is not quite that easy.

## Capability vs Identity

- Capabilities is directly granting someone the capability to do something specific
- Identity is asking who the entity is and then determining if they're allowed to do that thing.

### Example

As it might be a bit abstract, let's take a look at an example: a Car.

How do we determine if this car can be started? The options are

- Create a Key, anyone with a key can use it: capability based auth system.
- Have the car Ask who the driver is and look it up to check it: identity-based auth system.

But them if we push a little, let's say we need a Valet parking. If we give him the keys,
he could, in turn, give them to anyone, even burglars, this is dangerous. On the other hand,
we don't know the Valet, so an Identity-based auth system wouldn't work as well.

And worse, relying on identity can be dangerous in any system where there are more
then two “principles,” like multiple services.

>>> “The ACL model is unable to make correct
access decisions for interactions
involving more than two principals,
since required information is not
retained across message sends.”
Tyler Close, ACLs don't

Identity is not ideal: it often depends on a Deputy to lookup a user, but that Deputy can get confused.

A common case is CSRF: Cross Site Request Forgery which could result in the Deputy to get “confused”
and take action on behalf of another actor who doesn't have that authority.

Solution: Create a token unique per session. i.e. increase the security of the Identity system by adding a Capability.

Now, what if something could safely combine the strengths of both the capability and the identity models? What if a bearer token, like our car key, could be attenuated, or limited, in a way
that makes it much safer?

Now, if only we could combine the strengths of both world, like having a Bearer token (like our car key) that
could be attenuated or limited so it can be much safer.

This would be like we handed the valet a key that Wouldn't work generally, but would work within a one-mile radius,
or if the driver was wearing the valet-company uniform or some other set of caveats that are based on the context.

## Macaroons

Enters Macaroon. They do exactly that. As the name suggests, from the user perspective, it works like a cookie, but it
is a Bearer token, contextually attenuated to limit what it can do.

### The Problem

Looking back to basic auth, the problems are:

1. user/password required on every request.
2. Only Identity based.

### The Solution

HMACS is a keyed-hashed message, similar to a hash function, except the output is based on a key. If both parties
have the key, then it solves the first problem as we don't need to pass the plaintext login/password each time.

This is nice, it improved authentication but not the authorization to check what the user can do.

Macaroon solves this by adding layers (a.k.a Caveat), chaining HMAC:

<Figure 
	alt="Sequence Architecture" 
	src="https://user-images.githubusercontent.com/521701/44739621-827f8d80-aab5-11e8-8996-4e62f61c6779.png"
/>

Let's take a look at the code:

A Macaroon is quite simple:

```go
type Macaroon struct {
	location string
	id       []byte
	caveats  []Caveat
	sig      [hashLen]byte
	version  Version
}

type Caveat struct {
	Id             []byte
	VerificationId []byte
	Location       string
}
```

Now, we can create out own Macaroon:

```go

func mintMacaroon(ctx context.Context, teamID string) (*macaroon.Macaroon, error) {
	secretKey := getSecretKeyFromParameterStore() // this is a fake function
	// Construct a unique identifier for the macaroon.
	id := &macaroons.Identifier{
		Nonce:    make([]byte, 16),
		KeyId:    keyID, // Random string.
		IssuedAt: ptypes.TimestampNow(),
	}
	_, err := rand.Read(id.Nonce)
	idBytes, err := proto.Marshal(id)
	// Create an unattenuated macaroon for a team.
	m, err := macaroon.New(secretKey, string(idBytes), "")

	// Attenuate the omnipotent macaroon with a caveat
	// limiting it to requests for the provided team ID.
	encodedCaveats, err := proto.Marshal(&ledgerpb.CaveatList{
		Caveats: []*ledgerpb.Caveat{RequestIsForTeam: teamID},
	})
	err = m.AddFirstPartyCaveat(string(encodedCaveats))
	return m, err
}

// AddFirstPartyCaveat adds a caveat that will be verified
// by the target service.
func (m *Macaroon) AddFirstPartyCaveat(condition []byte) error {
	m.addCaveat(condition, nil, "")
	return nil
}

func (m *Macaroon) addCaveat(caveatId, verificationId []byte, loc string) error {
	m.appendCaveat(caveatId, verificationId, loc)
	m.sig = *keyedHash(&m.sig, caveatId)
	return nil
}
```

And it can easily be authorized:

```go
func authorizeRequest(teamID string, req *http.Request) error {
	ctx := req.Context()
	mac := authn.Macaroon(ctx)
	discharges := authn.DischargeMacaroons(ctx)
	if mac == nil {
		return httperror.ErrNotAuthenticated
	}
	verifier := caveatVerifier(teamID, req.URL.Path)
	err := mac.Verify(authzKey, verifier, discharges)
	if err != nil {
		return httperror.ErrNotAuthorized
	}
	return nil
}
```

As the permissions are inside the Macaroon token, no need for extra lookup to identity.

Macaroon can also be used by 3rd party and can be used in similar flow as OAuth for 3rd party support.

## Macaroon at Chain

All this seemed very exciting and a great fit for Chain's use case.

### The good parts

<Figure 
	alt="screen shot 2018-08-28 at 11 27 14 am" 
	src="https://user-images.githubusercontent.com/521701/44739575-5e23b100-aab5-11e8-8db7-be1dae79a5f9.png" 
/>

*Ledgerd* creates a "golden" macaroon, pass it to the *Dashboard* who "downgrades" it so it can only do some specific actions.

The transition went quite smoothly and worked quite well... for a while.

### The bad parts

1. New Availability dependency on Dashboard, i.e. If that comes down, everything goes down.
2. Very difficult to use locally. So difficult in fact, we stopped doing it, and the code reflects it.
3. Confusing behavior for users.
4. Impossible to revoke immediately. The discharge macaroon would not be fetched before 5 minutes.
   Revokation is hard, and Macaroon doesn't make it easier.
5. Tricky format.
6. Maybe misnamed?

Eventually, Chain decided to move away from Macaroons.

Removing Macaroon took 5 months while setting up took 2 weeks.

Tried to convert macaroon to new auth, but as it is not stored on the server side, it can't be migrated.

## Conclusion

Macaroons are an exciting technology, but it might be too exciting. It is quite young
and will improve over time, but the current solution was not the right fit for Chain.
