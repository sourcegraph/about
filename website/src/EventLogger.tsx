class EventLogger {
    /**
     * Global convenience methods
     */
    public trackProductsDropdownClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'ProductsDropdownClicked', {
            location_on_page: loc,
        })
    }
    public trackServerLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'ServerLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackCodeSearchLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'CodeSearchLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackCodeIntelligenceLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'CodeIntelligenceLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackSavedQueriesLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'SavedQueriesLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackIntegrationsLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'IntegrationsLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackDataCenterLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'DataCenterLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackAboutClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'AboutLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackProductClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'ProductLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackPricingClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'PricingLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackBlogClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'BlogLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackDocsClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'DocsLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackChangelogClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'ChangelogLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackCareersClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'CareersLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackSecurityClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'SecurityLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackTermsClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'TermsLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackPrivacyClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'PrivacyLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackDocsServerTabClicked(): void {
        this.trackEvent('Pages', 'click', null, 'DocsServerTabClicked', {})
    }
    public trackDocsDataCenterTabClicked(): void {
        this.trackEvent('Pages', 'click', null, 'DocsDataCenterTabClicked', {})
    }
    public trackDocsIntegrationsTabClicked(): void {
        this.trackEvent('Pages', 'click', null, 'DocsIntegrationsTabClicked', {})
    }
    public socialMediaClicked(site: any): void {
        this.trackEvent('Pages', 'click', null, 'SocialMediaLinkClicked', { site })
    }
    public trackIntegrationInstallClicked(category: any, integration: any, loc: any): void {
        this.trackEvent('Pages', 'click', null, 'IntegrationInstallClicked', {
            integrationCategory: category,
            integration,
            location_on_page: loc,
        })
    }
    public trackDeepLinkRedirectDownloadClicked(): void {
        this.trackEvent('Pages', 'click', null, 'DeepLinkRedirectDownloadClicked', {})
    }
    public trackStartServerFreeTrialClicked(): void {
        this.trackEvent('Pages', 'click', null, 'StartServerFreeTrialClicked', {})
    }
    public trackSearchPublicCodeClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'SearchPublicCodeClicked', {
            location_on_page: loc,
        })
    }
    public tryCodeIntelligenceClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'TryCodeIntelligenceClicked', {
            location_on_page: loc,
        })
    }
    public trackContactUsCTAClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'ContactUsLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackHomepageCTAClicked(buttonType: any, loc: any): void {
        this.trackEvent('Pages', 'click', null, 'HomepageCTAClicked', {
            button_type: buttonType,
            location_on_page: loc,
        })
    }
    public trackInstallSourcegraphServerCTAClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'InstallSourcegraphServerCTAClicked', {
            location_on_page: loc,
        })
    }
    public trackDocumentationCTAClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'DocumentationCTAClicked', {
            location_on_page: loc,
        })
    }
    public trackInstallBrowserExtensionCTAClicked(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'InstallBrowerExtensionCTAClicked', {
            location_on_page: loc,
        })
    }
    public trackHompageNavRowButtonClicked(buttonType: any): void {
        this.trackEvent('Pages', 'click', null, 'HomepageNavRowButtonClicked', {
            button_type: buttonType,
        })
    }
    public trackInstallServerCommandHighlighted(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'InstallServerCommandHighlighted', {
            location_on_page: loc,
        })
    }
    public trackInstallCodeIntelligenceCommandHighlighted(loc: any): void {
        this.trackEvent('Pages', 'click', null, 'InstallCodeIntelligenceCommandHighlighted', {
            location_on_page: loc,
        })
    }
    public trackContactUsFormSubmitted(): void {
        this.logConversion()
        this.trackEvent('Pages', 'click', null, 'ContactUsFormSubmitted', {})
    }
    public trackDemoFormSubmitted(): void {
        this.logConversion()
        this.trackEvent('Pages', 'click', null, 'DemoFormSubmitted', {})
    }
    public trackRequestDemoActionFormSubmitted(): void {
        this.trackEvent('Pages', 'click', null, 'RequestDemoActionFormSubmitted', {})
    }
    public trackCampaignsDemoFormSubmitted(): void {
        this.logConversion()
        // The event name still uses the old name for code change management ("automation").
        this.trackEvent('Pages', 'click', null, 'AutomationDemoFormSubmitted', {})
    }
    public trackHackathonFormSubmitted(): void {
        this.trackEvent('Pages', 'click', null, 'HackathonFormSubmitted', {})
    }
    public trackDotGoFormSubmitted(): void {
        this.trackEvent('Pages', 'click', null, 'DotGoFormSubmitted', {})
    }
    public trackStrangeLoopFormSubmitted(): void {
        this.trackEvent('Pages', 'click', null, 'StrangeLoopFormSubmitted', {})
    }
    public trackBuyUnlimitedButtonClicked(): void {
        this.trackEvent('Pages', 'click', null, 'BuyUnlimitedButtonClicked', {})
    }
    public trackBuyEnterpriseButtonClicked(): void {
        this.trackEvent('Pages', 'click', null, 'BuyEnterpriseButtonClicked', {})
    }
    public trackCampaignsSeeItInActionButtonClicked(): void {
        // The event name still uses the old name for code change management ("automation").
        this.trackEvent('Pages', 'click', null, 'AutomationSeeItInActionButtonClicked', {})
    }
    public trackEvent(category: string, action: string, feature: any, label: string, eventProps: object): void {
        if (window && (window as any).gtag) {
            ;(window as any).gtag('event', action, { event_category: category, event_label: label })
        }
        this.logToConsole(label)
    }
    public trackCaeStudyDownloadPDFClicked(customer: string): void {
        this.trackEvent('Pages', 'click', null, `CaseStudyDownloadPDFButtonClicked`, { caseStudy: customer })
    }
    public logToConsole(eventName: string): void {
        const eventLogDebug = typeof localStorage !== 'undefined' && localStorage.getItem('eventLogDebug') !== null
        if (eventLogDebug) {
            console.log('%cEVENT %s', 'color: #aaa', eventName)
        }
    }
    public logConversion(): void {
        if (window && (window as any).gtag) {
            ;(window as any).gtag('event', 'conversion', {
                send_to: 'AW-868484203/aCNZCLa7gbEBEOuIkJ4D',
                // event_callback: callback
            })
        }
    }
}
export const eventLogger = new EventLogger()
