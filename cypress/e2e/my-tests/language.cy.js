/// <reference types="cypress" />

describe('manipluate language cookie', () => {
    beforeEach(() => {
        
        cy.visit('https://www.linkedin.com/')
      })


    it('cy.getCookie() - get lanuge cookie', () => {

        cy.getCookie('lang', 'sv')
    
        cy.getCookie('lang').should('have.property', 'en-us')
    })
    
    it('cy.setCookie() - set new language cookie', () => {
    
        cy.setCookie('lang', 'sv')
    
        cy.getCookie('lang').should('have.property', 'sv')
    })
})
