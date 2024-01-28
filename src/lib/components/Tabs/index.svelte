<script lang="ts">
    import tabs from '$lib/utils/tabs';
    let activeTab = 0;
</script>

<div class="tabs">
    <div role="tablist" class="tablist">
        {#each tabs as tab, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="tab {index === activeTab ? 'active' : ''}"
                on:click={() => (activeTab = index)}
                role="tab"
                tabindex={tab.id}
            >
                {tab.title}
            </div>
        {/each}
    </div>

    <div role="tabpanel" class="tabs-content">
        {#each tabs as tab, index}
            {#if index === activeTab}
                <div class="container">
                    <svelte:component this={tab.content} />
                </div>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    .tabs {
        flex: 1 0 auto;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: rem(100);

        .tablist {
            min-height: calc(100vh - rem(200));
            flex: 0 0 rem(150);
            display: flex;
            flex-flow: column wrap;
            align-items: flex-end;
            justify-content: flex-start;
            border-right: rem(1) solid var(--dark);
            padding-top: rem(40);

            .tab {
                position: relative;
                min-width: rem(100);
                padding: rem(10) rem(15);
                border: rem(1) solid var(--color-white);
                text-align: right;
                cursor: pointer;

                &.active {
                    border: rem(1) solid var(--dark);

                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        right: rem(-2);
                        width: rem(2);
                        height: 100%;
                        background-color: var(--color-white);
                    }
                }
            }
        }

        .tabs-content {
            height: 100%;
            flex: 1 0 auto;

            .container {
                position: relative;
                max-width: rem(640);
                width: 100%;
                height: 100%;
                margin: 0 auto 0 rem(20);

                @media screen and (min-width: 960px) {
                    // margin: 0 auto 0 rem(20);
                }

                @media screen and (min-width: 1200px) {
                    margin: 0 auto;
                }
            }
        }
    }
</style>
