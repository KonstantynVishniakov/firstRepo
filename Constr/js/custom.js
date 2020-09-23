
        // Загружаем данные из localstorage, если они есть.
    $(window).on('load', function() {
        //Определяем переменные
        let saveForm = $('#wrapperForImg'),
            mainForm = $('#pic'),
            frontElem = $('#frontView'),
            backElem = $('#backView'),
            frontData = $('#viewImgFront'),
            backData = $('#viewImgBack');
        const saved = localStorage.getItem('Changes');
        if (saved) {
            saveForm.html(saved);
            //Если загружаем из хранилища, то устанавлиаем первичные классы
            setPrimaryClasses();
            drag();
            resize();
            showElements();
            hideElements();
            deleteImg();
            price();
            console.log('Loaded from local storage')
        } else {
            setPrimaryClasses();
            price();
            console.log('Local storage empty');

        }


        //Задаем первичные классы
        function setPrimaryClasses() {
            $('print').addClass("act");
            $('.texts').css('display', 'none');
            $('.uploadForm').css('display', 'none');
            frontData.addClass("active");
            frontElem.addClass("current");
            mainForm.addClass('frontState');
            $('#white').addClass('cur');
            changeColor();
            console.log('Primary classes was set')
        }

        //Переключаем на передний вид макета.
        $(frontElem).on('click', changeViewsFront);

        function changeViewsFront() {
            // В зависимости от выбранного цвета подгружается основа макета
            if($('#white').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/white.png)');
            } else if($('#black').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/black.png)');
            }else if($('#red').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/red.png)');
            }else if($('#bordo').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/bordo.png)');
            }else if($('#grey').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/grey.png)');
            }else if($('#cyan').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/cyan.png)');
            }else if($('#blue').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/blue.png)');
            }else if($('#purple').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/purple.png)');
            }else if($('#yellow').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/yellow.png)');
            }else if($('#orange').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/orange.png)');
            }else if($('#lightGreen').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/lightGreen.png)');
            }else if($('#green').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/fronts/green.png)');
            }
            console.log("Click on frontElem");
            mainForm.addClass('frontState').removeClass('backState');
            frontElem.addClass("current");
            backElem.removeClass("current");
            frontData.addClass("active");
            backData.removeClass("active");

        }

        //Переключаем на задний вид макета.
        $(backElem).on('click', changeViewsBack);

        function changeViewsBack() {
            // В зависимости от выбранного цвета подгружается основа макета
            if($('#white').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/white.png)');
            } else if($('#black').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/black.png)');
            }else if($('#red').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/red.png)');
            }else if($('#bordo').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/bordo.png)');
            }else if($('#grey').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/grey.png)');
            }else if($('#cyan').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/cyan.png)');
            }else if($('#blue').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/blue.png)');
            }else if($('#purple').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/purple.png)');
            }else if($('#yellow').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/yellow.png)');
            }else if($('#orange').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/orange.png)');
            }else if($('#lightGreen').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/lightGreen.png)');
            }else if($('#green').hasClass('cur')){
                mainForm.css('background-image', 'url(img/products/backs/green.png)');
            }
            console.log("Click on backElem");
            mainForm.addClass('backState').removeClass('frontState');
            backElem.addClass("current");
            frontElem.removeClass("current");
            backData.addClass("active");
            frontData.removeClass("active");

        }

        // Добавляем обертки для пользовательской картинки
        $("#userImageInput").change(function () {
            const image = $('img');
            let existImgFront = image.is('#blah');
            let existImgBack = image.is('#blah1');
            const wrapperfront = `
            <div  class=" dataWrapperFront "> <img id="blah" src="#" alt="Принт"><span class="delFront"> </span></div>`;
            const wrapperback = `
            <div  class=" dataWrapperBack"> <img id="blah1" src="#" alt="Принт"><span class="delBack"> </span></div>`;
            if (existImgFront === false && (mainForm).hasClass('frontState')) {
                $(wrapperfront).appendTo('#viewImgFront');
                readURL(this);
                drag();
                resize();
                showElements();
                hideElements();
                deleteImg();
                price();

            } else if (existImgBack === false && (mainForm).hasClass('backState')) {
                $(wrapperback).appendTo('#viewImgBack');
                readURL(this);
                drag();
                resize();
                showElements();
                hideElements();
                deleteImg();
                price();


            } else {
                readURL(this);
            }
        });

        //Загружаем картинку
        function readURL(input) {
            // Если выбран передний вид макета, загружаем картинку на него
            if (frontData.hasClass("active")) {

                if (input.files && input.files[0]) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        $('#blah').attr('src', e.target.result);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
            } else {
                // Иначе загружаем на задний вид макета
                if (input.files && input.files[0]) {
                    let reader = new FileReader();

                    reader.onload = function (e) {

                        $('#blah1').attr('src', e.target.result);
                    };

                    reader.readAsDataURL(input.files[0]);
                }
            }
        }

        //Делаем див с картинкой движущимся
        function drag() {

            $(".dataWrapperFront").draggable({
                containment: $('#pic')
            });
            $(".dataWrapperBack").draggable({
                containment: $('#pic')
            });
        }

        // делаем див с картинкой изменяющимся в размерах
        function resize() {
            $(".dataWrapperFront").resizable({
                maxWidth: 300,
                maxHeight: 300,
                aspectRatio: true,
                handles: "nw, se",
                classes: {
                    "ui-resizable-nw": "ui-icon ui-icon-gripsmall-diagonal-nw"
                }
            });
            //Первично скрываем элементы управления картинкой на фронтальной стороне
            $('.dataWrapperFront .ui-resizable-se').css('display', 'none');
            $('.dataWrapperFront .ui-resizable-nw').css('display', 'none');
            $('.dataWrapperFront .delFront').css('display', 'none');

            $(".dataWrapperBack").resizable({
                maxWidth: 300,
                maxHeight: 300,
                aspectRatio: true,
                handles: "nw, se",
                classes: {
                    "ui-resizable-nw": "ui-icon ui-icon-gripsmall-diagonal-nw"
                }
            });
            //Первично скрываем элементы управления картинкой на тыльной стороне
            $('.dataWrapperBack .ui-resizable-se').css('display', 'none');
            $('.dataWrapperBack .ui-resizable-nw').css('display', 'none');
            $('.dataWrapperBack .delFront').css('display', 'none');
        }

        // показываем элементы ресайза и удаления картинки
        function showElements() {
            const frontDataWrapper = $('.dataWrapperFront');
            const backDataWrapper = $('.dataWrapperBack');
            $('.dataWrapperFront img').on('mouseenter', function () {

                (frontDataWrapper).find('.ui-resizable-se').css('display', 'block');
                (frontDataWrapper).find('.ui-resizable-nw').css('display', 'block');
                (frontDataWrapper).find('.delFront').css('display', 'block');
                if($('#black').hasClass('cur')||$('#blue').hasClass('cur')||$('#purple').hasClass('cur')||$('#bordo').hasClass('cur')){
                    $('#viewImgFront').css('outline', '2px dotted #FFF');
                } else {
                    $('#viewImgFront').css('outline', '2px dotted #000');
                }
            });
            $('.dataWrapperBack img').on('mouseenter', function () {

                (backDataWrapper).find('.ui-resizable-se').css('display', 'block');
                (backDataWrapper).find('.ui-resizable-nw').css('display', 'block');
                (backDataWrapper).find('.delBack').css('display', 'block');
                if($('#black').hasClass('cur')||$('#blue').hasClass('cur')||$('#purple').hasClass('cur')||$('#bordo').hasClass('cur')){
                    $('#viewImgBack').css('outline', '2px dotted #FFF');
                } else {
                    $('#viewImgBack').css('outline', '2px dotted #000');
                }
            });
        }

        // прячем элементы ресайса и удаления картинки
        function hideElements() {
            const frontDataWrapper = $('.dataWrapperFront');
            const backDataWrapper = $('.dataWrapperBack');
            (frontData).on('mouseleave', function () {
                let existImgFront = $('img').is('#blah');
                if (existImgFront === true) {
                    (frontDataWrapper).find('.ui-resizable-se').css('display', 'none');
                    (frontDataWrapper).find('.ui-resizable-nw').css('display', 'none');
                    (frontDataWrapper).find('.delFront').css('display', 'none');
                    (frontDataWrapper).css('border', 'none');
                    (frontData).css('outline', 'none');

                }
            });
            (backData).on('mouseleave', function () {
                let existImgBack = $('img').is('#blah1');
                if (existImgBack === true) {
                    (backDataWrapper).find('.ui-resizable-se').css('display', 'none');
                    (backDataWrapper).find('.ui-resizable-nw').css('display', 'none');
                    (backDataWrapper).find('.delBack').css('display', 'none');
                    (backDataWrapper).css('border', 'none');
                    (backData).css('outline', 'none');
                }
            })
        }

        // удаляем картинку пользователя по клику на кнопку
        function deleteImg() {
            $('.delFront').on('click', function () {
                $('.dataWrapperFront').remove();
                price();
            });
            $('.delBack').on('click', function () {
                $('.dataWrapperBack').remove();
                price()
            })

        }

        // Сохраняем изменения в localstorage.
        $(".saveChanges").on('click', function () {
            localStorage.setItem('Changes', saveForm.prop('innerHTML'));
            console.log('Changes was saved on local storage');

        });


        // Очищаем макет от картинок и чистим localstorage.
        $('.deleteAll').on('click', function () {
            let frontStateCheck = $('#blah').attr('src');
            let backStateCheck = $('#blah1').attr('src');
            if (frontStateCheck !== '' || backStateCheck !== '') {
                $('.dataWrapperFront').remove();
                $('.dataWrapperBack').remove();
                price();
                localStorage.clear();
                console.log('Local storage cleared');
            }
        });
        //делаем скриншот макета для добавления в форму заказа
        $('#addCapture').on('click', function (e) {
            const image = $('img');
            e.preventDefault();
            let frontScreen = $('#wrapperForFrontScreen');
            let existImgFront = image.is('#blah');
            let existImgBack = image.is('#blah1');
            //Если картинка с обеих сторон, скриним их по очереди
            if (existImgFront === true && existImgBack === true) {
                if($('#white').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/white.png)');
                } else if($('#black').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/black.png)');
                }else if($('#red').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/red.png)');
                }else if($('#bordo').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/bordo.png)');
                }else if($('#grey').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/grey.png)');
                }else if($('#cyan').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/cyan.png)');
                }else if($('#blue').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/blue.png)');
                }else if($('#purple').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/purple.png)');
                }else if($('#yellow').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/yellow.png)');
                }else if($('#orange').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/orange.png)');
                }else if($('#lightGreen').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/lightGreen.png)');
                }else if($('#green').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/fronts/green.png)');
                }
                frontElem.addClass("current");
                backElem.removeClass("current");
                mainForm.addClass("frontState").removeClass("backState");
                frontData.addClass("active");
                backData.removeClass("active");
                html2canvas(document.getElementById("capture")).then(function (canvas) {
                    let my_screen_front = canvas;
                    console.log('Screen was saved');
                    frontScreen.val(my_screen_front);
                    backScreen();
                    captureBlock ();
                });

            } else if (existImgFront === true && existImgBack === false) {
                if ($('#white').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/white.png)');
                } else if ($('#black').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/black.png)');
                } else if ($('#red').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/red.png)');
                } else if ($('#bordo').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/bordo.png)');
                } else if ($('#grey').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/grey.png)');
                } else if ($('#cyan').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/cyan.png)');
                } else if ($('#blue').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/blue.png)');
                } else if ($('#purple').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/purple.png)');
                } else if ($('#yellow').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/yellow.png)');
                } else if ($('#orange').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/orange.png)');
                } else if ($('#lightGreen').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/lightGreen.png)');
                } else if ($('#green').hasClass('cur')) {
                    mainForm.css('background-image', 'url(img/products/fronts/green.png)');
                }
                frontElem.addClass("current");
                backElem.removeClass("current");
                mainForm.addClass("frontState").removeClass("backState");
                frontData.addClass("active");
                backData.removeClass("active");
                html2canvas(document.getElementById("capture")).then(function (canvas) {
                    let my_screen_front = canvas;
                    console.log('Screen was saved');
                    frontScreen.val(my_screen_front);
                });
                captureBlock();
            }


                 else if (existImgFront === false && existImgBack === true) {
                    if ($('#white').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/white.png)');
                    } else if ($('#black').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/black.png)');
                    } else if ($('#red').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/red.png)');
                    } else if ($('#bordo').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/bordo.png)');
                    } else if ($('#grey').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/grey.png)');
                    } else if ($('#cyan').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/cyan.png)');
                    } else if ($('#blue').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/blue.png)');
                    } else if ($('#purple').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/purple.png)');
                    } else if ($('#yellow').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/yellow.png)');
                    } else if ($('#orange').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/orange.png)');
                    } else if ($('#lightGreen').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/lightGreen.png)');
                    } else if ($('#green').hasClass('cur')) {
                        mainForm.css('background-image', 'url(img/products/backs/green.png)');
                    }
                    backElem.addClass("current");
                    frontElem.removeClass("current");
                    mainForm.addClass("backState").removeClass("frontState");
                    backData.addClass("active");
                    frontData.removeClass("active");
                    html2canvas(document.querySelector("#capture"), {
                        logging: true,
                        letterRendering: 1,
                        allowTaint: true,
                        useCORS: true
                    }).then(canvas => {
                        let my_screen_back = canvas;
                        console.log('Screen was saved');
                        frontScreen.val(my_screen_back);

                    });
                    captureBlock ();
                }


            function backScreen() {
                let backScreen = $('#wrapperForBackScreen');
                if($('#white').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/white.png)');
                } else if($('#black').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/black.png)');
                }else if($('#red').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/red.png)');
                }else if($('#bordo').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/bordo.png)');
                }else if($('#grey').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/grey.png)');
                }else if($('#cyan').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/cyan.png)');
                }else if($('#blue').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/blue.png)');
                }else if($('#purple').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/purple.png)');
                }else if($('#yellow').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/yellow.png)');
                }else if($('#orange').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/orange.png)');
                }else if($('#lightGreen').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/lightGreen.png)');
                }else if($('#green').hasClass('cur')){
                    mainForm.css('background-image', 'url(img/products/backs/green.png)');
                }
                backElem.addClass("current");
                frontElem.removeClass("current");
                mainForm.addClass("backState").removeClass("frontState");
                backData.addClass("active");
                frontData.removeClass("active");
                html2canvas(document.querySelector("#capture")).then(canvas => {
                    let my_screen_back = canvas;
                    console.log('Screen was saved');
                    backScreen.val(my_screen_back);
                });
                captureBlock ();
            }

        });
