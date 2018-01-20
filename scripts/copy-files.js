const fs = require('fs-extra');
const path = require('path');

const copyFiles = () => {
  console.log('\nCopying files...');

  const index = fs.copy(path.resolve(__dirname, '../index.html'), path.resolve(__dirname, '../dist/index.html'));
  const favicon = fs.copy(path.resolve(__dirname, '../assets/favicon.ico'), path.resolve(__dirname, '../dist/favicon.ico'));
  const manifest = fs.copy(path.resolve(__dirname, '../assets/manifest.json'), path.resolve(__dirname, '../dist/manifest.json'));
  const cname = fs.copy(path.resolve(__dirname, '../config/CNAME'), path.resolve(__dirname, '../dist/CNAME'));
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

copyFiles().then(() => {
  console.log('Files copied.');
}).catch((err) => {
  console.error('Error copying files: ', err);
});
