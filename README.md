# Justdial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Why do we need a service in Angular

A service in Angular is generally used when you need to reuse data or logic across multiple components. Anytime you see logic or data-access duplicated across multiple components, think about refactoring that piece of logic or data-access code into a service. Using a service ensures we are not violating one of the Software principles - DRY ((Don't repeat yourself). The logic or data access is implemented once in a service, and the service can be used across all the components in our application. 

Without the service you would have to repeat your code in each component. Imagine the overhead in terms of time and effort required to develop, debug, test and maintain the duplicated code across multiple places instead of having that duplicated code at one central place like a service and reusing that service where required.

## What is an Observable 


1. Observable is an asynchronous pattern. In the Observable pattern we have an Observable and an Observer. Observer observes the Observable. In many implementations an Observer is also called as a Subscriber.

2. An Observable can have many Observers (also called Subscribers).

3. Observable emits items or notifications over time to which an Observer (also called Subscriber) can subscribe.

4. When a subscriber subscribes to an Observable, the subscriber also specifies a callback function.

5. This subscriber callback function is notified as and when the Observable emits items or notifications.

6. Within this callback function we write code to handle data itmes or notifications received from the Observable.


## Working

User will register into the system and the signup is handled using the AuthService .<br/>
The user can search for the funactionality and that too is handled by the AuthSErvice . <br/>
As this is a multipurpose website user can check restaurants, home services, movies, and online shoppping .<br/>
We are storing the session of user using sessionStorage.<br/>
Database used is mongodb and fetched using MongoClient(Nodejs library that handles connecting to and interacting with a MongoDB database.).


