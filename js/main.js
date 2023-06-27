function animateOnScroll() {
    const elements = document.querySelectorAll('.a-hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);

            if (entry.isIntersecting) {
                entry.target.classList.toggle('a-show');
            }
        });
    });

    elements.forEach((element) => {
        observer.observe(element);
    });
}

animateOnScroll();
const items = document.querySelectorAll('.item');

items.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        // Reset z-index of all items except clicked item
        items.forEach(function (otherItem) {
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
        item.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});

document.addEventListener('click', function (e) {
    let isClickInsideItem = false;

    items.forEach(function (item) {
        if (item.contains(e.target)) {
            isClickInsideItem = true;
        }
    });

    if (!isClickInsideItem) {
        items.forEach(function (item) {
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

actionToggle();
