declare global {
    interface Window {
        dataLayer?: {
            event: {}
        }[]
    }
}

beforeEach(() => {
    cy.visit('/')
})

describe('Google Analytics', () => {    
    it('has a data layer and GTM loads', () => {
        cy.window().then(window => {
            assert.isDefined(window.dataLayer, 'window.dataLayer is defined')
            assert.isDefined(window.dataLayer?.find(item => item.event === 'gtm.js'), 'GTM is loaded')
        })
    })

    it('renders a GA and GTM script tag and should not have a src attribute', () => {
        cy.get('#track-ga')
            .should('not.have.attr', 'src')
        cy.get('#track-gtm')
            .should('not.have.attr', 'src')
    })
})

describe('Third party scripts', () => {
    it('renders Triblio web personalization script in the head', () => {
        cy.get('#triblio-p')
            .parent()
            .should('have.prop', 'tagName')
            .should('equal', 'HEAD')
    })

    it('renders Triblio Analaytics and Overlay Cards script in the body', () => {
        cy.get('#triblio-a')
            .parent()
            .should('have.prop', 'tagName')
            .should('equal', 'BODY')
    })
    
    it('renders Cookiebot script in the body', () => {
        cy.get('#cookiebot')
            .parent()
            .should('have.prop', 'tagName')
            .should('equal', 'BODY')
    })
    
    it('renders Drift script in the body', () => {
        cy.get('#drift')
            .parent()
            .should('have.prop', 'tagName')
            .should('equal', 'BODY')
    })
})

export {}
