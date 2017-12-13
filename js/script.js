//Called when the navbar brand anchor is clicked
$('.navbar-brand').click(function(e){
    $(this).addClass('zoomInOut');
    $(".container-fluid").addClass('fadeOut');
});

//Called when the nav item anchor is clicked
$('.nav-item a').click(function(e){
    $(this).addClass('zoomInOut');
    $(".container-fluid").addClass('fadeOut');
});

//Called when the folio anchor is clicked
$('.portfolio a').click(function(e){
    $(".container-fluid").addClass('fadeOut');
});