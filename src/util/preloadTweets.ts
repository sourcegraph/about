import type { Tweet } from 'react-tweet/api'
import { ScrapingBeeClient } from 'scrapingbee'

const getToken = (id: string): string => ((Number(id) / 1e15) * Math.PI).toString(6 ** 2).replace(/(0+|\.)/g, '')

const buildTweetUrlRequest = (tweetId: string): string => {
    const url = new URL('https://cdn.syndication.twimg.com/tweet-result')

    url.searchParams.set('id', tweetId)
    url.searchParams.set('lang', 'en')
    url.searchParams.set(
        'features',
        [
            'tfw_timeline_list:',
            'tfw_follower_count_sunset:true',
            'tfw_tweet_edit_backend:on',
            'tfw_refsrc_session:on',
            'tfw_fosnr_soft_interventions_enabled:on',
            'tfw_show_birdwatch_pivots_enabled:on',
            'tfw_show_business_verified_badge:on',
            'tfw_duplicate_scribes_to_settings:on',
            'tfw_use_profile_image_shape_enabled:on',
            'tfw_show_blue_verified_badge:on',
            'tfw_legacy_timeline_sunset:true',
            'tfw_show_gov_verified_badge:on',
            'tfw_show_business_affiliate_badge:on',
            'tfw_tweet_edit_frontend:on',
        ].join(';')
    )
    url.searchParams.set('token', getToken(tweetId))

    return url.toString()
}

export const preloadTweets = async (tweetIds: readonly string[]): Promise<(Tweet | undefined)[]> => {
    try {
        const client = new ScrapingBeeClient(
            '12S4D7O74G9AO34KRT3O67ZQ79S6SBN0EM7H4CV93H340VZBQ5A1TCUYSRQX7X11AXOPS8GBD9OZW1JZ'
        )
        const decoder = new TextDecoder()

        const tweets: (Tweet | undefined)[] = []

        for (const tweetId of tweetIds) {
            const tweetResponse = await client.get({
                url: buildTweetUrlRequest(tweetId),
            })

            tweets.push(JSON.parse(decoder.decode(tweetResponse.data)))
        }

        return tweets
    } catch (error) {
        console.error('Error fetching tweets')

        throw error
    }
}
