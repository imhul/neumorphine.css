<script lang="ts">
    import { data } from '$lib/utils/config';
    import { schema } from '$lib/utils/schema';
</script>

<svelte:head>
    <title>{data.description}</title>

    <!-- links -->
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <link
        rel="preload"
        href="%sveltekit.assets%/preview.png"
        as="fetch"
    />
    <link rel="image_src" href="%sveltekit.assets%/preview.png" />
    <link rel="canonical" href={data.siteUrl} />
    <link href="https://github.com/imhul" rel="me" />
    <link rel="webmention" href={data.webmention} />
    <link rel="pingback" href={data.pingback} />

    <!-- meta -->
    <meta charset="utf-8" />
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    />
    <meta name="description" content={data.description} />
    <meta name="msapplication-TileColor" content={data.theme} />
    <meta name="theme-color" content={data.theme} />
    <meta name="robots" content="all" />
    <meta name="googlebot" content="all" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content={data.siteName} />
    <meta
        name="apple-mobile-web-app-status-bar-style"
        content={data.theme}
    />
    <meta name="referrer" content="always" />
    <meta name="subject" content={data.description} />
    <meta name="rating" content="safe for kids" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="google-site-verification" content={data.googleId} />

    <!-- Open Graph / Facebook -->
    <meta property="op:markup_version" content="v1.0" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={data.siteUrl} />
    <meta property="og:title" content={data.description} />
    <meta property="og:description" content={data.description} />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta property="og:image:alt" content={data.description} />
    <meta
        property="og:image"
        content="%sveltekit.assets%/preview.png"
    />
    <meta
        property="business:contact_data:country_name"
        content="Ukraine"
    />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content={data.siteName} />

    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
