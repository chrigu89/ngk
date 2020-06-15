
function c1_NachOben () {
  var y = 0;
  var x = 0;
  if (window.pageYOffset) {
    y = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    y = document.body.scrollTop;
  }
  if (y > 0) {
    window.scrollBy(-0, -10);
    setTimeout("c1_NachOben()", 5);
  }
}

/*
Verlauf----------------------------------------------------------------
*/


function location_href(){ 
 l_href= window.location.href;
 tmp = new Array;
 tmp= l_href.split('?'); 
 return tmp[0]; 
 
}

var aktuelles_obj= {};
  var d = new Date();
 l_href =location_href(); 


var j_obj=
  {
date: d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear(),
id: "",
name: verlauf_name,
url: l_href,
wert_1: "",
wert_2: "",
wert_3: "",
wert_4: "",
wert_5: "",
wert_6: "",
wert_7: "",
wert_8: "",
wert_9: "",
wert_10: "",
wert_11: ""
};




v_id=parseFloat(getUrlVars()["id"]);


	var elemente = new Array()
   var timer;
   var timer_i = 0;
function felder_feullen(){
	
	if(timer_i<elemente.length){
			c1_console_log('timer_i '+timer_i);
	c1_console_log(elemente[timer_i]['element'] +' / '+elemente[timer_i]['wert']);
	$( elemente[timer_i]['element'] ).val(elemente[timer_i]['wert'])
		timer_i++
timer = setTimeout(function(){ felder_feullen() }, 200);
	}
}
  verlauf_json_str=window.localStorage.getItem('verlauf_json_str'); 
   c1_console_log('verlauf_json_str' );	
	c1_console_log(verlauf_json_str );
   var verlauf_json_obj; 

   
   
   if(verlauf_json_str!=null){
      var verlauf_json_obj = JSON.parse( window.localStorage.getItem('verlauf_json_str') );	
	c1_console_log('verlauf_json_obj' );	
	c1_console_log(verlauf_json_obj );
	
   }
if(!isNaN(v_id)){
//c1_console_log(v_id);

  $( "form.eingabe_form input, form.eingabe_form select" ).change(function() {
 $( "#verlauf_info" ).hide();	
});
   
   

   
   
 
   if(verlauf_json_str!=null){
  
	j_index=0;
	    for(j=0;j<verlauf_json_obj.length;j++){
		
	
		
		if(verlauf_json_obj[j]['id']==v_id){
		    $( "#verlauf_info" ).html('<span>'+verlauf_json_obj[j]['date']+'</span><a id="c1_v_reset" href="'+location_href()+'">X</a>');
			 $( "#verlauf_info" ).show();	
		j_index = j	
		}
}
	
		//c1_console_log('<li><a rel="'+verlauf_json_obj[j_index]['url']+'?id='+verlauf_json_obj[j_index]['id']+'">'+verlauf_json_obj[j_index]['date']+'<br>'+verlauf_json_obj[j_index]['name']+'</a></li>');
		aktuelles_obj= verlauf_json_obj[j_index];
		

	
			$( 'form.eingabe_form input, form.eingabe_form select' ).each(function( index ) {
				
				
				
				
				
				tmp_e = new Array();
				
				tmp_e['element']=$( this ).get(0).tagName+'[name="'+$( this ).attr('name')+'"]';
			tmp_e['wert']=verlauf_json_obj[j_index]['wert_'+(index+1)];
				
				
				elemente.push(tmp_e);
				
				//$( this ).val(verlauf_json_obj[j_index]['wert_'+(index+1)])
				//c1_console_log($( this ).val(verlauf_json_obj[j_index]['wert_'+(index+1)])+' / '+index);
			
				
				});
				
				felder_feullen();
	
   }

	
//verlauf_json_obj.push(j_obj);
//c1_console_log( verlauf_json_obj);	
};

//c1_console_log( j_obj);

/*
Verlauf----------------------------------------------------------------
*/







