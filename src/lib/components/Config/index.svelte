<script lang="ts">
    import { color, angle, offset, width, coeff } from '$lib/store';
    import Icon from '$lib/components/Icon/index.svelte';
    import Tooltip from '$lib/components/Tooltip/index.svelte';

    let code = 'Your code: ';
    let clicked = false;
    let show = true;

    const onMouseMove = (event: any) => {
        if (!clicked) return;
        const rect = event.target.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = event.clientX - rect.left - centerX;
        const mouseY = event.clientY - rect.top - centerY;
        angle.set(Math.round((Math.atan2(mouseY, mouseX) * 180) / Math.PI) + 90);
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="config-toggle" on:click={() => (show = true)} role="button" tabindex="0">
    <Icon size={26} name="cog" color="var(--nav-light)" />
</div>

{#if show}
    <div class="config">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="close" on:click={() => (show = false)} role="button" tabindex="0">
            <Icon size={10} name="close" />
        </div>

        <div class="flex-wrapper">
            <div class="flex">
                <div class="info title">Background Color</div>
                <input class="circle color-picker" bind:value={$color} type="color" />
                <label class="info">
                    <div class="btn-wrapper">
                        {#if $color !== '#ffffff'}
                            <Tooltip position="up" text="Reset">
                                <button on:click={() => color.set('#ffffff')}>
                                    <Icon size={26} name="refresh" />
                                </button>
                            </Tooltip>
                        {/if}
                    </div>
                    <input type="text" bind:value={$color} />
                </label>
            </div>

            <div class="flex">
                <div class="info title">Light Source</div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    class="circle"
                    on:mousemove={onMouseMove}
                    on:click={() => (clicked = !clicked)}
                    role="button"
                    tabindex="0"
                >
                    <div
                        class="radius"
                        class:active={clicked}
                        style="transform: rotate({$angle}deg) translate(-50%, -50%);"
                    >
                        <svg class="label" width="20" height="20" viewBox="0 0 20 20">
                            <polygon
                                fill="none"
                                stroke="#000"
                                points="19.5 5.9 19.5 14.1 14.5 10.4 14.5 15.5 .5 15.5 .5 4.5 14.5 4.5 14.5 9.6 19.5 5.9"
                            />
                        </svg>
                    </div>
                    <div class="tooltip">
                        <Icon size={34} name={clicked ? 'lock' : 'pencil'} color="var(--light)" />
                    </div>
                </div>
                <label class="info">
                    <div class="btn-wrapper">
                        {#if $angle !== 45}
                            <Tooltip position="up" text="Reset">
                                <button on:click={() => angle.set(45)}>
                                    <Icon size={26} name="refresh" />
                                </button>
                            </Tooltip>
                        {/if}
                    </div>
                    <input type="text" bind:value={$angle} />
                    <!-- &deg; -->
                </label>
            </div>
        </div>

        <div class="range-wrapper">
            <label class="input-wrapper">
                <span>Saturation Gain {$coeff}</span>
                <input type="range" min="0" max="100" step="1" bind:value={$coeff} />
            </label>
            <div class="btn-wrapper">
                {#if $coeff > 0}
                    <Tooltip position="up" text="Reset">
                        <button on:click={() => coeff.set(0)}>
                            <Icon size={26} name="refresh" />
                        </button>
                    </Tooltip>
                {/if}
            </div>
        </div>
        <div class="range-wrapper">
            <label class="input-wrapper">
                <span>Shadow Offset {$offset}</span>
                <input type="range" min="0" max="30" step="1" bind:value={$offset} />
            </label>
            <div class="btn-wrapper">
                {#if $offset !== 5}
                    <Tooltip position="up" text="Reset">
                        <button on:click={() => offset.set(5)}>
                            <Icon size={26} name="refresh" />
                        </button>
                    </Tooltip>
                {/if}
            </div>
        </div>
        <div class="range-wrapper">
            <label class="input-wrapper">
                <span>Shadow Width {$width}</span>
                <input type="range" min="0" max="30" step="1" bind:value={$width} />
            </label>
            <div class="btn-wrapper">
                {#if $width !== 10}
                    <Tooltip position="up" text="Reset">
                        <button on:click={() => width.set(10)}>
                            <Icon size={26} name="refresh" />
                        </button>
                    </Tooltip>
                {/if}
            </div>
        </div>
        <pre>
            {code}
        </pre>
    </div>
{/if}

<style lang="scss">
    %btn-wrapper {
        flex: 0 0 rem(40);
        width: rem(40);
        height: rem(40);

        button {
            width: 100%;
            height: 100%;
            border: 0;
            background-color: transparent;
            cursor: pointer;
        }
    }

    .close,
    .config-toggle {
        cursor: pointer;
    }

    .config-toggle {
        position: fixed;
        top: rem(25);
        right: rem(25);
        width: auto;
    }

    .config {
        position: fixed;
        top: 0;
        right: 0;
        width: auto;
        background-color: var(--color-white);
        box-shadow: 0 0 rem(10) rgba(0, 0, 0, 0.2);
        padding: rem(20);

        @media screen and (min-width: 1200px) {
            top: rem(25);
            right: rem(25);
        }

        .close {
            position: absolute;
            top: rem(10);
            right: rem(10);
        }

        .range-wrapper {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            margin-bottom: rem(10);

            .input-wrapper {
                position: relative;
                flex: 1 0 calc(100% - rem(40));
                display: flex;
                align-items: center;
                justify-content: flex-start;

                input[type='range'] {
                    width: 100%;
                    appearance: none;

                    &::-webkit-slider-runnable-track {
                        width: 100%;
                        height: rem(2);
                        background: var(--dark);
                        border-radius: rem(16);
                        cursor: pointer;
                    }

                    &::-moz-range-track {
                        width: 100%;
                        height: rem(2);
                        background: var(--dark);
                        border-radius: rem(16);
                        cursor: pointer;
                    }

                    &::-webkit-slider-thumb {
                        width: rem(20);
                        height: rem(20);
                        margin-top: -0.6rem;
                        background: var(--dark);
                        border-radius: 50%;
                        cursor: pointer;
                        appearance: none;
                    }

                    &::-moz-range-thumb {
                        width: rem(20);
                        height: rem(20);
                        margin-top: -0.6rem;
                        background: var(--dark);
                        border-radius: 50%;
                        cursor: pointer;
                        appearance: none;
                    }

                    &:focus {
                        outline: none;

                        &::-webkit-slider-runnable-track {
                            background: var(--dark);
                        }
                    }
                }

                span {
                    position: absolute;
                    left: 0;
                    top: rem(-7);
                    font-size: rem(12);
                }
            }

            .btn-wrapper {
                @extend %btn-wrapper;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .flex-wrapper {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            margin-bottom: rem(20);

            @media screen and (min-width: 1200px) {
                flex-flow: row wrap;
            }

            .flex {
                display: flex;
                flex-flow: column wrap;
                align-items: center;
                margin-top: rem(20);

                & > * {
                    margin-bottom: rem(20);
                }

                @media screen and (min-width: 1200px) {
                    margin-top: 0;
                }

                .circle {
                    position: relative;
                    width: rem(150);
                    height: rem(150);
                    border-radius: 50%;
                    cursor: pointer;

                    @media screen and (min-width: 1200px) {
                        margin: 0 rem(10) rem(20);
                    }

                    &:not(.color-picker) {
                        background-color: var(--grey);
                    }

                    &.color-picker {
                        display: block;
                        appearance: none;
                        border: 0;

                        &::-webkit-color-swatch-wrapper {
                            padding: 0;
                        }

                        &::-webkit-color-swatch {
                            border: 0;
                            border-radius: 50%;
                            background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
                            background-color: yellow !important;
                        }
                    }

                    // @keyframes pulse {
                    //     0% {
                    //         transform: scale(0.95);
                    //         opacity: 1;
                    //     }
                    //     100% {
                    //         transform: scale(1);
                    //         opacity: 0;
                    //     }
                    // }

                    .radius {
                        position: relative;
                        top: rem(37);
                        left: 50%;
                        width: rem(1);
                        height: 50%;

                        &::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 50%;
                            width: rem(50);
                            height: 100%;
                            transform: translateX(-50%);
                            clip-path: polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%);
                            // background: radial-gradient(
                            //     circle,
                            //     rgba(255, 255, 255, 1) 0%,
                            //     rgba(255, 255, 255, 0) 100%
                            // );
                        }

                        &.active {
                            &::before {
                                background: radial-gradient(
                                    circle,
                                    rgba(255, 255, 255, 1) 0%,
                                    rgba(255, 255, 255, 0) 100%
                                );
                                animation: pulse 2s infinite;
                            }
                        }

                        .label {
                            position: relative;
                            top: rem(-5);
                            left: rem(-9);
                            transform: rotate(90deg);

                            polygon {
                                fill: var(--dark);
                            }
                        }
                    }

                    .tooltip {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: rem(50);
                        height: rem(50);
                        background-color: var(--dark);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .info.title {
                    width: 50%;
                    text-align: center;
                }

                label.info {
                    position: relative;
                    width: 50%;

                    .btn-wrapper {
                        @extend %btn-wrapper;
                        position: absolute;
                        top: rem(-4);
                        right: rem(-45);
                    }

                    input {
                        display: block;
                        max-width: rem(80);
                        margin: 0 auto;
                        text-align: center;
                        border: 0;
                        background-color: var(--grey);
                        border-radius: rem(3);
                        padding: rem(4);
                    }
                }
            }
        }

        pre {
            width: 100%;
            margin-top: rem(20);
            padding: rem(20);
            border: rem(1) solid var(--dark);
            border-radius: rem(5);
            background-color: var(--box-shadow-light);
        }
    }
</style>
