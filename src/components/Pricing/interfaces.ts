/**
 * The features to display for pricing plans.
 */
export interface Features {
    codeSearch: boolean
    codeIntelligence: boolean
    batchChanges: boolean
    batchChangesTrial: boolean
    codeHostIntegration: boolean
    api: boolean
    selfHosted: boolean
    userAndAdminRoles: boolean
    singleSignOn: boolean
    multipleCodeHosts: boolean
    repositoryPermissions: boolean
    optimizedRepositoryUpdates: boolean
    privateExtensions: boolean
    deploymentMetricsAndMonitoring: boolean
    backupRestore: boolean
    customBranding: boolean
    onlineTraining: boolean
    customContractLegalBillingTerms: boolean
    unlimitedCode: boolean
    managedInstance: boolean
    codeInsights: boolean
    codeInsightsTrial: boolean
}

export interface FeatureInfo {
    label: string
    url?: string
    description: string
}
