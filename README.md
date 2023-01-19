## HABIT TRACKER 🕵🏻‍♂️

## Features

Add multiple habits to track like reading a book, going to the gym etc<br/>
Track each habit everyday. These are the 3 statuses of a habit:<br/>
Done - Mark the habit as done for a day<br/>
Undone - Mark the habit as not done for a day<br/>
None - User did not take any action on a habit for a day<br/>
A view to show all current habits.Given an add button where we can add a new habit to track.<br/>
We can toggle between the three (above mentioned) statuses of a habit i.e. I can change today’s status as done, undone or none anytime.<br/>
Also we should be able to change any of the previous days status i.e. we can change the status of a habit for yesterday, day before yesterday or any previous 6 days as well.<br/>

## Links

Video Link: https://youtu.be/Menu-EeEOcA
Host link: https://shubham13101996.github.io/Habit_Tracker/

## Approach

use Redux To centralized the state so that each and every components can access the state from store when required.<br/>
Redux has 3 main contrubitors i.e. Actions, Reducers, Store.<br/>
Actions are plain javascript objects with a type field. In other words, you can
think of an event that describes what happened in the app. Actions are the
only source of information for the store. It carries a payload of information
from the app to the store.<br/>
Reducers are pure functions in Redux. Pure functions can be predicted
easily. Reducers are the only way to change states in Redux. This is the only
place where you can write calculations and logic. The reducer function
accepts the previous state of the application and the action calculates the
next state and returns the new object.<br/>
The store is the immutable object tree in Redux. The store is the state
container that holds the state of the application. Your app only has one store
of Redux. Whenever you create a store on Redux, you must specify the
reducer.<br/>
Use "createStore" from redux to create the store.<br/>
Use "combineReducer" from redux : it turns an object whose values are different reducer functions, into a single reducer function. It will call every child reducer, and gather their results into a single state object, whose keys correspond to the keys of the passed reducer functions and return a reducer function that invokes every reducer inside the passed object, and builds a state object with the same shape.<br/>
Use "<Provider>" from react-redux to pass the store as prop to make the store globally accesesble by all component.<br.>
Use "BrowseRouter" from react-router-dom for Routing Functionality<br/>
Use "useSelector": A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state and returns —> the selected state<br/>
Use "useDispatch": A hook to access the redux dispatch function and returns-> redux store's dispatch function<br/>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
