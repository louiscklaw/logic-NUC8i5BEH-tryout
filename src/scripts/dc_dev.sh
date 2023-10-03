#!/usr/bin/env bash

set -e

./scripts/dc_gen.sh

directory="/mnt/sda/not_mounted"

if [ -f "$directory" ]; then
    echo "Directory exists"
    exit 1
else
    echo "Directory does not exist"
fi

echo 
echo -e "\033[31m re-up docker compose ? \033[0m"
# read -p "Press Enter to continue..."
echo 

docker compose -f ./docker-compose.gen.yml up -d
docker compose -f ./docker-compose-openbox.gen.yml up -d
# --build

sudo chown 1000:1000 -R . 

exit 0

