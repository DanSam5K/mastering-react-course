# Welcome To React and Installation

In this chapter, we will learn about the basics of React and how to install it. We will also learn about the React Developer Tools and how to use them to debug React applications.

- [What is React?](#what-is-react)
- [Why React?](#why-react)
- [React Developer Tools](#react-developer-tools)
- [Install Node.js](#install-nodejs)
- [Installing React](#installing-react)
- [Creating a React App](#creating-a-react-app)
- [Summary](#summary)

## What is React?

React is a JavaScript library for building user interfaces. It was created by Facebook in 2013 and is now maintained by Facebook and a community of individual developers and companies. React is used to build single-page applications (SPAs) and mobile applications. It is based on the concept of components, which are reusable pieces of code that can be used to build user interfaces.

## Why React?

React has several advantages over other JavaScript libraries and frameworks:

- **Declarative:** React makes it easy to build interactive user interfaces by using a declarative programming model. This means that you can describe how your UI should look and React will take care of updating the DOM to match the desired state.

- **Component-Based:** React is based on the concept of components, which are reusable pieces of code that can be used to build user interfaces. Components can be composed together to create complex UIs.

- **Virtual DOM:** React uses a virtual DOM to improve performance. When the state of a component changes, React updates the virtual DOM and then compares it to the real DOM to determine the minimum number of changes needed to update the UI.

- **React Native:** React can be used to build mobile applications using React Native. React Native allows you to build native mobile apps using JavaScript and React.

## React Developer Tools

The React Developer Tools is a browser extension that allows you to inspect the React component hierarchy, including component props and state. You can also view and edit the component tree, view the component source code, and inspect the component's context.

The React Developer Tools is available for [Chrome](https://oreil.ly/Or3pH), [Firefox](https://oreil.ly/uw3uv), and Edge. You can install it from the Chrome Web Store, Firefox Add-ons, or the Edge Add-ons store.

## Install Node.js

Before you can install React, you need to install Node.js, which is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. You can download Node.js from the official website at [nodejs.org](https://nodejs.org/).

## Installing React

You can install React using npm or yarn. To install React using npm, run the following command:

```bash
npm install react react-dom
```

To install React using yarn, run the following command:

```bash
yarn add react react-dom
```

## Creating a React App

You can create a new React app using Create React App, which is a tool that sets up a new React project with a sensible default configuration. To create a new React app, run the following command:

```bash
npx create-react-app my-app
```

Replace `my-app` with the name of your app. This will create a new directory called `my-app` with a new React project inside it.

## Summary

In this chapter, we learned about the basics of React and how to install it. We also learned about the React Developer Tools and how to use them to debug React applications. In the next chapter, we will learn about JSX, which is a syntax extension for JavaScript that allows you to write HTML-like code in your React components.

# References

- [React Documentation](https://reactjs.org/)
- [React blog](https://reactjs.org/blog/)
- [React Developer Tools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)
- [Create React App](https://create-react-app.dev/)
- [React Native](https://reactnative.dev/)