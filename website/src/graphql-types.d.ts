/* tslint:disable */
/* An object with an id, parent, and children */
export interface Node {
    id: string /* The id of the node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
}

export interface RootQueryType {
    allSitePage?: SitePageConnection | null /* Connection to all SitePage nodes */
    allSitePlugin?: SitePluginConnection | null /* Connection to all SitePlugin nodes */
    allFile?: FileConnection | null /* Connection to all File nodes */
    allMarkdownRemark?: MarkdownRemarkConnection | null /* Connection to all MarkdownRemark nodes */
    allContentfulBlogPostBodyTextNode?: contentfulBlogPostBodyTextNodeConnection | null /* Connection to all contentfulBlogPostBodyTextNode nodes */
    allContentfulContentType?: ContentfulContentTypeConnection | null /* Connection to all ContentfulContentType nodes */
    allContentfulBlogPost?: ContentfulBlogPostConnection | null /* Connection to all ContentfulBlogPost nodes */
    allContentfulAsset?: ContentfulAssetConnection | null /* Connection to all ContentfulAsset nodes */
    sitePage?: SitePage | null
    sitePlugin?: SitePlugin | null
    site?: Site | null
    file?: File | null
    markdownRemark?: MarkdownRemark | null
    contentfulBlogPostBodyTextNode?: contentfulBlogPostBodyTextNode | null
    contentfulContentType?: ContentfulContentType | null
    contentfulBlogPost?: ContentfulBlogPost | null
    contentfulAsset?: ContentfulAsset | null
}
/* A connection to a list of items. */
export interface SitePageConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: SitePageEdge[] | null /* A list of edges. */
    totalCount?: number | null
    distinct?: string[] | null
    group?: sitePageGroupConnectionConnection[] | null
}
/* Information about pagination in a connection. */
export interface PageInfo {
    hasNextPage: boolean /* When paginating, are there more items? */
}
/* An edge in a connection. */
export interface SitePageEdge {
    node?: SitePage | null /* The item at the end of the edge */
    next?: SitePage | null /* The next edge in the connection */
    previous?: SitePage | null /* The previous edge in the connection */
}
/* Node of type SitePage */
export interface SitePage extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    layout?: string | null
    jsonName?: string | null
    internalComponentName?: string | null
    path?: string | null
    component?: string | null
    componentChunkName?: string | null
    context?: context | null
    updatedAt?: number | null
    pluginCreator?: SitePlugin | null
    pluginCreatorId?: string | null
    componentPath?: string | null
    internal?: internal_10 | null
}

export interface context {
    path?: string | null
    fileSlug?: string | null
    id?: string | null
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    resolve?: string | null
    name?: string | null
    version?: string | null
    pluginOptions?: pluginOptions_2 | null
    nodeAPIs?: string[] | null
    pluginFilepath?: string | null
    packageJson?: packageJson_2 | null
    internal?: internal_11 | null
}

export interface pluginOptions_2 {
    plugins?: plugins_2[] | null
    name?: string | null
    path?: string | null
    spaceId?: string | null
    accessToken?: string | null
    query?: string | null
    feeds?: feeds_2[] | null
}

export interface plugins_2 {
    resolve?: string | null
    id?: string | null
    name?: string | null
    version?: string | null
    pluginFilepath?: string | null
}

export interface feeds_2 {
    query?: string | null
    output?: string | null
}

export interface packageJson_2 {
    name?: string | null
    description?: string | null
    version?: string | null
    main?: string | null
    keywords?: string[] | null
    author?: string | null
    license?: string | null
    dependencies?: dependencies_2[] | null
    devDependencies?: devDependencies_2[] | null
}

export interface dependencies_2 {
    name?: string | null
    version?: string | null
}

export interface devDependencies_2 {
    name?: string | null
    version?: string | null
}

export interface internal_11 {
    contentDigest?: string | null
    type?: string | null
    owner?: string | null
}

export interface internal_10 {
    type?: string | null
    contentDigest?: string | null
    owner?: string | null
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: sitePageGroupConnectionEdge[] | null /* A list of edges. */
    field?: string | null
    fieldValue?: string | null
    totalCount?: number | null
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
    node?: SitePage | null /* The item at the end of the edge */
    next?: SitePage | null /* The next edge in the connection */
    previous?: SitePage | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface SitePluginConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: SitePluginEdge[] | null /* A list of edges. */
    totalCount?: number | null
    distinct?: string[] | null
    group?: sitePluginGroupConnectionConnection[] | null
}
/* An edge in a connection. */
export interface SitePluginEdge {
    node?: SitePlugin | null /* The item at the end of the edge */
    next?: SitePlugin | null /* The next edge in the connection */
    previous?: SitePlugin | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: sitePluginGroupConnectionEdge[] | null /* A list of edges. */
    field?: string | null
    fieldValue?: string | null
    totalCount?: number | null
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
    node?: SitePlugin | null /* The item at the end of the edge */
    next?: SitePlugin | null /* The next edge in the connection */
    previous?: SitePlugin | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface FileConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: FileEdge[] | null /* A list of edges. */
    totalCount?: number | null
    distinct?: string[] | null
    group?: fileGroupConnectionConnection[] | null
}
/* An edge in a connection. */
export interface FileEdge {
    node?: File | null /* The item at the end of the edge */
    next?: File | null /* The next edge in the connection */
    previous?: File | null /* The previous edge in the connection */
}
/* Node of type File */
export interface File extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    childMarkdownRemark?: MarkdownRemark | null /* The child of this node of type markdownRemark */
    internal?: internal_12 | null
    sourceInstanceName?: string | null
    absolutePath?: string | null
    relativePath?: string | null
    extension?: string | null
    size?: string | null
    prettySize?: string | null
    modifiedTime?: string | null
    accessTime?: string | null
    changeTime?: string | null
    birthTime?: string | null
    root?: string | null
    dir?: string | null
    base?: string | null
    ext?: string | null
    name?: string | null
    dev?: number | null
    mode?: number | null
    nlink?: number | null
    uid?: number | null
    gid?: number | null
    rdev?: number | null
    blksize?: string | null
    ino?: number | null
    blocks?: number | null
    atimeMs?: number | null
    mtimeMs?: number | null
    ctimeMs?: number | null
    birthtimeMs?: number | null
    atime?: string | null
    mtime?: string | null
    ctime?: string | null
    birthtime?: string | null
}
/* Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    internal?: internal_13 | null
    frontmatter?: frontmatter_2 | null
    fileAbsolutePath?: string | null
    fields?: fields_2 | null
    html?: string | null
    excerpt?: string | null
    headings?: MarkdownHeading[] | null
    timeToRead?: number | null
    tableOfContents?: string | null
    wordCount?: wordCount | null
}

export interface internal_13 {
    content?: string | null
    contentDigest?: string | null
    type?: string | null
    owner?: string | null
    fieldOwners?: fieldOwners_2 | null
}

export interface fieldOwners_2 {
    slug?: string | null
}

export interface frontmatter_2 {
    title?: string | null
    layout?: string | null
    permalink?: string | null
    _PARENT?: string | null
    parent?: string | null
}

export interface fields_2 {
    slug?: string | null
}

export interface MarkdownHeading {
    value?: string | null
    depth?: number | null
}

export interface wordCount {
    paragraphs?: number | null
    sentences?: number | null
    words?: number | null
}

export interface internal_12 {
    contentDigest?: string | null
    mediaType?: string | null
    type?: string | null
    owner?: string | null
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: fileGroupConnectionEdge[] | null /* A list of edges. */
    field?: string | null
    fieldValue?: string | null
    totalCount?: number | null
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
    node?: File | null /* The item at the end of the edge */
    next?: File | null /* The next edge in the connection */
    previous?: File | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface MarkdownRemarkConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: MarkdownRemarkEdge[] | null /* A list of edges. */
    totalCount?: number | null
    distinct?: string[] | null
    group?: markdownRemarkGroupConnectionConnection[] | null
}
/* An edge in a connection. */
export interface MarkdownRemarkEdge {
    node?: MarkdownRemark | null /* The item at the end of the edge */
    next?: MarkdownRemark | null /* The next edge in the connection */
    previous?: MarkdownRemark | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: markdownRemarkGroupConnectionEdge[] | null /* A list of edges. */
    field?: string | null
    fieldValue?: string | null
    totalCount?: number | null
}
/* An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
    node?: MarkdownRemark | null /* The item at the end of the edge */
    next?: MarkdownRemark | null /* The next edge in the connection */
    previous?: MarkdownRemark | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface contentfulBlogPostBodyTextNodeConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: contentfulBlogPostBodyTextNodeEdge[] | null /* A list of edges. */
    totalCount?: number | null
    distinct?: string[] | null
    group?: contentfulBlogPostBodyTextNodeGroupConnectionConnection[] | null
}
/* An edge in a connection. */
export interface contentfulBlogPostBodyTextNodeEdge {
    node?: contentfulBlogPostBodyTextNode | null /* The item at the end of the edge */
    next?: contentfulBlogPostBodyTextNode | null /* The next edge in the connection */
    previous?: contentfulBlogPostBodyTextNode | null /* The previous edge in the connection */
}
/* Node of type contentfulBlogPostBodyTextNode */
export interface contentfulBlogPostBodyTextNode extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    childMarkdownRemark?: MarkdownRemark | null /* The child of this node of type markdownRemark */
    body?: string | null
    internal?: internal_14 | null
}

