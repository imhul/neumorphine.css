<script lang="ts">
    import {
        color,
        angle,
        offset,
        width,
        coeff,
        showIcons
    } from '$lib/store';
    import { tweened } from 'svelte/motion';
    // components
    import Icon from '$lib/components/Icon/index.svelte';
    import Tooltip from '$lib/components/Tooltip/index.svelte';
    import Code from './code.svelte';

    let clicked = false;
    let tweenedAngle = tweened($angle);

    const onMouseMove = (event: any) => {
        if (!clicked) return;
        const rect = event.target.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = event.clientX - rect.left - centerX;
        const mouseY = event.clientY - rect.top - centerY;
        angle.set(
            Math.round((Math.atan2(mouseY, mouseX) * 180) / Math.PI) +
                90
        );
        $tweenedAngle = $angle;
    };
</script>

<aside>
    <div class="flex-wrapper">
        <div class="flex">
            <div class="info title">Background Color</div>
            <input
                class="circle color-picker"
                bind:value={$color}
                type="color"
            />
            <label class="info">
                <div class="btn-wrapper">
                    {#if $color !== '#ffffff'}
                        <Tooltip position="up" text="Reset">
                            <button
                                on:click={() => color.set('#ffffff')}
                            >
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
                    style="transform: rotate({$tweenedAngle}deg) translate(-50%, -50%);"
                >
                    <svg
                        class="label"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                    >
                        <polygon
                            fill="none"
                            stroke="#000"
                            points="19.5 5.9 19.5 14.1 14.5 10.4 14.5 15.5 .5 15.5 .5 4.5 14.5 4.5 14.5 9.6 19.5 5.9"
                        />
                    </svg>
                </div>
                <div class="tooltip">
                    <Icon
                        size={34}
                        name={clicked ? 'lock' : 'pencil'}
                        color="var(--light)"
                    />
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
            <span
                >Saturation Gain <span class="tag">{$coeff}</span
                ></span
            >
            <input
                type="range"
                min="0"
                max="100"
                step="1"
                bind:value={$coeff}
            />
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
            <span
                >Shadow Offset <span class="tag">{$offset}</span
                ></span
            >
            <input
                type="range"
                min="0"
                max="30"
                step="1"
                bind:value={$offset}
            />
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
            <span>Shadow Width <span class="tag">{$width}</span></span
            >
            <input
                type="range"
                min="0"
                max="30"
                step="1"
                bind:value={$width}
            />
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

    <div class="switch-wrapper">
        <input
            id="toggle"
            type="checkbox"
            bind:checked={$showIcons}
        />
        <label for="toggle" class="switch" />
        <span>{$showIcons ? 'Hide' : 'Show'} demo icons</span>
    </div>
    <Code />
</aside>

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

    aside {
        position: relative;
        flex: 0 0 rem(190);
        background-color: var(--color-white);
        padding: rem(20);

        @media screen and (min-width: rem(1024)) {
            flex: 0 0 rem(380);
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
                        // border-radius: rem(16);
                        cursor: pointer;
                    }

                    &::-webkit-slider-thumb {
                        width: rem(16);
                        height: rem(16);
                        margin-top: rem(-7);
                        background: var(--primary);
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
                    right: 0;
                    top: rem(-12);
                    font-size: rem(12);

                    .tag {
                        position: relative;
                        top: unset;
                        display: inline-block;
                        padding: 0 rem(6);
                        background-color: var(--grey);
                        color: var(--dark);
                        border-radius: rem(3);
                    }
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

            @media screen and (min-width: rem(1024)) {
                flex-flow: row wrap;
            }

            .flex {
                display: flex;
                flex-flow: column wrap;
                align-items: center;
                margin-top: rem(20);

                & > * {
                    margin-bottom: rem(10);

                    @media screen and (min-width: rem(1024)) {
                        margin-bottom: rem(20);
                    }
                }

                @media screen and (min-width: rem(1024)) {
                    margin-top: 0;
                }

                .circle {
                    position: relative;
                    width: rem(150);
                    height: rem(150);
                    border-radius: 50%;
                    cursor: pointer;

                    @media screen and (min-width: rem(1024)) {
                        margin: 0 rem(10) rem(20);
                    }

                    &:not(.color-picker) {
                        background-color: var(--grey);
                    }

                    &.color-picker {
                        width: rem(50);
                        height: rem(50);
                        display: block;
                        appearance: none;
                        border: 0;

                        @media screen and (min-width: rem(1024)) {
                            width: rem(150);
                            height: rem(150);
                        }

                        &::-webkit-color-swatch-wrapper {
                            padding: 0;
                        }

                        &::-webkit-color-swatch {
                            border: 0;
                            border-radius: 50%;
                            background: conic-gradient(
                                red,
                                yellow,
                                lime,
                                aqua,
                                blue,
                                magenta,
                                red
                            );
                            background-color: yellow !important;
                        }
                    }

                    .radius {
                        position: relative;
                        top: rem(37);
                        left: 50%;
                        width: rem(1);
                        height: 50%;
                        transition: transform 0.35s ease;

                        &::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 50%;
                            width: rem(50);
                            height: 100%;
                            transform: translateX(-50%);
                            clip-path: polygon(
                                40% 0%,
                                60% 0%,
                                100% 100%,
                                0% 100%
                            );
                            opacity: 0.3;
                            background: linear-gradient(
                                var(--lamp-light) 100%,
                                var(--transparent) 50%
                            );
                            transition: opacity 0.35s;
                        }

                        &::after {
                            content: '';
                            position: absolute;
                            top: 95%;
                            left: 50%;
                            width: rem(80);
                            height: 100%;
                            transform: translateX(-50%);
                            clip-path: polygon(
                                20% 0%,
                                80% 0%,
                                100% 100%,
                                0% 100%
                            );
                            opacity: 0;
                            background: linear-gradient(
                                var(--dark) 25%,
                                var(--transparent) 90%
                            );
                            transition: opacity 0.35s;
                        }

                        &.active {
                            &::before,
                            &::after {
                                opacity: 1;
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
                    width: 100%;
                    text-align: center;

                    @media screen and (min-width: rem(1024)) {
                        width: 50%;
                    }
                }

                label.info {
                    position: relative;

                    @media screen and (min-width: rem(1024)) {
                        width: 50%;
                    }

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

                        &:focus,
                        &:hover {
                            background-color: var(--primary);
                            color: var(--color-white);
                        }
                    }
                }
            }
        }

        .switch-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: rem(20);

            // switch
            .switch {
                position: relative;
                display: inline-block;
                width: rem(30);
                height: rem(2);
                margin-right: rem(10);
                background-color: var(--dark);
                border-radius: rem(20);
                transition: background-color 0.35s;

                &::after {
                    content: '';
                    position: absolute;
                    width: rem(16);
                    height: rem(16);
                    border-radius: 50%;
                    background-color: var(--primary);
                    top: rem(-7);
                    left: rem(-1);
                    transition: left 0.35s;
                }
            }

            input:checked + .switch::after {
                left: rem(18);
            }

            input {
                display: none;
            }
        }
    }
</style>
