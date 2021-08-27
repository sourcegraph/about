# Site admin guidelines for sourcegraph.com

sourcegraph.com (dotcom) will soon be used by millions of developers worldwide and we are responsible for managing it properly. Site admins on dotcom cannot view users' private code but can take destructive actions on the site. With great power comes great vulnerabilities. Until we are able to more properly restrict who is a site admin on dotcom, please follow these guidelines:

- If possible, don't be a site admin on dotcom. 
- Ensure your site admin account is linked to the GitHub account you use for Sourcegraph in order to enforce 2FA.
- Don't install/enable extensions unless it's an extension developed by Sourcegraph OR you have the Security team's 👍.
- Don't change site settings as a site-admin. Instead of using the UI, follow [these instructions] (https://about.sourcegraph.com/handbook/engineering/distribution/update_sourcegraph_website)
- Be careful when clicking Sourcegraph links, as phishing is the most likely way we get pwned.
- Periodically review and rotate your Access Tokens.