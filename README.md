<div id="top"></div
<!-- PROJECT SHIELDS -->


![Next](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

<br />
<div align="center">

  <h3 align="center">Progressive Web App Grid Memory Game</h3>

  <p align="center">
     A React Progressive Web App of a grid game, with useEffect hook, useState hook, and a custom hook component on a grid of cards for the matching game.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#app-structure">App Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#installation">Deploy</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Built and implemented with:

- Workbox for building progressive web app
- React hooks
- Custom hook

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

![project-demo](https://raw.githubusercontent.com/NatC02/pwa-grid-memory-game/main/README.gif)

### Built with:

- Next
- React
- HTML5
- CSS3

<p align="right">(<a href="#top">back to top</a>)</p>

## App structure 

```
├── node_modules
├── public
│   └── assets
├── src
│   ├── components
│   ├── hooks
│   ├── utilities
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── service-worker.js
│   ├── serviceWorkerRegistration.js
│   └── setupTests.js
├── README.gif
└── README.md
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation & Usage

1. Clone the repo
   ```sh
   https://github.com/NatC02/pwa-grid-memory-game.git
   ```
2. Install npm packages
   ```sh
   npm install
   ```
3. run app locally 
   ```sh
   npm start

### Deploying

1. Install firebase globally
   ```sh
   npm install -g firebase-tools 
   ```
2. Create Firebase account here: https://firebase.google.com/ and create a project

3. build your web app
   ```sh
   npm run build
   ```
4. Setup to host web app on firebase (select your build folder)
   ```sh
   firebase init hosting
   ```
5. Deploy!
   ```sh
   firebase deploy
   ```

<!-- CONTRIBUTING -->

## Acknowledgments

Some of the resources I checked while building this project.

### Resources

- [Next](https://nextjs.org/docs/getting-started)
- [React Hooks](https://natc02.github.io/blog/react-hooks-a-simplistic-overview/)

<p align="right">(<a href="#top">back to top</a>)</p>
