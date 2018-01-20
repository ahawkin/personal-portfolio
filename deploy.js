const fs = require('fs-extra');
const ghpages = require('gh-pages');
const path = require('path');

const copyFiles = () => {
  const index = fs.copy(path.resolve(__dirname, './index.html'), './dist/index.html');
  const favicon = fs.copy(path.resolve(__dirname, './favicon.ico'), './dist/favicon.ico');
  const manifest = fs.copy(path.resolve(__dirname, './manifest.json'), './dist/manifest.json');
  const assets = fs.copy(path.resolve(__dirname, './assets/'), './dist/assets');

  return Promise.all([index, favicon, manifest, assets]);
};

const deploy = () => {
  copyFiles().then(() => {
    console.log('Files copied.');
    ghpages.publish('dist', {
      message: 'New build deployed: https://adamhawkin.co.uk/',
      branch: 'gh-pages',
      repo: 'https://github.com/ahawkin/personal-portfolio.git',
    }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Deploy successful.');
      }
    });
  });
};

deploy();
