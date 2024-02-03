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
        display: none;

        .wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        @media screen and (min-width: 800px) {
            display: block;
        }
    }

    .mobile-helper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary);

        @media screen and (min-width: 800px) {
            display: none;
        }

        h1 {
            max-width: 60%;
            font-size: rem(34);
            line-height: 1;
            text-align: center;
        }
    }
</style>
