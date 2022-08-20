# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

- Download and install Docker.
- Verify docker was successfully install: `docker -v` and `docker-compose -v`
- From the root of the project run `docker-compose up` to start the project.
- Go to http://localhost:3000/api/ping to verify BE is working.
- Go to http://localhost:3001/register to verify FE is working.

