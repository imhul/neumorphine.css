if (module.hot) {
    module.hot.accept();
}

(() => {
    window.onload = () => {
        let theme = 'light';
        let direction = 'nw';
        const wrapper = document.body;
        const trigger = document.getElementById('trigger');
        const rays = document.querySelectorAll('.rays');
        const sun = document.getElementById('sun');
        !!wrapper && wrapper.classList.add(theme);
        !!sun && sun.classList.add(direction);

        rays.forEach(ray => {
            ray.addEventListener('click', event => {
                console.info('value: ', event.target.value);
                if (direction !== event.target.value) {
                    sun.classList.remove(direction);
                    direction = event.target.value;
                    sun.classList.add(direction);
                }
            });
        });

        trigger.addEventListener('click', () => {
            if (theme === 'light') {
                theme = 'dark';
                wrapper.classList.remove('light');
                wrapper.classList.add('dark');
            } else {
                theme = 'light';
                wrapper.classList.remove('dark');
                wrapper.classList.add('light');
            }
        });
    };
})();
