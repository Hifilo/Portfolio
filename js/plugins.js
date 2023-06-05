/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-multi-assign */
// Avoid `console` errors in browsers that lack a console.
// eslint-disable-next-line no-undef
// let grid = new Muuri('.grid');
// eslint-disable-next-line no-undef

// let bodyGrid = new Muuri('.bodygrid', {
//     layout: function (grid, layoutId, items, width, height, callback) {
//         let layout = {
//             id: layoutId,
//             items: items,
//             slots: [],
//             styles: {},
//         };
//         // Calculate the slots asynchronously. Note that the timeout is here only
//         // as an example and does not help at all in the calculations. You should
//         // offload the calculations to web workers if you want real benefits.
//         // Also note that doing asynchronous layout is completely optional and you
//         // can call the callback function synchronously also.
//         let timerId = window.setTimeout(function () {
//             let item;
//             let m;
//             let x = 0;
//             let y = 0;
//             let w = 0;
//             let h = 0;

//             for (let i = 0; i < items.length; i++) {
//                 item = items[i];
//                 x += w;
//                 y += h;
//                 m = item.getMargin();
//                 w = item.getWidth() + m.left + m.right;
//                 h = item.getHeight() + m.top + m.bottom;
//                 layout.slots.push(x, y);
//             }

//             w += x;
//             h += y;
//             // Set the CSS styles that should be applied to the grid element.
//             layout.styles.width = `${w}px`;
//             layout.styles.height = `${h}px`;
//             // layout.styles.width = `100vw`;
//             // layout.styles.height = `100vh`;
//             // When the layout is fully computed let's call the callback function and
//             // provide the layout object as it's argument.
//             callback(layout);
//         }, 200);

//         // If you are doing an async layout you _can_ (if you want to) return a
//         // function that cancels this specific layout calculations if it's still
//         // processing/queueing when the next layout is requested.
//         return function () {
//             window.clearTimeout(timerId);
//         };
//     },
// });
// let baseGrid = new Muuri('.basegrid');
// let header = new Muuri('.header');

(function () {
    let bodyGrid = new Muuri('.bodygrid', {
        layout: {
            fillGaps: false,
            horizontal: false,
            alignRight: false,
            alignBottom: false,
            rounding: true,
        },
        layoutOnResize: 150,
        layoutOnInit: true,
        layoutDuration: 300,
        layoutEasing: 'ease',
        dragEnabled: true,
        showDuration: 600,
        showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    });

    [].slice.call(document.querySelectorAll('.item')).forEach(function (elem) {
        elem.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });

    var method;
    var noop = function () {};
    var methods = [
        'assert',
        'clear',
        'count',
        'debug',
        'dir',
        'dirxml',
        'error',
        'exception',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'markTimeline',
        'profile',
        'profileEnd',
        'table',
        'time',
        'timeEnd',
        'timeline',
        'timelineEnd',
        'timeStamp',
        'trace',
        'warn',
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

// Place any jQuery/helper plugins in here.
