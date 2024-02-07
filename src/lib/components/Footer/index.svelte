<footer>
    <span
        >Made with ❤️ by
        <a href="https://weblogic.netlify.app/" target="_blank">
            Tkachuk Zakhar</a
        >.
    </span>
    <span class="block"
        >Can you buy me a ☕ <a
            href="https://www.buymeacoffee.com/blashirkz"
            >for support</a
        ></span
    >
</footer>

<style lang="scss">
    footer {
        width: 100%;
        height: rem(100);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: rem(20);

        a {
            color: var(--primary);
            text-decoration: none;

            &:hover {
                text-decoration: none;
                filter: brightness(1.3);
            }

            &:visited {
                color: var(--primary);
            }
        }

        .block {
            display: block;
            margin-left: rem(20);
        }
    }
</style>
