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
Cypress.Commands.add('createUser', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('ul.navbar-nav li').contains('Signup / Login').click();

    cy.get('input[data-qa="signup-name"]').click().type('VaidulisTest');
    cy.get('input[data-qa="signup-email"]').click().type('vaidulistester@test.com');
    cy.get('button[data-qa="signup-button"]').click();

    cy.get('input#id_gender1').click();    
    cy.get('input[data-qa="password"]').click().type('Vaidulis123');
    cy.get('select#days').select('13');
    cy.get('select#months').select('February');
    cy.get('select#years').select('1999');

    cy.get('input#newsletter').click();
    cy.get('input#optin').click();
        
    cy.get('input[data-qa="first_name"]').click().type('Vaidulis');
    cy.get('input[data-qa="last_name"]').click().type('test');
    cy.get('input[data-qa="company"]').click().type('kompanija');
    cy.get('input[data-qa="address"]').click().type('North pole');
    cy.get('input[data-qa="address2"]').click().type('Santa street 1');
    cy.get('select[data-qa="country"]').select('Canada');
    cy.get('input[data-qa="state"]').click().type('Big State');
    cy.get('input[data-qa="city"]').click().type('Small City');
    cy.get('input[data-qa="zipcode"]').click().type('1234567890');
    cy.get('input[data-qa="mobile_number"]').click().type('1234567890');

    cy.get('button[data-qa="create-account"]').click();

    cy.get('[data-qa="continue-button"]').click();
    
    cy.get('ul.navbar-nav li').contains('Logout').click();

    cy.log('atlikta');
});

import 'cypress-file-upload';

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