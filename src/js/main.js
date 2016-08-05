jQuery(function($){
  
    var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        centeredSlides: true,
        centeredSlides: 0,
        paginationClickable: true,
        spaceBetween: 20,
        loop: true,
    });
    
    

	var bannerTextR = $(".banner-text-r div");
    var bannerTextL = $(".banner-text-l div");
	bannerTextR.on('click', function(event) {
	    // event.preventDefault();
	    $(this).addClass('active').siblings().removeClass('active');
	    var index = bannerTextR.index($(this));
	    bannerTextL.eq(index).addClass('active').siblings().removeClass('active');    
	});


    var headerBottomSearch = $(".header-bottom-search");
    var body = $("body");
    headerBottomSearch.on('click', function(event) {
        event.preventDefault();
        body.addClass('search-open')
    });

    var filterCategory = $(".filter-category > a");
    filterCategory.on('click', function(event) {
        event.preventDefault();
        body.toggleClass("filter-category-submenu-open");
        body.removeClass('filter-calendar-submenu-open')
    });
    // var filterCalendar = $(".filter-calendar > a");
    // filterCalendar.on('click', function(event) {
    //     event.preventDefault();
    //     body.toggleClass("filter-calendar-submenu-open");
    //     body.removeClass('filter-category-submenu-open')
    // });
});
