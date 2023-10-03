#!/usr/bin/env bash

set -ex

docker compose -f ./docker-compose.gen.yml \
  logs -f  airdrop-iamon99 airdrop-louislabs
