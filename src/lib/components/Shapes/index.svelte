<script lang="ts">
    import {
        angle,
        color,
        offset,
        width,
        coeff,
        cssData,
        showIcons
    } from '$lib/store';
    import { transformColor } from '$lib/utils/colors';
    import { shapes, states } from '$lib/utils/config';
    import { getOffsetX, getOffsetY } from '$lib/utils/offset';
    import Icon from '$lib/components/Icon/index.svelte';
    import Tooltip from '$lib/components/Tooltip/index.svelte';

    $: shapeBg = transformColor($color, 10 + $coeff);
    $: boxShadow = transformColor($color, 60 + $coeff);
    $: boxShadowInset = transformColor($color, 20 + $coeff);
    $: gradientFocusedFrom = transformColor($color, 50 + $coeff);
    $: gradientFocusedTo = transformColor($color, 70 + $coeff);
    $: offsetX = getOffsetX($angle, $offset);
    $: offsetY = getOffsetY($angle, $offset);
    $: styleObj = {
        '--angle:': $angle,
        '--offset-x:': offsetX + 'px',
        '--offset-y:': offsetY + 'px',
        '--color:': $color,
        '--shape-bg:': shapeBg,
        '--box-shadow:': boxShadow,
        '--box-shadow-inset: ': boxShadowInset,
        '--shadow-width:': $width + 'px',
        '--gradient-focused-from:': gradientFocusedFrom,
        '--gradient-focused-to:': gradientFocusedTo
    };

    $: {
        cssData.set({
            ...$cssData,
            shapeBg,
            boxShadow,
            boxShadowInset,
            gradientFocusedFrom,
            gradientFocusedTo,
            offsetX: offsetX + 'px',
            offsetY: offsetY + 'px',
            shadowWidth: $width + 'px'
        });
    }

    $: styles = Object.entries(styleObj)
        .map(([key, value]) => `${key} ${value}`)
        .join('; ');
</script>

<div class="container" style={styles}>
    <div class="flex-wrapper">
        {#each shapes as shape}
            <div class="row">
                {#each states as state}
                    <div
                        class="shape {shape.title} shape-{state.title}"
                    >
                        <Tooltip text="{shape.title} {state.title}">
                            {#if $showIcons}
                                <Icon
                                    size={40}
                                    name="hashtag"
                                    color="var(--primary)"
                                />
                            {:else}
                                <div class="helper" />
                            {/if}
                        </Tooltip>
                    </div>
                {/each}
            </div>
        {/each}
        <div class="row">
            {#each states as state}
                <Tooltip text="input {state.title}">
                    <input
                        value={$showIcons ? state.title : ''}
                        type="text"
                        class="input shape shape-{state.title}"
                    />
                </Tooltip>
            {/each}
        </div>
        <div class="row">
            {#each states as state}
                <span class="text">{state.title}</span>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        // --text-shadow: var(--offset-y) var(--offset-x)
        //     var(--shadow-width) var(--box-shadow);
        --shadow: var(--offset-y) var(--offset-x) var(--shadow-width)
                var(--box-shadow),
            var(--offset-y) var(--offset-x) var(--shadow-width)
                var(--box-shadow-inset);
        --inner-shadow: inset var(--offset-y) var(--offset-x)
                var(--shadow-width) var(--box-shadow),
            inset var(--offset-y) var(--offset-x) var(--shadow-width)
                var(--box-shadow-inset);
        --focused-gradient: linear-gradient(
            var(--angle),
            var(--gradient-focused-from),
            var(--gradient-focused-to)
        );
        --disabled-gradient: linear-gradient(
            var(--angle),
            var(--gradient-disabled-from),
            var(--gradient-disabled-to)
        );

        flex: 1 0 auto;
        margin-top: rem(130);

        .flex-wrapper {
            max-width: rem(640);
            margin: 0 auto;
            padding: rem(20) rem(20) rem(40);
            background-color: var(--color);

            .row {
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
                width: 100%;
                margin: rem(25) 0;

                &:last-child {
                    border-bottom: none !important;
                    margin-bottom: 0;
                }

                @media screen and (min-width: rem(1024)) {
                    flex-wrap: nowrap;
                }

                .rounded {
                    border-radius: rem(20) !important;
                }

                .circle {
                    border-radius: 50% !important;
                }

                .shape {
                    margin: 0 rem(10) rem(10);
                    width: rem(100);
                    height: rem(100);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    font-size: rem(50);
                    background: var(--shape-bg);
                    color: var(--primary);

                    @media screen and (min-width: rem(1024)) {
                        margin: 0 rem(25) rem(25);
                    }

                    &-default {
                        box-shadow: var(--shadow);
                    }

                    &-active {
                        box-shadow: var(--inner-shadow);
                    }

                    &-focused {
                        background: var(--focused-gradient);
                        box-shadow: var(--shadow);
                    }

                    &-disabled {
                        background: var(--disabled-gradient);
                        box-shadow: var(--shadow);
                    }

                    &.input {
                        height: rem(26);
                        padding: rem(2) rem(10);
                        border: none;
                        border-radius: rem(4);
                        font-size: rem(16);
                    }

                    .helper {
                        width: rem(50);
                        height: rem(50);
                    }
                }

                .text {
                    text-shadow: var(--shadow);
                    font-size: rem(32);
                    font-weight: 900;
                    text-transform: uppercase;
                    text-align: center;
                    color: var(--shape-bg);
                }
            }
        }
    }
</style>
