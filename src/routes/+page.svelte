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

<style lang="scss">
    .output {
        .wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }
    }
</style>
