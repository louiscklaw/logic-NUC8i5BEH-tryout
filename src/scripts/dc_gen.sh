#!/usr/bin/env bash

set -e

YML_S='
-f ./docker-compose.yml
-f ./docker-helloworld-tryout/docker-compose.yml
'
# -f ./docker-registry/docker-compose.yml
# -f ./portainer/docker-compose.yml
# -f ./node-helloworld/docker-compose.yml

YML_OPENBOX_S='
-f ./docker-compose.yml
'
# -f ./openbox-poe-seat/docker-composes/docker-compose.openbox-poe-seat1.yml
# -f ./openbox-poe-seat/docker-composes/docker-compose.openbox-poe-seat2.yml
# -f ./openbox-poe-seat/docker-composes/docker-compose.openbox-poe-seat3.yml
# -f ./openbox-poe-seat/docker-composes/docker-compose.openbox-poe-seat4.yml
# -f ./openbox-poe-seat/docker-composes/docker-compose.openbox-poe-seat5.yml

if [[ -v DOCKER_DEV ]]; then
  echo 
  echo -e "\033[31m USING DEV DOCKER COMPOSE CONFIG !!! \033[0m"
  echo 
  # read -p "Press Enter to continue..."

  YML_S="$YML_S -f ./docker-compose.dev.yml"
  
else
  echo 
  echo -e "\033[31m USING PROD DOCKER COMPOSE CONFIG !!! \033[0m"
  echo 
  # read -p "Press Enter to continue..."
fi

docker compose $YML_S config > docker-compose.gen.yml
docker compose $YML_OPENBOX_S config > docker-compose-openbox.gen.yml
