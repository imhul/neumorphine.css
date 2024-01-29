<script lang="ts">
    import { angle, color, offset, width, coeff } from '$lib/store';
    import { transformColor } from '$lib/utils/colors';
    import { shapes, states } from '$lib/utils/config';
    import { getOffsetX, getOffsetY } from '$lib/utils/offset';
    import Icon from '$lib/components/Icon/index.svelte';

    $: shapeBGColor = transformColor($color, 10 + $coeff);
    $: boxShadow = transformColor($color, 60 + $coeff);
    $: boxShadowNW = transformColor($color, 80 + $coeff);
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
        '--shape-bg:': shapeBGColor,
        '--box-shadow:': boxShadow,
        '--box-shadow-nw:': boxShadowNW,
        '--box-shadow-inset: ': boxShadowInset,
        '--shadow-width:': $width + 'px',
        '--gradient-focused-from:': gradientFocusedFrom,
        '--gradient-focused-to:': gradientFocusedTo
    };

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
        --shadow: var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow),
            var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
        --inner-shadow: inset var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow),
            inset var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
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

        margin: 0 rem(25) rem(25);
        width: rem(100);
        height: rem(100);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: rem(50);
        background: var(--shape-bg);
        color: var(--nav-light);

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
