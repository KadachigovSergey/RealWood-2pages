;(function ($) {
    $(window).on('load', function () {
        // $('select').styler();
        var sidebarBtn = $('.sidebar-btn');
        var sidebar = $('.sidebar');
        sidebarBtn.on('click', function () {
            sidebarBtn.toggleClass('open');
            sidebar.toggleClass('open');
        });
    });

})(jQuery);

//SLIDER SLICK
(function ($) {
    $(window).on('load', function () {
        var slider = $('#slider');
        slider.slick({
            dots: true,
            fade: true,
            arrows: false,
            autoplay:true,
            pauseOnDotsHover: true,
            initialSlide:0
        });
        $('.slider-works').slick({
            arrows: false,
            autoplay:true,
            autoplaySpeed: 5000
        });
    });

})(jQuery);

//jquery form styler
(function ($) {
    $(window).on('load', function () {

        $('input, select').styler();

    });
})(jQuery);

//calculator
(function ($) {
    $(window).on('load', function () {
        function update() {
            var material = $('#material').val()
                ,sort = $('#sort').val()
                ,dlina = $('#dlina').val()
                ,shirina = $('#shirina').val()
                ,sDlina = $('#s-dlina').val()
                ,sShirina = $('#s-shirina').val();
            if(sDlina < 1){
                sDlina = 1;
            }
            if (sShirina < 1){
                sShirina = 1;
            }
            if (material < 500){
                material = 500;
            }
            var result = ((material*1)+(sort*1)+(dlina*1)+(shirina*1))*((sDlina*1)*(sShirina*1))
                ,tot = $('#total-price');

            if(result!=0){
                tot.text(result);
            } else {
                tot.text(0);
            }
        }

        var material = $('#material')
            ,sort = $('#sort')
            ,dlina = $('#dlina')
            ,shirina = $('#shirina')
            ,sDlina = $('#s-dlina')
            ,sShirina = $('#s-shirina');

        material.on('change',update);
        sort.on('change',update);
        dlina.on('change',update);
        shirina.on('change',update);
        sDlina.on('change',update);
        sShirina.on('change',update);

    });
})(jQuery);

//map
(function ($) {
    $(window).on('load', function () {
        $("#map").gMap({
            latitude: 55.750009,
            longitude: 37.414148,
            zoom: 8,
            markers:[
                {
                    latitude: 55.9102005,
                    longitude: 36.5001062,
                    html: "plant1"
                    // icon: {
                    //     image: "img/map-icon.png",
                    //     iconsize: [35, 46],
                    //     iconanchor: [12,46]
                    // }
                },
                {
                    latitude: 55.336618,
                    longitude: 37.285039,
                    html: "plant2"
                },
                {
                    latitude: 56.003369,
                    longitude: 37.688171,
                    icon: {
                            image: "img/map-icon-2.png",
                            iconsize: [233, 98],
                            iconanchor: [0,98]
                        }
                }
                // {56.003369  37.688171
                //     address: "Galapagos, Ecuador",
                //     html: "_address"
                // }
            ],
            icon: {
                image: "img/map-icon.png",
                iconsize: [50, 46],
                iconanchor: [12, 46]
            }
        });
    });
})(jQuery);