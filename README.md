# Personal Portfolio

[![CircleCI](https://circleci.com/gh/ahawkin/personal-portfolio.svg?style=svg)](https://circleci.com/gh/ahawkin/personal-portfolio)

My personal portfolio website running on GitHub Pages: http://adamhawkin.co.uk/

## Requirements
- Node ~8.9
- Npm ~5.6

## Setup
Installing the project dependencies

    npm install

Installing global dependencies

    npm install eslint sass-lint -g

## Development  
To start locally run

    npm run dev

then navigate to `localhost:8080`

## Testing
**Todo**
- Add Jest and Enzyme
- 100% coverage

## Linting
To run `eslint` and `sass-lint`

    npm run lint

## Build
To build a production version run

    npm run build

then navigate to `dist` and open `index.html`

## Deploy
To build and deploy to production run

    npm run deploy
