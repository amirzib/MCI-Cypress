// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login',() => {
 cy.session("test1",() =>{ 
  cy.visit('/')
  const baseUrl = "http://91.92.209.41:8091/api/v1/"
  cy.request('POST', `${baseUrl}assign`,{ operator: 'MCI',
                                          simType:'CREDIT',
                                          appName:'MY_MCI'}).then(
      (response) => {
      cy.get('#mui-1').type(response.body.number)
      cy.get('#mui-4').click()
      
      let token = response.body.token.toString()
      cy.request('GET', `${baseUrl}watch?token=${token}`,).then(
          (response2) => {
          cy.get('#mui-2').type(response2.body.code)
          }) 
      })
      cy.get('#mui-3').click()
    })
})