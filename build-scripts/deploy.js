const fs = require('fs-extra');
const path = require('path');
const ghpages = require('gh-pages');

const copyFiles = () => {
  console.log('\nCopying files...');

  const index = fs.copy(path.resolve(__dirname, '../index.html'), path.resolve(__dirname, '../dist/index.html'));
  const favicon = fs.copy(path.resolve(__dirname, '../assets/favicon.ico'), path.resolve(__dirname, '../dist/favicon.ico'));
  const manifest = fs.copy(path.resolve(__dirname, '../assets/manifest.json'), path.resolve(__dirname, '../dist/manifest.json'));
  const cname = fs.copy(path.resolve(__dirname, '../assets/CNAME'), path.resolve(__dirname, '../dist/CNAME'));
  const files = fs.copy(path.resolve(__dirname, '../assets/files'), path.resolve(__dirname, '../dist/assets/files'));
  const images = fs.copy(path.resolve(__dirname, '../assets/img'), path.resolve(__dirname, '../dist/assets/img'));

  return Promise.all([
    index,
    favicon,
    manifest,
    cname,
    files,
    images,
  ]);
};

const deploy = () => {
  copyFiles().then(() => {
    console.log('Files copied.');
    console.log('\nDeploying to GitHub Pages...');

    ghpages.publish('dist', {
      message: 'New build deployed: http://adamhawkin.co.uk/',
      branch: 'gh-pages',
      repo: 'https://github.com/ahawkin/personal-portfolio.git',
    }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Deploy successful -> http://adamhawkin.co.uk/');
      }
    });
  });
};

deploy();
