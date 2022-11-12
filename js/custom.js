$(function(){
    $('.gnb-include').load('/include/gnb.html')
    $('.main-header-include').load('/include/main-header.html')

    $('.category-accordion .title').click(function(){
        $(this).next().stop().slideDown();
        $(this).siblings('.category-accordion .title').next().stop().slideUp();
        $(this).addClass('active')
        $(this).siblings('.category-accordion .title').removeClass('active')
    })

    $('.search-recent .btn-clear').click(function(){
        $(this).parent().slideUp(250);
    })

    $('.search-recent .btn-all-clear').click(function(){
        $('.search-recent .item').slideUp(250)
    })

})