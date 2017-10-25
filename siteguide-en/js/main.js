height_if = 0;
meneu = 'menu_zeigen';
$(document).ready(function (e) {

    function disableselect(e) {
        return false
    }

    function reEnable() {
        return true
    }
    document.onselectstart = new Function("return false")
    if (window.sidebar) {
        document.ontouchstart = disableselect
        document.ontouchmove = disableselect
        document.ontouchend = disableselect
        document.onmousedown = disableselect
    }




    xWidth = null;
    if (xWidth == null) {
        if (window.innerWidth != null)
            xWidth = window.innerWidth;

    }

    xHeight = window.innerHeight;
    $("#site").height(xHeight - 52);
    $("#site2").height(xHeight - 52);
    height_if = xHeight - 52;




    //LinkToutch--------------------------------------------------------------------------------------------
    bewegung = false;
    site = 1;
    tatsch = false;

    akt_ende = '';
    var LinkToutch = {

        elements: ['a'],
        setup: function () {
            for (j = 0; j < LinkToutch.elements.length + 1; j++) {


                for (i = 0; i < document.getElementsByTagName(LinkToutch.elements[j]).length; i++) {

                    var el = document.getElementsByTagName(LinkToutch.elements[j])[i];

                    if (navigator.userAgent.indexOf("Firefox") != -1) {
                        el.onmousedown = LinkToutch.touchstart;
                        el.onmouseup = LinkToutch.touchend;
                        el.onmousemove = LinkToutch.touchmove;
                    } else {
                        el.ontouchstart = LinkToutch.touchstart;
                        el.ontouchend = LinkToutch.touchend;
                        el.ontouchmove = LinkToutch.touchmove;
                    }
                }
            }
        },
        formssenden: function (f_name) {
            var arr = new Array();
            arr = f_name.split('#');
            document.getElementsByName(arr[1])[0].submit();
        },
        touchstart: function () {



            $(this).addClass("a_hover");

            bewegung = false;

        },
        touchmove: function (event) {
            //event.preventDefault();


            bewegung = true;
            $(".a_hover").removeClass("a_hover");
        },

        touchend: function () {

            $(this).removeClass("a_hover");


            if (!bewegung) {

                if (this.id.indexOf('#') >= 0) {
                    LinkToutch.formssenden(this.rel);
                } else {
                    //window.location.href=this.id;

                    if (this.id != 'sperre') {
                        akt_ende = this.id;
                        //this.className+=' neu';

                        if (site == 1) {
                            site = 2;
                            tatsch = true;
                            document.getElementById('site2').src = this.rel;

                        } else if (site == 2) {
                            site = 1;
                            tatsch = true;
                            document.getElementById('site').src = this.rel;

                        }
                    }
                }
            }
        }
    }
    LinkToutch.setup();
    //LinkToutch--------------------------------------------------------------------------------------------



});

function seite_aktivieren(meneu_akt) {
    $("#site").height(xHeight - 52);
    $("#site2").height(xHeight - 52);
    if (meneu_akt == 'menu_zeigen' && meneu == 'menu_weg') {
        meneu = 'menu_zeigen';



        $('.menu').animate({

            bottom: '0px'

        }, 500, 'swing', function () {
            $("#site").height(xHeight - 52);
            $("#site2").height(xHeight - 52);
        });


    }
    if (meneu_akt == 'menu_weg' && meneu == 'menu_zeigen') {
        meneu = 'menu_weg';
        $("#site").height(xHeight);
        $("#site2").height(xHeight);
        $('.menu').animate({

            bottom: '-60px'

        }, 500, 'swing', function () {



        });



    }


    if (site == 2) {


        $("#sperre").css({
            "display": 'block'
        });


        $("#site").css({
            "z-index": '0'
        });
        $("#site2").css({
            "z-index": '100'
        });

        $('#site2').animate({

            opacity: 1

        }, 500, 'swing', function () {



            link_highlight();


            $("#site").css({
                "opacity": '0'
            });
            $("#sperre").css({
                "display": 'none'
            });

        });


    } else if (site == 1) {
        $("#sperre").css({
            "display": 'block'
        });

        $("#site2").css({
            "z-index": '0'
        });
        $("#site").css({
            "z-index": '100'
        });


        $('#site').animate({

            opacity: 1

        }, 500, 'swing', function () {


            link_highlight();

            $("#site2").css({
                "opacity": '0'
            });
            $("#sperre").css({
                "display": 'none'
            });
        });

    }

}

function link_highlight() {

    if (tatsch) {
        $('.active').removeClass("active");
        $('#' + akt_ende).addClass("active");
    }
    tatsch = false;

}

function func() {


}

function link_aufrufen(act_id, url) {

    akt_ende = act_id;

    if (site == 1) {
        site = 2;
        tatsch = true;
        document.getElementById('site2').src = url;

    } else if (site == 2) {
        site = 1;
        tatsch = true;
        document.getElementById('site').src = url;

    }




}