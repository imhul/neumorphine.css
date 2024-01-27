<script lang="ts">
    import { angle, color, offset, coeff } from '$lib/store';
    import { transformColor } from '$lib/utils/colors';
    import { shapes, states } from '$lib/utils/base';

    $: direction = 'NE';
    $: shapeBGColor = transformColor($color, $coeff);
    $: boxShadow = transformColor($color, 25 + $coeff);
    $: boxShadowNW = transformColor($color, 55 + $coeff);
    $: offsetX = Math.round(Math.cos((($angle - 90) * Math.PI) / 180) * $offset);
    $: offsetY = Math.round(Math.sin((($angle - 90) * Math.PI) / 180) * $offset);
    $: {
        if ($angle > 0 && $angle < 90) {
            direction = 'NE';
        } else if ($angle > 90 && $angle < 180) {
            direction = 'SE';
        } else if ($angle > 180 && $angle < 270) {
            direction = 'SW';
        } else if ($angle < 0) {
            direction = 'NW';
        }
    }
    $: styles =
        '--angle: ' +
        $angle +
        ';--offset-x: ' +
        offsetX + 'px' +
        ';--offset-y: ' +
        offsetY + 'px' +
        ';--color: ' +
        $color +
        ';--shape-bg: ' +
        shapeBGColor +
        ';--box-shadow: ' +
        boxShadow +
        ';--box-shadow-nw: ' +
        boxShadowNW +
        ';--box-shadow-inset: ' +
        $color +
        ';--shadow-width: ' +
        10 + 'px' +
        ';';
</script>

<div class="container" style={styles}>
    {#each shapes as shape}
        <div class="row">
            {#each states as state}
                <div class="shape {shape.title} shape-{state.title} {direction}">
                    <i class="icon">&#9763;</i>
                    <span class="title">{state.title}</span>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    .container {
        position: relative;
        display: flex;
        flex: 1 0 auto;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: rem(640);
        width: 95%;
        height: 100%;
        margin: 0 auto;
        background-color: var(--color);

        @media screen and (min-width: 768px) {
            width: 85%;
        }

        .row {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            margin-bottom: rem(25);

            &:last-child {
                border-bottom: none !important;
            }

            @media screen and (min-width: 768px) {
                flex-wrap: nowrap;
            }

            .shape {
                min-width: rem(100);
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
        margin: 0 rem(25);
        width: rem(100);
        height: rem(100);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: rem(50);
        font-size: rem(50);
        background: var(--shape-bg);
        color: var(--nav-light);

        &-default {
            &.NE {
                box-shadow:
                    var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow),
                    var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
            }

            &.SE {
                box-shadow:
                    var(--offset-y) var(--offset-y) var(--shadow-width) var(--box-shadow),
                    var(--offset-x) var(--offset-x) var(--shadow-width) var(--box-shadow-inset);
            }

            &.SW {
                box-shadow:
                    var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow),
                    var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow-inset);
            }

            &.NW {
                box-shadow:
                    var(--offset-x) var(--offset-x) var(--shadow-width) var(--box-shadow-nw),
                    var(--offset-y) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
            }
        }

        &-active {
            &.NE {
                box-shadow:
                    inset var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow),
                    inset var(--offset-x) var(--offset-y) var(--shadow-width)
                        var(--box-shadow-inset);
            }

            &.SE {
                box-shadow:
                    inset var(--offset-y) var(--offset-y) var(--shadow-width) var(--box-shadow),
                    inset var(--offset-x) var(--offset-x) var(--shadow-width)
                        var(--box-shadow-inset);
            }

            &.SW {
                box-shadow:
                    inset var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow),
                    inset var(--offset-y) var(--offset-x) var(--shadow-width)
                        var(--box-shadow-inset);
            }

            &.NW {
                box-shadow:
                inset var(--offset-x) var(--offset-x) var(--shadow-width) var(--box-shadow-nw),
                inset var(--offset-y) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
            }
        }

        &-focused {
            // 225deg
            &.NE {
                background: linear-gradient(
                    var(--angle),
                    var(--gradient-focused-from),
                    var(--gradient-focused-to)
                );
                box-shadow:
                    var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow),
                    var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
            }

            &.SE {
                // 315deg
                background: linear-gradient(
                    var(--angle),
                    var(--gradient-focused-from),
                    var(--gradient-focused-to)
                );
                box-shadow:
                    var(--offset-y) var(--offset-y) var(--shadow-width) var(--box-shadow),
                    var(--offset-x) var(--offset-x) var(--shadow-width) var(--box-shadow-inset);
            }

            &.SW {
                // 45deg
                background: linear-gradient(
                    var(--angle),
                    var(--gradient-focused-from),
                    var(--gradient-focused-to)
                );
                box-shadow:
                    var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow),
                    var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow-inset);
            }

            &.NW {
                // 145deg
                background: linear-gradient(
                    var(--angle),
                    var(--gradient-focused-from),
                    var(--gradient-focused-to)
                );
                box-shadow:
                    var(--offset-x) var(--offset-x) var(--shadow-width) var(--box-shadow-nw),
                    var(--offset-y) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
            }
        }

        &-disabled {
            &.NE {
                background: linear-gradient(
                    var(--angle),
                    var(--gradient-disabled-from),
                    var(--gradient-disabled-to)
                );
                box-shadow:
                    var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow),
                    var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
            }

            &.SE {
                background: linear-gradient(
                    var(--angle),
                    var(--gradient-disabled-from),
                    var(--gradient-disabled-to)
                );
                box-shadow:
                    var(--offset-y) var(--offset-y) var(--shadow-width) var(--box-shadow),
                    var(--offset-x) var(--offset-x) var(--shadow-width) var(--box-shadow-inset);
            }

            &.SW {
                background: linear-gradient(
                    var(--angle),
                    var(--gradient-disabled-from),
                    var(--gradient-disabled-to)
                );
                box-shadow:
                    var(--offset-x) var(--offset-y) var(--shadow-width) var(--box-shadow),
                    var(--offset-y) var(--offset-x) var(--shadow-width) var(--box-shadow-inset);
            }

            &.NW {
                background: linear-gradient(
                    var(--angle),
                    var(--gradient-disabled-from),
                    var(--gradient-disabled-to)
                );
                box-shadow:
                    var(--offset-x) var(--offset-x) var(--shadow-width) var(--box-shadow-nw),
                    var(--offset-y) var(--offset-y) var(--shadow-width) var(--box-shadow-inset);
            }
        }

        .title {
            font-size: rem(10);
        }
    }

    .icon {
        display: inline-block;
        text-rendering: auto;
        text-decoration: none;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
    }
</style>
