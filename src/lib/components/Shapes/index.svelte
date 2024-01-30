<script lang="ts">
    import { angle, color, offset, width, coeff, cssData } from '$lib/store';
    import { transformColor } from '$lib/utils/colors';
    import { shapes, states } from '$lib/utils/config';
    import { getOffsetX, getOffsetY } from '$lib/utils/offset';
    import Icon from '$lib/components/Icon/index.svelte';

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

<div class="flex-wrapper" style={styles}>
    {#each shapes as shape}
        <div class="row">
            {#each states as state}
                <div class="shape {shape.title} shape-{state.title}">
                    <Icon size={40} name="hashtag" color="var(--nav-light)" />
                    <span class="title">{state.title}</span>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    .flex-wrapper {
        padding: rem(20);
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

            @media screen and (min-width: 768px) {
                flex-wrap: nowrap;
            }
        }
    }

    .rounded {
        border-radius: rem(20) !important;
    }

    .round {
        border-radius: 50% !important;
    }

    .shape {
        --shadow: var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow),
            var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow-inset);
        --inner-shadow: inset var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow),
            inset var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow-inset);
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

        margin: 0 rem(10) rem(10);
        width: rem(100);
        height: rem(100);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: rem(50);
        background: var(--shape-bg);
        color: var(--nav-light);

        @media screen and (min-width: 1200px) {
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

        .title {
            font-size: rem(10);
        }
    }
</style>
