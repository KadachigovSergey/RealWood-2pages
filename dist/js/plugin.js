;(function ($){
    $(window).on('load', function(){
        // $('select').styler();
        var sidebarBtn = $('.sidebar-btn');
        var sidebar = $('.sidebar');
        sidebarBtn.on('click', function (){
            sidebarBtn.toggleClass('open');
            sidebar.toggleClass('open');
        });
    });

})(jQuery);