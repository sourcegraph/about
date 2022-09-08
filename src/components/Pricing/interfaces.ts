/**
 * The features to display for pricing plans.
 */
export interface FeatureCluster {
    topic: string;
    features?: string[];
}

export interface FeatureInfo {
    label: string
    description?: string
}
