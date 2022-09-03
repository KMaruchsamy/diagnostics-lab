# DiagnosticsLab

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## DiagnosticsLab Web Apps

Table of contents

- Introduction
- Technologies
- Unit test case & lint
- Code Coverage
- Steps to run the application in local
- Resiliencies

## Introduction

> Registration : Admin should have access to add 'N' no of users in the portal and should be able to add 'N' no of address to the particular user with default address, The default address can't be deleted (pincode === 123456).
> User Details : Admin should have access to view all the users in the user details tab with default address, should have access to delete the user.

## Technologies

- Angular 14.1.0
- Nrwl Nx Architecture 14.15.10 - Microsite / Monorepo pattern
- Ngrx - 14.3.0 - for Application State Management
- Additional packages - uuid to generate unique id for user and address

## Unit test case & lint

> Unit test case : Testing small and isolated pieces of code, which helps you to add new features without breaking an existing functionality.

- nx run-many --target=test

> Lint : It checks the code quality

- nx run-many --target=lint

## Code Coverage

It helps which parts of your code are executed by running the unit and integration tests. Steps to run and generate the coverage report

- nx run-many --target=test --codeCoverage

coverage folder will be generated in project directory, In our case we have two index files were created one for apps and other one for libs

- diagnostics-lab/coverage/apps/identity/index.html
- diagnostics-lab/coverage/libs/identity-auth/index.html

I have achieved code coverage 90% - 97% for diagnostics-lab.

## Steps to run the application in local

Require node version to run the application in your local - v16.14.0

- build : nx build
- serve : nx serve
- app will serve in http://localhost:4200

## Resiliencies

- Username field accepts only alphabetical characters, max length 20 and required field.
- Email field accepts only valid email, max length 30.
- City field accepts only alphabetical characters, max length 20 and required field.
- State field acceptsonly alphabetical characters, max length 20 and required field.
- Pincode field accepts only numbers, max length 6 and required field.
- Resiliency message for add user and add address.
- Resiliency message for adding address before user registration.
- Resiliency message for default addresses can not be deleted.
- Resiliency message, if no address is found.
- Resiliency message for deleting address.

## Demo

[Demo](https://kmaruchsamy.github.io/diagnostics-lab/user)