export interface internal_14 {
    type?: string | null
    mediaType?: string | null
    content?: string | null
    contentDigest?: string | null
    owner?: string | null
}
/* A connection to a list of items. */
export interface contentfulBlogPostBodyTextNodeGroupConnectionConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: contentfulBlogPostBodyTextNodeGroupConnectionEdge[] | null /* A list of edges. */
    field?: string | null
    fieldValue?: string | null
    totalCount?: number | null
}
/* An edge in a connection. */
export interface contentfulBlogPostBodyTextNodeGroupConnectionEdge {
    node?: contentfulBlogPostBodyTextNode | null /* The item at the end of the edge */
    next?: contentfulBlogPostBodyTextNode | null /* The next edge in the connection */
    previous?: contentfulBlogPostBodyTextNode | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface ContentfulContentTypeConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: ContentfulContentTypeEdge[] | null /* A list of edges. */
    totalCount?: number | null
    distinct?: string[] | null
    group?: contentfulContentTypeGroupConnectionConnection[] | null
}
/* An edge in a connection. */
export interface ContentfulContentTypeEdge {
    node?: ContentfulContentType | null /* The item at the end of the edge */
    next?: ContentfulContentType | null /* The next edge in the connection */
    previous?: ContentfulContentType | null /* The previous edge in the connection */
}
/* Node of type ContentfulContentType */
export interface ContentfulContentType extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    name?: string | null
    displayField?: string | null
    description?: string | null
    internal?: internal_15 | null
}

export interface internal_15 {
    type?: string | null
    contentDigest?: string | null
    owner?: string | null
}
/* A connection to a list of items. */
export interface contentfulContentTypeGroupConnectionConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: contentfulContentTypeGroupConnectionEdge[] | null /* A list of edges. */
    field?: string | null
    fieldValue?: string | null
    totalCount?: number | null
}
/* An edge in a connection. */
export interface contentfulContentTypeGroupConnectionEdge {
    node?: ContentfulContentType | null /* The item at the end of the edge */
    next?: ContentfulContentType | null /* The next edge in the connection */
    previous?: ContentfulContentType | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface ContentfulBlogPostConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: ContentfulBlogPostEdge[] | null /* A list of edges. */
    totalCount?: number | null
    distinct?: string[] | null
    group?: contentfulBlogPostGroupConnectionConnection[] | null
}
/* An edge in a connection. */
export interface ContentfulBlogPostEdge {
    node?: ContentfulBlogPost | null /* The item at the end of the edge */
    next?: ContentfulBlogPost | null /* The next edge in the connection */
    previous?: ContentfulBlogPost | null /* The previous edge in the connection */
}
/* Node of type ContentfulBlogPost */
export interface ContentfulBlogPost extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    childContentfulBlogPostBodyTextNode?: contentfulBlogPostBodyTextNode | null /* The child of this node of type contentfulBlogPostBodyTextNode */
    title?: string | null
    slug?: string | null
    publishDate?: string | null
    author?: string | null
    tags?: string[] | null
    heroImage?: ContentfulAsset | null
    body?: contentfulBlogPostBodyTextNode | null
    createdAt?: string | null
    updatedAt?: string | null
    internal?: internal_16 | null
    node_locale?: string | null
}
/* Node of type ContentfulAsset */
export interface ContentfulAsset extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    file?: file_2 | null
    title?: string | null
    description?: string | null
    node_locale?: string | null
    internal?: internal_17 | null
    resolutions?: ContentfulResolutions | null
    sizes?: ContentfulSizes | null
    responsiveResolution?: ContentfulResponsiveResolution | null
    responsiveSizes?: ContentfulResponsiveSizes | null
    resize?: ContentfulResize | null
}

export interface file_2 {
    url?: string | null
    details?: details_2 | null
    fileName?: string | null
    contentType?: string | null
}

export interface details_2 {
    size?: number | null
    image?: image_2 | null
}

export interface image_2 {
    width?: number | null
    height?: number | null
}

export interface internal_17 {
    type?: string | null
    contentDigest?: string | null
    owner?: string | null
}

export interface ContentfulResolutions {
    base64?: string | null
    aspectRatio?: number | null
    width?: number | null
    height?: number | null
    src?: string | null
    srcSet?: string | null
}

export interface ContentfulSizes {
    base64?: string | null
    aspectRatio?: number | null
    src?: string | null
    srcSet?: string | null
    sizes?: string | null
}

export interface ContentfulResponsiveResolution {
    base64?: string | null
    aspectRatio?: number | null
    width?: number | null
    height?: number | null
    src?: string | null
    srcSet?: string | null
}

export interface ContentfulResponsiveSizes {
    base64?: string | null
    aspectRatio?: number | null
    src?: string | null
    srcSet?: string | null
    sizes?: string | null
}

export interface ContentfulResize {
    src?: string | null
    width?: number | null
    height?: number | null
    aspectRatio?: number | null
}

export interface internal_16 {
    type?: string | null
    contentDigest?: string | null
    owner?: string | null
}
/* A connection to a list of items. */
export interface contentfulBlogPostGroupConnectionConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: contentfulBlogPostGroupConnectionEdge[] | null /* A list of edges. */
    field?: string | null
    fieldValue?: string | null
    totalCount?: number | null
}
/* An edge in a connection. */
export interface contentfulBlogPostGroupConnectionEdge {
    node?: ContentfulBlogPost | null /* The item at the end of the edge */
    next?: ContentfulBlogPost | null /* The next edge in the connection */
    previous?: ContentfulBlogPost | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface ContentfulAssetConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: ContentfulAssetEdge[] | null /* A list of edges. */
    totalCount?: number | null
    distinct?: string[] | null
    group?: contentfulAssetGroupConnectionConnection[] | null
}
/* An edge in a connection. */
export interface ContentfulAssetEdge {
    node?: ContentfulAsset | null /* The item at the end of the edge */
    next?: ContentfulAsset | null /* The next edge in the connection */
    previous?: ContentfulAsset | null /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface contentfulAssetGroupConnectionConnection {
    pageInfo: PageInfo /* Information to aid in pagination. */
    edges?: contentfulAssetGroupConnectionEdge[] | null /* A list of edges. */
    field?: string | null
    fieldValue?: string | null
    totalCount?: number | null
}
/* An edge in a connection. */
export interface contentfulAssetGroupConnectionEdge {
    node?: ContentfulAsset | null /* The item at the end of the edge */
    next?: ContentfulAsset | null /* The next edge in the connection */
    previous?: ContentfulAsset | null /* The previous edge in the connection */
}
/* Node of type Site */
export interface Site extends Node {
    id: string /* The id of this node. */
    parent?: Node | null /* The parent of this node. */
    children?: Node[] | null /* The children of this node. */
    siteMetadata?: siteMetadata_2 | null
    port?: string | null
    host?: string | null
    pathPrefix?: string | null
    polyfill?: boolean | null
    buildTime?: string | null
    internal?: internal_18 | null
}

export interface siteMetadata_2 {
    title?: string | null
    description?: string | null
    siteUrl?: string | null
}

export interface internal_18 {
    contentDigest?: string | null
    type?: string | null
    owner?: string | null
}

export interface sitePageConnectionSort {
    fields: SitePageConnectionSortByFieldsEnum[]
    order?: sitePageConnectionSortOrderValues | null
}
/* Filter connection on its fields */
export interface filterSitePage {
    layout?: sitePageConnectionLayoutQueryString | null
    jsonName?: sitePageConnectionJsonNameQueryString | null
    internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null
    path?: sitePageConnectionPathQueryString_2 | null
    component?: sitePageConnectionComponentQueryString | null
    componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null
    context?: sitePageConnectionContextInputObject | null
    updatedAt?: sitePageConnectionUpdatedAtQueryInteger | null
    pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString | null
    componentPath?: sitePageConnectionComponentPathQueryString | null
    id?: sitePageConnectionIdQueryString_2 | null
    internal?: sitePageConnectionInternalInputObject_2 | null
}

export interface sitePageConnectionLayoutQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionJsonNameQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionInternalComponentNameQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionPathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionComponentQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionComponentChunkNameQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionContextInputObject {
    path?: sitePageConnectionContextPathQueryString | null
    fileSlug?: sitePageConnectionContextFileSlugQueryString | null
    id?: sitePageConnectionContextIdQueryString | null
}

export interface sitePageConnectionContextPathQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionContextFileSlugQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionContextIdQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionUpdatedAtQueryInteger {
    eq?: number | null
    ne?: number | null
}

export interface sitePageConnectionPluginCreatorIdQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionComponentPathQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionInternalInputObject_2 {
    type?: sitePageConnectionInternalTypeQueryString_2 | null
    contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null
    owner?: sitePageConnectionInternalOwnerQueryString_2 | null
}

export interface sitePageConnectionInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionSort {
    fields: SitePluginConnectionSortByFieldsEnum[]
    order?: sitePluginConnectionSortOrderValues | null
}
/* Filter connection on its fields */
export interface filterSitePlugin {
    resolve?: sitePluginConnectionResolveQueryString_2 | null
    id?: sitePluginConnectionIdQueryString_2 | null
    name?: sitePluginConnectionNameQueryString_2 | null
    version?: sitePluginConnectionVersionQueryString_2 | null
    pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null
    nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null
    pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null
    packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null
    internal?: sitePluginConnectionInternalInputObject_2 | null
}

export interface sitePluginConnectionResolveQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
    plugins?: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null
    name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null
    path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null
    spaceId?: sitePluginConnectionPluginOptionsSpaceIdQueryString_2 | null
    accessToken?: sitePluginConnectionPluginOptionsAccessTokenQueryString_2 | null
    query?: sitePluginConnectionPluginOptionsQueryQueryString_2 | null
    feeds?: sitePluginConnectionPluginOptionsFeedsQueryList_2 | null
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
    in?: sitePluginConnectionPluginOptionsPluginsInputObject_2[] | null
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
    resolve?: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null
    id?: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null
    name?: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null
    version?: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null
    pluginFilepath?: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsSpaceIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsAccessTokenQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsQueryQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsFeedsQueryList_2 {
    in?: sitePluginConnectionPluginOptionsFeedsInputObject_2[] | null
}

export interface sitePluginConnectionPluginOptionsFeedsInputObject_2 {
    query?: sitePluginConnectionPluginOptionsFeedsQueryQueryString_2 | null
    output?: sitePluginConnectionPluginOptionsFeedsOutputQueryString_2 | null
}

export interface sitePluginConnectionPluginOptionsFeedsQueryQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPluginOptionsFeedsOutputQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
    in?: string[] | null
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
    name?: sitePluginConnectionPackageJsonNameQueryString_2 | null
    description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null
    version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null
    main?: sitePluginConnectionPackageJsonMainQueryString_2 | null
    keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null
    author?: sitePluginConnectionPackageJsonAuthorQueryString_2 | null
    license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null
    dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null
    devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
    in?: string[] | null
}

export interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
    in?: sitePluginConnectionPackageJsonDependenciesInputObject_2[] | null
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
    name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null
    version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
    in?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[] | null
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
    name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null
    version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionInternalInputObject_2 {
    contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null
    type?: sitePluginConnectionInternalTypeQueryString_2 | null
    owner?: sitePluginConnectionInternalOwnerQueryString_2 | null
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionSort {
    fields: FileConnectionSortByFieldsEnum[]
    order?: fileConnectionSortOrderValues | null
}
/* Filter connection on its fields */
export interface filterFile {
    id?: fileConnectionIdQueryString_2 | null
    internal?: fileConnectionInternalInputObject_2 | null
    sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null
    absolutePath?: fileConnectionAbsolutePathQueryString_2 | null
    relativePath?: fileConnectionRelativePathQueryString_2 | null
    extension?: fileConnectionExtensionQueryString_2 | null
    size?: fileConnectionSizeQueryInteger_2 | null
    prettySize?: fileConnectionPrettySizeQueryString_2 | null
    modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null
    accessTime?: fileConnectionAccessTimeQueryString_2 | null
    changeTime?: fileConnectionChangeTimeQueryString_2 | null
    birthTime?: fileConnectionBirthTimeQueryString_2 | null
    root?: fileConnectionRootQueryString_2 | null
    dir?: fileConnectionDirQueryString_2 | null
    base?: fileConnectionBaseQueryString_2 | null
    ext?: fileConnectionExtQueryString_2 | null
    name?: fileConnectionNameQueryString_2 | null
    dev?: fileConnectionDevQueryInteger_2 | null
    mode?: fileConnectionModeQueryInteger_2 | null
    nlink?: fileConnectionNlinkQueryInteger_2 | null
    uid?: fileConnectionUidQueryInteger_2 | null
    gid?: fileConnectionGidQueryInteger_2 | null
    rdev?: fileConnectionRdevQueryInteger_2 | null
    blksize?: fileConnectionBlksizeQueryInteger_2 | null
    ino?: fileConnectionInoQueryInteger_2 | null
    blocks?: fileConnectionBlocksQueryInteger_2 | null
    atimeMs?: fileConnectionAtimeMsQueryInteger_2 | null
    mtimeMs?: fileConnectionMtimeMsQueryInteger_2 | null
    ctimeMs?: fileConnectionCtimeMsQueryInteger_2 | null
    birthtimeMs?: fileConnectionBirthtimeMsQueryInteger_2 | null
    atime?: fileConnectionAtimeQueryString_2 | null
    mtime?: fileConnectionMtimeQueryString_2 | null
    ctime?: fileConnectionCtimeQueryString_2 | null
    birthtime?: fileConnectionBirthtimeQueryString_2 | null
}

export interface fileConnectionIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionInternalInputObject_2 {
    contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null
    mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null
    type?: fileConnectionInternalTypeQueryString_2 | null
    owner?: fileConnectionInternalOwnerQueryString_2 | null
}

export interface fileConnectionInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionAbsolutePathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionRelativePathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionExtensionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionSizeQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionPrettySizeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionModifiedTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionAccessTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionChangeTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionBirthTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionRootQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionDirQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionBaseQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionExtQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionDevQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionModeQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionNlinkQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionUidQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionGidQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionRdevQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionBlksizeQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionInoQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionBlocksQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionAtimeMsQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionMtimeMsQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionCtimeMsQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionBirthtimeMsQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileConnectionAtimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionMtimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionCtimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileConnectionBirthtimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionSort {
    fields: MarkdownRemarkConnectionSortByFieldsEnum[]
    order?: markdownRemarkConnectionSortOrderValues | null
}
/* Filter connection on its fields */
export interface filterMarkdownRemark {
    id?: markdownRemarkConnectionIdQueryString_2 | null
    internal?: markdownRemarkConnectionInternalInputObject_2 | null
    frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null
    fileAbsolutePath?: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null
    fields?: markdownRemarkConnectionFieldsInputObject_2 | null
    html?: htmlQueryString_4 | null
    excerpt?: excerptQueryString_4 | null
    headings?: headingsQueryList_4 | null
    timeToRead?: timeToReadQueryInt_4 | null
    tableOfContents?: tableOfContentsQueryString_4 | null
    wordCount?: wordCountTypeName_4 | null
}

export interface markdownRemarkConnectionIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionInternalInputObject_2 {
    content?: markdownRemarkConnectionInternalContentQueryString_2 | null
    contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null
    type?: markdownRemarkConnectionInternalTypeQueryString_2 | null
    owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null
    fieldOwners?: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
    slug?: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null
}

export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
    title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null
    layout?: markdownRemarkConnectionFrontmatterLayoutQueryString_2 | null
    permalink?: markdownRemarkConnectionFrontmatterPermalinkQueryString_2 | null
    _PARENT?: markdownRemarkConnectionFrontmatterParentQueryString_3 | null
    parent?: markdownRemarkConnectionFrontmatterParentQueryString_4 | null
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionFrontmatterLayoutQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionFrontmatterPermalinkQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkConnectionFieldsInputObject_2 {
    slug?: markdownRemarkConnectionFieldsSlugQueryString_2 | null
}

export interface markdownRemarkConnectionFieldsSlugQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface htmlQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface excerptQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface headingsQueryList_4 {
    value?: headingsListElemValueQueryString_4 | null
    depth?: headingsListElemDepthQueryInt_4 | null
    in?: markdownHeadingInputObject_4[] | null
}

export interface headingsListElemValueQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface headingsListElemDepthQueryInt_4 {
    eq?: number | null
    ne?: number | null
}

export interface markdownHeadingInputObject_4 {
    value?: string | null
    depth?: number | null
}

export interface timeToReadQueryInt_4 {
    eq?: number | null
    ne?: number | null
}

export interface tableOfContentsQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface wordCountTypeName_4 {
    paragraphs?: wordCountParagraphsQueryInt_4 | null
    sentences?: wordCountSentencesQueryInt_4 | null
    words?: wordCountWordsQueryInt_4 | null
}

export interface wordCountParagraphsQueryInt_4 {
    eq?: number | null
    ne?: number | null
}

export interface wordCountSentencesQueryInt_4 {
    eq?: number | null
    ne?: number | null
}

export interface wordCountWordsQueryInt_4 {
    eq?: number | null
    ne?: number | null
}

export interface contentfulBlogPostBodyTextNodeConnectionSort {
    fields: contentfulBlogPostBodyTextNodeConnectionSortByFieldsEnum[]
    order?: contentfulBlogPostBodyTextNodeConnectionSortOrderValues | null
}
/* Filter connection on its fields */
export interface filterContentfulBlogPostBodyTextNode {
    id?: contentfulBlogPostBodyTextNodeConnectionIdQueryString_2 | null
    body?: contentfulBlogPostBodyTextNodeConnectionBodyQueryString_2 | null
    internal?: contentfulBlogPostBodyTextNodeConnectionInternalInputObject_2 | null
}

export interface contentfulBlogPostBodyTextNodeConnectionIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeConnectionBodyQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeConnectionInternalInputObject_2 {
    type?: contentfulBlogPostBodyTextNodeConnectionInternalTypeQueryString_2 | null
    mediaType?: contentfulBlogPostBodyTextNodeConnectionInternalMediaTypeQueryString_2 | null
    content?: contentfulBlogPostBodyTextNodeConnectionInternalContentQueryString_2 | null
    contentDigest?: contentfulBlogPostBodyTextNodeConnectionInternalContentDigestQueryString_2 | null
    owner?: contentfulBlogPostBodyTextNodeConnectionInternalOwnerQueryString_2 | null
}

export interface contentfulBlogPostBodyTextNodeConnectionInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeConnectionInternalMediaTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeConnectionInternalContentQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeConnectionInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeConnectionInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeConnectionSort {
    fields: ContentfulContentTypeConnectionSortByFieldsEnum[]
    order?: contentfulContentTypeConnectionSortOrderValues | null
}
/* Filter connection on its fields */
export interface filterContentfulContentType {
    id?: contentfulContentTypeConnectionIdQueryString_2 | null
    name?: contentfulContentTypeConnectionNameQueryString_2 | null
    displayField?: contentfulContentTypeConnectionDisplayFieldQueryString_2 | null
    description?: contentfulContentTypeConnectionDescriptionQueryString_2 | null
    internal?: contentfulContentTypeConnectionInternalInputObject_2 | null
}

export interface contentfulContentTypeConnectionIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeConnectionNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeConnectionDisplayFieldQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeConnectionDescriptionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeConnectionInternalInputObject_2 {
    type?: contentfulContentTypeConnectionInternalTypeQueryString_2 | null
    contentDigest?: contentfulContentTypeConnectionInternalContentDigestQueryString_2 | null
    owner?: contentfulContentTypeConnectionInternalOwnerQueryString_2 | null
}

export interface contentfulContentTypeConnectionInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeConnectionInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeConnectionInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionSort {
    fields: ContentfulBlogPostConnectionSortByFieldsEnum[]
    order?: contentfulBlogPostConnectionSortOrderValues | null
}
/* Filter connection on its fields */
export interface filterContentfulBlogPost {
    title?: contentfulBlogPostConnectionTitleQueryString_2 | null
    slug?: contentfulBlogPostConnectionSlugQueryString_2 | null
    publishDate?: contentfulBlogPostConnectionPublishDateQueryString_2 | null
    author?: contentfulBlogPostConnectionAuthorQueryString_2 | null
    tags?: contentfulBlogPostConnectionTagsQueryList_2 | null
    id?: contentfulBlogPostConnectionIdQueryString_2 | null
    createdAt?: contentfulBlogPostConnectionCreatedAtQueryString_2 | null
    updatedAt?: contentfulBlogPostConnectionUpdatedAtQueryString_2 | null
    internal?: contentfulBlogPostConnectionInternalInputObject_2 | null
    node_locale?: contentfulBlogPostConnectionNodeLocaleQueryString_2 | null
}

export interface contentfulBlogPostConnectionTitleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionSlugQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionPublishDateQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionAuthorQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionTagsQueryList_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
    in?: string[] | null
}

export interface contentfulBlogPostConnectionIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionCreatedAtQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionUpdatedAtQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionInternalInputObject_2 {
    type?: contentfulBlogPostConnectionInternalTypeQueryString_2 | null
    contentDigest?: contentfulBlogPostConnectionInternalContentDigestQueryString_2 | null
    owner?: contentfulBlogPostConnectionInternalOwnerQueryString_2 | null
}

export interface contentfulBlogPostConnectionInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostConnectionNodeLocaleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionSort {
    fields: ContentfulAssetConnectionSortByFieldsEnum[]
    order?: contentfulAssetConnectionSortOrderValues | null
}
/* Filter connection on its fields */
export interface filterContentfulAsset {
    id?: contentfulAssetConnectionIdQueryString_2 | null
    file?: contentfulAssetConnectionFileInputObject_2 | null
    title?: contentfulAssetConnectionTitleQueryString_2 | null
    description?: contentfulAssetConnectionDescriptionQueryString_2 | null
    node_locale?: contentfulAssetConnectionNodeLocaleQueryString_2 | null
    internal?: contentfulAssetConnectionInternalInputObject_2 | null
    resolutions?: resolutionsTypeName_4 | null
    sizes?: sizesTypeName_4 | null
    responsiveResolution?: responsiveResolutionTypeName_4 | null
    responsiveSizes?: responsiveSizesTypeName_4 | null
    resize?: resizeTypeName_4 | null
}

export interface contentfulAssetConnectionIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionFileInputObject_2 {
    url?: contentfulAssetConnectionFileUrlQueryString_2 | null
    details?: contentfulAssetConnectionFileDetailsInputObject_2 | null
    fileName?: contentfulAssetConnectionFileFileNameQueryString_2 | null
    contentType?: contentfulAssetConnectionFileContentTypeQueryString_2 | null
}

export interface contentfulAssetConnectionFileUrlQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionFileDetailsInputObject_2 {
    size?: contentfulAssetConnectionFileDetailsSizeQueryInteger_2 | null
    image?: contentfulAssetConnectionFileDetailsImageInputObject_2 | null
}

export interface contentfulAssetConnectionFileDetailsSizeQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface contentfulAssetConnectionFileDetailsImageInputObject_2 {
    width?: contentfulAssetConnectionFileDetailsImageWidthQueryInteger_2 | null
    height?: contentfulAssetConnectionFileDetailsImageHeightQueryInteger_2 | null
}

export interface contentfulAssetConnectionFileDetailsImageWidthQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface contentfulAssetConnectionFileDetailsImageHeightQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface contentfulAssetConnectionFileFileNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionFileContentTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionTitleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionDescriptionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionNodeLocaleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionInternalInputObject_2 {
    type?: contentfulAssetConnectionInternalTypeQueryString_2 | null
    contentDigest?: contentfulAssetConnectionInternalContentDigestQueryString_2 | null
    owner?: contentfulAssetConnectionInternalOwnerQueryString_2 | null
}

export interface contentfulAssetConnectionInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetConnectionInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resolutionsTypeName_4 {
    base64?: resolutionsBase64QueryString_4 | null
    aspectRatio?: resolutionsAspectRatioQueryFloat_4 | null
    width?: resolutionsWidthQueryFloat_4 | null
    height?: resolutionsHeightQueryFloat_4 | null
    src?: resolutionsSrcQueryString_4 | null
    srcSet?: resolutionsSrcSetQueryString_4 | null
}

export interface resolutionsBase64QueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resolutionsAspectRatioQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface resolutionsWidthQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface resolutionsHeightQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface resolutionsSrcQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resolutionsSrcSetQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sizesTypeName_4 {
    base64?: sizesBase64QueryString_4 | null
    aspectRatio?: sizesAspectRatioQueryFloat_4 | null
    src?: sizesSrcQueryString_4 | null
    srcSet?: sizesSrcSetQueryString_4 | null
    sizes?: sizesSizesQueryString_4 | null
}

export interface sizesBase64QueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sizesAspectRatioQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface sizesSrcQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sizesSrcSetQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sizesSizesQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveResolutionTypeName_4 {
    base64?: responsiveResolutionBase64QueryString_4 | null
    aspectRatio?: responsiveResolutionAspectRatioQueryFloat_4 | null
    width?: responsiveResolutionWidthQueryFloat_4 | null
    height?: responsiveResolutionHeightQueryFloat_4 | null
    src?: responsiveResolutionSrcQueryString_4 | null
    srcSet?: responsiveResolutionSrcSetQueryString_4 | null
}

export interface responsiveResolutionBase64QueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveResolutionAspectRatioQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface responsiveResolutionWidthQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface responsiveResolutionHeightQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface responsiveResolutionSrcQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveResolutionSrcSetQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveSizesTypeName_4 {
    base64?: responsiveSizesBase64QueryString_4 | null
    aspectRatio?: responsiveSizesAspectRatioQueryFloat_4 | null
    src?: responsiveSizesSrcQueryString_4 | null
    srcSet?: responsiveSizesSrcSetQueryString_4 | null
    sizes?: responsiveSizesSizesQueryString_4 | null
}

export interface responsiveSizesBase64QueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveSizesAspectRatioQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface responsiveSizesSrcQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveSizesSrcSetQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveSizesSizesQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resizeTypeName_4 {
    src?: resizeSrcQueryString_4 | null
    width?: resizeWidthQueryInt_4 | null
    height?: resizeHeightQueryInt_4 | null
    aspectRatio?: resizeAspectRatioQueryFloat_4 | null
}

export interface resizeSrcQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resizeWidthQueryInt_4 {
    eq?: number | null
    ne?: number | null
}

export interface resizeHeightQueryInt_4 {
    eq?: number | null
    ne?: number | null
}

export interface resizeAspectRatioQueryFloat_4 {
    eq?: number | null
    ne?: number | null
}

export interface sitePageLayoutQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageJsonNameQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageInternalComponentNameQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePagePathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageComponentQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageComponentChunkNameQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageContextInputObject {
    path?: sitePageContextPathQueryString | null
    fileSlug?: sitePageContextFileSlugQueryString | null
    id?: sitePageContextIdQueryString | null
}

export interface sitePageContextPathQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageContextFileSlugQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageContextIdQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageUpdatedAtQueryInteger {
    eq?: number | null
    ne?: number | null
}

export interface sitePagePluginCreatorIdQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageComponentPathQueryString {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageInternalInputObject_2 {
    type?: sitePageInternalTypeQueryString_2 | null
    contentDigest?: sitePageInternalContentDigestQueryString_2 | null
    owner?: sitePageInternalOwnerQueryString_2 | null
}

export interface sitePageInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePageInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginResolveQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsInputObject_2 {
    plugins?: sitePluginPluginOptionsPluginsQueryList_2 | null
    name?: sitePluginPluginOptionsNameQueryString_2 | null
    path?: sitePluginPluginOptionsPathQueryString_2 | null
    spaceId?: sitePluginPluginOptionsSpaceIdQueryString_2 | null
    accessToken?: sitePluginPluginOptionsAccessTokenQueryString_2 | null
    query?: sitePluginPluginOptionsQueryQueryString_2 | null
    feeds?: sitePluginPluginOptionsFeedsQueryList_2 | null
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
    in?: sitePluginPluginOptionsPluginsInputObject_2[] | null
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
    resolve?: sitePluginPluginOptionsPluginsResolveQueryString_2 | null
    id?: sitePluginPluginOptionsPluginsIdQueryString_2 | null
    name?: sitePluginPluginOptionsPluginsNameQueryString_2 | null
    version?: sitePluginPluginOptionsPluginsVersionQueryString_2 | null
    pluginFilepath?: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsPathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsSpaceIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsAccessTokenQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsQueryQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsFeedsQueryList_2 {
    in?: sitePluginPluginOptionsFeedsInputObject_2[] | null
}

export interface sitePluginPluginOptionsFeedsInputObject_2 {
    query?: sitePluginPluginOptionsFeedsQueryQueryString_2 | null
    output?: sitePluginPluginOptionsFeedsOutputQueryString_2 | null
}

export interface sitePluginPluginOptionsFeedsQueryQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPluginOptionsFeedsOutputQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginNodeApIsQueryList_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
    in?: string[] | null
}

export interface sitePluginPluginFilepathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonInputObject_2 {
    name?: sitePluginPackageJsonNameQueryString_2 | null
    description?: sitePluginPackageJsonDescriptionQueryString_2 | null
    version?: sitePluginPackageJsonVersionQueryString_2 | null
    main?: sitePluginPackageJsonMainQueryString_2 | null
    keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null
    author?: sitePluginPackageJsonAuthorQueryString_2 | null
    license?: sitePluginPackageJsonLicenseQueryString_2 | null
    dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null
    devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null
}

export interface sitePluginPackageJsonNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonMainQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
    in?: string[] | null
}

export interface sitePluginPackageJsonAuthorQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
    in?: sitePluginPackageJsonDependenciesInputObject_2[] | null
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
    name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null
    version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
    in?: sitePluginPackageJsonDevDependenciesInputObject_2[] | null
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
    name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null
    version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginInternalInputObject_2 {
    contentDigest?: sitePluginInternalContentDigestQueryString_2 | null
    type?: sitePluginInternalTypeQueryString_2 | null
    owner?: sitePluginInternalOwnerQueryString_2 | null
}

export interface sitePluginInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePluginInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface siteSiteMetadataInputObject_2 {
    title?: siteSiteMetadataTitleQueryString_2 | null
    description?: siteSiteMetadataDescriptionQueryString_2 | null
    siteUrl?: siteSiteMetadataSiteUrlQueryString_2 | null
}

export interface siteSiteMetadataTitleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface siteSiteMetadataDescriptionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface siteSiteMetadataSiteUrlQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePortQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface siteHostQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePathPrefixQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sitePolyfillQueryBoolean_2 {
    eq?: boolean | null
    ne?: boolean | null
}

export interface siteBuildTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface siteIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface siteInternalInputObject_2 {
    contentDigest?: siteInternalContentDigestQueryString_2 | null
    type?: siteInternalTypeQueryString_2 | null
    owner?: siteInternalOwnerQueryString_2 | null
}

export interface siteInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface siteInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface siteInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileInternalInputObject_2 {
    contentDigest?: fileInternalContentDigestQueryString_2 | null
    mediaType?: fileInternalMediaTypeQueryString_2 | null
    type?: fileInternalTypeQueryString_2 | null
    owner?: fileInternalOwnerQueryString_2 | null
}

export interface fileInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileInternalMediaTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileSourceInstanceNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileAbsolutePathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileRelativePathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileExtensionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileSizeQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface filePrettySizeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileModifiedTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileAccessTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileChangeTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileBirthTimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileRootQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileDirQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileBaseQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileExtQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileDevQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileModeQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileNlinkQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileUidQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileGidQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileRdevQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileBlksizeQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileInoQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileBlocksQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileAtimeMsQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileMtimeMsQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileCtimeMsQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileBirthtimeMsQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface fileAtimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileMtimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileCtimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface fileBirthtimeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkInternalInputObject_2 {
    content?: markdownRemarkInternalContentQueryString_2 | null
    contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null
    type?: markdownRemarkInternalTypeQueryString_2 | null
    owner?: markdownRemarkInternalOwnerQueryString_2 | null
    fieldOwners?: markdownRemarkInternalFieldOwnersInputObject_2 | null
}

export interface markdownRemarkInternalContentQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkInternalFieldOwnersInputObject_2 {
    slug?: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null
}

export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkFrontmatterInputObject_2 {
    title?: markdownRemarkFrontmatterTitleQueryString_2 | null
    layout?: markdownRemarkFrontmatterLayoutQueryString_2 | null
    permalink?: markdownRemarkFrontmatterPermalinkQueryString_2 | null
    _PARENT?: markdownRemarkFrontmatterParentQueryString_3 | null
    parent?: markdownRemarkFrontmatterParentQueryString_4 | null
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkFrontmatterLayoutQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkFrontmatterPermalinkQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkFrontmatterParentQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkFrontmatterParentQueryString_4 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface markdownRemarkFieldsInputObject_2 {
    slug?: markdownRemarkFieldsSlugQueryString_2 | null
}

export interface markdownRemarkFieldsSlugQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface htmlQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface excerptQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface headingsQueryList_3 {
    value?: headingsListElemValueQueryString_3 | null
    depth?: headingsListElemDepthQueryInt_3 | null
    in?: markdownHeadingInputObject_3[] | null
}

export interface headingsListElemValueQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface headingsListElemDepthQueryInt_3 {
    eq?: number | null
    ne?: number | null
}

export interface markdownHeadingInputObject_3 {
    value?: string | null
    depth?: number | null
}

export interface timeToReadQueryInt_3 {
    eq?: number | null
    ne?: number | null
}

export interface tableOfContentsQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface wordCountTypeName_3 {
    paragraphs?: wordCountParagraphsQueryInt_3 | null
    sentences?: wordCountSentencesQueryInt_3 | null
    words?: wordCountWordsQueryInt_3 | null
}

export interface wordCountParagraphsQueryInt_3 {
    eq?: number | null
    ne?: number | null
}

export interface wordCountSentencesQueryInt_3 {
    eq?: number | null
    ne?: number | null
}

export interface wordCountWordsQueryInt_3 {
    eq?: number | null
    ne?: number | null
}

export interface contentfulBlogPostBodyTextNodeIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeBodyQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeInternalInputObject_2 {
    type?: contentfulBlogPostBodyTextNodeInternalTypeQueryString_2 | null
    mediaType?: contentfulBlogPostBodyTextNodeInternalMediaTypeQueryString_2 | null
    content?: contentfulBlogPostBodyTextNodeInternalContentQueryString_2 | null
    contentDigest?: contentfulBlogPostBodyTextNodeInternalContentDigestQueryString_2 | null
    owner?: contentfulBlogPostBodyTextNodeInternalOwnerQueryString_2 | null
}

export interface contentfulBlogPostBodyTextNodeInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeInternalMediaTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeInternalContentQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostBodyTextNodeInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeDisplayFieldQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeDescriptionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeInternalInputObject_2 {
    type?: contentfulContentTypeInternalTypeQueryString_2 | null
    contentDigest?: contentfulContentTypeInternalContentDigestQueryString_2 | null
    owner?: contentfulContentTypeInternalOwnerQueryString_2 | null
}

export interface contentfulContentTypeInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulContentTypeInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostTitleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostSlugQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostPublishDateQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostAuthorQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostTagsQueryList_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
    in?: string[] | null
}

export interface contentfulBlogPostIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostCreatedAtQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostUpdatedAtQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostInternalInputObject_2 {
    type?: contentfulBlogPostInternalTypeQueryString_2 | null
    contentDigest?: contentfulBlogPostInternalContentDigestQueryString_2 | null
    owner?: contentfulBlogPostInternalOwnerQueryString_2 | null
}

export interface contentfulBlogPostInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulBlogPostNodeLocaleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetIdQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetFileInputObject_2 {
    url?: contentfulAssetFileUrlQueryString_2 | null
    details?: contentfulAssetFileDetailsInputObject_2 | null
    fileName?: contentfulAssetFileFileNameQueryString_2 | null
    contentType?: contentfulAssetFileContentTypeQueryString_2 | null
}

export interface contentfulAssetFileUrlQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetFileDetailsInputObject_2 {
    size?: contentfulAssetFileDetailsSizeQueryInteger_2 | null
    image?: contentfulAssetFileDetailsImageInputObject_2 | null
}

export interface contentfulAssetFileDetailsSizeQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface contentfulAssetFileDetailsImageInputObject_2 {
    width?: contentfulAssetFileDetailsImageWidthQueryInteger_2 | null
    height?: contentfulAssetFileDetailsImageHeightQueryInteger_2 | null
}

export interface contentfulAssetFileDetailsImageWidthQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface contentfulAssetFileDetailsImageHeightQueryInteger_2 {
    eq?: number | null
    ne?: number | null
}

export interface contentfulAssetFileFileNameQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetFileContentTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetTitleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetDescriptionQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetNodeLocaleQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetInternalInputObject_2 {
    type?: contentfulAssetInternalTypeQueryString_2 | null
    contentDigest?: contentfulAssetInternalContentDigestQueryString_2 | null
    owner?: contentfulAssetInternalOwnerQueryString_2 | null
}

export interface contentfulAssetInternalTypeQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetInternalContentDigestQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface contentfulAssetInternalOwnerQueryString_2 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resolutionsTypeName_3 {
    base64?: resolutionsBase64QueryString_3 | null
    aspectRatio?: resolutionsAspectRatioQueryFloat_3 | null
    width?: resolutionsWidthQueryFloat_3 | null
    height?: resolutionsHeightQueryFloat_3 | null
    src?: resolutionsSrcQueryString_3 | null
    srcSet?: resolutionsSrcSetQueryString_3 | null
}

