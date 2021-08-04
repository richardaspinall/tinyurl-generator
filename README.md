# TinyURL Generator

> **Date started**: 11 April 2021

> **Date ended**: 24 April 2021

## Description

Create TinyURLs

---

## Pre-requisites

- Node (https://nodejs.org/en/)
- NPM (https://www.npmjs.com/)
- MongoDB (https://www.mongodb.com/)
- NGROK (https://ngrok.com/)

## Install & Configure

1. Run `npm install`
2. Run `ngrok http 3000` to create a tunnel from a public URL to your localhost (https://ngrok.com/docs). _Note:_ you can add a `-region` flag to create a local server for low latency https://ngrok.com/docs#global-locations
3. Edit `settings.request_url` in the `slack-manifest.json` with your public URL
4. Create a Slack app here: https://api.slack.com/apps/new choosing **From an app manifest** and add the JSON from `slack-manifest.json`
5. Install the app and note the **Bot User OAuth Token**
6. Create a `.env` file and add the following variables:
   - `DB_CONNECTION` – Connection URL for connecting to MongoDB
   - `REQUEST_URL` – your public domain for Slack to send requests to
   - `BOT_TOKEN` – generated from Slack when app is installed (found on the **Install App** tab)
   - `SIGNING_SECRET` - generated on the **Basic Information** tab

```
// .env
DB_CONNECTION=
REQUEST_URL=
BOT_TOKEN=
SIGNING_SECRET=
```

## Usage

1. Run `ngrok http 3000` (ensuring your public URL in the Slack config and `.env` matches – see **Install & Configure**)
2. Run `npm run start` in another terminal window
3. In Slack click the lightning bolt next to the input and search for `tinyurl-generator`
4. Enter a URL and submit
