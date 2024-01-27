<script lang="ts">
    import Tabs from '$lib/components/Tabs/index.svelte';
    import Config from '$lib/components/Config/index.svelte';
    import Footer from '$lib/components/Footer/index.svelte';
</script>

<div class="output">
    <div class="wrapper">
        <Tabs />
        <Config />
    </div>
    <Footer />
</div>

<style lang="scss">
    .output {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        min-height: 100vh;

        .wrapper {
            width: 100%;
        }
    }
</style>
