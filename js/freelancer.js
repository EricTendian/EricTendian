/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Lazy loading of images
$(".portfolio-item img").unveil(200);
$('a.portfolio-link').on('click', function(e) {
    var carousel = $($(this).attr('href')).find('.carousel').hide();
    var deferreds = [];
    var imgs = $('.carousel', $(this).attr('href')).find('img');
    // loop over each img
    imgs.each(function(){
        var self = $(this);
        var datasrc = self.attr('data-src');
        if (datasrc) {
            var d = $.Deferred();
            self.one('load', d.resolve)
                .attr("src", datasrc)
                .attr('data-src', '');
            deferreds.push(d.promise());
        }
    });

    $.when.apply($, deferreds).done(function() {
        carousel.parent().find('.ajaxloader').hide();
        carousel.fadeIn(1000);
    });
});
