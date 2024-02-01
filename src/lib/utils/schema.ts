import type { Graph } from 'schema-dts';
import { data, defaultImage } from '$lib/utils/config';

const date = new Date().toISOString();

export const schema: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            "@id": data.siteUrl + '/#website',
            url: data.siteUrl,
            name: data.siteName,
            description: data.description,
            author: data.author,
            sameAs: [data.siteUrl, data.linkedin, data.homePage, data.gitHub],
            inLanguage: "en-US",
            publisher: {
                "@id": data.siteUrl + '/#organization',
            }
        },
        {
            '@type': 'Organization',
            '@id': data.siteUrl + '/#organization',
            url: data.siteUrl,
            name: data.siteName,
            legalName: data.siteName,
            alternateName: data.siteName,
            description: data.description,
            contactPoint: {
                '@type': 'ContactPoint',
                email: data.email,
                contactType: 'customer service'
            },
            sameAs: [data.siteUrl, data.linkedin, data.homePage, data.gitHub],
            logo: {
                '@type': 'ImageObject',
                "@id": data.siteUrl + '/#/logo/image',
                name: `${data.siteName} Logo`,
                url: defaultImage,
                contentUrl: defaultImage,
                inLanguage: "en-US",
                width: '512',
                height: '512',
                caption: data.siteName
            },
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kyiv, Ukraine',
                postalCode: '01001',
                streetAddress: 'st. Khreshchatyk'
            }
        },
        {
            '@type': 'AboutPage',
            '@id': data.siteUrl + '/#about',
            url: data.siteUrl,
            name: data.siteName,
            inLanguage: 'en-US',
            description: data.description,
            mainEntity: {
                '@id': data.siteUrl + '/#website'
            },
          },
          {
            '@type': 'WebPage',
            '@id': data.siteUrl + '/#page',
            url: data.siteUrl,
            name: data.siteName,
            inLanguage: 'en-US',
            datePublished: data.datePublished,
            dateModified: date,
            isPartOf: {
              '@id': data.siteUrl + '/#about'
            },
            sameAs: [data.siteUrl, data.linkedin, data.homePage, data.gitHub],
            potentialAction: [
                {
                    "@type": "ReadAction",
                    "target": [data.siteUrl]
                }
            ],
            about: {
                "@id": data.siteUrl + '/#organization'
            },
            mainEntity: {
                '@id': data.siteUrl + '/#website'
            },
          },
    ]
};
