# Popular Concert Venue

### An app to support the Udemy course [Testing Next.js Apps](https://www.udemy.com/course/nextjs-testing/)

## Installation

1. Run `npm install`
1. Run `cp .env.development.local_template .env.development.local`
1. Run `cp .env.test.local_template .env.test.local`
1. Run `cp .env.local_template .env.local`
1. In _.env.local_ and _.env.test.local_:

- add long, hard-to-guess strings as the values for `NEXTAUTH_SECRET` and `REVALIDATION_SECRET`

  - command to generate a random string: `openssl rand -base64 32`
  - command to generate a random string: `openssl rand -hex 32` 

## Running the App

Run `npm run dev`. The app will be found at [http://localhost:3000]

## Users of the App

test@test.test / test : with existing reservations
test2@test.com / test : without existing reservations

## Important help

`npm i -D env-cmd` Allow to specify a file for environment variable before running a command package
`npm run dev`
`npm run test`

## Cypress help

`npm run build`
`npm run start`
`npm run cypress`

## Settingup Cypress environment variable

`nano /Users/qasirmehmood/.zprofile` Open file with nano
`export PATH=$HOME/bin:/usr/local/bin:$PATH:node_modules/.bin` add path in .zprofile
`source ~/.zprofile`
`which cypress` Prompt path of cypress `node_modules/.bin/cypress`
`cypress open` run cypress