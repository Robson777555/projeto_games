$(function(){
    // Reorganiza o mosaico superior para que cada quadrado vire um slide
    (function(){
        var $wrap = $('.mosaico .container .mosaico-wraper');
        if($wrap.length){
            var $items = $wrap.find('> .mosaico-single > div').detach();
            $wrap.empty().append($items);
            // Anexa também as imagens da faixa inferior ao carrossel do topo
            var $socialItems = $('.mosaico-social > div').detach();
            if ($socialItems.length) {
                $wrap.append($socialItems);
                $('.mosaico-social').remove();
            }
        }
    })();

    // Carrossel do topo ao estilo "hero": 1 por vez, centralizado, com setas
    $('.mosaico .container .mosaico-wraper').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Próximo</button>',
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        adaptiveHeight: true,
        responsive:[
            { breakpoint:1024, settings:{ slidesToShow:1, centerMode:true } },
            { breakpoint:768,  settings:{ slidesToShow:1, centerMode:true } },
            { breakpoint:480,  settings:{ slidesToShow:1, centerMode:true, arrows:true, dots:true } }
        ]
    });

    // Carrossel das descrições (parte de baixo) com autoplay
    $('.tratamentos .container').slick({
        centerMode:false,
        slidesToShow:3,
        arrows:true,
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Próximo</button>',
        autoplay:true,
        autoplaySpeed:4000,
        infinite:true,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:true,
                    dots:true,
                    infinite:true,
                    centerMode:false,
                    slidesToShow:2
                }
            },
            {
                breakpoint:480,
                settings:{
                    arrows:true,
                    dots:true,
                    infinite:true,
                    centerMode:false,
                    slidesToShow:1
                }
            }
        ]
    });

    $('.depoimentos .container').slick({
        centerMode:false,
        slidesToShow:1,
        arrows:false,
        dots:true,
        infinite:true,
        autoplay:true,
        autoplaySpeed:5000
    });

})