function zurueck_eing(e){
	berechnen_go=false;
	$( '#load_' ).addClass( "loader_img" );
$( '#load_' ).addClass( "overlay" );
 $( "#load_" ).fadeIn( 300, 'easeInQuart', function() {

});
		$('.werte_eingaben').animate({
			
			left:'0'

		}, 1000, 'swing', function() {

  	 document.getElementById("calculator").style.display='block';
	  document.getElementById("zuruck_z_eingabe").style.display='none';
});	
		$('.werte_ergebnisse').animate({
			
			left:'100%'

		}, 1000, 'swing', function() {
				
		 $( "#load_" ).fadeOut( 300, 'easeInQuart', function() {
$( '#load_' ).removeClass( "loader_img" );
$( '#load_' ).removeClass( "overlay" );
$("#komponenten_anfr,#zusch_d").removeAttr('style');
});
		
	
});	

			$('html,body').animate({
          scrollTop:0
        }, 1000, 'swing', function() {
content_height_eingabe();
			c1_NachOben ();
		
		});	
	
}
 


function content_height_ergebnisse(){
c1_console_log($("#zusch_d ").height());
	$(".content").css({"height":$(".werte_ergebnisse ").height()+$("#zusch_d ").height()+150});
	
}
function content_height_eingabe(){
	
	$(".content").css({"height":$(".werte_eingaben ").height()+200});
	
}

function verlaufsobjekt_erstellen_und_hinzufuegen(){
	
c1_console_log('verlauf_json_obj');
			c1_console_log( verlauf_json_obj);
	
	c1_console_log('aktuelles_obj' );	
	c1_console_log(aktuelles_obj );

		
	$( 'form.eingabe_form input, form.eingabe_form select' ).each(function( index ) {
			
		j_obj['wert_'+(index+1)] = $( this ).val();	
			
		});	
		if(typeof verlauf_json_obj === 'undefined'){	
		j_obj['id'] = "0";
		c1_console_log('verlauf_json_obj.length 0' );	
		}else{
		
			j_obj['id'] = verlauf_json_obj.length.toString();
		c1_console_log(verlauf_json_obj.length );
		}
c1_console_log('j_obj' );

c1_console_log(j_obj );

	c1_console_log('aktuelles_obj' );	
	c1_console_log(aktuelles_obj );

	
    debug_wert = '';
	neu=false;
	if(aktuelles_obj['name']!=j_obj['name']){debug_wert+= 'name,'+aktuelles_obj['name']+'| |'+j_obj['name']+'|';
	neu=true;	
	}else if(aktuelles_obj['wert_1']!=j_obj['wert_1']){debug_wert+= 'wert_1,';	
	neu=true;	
	}else if(aktuelles_obj['wert_2']!=j_obj['wert_2']){debug_wert+= 'wert_2,';
	neu=true;	
	}else if(aktuelles_obj['wert_3']!=j_obj['wert_3']){debug_wert+= 'wert_3,';
	neu=true;	
	}else if(aktuelles_obj['wert_4']!=j_obj['wert_4']){debug_wert+= 'wert_4,';
	neu=true;	
	}else if(aktuelles_obj['wert_5']!=j_obj['wert_5']){debug_wert+= 'wert_5,';
	neu=true;	
	}else if(aktuelles_obj['wert_6']!=j_obj['wert_6']){debug_wert+= 'wert_6,';
	neu=true;	
	}else if(aktuelles_obj['wert_7']!=j_obj['wert_7']){debug_wert+= 'wert_7,';
	neu=true;	
	}else if(aktuelles_obj['wert_8']!=j_obj['wert_8']){debug_wert+= 'wert_8,';
	neu=true;	
	}else if(aktuelles_obj['wert_9']!=j_obj['wert_9']){debug_wert+= 'wert_9,';
	neu=true;	
	}else if(aktuelles_obj['wert_10']!=j_obj['wert_10']){debug_wert+= 'wert_10,';
	neu=true;	
	}else if(aktuelles_obj['wert_11']!=j_obj['wert_11']){debug_wert+= 'wert_11,';
	neu=true;	
	}
	
	if(neu){
		
			if(typeof verlauf_json_obj === 'undefined'){	
		j_obj['id'] = "0";
		c1_console_log('j_obj id 0' );	
		verlauf_json_obj = new Array();
		verlauf_json_obj[0]=j_obj;
			 	var new_json = JSON.stringify(verlauf_json_obj);
	 window.localStorage.setItem('verlauf_json_str',new_json) 
	 
	 if(typeof aktuelles_obj === 'undefined'){

	     for (var i in j_obj) {
        aktuelles_obj[i] = j_obj[i];
    }
	 }
		}else{
			
	     j_obj['id'] = (verlauf_json_obj.length).toString();
	     verlauf_json_obj.unshift(j_obj);
		 	var new_json = JSON.stringify(verlauf_json_obj);
	 window.localStorage.setItem('verlauf_json_str',new_json);	
	
		     for (var i in j_obj) {
        aktuelles_obj[i] = j_obj[i];
    }
		
		 
		}
		
		
		c1_console_log( window.localStorage.getItem('verlauf_json_str'));
		
	
	
	
	}
	
	
	
	c1_console_log('neu: ' +neu +' / debug_wert: '+debug_wert);	

}


