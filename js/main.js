// JSUtility Obfuscated Code with obfuscate defined globals = false, obfuscate object members = false. obfuscate strings = true and  restructure 'if' statements = false
// String encoding function... must be defined first
// String function has modified UUID("Universally Unique Identifier"), compression will mitigate length 
$JbiaP3TAzfXwV4uC2rP=function(n){if (typeof ($JbiaP3TAzfXwV4uC2rP.list[n]) == "string") return $JbiaP3TAzfXwV4uC2rP.list[n].split("").reverse().join("");return $JbiaP3TAzfXwV4uC2rP.list[n];};
$JbiaP3TAzfXwV4uC2rP.list=["sseccus-trela trela","php.reliam/php/","sseccus-trela","tcatnoc_egassem.","won_tcatnoc.","pot-ot-kcab-gt.","tnetnoc-oiloftrop.","stsop-golb-gt. ,tnetnoc-oiloftrop.","nwodtnuoc-gnimmoc#","loohcS yratnemelE tsorF treboR","pam-noitacol-gt#","redils-weiv-gt#","]\'otohPytterp\'=^ler-atad[a","redils-egassem-gt#","redils-tcudorpdetaler-gt#",">i/<>\'thgir-elgna-af af\'=ssalc i<","redils-epytelcihev-gt#","gnidaeh-lenap-gt. noidrocca# ,gnidaeh-lenap. noidrocca#","redloh-lliks-gt.","tnecrep-atad","ssergorp-gt.","serutaef-gt#",">i/<>\'691noitcerid-noci verp-gt\'=ssalc i<","a il vandda-gt.","nottub-tracinim-gt#","nottub-segaugnal-gt#","sj.scitylana/moc.scitylana-elgoog.www//","dedaoLtnetnoCMOD","lu > segaugnal-gt.","xob-tracinim-gt.","redils-emoh-gt#",">i/<>\'54retniop-noci txen-gt\'=ssalc i<","sretnuoc-gt.","rab-ssergorp.","lliksruo-gt#","rab-lliks-gt.","gnidaeh-lenap-gt. ,gnidaeh-lenap.",">i/<>\'tfel-elgna-af af\'=ssalc i<","redils-tcudorp-gt#","redils-maet-gt#","redils-rohtua-gt#","redils-egnar-gt#","redils-lianbmuht-gt#","ailartsuA ,airotciV ,enruobleM ,tS htebazilE 0061","gnp.rekram-pam-noci/segami","95:14:31 7102/5/01","meti-golb. ,meti-oiloftrop.","meti-oiloftrop.","parw_tcatnoc.","mrof_tcatnoc.",">i/<>\'nips-af hserfer-af af\'=ssalc i<","regnad-trela","regnad-trela trela"];
// End string encode function

"use strict";
/* -------------------------------------
 Google Analytics
 change UA-XXXXX-X to be your site's ID.
 -------------------------------------- */
// (function (b, o, i, l, e, r) {
//     b.GoogleAnalyticsObject = l;
//     b[l] || (b[l] =
//             function () {
//                 (b[l].q = b[l].q || []).push(arguments)
//             });
//     b[l].l = +new Date;
//     e = o.createElement(i);
//     r = o.getElementsByTagName(i)[0];
//     e.src = $JbiaP3TAzfXwV4uC2rP(26);
//     r.parentNode.insertBefore(e, r)
// }(window, document, 'script', 'ga'));
// ga('create', 'UA-XXXXX-X', 'auto');
// ga('send', 'pageview');
/* -------------------------------------
 CUSTOM FUNCTION WRITE HERE
 -------------------------------------- */
