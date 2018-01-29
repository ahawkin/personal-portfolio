# Personal Portfolio

[![CircleCI](https://circleci.com/gh/ahawkin/personal-portfolio/tree/master.svg?style=shield&circle-token=51c1272168ded9e1a7db6f09befdd249e32bbc2d)](https://circleci.com/gh/ahawkin/personal-portfolio/tree/master)

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

## CI & Deployment
CirleCI is used to test, build and then deploy a new version to the `gh-pages` branch automatically when changes are made to `master`. For `pull requests` only the test and build stages are run.

Deployment can also be done manually by running

    npm run deploy