//Кликаем на кнопки изменения цвета
        $('.color').on('click', function () {
            mainForm.addClass('frontState').removeClass('backState');
            frontElem.addClass("current");
            backElem.removeClass("current");
            if($(this).hasClass('cur')) {
                $('.color').removeClass('cur');
            } else {
                $('.color').removeClass('cur');
                $(this).addClass('cur');
                changeColor();
            }
        });
//Изменяем цвет макета при клику на соответствующую кнопку
        function changeColor() {
if($('#black').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/black.png)');
    $('.frontView').attr('src', 'img/products/fronts/black.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/black.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #fff');
    $(backData).css('outline', '2px dotted #fff');

} else if ($('#white').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/white.png)');
    $('.frontView').attr('src', 'img/products/fronts/white.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/white.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #000');
    $(backData).css('outline', '2px dotted #000');

}else if ($('#red').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/red.png)');
    $('.frontView').attr('src', 'img/products/fronts/red.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/red.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #000');
    $(backData).css('outline', '2px dotted #000');

}else if ($('#bordo').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/bordo.png)');
    $('.frontView').attr('src', 'img/products/fronts/bordo.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/bordo.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #fff');
    $(backData).css('outline', '2px dotted #fff');

}else if ($('#grey').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/grey.png)');
    $('.frontView').attr('src', 'img/products/fronts/grey.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/grey.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #000');
    $(backData).css('outline', '2px dotted #000');

}else if ($('#cyan').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/cyan.png)');
    $('.frontView').attr('src', 'img/products/fronts/cyan.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/cyan.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #000');
    $(backData).css('outline', '2px dotted #000');

}else if ($('#blue').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/blue.png)');
    $('.frontView').attr('src', 'img/products/fronts/blue.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/blue.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #fff');
    $(backData).css('outline', '2px dotted #fff');

}else if ($('#purple').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/purple.png)');
    $('.frontView').attr('src', 'img/products/fronts/purple.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/purple.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #fff');
    $(backData).css('outline', '2px dotted #fff');

}else if ($('#yellow').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/yellow.png)');
    $('.frontView').attr('src', 'img/products/fronts/yellow.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/yellow.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #000');
    $(backData).css('outline', '2px dotted #000');

}else if ($('#orange').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/orange.png)');
    $('.frontView').attr('src', 'img/products/fronts/orange.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/orange.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #000');
    $(backData).css('outline', '2px dotted #000');

}else if ($('#lightGreen').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/lightGreen.png)');
    $('.frontView').attr('src', 'img/products/fronts/lightGreen.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/lightGreen.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #000');
    $(backData).css('outline', '2px dotted #000');

}else if ($('#green').hasClass('cur')){
    mainForm.css('background-image', 'url(img/products/fronts/green.png)');
    $('.frontView').attr('src', 'img/products/fronts/green.png').css('width','100px').css( 'height', '100px');
    $('.backView').attr('src', 'img/products/backs/green.png').css('width','100px').css( 'height', '100px');
    $(frontData).css('outline', '2px dotted #000');
    $(backData).css('outline', '2px dotted #000');
}

        }
        //Кликаем на кнопки выбора принт, или фото, или
        $('.btn').on('click', function () {
            if($(this).hasClass('act')) {
                $('.btn').removeClass('act');
            } else {
                $('.btn').removeClass('act');
                $(this).addClass('act');
                changeItem();
            }
        });
