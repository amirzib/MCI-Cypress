import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then (('Evrything should load correctly'),()=>{
    cy.visit("/")
    cy.wait(1000)
    cy.get('.MuiTypography-h5').should("be.visible")
    cy.get('[data-index="1"] > :nth-child(1) > [tabindex="-1"] > .slide-container > a > .jss102 > .MuiTypography-root').should("be.visible")
})     