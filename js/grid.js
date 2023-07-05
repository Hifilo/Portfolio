let elem = document.querySelector('.grid');
let msnry = new Masonry(elem, {
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true,
});

imagesLoaded(elem).on('progress', function () {
    // layout Masonry after each image loads
    msnry.layout();
});

// element argument can be a selector string
//   for an individual element
// let msnry = new Masonry('.grid', {
//     // options
// });
