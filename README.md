# Youtube-test


[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[Live demo](https://youtube-test-b3ec8.firebaseapp.com)

### Directory Layout

```shell

├── /app/                       # Development work
│   ├── /components/            # Shared or generic UI components
│   ├── /config/                # Core framework
│   │   ├── /constants.js       # Mock response and other constants
│   │   ├── /routes.js          # Handles routing 
├── /containers/                # React component containers that have only business logic and render stateless functional components
├── /json/                      # ajax apis
├── /helpers/                   # Helper functions/utilities
│   ├── api.js                  # Fetch data
├── /redux/                     # Redux
│   ├── /modules/               # Actions + reducers
├── /sharedStyles/              # Shared styles
│   ├── /styles.css/            # The  css file
├── /node_modules/              # 3rd-party libraries and utilities
├── .babelrc                    # Utility and helper classes
├── .eslintrc                   # Utility and helper classes
│── README.md                   # This file that you are reading
│── package.json                # The list of project dependencies and NPM 
└── webpack.config.babel.js     # Bundling and optimization settings for Webpack
```

## Stack

### Framework
- React
- Redux
- React-router

### Plugins
- Babel
- Immutable - **make states immutable and having performance benefits**
- Redux-thunk - **function blocks of actions**
- React-router-redux - **add url to redux store**
- React-typeahead - **auto complete**
- Axios - **ajax requests**
- JSONP - **jsonp ajax requests to avoid cross origin issues**

#### Bundling/Server
- Webpack
- Webpack-server
- Css modules - **modular css/scss for components**
- Hot modules replacement

### Code Quality Control
- Eslint
- Eslint-plugin-standard - **personal preference**

### Installation

This app requires [Node.js](https://nodejs.org/) v4+ to run.

Clone or download this project.

Install the dependencies and devDependencies and start the server.

```sh
$ cd youtube-test
$ npm install
$ npm run start
```

Go to browser: localhost:8080

### Todos

 - Add tests
 - UI/UX improvements
 - sri integrity
 - universal ajax
 - ajax error handling

License
----

MIT