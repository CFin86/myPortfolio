var animation = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
$(document).ready(function () {

    $("#finney").hide();
    $('#finalPara').hide();

    $(".finneyIntro").addClass("animated fadeInDown").one(animation,
        function () {
            $('#finney').show();
            $("#finney").addClass("animated fadeInUp").one(animation,
                function () {
                    $('#finalPara').show();
                    $('#finalPara').addClass('animated fadeInRight')
                },
            )
        })
});

//opening and closing navBar function
let openNavBar = () => {
    let dropdowns = $(".dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('fadeOutDown')) {
            openDropdown.classList.remove('fadeOutDown')
            $('#myDropdown').addClass("fadeInDown show active");
        }
         else if(openDropdown.classList.contains('active')) {
            openDropdown.classList.remove('fadeInDown')
            openDropdown.classList.add('fadeOutDown')
            openDropdown.classList.toggle('active')
        }
        else {
            $('#myDropdown').toggleClass("fadeInDown show active");
        }
    }
};

//removes navigation window if anywhere is clicked besides the links
window.onclick = function (event) {
    if (!event.target.matches('.overlay')) {
        let dropdowns = $(".dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('fadeInDown')
                openDropdown.classList.add('fadeOutDown')
                openDropdown.classList.toggle('active')
            } else if (openDropdown.classList.contains('fadeOutDown')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}

// Navigation scrolls
// $("#myDropdown a").on('click', function(event) {
//     var $anchor = $(this);
//     var nav = $($anchor.attr('href'));
//     if (nav.length) {
//     $('html, body').stop().animate({
//         scrollTop: $($anchor.attr('href')).offset().top
//     }, 1500, 'easeInOutExpo');
//     event.preventDefault();
//     }
// });
//  // Add smooth scrolling to all links in navbar
//  $("#myDropdown a").on('click', function(event) {
//     var hash = this.hash;
//     if( hash ) {
//       event.preventDefault();
//       $('html, body').animate({
//           scrollTop: $(hash).offset().top
//       }, 1500, 'easeInOutExpo');
//     }
//   });