#!/usr/bin/env bash

set -ex

docker pull ubuntu
docker image tag ubuntu 192.168.10.61:5000/ubuntu
docker push 192.168.10.61:5000/ubuntu

docker pull traefik/whoami
docker image tag traefik/whoami 192.168.10.61:5000/traefik/whoami
docker push 192.168.10.61:5000/traefik/whoami

docker pull mysql
docker image tag mysql 192.168.10.61:5000/mysql
docker push 192.168.10.61:5000/mysql
