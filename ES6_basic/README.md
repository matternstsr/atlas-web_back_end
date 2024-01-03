# ES6 Basics

## Novice Level

### Overview
This project focuses on fundamental concepts of ECMAScript 6 (ES6) and aims to enhance your understanding of new features introduced in ES6. The key topics include software linting, arrow functions, default parameters, rest parameters, iterators, and more.

### Concepts
- **Software Linter**
  - Familiarize yourself with ECMAScript 6 (ES6) features.
  - Understand statements and declarations.
  - Learn about arrow functions, default parameters, and rest parameters.
  - Explore ES6 Iterables and Iterators.

### Learning Objectives
Upon completion of this project, you should be able to explain the following concepts without relying on external resources:
- What ES6 is.
- New features introduced in ES6.
- The difference between a constant and a variable.
- Block-scoped variables.
- Arrow functions and their default parameters.
- Rest and spread function parameters.
- String templating in ES6.
- Object creation and properties in ES6.
- Iterators and for-of loops.

### Requirements
- Your code should run on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- Include a mandatory README.md file at the root of the project folder.
- Use the .js extension for your code files.
- Testing will be performed using the Jest Testing Framework.
- Lint your code using ESLint with specific rules provided.

### Setup
1. Install NodeJS 12.11.x in your home directory:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v
    npm -v
    ```

2. Install Jest, Babel, and ESLint in your project directory:
    ```bash
    npm install --save-dev jest
    npm install --save-dev babel-jest @babel/core @babel/preset-env
    npm install --save-dev eslint
    ```

### Configuration Files
- **package.json**
  - Include Jest, Babel, and ESLint configurations.

- **babel.config.js**
  - Configure Babel settings.

- **.eslintrc.js**
  - Configure ESLint rules.

### Task 0: Const or Let?
Modify the `taskFirst` and `taskNext` functions to instantiate variables using `const` and `let`, respectively.

### Task 1: Block Scope
Modify the `taskBlock` function to prevent variable overwriting inside the conditional block.

### Task 2: Arrow Functions
Rewrite the `getNeighborhoodsList` function to use ES6 arrow syntax.

### Task 3: Parameter Defaults
Condense the `getSumOfHoods` function internals to one line using default parameter values.

### Task 4: Rest Parameter Syntax
Modify the `returnHowManyArguments` function to return the number of arguments using the rest parameter syntax.

### Task 5: The Wonders of Spread Syntax
Concatenate two arrays and each character of a string using spread syntax in the `concatArrays` function.

### Task 6: Take Advantage of Template Literals
Rewrite the `getSanFranciscoDescription` function using template literals.

### Task 7: Object Property Value Shorthand Syntax
Modify the `getBudgetObject` function to use object property value shorthand syntax.

### Task 8: No Need to Create Empty Objects
Rewrite the `getBudgetForCurrentYear` function using ES6 computed property names.

### Task 9: ES6 Method Properties
Rewrite the `getFullBudgetObject` function to use ES6 method properties in the `fullBudget` object.

### Task 10: For...of Loops
Rewrite the `appendToEachArrayValue` function using ES6’s for...of operator.

### Task 11: Iterator
Write a function `createEmployeesObject` that returns an object with department names and corresponding employee lists.

### Task 12: Let's Create a Report Object
Write a function `createReportObject` that returns an object containing all employees and a method to get the number of departments.

### Execution Example
```bash
$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);
