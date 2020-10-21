# Using a windows environment

This process will be more complicated since our system does not support Windows at a local dev environment. Follow these steps, and get in touch with the distribution team if you have issues, (a few team members also use a PC).

1. Make sure you have Windows 10 Pro
Check your version using **Windows key** > **Settings** > **About**
1. Install [Chocolatey](https://chocolatey.org/install). Once it’s done, [search](https://chocolatey.org/packages/) for Go and Yarn and enter the commands to install. Or just install each individually (see below)
1. Download WSL (Windows Subsystem for Linux) from the [Microsoft Store](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab)
1. Follow the instructions in the [Microsoft documentation](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install WSL, update to WSL 2, and install a Linux distribution.

| 📝        | Choose a stable version, not necessarily the most recent. At the time of this writing, that is 18.04      |
|---------------|:------------------------|
    
5. Run through the process to [enable systemd](https://github.com/DamionGans/ubuntu-wsl2-systemd-script#ubuntu-wsl2-systemd-script) support on WSL 2:
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

6. Run through the handbook process to [install dependencies](https://docs.sourcegraph.com/dev/local_development#ubuntu) for Ubuntu:
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
