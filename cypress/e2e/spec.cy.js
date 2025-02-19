describe('Automation Exercise', () => {

  it('Test Case 1: Register User', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Signup / Login').click();

    cy.url().should('eq', 'https://automationexercise.com/login');
    cy.get('body').should('be.visible');
    cy.get('.signup-form').contains('New User Signup!').should('be.visible');

    cy.get('input[data-qa="signup-name"]').click().type('Vaidulis');
    cy.get('input[data-qa="signup-email"]').click().type('vaidulistester@gmail.com');
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');

    cy.get('input#id_gender1').click();
    // cy.get('input[data-qa="name"]').dblclick().type('Vaidulis');    
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

    cy.contains('Account Created!').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();

    cy.contains('Logged in as Vaidulis').should('be.visible');

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');

  });

  it('Test Case 2: Login User with correct email and password', () => {
    cy.createUser();
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Signup / Login').click();

    cy.url().should('eq', 'https://automationexercise.com/login');
    cy.get('body').should('be.visible');
    cy.get('.login-form').contains('Login to your account').should('be.visible');

    cy.get('input[data-qa="login-email"]').click().type('vaidulistester@test.com');
    cy.get('input[data-qa="login-password"]').click().type('Vaidulis123');
    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Logged in as VaidulisTest').should('be.visible');

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');

  });

  it('Test Case 3: Login User with incorrect email and password', () => {
      cy.visit('https://automationexercise.com/');
  
      cy.url().should('eq', 'https://automationexercise.com/');
      cy.get('body').should('be.visible');
  
      cy.get('ul.navbar-nav li').contains('Signup / Login').click();
  
      cy.url().should('eq', 'https://automationexercise.com/login');
      cy.get('body').should('be.visible');
      cy.get('.login-form').contains('Login to your account').should('be.visible');
  
      cy.get('input[data-qa="login-email"]').click().type('blogas@gmail.com');
      cy.get('input[data-qa="login-password"]').click().type('blogaspass');
      cy.get('button[data-qa="login-button"]').click();

      cy.contains('Your email or password is incorrect!').should('be.visible');
      
  });

  it('Test Case 4: Logout User', () => {
    cy.createUser();

    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Signup / Login').click();

    cy.url().should('eq', 'https://automationexercise.com/login');
    cy.get('body').should('be.visible');
    cy.get('.login-form').contains('Login to your account').should('be.visible');

    cy.get('input[data-qa="login-email"]').click().type('vaidulistester@test.com');
    cy.get('input[data-qa="login-password"]').click().type('Vaidulis123');
    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Logged in as VaidulisTest').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Logout').click();

    cy.url().should('eq', 'https://automationexercise.com/login');
    cy.get('body').should('be.visible');
    
  });

  it('Test Case 5: Register User with existing email', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Signup / Login').click();

    cy.url().should('eq', 'https://automationexercise.com/login');
    cy.get('body').should('be.visible');
    cy.get('.signup-form').contains('New User Signup!').should('be.visible');

    cy.get('input[data-qa="signup-name"]').click().type('VaidulisTest');
    cy.get('input[data-qa="signup-email"]').click().type('vaidulistester@test.com');
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains('Email Address already exist!').should('be.visible');

  });
  
});