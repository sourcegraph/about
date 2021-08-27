# Site admin guidelines for sourcegraph.com

sourcegraph.com (dotcom) will soon be used by millions of developers worldwide and we are responsible for managing it properly. Site admins on dotcom cannot view users' private code but can take destructive actions on the site. With great power comes great vulnerabilities. Until we are able to more properly restrict who is a site admin on dotcom, please follow these guidelines:

1. If possible, don't be a site admin on dotcom.
2. Use your GitHub account for being a site-admin and ensure username/password login is not possible. We enforce 2FA on GitHub accounts but don't have the same power for basic authentication on dotcom.
3. Don't install/enable extensions unless it's an extension developed by Sourcegraph OR you have the Security team's 👍
4. Don't change site settings as a site-admin. Our configuration is managed through code. Instead of using the UI, follow these instructions (link to changing dotcom settings)
5. Be careful when clicking Sourcegraph links, as phishing is the most likely way we get pwned.
