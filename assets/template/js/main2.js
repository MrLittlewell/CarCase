jQuery(function(e) {
    window.onscroll = function() {
        let i = window.pageYOffset || document.documentElement.scrollTop;
        i >= 50 && e(".wrap_header").addClass("display_on"), i < 50 && e(".wrap_header").removeClass("display_on")
    }, e(document).ready(function() {
        e(".color-slider").slick({
            slidesToScroll: 5,
            slidesToShow: 5,
            responsive: [{
                breakpoint: 960,
                settings: {
                    centerMode: !0,
                    slidesToShow: 1
                }
            }]
        }), e("#text_btn").click(function() {
            console.log(e("#t_i_1").val()), console.log(e("#t_i_2").val())
        });
        new Swiper(".swiper-container", {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
            loop: !0,
            loopFillGroupWithBlank: !0,
            breakpoints: {
                500: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                400: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                },
                640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        });
        e(".cover-info-overlay").hide(), e("#slider_1").hide(), e("#slider_2").hide(), e("#slider_3").hide(), e("#slider_4").hide(), e("#slider_5").hide(), e("#slider_6").hide(), e("#slider_7").hide(), e("#slider_8").hide();
        let i = {
            Audi: ["80", "100", "A1", "A2", "A3", "A4", "A5", "A6", "Q3", "Q5"],
            Brilliance: ["M2 (BS4) с 2005- н.в. седан", "с 2005-н.в. седан"],
            BYD: ["BYD F3"],
            BMW: ["1", "3", "5", "X1", "X3", "X5"],
            Chery: ["Amulet", "Bonus", "CrossEastar", "Fora", "Indis", "Kimo", "M-11", "Sweet", "Tiggo"],
            Chevrolet: ["Aveo", "Captiva", "Cobalt", "Cruze", "Epica", "Lacetti", "Lanos", "Niva", "Orlando", "Rezzo", "Spark", "Tracker", "Trailblazer"],
            Ravon: ["R2"],
            Citroen: ["Berlingo", "C-crosser", "C-elysee", "C3", "C4", "C5", "Jumper", "Jumpy Multispace"],
            Daewoo: ["Espero", "Matiz", "Nexia", "Nubira"],
            Datsun: ["Mi-do", "On-do"],
            Dodge: ["Caliber", "Caravan", "Intrepid", "Stratus"],
            Daihatsu: ["Terios"],
            Fiat: ["Albea", "Doblo", "Ducato", "Fullback"],
            Ford: ["C-max", "EcoSport", "Escape", "Fiesta", "Focus", "Fusion", "Galaxy", "Kuga", "Mondeo", "Ranger", "S-max", "Tourneo", "Transit"],
            Geely: ["Emgrand", "MK", "Vision FC"],
            GreatWall: ["Hover", "Safe"],
            Honda: ["Accord", "Civic", "Cr-v", "Hr-v"],
            Hyundai: ["Accent", "Creta", "Elantra", "Getz", "H1", "I20", "I30", "I40", "Ix35", "Matrix", "Porter", "Santafe", "Solaris", "Sonata", "Trajet", "Tucson"],
            IranKhodro: ["Samand"],
            KIA: ["Carens", "Ceed", "Cerato", "Magentis", "Optima", "Picanto", "Rio", "Sorento", "Soul", "Spectra", "Sportage", "Venga"],
            Lada: ["FreeLander"],
            LandRover: ["IS", "Nx", "RX"],
            Lexus: ["Smily", "Solano", "X60"],
            Lifan: ["3", "5", "6", "Bt-50", "Cx-5", "Cx-7", "Mpv"],
            Mazda: ["A-classe", "B-classe", "C-classe", "E-classe", "G-classe", "GLK-classe", "M-classe", "S-classe", "Smart", "Sprinter", "Viano", "Vito"],
            MercedesBenz: ["Asx", "Carisma", "Colt", "Delica", "Eclipse", "Galant", "Grandis", "L-200", "Lancer", "Montero", "Outlander", "Pajero", "Pajero Sport", "Spacestar"],
            Mitsubishi: ["Almera", "Juke", "Maxima", "Micra", "Murano", "Navara", "Note", "Pathfinder", "Patrol", "Primera", "Qashqai", "Qashqai2+", "Sentra", "Teana", "Terrano", "Tiida", "X-trail"],
            Nissan: ["Insignia", "Meriva", "Mokka", "Vectra", "Zafira", "Antara", "Astra", "Corsa", "Insignia"],
            Opel: ["107", "206", "207", "301", "307", "308", "408", "508", "3008", "4007", "4008", "Boxer", "Expert Tepee", "Partner", "Traveller"],
            Peugeot: ["Clio", "Duster", "Espace", "Fluence", "Kangoo", "Kaptur", "Koleos", "Laguna", "Logan", "Master", "Megan", "Sandero", "SanderoStepway", "Scenic", "Symbol"],
            Renault: ["Ibiza", "Leon"],
            Rover: ["Fabia", "Kodiaq", "Octavia", "Rapid", "Roomster", "Superb", "Yeti"],
            Seat: ["Actyon", "Actyon Sports", "Kyron", "Musso", "Rexton"],
            Skoda: ["Forester", "Impreza", "XV"],
            SsangYong: ["Grandvitara", "Jimny", "Liana", "Swift", "Sx4", "Vitara"],
            Subaru: ["Auris", "Avensis", "C-HR", "Camry", "Carina", "Corolla", "Estima", "Highlander", "Hilux", "Landcruiser", "Landcruiser Prado", "Mark", "Matrix", "Prius", "Rav 4", "Venza", "Verso", "Vitz", "Yaris"],
            Suzuki: ["Road Partner"],
            Toyota: ["Amarok", "Beetle", "Bora", "Caddy", "Crafter", "Golf", "Golfplus", "Jetta", "Passat", "Passat CC", "Polo", "Sharan", "T-4", "T-5", "T-6", "Tiguan", "Touareg", "Touran"],
            TAGAZ: ["C-30", "S-40", "S 60", "V-50", "XC60", "Xc70"],
            Volkswagen: ["Estina", "Tingo"],
            Volvo: ["Volga", "Газель"],
            Vortex: ["Hunter", "Патриот-лимитед"],
            GAZ: ["45", "75"],
            UAZ: ["2109-21099", "2114-2115", "X-ray", "Веста", "Гранта", "Калина", "Лада Ларгус", "Лада Приора"]
        };
        e(".trigger").on("click", function() {
            let a = e(this),
                r = e(this).prev();
            e(this).toggleClass("trigger_on").next().find("ul").toggleClass("list_on"), e(this).next().find("ul li p").on("click", function() {
                r.val(e(this).attr("data-value")).change(), console.log(a.text(), e(this).text()), a.text(e(this).text()), a.removeClass("trigger_on").next().find("ul").removeClass("list_on")
            }), r.change(function() {
                if ("select_mark" === r.attr("name")) {
                    r.parent().next().find(".trigger").html("Модель автомобиля"), e("#select_model").val("");
                    let a = "",
                        l = r.val();
                    for (let e = 0; e < i[l].length; e++) a += '<li><p data-value = "' + i[l][e] + '">' + i[l][e] + "</p></li>", console.log(i[l][e]);
                    r.parent().next().find(".dropcontainer ul").html(a)
                }
            })
        }), e('[data-target="open-callback-form"]').click(function() {
            e(".popup-overlay").toggleClass("display_on")
        }), e("#popup_close_1").click(function() {
            e(".popup-overlay").toggleClass("display_on")
        }), e(".popup-cover-open-button").click(function() {
            let i = e(this).attr("data-value");
            e(".cover-info-overlay").css("opacity", "1").show(), e("#type_chehol_value").val(i)
        }), e(".catalog-slider").slick({
            slidesToScroll: 5,
            slidesToShow: 5,
            responsive: [{
                breakpoint: 960,
                settings: {
                    centerMode: !0,
                    slidesToShow: 1
                }
            }]
        }), e(".fancybox").fancybox(), e(".portfolio-slider").slick({
            slidesToScroll: 4,
            slidesToShow: 4,
            responsive: [{
                breakpoint: 960,
                settings: {
                    centerMode: !0,
                    slidesToShow: 1
                }
            }]
        }), e("#popup_close_2").click(function() {
            e(".cover-info-overlay").hide(), e("#slider_1").hide(), e("#slider_2").hide(), e("#slider_3").hide(), e("#slider_4").hide(), e("#slider_5").hide(), e("#slider_6").hide(), e("#slider_7").hide(), e("#slider_8").hide()
        }), e('[data-target="type_chehol_1"]').click(function() {
            e("#type_chehol_value").val(e(this).attr("data-value")), e("#slider_2").hide(), e("#slider_3").hide(), e("#slider_4").hide(), e("#slider_5").hide(), e("#slider_6").hide(), e("#slider_7").hide(), e("#slider_8").hide(), e("#slider_1").show()
        }), e('[data-target="type_chehol_2"]').click(function() {
            e("#type_chehol_value").val(e(this).attr("data-value")), e("#slider_1").hide(), e("#slider_3").hide(), e("#slider_4").hide(), e("#slider_5").hide(), e("#slider_6").hide(), e("#slider_7").hide(), e("#slider_8").hide(), e("#slider_2").show()
        }), e('[data-target="type_chehol_3"]').click(function() {
            e("#type_chehol_value").val(e(this).attr("data-value")), e("#slider_1").hide(), e("#slider_2").hide(), e("#slider_4").hide(), e("#slider_5").hide(), e("#slider_6").hide(), e("#slider_7").hide(), e("#slider_8").hide(), e("#slider_3").show()
        }), e('[data-target="type_chehol_4"]').click(function() {
            e("#type_chehol_value").val(e(this).attr("data-value")), e("#slider_1").hide(), e("#slider_2").hide(), e("#slider_3").hide(), e("#slider_5").hide(), e("#slider_6").hide(), e("#slider_7").hide(), e("#slider_8").hide(), e("#slider_4").show()
        }), e('[data-target="type_chehol_5"]').click(function() {
            e("#type_chehol_value").val(e(this).attr("data-value")), e("#slider_1").hide(), e("#slider_2").hide(), e("#slider_4").hide(), e("#slider_3").hide(), e("#slider_6").hide(), e("#slider_7").hide(), e("#slider_8").hide(), e("#slider_5").show()
        }), e('[data-target="type_chehol_6"]').click(function() {
            e("#type_chehol_value").val(e(this).attr("data-value")), e("#slider_1").hide(), e("#slider_2").hide(), e("#slider_3").hide(), e("#slider_5").hide(), e("#slider_4").hide(), e("#slider_7").hide(), e("#slider_8").hide(), e("#slider_6").show()
        }), e('[data-target="type_chehol_7"]').click(function() {
            e("#type_chehol_value").val(e(this).attr("data-value")), e("#slider_1").hide(), e("#slider_2").hide(), e("#slider_4").hide(), e("#slider_5").hide(), e("#slider_6").hide(), e("#slider_3").hide(), e("#slider_8").hide(), e("#slider_7").show()
        }), e('[data-target="type_chehol_8"]').click(function() {
            e("#type_chehol_value").val(e(this).attr("data-value")), e("#slider_1").hide(), e("#slider_2").hide(), e("#slider_4").hide(), e("#slider_5").hide(), e("#slider_6").hide(), e("#slider_7").hide(), e("#slider_3").hide(), e("#slider_8").show()
        })
    }), e("#test_2").click(function() {
        e("#color").val(e('input[data-target="radio_color"]:checked').val())
    }), e(".bg-1").on("click", "a[class!='tel']", function(i) {
        i.preventDefault();
        var a = e(this).attr("href"),
            r = e(a).offset().top;
        e("body,html").animate({
            scrollTop: r
        }, 1500)
    })
});