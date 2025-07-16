#!/bin/sh
set -e

sh ./install.sh

# Find the container ID
CONTAINER_ID=$(docker ps --filter ancestor=utkrusht-skill-dashboard-task --format "{{.ID}}" | head -n1)

if [ -z "$CONTAINER_ID" ]; then
  echo "[!] Container not running. Exiting."
  exit 1
fi

echo "[+] Running build and unit tests in the container..."
docker exec "$CONTAINER_ID" sh -c 'yarn run build && yarn run lint && yarn test'

echo "[+] All checks passed."
echo "[+] Your environment is ready."
