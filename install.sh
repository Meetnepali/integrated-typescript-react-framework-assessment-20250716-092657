#!/bin/sh
set -e

echo "[+] Building Docker image..."
docker build -t utkrusht-skill-dashboard-task .

echo "[+] Starting container..."
CONTAINER_ID=$(docker run -d -v "$PWD":/usr/src/app -w /usr/src/app utkrusht-skill-dashboard-task tail -f /dev/null)

echo "[+] Installing dependencies inside the container..."
docker exec "$CONTAINER_ID" sh -c 'yarn install --frozen-lockfile'

echo "[+] Environment setup complete. Container ID: $CONTAINER_ID"
echo "  Use: docker exec -it $CONTAINER_ID sh "
echo "  Project is mounted in /usr/src/app inside the container."
