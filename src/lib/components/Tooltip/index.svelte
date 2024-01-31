<script lang="ts">
    type Position =
        | 'left'
        | 'right'
        | 'up'
        | 'down'
        | 'l-up'
        | 'l-down'
        | 'r-up'
        | 'r-down';
    export let position: Position = 'up';
    export let text: string = '';
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
            font-size: rem(12);
            border-radius: rem(3);
            visibility: hidden;
            opacity: 0;
            transition:
                opacity 0.35s,
                visibility 0s linear 0.35s;
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

        &[data-position='l-up']::after {
            top: -50%;
            left: -100%;
            transform: translate(-100%, -100%);
        }

        &[data-position='l-down']::after {
            bottom: -50%;
            left: -100%;
            transform: translate(-100%, 100%);
        }

        &[data-position='r-up']::after {
            top: -50%;
            right: -100%;
            transform: translate(100%, -100%);
        }

        &[data-position='r-down']::after {
            bottom: -50%;
            right: -100%;
            transform: translate(100%, 100%);
        }
    }
</style>
