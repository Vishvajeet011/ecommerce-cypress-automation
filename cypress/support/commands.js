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
//import cypress from 'cypress';
import 'cypress-file-upload';

//Custom command for clicking on link using label.
// Cypress.Commands.add("ClickLink", (label)=>{
//     cy.get("a").contains(label).click()
// })


//Overwrite contains
// cypress/support/commands.js
// Cypress.Commands.overwriteQuery("contains", (originalFn, subject, filter, text, options = {}) => {
//     if (typeof text === 'object') {
//       options = text
//       text = filter
//       filter = undefined
//     }

//     options.matchCase = false
//     return originalFn(subject, filter, text, options)
//   })
  

  // cypress/support/commands.js


  // Custom command for ignoring the case sensitivity-
Cypress.Commands.add("containsIgnoreCase", (selector, text) => {
    const regex = new RegExp(text, "i");  // 'i' → ignore case
    return cy.contains(selector, regex);
  });
  
  Cypress.Commands.add("ClickLink", (label) => {
    cy.containsIgnoreCase("a", label).click();
  });


  //Custom command for login-
  Cypress.Commands.add('LoginApp', (username, password)=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type(username);
    cy.get('#password').type(password)
    cy.get('#login-button').click()
  })