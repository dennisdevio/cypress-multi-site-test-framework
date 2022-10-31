/// <reference types="cypress" />

describe('manipulate language cookie', () => {

    it('go to website', () => {

        cy.visit('https://www.linkedin.com/')

    })
      
    it('get language cookie', () => {

        cy.getCookie('lang', 'en-us')
    
        cy.getCookie('lang', 'en-us').should('have.property', 'en-us')
    })
    
    it('set new language cookie', () => {
    
        cy.setCookie('lang', 'sv-se')
    
        cy.setCookie('lang', 'sv-se').should('have.property', 'sv-se')
    })

    it('reload webpage', () => {
    
        cy.reload()
    })

})
    
