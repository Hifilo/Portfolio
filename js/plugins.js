(function () {
    let bodyGrid = new Muuri('.bodygrid', {
        layout: {
            fillGaps: true,
            horizontal: false,
            alignRight: false,
            alignBottom: false,
            rounding: true,
            Width: '100vw',
            Height: '100vh',
        },
        layoutOnResize: 150,
        layoutOnInit: true,
        layoutDuration: 300,
        layoutEasing: 'ease',
        dragEnabled: true,
        showDuration: 600,
        showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    });

    let method;
    let noop = function () {};
    let methods = [
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
    let { length } = methods;
    let console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

// Place any jQuery/helper plugins in here.
