const fs = require('fs-extra');
const path = require('path');

const copyFiles = () => {
  console.log('\nCopying files...');

  const favicon = fs.copy(path.resolve(__dirname, '../assets/favicon.ico'), path.resolve(__dirname, '../dist/favicon.ico'));
  const manifest = fs.copy(path.resolve(__dirname, '../assets/manifest.json'), path.resolve(__dirname, '../dist/manifest.json'));
  const cname = fs.copy(path.resolve(__dirname, '../config/CNAME'), path.resolve(__dirname, '../dist/CNAME'));
  const files = fs.copy(path.resolve(__dirname, '../assets/files'), path.resolve(__dirname, '../dist/assets/files'));
  const images = fs.copy(path.resolve(__dirname, '../assets/img'), path.resolve(__dirname, '../dist/assets/img'));
  const circleci = fs.copy(path.resolve(__dirname, '../circleci'), path.resolve(__dirname, '../dist/circleci'));

  return Promise.all([
    favicon,
    manifest,
    cname,
    files,
    images,
    circleci,
  ]);
};

copyFiles().then(() => {
  console.log('Files copied.');
});