$(document).ready(function (e) {

    $(document).scroll(function(e){
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 20){
            console.log(scrollTop);
            $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top').css("position","fixed");
        } else {
            $('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top').css("position","absolute");
        }
    });

    /* -------------------------------------
     FOR QUOTATION FORM RADIO
     -------------------------------------- */
    if ('addEventListener' in document) {
        document.addEventListener($JbiaP3TAzfXwV4uC2rP(27), function () {
            FastClick.attach(document.body);
        }, false);
    }
    /* -------------------------------------
     OPEN CLOSE
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(25)).on('click', function (event) {
        event.preventDefault();
        $($JbiaP3TAzfXwV4uC2rP(28)).slideToggle();
    });
    $($JbiaP3TAzfXwV4uC2rP(24)).on('click', function (event) {
        event.preventDefault();
        $($JbiaP3TAzfXwV4uC2rP(29)).slideToggle();
    });
    $($JbiaP3TAzfXwV4uC2rP(23)).on('click', function (event) {
        event.preventDefault();
    });
    /* -------------------------------------
     HOME SLIDER
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(30)).owlCarousel({
        autoPlay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        navigation: true,
        navigationText: [
            $JbiaP3TAzfXwV4uC2rP(22),
            $JbiaP3TAzfXwV4uC2rP(31)
        ]
    });
    /* -------------------------------------
     FEATURES SLIDER
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(21)).owlCarousel({
        autoPlay: true,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTabletSmall: [639, 1, 0],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: false,
        pagination: false,
        navigation: false
    });
    /* -------------------------------------
     COUNTER
     -------------------------------------- */
    try {
        $($JbiaP3TAzfXwV4uC2rP(32)).appear(function () {
            $('.tg-timer').countTo()
        });
        $($JbiaP3TAzfXwV4uC2rP(20)).appear(function () {
            $('.tg-percent').countTo()
        });
    } catch (d) {
    }
    /* -------------------------------------
     SERVICES PROGRESS BAR
     -------------------------------------- */
    try {
        $($JbiaP3TAzfXwV4uC2rP(20)).appear(function () {
            jQuery('.progress').each(function () {
                jQuery(this).find($JbiaP3TAzfXwV4uC2rP(33)).animate({
                    width: jQuery(this).attr($JbiaP3TAzfXwV4uC2rP(19))
                }, 7000);
            });
        });
    } catch (d) {
    }
    /* -------------------------------------
     SKILLS PROGRESS BAR
     -------------------------------------- */
    try {
        $($JbiaP3TAzfXwV4uC2rP(34)).appear(function () {
            jQuery($JbiaP3TAzfXwV4uC2rP(18)).each(function () {
                jQuery(this).find($JbiaP3TAzfXwV4uC2rP(35)).animate({
                    width: jQuery(this).attr($JbiaP3TAzfXwV4uC2rP(19))
                }, 2500);
            });
        });
    } catch (d) {
    }
    /* -------------------------------------
     THEME ACCORDION
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(17)).on('click', function () {
        $($JbiaP3TAzfXwV4uC2rP(36)).removeClass('active');
        $(this).parents($JbiaP3TAzfXwV4uC2rP(36)).addClass('active');
        $('.panel').removeClass('active');
        $(this).parent().addClass('active');
    });
    /* -------------------------------------
     PRODUCT SLIDER
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(16)).owlCarousel({
        autoPlay: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: false,
        navigation: true,
        navigationText: [
            $JbiaP3TAzfXwV4uC2rP(37),
            $JbiaP3TAzfXwV4uC2rP(15)
        ]
    });
    /* -------------------------------------
     PRODUCT SLIDER
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(38)).owlCarousel({
        autoPlay: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTabletSmall: [568, 1],
        pagination: true,
        navigation: false,
        navigationText: [
            $JbiaP3TAzfXwV4uC2rP(37),
            $JbiaP3TAzfXwV4uC2rP(15)
        ]
    });
    /* -------------------------------------
     RELATED PRODUCT SLIDER
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(14)).owlCarousel({
        autoPlay: false,
        items: 3,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 3],
        itemsTabletSmall: [568, 1],
        pagination: true,
        navigation: false,
        navigationText: [
            $JbiaP3TAzfXwV4uC2rP(37),
            $JbiaP3TAzfXwV4uC2rP(15)
        ]
    });
    /* -------------------------------------
     TEAM SLIDER
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(39)).owlCarousel({
        autoPlay: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTabletSmall: [568, 1],
        pagination: true,
        navigation: false,
        navigationText: [
            $JbiaP3TAzfXwV4uC2rP(37),
            $JbiaP3TAzfXwV4uC2rP(15)
        ]
    });
    /* -------------------------------------
     TESTIMONIALS SLIDER
     -------------------------------------- */
    (function () {
        var m = $($JbiaP3TAzfXwV4uC2rP(13));
        var n = $($JbiaP3TAzfXwV4uC2rP(40));
        m.owlCarousel({
            autoPlay: true,
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
        });
        n.owlCarousel({
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [767, 3],
            itemsMobile: [479, 2],
            pagination: false,
            responsiveRefreshRate: 100,
            afterInit: function (p) {
                p.find(".owl-item").eq(0).addClass("synced");
            }
        });
        function syncPosition(p) {
            var s = this.currentItem;
            $($JbiaP3TAzfXwV4uC2rP(40))
                    .find(".owl-item")
                    .removeClass("synced")
                    .eq(s)
                    .addClass("synced")
            if ($($JbiaP3TAzfXwV4uC2rP(40)).data("owlCarousel") !== undefined) {
                center(s)
            }
        }
        $($JbiaP3TAzfXwV4uC2rP(40)).on("click", ".owl-item", function (e) {
            e.preventDefault();
            var p = $(this).data("owlItem");
            m.trigger("owl.goTo", p);
        });
        function center(p) {
            var s = n.data("owlCarousel").owl.visibleItems;
            var t = p;
            var u = false;
            for (var i in s) {
                if (t === s[i]) {
                    var u = true;
                }
            }
            if (u === false) {
                if (t > s[s.length - 1]) {
                    n.trigger("owl.goTo", t - s.length + 2)
                } else {
                    if (t - 1 === -1) {
                        t = 0;
                    }
                    n.trigger("owl.goTo", t);
                }
            } else if (t === s[s.length - 1]) {
                n.trigger("owl.goTo", s[1])
            } else if (t === s[0]) {
                n.trigger("owl.goTo", t - 1)
            }
        }
    }(jQuery));
    /* -------------------------------------
     PRETTY PHOTO GALLERY
     -------------------------------------- */
    $("a[data-rel]").each(function () {
        $(this).attr("rel", $(this).data("rel"));
    });
    $($JbiaP3TAzfXwV4uC2rP(12)).prettyPhoto({
        animation_speed: 'normal',
        theme: 'dark_square',
        slideshow: 3000,
        autoplay_slideshow: false,
        social_tools: false
    });
    /* -------------------------------------
     PRICE RANGE SLIDER
     -------------------------------------- */
    $(function () {
        $($JbiaP3TAzfXwV4uC2rP(41)).slider({
            range: true,
            min: 0,
            max: 500,
            values: [75, 300],
            slide: function (event, m) {
                $("#amount").val("\x24" + m.values[ 0 ] + " - $" + m.values[ 1 ]);
            }
        });
        $("#amount").val("\x24" + $($JbiaP3TAzfXwV4uC2rP(41)).slider("values", 0) + " - $" + $($JbiaP3TAzfXwV4uC2rP(41)).slider("values", 1));
    });
    /*---------------------------------------
     PRODUCT SLIDER
     -------------------------------------- */
    (function () {
        var m = $($JbiaP3TAzfXwV4uC2rP(11));
        var n = $($JbiaP3TAzfXwV4uC2rP(42));
        m.owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            navigation: false,
            pagination: false,
            afterAction: syncPosition,
            responsiveRefreshRate: 200,
        });
        n.owlCarousel({
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 4],
            itemsTablet: [768, 6],
            itemsMobile: [479, 4],
            pagination: false,
            navigation: false,
            navigationText: [
                $JbiaP3TAzfXwV4uC2rP(37),
                $JbiaP3TAzfXwV4uC2rP(15)
            ],
            responsiveRefreshRate: 100,
            afterInit: function (p) {
                p.find(".owl-item").eq(0).addClass("active");
            }
        });
        function syncPosition(p) {
            var s = this.currentItem;
            $($JbiaP3TAzfXwV4uC2rP(42))
                    .find(".owl-item")
                    .removeClass("active")
                    .eq(s)
                    .addClass("active")
            if ($($JbiaP3TAzfXwV4uC2rP(42)).data("owlCarousel") !== undefined) {
                center(s)
            }
        }
        $($JbiaP3TAzfXwV4uC2rP(42)).on("click", ".owl-item", function (e) {
            e.preventDefault();
            var p = $(this).data("owlItem");
            m.trigger("owl.goTo", p);
        });
        function center(p) {
            var s = n.data("owlCarousel").owl.visibleItems;
            var t = p;
            var u = false;
            for (var i in s) {
                if (t === s[i]) {
                    var u = true;
                }
            }
            if (u === false) {
                if (t > s[s.length - 1]) {
                    n.trigger("owl.goTo", t - s.length + 2)
                } else {
                    if (t - 1 === -1) {
                        t = 0;
                    }
                    n.trigger("owl.goTo", t);
                }
            } else if (t === s[s.length - 1]) {
                n.trigger("owl.goTo", s[1])
            } else if (t === s[0]) {
                n.trigger("owl.goTo", t - 1)
            }
        }
    }(jQuery));
    /*---------------------------------------
     PRODUCT SLIDER
     ---------------------------------------*/
    $('em.minus').on('click', function () {
        $('#quantity1').val(parseInt($('#quantity1').val(), 10) - 1);
    });
    $('em.plus').on('click', function () {
        $('#quantity1').val(parseInt($('#quantity1').val(), 10) + 1);
    });
    /* -------------------------------------
     Google Map
     -------------------------------------- */
     $($JbiaP3TAzfXwV4uC2rP(10)).gmap3({
         marker: {
             address: $JbiaP3TAzfXwV4uC2rP(43),
             options: {
                 title: $JbiaP3TAzfXwV4uC2rP(9),
                 icon: new google.maps.MarkerImage($JbiaP3TAzfXwV4uC2rP(44)),
             }
         },
         map: {
             options: {
                 zoom: 16,
                 scrollwheel: false,
                 disableDoubleClickZoom: true,
             }
         },
     });
    /* -------------------------------------
     COMMING SOON COUNTER
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(8)).countdown({
        date: $JbiaP3TAzfXwV4uC2rP(45),
        offset: -100,
        day: 'Day',
        days: 'Days'
    }, function () {
        alert('Done!');
    });
    /* -------------------------------------
     MASNORY GALLERY
     -------------------------------------- */
    $(window).load(function () {
        $($JbiaP3TAzfXwV4uC2rP(7)).isotope({
            itemSelector: $JbiaP3TAzfXwV4uC2rP(46),
            masonry: {columnWidth: 2}
        });
        /* -------------------------------------
         PRELOADER
         -------------------------------------- */

        jQuery("#status").delay(2000).fadeOut();
        jQuery("#preloader").delay(2000).fadeOut("slow");

        /* ---------------------------------------
         OUR PORTFOLIO GALLERY
         -------------------------------------- */
        $($JbiaP3TAzfXwV4uC2rP(6)).isotope({
            itemSelector: $JbiaP3TAzfXwV4uC2rP(47)
        });
    });
    /* ---------------------------------------
     OUR PORTFOLIO GALLERY
     -------------------------------------- */
    var f = $($JbiaP3TAzfXwV4uC2rP(6));
    var g = $('.option-set');
    var h = g.find('\x61');
    function j() {
        if ($().isotope) {
            var m = '';
            h.each(function () {
                var n = $(this).attr('data-filter');
                var p = window.location.href;
                var s = p.indexOf('filter=');
                if (s > 0) {
                    var t = p.substring(s + 7, p.length);
                    if ('\x2e' + t == n) {
                        m = '\x2e' + t;
                    }
                }
            });
            f.isotope({
                itemSelector: $JbiaP3TAzfXwV4uC2rP(47),
                filter: m
            });
            h.each(function () {
                var n = $(this);
                var p = n.attr('data-filter');
                if (p == m) {
                    if (!n.hasClass('active')) {
                        var s = n.parents('.option-set');
                        s.find('.active').removeClass('active');
                        n.addClass('active');
                    }
                }
            });
            h.on('click', function () {
                var n = $(this);
                var p = n.attr('data-filter');
                f.isotope({itemSelector: $JbiaP3TAzfXwV4uC2rP(47), filter: p});
                if (!n.hasClass('active')) {
                    var s = n.parents('.option-set');
                    s.find('.active').removeClass('active');
                    n.addClass('active');
                }
                return false;
            });
        }
    }
    var k = window.setTimeout(function () {
        window.clearTimeout(k);
        j();
    }, 1000);
    /* -------------------------------------
     SCROLL TO TOP
     -------------------------------------- */
    $($JbiaP3TAzfXwV4uC2rP(5)).on('click',function () {
        $('html, body').animate({scrollTop: 0}, 3000);
        return false;
    });

    /* ---------------------------------------
     Ajax Code for Contact Form
     --------------------------------------- */
    jQuery($JbiaP3TAzfXwV4uC2rP(48)).on('click', $JbiaP3TAzfXwV4uC2rP(4), function (e) {
        e.preventDefault();
        var m = jQuery(this);

        var n = m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(49)).serialize();
        var p = n;

        m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(3)).html('').hide();
        jQuery(m).parents('fieldset').append($JbiaP3TAzfXwV4uC2rP(50));
        m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(3)).removeClass($JbiaP3TAzfXwV4uC2rP(2));
        m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(3)).removeClass($JbiaP3TAzfXwV4uC2rP(51));

        var s = document.location
        var t = window.location;
        var u = t.pathname.substring(0, t.pathname.lastIndexOf('\x2f'));
        var v = t.href.substring(0, t.href.length - ((t.pathname + t.search + t.hash).length - u.length));

        jQuery.ajax({
            type: "POST",
            url: v + $JbiaP3TAzfXwV4uC2rP(1),
            data: p,
            dataType: "json",
            success: function (w) {
                jQuery(m).parents('fieldset').find('\x69').remove();
                jQuery($JbiaP3TAzfXwV4uC2rP(3)).show();
                if (w.type == 'error') {
                    m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(3)).addClass($JbiaP3TAzfXwV4uC2rP(52)).show();
                    m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(3)).html(w.message);
                } else {
                    m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(49)).get(0).reset();
                    m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(3)).addClass($JbiaP3TAzfXwV4uC2rP(0)).show();
                    m.parents($JbiaP3TAzfXwV4uC2rP(48)).find($JbiaP3TAzfXwV4uC2rP(3)).html(w.message);
                }
            }
        });

        return false;

    });
});