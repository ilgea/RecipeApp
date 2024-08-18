# Project : Recipe App

## Description

Project aims to create a Recipe App.

## Problem Statement

- We are adding a new project to our portfolios. So you and your colleagues have started to work on the project.

## Project Skeleton

```
└── 📁recipe-app
    └── 📁public
        └── index.html
    └── 📁src
        └── 📁assets
            └── coding.svg
            └── default-image.jpg
            └── diet.svg
            └── home.svg
            └── mail.svg
            └── meal.svg
            └── meal2.svg
        └── 📁auth
            └── firebase.js
        └── 📁components
            └── 📁card
                └── Card.jsx
                └── Card.style.jsx
            └── 📁globalStyles
                └── Container.style.jsx
                └── FlexStyled.jsx
                └── GlobalStyles.jsx
                └── theme.js
            └── 📁header
                └── Header.jsx
                └── Header.style.jsx
            └── 📁navbar
                └── Navbar.jsx
                └── Navbar.style.jsx
        └── 📁context
            └── LoginProvider.jsx
        └── 📁pages
            └── 📁about
                └── About.jsx
                └── About.style.jsx
            └── 📁details
                └── Details.jsx
                └── Details.style.jsx
            └── 📁home
                └── Home.jsx
                └── Home.style.jsx
            └── 📁login
                └── Login.jsx
                └── Login.style.jsx
                └── Register.jsx
        └── 📁router
            └── AppRouter.jsx
            └── PrivateRouter.jsx
        └── App.js
        └── index.js
    └── .env
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── README.md
    └── yarn.lock

```

## Expected Outcome

<p align="center">
<a href="#"><img src="recipe-app.png" alt="screenshot"></a>
</p>

## Links

<p align="left">
<b>Check The Live Website ➡️</b> <a href="https://newrecipesapp.netlify.app">Live Website</a>
</p>
<hr>

## Objective

Build a Recipe App using ReactJS.

### At the end of the project, following topics are to be covered;

- HTML

- CSS

- JS

- ReactJS

- firebase authentication

### At the end of the project, students will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `yarn create react-app recipe-app`or `npx create-react-app recipe-app`

- Step 2: Signup `https://developer.edamam.com/edamam-docs-recipe-api` and get api key.

- Step 3 : Using api key and `axios` for getting data from `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`.

- Step 4: You are expected to code your project with **styled component**

- Step 5 : You can get random login background image from `https://picsum.photos/1600/900`

- Step 6: Add project gif to your project and README.md file.

## Notes

- You can add additional functionalities to your app.

**<p align="center">&#9786; Happy Coding &#9997;</p>**

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
