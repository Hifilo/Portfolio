// // document.querySelector('.button-main').addEventListener('mouseover', function () {
// //     this.querySelector('.progress-bar').style.width = '100%';
// // });

// // document.querySelector('.button-main').addEventListener('mouseleave', function () {
// //     this.querySelector('.progress-bar').style.width = '0';
// // });

// /*
// 	Ripple effect
// 	--------------------
// 	Draws a background radial gradient on the clicked element around the event mouse coordinates,
// 	then it uses a RAF loop to expand the gradients radius until it reaches 100%

// 	improvements:
// 	- get background color - (convert to hsl ?) - use that as a base with the highlight being lighter or darker
// */

// const ripple = (el) => {
//     let d = el.dataset.ripple.split('-'),
//         s = '#f5f5fa',
//         e = 'rgba(3,149,229,1)';
//     d[2] = Number(d[2]) + 4;
//     el.dataset.ripple = d.join('-');
//     el.style.background = `radial-gradient(circle at ${d[0]}px ${d[1]}px, ${s} 0%, ${s} ${d[2]}%, ${e} ${d[2] + 0.1}%)`;

//     window.requestAnimationFrame(() => {
//         if (el.dataset.ripple && d[2] < 100) ripple(el);
//     });
// };

// const start = (ev) => {
//     ev.target.dataset.ripple = `${ev.offsetX}-${ev.offsetY}-0`;
//     ripple(ev.target);
// };

// const stop = (ev) => {
//     let el = document.querySelector('[data-ripple]');
//     delete el.dataset.ripple;
//     el.style.background = 'none';
// };

// Events
// document.querySelectorAll('.button-main').forEach((el) => el.addEventListener('mousedown', start));
// document.addEventListener('mouseup', stop);

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
