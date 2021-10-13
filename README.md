# Nest Twitter API

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/joaodath/nest-twitter)
[![Lines of Code](https://img.shields.io/tokei/lines/github/joaodath/nest-twitter)](https://img.shields.io/tokei/lines/github/joaodath/nest-twitter)
[![Repo Size](https://img.shields.io/github/repo-size/joaodath/nest-twitter)](https://img.shields.io/github/repo-size/joaodath/nest-twitter)
![CodeQL](https://github.com/joaodath/nest-twitter/actions/workflows/codeql-analysis.yml/badge.svg)

This project mimics how I imagine Twitter backend behaves using NestJS and persisting data using MySQL. This is nowhere an attempt to recreate Twitter, but simply a studying project. 

## Installation

Then, open the folder containing this code and run on terminal:
First things first, you need to download and install all depedencies needed to 
run this project. To do that, you need to run the following command:

> You'll need NodeJS and NPM installed beforehand.

```
npm install
```
After that, copy the `.env.example` file to create your environment variables.
You can do that from terminal using the following command (or do that using
the GUI of your code editor):

```
cp .env.example .env
```

Open `.env` and fill in the data needed. To create your `SECRET_JWT` key (RSA256 key), you can run
the following commands on your terminal (linux only):

```
ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
# Don't add passphrase
openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
cat jwtRS256.key
```

Copy the output from the `cat` command and paste it on `SECRET_JWT` inside the
`.env` file.

Then, you need to connect to your database, migrate the schema and generate 
your Prisma Client. Run the following command:

```
npx prisma migrate dev --name init
```


## Running the app

```
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Endpoints

_to be defined_

You can also find a file named `collection-insomnia.json` which contains the same endpoints ready to import on Insomnia.

## You should know
This project uses [commitlint](https://github.com/conventional-changelog/commitlint) to enforce a conventional format on all commits. So, if you fork or clone this repo, it will install commitlint as dev dependency too and affect how you create commits, even if it's against your own repo. _You can change this behavior on `package-lock.json`._

## Let's chat!
- Twitter: [@joaodath](https://twitter.com/joaodath)

- LinkedIn: [João Rodrigues](https://linkedin.com/in/joaodath)

## License

This API is [MPLv2 licensed](LICENSE).
