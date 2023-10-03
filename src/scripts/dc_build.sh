#!/usr/bin/env bash

set -ex
myArray=("./node-helloworld")

# Run echo command with the array elements
for element in "${myArray[@]}"
do
    pushd "$element"
      ./build_docker.sh
    popd
done