export interface resolutionsBase64QueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resolutionsAspectRatioQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}

export interface resolutionsWidthQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}

export interface resolutionsHeightQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}

export interface resolutionsSrcQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resolutionsSrcSetQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sizesTypeName_3 {
    base64?: sizesBase64QueryString_3 | null
    aspectRatio?: sizesAspectRatioQueryFloat_3 | null
    src?: sizesSrcQueryString_3 | null
    srcSet?: sizesSrcSetQueryString_3 | null
    sizes?: sizesSizesQueryString_3 | null
}

export interface sizesBase64QueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sizesAspectRatioQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}

export interface sizesSrcQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sizesSrcSetQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface sizesSizesQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveResolutionTypeName_3 {
    base64?: responsiveResolutionBase64QueryString_3 | null
    aspectRatio?: responsiveResolutionAspectRatioQueryFloat_3 | null
    width?: responsiveResolutionWidthQueryFloat_3 | null
    height?: responsiveResolutionHeightQueryFloat_3 | null
    src?: responsiveResolutionSrcQueryString_3 | null
    srcSet?: responsiveResolutionSrcSetQueryString_3 | null
}

export interface responsiveResolutionBase64QueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveResolutionAspectRatioQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}

export interface responsiveResolutionWidthQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}

export interface responsiveResolutionHeightQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}

export interface responsiveResolutionSrcQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveResolutionSrcSetQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveSizesTypeName_3 {
    base64?: responsiveSizesBase64QueryString_3 | null
    aspectRatio?: responsiveSizesAspectRatioQueryFloat_3 | null
    src?: responsiveSizesSrcQueryString_3 | null
    srcSet?: responsiveSizesSrcSetQueryString_3 | null
    sizes?: responsiveSizesSizesQueryString_3 | null
}

export interface responsiveSizesBase64QueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveSizesAspectRatioQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}

export interface responsiveSizesSrcQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveSizesSrcSetQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface responsiveSizesSizesQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resizeTypeName_3 {
    src?: resizeSrcQueryString_3 | null
    width?: resizeWidthQueryInt_3 | null
    height?: resizeHeightQueryInt_3 | null
    aspectRatio?: resizeAspectRatioQueryFloat_3 | null
}

export interface resizeSrcQueryString_3 {
    eq?: string | null
    ne?: string | null
    regex?: string | null
    glob?: string | null
}

export interface resizeWidthQueryInt_3 {
    eq?: number | null
    ne?: number | null
}

export interface resizeHeightQueryInt_3 {
    eq?: number | null
    ne?: number | null
}

export interface resizeAspectRatioQueryFloat_3 {
    eq?: number | null
    ne?: number | null
}
export interface AllSitePageRootQueryTypeArgs {
    skip?: number | null
    limit?: number | null
    sort?: sitePageConnectionSort | null
    filter?: filterSitePage | null
}
export interface AllSitePluginRootQueryTypeArgs {
    skip?: number | null
    limit?: number | null
    sort?: sitePluginConnectionSort | null
    filter?: filterSitePlugin | null
}
export interface AllFileRootQueryTypeArgs {
    skip?: number | null
    limit?: number | null
    sort?: fileConnectionSort | null
    filter?: filterFile | null
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
    skip?: number | null
    limit?: number | null
    sort?: markdownRemarkConnectionSort | null
    filter?: filterMarkdownRemark | null
}
export interface AllContentfulBlogPostBodyTextNodeRootQueryTypeArgs {
    skip?: number | null
    limit?: number | null
    sort?: contentfulBlogPostBodyTextNodeConnectionSort | null
    filter?: filterContentfulBlogPostBodyTextNode | null
}
export interface AllContentfulContentTypeRootQueryTypeArgs {
    skip?: number | null
    limit?: number | null
    sort?: contentfulContentTypeConnectionSort | null
    filter?: filterContentfulContentType | null
}
export interface AllContentfulBlogPostRootQueryTypeArgs {
    skip?: number | null
    limit?: number | null
    sort?: contentfulBlogPostConnectionSort | null
    filter?: filterContentfulBlogPost | null
}
export interface AllContentfulAssetRootQueryTypeArgs {
    skip?: number | null
    limit?: number | null
    sort?: contentfulAssetConnectionSort | null
    filter?: filterContentfulAsset | null
}
export interface SitePageRootQueryTypeArgs {
    layout?: sitePageLayoutQueryString | null
    jsonName?: sitePageJsonNameQueryString | null
    internalComponentName?: sitePageInternalComponentNameQueryString | null
    path?: sitePagePathQueryString_2 | null
    component?: sitePageComponentQueryString | null
    componentChunkName?: sitePageComponentChunkNameQueryString | null
    context?: sitePageContextInputObject | null
    updatedAt?: sitePageUpdatedAtQueryInteger | null
    pluginCreatorId?: sitePagePluginCreatorIdQueryString | null
    componentPath?: sitePageComponentPathQueryString | null
    id?: sitePageIdQueryString_2 | null
    internal?: sitePageInternalInputObject_2 | null
}
export interface SitePluginRootQueryTypeArgs {
    resolve?: sitePluginResolveQueryString_2 | null
    id?: sitePluginIdQueryString_2 | null
    name?: sitePluginNameQueryString_2 | null
    version?: sitePluginVersionQueryString_2 | null
    pluginOptions?: sitePluginPluginOptionsInputObject_2 | null
    nodeAPIs?: sitePluginNodeApIsQueryList_2 | null
    pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null
    packageJson?: sitePluginPackageJsonInputObject_2 | null
    internal?: sitePluginInternalInputObject_2 | null
}
export interface SiteRootQueryTypeArgs {
    siteMetadata?: siteSiteMetadataInputObject_2 | null
    port?: sitePortQueryString_2 | null
    host?: siteHostQueryString_2 | null
    pathPrefix?: sitePathPrefixQueryString_2 | null
    polyfill?: sitePolyfillQueryBoolean_2 | null
    buildTime?: siteBuildTimeQueryString_2 | null
    id?: siteIdQueryString_2 | null
    internal?: siteInternalInputObject_2 | null
}
export interface FileRootQueryTypeArgs {
    id?: fileIdQueryString_2 | null
    internal?: fileInternalInputObject_2 | null
    sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null
    absolutePath?: fileAbsolutePathQueryString_2 | null
    relativePath?: fileRelativePathQueryString_2 | null
    extension?: fileExtensionQueryString_2 | null
    size?: fileSizeQueryInteger_2 | null
    prettySize?: filePrettySizeQueryString_2 | null
    modifiedTime?: fileModifiedTimeQueryString_2 | null
    accessTime?: fileAccessTimeQueryString_2 | null
    changeTime?: fileChangeTimeQueryString_2 | null
    birthTime?: fileBirthTimeQueryString_2 | null
    root?: fileRootQueryString_2 | null
    dir?: fileDirQueryString_2 | null
    base?: fileBaseQueryString_2 | null
    ext?: fileExtQueryString_2 | null
    name?: fileNameQueryString_2 | null
    dev?: fileDevQueryInteger_2 | null
    mode?: fileModeQueryInteger_2 | null
    nlink?: fileNlinkQueryInteger_2 | null
    uid?: fileUidQueryInteger_2 | null
    gid?: fileGidQueryInteger_2 | null
    rdev?: fileRdevQueryInteger_2 | null
    blksize?: fileBlksizeQueryInteger_2 | null
    ino?: fileInoQueryInteger_2 | null
    blocks?: fileBlocksQueryInteger_2 | null
    atimeMs?: fileAtimeMsQueryInteger_2 | null
    mtimeMs?: fileMtimeMsQueryInteger_2 | null
    ctimeMs?: fileCtimeMsQueryInteger_2 | null
    birthtimeMs?: fileBirthtimeMsQueryInteger_2 | null
    atime?: fileAtimeQueryString_2 | null
    mtime?: fileMtimeQueryString_2 | null
    ctime?: fileCtimeQueryString_2 | null
    birthtime?: fileBirthtimeQueryString_2 | null
}
export interface MarkdownRemarkRootQueryTypeArgs {
    id?: markdownRemarkIdQueryString_2 | null
    internal?: markdownRemarkInternalInputObject_2 | null
    frontmatter?: markdownRemarkFrontmatterInputObject_2 | null
    fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null
    fields?: markdownRemarkFieldsInputObject_2 | null
    html?: htmlQueryString_3 | null
    excerpt?: excerptQueryString_3 | null
    headings?: headingsQueryList_3 | null
    timeToRead?: timeToReadQueryInt_3 | null
    tableOfContents?: tableOfContentsQueryString_3 | null
    wordCount?: wordCountTypeName_3 | null
}
export interface ContentfulBlogPostBodyTextNodeRootQueryTypeArgs {
    id?: contentfulBlogPostBodyTextNodeIdQueryString_2 | null
    body?: contentfulBlogPostBodyTextNodeBodyQueryString_2 | null
    internal?: contentfulBlogPostBodyTextNodeInternalInputObject_2 | null
}
export interface ContentfulContentTypeRootQueryTypeArgs {
    id?: contentfulContentTypeIdQueryString_2 | null
    name?: contentfulContentTypeNameQueryString_2 | null
    displayField?: contentfulContentTypeDisplayFieldQueryString_2 | null
    description?: contentfulContentTypeDescriptionQueryString_2 | null
    internal?: contentfulContentTypeInternalInputObject_2 | null
}
export interface ContentfulBlogPostRootQueryTypeArgs {
    title?: contentfulBlogPostTitleQueryString_2 | null
    slug?: contentfulBlogPostSlugQueryString_2 | null
    publishDate?: contentfulBlogPostPublishDateQueryString_2 | null
    author?: contentfulBlogPostAuthorQueryString_2 | null
    tags?: contentfulBlogPostTagsQueryList_2 | null
    id?: contentfulBlogPostIdQueryString_2 | null
    createdAt?: contentfulBlogPostCreatedAtQueryString_2 | null
    updatedAt?: contentfulBlogPostUpdatedAtQueryString_2 | null
    internal?: contentfulBlogPostInternalInputObject_2 | null
    node_locale?: contentfulBlogPostNodeLocaleQueryString_2 | null
}
export interface ContentfulAssetRootQueryTypeArgs {
    id?: contentfulAssetIdQueryString_2 | null
    file?: contentfulAssetFileInputObject_2 | null
    title?: contentfulAssetTitleQueryString_2 | null
    description?: contentfulAssetDescriptionQueryString_2 | null
    node_locale?: contentfulAssetNodeLocaleQueryString_2 | null
    internal?: contentfulAssetInternalInputObject_2 | null
    resolutions?: resolutionsTypeName_3 | null
    sizes?: sizesTypeName_3 | null
    responsiveResolution?: responsiveResolutionTypeName_3 | null
    responsiveSizes?: responsiveSizesTypeName_3 | null
    resize?: resizeTypeName_3 | null
}
export interface DistinctSitePageConnectionArgs {
    field?: sitePageDistinctEnum | null
}
export interface GroupSitePageConnectionArgs {
    skip?: number | null
    limit?: number | null
    field?: sitePageGroupEnum | null
}
export interface DistinctSitePluginConnectionArgs {
    field?: sitePluginDistinctEnum | null
}
export interface GroupSitePluginConnectionArgs {
    skip?: number | null
    limit?: number | null
    field?: sitePluginGroupEnum | null
}
export interface DistinctFileConnectionArgs {
    field?: fileDistinctEnum | null
}
export interface GroupFileConnectionArgs {
    skip?: number | null
    limit?: number | null
    field?: fileGroupEnum | null
}
export interface SizeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface ModifiedTimeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface BlksizeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface AtimeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface MtimeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface CtimeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeFileArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface ExcerptMarkdownRemarkArgs {
    pruneLength?: number | null
}
export interface HeadingsMarkdownRemarkArgs {
    depth?: HeadingLevels | null
}
export interface DistinctMarkdownRemarkConnectionArgs {
    field?: markdownRemarkDistinctEnum | null
}
export interface GroupMarkdownRemarkConnectionArgs {
    skip?: number | null
    limit?: number | null
    field?: markdownRemarkGroupEnum | null
}
export interface DistinctContentfulBlogPostBodyTextNodeConnectionArgs {
    field?: contentfulBlogPostBodyTextNodeDistinctEnum | null
}
export interface GroupContentfulBlogPostBodyTextNodeConnectionArgs {
    skip?: number | null
    limit?: number | null
    field?: contentfulBlogPostBodyTextNodeGroupEnum | null
}
export interface DistinctContentfulContentTypeConnectionArgs {
    field?: contentfulContentTypeDistinctEnum | null
}
export interface GroupContentfulContentTypeConnectionArgs {
    skip?: number | null
    limit?: number | null
    field?: contentfulContentTypeGroupEnum | null
}
export interface DistinctContentfulBlogPostConnectionArgs {
    field?: contentfulBlogPostDistinctEnum | null
}
export interface GroupContentfulBlogPostConnectionArgs {
    skip?: number | null
    limit?: number | null
    field?: contentfulBlogPostGroupEnum | null
}
export interface PublishDateContentfulBlogPostArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface CreatedAtContentfulBlogPostArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface UpdatedAtContentfulBlogPostArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface ResolutionsContentfulAssetArgs {
    width?: number | null
    height?: number | null
    quality?: number | null
    toFormat?: ContentfulImageFormat | null
    resizingBehavior?: ImageResizingBehavior | null
    cropFocus?: ContentfulImageCropFocus | null
}
export interface SizesContentfulAssetArgs {
    maxWidth?: number | null
    maxHeight?: number | null
    quality?: number | null
    toFormat?: ContentfulImageFormat | null
    resizingBehavior?: ImageResizingBehavior | null
    cropFocus?: ContentfulImageCropFocus | null
    sizes?: string | null
}
export interface ResponsiveResolutionContentfulAssetArgs {
    width?: number | null
    height?: number | null
    quality?: number | null
    toFormat?: ContentfulImageFormat | null
    resizingBehavior?: ImageResizingBehavior | null
    cropFocus?: ContentfulImageCropFocus | null
}
export interface ResponsiveSizesContentfulAssetArgs {
    maxWidth?: number | null
    maxHeight?: number | null
    quality?: number | null
    toFormat?: ContentfulImageFormat | null
    resizingBehavior?: ImageResizingBehavior | null
    cropFocus?: ContentfulImageCropFocus | null
    sizes?: string | null
}
export interface ResizeContentfulAssetArgs {
    width?: number | null
    height?: number | null
    quality?: number | null
    jpegProgressive?: boolean | null
    resizingBehavior?: ImageResizingBehavior | null
    base64?: boolean | null
    toFormat?: ContentfulImageFormat | null
    cropFocus?: ContentfulImageCropFocus | null
}
export interface DistinctContentfulAssetConnectionArgs {
    field?: contentfulAssetDistinctEnum | null
}
export interface GroupContentfulAssetConnectionArgs {
    skip?: number | null
    limit?: number | null
    field?: contentfulAssetGroupEnum | null
}
export interface PortSiteArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}
export interface BuildTimeSiteArgs {
    formatString?: string | null
    fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */
    difference?:
        | string
        | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
    locale?: string | null /* Configures the locale Moment.js will use to format the date. */
}

