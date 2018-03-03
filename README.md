# RPG Manager Client App ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Instructions to run it locally

```
  # Install dependencies
  $ yarn
```

```
  # Run devserver with hot reload
  $ yarn start
```

```
  # Run tests on jest
  $ yarn test
```

```
  # Type checks js code with flow
  $ yarn flow

  # Keeps type checking js code with flow on watch mode
  $ yarn flow:watch

  # Generate flow types for css modules
  $ yarn css-types

  # Keeps generating flow types for css modules
  $ yarn css-types:watch

  # Keeps generating flow types for css modules and type checking js code
  $ yarn flow:css-types:watch
```

```
  # Build for production deploy
  $ yarn build
```

## Instructions to run it with docker

You need to have docker and docker-compose installed and then run:

```
  $ docker-compose up
```

And all just works. Hope you enjoy!

Bellow is the production link to the client app running on heroku free servers:

[production rpg-manager](https://rpg-manager.herokuapp.com/api/character/)
