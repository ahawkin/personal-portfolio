const fs = require('fs-extra');
const ghpages = require('gh-pages');
const path = require('path');

const copyIndex = () => fs.copy(path.resolve(__dirname, './index.html'), './dist/index.html')
  .then(() => console.log('Copied: index.html'))
  .catch(err => console.error(err));

const copyAssets = () => fs.copy(path.resolve(__dirname, './assets/'), './dist/assets')
  .then(() => console.log('Copied: assets'))
  .catch(err => console.error(err));

const deploy = () => {
  copyIndex().then(() => {
    copyAssets().then(() => {
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
  });
};

deploy();