function berechnen_animation(){
	verlaufsobjekt_erstellen_und_hinzufuegen();
	$( '#load_' ).addClass( "loader_img" );
$( '#load_' ).addClass( "overlay" );

 $( "#load_" ).fadeIn( 300, 'easeInQuart', function() {

	 document.getElementById("calculator").style.display='none';
	  document.getElementById("zuruck_z_eingabe").style.display='block';
});
		$('.werte_eingaben').delay(300).animate({
			
			left:'-100%'

		}, 1400, 'swing', function() {
	 
	
});	
		$('.werte_ergebnisse').delay(300).animate({
			
			left:'0'

		}, 1400, 'swing', function() {
 $( "#load_" ).fadeOut( 300, 'easeInQuart', function() {
$( '#load_' ).removeClass( "loader_img" );
$( '#load_' ).removeClass( "overlay" );
});
			//NachOben ();
		
		});
			$(".content").css({"height":$(".werte_ergebnisse ").height()+150});
			$('html,body').delay(300).animate({
          scrollTop:0
        }, 1400, 'swing', function() {

			NachOben ();
		
		});
		
	
	






	
}




function komponenten_anfr(e) {
	
	 $("#komponenten_anfr").fadeOut(160, 'easeInQuart', function () {
      $("#zusch_d").slideDown(380, 'easeInQuart', function () {content_height_ergebnisse();});
		  
		});
	
}






	$(document).ready(function() {


 setTimeout(function(){
weHeight=$(".werte_eingaben ").height();
xHeight = window.innerHeight;
if(xHeight>=weHeight){
$(".content").css({"min-height":xHeight+150});
}else{
	
	$(".content").css({"min-height":weHeight+150});
}
}, 500);


if(navigator.userAgent.indexOf("Firefox") != -1){
document.getElementById('berechnen').onmousedown=ergebnisse_berechnen;
}else{
	document.getElementById('berechnen').ontouchstart=ergebnisse_berechnen;
}


	
if(navigator.userAgent.indexOf("Firefox") != -1){
	document.getElementById('zurueck').onmousedown=zurueck_eing;
	document.getElementById('zuruck_z_eingabe').onmousedown=zurueck_eing;
}else{
    document.getElementById('zurueck').ontouchstart=zurueck_eing;
	document.getElementById('zuruck_z_eingabe').ontouchstart=zurueck_eing;
}



if (navigator.userAgent.indexOf("Firefox") != -1) {
    document.getElementById('komponenten_anfr').onmousedown = komponenten_anfr;
} else {
    document.getElementById('komponenten_anfr').ontouchstart = komponenten_anfr;
   
}










});