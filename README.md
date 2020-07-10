![picture alt](./images/cietlogo.png "CI&T Logo")

# QA Challenge CI&T
[![E2E library: Cypress](https://img.shields.io/badge/E2E%20Framework-Cypress-blue)](https://www.cypress.io/)

---

## All the test scenarios are located on feature files

## Execution

### Prerequisites

- [Git](https://git-scm.com/download/) an [Node.js](https://nodejs.org/en/download/) installed.

### Installing the dependencies and running the tests

All the commands below are executed in the command _prompt_.

**1** - Clone the repository and access the created directory:

```sh
git clone https://github.com/pedrohnsc/desafio-ci-t-cypress-.git && cd desafio-ci-t-cypress
```

**2** - Install the necessary dependencies to run the tests:

```sh
npm install
```

**3** - You can choose to open GUI Tests or Headless tests, to run with GUI Test, type the following command, and after this, choose what spec you want to run:

```sh
npm run open
```

**4** - To run Headless Mode, type:

```sh
npm run cypress:run
```
---
[Licença MIT](/LICENSE)