export type SitePageConnectionSortByFieldsEnum =
    | 'layout'
    | 'jsonName'
    | 'internalComponentName'
    | 'path'
    | 'matchPath'
    | 'component'
    | 'componentChunkName'
    | 'context___path'
    | 'context___fileSlug'
    | 'context___id'
    | 'updatedAt'
    | 'pluginCreator___NODE'
    | 'pluginCreatorId'
    | 'componentPath'
    | 'id'
    | 'parent'
    | 'children'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'

export type sitePageConnectionSortOrderValues = 'ASC' | 'DESC'

export type sitePageDistinctEnum =
    | 'layout'
    | 'jsonName'
    | 'internalComponentName'
    | 'path'
    | 'component'
    | 'componentChunkName'
    | 'context___path'
    | 'context___fileSlug'
    | 'context___id'
    | 'updatedAt'
    | 'pluginCreator___NODE'
    | 'pluginCreatorId'
    | 'componentPath'
    | 'id'
    | 'parent'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'

export type sitePageGroupEnum =
    | 'layout'
    | 'jsonName'
    | 'internalComponentName'
    | 'path'
    | 'component'
    | 'componentChunkName'
    | 'context___path'
    | 'context___fileSlug'
    | 'context___id'
    | 'updatedAt'
    | 'pluginCreator___NODE'
    | 'pluginCreatorId'
    | 'componentPath'
    | 'id'
    | 'parent'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'

export type SitePluginConnectionSortByFieldsEnum =
    | 'resolve'
    | 'id'
    | 'name'
    | 'version'
    | 'pluginOptions___plugins'
    | 'pluginOptions___name'
    | 'pluginOptions___path'
    | 'pluginOptions___spaceId'
    | 'pluginOptions___accessToken'
    | 'pluginOptions___query'
    | 'pluginOptions___feeds'
    | 'nodeAPIs'
    | 'pluginFilepath'
    | 'packageJson___name'
    | 'packageJson___description'
    | 'packageJson___version'
    | 'packageJson___main'
    | 'packageJson___keywords'
    | 'packageJson___author'
    | 'packageJson___license'
    | 'packageJson___dependencies'
    | 'packageJson___devDependencies'
    | 'packageJson___peerDependencies'
    | 'packageJson___optionalDependecies'
    | 'packageJson___bundledDependecies'
    | 'parent'
    | 'children'
    | 'internal___contentDigest'
    | 'internal___type'
    | 'internal___owner'

export type sitePluginConnectionSortOrderValues = 'ASC' | 'DESC'

export type sitePluginDistinctEnum =
    | 'resolve'
    | 'id'
    | 'name'
    | 'version'
    | 'pluginOptions___plugins'
    | 'pluginOptions___name'
    | 'pluginOptions___path'
    | 'pluginOptions___spaceId'
    | 'pluginOptions___accessToken'
    | 'pluginOptions___query'
    | 'pluginOptions___feeds'
    | 'nodeAPIs'
    | 'pluginFilepath'
    | 'packageJson___name'
    | 'packageJson___description'
    | 'packageJson___version'
    | 'packageJson___main'
    | 'packageJson___keywords'
    | 'packageJson___author'
    | 'packageJson___license'
    | 'packageJson___dependencies'
    | 'packageJson___devDependencies'
    | 'parent'
    | 'internal___contentDigest'
    | 'internal___type'
    | 'internal___owner'

export type sitePluginGroupEnum =
    | 'resolve'
    | 'id'
    | 'name'
    | 'version'
    | 'pluginOptions___plugins'
    | 'pluginOptions___name'
    | 'pluginOptions___path'
    | 'pluginOptions___spaceId'
    | 'pluginOptions___accessToken'
    | 'pluginOptions___query'
    | 'pluginOptions___feeds'
    | 'nodeAPIs'
    | 'pluginFilepath'
    | 'packageJson___name'
    | 'packageJson___description'
    | 'packageJson___version'
    | 'packageJson___main'
    | 'packageJson___keywords'
    | 'packageJson___author'
    | 'packageJson___license'
    | 'packageJson___dependencies'
    | 'packageJson___devDependencies'
    | 'parent'
    | 'internal___contentDigest'
    | 'internal___type'
    | 'internal___owner'

