import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/fabianmossberg/asien.git', // Update to point to your repository
  user: {
   name: 'Fabian Mossberg', // update to use your name
   email: 'fabian@mossberg.xyz' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
