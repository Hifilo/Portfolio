function animateOnScroll() {
    const elements = document.querySelectorAll('.splash');

    // const stage = 0;
    const options = {
        rootMargin: '-20% 0px',
        threshold: 0.5,
    };

    const animationKeyframes = slideIn('-100%', 0, '0', 1);

    const animationOptions = AnimationTimingOptions();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const animation = new Animation(
                new KeyframeEffect(entry.target, animationKeyframes, animationOptions),
                document.timeline
            );
            // animation.effect.target = entry.target;

            if (entry.isIntersecting) {
                animation.play();
            } else if (!entry.isIntersecting) {
                animation.reverse();
            }
        });
    }, options);

    elements.forEach((element) => {
        observer.observe(element);
    });

    function AnimationTimingOptions(
        duration = 1000,
        easing = 'ease-out',
        delay = 0,
        iterations = 1,
        direction = 'normal',
        fill = 'both'
    ) {
        return {
            duration,
            easing,
            delay,
            iterations,
            direction,
            fill,
        };
    }

    function slideIn(translateXValue1 = '-100%', opacityValue1 = '0', translateXValue2 = 0, opacityValue2 = 1) {
        return [
            {
                offset: 0,
                transform: `translateX(${translateXValue1})`,
                opacity: opacityValue1,
            },
            {
                offset: 1,
                transform: `translateX(${translateXValue2})`,
                opacity: opacityValue2,
            },
        ];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});
const items = document.querySelectorAll('.item');

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();

        // Reset z-index of all items except clicked item
        items.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.style.zIndex = 1;
            }
        });

        if (item.classList.contains('active')) {
            item.classList.remove('active');

            item.style.zIndex = 1;
        } else {
            item.classList.add('active');

            item.style.zIndex = 4;
        }

        // Add click event listener to each `.item` element to remove `.active` class
        item.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});

document.addEventListener('click', (e) => {
    let isClickInsideItem = false;

    items.forEach((item) => {
        if (item.contains(e.target)) {
            isClickInsideItem = true;
        }
    });

    if (!isClickInsideItem) {
        items.forEach((item) => {
            item.classList.remove('active');
            item.style.zIndex = 1;
        });
    }
});

function actionToggle() {
    const action = document.querySelector('.action');
    const span = action.querySelector('span');
    const ul = action.querySelector('ul');
    let state = false;

    function toggleActive() {
        action.classList.toggle('active');
    }

    mouseEvents();
    touchEvents();

    function mouseEvents() {
        span.addEventListener('click', (e) => {
            e.stopPropagation();

            if (state === false) {
                toggleActive();
                state = true;
            } else if (state === true) {
                toggleActive();
                state = false;
            }
        });

        // const isClickedInsideUl = ul && ul.contains(target);
        document.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const ulClone = ul.cloneNode(true);

            Object.freeze(ulClone);

            const { target } = e;
            const isClickedInsideAction = action.contains(target);

            // const isClickedInsideSpan = action.contains(target);
            // const isClickedInsideUl = ul.contains(target);
            if (!state && isClickedInsideAction) {
                toggleActive();
                state = false;
            }

            if (!(state && (isClickedInsideAction || !isClickedInsideAction) && !ulClone.contains(target))) {
                return;
            }

            toggleActive();
            state = false;
            ulClone.remove();
        });
    }

    function touchEvents() {
        span.addEventListener('touch', (e) => {
            e.stopPropagation();

            if (state === false) {
                toggleActive();
                state = true;
            } else if (state === true) {
                toggleActive();
                state = false;
            }
        });

        // const isClickedInsideUl = ul && ul.contains(target);
        document.addEventListener('touch', (e) => {
            e.stopPropagation();
            e.preventDefault();
            const ulClone = ul.cloneNode(true);

            Object.freeze(ulClone);

            const { target } = e;
            const isClickedInsideAction = action.contains(target);

            // const isClickedInsideSpan = action.contains(target);
            // const isClickedInsideUl = ul.contains(target);
            if (!state && isClickedInsideAction) {
                toggleActive();
                state = false;
            }

            if (!(state && (isClickedInsideAction || !isClickedInsideAction) && !ulClone.contains(target))) {
                return;
            }

            toggleActive();
            state = false;
            ulClone.remove();
        });
    }
}

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

actionToggle();