//Показываем нужный блок в зависимости от выбора
        function changeItem() {
            if($('.photo').hasClass('act')){
                $('.uploadForm').css('display', 'block');
                $('.prints').css('display','none');
                $('.texts').css('display','none');
            }else if($('.print').hasClass('act')){
                $('.prints').css('display','block');
                $('.uploadForm').css('display', 'none');
                $('.texts').css('display','none');
            }else if($('.text').hasClass('act')){
                $('.texts').css('display','block');
                $('.prints').css('display','none');
                $('.uploadForm').css('display', 'none');
            }
        }

//Переносим принт на наш макет
        $('.prints').on('click', function(e) {
            const image = $('img');
            let existImgFront = image.is('#blah');
            let existImgBack = image.is('#blah1');
            let src = e.target.getAttribute('src');

            if(src !== null) {
                const wrapperfront = `
            <div  class=" dataWrapperFront"> <img id="blah" src="#" alt="Принт"><span class="delFront"> </span></div>`;
                const wrapperback = `
            <div  class=" dataWrapperBack"> <img id="blah1" src="#" alt="Принт"><span class="delBack"> </span></div>`;
                if (existImgFront === false && (mainForm).hasClass('frontState')) {
                    $(wrapperfront).appendTo('#viewImgFront');
                    $('#blah').attr('src', src);
                    drag();
                    resize();
                    showElements();
                    hideElements();
                    deleteImg();
                    price();


                }else if (existImgBack === false && (mainForm).hasClass('backState')) {
                    $(wrapperback).appendTo('#viewImgBack');
                    drag();
                    resize();
                    showElements();
                    hideElements();
                    deleteImg();
                    price();
                    $('#blah1').attr('src', src);

                }else if(existImgFront === true && (mainForm).hasClass('frontState')){

                    $('#blah').attr('src', src);
                }else if(existImgBack === true && (mainForm).hasClass('backState')){
                    $('#blah1').attr('src', src);
                }


            }
        });
