/// <reference types="cypress" />

describe('Automation Exercise API testing', () => {
    it('API 1: Get All Products List', () => {
        cy.request('GET', 'https://automationexercise.com/api/productsList')
            .then((response) => {
                expect(response.status).to.eq(200);

                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(200);
                expect(data).to.have.property('products').and.to.be.an('array').and.not.empty;

                data.products.forEach((p) => {
                    expect(p).to.have.property('id');
                    expect(p).to.have.property('name');
                    expect(p).to.have.property('price');
                    expect(p).to.have.property('brand');
                    expect(p).to.have.property('category');
                    expect(p.category).to.have.property('usertype');
                    expect(p.category.usertype).to.have.property('usertype');
                    expect(p.category).to.have.property('category');
                });

                data.products.forEach((p) => {
                    expect(p.id).to.be.a('number');
                    expect(p.name).to.be.a('string');
                    expect(p.price).to.be.a('string');
                    expect(p.brand).to.be.a('string');
                    expect(p.category).to.be.an('object');
                    expect(p.category.usertype).to.be.an('object');
                    expect(p.category.usertype.usertype).to.be.a('string');
                    expect(p.category.category).to.be.a('string');
                });

            });
    });

    it('API 2: POST To All Products List', () => {
        const newProduct = {
            "name": "Lime Top",
            "price": "Rs. 1500",
            "brand": "Tanktop",
            "category": {
                "usertype": { "usertype": "Women" },
                "category": "Tops"
            }
        };

        cy.request('POST', 'https://automationexercise.com/api/productsList', newProduct)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.responseCode).to.eq(405);
                expect(response.body.message).to.eq('This request method is not supported.');

            });
    });

    it('API 3: Get All Brands List', () => {
        cy.request('GET', 'https://automationexercise.com/api/brandsList')
            .then((response) => {
                expect(response.status).to.eq(200);

                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(200);
                expect(data).to.have.property('brands').and.to.be.an('array').and.not.empty;
                console.log(data);

                data.brands.forEach((b) => {
                    expect(b).to.have.property('id');
                    expect(b).to.have.property('brand');
                });

                data.brands.forEach((b) => {
                    expect(b.id).to.be.a('number');
                    expect(b.brand).to.be.a('string');
                });
            });
    });

    it('API 4: PUT To All Brands List', () => {
        const newBrand = {
            "brand": "Yolo"
        };

        cy.request('POST', 'https://automationexercise.com/api/productsList', newBrand)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.responseCode).to.eq(405);
                expect(response.body.message).to.eq('This request method is not supported.');
            });
    });

    it('API 5: POST To Search Product', () => {
        const searchText = {
            search_product: 'Jeans'
        };

        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: searchText
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                console.log(response.body);

                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(200);
                expect(data).to.have.property('products').and.to.be.an('array').and.not.empty;

                data.products.forEach((p) => {
                    expect(p).to.have.property('id');
                    expect(p).to.have.property('name').contains('Jeans');
                    expect(p).to.have.property('price');
                    expect(p).to.have.property('brand');
                    expect(p).to.have.property('category');
                    expect(p.category).to.have.property('usertype');
                    expect(p.category.usertype).to.have.property('usertype');
                    expect(p.category).to.have.property('category');
                });

                data.products.forEach((p) => {
                    expect(p.id).to.be.a('number');
                    expect(p.name).to.be.a('string');
                    expect(p.price).to.be.a('string');
                    expect(p.brand).to.be.a('string');
                    expect(p.category).to.be.an('object');
                    expect(p.category.usertype).to.be.an('object');
                    expect(p.category.usertype.usertype).to.be.a('string');
                    expect(p.category.category).to.be.a('string');
                });
            });
    });

    it('API 6: POST To Search Product without search_product parameter', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct'
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(400);
                expect(data.message).to.eq('Bad request, search_product parameter is missing in POST request.');
            });
    });

    it('API 7: POST To Verify Login with valid details', () => {
        const user = {
            email: 'bebras5@gmail.com',
            password: 'Vaidulis123'
        };

        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: user
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(200);
                expect(data.message).to.eq('User exists!');
            });
    });

    it('API 8: POST To Verify Login without email parameter', () => {
        const user = {
            password: 'Vaidulis123'
        };

        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: user
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(400);
                expect(data.message).to.eq('Bad request, email or password parameter is missing in POST request.');
            });
    });

    it('API 9: DELETE To Verify Login', () => {
        const user = {
            password: 'Vaidulis123'
        };

        cy.request({
            method: 'DELETE',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: user
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(405);
                expect(data.message).to.eq('This request method is not supported.');
            });
    });

    it('API 10: POST To Verify Login with invalid details', () => {
        const user = {
            email: 'bebras55@gmail.com',
            password: 'Vaidulis1234'
        };

        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: user
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(404);
                expect(data.message).to.eq('User not found!');
            });
    });

    it('API 11: POST To Create/Register User Account', () => {
        const user = {
            name: 'bebras105',
            email: 'bebras150@example.com',
            password: 'bebras321',
            title: 'Mr',
            birth_date: '5',
            birth_month: '10',
            birth_year: '1990',
            firstname: 'Bebras',
            lastname: 'Babrauskas',
            company: 'Uztvanka',
            address1: 'rastu 11',
            address2: 'Bebriskes',
            country: 'Canada',
            zipcode: '1234567890',
            state: 'nice',
            city: 'sucks',
            mobile_number: '1234567890'
        };

        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/createAccount',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: user
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(201);
                expect(data.message).to.eq('User created!');
            });
    });

    it('API 13: PUT METHOD To Update User Account', () => {
        const user = {
            name: 'bebras105',
            email: 'bebras150@example.com',
            password: 'bebras321',
            title: 'Mr',
            birth_date: '5',
            birth_month: '10',
            birth_year: '2000',
            firstname: 'Bebras',
            lastname: 'Babrauskas',
            company: 'Uztvanka',
            address1: 'rastu 11',
            address2: 'Bebriskes',
            country: 'Canada',
            zipcode: '1234567890',
            state: 'nice',
            city: 'sucks',
            mobile_number: '1234567890'
        };

        cy.request({
            method: 'PUT',
            url: 'https://automationexercise.com/api/updateAccount',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: user
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(200);
                expect(data.message).to.eq('User updated!');
            });
    });

    it('API 14: GET user account detail by email', () => {
        const user = {
            email: 'bebras150@example.com'
        };

        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/getUserDetailByEmail',
            qs: user
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(200);

                expect(data).to.have.property('user').and.not.empty;
                expect(data.user).to.be.an('object').and.not.empty;
                expect(data.user).to.have.property('id');
                expect(data.user).to.have.property('name');
                expect(data.user).to.have.property('email');
                expect(data.user).to.have.property('title');
                expect(data.user).to.have.property('birth_day');
                expect(data.user).to.have.property('birth_month');
                expect(data.user).to.have.property('birth_year');
                expect(data.user).to.have.property('first_name');
                expect(data.user).to.have.property('last_name');
                expect(data.user).to.have.property('company');
                expect(data.user).to.have.property('address1');
                expect(data.user).to.have.property('address2');
                expect(data.user).to.have.property('country');
                expect(data.user).to.have.property('state');
                expect(data.user).to.have.property('city');
                expect(data.user).to.have.property('zipcode');

                expect(data.user.id).to.be.a('number');
                expect(data.user.name).to.be.a('string');
                expect(data.user.email).to.be.a('string');
                expect(data.user.title).to.be.a('string');
                expect(data.user.birth_day).to.be.a('string');
                expect(data.user.birth_month).to.be.a('string');
                expect(data.user.birth_year).to.be.a('string');
                expect(data.user.first_name).to.be.a('string');
                expect(data.user.last_name).to.be.a('string');
                expect(data.user.company).to.be.a('string');
                expect(data.user.address1).to.be.a('string');
                expect(data.user.address2).to.be.a('string');
                expect(data.user.country).to.be.a('string');
                expect(data.user.state).to.be.a('string');
                expect(data.user.city).to.be.a('string');
                expect(data.user.zipcode).to.be.a('string');
            });
    });

    it('API 12: DELETE METHOD To Delete User Account', () => {
        const user = {
            email: 'bebras150@example.com',
            password: 'bebras321'
        };

        cy.request({
            method: 'DELETE',
            url: 'https://automationexercise.com/api/deleteAccount',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: user
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                let data = JSON.parse(response.body);
                expect(data.responseCode).to.eq(200);
                expect(data.message).to.eq('Account deleted!');
            });
    });
});