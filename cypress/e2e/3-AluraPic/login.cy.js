
describe('Login of AluraPic user',()=>{
    beforeEach(() => {
        cy.visit('/');
    })

    it('Login with valid user', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Login with invalid user', () => {
        cy.login('Felipe', '1111');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    });

})