export type FileConnectionSortByFieldsEnum =
    | 'id'
    | 'children'
    | 'parent'
    | 'internal___contentDigest'
    | 'internal___mediaType'
    | 'internal___type'
    | 'internal___owner'
    | 'sourceInstanceName'
    | 'absolutePath'
    | 'relativePath'
    | 'extension'
    | 'size'
    | 'prettySize'
    | 'modifiedTime'
    | 'accessTime'
    | 'changeTime'
    | 'birthTime'
    | 'root'
    | 'dir'
    | 'base'
    | 'ext'
    | 'name'
    | 'dev'
    | 'mode'
    | 'nlink'
    | 'uid'
    | 'gid'
    | 'rdev'
    | 'blksize'
    | 'ino'
    | 'blocks'
    | 'atimeMs'
    | 'mtimeMs'
    | 'ctimeMs'
    | 'birthtimeMs'
    | 'atime'
    | 'mtime'
    | 'ctime'
    | 'birthtime'

export type fileConnectionSortOrderValues = 'ASC' | 'DESC'

export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type fileDistinctEnum =
    | 'id'
    | 'children'
    | 'parent'
    | 'internal___contentDigest'
    | 'internal___mediaType'
    | 'internal___type'
    | 'internal___owner'
    | 'sourceInstanceName'
    | 'absolutePath'
    | 'relativePath'
    | 'extension'
    | 'size'
    | 'prettySize'
    | 'modifiedTime'
    | 'accessTime'
    | 'changeTime'
    | 'birthTime'
    | 'root'
    | 'dir'
    | 'base'
    | 'ext'
    | 'name'
    | 'dev'
    | 'mode'
    | 'nlink'
    | 'uid'
    | 'gid'
    | 'rdev'
    | 'blksize'
    | 'ino'
    | 'blocks'
    | 'atimeMs'
    | 'mtimeMs'
    | 'ctimeMs'
    | 'birthtimeMs'
    | 'atime'
    | 'mtime'
    | 'ctime'
    | 'birthtime'

export type fileGroupEnum =
    | 'id'
    | 'children'
    | 'parent'
    | 'internal___contentDigest'
    | 'internal___mediaType'
    | 'internal___type'
    | 'internal___owner'
    | 'sourceInstanceName'
    | 'absolutePath'
    | 'relativePath'
    | 'extension'
    | 'size'
    | 'prettySize'
    | 'modifiedTime'
    | 'accessTime'
    | 'changeTime'
    | 'birthTime'
    | 'root'
    | 'dir'
    | 'base'
    | 'ext'
    | 'name'
    | 'dev'
    | 'mode'
    | 'nlink'
    | 'uid'
    | 'gid'
    | 'rdev'
    | 'blksize'
    | 'ino'
    | 'blocks'
    | 'atimeMs'
    | 'mtimeMs'
    | 'ctimeMs'
    | 'birthtimeMs'
    | 'atime'
    | 'mtime'
    | 'ctime'
    | 'birthtime'

export type MarkdownRemarkConnectionSortByFieldsEnum =
    | 'id'
    | 'children'
    | 'parent'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___type'
    | 'internal___owner'
    | 'internal___fieldOwners___slug'
    | 'frontmatter___title'
    | 'frontmatter___layout'
    | 'frontmatter___permalink'
    | 'frontmatter____PARENT'
    | 'frontmatter___parent'
    | 'fileAbsolutePath'
    | 'fields___slug'
    | 'html'
    | 'excerpt'
    | 'headings'
    | 'timeToRead'
    | 'tableOfContents'
    | 'wordCount___paragraphs'
    | 'wordCount___sentences'
    | 'wordCount___words'

export type markdownRemarkConnectionSortOrderValues = 'ASC' | 'DESC'

export type markdownRemarkDistinctEnum =
    | 'id'
    | 'parent'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___type'
    | 'internal___owner'
    | 'internal___fieldOwners___slug'
    | 'frontmatter___title'
    | 'frontmatter___layout'
    | 'frontmatter___permalink'
    | 'frontmatter____PARENT'
    | 'frontmatter___parent'
    | 'fileAbsolutePath'
    | 'fields___slug'

export type markdownRemarkGroupEnum =
    | 'id'
    | 'parent'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___type'
    | 'internal___owner'
    | 'internal___fieldOwners___slug'
    | 'frontmatter___title'
    | 'frontmatter___layout'
    | 'frontmatter___permalink'
    | 'frontmatter____PARENT'
    | 'frontmatter___parent'
    | 'fileAbsolutePath'
    | 'fields___slug'

export type contentfulBlogPostBodyTextNodeConnectionSortByFieldsEnum =
    | 'id'
    | 'parent'
    | 'children'
    | 'body'
    | 'internal___type'
    | 'internal___mediaType'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___owner'

export type contentfulBlogPostBodyTextNodeConnectionSortOrderValues = 'ASC' | 'DESC'

export type contentfulBlogPostBodyTextNodeDistinctEnum =
    | 'id'
    | 'parent'
    | 'children'
    | 'body'
    | 'internal___type'
    | 'internal___mediaType'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___owner'

export type contentfulBlogPostBodyTextNodeGroupEnum =
    | 'id'
    | 'parent'
    | 'children'
    | 'body'
    | 'internal___type'
    | 'internal___mediaType'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___owner'

export type ContentfulContentTypeConnectionSortByFieldsEnum =
    | 'id'
    | 'parent'
    | 'children'
    | 'name'
    | 'displayField'
    | 'description'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'

export type contentfulContentTypeConnectionSortOrderValues = 'ASC' | 'DESC'

export type contentfulContentTypeDistinctEnum =
    | 'id'
    | 'name'
    | 'displayField'
    | 'description'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'

export type contentfulContentTypeGroupEnum =
    | 'id'
    | 'name'
    | 'displayField'
    | 'description'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'

export type ContentfulBlogPostConnectionSortByFieldsEnum =
    | 'title'
    | 'slug'
    | 'publishDate'
    | 'author'
    | 'tags'
    | 'heroImage___NODE'
    | 'body___NODE'
    | 'id'
    | 'createdAt'
    | 'updatedAt'
    | 'parent'
    | 'children'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'
    | 'node_locale'

export type contentfulBlogPostConnectionSortOrderValues = 'ASC' | 'DESC'

export type ContentfulImageFormat = 'NO_CHANGE' | 'JPG' | 'PNG' | 'WEBP'

export type ImageResizingBehavior = 'NO_CHANGE' | 'PAD' | 'CROP' | 'FILL' | 'THUMB' | 'SCALE'

export type ContentfulImageCropFocus =
    | 'TOP'
    | 'TOP_LEFT'
    | 'TOP_RIGHT'
    | 'BOTTOM'
    | 'BOTTOM_RIGHT'
    | 'BOTTOM_LEFT'
    | 'RIGHT'
    | 'LEFT'
    | 'FACES'

export type contentfulBlogPostDistinctEnum =
    | 'title'
    | 'slug'
    | 'publishDate'
    | 'author'
    | 'tags'
    | 'heroImage___NODE'
    | 'body___NODE'
    | 'id'
    | 'createdAt'
    | 'updatedAt'
    | 'parent'
    | 'children'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'
    | 'node_locale'

export type contentfulBlogPostGroupEnum =
    | 'title'
    | 'slug'
    | 'publishDate'
    | 'author'
    | 'tags'
    | 'heroImage___NODE'
    | 'body___NODE'
    | 'id'
    | 'createdAt'
    | 'updatedAt'
    | 'parent'
    | 'children'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'
    | 'node_locale'

export type ContentfulAssetConnectionSortByFieldsEnum =
    | 'id'
    | 'parent'
    | 'children'
    | 'file___url'
    | 'file___details___size'
    | 'file___details___image'
    | 'file___fileName'
    | 'file___contentType'
    | 'title'
    | 'description'
    | 'node_locale'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'
    | 'resolutions___base64'
    | 'resolutions___aspectRatio'
    | 'resolutions___width'
    | 'resolutions___height'
    | 'resolutions___src'
    | 'resolutions___srcSet'
    | 'sizes___base64'
    | 'sizes___aspectRatio'
    | 'sizes___src'
    | 'sizes___srcSet'
    | 'sizes___sizes'
    | 'responsiveResolution___base64'
    | 'responsiveResolution___aspectRatio'
    | 'responsiveResolution___width'
    | 'responsiveResolution___height'
    | 'responsiveResolution___src'
    | 'responsiveResolution___srcSet'
    | 'responsiveSizes___base64'
    | 'responsiveSizes___aspectRatio'
    | 'responsiveSizes___src'
    | 'responsiveSizes___srcSet'
    | 'responsiveSizes___sizes'
    | 'resize___src'
    | 'resize___width'
    | 'resize___height'
    | 'resize___aspectRatio'

export type contentfulAssetConnectionSortOrderValues = 'ASC' | 'DESC'

export type contentfulAssetDistinctEnum =
    | 'id'
    | 'file___url'
    | 'file___details___size'
    | 'file___details___image'
    | 'file___fileName'
    | 'file___contentType'
    | 'title'
    | 'description'
    | 'node_locale'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'

export type contentfulAssetGroupEnum =
    | 'id'
    | 'file___url'
    | 'file___details___size'
    | 'file___details___image'
    | 'file___fileName'
    | 'file___contentType'
    | 'title'
    | 'description'
    | 'node_locale'
    | 'internal___type'
    | 'internal___contentDigest'
    | 'internal___owner'
