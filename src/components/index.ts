// Common
export { Layout } from './Layout'
export { ContentPage } from './ContentPage'
export { ContentSection } from './ContentSection'
export { Jumbotron } from './Jumbotron'
export { RequestDemoForm } from './RequestDemoForm'
export { TrySourcegraph } from './TrySourcegraph'
export { Install } from './Install'
export { EmbeddedHubSpot } from './HubSpot'
export { BackButton } from './BackButton'
export { FormLegal } from './FormLegal'
export { BlogListItem } from './BlogListItem'
export { Blockquote, BlockquoteWithBorder, BlockquoteWithLogoTop, BlockquoteWithLogoBottom } from './Blockquote'
export { Video } from './Video'
export { CustomerLogosSectionAnimated } from './CustomerLogosSectionAnimated'
export { IntegrationsSection } from './IntegrationsSection'
export { SelfHostedSection } from './SelfHostedSection'
export { YouTube } from './YouTube'

// Tracking
export { buttonStyle, buttonLocation } from './data/tracking'

// Actions
export {
    ContactPresalesSupportAction,
    GetSourcegraphNowActions,
    RequestCodeChangeManagementDemoAction,
    RequestDemoAction,
    StartAFreeTrialAction,
    SubmitEmailForm,
    ViewDeveloperDocumentationAction,
} from './Actions'

// Carousels
export { CustomCarousel, QuoteCarousel } from './Carousels'

// Pricing
export { PricingPlanProperty, PricingPlanFeature, PricingPlan } from './Pricing'
export type { Features } from './Pricing'

// Page Specific
export {
    CaseStudyJumbotron,
    CaseStudyLayout,
    CaseStudyCard,
    InContentBlockquote,
    InContentImage,
    MediaQuote,
} from './CaseStudies'

// Blog
export {
    BlogHeader,
    BlogHeadLinks,
    BlogPost,
    LinkPost,
    PodcastPost,
    PostsList,
    PostsListPage,
    PressReleasePost,
    ReleasePost,
    BLOG_TYPE_TO_INFO,
} from './Blog'
