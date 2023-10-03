#!/usr/bin/env bash

set -ex


docker kill $(docker ps -qa)
docker rm $(docker ps -qa)