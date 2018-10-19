class EventLogger {
    /**
     * Global convenience methods
     */
    public trackProductsDropdownClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'ProductsDropdownClicked', {
            location_on_page: loc,
        })
    }
    public trackEditorLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'EditorLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackServerLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'ServerLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackCodeSearchLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'CodeSearchLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackCodeIntelligenceLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'CodeIntelligenceLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackSavedQueriesLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'SavedQueriesLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackIntegrationsLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'IntegrationsLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackDataCenterLinkClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'DataCenterLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackAboutClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'AboutLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackPricingClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'PricingLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackBlogClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'BlogLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackDocsClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'DocsLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackChangelogClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'ChangelogLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackCareersClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'CareersLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackSecurityClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'SecurityLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackTermsClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'TermsLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackPrivacyClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'PrivacyLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackDocsServerTabClicked(): void {
        this.trackEvent('Pages', 'Click', null, 'DocsServerTabClicked', {})
    }
    public trackDocsDataCenterTabClicked(): void {
        this.trackEvent('Pages', 'Click', null, 'DocsDataCenterTabClicked', {})
    }
    public trackDocsIntegrationsTabClicked(): void {
        this.trackEvent('Pages', 'Click', null, 'DocsIntegrationsTabClicked', {})
    }
    public socialMediaClicked(site: any): void {
        this.trackEvent('Pages', 'Click', null, 'SocialMediaLinkClicked', { site })
    }
    public trackIntegrationInstallClicked(category: any, integration: any, loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'IntegrationInstallClicked', {
            integrationCategory: category,
            integration,
            location_on_page: loc,
        })
    }
    public trackDeepLinkRedirectDownloadClicked(): void {
        this.trackEvent('Pages', 'Click', null, 'DeepLinkRedirectDownloadClicked', {})
    }
    public trackRequestSearchDemoClicked(): void {
        this.trackEvent('Pages', 'Click', null, 'RequestSearchDemoClicked', {})
    }
    public trackStartServerFreeTrialClicked(): void {
        this.trackEvent('Pages', 'Click', null, 'StartServerFreeTrialClicked', {})
    }
    public trackSearchPublicCodeClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'SearchPublicCodeClicked', {
            location_on_page: loc,
        })
    }
    public tryCodeIntelligenceClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'TryCodeIntelligenceClicked', {
            location_on_page: loc,
        })
    }
    public trackContactUsCTAClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'ContactUsLinkClicked', {
            location_on_page: loc,
        })
    }
    public trackHomepageCTAClicked(buttonType: any, loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'HomepageCTAClicked', {
            button_type: buttonType,
            location_on_page: loc,
        })
    }
    public trackInstallSourcegraphServerCTAClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'InstallSourcegraphServerCTAClicked', {
            location_on_page: loc,
        })
    }
    public trackDocumentationCTAClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'DocumentationCTAClicked', {
            location_on_page: loc,
        })
    }
    public trackInstallBrowserExtensionCTAClicked(loc: any): void {
        this.trackEvent('Pages', 'Click', null, 'InstallBrowerExtensionCTAClicked', {
            location_on_page: loc,
        })
    }
    public trackHompageNavRowButtonClicked(buttonType: any): void {
        this.trackEvent('Pages', 'Click', null, 'HomepageNavRowButtonClicked', {
            button_type: buttonType,
        })
    }
    public trackInstallServerCommandHighlighted(loc: any): void {
        this.trackEvent('Pages', 'Select', null, 'InstallServerCommandHighlighted', {
            location_on_page: loc,
        })
    }
    public trackInstallCodeIntelligenceCommandHighlighted(loc: any): void {
        this.trackEvent('Pages', 'Select', null, 'InstallCodeIntelligenceCommandHighlighted', {
            location_on_page: loc,
        })
    }
    public trackContactUsFormSubmitted(): void {
        this.trackEvent('Pages', 'Submit', null, 'ContactUsFormSubmitted', {})
    }

    public trackEvent(category: string, action: string, feature: any, label: string, eventProps: object): void {
        if (!(window as any).telligent) {
            return
        }
        const props = {
            ...eventProps,
            ...{
                eventCategory: category,
                eventAction: action,
                eventFeature: feature,
                eventLabel: label,
                platform: 'Web',
                path_name:
                    window && window.location && window.location.pathname ? window.location.pathname.slice(1) : '',
                static: true,
            },
        }
        ;(window as any).telligent('track', action, props)
        if ((window as any).ga) {
            ;(window as any).ga('send', {
                hitType: 'event',
                eventCategory: category || '',
                eventAction: action || '',
                eventLabel: label,
            })
        }
        this.logToConsole(label, props)
    }

    public logToConsole(eventName: string, object: object): void {
        const eventLogDebug = typeof localStorage !== 'undefined' && localStorage.getItem('eventLogDebug') !== null
        if (eventLogDebug) {
            console.log('%cEVENT %s', 'color: #aaa', eventName, object)
        }
    }
}

export const eventLogger = new EventLogger()
