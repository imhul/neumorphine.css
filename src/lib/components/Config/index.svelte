<script lang="ts">
    import { color, angle, offset, coeff } from '$lib/store';
    import Icon from '$lib/components/Icon/index.svelte';

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
    <Icon size={25} name="cog" color="var(--nav-light)" />
</div>

{#if show}
    <div class="config">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="close" on:click={() => (show = false)} role="button" tabindex="0">
            <Icon size={10} name="close" />
        </div>

        <div class="flex">
            <div class="info title">Color</div>
            <div class="info title">Shadow Angle</div>
        </div>
        <div class="flex">
            <input class="circle color-picker" bind:value={$color} type="color" />
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="circle"
                on:mousemove={onMouseMove}
                on:click={() => (clicked = !clicked)}
                role="button"
                tabindex="0"
            >
                <div class="radius" style="transform: rotate({$angle}deg) translate(-50%, -50%);">
                    <div class="label" class:active={clicked} />
                </div>
                <div class="tooltip">
                    <Icon size={34} name={clicked ? 'unlock' : 'lock'} color="var(--light)" />
                </div>
            </div>
        </div>
        <div class="flex">
            <label class="info">
                <input type="text" bind:value={$color} />
            </label>
            <label class="info">
                <input type="text" bind:value={$angle} />
                <!-- &deg; -->
            </label>
        </div>
        <div>
            <input type="range" min="0" max="100" step="1" bind:value={$coeff} />
        </div>
        <div>
            <input type="range" min="1" max="20" step="1" bind:value={$offset} />
        </div>
        <pre>
        {code}
    </pre>
    </div>
{/if}

<style lang="scss">
    .close,
    .config-toggle {
        cursor: pointer;
    }

    .config,
    .config-toggle {
        position: fixed;
        top: rem(25);
        right: rem(25);
        width: auto;
    }

    .config {
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: rem(20);

        .close {
            position: absolute;
            top: rem(10);
            right: rem(10);
        }

        .flex {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: rem(20);

            .circle {
                position: relative;
                width: rem(150);
                height: rem(150);
                margin: 0 rem(10);
                border-radius: 50%;
                cursor: pointer;

                &:not(.color-picker) {
                    background-color: var(--light);
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

                .radius {
                    position: relative;
                    top: rem(37);
                    left: 50%;
                    width: rem(1);
                    height: 50%;
                    background-color: var(--dark);

                    .label {
                        position: relative;
                        top: rem(-5);
                        left: rem(-5);
                        width: rem(10);
                        height: rem(10);
                        background-color: var(--dark);
                        border-radius: 50%;

                        &.active {
                            background-color: var(--nav-light);
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

            label {
                width: 50%;

                input {
                    display: block;
                    max-width: rem(80);
                    margin: 0 auto;
                    text-align: center;
                    border: 0;
                    background-color: var(--light);
                    border-radius: rem(3);
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
