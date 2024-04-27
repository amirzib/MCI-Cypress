import { When } from "@badeball/cypress-cucumber-preprocessor"


When ("I click on 'کیف پول'", () => {
    cy.visit('/')
    cy.get(':nth-child(4) > a > .MuiListItemButton-root').click()
    })