# sms-to-url-receiver
Tiny NodeJS server for receiving payloads from [SMS to URL Forwarder](https://github.com/bogkonstantin/android_income_sms_gateway_webhook)

## Requirements
  - `nodejs` (relatively new, tested with `v20.18.0`)
  - `python3` with `venv` module
  - Credentials for [OVH API](https://www.ovh.com/auth/api/createToken) in file `ovh.ini`

## Installation and usage
  1. Setup the credentials file `ovh.ini` for [OVH API](https://www.ovh.com/auth/api/createToken)
  2. `npm i`
  3. `DOMAIN=example.com ./get-cert.sh`
  4. `DOMAIN=example.com PORT=10888 npm start` to start server:
  ```
    Waiting for connections on https://example.com:10888
    ┌──────────┬────────────────────────┐
    │ (index)  │ Values                 │
    ├──────────┼────────────────────────┤
    │ sent     │ '23/10/2024, 11:08:39' │
    │ received │ '23/10/2024, 11:08:41' │
    │ from     │ '+358404770945'        │
    │ text     │ 'Test message'         │
    │ sim      │ 'sim1'                 │
    └──────────┴────────────────────────┘
  ```
  5. *(optional)* test

  ```sh
    curl -X POST -d '{"from":"1234567890","sentStamp":1729672155945,"receivedStamp":1729672755945,"text":"Test"}' https://example.com:10888
  ```
