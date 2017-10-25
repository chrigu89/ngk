document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
		navigator.splashscreen.hide();


}
function koma_ers(wert) {
		if(wert.indexOf(', ')>=0){
	var tmp = new Array();
		tmp=wert.split(', ');	
		wert=tmp.join('.')
	}
	if(wert.indexOf(',')>=0){
	var tmp = new Array();
		tmp=wert.split(',');	
		wert=tmp.join('.')
	}
	
	return wert;
}

 
function external(url) {	
    var ref = window.open(url, '_blank', 'location=yes,enableViewPortScale=yes');
}

function pdf(url) {
	if (navigator.userAgent.match(/(Android)/)) {
		url = 'http://apps.apfel.gold/siteguide/' + url;		
		var ref = window.open(url, '_system', 'location=no,enableViewPortScale=yes');
	} else {
		var ref = window.open(url, '_blank', 'location=yes,enableViewPortScale=yes');
	}
	
}

/*Wenn die DropDowns Beim Firefox nicht funktionieren muss dieser Code deaktiviert werden
function disableselect(e){
    return false
}
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.ontouchstart=disableselect
	document.ontouchmove=disableselect
	document.ontouchend=disableselect
    document.onmousedown=disableselect
 }
 masse_umrechnen
-------------------------------------------------------------------------------------*/
var masse_umrechnen = {

    mm_zu_in: function (val) {

        re = 25.4;
        val = val / re;
        return val;
    },
    m_zu_ft: function (val) {
        val = val / 0.30480;
        return val;
    },
    liter_zu_gallon: function (val) {
        val = val / 3.785;
        return val;
    },
    kg_zu_lbs: function (val) {
       val = val * 2.20462262;
		

        return val;
    },


    in_zu_mm: function (val) {
        re = 25.4;
        val = val * re;
        return val;
    },
    ft_zu_m: function (val) {
        val = val * 0.30480;
        return val;
    },
    gallon_zu_liter: function (val) {
        val = val * 3.785;
        return val;
    },
    lbs_zu_kg: function (val) {
        val = val / 0.45359237;
        return val;
    }
}

$(window).load(function() {

/*
ausgabe=document.getElementById('tra');
ausgabe.innerHTML ='AUSGABE OK';
	neue_masse_ausgewaehlt("Metrisch");	
*/	
})

function NachOben () {
  var y = 0;
  var x = 0;
  if (window.pageYOffset) {
    y = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    y = document.body.scrollTop;
  }
  if (y > 0) {
    window.scrollBy(-0, -10);
    setTimeout("NachOben()", 5);
  }
}

$(window).ready(function() {

$(".menu").css({"opacity":1});
$("#content").css({"opacity":1});
$(".content").css({"opacity":1});
$(".txt").css({"opacity":1});


$( "#load_" ).delay(350).fadeOut( 300, 'easeInQuart', function() {
$( '#load_' ).removeClass( "loader_img" );
});



})



