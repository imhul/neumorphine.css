<script lang="ts">
    import { data } from '$lib/utils/config';
</script>

<article>
    <h1>{data.description}</h1>
    <h2>About Neumorphism</h2>
    <p>
        Neumorphism, an emerging design trend in the realm of user
        interface (UI) design, blends elements from flat design and
        skeuomorphism to create a visually engaging and tactile user
        experience. Characterized by soft shadows, subtle gradients,
        and a sense of depth, neumorphism aims to mimic the appearance
        of objects casting shadows on a surface, giving them a
        tangible presence on the screen. This design approach
        introduces a sense of realism and tactility, reminiscent of
        physical objects, while still maintaining a minimalist and
        modern aesthetic.
    </p>

    <p>
        One of the notable figures associated with the popularization
        of neumorphism is the renowned Ukrainian designer <a
            href={data.founder}
            rel="noreferrer noopener"
            target="_blank">Oleksandr Plyuto</a
        >.
        <a
            href={data.founder}
            rel="noreferrer noopener"
            target="_blank">Plyuto's</a
        >
        innovative contributions to UI design have significantly influenced
        the adoption of neumorphism across various digital platforms. Through
        his creative vision and expertise,
        <a
            href={data.founder}
            rel="noreferrer noopener"
            target="_blank">Plyuto</a
        > has demonstrated how neumorphism can be effectively implemented
        to enhance user interactions and elevate the overall design aesthetics
        of applications and websites.
    </p>

    <p>
        <a
            href={data.founder}
            rel="noreferrer noopener"
            target="_blank">Plyuto's</a
        >
        emphasis on simplicity, elegance, and functionality resonates throughout
        his neumorphic designs, where each element is carefully crafted
        to strike a balance between aesthetics and usability. By leveraging
        the principles of light and shadow,
        <a
            href={data.founder}
            rel="noreferrer noopener"
            target="_blank">Plyuto</a
        >
        creates visually appealing interfaces that not only captivate users
        but also provide intuitive navigation and seamless user experiences.
        As neumorphism continues to evolve as a prominent design trend,
        <a
            href={data.founder}
            rel="noreferrer noopener"
            target="_blank">Oleksandr Plyuto's</a
        > contributions serve as a testament to the innovative spirit and
        creative potential within the realm of UI design.
    </p>
</article>

<style lang="scss">
    article {
        width: 85%;
        height: 100%;
        max-width: rem(1200);
        margin: 0 auto rem(100);

        h1,
        h2,
        p {
            color: var(--dark);
            line-height: 140%;
        }

        h1 {
            margin-bottom: rem(20);
            font-size: 180%;
        }

        h2 {
            margin-bottom: rem(20);
            font-size: 150%;
        }

        p {
            margin-bottom: rem(20);

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
        }
    }
</style>
