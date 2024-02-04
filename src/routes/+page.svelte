<script lang="ts">
    import SEO from '$lib/components/SEO/index.svelte';
    import Shapes from '$lib/components/Shapes/index.svelte';
    import Config from '$lib/components/Config/index.svelte';
    import Header from '$lib/components/Header/index.svelte';
    import Footer from '$lib/components/Footer/index.svelte';
    import Description from '$lib/components/Description/index.svelte';
</script>

<SEO />

<div class="output">
    <Header />
    <div class="wrapper">
        <Shapes />
        <Config />
    </div>
    <Description />
    <Footer />
</div>

<div class="mobile-helper">
    <h1>
        This application is not designed for mobile devices! We
        recommend that you open it on your desktop or tablet.
    </h1>
</div>

<style lang="scss">
    .output {
        max-height: 100vh;
        overflow: hidden;

        .wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        @media screen and (min-width: 800px) {
            max-height: 100%;
            overflow: unset;
        }
    }

    .mobile-helper {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - rem(90));
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        color: var(--primary);
        background-color: var(--light);

        @media screen and (min-width: 800px) {
            display: none;
        }

        h1 {
            max-width: 70%;
            font-size: rem(34);
            line-height: 120%;
            text-align: center;
        }
    }
</style>
