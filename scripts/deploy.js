const ghpages = require('gh-pages');

const deploy = () => {
  console.log('\nDeploying to GitHub Pages...');

  ghpages.publish('dist', {
    message: 'New build deployed -> http://adamhawkin.co.uk/',
    branch: 'gh-pages',
    repo: 'https://github.com/ahawkin/personal-portfolio.git',
  }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Deploy successful -> http://adamhawkin.co.uk/');
    }
  });
};

deploy();
