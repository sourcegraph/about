# Technical Writer Onboarding

## Pre-Onboarding {#pre-onboarding}

1. **Reply to Noemi's email**: Don’t do the Welcome PDF just yet, just the reply with the info in the email. She’ll ask for a bunch of info, including your address, ID, shirt size, and selfies. The process is easier if you get it to her a little bit ahead of time. 
1. **Order your gear ahead**: (If you can.) See the Equipment details section below. Read the [handbook](https://about.sourcegraph.com/handbook/people-ops/spending-company-money#laptops) guidelines for more detail.

### Equipment guidelines {#equipment-guidelines}

We have an “all-in” total budget of $1,500 for desk setup, which includes all the items in the following section. You won’t need everything in this section, but get what you need.  

| 📝        | Laptops/laptop insurance are fully reimbursable outside of the $1,500 all-in budget. If you spend more than $1,000 on any given physical item, it will be considered property of the company       |
|---------------|:------------------------|
 

- Monitor
- Headphones
- Keyboard
- Mouse or trackpad
- USB-C adapter
- HDMI/monitor cable
- Laptop stand
- Desk
- Ergonomic chair
- Camera for people who present externally to clients and prospects

### Computer guidelines {#computer-guidelines}

- [16” MacBook Pro, 2.4 GHz (5 GHz turbo) 8‑core (upgrade), 64 GB (upgrade), 1 TB SSD](https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-2.3ghz-8-core-processor-1tb#)
- Any other laptop that is of equal or lesser value than the pre-approved laptop. If you’re not in the Mac camp, talk to **@bunny** for suggestions

## Onboarding {#onboarding}

- **Noemi’s Welcome email**: Includes your very-very first day tasks, such as setting up your email, basic accounts, and introducing yourself in the #general slack channel
- **Sourcegraph onboarding**: The most relevant pieces are pasted here. Read the [handbook page](https://about.sourcegraph.com/handbook/people-ops/onboarding) for more detail. 
    - Add yourself to the [team page](https://about.sourcegraph.com/company/team).
    - Read the [style guide](https://about.sourcegraph.com/handbook/communication/style_guide). 
    - [Add your working hours to Google Calendar](https://calendar.google.com/calendar/r/settings) so your teammates know when it is safe to add meetings to your calendar
    - Watch the [new team member intro from the CEO](https://www.youtube.com/watch?v=EVHUGZe5uts)
- **Set up accounts**: In addition to the accounts listed in Noemi’s email, you’ll need access to set up the following accounts: 
    - <span style="text-decoration:underline;">Google Cloud Storage</span>: Ask **#dev-chat** (or **@sqs** specifically) for the following Google Cloud Storage permissions for publishing graphics:
        - ['storage.objects.delete'] 
        - ['resourcemanager.projects.get'] 
        - ['storage.buckets.list']
    - <span style="text-decoration:underline;">Figma</span>: Ask **@rob** (Rob Rhyne) for access on Slack 
    - <span style="text-decoration:underline;">Hubspot</span>: Ask **@eric** (Eric Brody-Moore) for access. Make sure you have SuperAdmin permissions, or Service/ContactsReports/Marketing roles
    - <span style="text-decoration:underline;">1Password</span> login from **@Noemi**
    - <span style="text-decoration:underline;">Twitter</span> password for the Sourcegraph twitter account is in 1Password. 
*   **Screenshot/GIF making software**: See the [handbook](https://about.sourcegraph.com/handbook/marketing/adding_screenshots_screen_recording) for guidelines about software. Expense the program that works for you. **@bunny** recommends Snagit, but use what you like. 


# Setting up to publish {#setting-up-to-publish}

## About GitHub {#about-github}

Sourcegraph uses GitHub to publish content for the handbook, website, and documentation. 

If you’re not already familiar with GitHub, check out the [GitHub walkthrough](https://youtu.be/sz6zfrQpCQg) on Youtube, the [Git Handbook](https://guides.github.com/introduction/git-handbook/), and other resources on our [Intro to GitHub page](https://about.sourcegraph.com/handbook/people-ops/onboarding/git_intro). 


## Recommended software {#recommended-software}

The following software makes publishing easier:

- [GitHub Desktop](https://desktop.github.com/ ) (unless you’re comfy on the command line — your call.)
- Text editor of your choice: [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), whatever. 
- [Docs to Markdown add-on for Google Docs](https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607)


## Graphics {#graphics}

If your changes include any media, you’ll need to upload it to the Google Cloud Storage (GCP) blog bucket before sticking it in your markdown file. However, if the image is [less than 100kb](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/dev/documentation.md#adding-images-to-the-documentation) in size, it can be added to the /doc folder.

1. Once you have permissions set up, hit up the [sourcegraph-assets bucket](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true_)

1. If you’re working on a blog, navigate to the **blog/** folder, then upload to the appropriate release folder. If your release folder is missing, go ahead and make a new one. If you’re working on documentation, we need to create a folder structure, and at time of writing, haven’t yet. Please check with **@bunny**
4. The [https://sourcegraphstatic.com](https://sourcegraphstatic.com/) site serves content from the sourcegraph-assets Google Cloud Storage bucket. We are using this hostname instead of [https://storage.googleapis.com/sourcegraph-assets/](https://storage.googleapis.com/sourcegraph-assets/) because the latter is blocked by some ad blockers, which means our assets are not visible to many of our users. So the reference URL in the markdown will look like this:
[https://sourcegraphstatic.com/blog/3.18/k8s-search-page.png](https://sourcegraphstatic.com/blog/3.18/k8s-search-page.png)


# Setting up to preview {#setting-up-to-preview}

Setting up your local environment will allow you to preview changes you make to the handbook, website, or documentation space before you submit a PR.

### Local environment — Mac {#local-environment-mac}

- [Homebrew](https://brew.sh/)
This is how you install everything else that’s needed; Go, Yarn, etc. 
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) \
If you already have homebrew installed, type `yarn install` to get Yarn installed. You’ll need it later. 
- [Gatsby](https://classic.yarnpkg.com/en/package/gatsby) and [Node.js](https://classic.yarnpkg.com/en/package/node.js)
If you are on a mac, use `yarn` to install Gatsby and Node.js packages

### Local environment —  Windows {#local-environment-windows}

This process will be more complicated since our system does not support Windows at a local dev environment. Follow these steps, and get in touch with either **@dave** or **@gonza** if you have issues, since they also use a PC. 

1. Make sure you have Windows 10 Pro
Check your version using **Windows key** > **Settings** > **About**
1. Install [Chocolatey](https://chocolatey.org/install) (**@bunny**’s recommendation). Once it’s done, [search](https://chocolatey.org/packages/) for Go and Yarn and enter the commands to install. Or just install each individually (see below)
1. Download WSL (Windows Subsystem for Linux) from the [Microsoft Store](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab)
1. Follow the instructions in the [Microsoft documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install WSL, update to WSL 2, and install a Linux distribution. 

| 📝        | Choose a stable version, not necessarily the most recent. At the time of this writing, that is 18.04      |
|---------------|:------------------------|
    
1. Run through the process to [enable systemd](https://github.com/DamionGans/ubuntu-wsl2-systemd-script#ubuntu-wsl2-systemd-script) support on WSL 2:
    - Open WSL
    - Install git using `sudo apt install git`
    - Run the following script and then restart WSL

        ```
        git clone https://github.com/DamionGans/ubuntu-wsl2-systemd-script.git
        cd ubuntu-wsl2-systemd-script/
        bash ubuntu-wsl2-systemd-script.sh
        # Enter your password and wait until the script has finished
        ```
    - Run the following command
        ```
        systemctl
        ```
    - If you don’t see an error or see a list of units, setup was successful

1. Run through the handbook process to [install dependencies](https://docs.sourcegraph.com/dev/local_development#ubuntu) for Ubuntu:
    - Add package repositories:

        ```
        # Go
        sudo add-apt-repository ppa:longsleep/golang-backports
        # Docker
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
        # Yarn
        curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
        echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
        ```
    - Update repositories

        ```
        sudo apt-get update
        ```
    - Install dependencies

        ```
        sudo apt install -y make git-all postgresql postgresql-contrib redis-server nginx libpcre3-dev libsqlite3-dev pkg-config golang-go musl-tools docker-ce docker-ce-cli containerd.io yarn jq
        # install golang-migrate (you must rename the extracted binary to `golang-migrate` and move the binary into your $PATH)
        curl -L https://github.com/golang-migrate/migrate/releases/download/v4.7.0/migrate.linux-amd64.tar.gz | tar xvz
        # install comby (you must rename the extracted binary to `comby` and move the binary into your $PATH)
        curl -L https://github.com/comby-tools/comby/releases/download/0.11.3/comby-0.11.3-x86_64-linux.tar.gz | tar xvz
        # install watchman (you must put the binary and shared libraries on your $PATH and $LD_LIBRARY_PATH)
        curl -LO https://github.com/facebook/watchman/releases/download/v2020.07.13.00/watchman-v2020.07.13.00-linux.zip
        unzip watchman-*-linux.zip
        sudo mkdir -p /usr/local/{bin,lib} /usr/local/var/run/watchman
        sudo cp bin/* /usr/local/bin
        sudo cp lib/* /usr/local/lib
        sudo chmod 755 /usr/local/bin/watchman
        sudo chmod 2777 /usr/local/var/run/watchman
        # nvm (to manage Node.js)
        NVM_VERSION="$(curl https://api.github.com/repos/nvm-sh/nvm/releases/latest | jq -r .name)"
        curl -L https://raw.githubusercontent.com/nvm-sh/nvm/"$NVM_VERSION"/install.sh -o install-nvm.sh
        sh install-nvm.sh
        # in repo dir: install current recommended version of Node JS
        nvm install
        ```
    - Configure startup services

        ```
        sudo systemctl enable postgresql
        sudo systemctl enable redis-server.service

        ```
# Publishing {#publishing}
## The publishing process  {#the-publishing-process}

The publishing process for the website, handbook, and docs is the same as the one listed in [editing the handbook](https://about.sourcegraph.com/handbook/editing):

1. Propose the edits you want to make by creating a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) on the Git repository
    - Because the [handbook is public](https://about.sourcegraph.com/handbook/usage#why-make-this-handbook-public), anyone in the world can see your proposed edits.
1. You can request a review from specific teammates (who will get a notification) on the GitHub pull request page.
    - We don’t have any rules around who needs to review what changes. Use your judgment (e.g., if your change affects the entire engineering team, request review from the VP Engineering).
    - For minor edits, you can skip review.
1. Wait for the necessary teammates to review and approve your pull request.
1. Merge the pull request.
1. Wait up to 5 minutes for your change to be live on about.sourcegraph.com.

### FYI - When to file an issue in GitHub {#fyi-github}

If you’re doing something that’s just part of the normal rhythm of your job, no issue is required. If you find something wrong in one of the docs but don’t have time to fix it right away, go ahead and file an issue. If it’s a larger task and requires prioritization, go ahead and file an issue. 

## Previewing {#previewing}
### Handbook changes {#handbook-changes}
#### Mac and Windows {#mac-and-windows}

1. Open terminal or WSL 
1. Type `cd about` to get into the /about directory 
1. Run  `make serve`
1. Navigate to [localhost 5082](http://localhost:5082/) - don’t forget to bookmark!

| 📝        | You have to restart the server every time you update the markdown; it won’t just refresh. Use `Ctrl-C`       |
|---------------|:------------------------|
      
### Documentation changes {#documentation-changes}
#### Mac and Windows {#mac-and-windows}

1. Open terminal or WSL 
1. Type `cd sourcegraph` to get into the /sourcegraph directory 
1. Run 
    ```
    ./dev/docsite.sh -config doc/docsite.json serve -http=localhost:5080
    ```
1. Navigate to [localhost 5080](http://localhost:5080/)  - don’t forget to bookmark!

| 📝        | You have to restart the server every time you update the markdown; it won’t just refresh. Use `Ctrl-C`       |
|---------------|:------------------------|

### Website changes {#website-changes}
#### Mac and Windows {#mac-and-windows}

1. Open terminal or WSL 
1. Type `cd about/website` to get into the website directory
1. Run `yarn start` **or** `yarn serve` 
1. Navigate to [localhost 8000](http://localhost:8000/) - don’t forget to bookmark!
 - If you use `yarn serve`, navigate to [localhost 9000](http://localhost:9000/) 

| 📝        | You have to restart the server every time you update the markdown; it won’t just refresh. Use `Ctrl-C`       |
|---------------|:------------------------|

# Troubleshooting {#troubleshooting}

### When in doubt, search Slack for help. Did someone else ask this question?

If not, ask in **#ask-anything** or another department-specific chat.

### Wait, what repo is stuff located in?
- sourcegraph/about = handbook and marketing blog posts
- sourcegraph/sourcegraph = docs
- sourcegraph/docsite = headers, footers, and other website stuff

**Pro Tip**: You can also figure out where files are by searching [Sourcegraph Cloud](https://sourcegraph.com/search?_ga=2.255544652.598392341.1597668981-492280637.1594509875&_gac=1.216337826.1596634709.EAIaIQobChMI7dKf35eE6wIVh47ICh2VyAa2EAAYASAAEgJ6KvD_BwE)

### I can’t see my changes in local preview! What’s wrong?

Your terminal may not always been in sync with what you do in GitHub desktop. You may not be on the right be in the right branch, or maybe you haven’t pulled the latest changes.

Use this list of commands to diagnose your issue:

- git status = See what branch you’re working in 
- git checkout main = Go back to the main branch, if you’re done working in a branch
- git checkout [name of branch] = Go back to the branch of your choice
- git pull --rebase = Pull down the latest files and branches
- git checkout -b [name of new branch] = Create new branch
- git checkout [name of branch] = Switch to work on whatever branch you input 
- git merge master (merge master into branch, might cause CONFLICTS)

# Misc Guidelines {#misc-guidelines}

- [How to make updates to sourcegraph.com](https://about.sourcegraph.com/handbook/engineering/distribution/update_sourcegraph_website)
- [Product documentation guidelines](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/doc/dev/documentation.md)