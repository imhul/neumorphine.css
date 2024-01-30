<script lang="ts">
    import Tabs from '$lib/components/Tabs/index.svelte';
    import Config from '$lib/components/Config/index.svelte';
    import Header from '$lib/components/Header/index.svelte';
</script>

<div class="output">
    <Header />
    <div class="wrapper">
        <Tabs />
        <Config />
    </div>
</div>

<style lang="scss">
    .output {
        min-height: 100vh;

        .wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }
    }
</style>