// Изменяем цены в зависимости от кол-ва добавленных картинок
        function price() {
            const image = $('img');
            let existImgFront = image.is('#blah');
            let existImgBack = image.is('#blah1');
            const noPrints = `
            <div  class="priceText">Итого: 180грн.</div>`;
            const onePrint = `
            <div  class="priceText">Итого: 280грн.</div>`;
            const twoPrints = `
            <div  class="priceText">Итого: 380грн.</div>`;
            if (existImgFront === false && existImgBack === false ) {
                $('.priceText').remove();
                $(noPrints).appendTo('.price');
            }else if(existImgFront === true && existImgBack === false ){
                $('.priceText').remove();
                $(onePrint).appendTo('.price');
            }else if(existImgFront === false && existImgBack === true ){
                $('.priceText').remove();
                $(onePrint).appendTo('.price');
            }
            else if(existImgFront === true && existImgBack === true ){
                $('.priceText').remove();
                $(twoPrints).appendTo('.price');
            }
        }
// Показываем и скрываем форму заказа по клику на кнопку
        $('.order').on('click', function () {
            const buttonOrder = $('.order');
            (buttonOrder).toggleClass('act');
            if((buttonOrder).hasClass('act')){
                $('.formForOrder').css('display','block');
            }else{
                $('.formForOrder').css('display','none');
            }
        });

    });



