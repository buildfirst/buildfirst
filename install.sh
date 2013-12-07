#!/bin/bash

if ! hash git 2>/dev/null; then
  echo >&2 "You need to install git - visit http://git-scm.com/downloads"
  exit 1
fi

# install nvm
curl https://raw.github.com/creationix/nvm/master/install.sh | sh

NODE_VER="0.10.22"

# install node
nvm install $NODE_VER

# use that version
nvm use $NODE_VER

# set as default alias
nvm alias default $NODE_VER

# get the code samples
git clone --recursive https://github.com/bevacqua/buildfirst.git

cd buildfirst

# npm install all the things
find . -mindepth 2 -maxdepth 2 -type d -name '*_*' -print -exec npm install --prefix {} \;
