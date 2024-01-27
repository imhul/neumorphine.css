<script>
    export let position = 'up';
    export let text = '';
</script>

<div class="tooltip" data-position={position} data-text={text}>
    <slot />
</div>

<style lang="scss">
    .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;

        &::after {
            content: attr(data-text);
            position: absolute;
            z-index: 1;
            width: max-content;
            padding: rem(5) rem(10);
            background-color: #000;
            color: #fff;
            font-size: 12px;
            border-radius: 4px;
            visibility: hidden;
            opacity: 0;
            transition:
                opacity 0.35s,
                visibility 0s linear 0.2s;
        }

        &:hover {
            &::after {
                visibility: visible;
                opacity: 1;
                transition-delay: 0s;
            }
        }

        &[data-position='left']::after {
            top: 50%;
            left: -100%;
            transform: translate(-100%, -50%);
        }

        &[data-position='right']::after {
            top: 50%;
            right: -100%;
            transform: translate(100%, -50%);
        }

        &[data-position='up']::after {
            top: -50%;
            left: 50%;
            transform: translate(-50%, -100%);
        }

        &[data-position='down']::after {
            bottom: -50%;
            left: 50%;
            transform: translate(-50%, 100%);
        }

        &[data-position='lup']::after {
            top: -50%;
            left: -100%;
            transform: translate(-100%, -100%);
        }

        &[data-position='ldown']::after {
            bottom: -50%;
            left: -100%;
            transform: translate(-100%, 100%);
        }

        &[data-position='rup']::after {
            top: -50%;
            right: -100%;
            transform: translate(100%, -100%);
        }

        &[data-position='rdown']::after {
            bottom: -50%;
            right: -100%;
            transform: translate(100%, 100%);
        }
    }
</style>
