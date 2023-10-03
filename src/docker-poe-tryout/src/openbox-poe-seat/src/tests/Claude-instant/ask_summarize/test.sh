#!/usr/bin/env bash

set -ex

# ask with preprompt
curl -X POST http://localhost:3000/chatGPT/ask \
   -H 'Content-Type: application/json' \
   -d @./input.json \
   -o result.json

# curl -X GET http://localhost:3021/hello
