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

describe('Google Tag Manager', () => {
    it('has a data layer and gtm.js loads', () => {
        cy.window().then(window => {
            assert.isDefined(window.dataLayer, 'window.dataLayer is defined')
            assert.isDefined(
                window.dataLayer?.find(item => item.event === 'gtm.js'),
                'GTM is loaded'
            )
        })
    })

    it('renders a GTM Data Layer script tag in the body and should not have a src attribute', () => {
        cy.get('#script-gtm-data-layer').should('not.have.attr', 'src')
        cy.get('#script-gtm-data-layer').parent().should('have.prop', 'tagName').should('equal', 'BODY')
    })

    it('renders a GTM script tag in the body and should not have a src attribute', () => {
        cy.get('#script-gtm').should('not.have.attr', 'src')
        cy.get('#script-gtm').parent().should('have.prop', 'tagName').should('equal', 'BODY')
    })
})

describe('Third party scripts', () => {
    it('renders Cookiebot script in the head', () => {
        cy.get('#script-cookiebot').parent().should('have.prop', 'tagName').should('equal', 'HEAD')
    })

    it('renders Triblio web personalization script in the head', () => {
        cy.get('#script-triblio-personalization').parent().should('have.prop', 'tagName').should('equal', 'HEAD')
    })

    it('renders Triblio Analaytics and Overlay Cards script in the body', () => {
        cy.get('#script-triblio-analytics').parent().should('have.prop', 'tagName').should('equal', 'BODY')
    })
})

export {}
