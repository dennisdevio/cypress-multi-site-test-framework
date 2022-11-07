/// <reference types="cypress" />

describe('manipulate language cookie', () => {

    beforeEach(() => {

        cy.visit('https://www.linkedin.com/')

    })
      
    it('get language cookie', () => {

        cy.getCookie('lang', 'en-us').should('have.lang', 'en-us')
    
    })
    
    it('set new language cookie', () => {
    
        cy.clearCookie('lang').then(() => {
            cy.setCookie('lang', 'sv-se').then(() => {
                cy.getCookie('lang').should('have.lang', 'sv-se')
            })
        })
    })
})