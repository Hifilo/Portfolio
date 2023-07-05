let bodyGrid = new Muuri('.bodygrid', {
    layout: {
        fillGaps: true,
        horizontal: false,
        alignRight: false,
        alignBottom: false,
        rounding: false,
    },
    styles: {
        // width: '800px',
        // height: '1200px',
    },
    layoutOnResize: 150,
    layoutOnInit: true,
    layoutDuration: 300,
    layoutEasing: 'ease',
    dragEnabled: true,
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
});

bodyGrid.refreshItems(true);
