
describe('Register of AluraPic user',()=>{
    beforeEach(() => {
        cy.visit('/');
    })

    it('verify validation message',() => {
        cy.contains('a','Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verify invalid email message',() => {
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname=email]').type('felipe')
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verify user has to be lower case message',() => {
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname=userName]').type('Felipe');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('verify minimum password lenght message',() => {
        cy.contains('a','Register now').click();
        cy.get('input[formcontrolname=password]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    const users = require('../../fixtures/users.json')
    users.forEach(user => {
        it(`Register new user ${user.userName}`, () => {
            cy.register(user.email, user.fullName, user.userName, user.password);
        })
    })

})
