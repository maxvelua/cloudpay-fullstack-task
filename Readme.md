# CloudPay Recruitment Task Javascript fullstack

#### Describe why you implemented certain techniques and technologies

- Techniques:
  I decide to implement this task using my knowledge about creating an admin table in the voluntary project.
  The front-end side was divided, into components, interfaces, and api. When I was building components I tried to make them reusable as much as I can. One one the biggest component table, have an additional service, to store some functions, to make the code cleaner and more readable.
  The back-end side is very simple, it contains one route with a get endpoint, and some services to read and validate the JSON file.

- Technologies:

  - Front-end:

    - React as a task requirement
    - TanStack Table
      Lightweight library for building tables. I used it before for another project, and I like the simplicity and powerful tools that it provides. It also comes without any styling, so it's fully customized
    - axios
      HTTP request library, probably the most known, simple in use

  - Backend:

    - express
      Popular web application framework, also had some experience with it, so I decide to use it here
    - joi
      Schema description languag, was new to me. I used it to validate the JSON data
    - cors
      Use to fix problems with cors
    - dotenv
      Use to load an environment variable (PORT, APP LINK)

  - Typescript as a task requirement
  - Jest
    Testing framework, always use it in a work project
  - concurrently
    To run npm scripts concurrently, used to start a project via one command

#### Discuss pros and cons of your approach

- Props:
  - It was very simple and fast to implement using all those additional libraries that I used
  - I think the project is divided in good way, all components and services are clearly described and are in their own places
- Cons:
  - I think the table component, can be more cleaner and reusable
  - The common interfaces for the back-end and front-end should be stored in one place

#### Identify how the solution could be improved in the future

- More tests should be written for components and services
- Common interfaces should be stored in one place
- Improvements for ui view should also be done

#### Provide installation and test instructions

##### Initial Setup

Check the `.env` file in `client` and `server` folder and setup your own values or use default
You should install dependencies in the `root`, `server`, and `client` folders using `npm install` command

##### Running the application

- To run front-end use:
  `npm client`
- To run back-end use:
  `npm server`
- To run simultaneously:
  `npm start`

##### Unit Tests

- To test front-end use:
  `npm test` in `client` directory.
- To test back-end use:
  `npm test` in `server` directory.

##### Database

- Companies data is stored in `testData.json` file that is located in `server` folder.
