import { faker } from '@faker-js/faker';


describe('Login to OrangeHRM', () => {
    it('should log in successfully', () => {

        // 1

        // Visit the login page
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Enter the username
        cy.get('input[name="username"]').type('Admin');

        // Enter the password
        cy.get('input[name="password"]').type('admin123');

        // Click the login button
        cy.get('button.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click();

        // Optionally, verify that the login was successful
        // cy.url().should('include', '/expected-landing-page');
        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('be.visible').and('have.text', 'Dashboard');



        // 2

        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();

        cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary').eq(1).click();

        cy.get('input.oxd-input.oxd-input--active.orangehrm-firstname').click({ force: true }).type(faker.person.firstName());
        cy.get('input.oxd-input.oxd-input--active.orangehrm-lastname').click({ force: true }).type(faker.person.lastName());
        cy.get('span.oxd-switch-input.oxd-switch-input--active.--label-right').click();

        cy.get('input.oxd-input.oxd-input--active').type(faker.person.fullName())
        cy.get('input.oxd-input.oxd-input--active[type="password"]').type('12345@Abcde');
        cy.get('input.oxd-input.oxd-input--active[type="password"]').type('12345@Abcde')

    });
});
