///////// select 2 ///////////

$(document).ready(function() {
    $('.js-example-disabled-results').select2();
});

///////// slider day ///////////

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:12
        }
    }
})

$('.view_grid_page').click(function(){
    $('.grid_view').removeClass('d-none');
});

$('.view_grid_page').click(function(){
    $('.list_view').addClass('d-none');
});

$('.view_grid_page').click(function(){
    $('.view_list_page').removeClass('active');
});
$('.view_grid_page').click(function(){
    $('.view_grid_page').addClass('active');
});



$('.view_list_page').click(function(){
    $('.grid_view').addClass('d-none');
});
$('.view_list_page').click(function(){
    $('.list_view').removeClass('d-none');
});
$('.view_list_page').click(function(){
    $('.view_grid_page').removeClass('active');
});
$('.view_list_page').click(function(){
    $('.view_list_page').addClass('active');
});


$('.carousel').carousel({
    interval: false,
});





