describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        cy.visit('https://neoauto.com');
        cy.get('.s-header-auth__login')
            .click();   
        cy.get(':nth-child(2) > .shadow_gray')
            .type('wilsonft83@gmail.com');
        cy.get('.fieldset_password > .shadow_gray')
            .type('123456');
        cy.get('.frm_login button')
            .click();
    })
})