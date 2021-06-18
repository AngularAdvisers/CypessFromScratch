# CypressFromScratch
Cypress from scratch for Angular 12

# [YouTube Video](https://youtu.be/Fd1W_afy83c)
[![1_u8RQEZTRROU-ByHbqQyUUg](https://user-images.githubusercontent.com/54124010/122487737-2dc89c80-cf99-11eb-8f10-9c93c270c854.png)](https://youtu.be/Fd1W_afy83c)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Install Cypress End-to-End Testing framework

### Install the Cypress package

### NPM

```
npm install cypress --save-dev
```

### Yarn

```
yarn add cypress --dev
```

### Create Cypress Open Command

Replace the e2e with a cypress open command in the scripts section of our package.json

```
"cypress:open": "./node_modules/.bin/cypress open"
```

### Make sure that the following Cypress folders are added to testPathIgnorePatterns in package.json

```
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/",
      "<rootDir>/src/test.ts",
      "<rootDir>/cypress/",
      <rootDir>/src/environments/
    ],
```

### Modify tsconfig.base.json

Add "types": ["cypress"], to the tsconfig.json file.

```
{
  "compileOnSave": false,
  "compilerOptions": {
    ...
    "target": "es2015",
    "types": ["cypress"],
  }
  ...
}
```

Add Exclude at bottom

```
  "exclude": [
    "**/*.spec.ts"
  ]
```

## Run Cypress

### NPM

```
npm run cypress:open
```

### Yarn

```
yarn cypress:open
```

After Cypress first run, it will create a cypress folder in the root directory. Move the examples folder from cypress/integration to cypress folder.

Move the example folder located at cypress\integration\examples to the cypress\examples folder

Create the file initial-page.spec.ts in the cypress/integration folder and add the following:

```
describe('initial-page', () => {

  beforeEach(() => {
    cy.visit("localhost:4200/");
  })

  it(`has title 'angular-advisors-mirage'`, () => {
    cy.contains('angular-advisors-mirage');
    cy.get('h1').should('contain', 'angular-advisors-mirage');
    cy.title().should('eq', 'AngularAdvisorsMirage');
  })

})
```

### Running end-to-end cypress tests

Two terminals are needed

In the first terminal:

Run `ng serve`

In the second terminal:

### NPM

Run `npm run cypress:open` to execute the end-to-end tests.

### Yarn

Run `yarn cypress:open` to execute the end-to-end tests.

A window will pop up and them just click on initial-page.spec.ts.

An integration test with results will be displayed.

### ng new command switches used

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

When true, does not initialize a git repository.

#### --minimal=[true|false]

When true, creates a project without any testing frameworks. (Use for learning purposes only.)

#### --strict=[true|false]

Creates a workspace with stricter type checking and build optimization options.

## ng new

```
ng new cypress-from-scratch --routing --style=scss --skip-install --skip-git --minimal=true --strict=true
CREATE cypress-from-scratch/angular.json (3331 bytes)
CREATE cypress-from-scratch/package.json (827 bytes)
CREATE cypress-from-scratch/README.md (1064 bytes)
CREATE cypress-from-scratch/tsconfig.json (783 bytes)
CREATE cypress-from-scratch/.gitignore (604 bytes)
CREATE cypress-from-scratch/.browserslistrc (703 bytes)
CREATE cypress-from-scratch/tsconfig.app.json (287 bytes)
CREATE cypress-from-scratch/src/favicon.ico (948 bytes)
CREATE cypress-from-scratch/src/index.html (304 bytes)
CREATE cypress-from-scratch/src/main.ts (372 bytes)
CREATE cypress-from-scratch/src/polyfills.ts (2820 bytes)
CREATE cypress-from-scratch/src/styles.scss (80 bytes)
CREATE cypress-from-scratch/src/assets/.gitkeep (0 bytes)
CREATE cypress-from-scratch/src/environments/environment.prod.ts (51 bytes)
CREATE cypress-from-scratch/src/environments/environment.ts (658 bytes)
CREATE cypress-from-scratch/src/app/app-routing.module.ts (245 bytes)
CREATE cypress-from-scratch/src/app/app.module.ts (393 bytes)
CREATE cypress-from-scratch/src/app/app.component.ts (1495 bytes)
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
