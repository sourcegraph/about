---
title: "Strange Loop 2019 - Rhapsody in Zero Knowledge: Proving Without Revealing"
description: "What does it mean to prove something? Propositional logic requires we reveal propositions and then prove them true, but what if it were possible to create proofs which reveal nothing but their own validity? This is the core idea behind the emergent field of zero knowledge proofs: a decades old solution to a problem we didn't even know existed yet. As we increasingly turn to machine learning to solve problems related to security, such as detecting frauds, fakes, or other threat actors, solutions increasingly rely on accumulating massive amounts of personal data, undermining privacy and risking data breaches. This talk is about how we don't have to sacrifice privacy to get security, and the potential power of constraints, complexity, and universal verifiable computation, and assumes no prior knowledge of cryptography or proof systems."
authors:
  - name: Prasanna Gautam
    url: https://twitter.com/prasincs
publishDate: 2019-09-14T00:00-14:30
tags: [
  strange-loop
]
slug: strange-loop-2019-rhapsody-in-zero-knowledge-proving-without-revealing
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: true 
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-12 m-0 w-100">
        <span className="liveblog-presenters__name">Tony Arcieri</span>
        <a href="https://twitter.com/bascule" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/tarcieri" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
        <a href="https://tonyarcieri.com" target="_blank" title="Speaker's site"><i className="fa fa-globe pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

What does it mean to prove something? Propositional logic requires we reveal propositions and then prove them true, but what if it were possible to create proofs which reveal nothing but their own validity? This is the core idea behind the emergent field of zero knowledge proofs: a decades old solution to a problem we didn't even know existed yet. As we increasingly turn to machine learning to solve problems related to security, such as detecting frauds, fakes, or other threat actors, solutions increasingly rely on accumulating massive amounts of personal data, undermining privacy and risking data breaches. This talk is about how we don't have to sacrifice privacy to get security, and the potential power of constraints, complexity, and universal verifiable computation, and assumes no prior knowledge of cryptography or proof systems.

---

## Preface 

Tony introduced the talk as the history of zero-knowledge proofs, there is going
to be lot of mathematical papers referenced but this is not a math talk. Tony
started his talk with a thesis that lot of the problems we are running into with rampant leaks and identity thefts could
be solved with Zero-Knowledge Proofs based identity system.


---

## Identity Theft and Zero-Knowledge Proofs
Tony outlined two causes of identity theft - data breaches and insecure authentication methods 

The solutions could be these
- Moving data to a different company: But what if the next company also gets breached?
- Stronger authentication methods like National IDs has problems with privacy

