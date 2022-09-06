/**
 * The features to display for pricing plans.
 */
export interface Feature {
    title: string;
    subFeatures: SubFeature[];
}

interface SubFeature {
    title: string;
    tooltip: string;
}