var onReady = function(){

/**
			$('#content').animate({
          opacity:1
        }, 500, 'swing', function() {

			
		
		});	
				$('.txt').animate({
          opacity:1
        }, 500, 'swing', function() {

			
		
		});	
	*/
function kontakt_land(rel){
	$( "#ergebnisse" ).html('<br><br><br><br><br><br>');
	
	if(rel=='de'){
$( ".zip_enter" ).fadeIn( 170, 'easeInQuart', function() {

});			
	}
	if(rel=='os'){
		zip_input_id.value='';
		zip_btn_akt();
			 $( ".zip_enter" ).fadeOut( 170, 'easeInQuart', function() {
				 
$( "#ergebnisse" ).html('<br><div class="kont_links"><p class="mt0"><span class="orange_txt">Frank Grygowski</span><br>Dr.-Alfred Herrhausen-Allee 36<br>D- 47228 Duisburg</p><p class="tel_nr"> <a href="tel:017610037380">+49(0)176 100 37380</a> </p><p class="fax_nr"> +49(0)2065 999-111</p></div><div class="kont_rechts"><img src="images/kontakt/de/FG_4c-web_6x8.jpg"></div><div class="clr"></div><p class="amail"> <a href="mailto:frank.grygowski@trelleborg.com">frank.grygowski@<span class="orange_txt">trelleborg.com</span></a></p><div class="kont_platz"></div>');
});		
		
	}	
		
	};	
	
	function neu_seite(url){
/*
	 $( "#load_" ).fadeIn( 300, 'easeOutQuart', function() {
	window.location.href=url;
});

*/

				$('body').animate({
          opacity:0
        }, 300, 'easeInQuart', function() {

			window.location.href=url;	
		
		});	
		
	}
	
	
	
	
	xWidth = null;
		if(xWidth == null) {
			if(window.innerWidth != null)
			  xWidth = window.innerWidth;

		}

		xHeight = window.innerHeight;
		$(".content").css({"min-height":xHeight+20});



function men_display(nb){

	$(".menu").css({'display': nb });	
}
	
$( 'input' ).focus(function() {
	


	if(calc){
		
			$( this ).parent( ".eing_mth" ).addClass( "input_focus" );
		
		
		}else{men_display('none');
		$( this ).addClass( "input_focus" );
	}



});		
		
$( "textarea" ).focus(function() {
	men_display('none');
	$( this ).addClass( "input_focus" );

	
});	
$( "select" ).focus(function() {
men_display('none');



});	

	
	
$( "input" ).blur(function() {
	men_display('block');

	$( '.input_focus' ).removeClass( "input_focus" );

});		
$( "textarea" ).blur(function() {
	men_display('block');
	$( '.input_focus' ).removeClass( "input_focus" );
});		
	
$( "select" ).blur(function() {
	men_display('block');
	$( '.input_focus' ).removeClass( "input_focus" );
});		
	
	

	
	
feedback_fragen = new Object();


	  	function feedb_ausgabe(){
	



}
	
	

	
	
	
	
	
	

	
	
	
	
	
	
	
	//LinkToutch--------------------------------------------------------------------------------------------
	bewegung=false;
	tatsch=false;
	var LinkToutch = {

	elements : ['a'],
	setup : function(){
	for(j=0;j<LinkToutch.elements.length+1;j++){	
	
	
	for(i=0;i<document.getElementsByTagName(LinkToutch.elements[j]).length;i++){
	
	var el = document.getElementsByTagName(LinkToutch.elements[j])[i];
	
	if(navigator.userAgent.indexOf("Firefox") != -1){
	el.onmousedown = LinkToutch.touchstart;
	el.onmouseup = LinkToutch.touchend; 
	el.onmousemove = LinkToutch.touchmove;	
	}else{
	el.ontouchstart = LinkToutch.touchstart;
	el.ontouchend = LinkToutch.touchend; 
	el.ontouchmove = LinkToutch.touchmove;
	}
	}
	}
	},
		feedback : function(f_id,f_rel){
		
			$( '.feed[rel="'+f_rel+'"]' ).removeClass( "f_active" );
		$( '.feed[rel="'+f_rel+'"][id="'+f_id+'"]' ).addClass( "f_active" );
		
		
			//'+f_id+'
			
feedback_fragen[f_rel] = f_id;
/*
  for (var Eigenschaft in feedback_fragen)
    document.write("<dd>" + Eigenschaft + ": " + feedback_fragen[Eigenschaft] + "<\/dd>");
*/

if(f_rel=='produkte_service'){

if(f_id=='ja'){
		 $( '#p_s_eingabe' ).slideDown( 300, 'easeInQuart', function() {

});
}else{
		 $( '#p_s_eingabe' ).slideUp( 300, 'easeInQuart', function() {

});	
}
}
if(f_rel=='verb'){

if(f_id=='ja'){
		 $( '#verbesser_eing' ).slideDown( 300, 'easeInQuart', function() {

});
}else{
		 $( '#verbesser_eing' ).slideUp( 300, 'easeInQuart', function() {

});	
}
}

		},
	formssenden : function(f_name){
		var arr = new Array();
		arr=f_name.split('#');
		//document.getElementsByName(arr[1])[0].submit();		
	},
		alert_ausgeben : function(alert_txt){
	$( '#load_' ).addClass( "overlay" );
	$( '#load_' ).addClass( "alr" );
	 $( "#alert_txt" ).html(alert_txt);

	
	 toprt=xHeight/2;
	 toprt=toprt-($( "#alert_fens" ).height()/2);
	 $( "#alert_fens" ).css({'top':toprt+'px'});
	
	 $( "#load_" ).fadeIn( 170, 'easeInQuart', function() {

});
	
		 $( "#alert_fens" ).delay(70).fadeIn( 170, 'easeInQuart', function() {

});	
	},
	alert_schliessen : function(){
		 $( "#load_" ).fadeOut( 100, 'easeInQuart', function() {

});
	
		 $( "#alert_fens" ).delay(50).fadeOut( 100, 'easeInQuart', function() {
$( '#load_' ).removeClass( "overlay" );
	$( '#load_' ).removeClass( "alr" );
});		
	},
	touchstart : function(){
	


	$( this ).addClass( "a_hover" );

	bewegung=false;	
	
	},
	touchmove :function(event){
		//event.preventDefault();

	
	bewegung=true;	

	$( ".a_hover" ).removeClass( "a_hover" );
	
	},
	
	touchend : function(){

	

		$( this ).removeClass( "a_hover" );

		
	if(!bewegung){
		if(this.id=='alert_btn') {
			//window.location.href=this.rel;
					LinkToutch.alert_schliessen();
		}else if(this.className.indexOf("ansp")>=0) {
			kontakt_land(this.rel);
			
			
		}else if(this.className.indexOf("feed")>=0) {
			//window.location.href=this.rel;
					LinkToutch.feedback	(this.id,this.rel);
		
		}else if(this.id.indexOf('#')>=0){
		LinkToutch.formssenden(this.id);
	}else if(this.id=='zip_btn'){
	//id muss  alert_ sein rel ist der alert text
zip_btn_akt();
	}else if(this.className.indexOf('alert_')>=0){
	//id muss  alert_ sein rel ist der alert text
	LinkToutch.alert_ausgeben(this.rel);
	} else{
//window.location.href=this.id;

if(this.id!='load_'&&this.id!='alert_btn'&&this.href==''){
	//parent.link_aufrufen(this.id,this.rel);
	//window.location.href=this.rel;
		if (this.className.indexOf('onclick_external') >= 0 ){
                       external(this.rel);
		} else if (this.className.indexOf('onclick_pdf') >= 0 ){
                       pdf(this.rel);
		} else {
		neu_seite(this.rel);
		}
}else{
	
	//window.location.href=this.rel;
	//neu_seite(this.rel);
}
	}
	}
	}
	}
	LinkToutch.setup();
	
	
/*	

Seiten aufrufen in anderem iframe und übergang
<a id="calculator"  rel="calculator.html">Oben: calculator.html</a>

<br>
Seiten aufrufen in selben iframe ohne übergang
<a rel="calculator.html">Unten: calculator.html</a>	
*/	
	
//LinkToutch--------------------------------------------------------------------------------------------
	
	
	
	

	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
		



}

$(document).ready(onReady);



		 function alert_ausgeben(alert_txt){

	$( '#load_' ).addClass( "overlay" );
	$( '#load_' ).addClass( "alr" );
	 $( "#alert_txt" ).html(alert_txt)
	 $( "#load_" ).fadeIn( 170, 'easeInQuart', function() {

});
	
		 $( "#alert_fens" ).delay(70).fadeIn( 170, 'easeInQuart', function() {

});	
}