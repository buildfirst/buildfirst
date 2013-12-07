#!/bin/sh

if ! hash git 2>/dev/null; then
  echo >&2 "You need to install git - visit http://git-scm.com/downloads"
  exit 1
fi

# get the code samples
git clone --recursive https://github.com/bevacqua/buildfirst.git

cd buildfirst

# npm install all the things
for /d . %d in (ch*\*_*) do @if exist "%d" npm install --prefix %d
