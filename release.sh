# remove static artifacts
rm -rf ./release-tmp

# unzip the input file
unzip -d ./release-tmp $1

# change to the tmp folder
cd ./release-tmp

# rename *.md to *.txt
zsh -c 'autoload zmv;$0 $@' zmv -w './**/*.md' './$1$2.txt'

# remove irrelevant files
rm -rf ./*/images
rm ./*/release.sh

# create the zip file
zip -r ../$1 .

# go back up
cd ..

# clean up
rm -rf ./release-tmp
