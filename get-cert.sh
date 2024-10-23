#!/bin/sh

WORK='certbot'
LOGS="${WORK}/log"
CONF="${WORK}/config"
DOMAIN="${DOMAIN:-example.com}"

./python3-venv/bin/certbot certonly \
  --agree-tos \
  --config-dir "$CONF" \
  --logs-dir "$LOGS" \
  --work-dir "$WORK" \
  --dns-ovh \
  --dns-ovh-credentials ovh.ini \
  --dns-ovh-propagation-seconds 30 \
  --register-unsafely-without-email \
  -d "$DOMAIN" \
  -n # noninteractive

