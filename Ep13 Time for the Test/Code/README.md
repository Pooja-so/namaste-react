# Food Ordering App Structure

<br> /\*_ Building Food Ordering App _/

<br> /**\* Part 1 - Building Component **
<br> _ Major Components and subcomponents _
<br> 1. Header - Logo - Nav Items (Home, About us, contact us)
<br> 2. Body - Search - Restaurant Container - Restaurant Card - Image, Restaurant name, Rating etc.
<br> 3. Footer - Copyright - Links - Company Address - Company Contact
\*/

## Testing Thoery - Focuses on Developer Testing

- Reason: Why testing is required, when you write even a single line of code, it can introduce bug in any part of your app.

### Major Types of testing a developer can do

1. Manual Testing - Testing the features you have developed manually i.e checking if it is working or not.
2. Writing code Test Cases to testing the code you have written.

### Types Testing (Code base: Test Cases), a developer can perform:

1. Unit Testing - Testing individual React Components in isolation. Testing one unit of ypur code for eg component in react app.
2. Integration Testing - In a large scale application, mutiple components are connected. Testing such a thing to ensure that the integration of components are working correctly is called integrating testing
3. End to End Testing - Testing everything in the app from the moment, the user lands on the website till the user leaves the website. Testing the Simulation what the user will do in the app.

#### As a developer, we are only going to focus on Unit and Integration Testing..

------------------------------------------------------------------------------------------------------------------------
# Disclamer: No interviewer is going to ask all these setup, as it will laready be installed. This is just for the sake of knowing purpose
------------------------------------SETUP and INSTALLATION-----------------------------------------------------------

## Basic Knowledge for library Setup for Testing the app:

1. Install React Testing library - Standard library Used for writing test cases.

- **React Testing library**
- It is built on top of the DOM Testing library by adding APIS for working with the React components.
- It uses JEST behind the scene for writing the Test Cases
  -- Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, React, TypeScript, Angular, Vue, Node, and more!

2. Install JEST library

- Summary: We need 2 libraries: React Testing library and JEST for writing the test cases for testing our app.

### Installation and Setup (From scratch):

1. To get started with React Testing Library, you'll need to install it together with its peerDependency @testing-library/dom:

```bash
npm install -D @testing-library/react @testing-library/dom
```

2. Install JEST

```bash
npm install -D jest
```

3. As we are using JEST with Babel in our project, we need to intsall some other dependencies as well:
   (Go to the JEST documentation > Getting started > Using Babel)

- To use Babel, install required dependencies:

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

4. Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

babel.config.js

```bash
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

### Notes(Problem with our app):

4.1. parcel library uses Babel behind the scenes.

- We have built our app from the scratch using parcel. Now what happens is parcel uses Babel behind the scenes
- And in order to use JEST, we need to make configurations to the Babel which will conflict with our already existing Parcel's Babel configuration.

  4.2. Resolve conflict: Make changing in our Parcel's configurations.
  steps: Parcel documentation > Get Started > search (top-right corner) : type jest > Click on Javascript. or
  Steps: Parcel documentation > Get Started > (sidebar) Languages > Javascript > Babel(read it)

  4.3. In order to make the Babel configuration for the JEST to work,
  we need to disable Parcel's default Babel Configuration.
  Steps: Parcel documentation > Get Started > (sidebar) Languages > Javascript

  > (Right side (on this page)) Babel(read it) > Usage with other tools (code)
  > Create a new file .parcelrc and then copy the code in it.
  > Code:

  ```bash
   {
   "extends": "@parcel/config-default",
   "transformers": {
       "*.{js,mjs,jsx,cjs,ts,tsx}": [
       "@parcel/transformer-js",
       "@parcel/transformer-react-refresh-wrap"
       ]
   }
   }
  ```

  Reference: https://parceljs.org/languages/javascript/#babel
  Imp: This will allow other tools to continue using your Babel config, but disable Babel transpilation in Parcel.

### Run the Teast cases: (Always prefer package.json for viewing which command to run)

```bash
npm test
```

Note: If says "No tests found, exiting with code 1" then, horray configuration is successfull

5. JEST Configuration
   -> Initialize JEST configuration

```bash
npm init jest@latest
```

-> Choose the steps:
a. Typescript: No,
b. Test Environment: jsdom(browser-like)

#### Note:

- Test cases runs neither in the browser nor on the server. We will use jsdom for that.
- jsdom is not a browser. It provides a browser-like environemnt in which our test-cases will run.
  c. Use coverage report: yes
  d. coverage instrument: babel
  e. Automatically clean mock calls: Yes
  -> Result: jest.config.js file will get created.

6. Install jsdom library

- Reference: React Testing Library docs > Frameworks > React Testing Library > Setup > jest 28 (Right side page serach)
- Note: Jest 28
  If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.

```bash
npm install --save-dev jest-environment-jsdom
```

7. Enable React Testing library to Test .jsx Components
- Reason for adding: Support for the experimental syntax 'jsx' isn't currently enabled
- Add @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.

```bash
npm install -D @babel/preset-react
```
- This library will help React Testing Library to convert(transform) the JSX components into HTML so that the browser can understands it while testing.
- Include @babel/preset-react inside babel.config.js 

```bash
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
}
```
8. Install dependency for jest library
```bash
npm i -D @testing-library/jest-dom
```

### Give Installation and Setup for vite-react app in proper steps-wise structured manner.

-----------------------------------WRITTING TEST CASES------------------------------------------------------

1. create folder "**tests**" under /components (where you have kept all your components)

- All files under this folder will be treated as test files.
- If you don't want to create this folder. Create file with extension
  .test.js or .test.ts or .spec.js or .spec.ts
- Here "\_\_" (2 underscores) means dunder test (Why we use? Assumption, so that nobody accidently creates the folder
  with the same name)

2. Syntax for writing test case:
   Inside sum.test.js
   Syntax: test(description, callbackfun)
   where description: Description of what we are testing
   callbackFun: Code used for performing testing

```bash
test("Sum function should calculate the sum of the 2 numbers", () => {
  const result = sum(3,4);
  expect(result).toBe(7); // this line is called assertion
})
```

Now run the test cases:

```bash
npm run test
```

## Remember (Point on Testing):

1. Whenever you are testing a React component, first of you'll need to render/load that component onto the jsDom first. (jsDom is a library that provides browser-like environment for testing.)

- Code example, refer contact.test.js were we are testing whether ContactUs Component get loaded onto the page or not.

## Core Methods with it properties and functions of React Testing Library that need to be studided

> What it do and how it is use

1. render
2. screen
