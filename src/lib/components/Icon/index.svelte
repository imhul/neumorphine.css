<script lang="ts">
    import icons from '$lib/utils/icons';

    export let name: keyof typeof icons;
    export let size = 20;
    export let color = 'var(--dark)';
</script>

<i class="icon" style="--size: {Math.round((size / 16) * 1000) / 1000}rem;--color: {color};">
    {@html icons[name]}
</i>

<style lang="scss">
    i {
        line-height: 1;
        width: var(--size);
        height: var(--size);
        text-align: center;
        vertical-align: middle;
        text-rendering: auto;
        text-decoration: none;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
    }

    :global(i.icon svg) {
        width: var(--size);
        height: var(--size);
    }

    :global(i.icon svg > *) {
        stroke: var(--color);
    }
</style>