Tracking is becoming a regular part of life in the modern world. Your phone is broadcasting various tracking data like [IMSI number](https://www.techopedia.com/definition/5067/international-mobile-subscriber-identity-imsi), [MAC address](https://en.wikipedia.org/wiki/Medium_access_control), [Bluetooth Identifier](https://reelyactive.github.io/ble-identifier-reference.html). Even the newly issued and soon to be mandatory [RealID cards](http://www.ncsl.org/research/transportation/history-behind-the-real-id-act.aspx) in the US were once feared to contain RFID trackers. This works towards enabling a state of surveillance both at the state and corporations tracking
you level. What if we didn't have to sacrifice our privacy? Zero-Knowledge proofs try to solve that problem by proving the information but not revealing it to the verifier.

--- 

## Definition

Where a conventional proof conveys the information, a zero knowledge proof is meant to convey the assurance that
information is available. The goal is to convince the verifier that you have the information without revealing anything
about it. A lot of seminal work was done by  Shafi Goldwasser and Silvio Micali which led them to be awarded the 2012 ACM Turing
Award.

![Safi Goldwasser & Silvio Micali](/blog/strange-loop-2019/zkp-goldwasser-micali.jpg)

## Probabilistic encryption

In 1982 Goldwasser & Micali published the paper on [Probabilistic
Encryption](https://groups.csail.mit.edu/cis/pubs/shafi/1984-jcss.pdf). This paper introduced the concept of replacing Trapdoor functions in public key cryptography like RSA encryption with probabilistic functions, which gives you similar characteristics but it's probabilistic. They wanted to go from Probabilistic encryption to zero-knowledge proofs.

![zkp decoding quote](/blog/strange-loop-2019/zkp-decoding-quote.jpg)

Lots of papers after this seminal paper were rejected until [Knowledge complexity of interactive proof systems
systems](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.419.8132&rep=rep1&type=pdf) in
1985 was finally accepted. This paper proved to be fundamental to the development of Zero-knowledge proofs.

--- 

## Interactive zero knowledge 3-colorability Demonstration

The paper can be understood by solving a 3-coloring algorithm in a graph. The nomenclature of the characters are as
follows:
* Peggy the prover
* Victor the verifier

Tony used this tool to demonstrate the protocol in action [https://web.mit.edu/~ezyang/Public/graph/svg.html](https://web.mit.edu/~ezyang/Public/graph/svg.html)

Peggy's goal is to prove to Victor that the graph is indeed 3-colorable without revealing the three coloring of the
graph. You may notice that the colors change between different rounds of the game; although Peggy(the Prover) is not allowed to change her mind once she offers you a choice, she is allowed to mix up the colorings between choices. Indeed, if she didn't, you could reverse engineer the full coloring, making it not a zero-knowledge proof.

![zkp interactive coloring](/blog/strange-loop-2019/zkp-interactive-coloring.jpg)

## Arthur-Merlin Proofs

The same year 1985 László Babai published the Arthur-Merlin Proofs in the paper  [Trading Group theory for
randomness](https://pdfs.semanticscholar.org/15f8/41e403dc1706df05bd24447d1be51c9f8785.pdf). In this case, the prover is
Merlin and King Arthur is the verifier. The paper reminds us that the zero-knowledge proofs exist to convince a distrustful third party of the knowledge of the proof.

## Equivalence between the two proofs: tale of two coins

In 1986, Shafi and Michael Sipser wrote the [Private Coins vs Public Coins in Interactive Proof
Systems](http://crypto.cs.mcgill.ca/~crepeau/COMP647/2007/TOPIC01/goldwasser-Sipser.pdf) paper which proved the
equivalence of the interactive proof systems defined by (Safi et. al.) as private coin flip, and the outcome of Babai's
as the public coin flip. 

This was followed by Fiat-Shamir's paper [How to Prove Yourself](https://link.springer.com/chapter/10.1007%2F3-540-47721-7_12) where they turned the ineractive algorithms into a signature -- thereby turning the interactive algorithm into a non-interactive one. This meant that instead of requiring the verifier to be part of the initial commitment and challenge, the prover just needed to prove the hash of the message.

In 1987, zero Knowledge proofs were actually featured in the [New York
Times](https://www.nytimes.com/1987/02/17/science/a-new-approach-to-protecting-secrets-is-discovered.html).

## Equivalence between interactive proofs and NP
Tony had mentioned the complexity theory link in the beginning with Goldwasser & Micali's original paper. But in 1988
the link came together in the [Everything Provable is provable in zero-knowledge](https://link.springer.com/content/pdf/10.1007%2F0-387-34799-2_4.pdf) paper. This paper showed that **Every problem in NP has a zero-knowledge interactive proof** and _Zero Knowledge Proofs are universal_.


## Probabilistically Checking Proofs

The problem after this is how do you check a proof that's too large to verify? You may not be able to verify a large 100
page proof. 

In 1992, [Probabilistic checking of Proofs: A new characterizations of
NP](https://www.cs.umd.edu/~gasarch/TOPICS/pcp/AS.pdf) tackled this problem by probabilistically checking the proof in a
way that doesn't grow in an unbounded fashion. But, what if we could make smaller proofs? To answer this question, Joe Killian published  [A note on efficient zero-knowledge proofs and arguments](https://people.csail.mit.edu/vinodv/6892-Fall2013/efficientargs.pdf). 

In 2000, Micali published the [Computationally-sound proofs : Poly Logarithmic Verification
Time](https://projecteuclid.org/download/pdf_1/euclid.lnl/1235415908) paper which proves that there's a poly-logarithmic
verification time - i.e., it can be efficiently verified.

Tony characterizes these two papers as the beginnings of *SNARG* - Succint non-interactive arguments.


## Trusted Setup
Fiat-Shamir had introduced the random oracle model in the 80s, in 2001 the paper
[Universally composable commitments](https://eprint.iacr.org/2001/055.pdf) took the interactive model offline by using the Common Reference String(CRS) was
used to build a long string as "Trusted setup." This requires an initial trust to setup otherwise the system is
defeated.

In 2007, the paper [Incrementally verifiable computation](https://pdfs.semanticscholar.org/4074/97eeb99a9341714e9db05b57f500270139d7.pdf) presented a practical offline non-interactive proof system.

## Bitcoin

In 2009, Bitcoin was released. Tony considers bitcoin's pseudonymity proofs to not be sufficient since pseudonymity can be defeated easily with graph clustering. The limitations of Bitcoins led to the publication of [Zcash paper](http://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf) in 2014 by Eli Ben-Sasson. This paper introduces the concept of zkSNARKs.

*zkSNARKs: Zero-Knowledge Succinct Non-interactive ARguments of Knowledge*

- zero-knowledge proofs are realized as algebraic circuits
- implemented using elliptic curves with bilinear pairings
- operates in common reference model, so it requires a trusted setup too
- Rank-1 constraint system (R1CS)
- This was demonstrated using a boolean proofs

This was followed by the paper [Scalable zero knowledge proofs](https://eprint.iacr.org/2014/595.pdf) which presents
recursive proofs if you already have proof for others using Elliptic Curve Cycles.

## Problems with Trusted Setup

Although useful, Trusted Setup has shown to be vulnerable to accidental leaks and mishaps. As an example, the following
were presented.

### Zcash trusted setup
The Zcash developers tried to destroy the machines used for the Trusted Setup used to create the Common Reference String
but it was leaked in the ceremony transcript.

### Powers of Tau
This was followed by Powers of Tau ceremony to replace with prolonged multiparty signing ceremony with hundreds of
signers. 

## BulletProofs and ZkSTARKs 

These two papers present the future without the limitations of previous processes.

[Bulletproofs: non interactive zero knowledge proofs with small proof size](https://crypto.stanford.edu/bulletproofs/)
- requires no trusted setup
- uses normal elliptic cursves - doesn't require bilinear curves
- ideally suited for ranged proofs - but still provides R1CS

[zkSTARKs - Symmetric Cryptography - post quantum security](https://eprint.iacr.org/2018/046.pdf)
- no trusted setup: eliminates CRS with techniques close to erasure codes
- algebraic intermediate representation instead of R1CS
- complex math
- being built at Starkware

## Coda Protocol

The [Coda Protocol](https://codaprotocol.com/) swaps the traditional blockchain for a fixed size consistent proof 

- build on recursive zero knowledge proofs
- always get the consistent size proof that they have whole blockchain
- Snarky: ZKP compiler for Ocaml DSL

## More recent development

There's a lot of activity in this space as evident by the publication of recent papers on the topic. Tony presented
three of recent papers as an example:

[ZXE: Enabling Decentralized private computation](https://eprint.iacr.org/2018/962.pdf). ZXE presents a universal verifiable computation: can be used to prove any program was executed correctly while keeping the inputs secret

[Spartan: Efficient and general purpose zkSNARKs without trusted
setup](https://www.semanticscholar.org/paper/Spartan%3A-Efficient-and-general-purpose-zkSNARKs-Setty/a876aeff0d2d0bef08738ac063ef6c48f7eb8789) describes a new public coin, succinct interactive zero-knowledge argument for NP under standard cryptographic hardness assumptions—without requiring a trusted setup.

On Tuesday (September 10, 2019), major new development had happened with the publication of 
[Halo: Recursive Proof
Composition](https://electriccoin.co/blog/halo-recursive-proof-composition-without-a-trusted-setup/). Halo combines best parts of SNARKs and Bullet proofs with no trusted setup and uses normal elliptic curves. If you want to see it in practice, there's a WIP implementation on github: [https://github.com/ebfull/halo](https://github.com/ebfull/halo)

## Q&A

Tony deffered the question about the link between P!=NP and Zero Knowledge Proofs, ie whether Zero-Knowledge
proofs would be step towards proving P!=NP. 
His work involves building a bridge between Cosmos and the Zcash Shielded Pools.
In terms of practical usages, Tony presented the idea of checking for Non inclusion lists like checking for no fly lists without disclosing name, etc 
