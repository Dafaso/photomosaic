

$('.gallery').justifiedGallery({
    rowHeight : 160,
    lastRow : 'nojustify',
    margins : 5,
    border : 5, 
    
    
    sizeRangeSuffixes : {
        'lt100':'_a', 
        'lt240':'_b', 
        'lt320':'_c', 
        'lt500':'_d', 
        'lt640':'_e', 
        'lt1024':'_f'
    },
    
    captionSettings : {
        animationDuration: 1100,
        visibleOpacity: 0.9,
        nonVisibleOpacity: 0.0
    },
    
    rel : 'gallery1',
    
    
}).on('jg.complete', function () {
    $(this).find('a').baguetteBox({
       
    });
});

    