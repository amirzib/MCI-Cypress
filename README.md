# Testing MCI web with Cypress
---
## Section 1: Quick Overview
#### Overview
Here we are writing some tests about login on MCI web with cypress and gherklin syntax.

#### Road map
We expect login should be successfully done and other things should load correctly.
In the next steps, we trying to create a session to log in automatically.

#### Configuration
We have ```baseUrl:"http://my.mci.ir"``` and ```specPattern:'cypress/e2e/**/*.feature'``` with this syntax. It should be written in *cypress.config.js* in e2e block.

#### Change Log

---
## Section 2: Comprehensive look

#### Code Environment

We are using VSCode with this setting below:
*.vscode/settings.json*
```
{
    "cucumberautocomplete.steps": [
        "cypress/support/step_definitions/base_steps/*.js",
        "cypress/support/step_definitions/check_steps/*.js"

      ],
   "cucumberautocomplete.syncfeatures": "cypress/e2e/**/*.feature",
   "cucumberautocomplete.strictGherkinCompletion": true,
   "cucumberautocomplete.smartSnippets": true,
  "cucumberautocomplete.stepsInvariants": true,
  "files.autoSave": "afterDelay",
}
```
We are configured our step in ```cucumberautocomplete.steps``` so we can easily go to each file with holding
```ctrl``` and click on each sentence in scenarios.
We have to set the code below in *cypress.config.js*.
```
"cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/step_definitions/",
    "nonGlobalStepDefinitions": false
  }
```

#### Application Dependencies 

Using ```pip install {package name}```

```

"devDependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^20.0.1",
    "@bahmutov/cypress-esbuild-preprocessor": "^2.2.0",
    "cypress": "^13.6.4",
    "cypress-esbuild-preprocessor": "^1.0.2",
    "cypress-mochawesome-reporter": "^3.8.1",
    "esbuild": "^0.20.0",
    "mochawesome": "^7.1.3",
    "mochawesome-report-generator": "^6.2.0"
  } 
```

#### Folder Structure
We have our features in `cypress/e2e/**.feature` and our steps are in  `cypress/support/step_definitions/**.js`
We have some custome commands in `cypress/support/commands.js`

#### Report
For reporter, we are using Mochawsome reporter.
We should install these packages:

```
mochawsome
cypress-mochawesome-reporter
mochawesome-report-generator
```

Then we should do some setup:
Adding code below to *cypress.config.js* in e2e block.

```
setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
```

And this one too *cypress/support/e2e.js*.

```
import 'cypress-mochawesome-reporter/register';
```

## Section 3: Acknowledgment
#### Contributors
Amir ghara zibaie (Mr.Alf)

#### Links
For help and more guides follow:
[official cypress doc](https://docs.cypress.io/guides/overview/why-cypress)
