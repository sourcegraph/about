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

describe('Analytics', () => {
    it('has a data layer for GTM and GTM loads', () => {
        cy.window().then(window => {
            assert.isDefined(window.dataLayer, 'window.dataLayer is defined')
            assert.isDefined(
                window.dataLayer?.find(item => item.event === 'gtm.js'),
                'GTM is loaded'
            )
        })
    })

    it('renders a GTM Data Layer script tag in the head and should not have a src attribute', () => {
        cy.get('#gtm-data-layer').should('not.have.attr', 'src')
        cy.get('#gtm-data-layer').parent().should('have.prop', 'tagName').should('equal', 'HEAD')
    })

    it('renders a GTM script tag in the head and should not have a src attribute', () => {
        cy.get('#gtm').should('not.have.attr', 'src')
        cy.get('#gtm').parent().should('have.prop', 'tagName').should('equal', 'HEAD')
    })

    it('renders a GA script tag in the head and should not have a src attribute', () => {
        cy.get('#ga').should('not.have.attr', 'src')
        cy.get('#ga').parent().should('have.prop', 'tagName').should('equal', 'HEAD')
    })
})

describe('Third party scripts', () => {
    it('renders Cookiebot script in the head', () => {
        cy.get('#cookiebot').parent().should('have.prop', 'tagName').should('equal', 'HEAD')
    })

    it('renders Triblio web personalization script in the head', () => {
        cy.get('#triblio-p').parent().should('have.prop', 'tagName').should('equal', 'HEAD')
    })

    it('renders Triblio Analaytics and Overlay Cards script in the body', () => {
        cy.get('#triblio-a').parent().should('have.prop', 'tagName').should('equal', 'BODY')
    })

    it('renders Drift script in the body', () => {
        cy.get('#drift').parent().should('have.prop', 'tagName').should('equal', 'BODY')
    })
})

export {}
