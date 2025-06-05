/// <reference types="cypress" />

describe('Automation Exercise', () => {

  it('Test Case 1: Register User', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Signup / Login').click();

    cy.url().should('eq', 'https://automationexercise.com/login');
    cy.get('body').should('be.visible');
    cy.get('.signup-form').contains('New User Signup!').should('be.visible');

    cy.get('input[data-qa="signup-name"]').click().type('Bebras666');
    cy.get('input[data-qa="signup-email"]').click().type('bebras666@example.com');
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');

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

    cy.contains('Account Created!').should('be.visible');

    cy.get('[data-qa="continue-button"]').click();

    cy.contains('Logged in as Bebras666').should('be.visible');

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

  it('Test Case 2: Login User with correct email and password', () => {
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

  it('Test Case 6: Contact Us Form', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('a[href="/contact_us"]').click();

    cy.contains('Get In Touch').should('be.visible');

    cy.get('input[data-qa="name"]').click().type('Vaidulis');
    cy.get('input[data-qa="email"]').click().type('vaidulistester@gmail.com');
    cy.get('input[data-qa="subject"]').click().type('Tema');
    cy.get('textarea[data-qa="message"]').click().type('Labai labai labai labai ilgas tekstas.');

    cy.get('input[name="upload_file"]').attachFile('ane.png');

    cy.get('input[data-qa="submit-button"]').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.equal('Press OK to proceed!');
      return true;
    });

    cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

    cy.get('a.btn-success').click();

    cy.url().should('eq', 'https://automationexercise.com/');

  });

  it('Test Case 7: Verify Test Cases Page', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Test Cases').click();

    cy.url().should('eq', 'https://automationexercise.com/test_cases');
    cy.get('body').should('be.visible');

  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('a[href="/products"]').click();

    cy.contains('All Products').should('be.visible');

    cy.get('a[href="/product_details/2"]').click();

    cy.url().should('eq', 'https://automationexercise.com/product_details/2');

    cy.get('h2').contains('Men Tshirt').should('be.visible');
    cy.get('p').contains('Category').should('be.visible');
    cy.get('span').contains('Rs. 400').should('be.visible');
    cy.get('p').contains('Availability').should('be.visible');
    cy.get('p').contains('Condition').should('be.visible');
    cy.get('p').contains('Brand').should('be.visible');

  });

  it('Test Case 9: Search Product', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('a[href="/products"]').click();

    cy.contains('All Products').should('be.visible');

    cy.get('input#search_product').type('Jeans');
    cy.get('button#submit_search').click();

    cy.contains('Searched Products').should('be.visible');

    cy.get('.productinfo p').each($e => {
      cy.wrap($e).should('contain', 'Jeans');
    });

  });

  it('Test Case 10: Verify Subscription in home page', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('div.single-widget').contains('Subscription');

    cy.get('input#susbscribe_email').click().type('vaidulistester@gmail.com');
    cy.get('#subscribe').click();

    cy.get('div.alert-success').contains('You have been successfully subscribed!').should('be.visible');

  });

  it('Test Case 11: Verify Subscription in Cart page', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Cart').click();

    cy.get('div.single-widget').contains('Subscription');

    cy.get('input#susbscribe_email').click().type('vaidulistester@gmail.com');
    cy.get('#subscribe').click();

    cy.get('div.alert-success').contains('You have been successfully subscribed!').should('be.visible');

  });

  it('Test Case 12: Add Products in Cart', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Products').click();

    cy.get('.productinfo').eq(0).trigger('mouseover');
    cy.wait(600);
    cy.get('div.product-overlay').eq(0).contains('Add to cart').click({ force: true });
    cy.get('[data-dismiss="modal"]').click();

    cy.get('div.productinfo').eq(1).trigger('mouseover');
    cy.wait(600);
    cy.get('div.product-overlay').eq(1).contains('Add to cart').click({ force: true });
    cy.get('div.modal-body a[href="/view_cart"]').click();

    cy.get('tbody').contains('Blue Top').should('be.visible');
    cy.get('tbody').contains('Men Tshirt').should('be.visible');

    cy.get('#product-1 .cart_price').contains('Rs. 500');
    cy.get('#product-1 .cart_quantity').contains('1');
    cy.get('#product-1 .cart_total').contains('Rs. 500');

    cy.get('#product-2 .cart_price').contains('Rs. 400');
    cy.get('#product-2 .cart_quantity').contains('1');
    cy.get('#product-2 .cart_total').contains('Rs. 400');

  });

  it('Test Case 13: Verify Product quantity in Cart', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('div.choose').eq(2).contains('View Product').click();

    cy.url().should('eq', 'https://automationexercise.com/product_details/3');
    cy.get('body').should('be.visible');

    cy.get('input#quantity').clear().type('4');

    cy.get('button.btn-default').contains('Add to cart').click();

    cy.get('div.modal-body a[href="/view_cart"]').click();

    cy.get('#product-3 .cart_price').contains('Rs. 1000');
    cy.get('#product-3 .cart_quantity').contains('4');
    cy.get('#product-3 .cart_total').contains('Rs. 4000');

  });

  it('Test Case 14: Place Order: Register while Checkout', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('div.productinfo').eq(1).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('div.productinfo').eq(2).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('div.productinfo').eq(3).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();

    cy.get('ul.navbar-nav li').contains('Cart').click();

    cy.url().should('eq', 'https://automationexercise.com/view_cart');
    cy.get('body').should('be.visible');

    cy.get('div.container').contains('Proceed To Checkout').click();

    cy.get('div.modal-body a').contains('Register / Login').click();

    cy.get('input[data-qa="signup-name"]').click().type('Bredas');
    cy.get('input[data-qa="signup-email"]').click().type('bebras36@example.com');
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');

    cy.get('input#id_gender1').click();
    cy.get('input[data-qa="password"]').click().type('bebras123');
    cy.get('select#days').select('13');
    cy.get('select#months').select('February');
    cy.get('select#years').select('1999');

    cy.get('input#newsletter').click();
    cy.get('input#optin').click();

    cy.get('input[data-qa="first_name"]').click().type('Bredas');
    cy.get('input[data-qa="last_name"]').click().type('Bebras');
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

    cy.contains('Logged in as Bredas').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Cart').click();
    cy.get('div.container').contains('Proceed To Checkout').click();

    cy.get('h2').contains('Address Details').should('be.visible');
    cy.get('h2').contains('Review Your Order').should('be.visible');

    cy.get('textarea.form-control').click().type('Description coment in comment text area.');
    cy.get('a[href="/payment"]').contains('Place Order').click();

    cy.get('[data-qa="name-on-card"]').click().type('BREDAS BEBRAS');
    cy.get('[data-qa="card-number"]').click().type('1234567890123456');
    cy.get('[data-qa="cvc"]').click().type('123');
    cy.get('[data-qa="expiry-month"]').click().type('10');
    cy.get('[data-qa="expiry-year"]').click().type('2030');

    cy.get('button[data-qa="pay-button"]').click();

    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');

  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('a[href="/login"]').contains('Signup / Login').click();

    cy.get('input[data-qa="signup-name"]').click().type('Bredas');
    cy.get('input[data-qa="signup-email"]').click().type('bebras36@example.com');
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');

    cy.get('input#id_gender1').click();
    cy.get('input[data-qa="password"]').click().type('bebras123');
    cy.get('select#days').select('13');
    cy.get('select#months').select('February');
    cy.get('select#years').select('1999');

    cy.get('input#newsletter').click();
    cy.get('input#optin').click();

    cy.get('input[data-qa="first_name"]').click().type('Bredas');
    cy.get('input[data-qa="last_name"]').click().type('Bebras');
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

    cy.contains('Logged in as Bredas').should('be.visible');

    cy.visit('https://automationexercise.com/');
    cy.get('div.productinfo').eq(4).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('div.productinfo').eq(5).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('div.productinfo').eq(6).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();

    cy.get('ul.navbar-nav li').contains('Cart').click();

    cy.url().should('eq', 'https://automationexercise.com/view_cart');
    cy.get('body').should('be.visible');

    cy.get('div.container').contains('Proceed To Checkout').click();

    cy.get('h2').contains('Address Details').should('be.visible');
    cy.get('h2').contains('Review Your Order').should('be.visible');

    cy.get('textarea.form-control').click().type('Description coment in comment text area.');
    cy.get('a[href="/payment"]').contains('Place Order').click();

    cy.get('[data-qa="name-on-card"]').click().type('BREDAS BEBRAS');
    cy.get('[data-qa="card-number"]').click().type('1234567890123456');
    cy.get('[data-qa="cvc"]').click().type('123');
    cy.get('[data-qa="expiry-month"]').click().type('10');
    cy.get('[data-qa="expiry-year"]').click().type('2030');

    cy.get('form#payment-form').then(($form) => {
      $form.on('submit', (e) => {
        e.preventDefault();
      });
    });
    
    cy.get('[data-qa="pay-button"]').click();
    
    cy.get("#success_message > .alert-success").should("contain.text", "Your order has been placed successfully!");

    cy.get('form#payment-form').then(($form) => {
      $form.off('submit');
    });

    cy.get('button[data-qa="pay-button"]').click();

    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');

  });

  it('Test Case 16: Place Order: Login before Checkout', () => {
    cy.createUser();

    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('a[href="/login"]').contains('Signup / Login').click();

    cy.get('body').should('be.visible');
    cy.get('.login-form').contains('Login to your account').should('be.visible');

    cy.get('input[data-qa="login-email"]').click().type('vaidulistester@test.com');
    cy.get('input[data-qa="login-password"]').click().type('Vaidulis123');
    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Logged in as VaidulisTest').should('be.visible');

    cy.visit('https://automationexercise.com/');
    cy.get('div.productinfo').eq(4).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('div.productinfo').eq(5).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('div.productinfo').eq(6).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();

    cy.get('ul.navbar-nav li').contains('Cart').click();

    cy.url().should('eq', 'https://automationexercise.com/view_cart');
    cy.get('body').should('be.visible');

    cy.get('div.container').contains('Proceed To Checkout').click();

    cy.get('h2').contains('Address Details').should('be.visible');
    cy.get('h2').contains('Review Your Order').should('be.visible');

    cy.get('textarea.form-control').click().type('Description coment in comment text area.');
    cy.get('a[href="/payment"]').contains('Place Order').click();

    cy.get('[data-qa="name-on-card"]').click().type('BREDAS BEBRAS');
    cy.get('[data-qa="card-number"]').click().type('1234567890123456');
    cy.get('[data-qa="cvc"]').click().type('123');
    cy.get('[data-qa="expiry-month"]').click().type('10');
    cy.get('[data-qa="expiry-year"]').click().type('2030');

    cy.get('button[data-qa="pay-button"]').click();

    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');

  });

  it('Test Case 17: Remove Products From Cart', () => {
    cy.visit('https://automationexercise.com/');

    cy.url().should('eq', 'https://automationexercise.com/');
    cy.get('body').should('be.visible');

    cy.get('div.productinfo').eq(3).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('div.productinfo').eq(5).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();
    cy.get('div.productinfo').eq(7).contains('Add to cart').click();
    cy.get('[data-dismiss="modal"]').click();

    cy.get('ul.navbar-nav li').contains('Cart').click();

    cy.url().should('eq', 'https://automationexercise.com/view_cart');
    cy.get('body').should('be.visible');

    cy.get('a[data-product-id="4"]').click();

    cy.get('tr#product-4').should('not.exist');

  });

  it('Test Case 18: View Category Products', () => {
    cy.visit('https://automationexercise.com/');

    cy.contains('Category').should('be.visible');

    cy.get('div.panel-heading').contains('Women').click();

    cy.get('#Women li').contains('Dress').click();
    cy.url().should('eq', 'https://automationexercise.com/category_products/1');
    cy.contains('Women - Dress Products').should('be.visible');

    cy.get('div.panel-heading').contains('Men').click();
    cy.get('#Men li').contains('Jeans').click();
    cy.url().should('eq', 'https://automationexercise.com/category_products/6');
    cy.contains('Men - Jeans Products').should('be.visible');

  });

  it('Test Case 19: View & Cart Brand Products', () => {
    cy.visit('https://automationexercise.com/');

    cy.get('ul.navbar-nav li').contains('Products').click();

    cy.contains('Brands').should('be.visible');

    cy.get('div.brands-name li').contains('Biba').click();

    cy.url().should('eq', 'https://automationexercise.com/brand_products/Biba');
    cy.contains('Brand - Biba Products').should('be.visible');

    cy.get('div.brands-name li').contains('Polo').click();

    cy.url().should('eq', 'https://automationexercise.com/brand_products/Polo');
    cy.contains('Brand - Polo Products').should('be.visible');

  });

  it('Test Case 20: Search Products and Verify Cart After Login', () => {
    cy.createUser();

    cy.visit('https://automationexercise.com/');
    cy.get('ul.navbar-nav li').contains('Products').click();
    cy.url().should('eq', 'https://automationexercise.com/products');

    cy.get('input#search_product').click().type('Jeans');
    cy.get('button#submit_search').click();

    cy.contains('Searched Products').should('be.visible');
    cy.get('.productinfo').each(($p) => {
      cy.wrap($p).should('contain', 'Jeans').and('is.visible');
    });

    cy.get('.productinfo').each(($p) => {
      cy.wrap($p).contains('Add to cart').click();
      cy.get('[data-dismiss="modal"]').click();
    });

    cy.get('ul.navbar-nav li').contains('Cart').click();

    cy.get('tbody tr').each(($p) => {
      cy.wrap($p).should('contain', 'Jeans').and('is.visible');
    });

    cy.get('a[href="/login"]').contains('Signup / Login').click();

    cy.get('input[data-qa="login-email"]').click().type('vaidulistester@test.com');
    cy.get('input[data-qa="login-password"]').click().type('Vaidulis123');
    cy.get('button[data-qa="login-button"]').click();

    cy.contains('Logged in as VaidulisTest').should('be.visible');

    cy.get('ul.navbar-nav li').contains('Cart').click();

    cy.get('tbody tr').each(($t) => {
      cy.wrap($t).should('contain', 'Jeans').and('is.visible');
    });

    cy.contains('Delete Account').click();

    cy.contains('Account Deleted!').should('be.visible');

  });

});