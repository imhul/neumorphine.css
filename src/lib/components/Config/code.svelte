<script lang="ts">
    import { cssData } from '$lib/store';
    import Prism from 'prismjs';
    import 'prismjs/themes/prism.min.css';

    type State = 'css' | 'sass' | 'scss' | 'less';
    const state: Record<State, boolean> = {
        css: true,
        sass: false,
        scss: false,
        less: false
    };

    let copied = false;
    const btns: State[] = Object.keys(state) as State[];
    $: code = 'Your code: ';
    $: text = {
        css:
            `.shape {\n` +
            `   background-color: ${$cssData.shapeBg};\n` +
            `}\n .shape .shape-default {\n` +
            `   box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `}\n .shape .shape-active {\n` +
            `   box-shadow: inset ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `   inset ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `}\n .shape .shape-focused {\n` +
            `   background: linear-gradient(${$cssData.angle}, ${$cssData.gradientFocusedFrom}, ${$cssData.gradientFocusedTo});\n` +
            `   box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `   ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `}\n .shape .shape-disabled {\n` +
            `   background: linear-gradient(${$cssData.angle}, ${$cssData.gradientFocusedTo}, ${$cssData.gradientFocusedFrom});\n` +
            `   box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `   ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `}\n .text {\n` +
            `   text-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.textShadowWidth} ${$cssData.boxShadow},\n` +
            `       ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.textShadowWidth} ${$cssData.boxShadowInset};\n` +
            `}\n`,
        sass:
            `.shape \n` +
            `   background-color: ${$cssData.shapeBg}\n` +
            `   &-default \n` +
            `       box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset}\n` +
            `   &-active \n` +
            `      box-shadow: inset ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      inset ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset}\n` +
            `   &-focused \n` +
            `      background: linear-gradient(${$cssData.angle}, ${$cssData.gradientFocusedFrom}, ${$cssData.gradientFocusedTo})\n` +
            `      box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset}\n` +
            `   &-disabled \n` +
            `      background: linear-gradient(${$cssData.angle}, ${$cssData.gradientFocusedTo}, ${$cssData.gradientFocusedFrom})\n` +
            `      box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset}\n` +
            `.text \n` +
            `   text-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.textShadowWidth} ${$cssData.boxShadow},\n` +
            `       ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.textShadowWidth} ${$cssData.boxShadowInset}\n`,
        scss:
            `.shape {\n` +
            `   background-color: ${$cssData.shapeBg};\n` +
            `   &-default {\n` +
            `       box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `   &-active {\n` +
            `      box-shadow: inset ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      inset ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `   &-focused {\n` +
            `      background: linear-gradient(${$cssData.angle}, ${$cssData.gradientFocusedFrom}, ${$cssData.gradientFocusedTo});\n` +
            `      box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `   &-disabled {\n` +
            `      background: linear-gradient(${$cssData.angle}, ${$cssData.gradientFocusedTo}, ${$cssData.gradientFocusedFrom});\n` +
            `      box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `   }\n` +
            `}\n .text {\n` +
            `   text-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.textShadowWidth} ${$cssData.boxShadow},\n` +
            `       ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.textShadowWidth} ${$cssData.boxShadowInset};\n` +
            `}\n`,
        less:
            `.shape {\n` +
            `   background-color: ${$cssData.shapeBg};\n` +
            `   &-default {\n` +
            `       box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `   &-active {\n` +
            `      box-shadow: inset ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      inset ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `   &-focused {\n` +
            `      background: linear-gradient(${$cssData.angle}, ${$cssData.gradientFocusedFrom}, ${$cssData.gradientFocusedTo});\n` +
            `      box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `   &-disabled {\n` +
            `      background: linear-gradient(${$cssData.angle}, ${$cssData.gradientFocusedTo}, ${$cssData.gradientFocusedFrom});\n` +
            `      box-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadow},\n` +
            `      ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.shadowWidth} ${$cssData.boxShadowInset};\n` +
            `   }\n` +
            `}\n .text {\n` +
            `   text-shadow: ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.textShadowWidth} ${$cssData.boxShadow},\n` +
            `       ${$cssData.offsetY} ${$cssData.offsetX} ${$cssData.textShadowWidth} ${$cssData.boxShadowInset};\n` +
            `}\n`
    };

    const getCode = (newState: State) => {
        Object.keys(state).forEach(key => {
            state[key as State] = false;
        });
        state[newState] = true;
        code = text[newState];
    };

    $: {
        if ($cssData) {
            Object.keys(state).forEach(key => {
                if (state[key as State] === true) {
                    getCode(key as State);
                }
            });
        }
    }

    const copy = () => {
        navigator.clipboard.writeText(code);
        copied = true;
        const timeout = setTimeout(() => {
            copied = false;
            clearTimeout(timeout);
        }, 2000);
    };
</script>

<div class="pre">
    <div class="buttons">
        {#each btns as btn}
            <button
                class:active={state[btn] === true}
                on:click={() => getCode(btn)}>{btn}</button
            >
        {/each}
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        class="copy"
        on:click={copy}
        role="button"
        aria-label="copy"
        tabindex="0"
    >
        <div class:active={copied} class="tooltip" />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
            <rect
                fill="none"
                stroke="#000"
                x="3.5"
                y="2.5"
                width="12"
                height="16"
            />
            <polyline
                fill="none"
                stroke="#000"
                points="5 0.5 17.5 0.5 17.5 17"
            />
        </svg>
    </div>

    <pre>
        <code>
            {@html Prism.highlight(
                code,
                Prism.languages['css'],
                'css'
            )}
        </code>
    </pre>
</div>

<style lang="scss">
    .pre {
        position: relative;

        .buttons {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: rem(20);

            button {
                margin-right: rem(10);
                padding: rem(4) rem(8);
                border-radius: rem(3);
                background-color: var(--grey);
                color: var(--dark);
                border: none;
                cursor: pointer;

                &:hover,
                &.active,
                &:active,
                &:focus {
                    color: var(--color-white);
                    background-color: var(--primary-hover);
                }
            }
        }

        .copy {
            position: absolute;
            top: rem(50);
            right: rem(30);
            width: rem(40);
            height: rem(40);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--primary);
            border-radius: 50%;
            background-color: var(--grey);

            &:hover {
                background-color: var(--primary-hover);

                rect,
                polyline {
                    stroke: var(--color-white);
                }
            }

            .tooltip {
                &::after {
                    content: 'Copied!';
                    position: absolute;
                    top: -50%;
                    left: 50%;
                    transform: translate(-50%, -100%);
                    z-index: 1;
                    width: max-content;
                    padding: rem(5) rem(10);
                    background-color: #000;
                    color: #fff;
                    font-size: rem(12);
                    border-radius: rem(3);
                    visibility: hidden;
                    opacity: 0;
                    transition:
                        opacity 0.35s,
                        visibility 0s linear 0.35s;
                }

                &.active {
                    &::after {
                        visibility: visible;
                        opacity: 1;
                        transition-delay: 0s;
                    }
                }
            }
        }

        pre {
            padding: rem(5);
            white-space: pre-wrap;
            overflow: auto;
            tab-size: 4;
            line-height: 1;

            @media screen and (min-width: rem(1024)) {
                padding: rem(20);
            }

            code {
                color: var(--primary);
                font-size: rem(12);
                font-family: Consolas, 'Andale Mono WT', 'Andale Mono',
                    'Lucida Console', 'Lucida Sans Typewriter',
                    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
                    'Liberation Mono', 'Nimbus Mono L', Monaco,
                    'Courier New', Courier, monospace;

                &::selection {
                    color: var(--color-white);
                    background-color: var(--primary);
                }
            }
        }
    }
</style>
