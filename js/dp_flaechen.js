

$(window).load(function() {
calc=true;



})


vtc='<br>Dies ist kein gültiger Wert! <br>Bitte geben Sie eine gültige Zahl ein.';



 var elaubte_nr_arr = new Array('0','1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ',', ' '  );

function elaubte_nr(wert) {
feh=false;
for (j = 0; j < wert.length; j++) {	
ein_w=wert.charAt(j);
vorh=false;
for (i = 0; i < elaubte_nr_arr.length; i++) {	
if(ein_w==elaubte_nr_arr[i]){
	 vorh=true;	
}
}
if(!vorh){
	 feh=true;	
}
}
if(feh){
	return false;
}else{
	return true;
}	
}
function zahl_pruefen(z_id){
z_val=document.getElementById(z_id).value;
	
if(!elaubte_nr(z_val)){
   alert_ausgeben(z_val+vtc );
 document.getElementById(z_id).value='';
	return '';
}else{
	return z_val;	
	
}
	
	
}
onoff_rd=false;
onoff_crf=false;

function nutzl_schild() {
	
	if(onoff_rd && onoff_crf){
	  $( "#zusatzlagen_anz" ).slideDown( 300, function() {
  });
	
	}else if(!onoff_rd || !onoff_crf){
		 $( "#zusatzlagen_anz" ).slideUp( 300, function() {

 });		
	
	}
}


function duchm_dm_hinzufuegen (val_ ,id_) {
  NeuerEintrag = new Option(val_, val_, false, true);
  document.getElementById(id_).options[document.getElementById(id_).length] = NeuerEintrag;
 
 }
 function duchm_dm_loeschen (id_) {
	 
  document.getElementById(id_).options[document.getElementById(id_).length - 1] = null;
}

function ClearOptions(id)
{
	document.getElementById(id).options.length = 0;
}
function CheckAuswahl (nr_,id_) {
  if (document.getElementById(id_).selectedIndex != nr_)
    document.getElementById(id_).selectedIndex = nr_;
}









masse=document.getElementById('sel').value;
matte=document.getElementById('sel_1').value;
gfk_matte=''
dm_rohr_val = '';




masssystem="Metrisch";
reperatur_lange_val = 0;
gfk_flaeche=0;
zusatzlagen_val='1';
zusatzlagen_l_val=0;
zusatzlagen_flaeche=0;
z_lagen_flaeche=0;
gesamtflaeche=0;
zusatzlagen_set_selection=false;
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 2 <br>(davon min. 0 Zusatzlagen)';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 3 <br>(davon min. 0 Zusatzlagen)';
zusatzl_erklaerung_td='<td>Empfohlene Gesamtlagen <br>davon min. 0 Zusatzlagen</td><td>2</td>';
 zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. 0 Zusatzlagen</td><td>2</td>';
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. 0 Zusatzlagen</td><td>3</td>';

harzfaktor = 1.8;

berechnen_go = false;
berechnen_go_nr=0;
 document.getElementById('durchmesser_rohr').value='';
 document.getElementById('zusatzlagen_l').value='';
 document.getElementById('reperatur_l').value='';
	
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
function aufrunden(f,b){
	if(b == true) {
		return Math.ceil((parseFloat(f).toFixed(3))*100)/100;
	} else{
		return Math.ceil((parseFloat(f).toFixed(2))*10)/10;
	}
}
function ergebnisse_berechnen(e) {
	  if (berechnen_go) {
	   $('#load_').addClass("loader_img");
    $('#load_').addClass("overlay");
	
	
    $("#load_").fadeIn(300, 'easeInQuart', function () {

        document.getElementById("calculator").style.display = 'none';
        document.getElementById("zuruck_z_eingabe").style.display = 'block';

    });
	    setTimeout(function(){
  
        berechnen_go = false;
		/*
		if(gfk_matte=='1050'){
		if(isNaN(zusatzlagen_l_val)|| zusatzlagen_l_val==''){
			zusatzlagen_l_val=0;			
		}

	
        document.getElementById('eingaben_anz_tb').innerHTML ='<tr>'
						+'<td>Glasfasergewebematte CRF:</td>'
						+'<td id="aa1"><nobr>'+gfk_matte+' g/m²</nobr></td>'
					+'</tr>'
					+'<tr>'
						+'<td>Rohrdurchmesser: </td>'
						+'<td id="aa2"><nobr>'+dm_rohr_val+' mm</nobr></td>'
					+'</tr>'
					+'<tr>'
						+'<td>Länge der Zusatzlagen: </td>'
						+'<td id="aa3"><nobr>'+zusatzlagen_l_val+' mm</nobr></td>'
					+'</tr>';
				
					gfk_flaeche=1200*(parseFloat(dm_rohr_val)*3.5);
	z_lagen_flaeche=zusatzlagen_l_val*(parseFloat(dm_rohr_val)*3.5);

	gesamtflaeche= (gfk_flaeche+z_lagen_flaeche)/1000000;
		
					
			ges_liter=gesamtflaeche*1,6;
			komp_a_liter = ((ges_liter/3.33)*2).toFixed(2);
			komp_b_liter = ((ges_liter/3.33)*1).toFixed(2);
			ges_liter = (parseFloat(komp_a_liter)+parseFloat(komp_b_liter));	
			
			 document.getElementById('liter').innerHTML =ges_liter.toFixed(2);
					
			 document.getElementById('harz_l').innerHTML =komp_a_liter;
			  document.getElementById('haerter_l').innerHTML =komp_b_liter;		
		
		}
		*/

 if(gfk_matte=='1400'|| gfk_matte=='1050'){
	
		 if(gfk_matte=='1400'){			
zusatzl_erklaerung_td=zusatzl_erklaerung_td1400;
 }else if(gfk_matte=='1050'){
  zusatzl_erklaerung_td=zusatzl_erklaerung_td1050;
 }

	
	
	if(zusatzlagen_val==1){
	lagen=' Lage';
	}else{
	lagen=' Lagen';	
		
	}
	reperatur_lange_valdurch_1000=reperatur_lange_val/1000;
document.getElementById('eingaben_anz_tb').innerHTML ='<tr>'
					+'<td>Glasfasergewebematte CRF:</td>'
					+'<td id="aa1"><nobr>'+gfk_matte+' g/m²</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td>Rohrdurchmesser: </td>'
					+'<td id="aa2"><nobr>'+dm_rohr_val+' mm</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td>Reparaturlänge: </td>'
					+'<td id="aa2"><nobr>'+reperatur_lange_valdurch_1000+' m</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'</tr>'
					+'<tr id="te_td">'
					+''+zusatzl_erklaerung_td+''
					+'</tr>';
 if(gfk_matte=='1400'){			
gfk_flaeche=aufrunden((parseFloat(reperatur_lange_val)*2)*(parseFloat(dm_rohr_val)*3.5)/1000000,true);
harzfaktor = 1.8;
 }else if(gfk_matte=='1050'){
gfk_flaeche=aufrunden((parseFloat(reperatur_lange_val)*3)*(parseFloat(dm_rohr_val)*3.5)/1000000,true);	
harzfaktor = 1.6; 
 }
 

zusatzlagen_flaeche=aufrunden(parseFloat(reperatur_lange_val)*parseFloat(zusatzlagen_val)*(parseFloat(dm_rohr_val)*3.5)/1000000,true);


	gesamtflaeche= gfk_flaeche+zusatzlagen_flaeche;

			ges_liter=gesamtflaeche*harzfaktor;
	
		
			komp_b_liter = aufrunden(parseFloat(ges_liter/3),false).toFixed(2);
			komp_a_liter = (komp_b_liter*2).toFixed(2);
			ges_liter = (parseFloat(komp_a_liter)+parseFloat(komp_b_liter));	
			
			 document.getElementById('liter').innerHTML =ges_liter.toFixed(2);
					
			 document.getElementById('harz_l').innerHTML =komp_a_liter;
			  document.getElementById('haerter_l').innerHTML =komp_b_liter;	


}


console.log('gfk_flaeche:'+(gfk_flaeche/1000000));
console.log('z_lagen_flaeche:'+(zusatzlagen_flaeche/1000000));				
console.log('gesamtflaeche:'+gesamtflaeche);		
	
		
		
		
        erg_berechnet();

   
}, 400);
 }
}
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
if (navigator.userAgent.indexOf("Firefox") != -1) {
    document.getElementById('berechnen').onmousedown = ergebnisse_berechnen;
} else {
    document.getElementById('berechnen').ontouchstart = ergebnisse_berechnen;
}

function erg_berechnet() {
	




 
    $('.werte_eingaben').delay(300).animate({

        left: '-100%'

    }, 1400, 'swing', function () {


    });
    $('.werte_ergebnisse').delay(300).animate({

        left: '0'

    }, 1400, 'swing', function () {
        $("#load_").fadeOut(300, 'easeInQuart', function () {
            $('#load_').removeClass("loader_img");
            $('#load_').removeClass("overlay");
        });
        //NachOben ();

    });

    $('html,body').delay(300).animate({
        scrollTop: 0
    }, 1400, 'swing', function () {

        NachOben();

    });
	
}




function zurueck_eing(e) {
    berechnen_go = false;
    $('#load_').addClass("loader_img");
    $('#load_').addClass("overlay");
    $("#load_").fadeIn(300, 'easeInQuart', function () {

    });
    $('.werte_eingaben').animate({

        left: '0'

    }, 1000, 'swing', function () {

        document.getElementById("calculator").style.display = 'block';
        document.getElementById("zuruck_z_eingabe").style.display = 'none';
    });
    $('.werte_ergebnisse').animate({

        left: '100%'

    }, 1000, 'swing', function () {

        $("#load_").fadeOut(300, 'easeInQuart', function () {
            $('#load_').removeClass("loader_img");
            $('#load_').removeClass("overlay");
        });


    });

    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing', function () {

        NachOben();

    });

}
if (navigator.userAgent.indexOf("Firefox") != -1) {
    document.getElementById('zurueck').onmousedown = zurueck_eing;
    document.getElementById('zuruck_z_eingabe').onmousedown = zurueck_eing;
} else {
    document.getElementById('zurueck').ontouchstart = zurueck_eing;
    document.getElementById('zuruck_z_eingabe').ontouchstart = zurueck_eing;
}

function zusatzl_erklaerung(zusatzl_erklaerung1400,zusatzl_erklaerung1050){
	
	 if(gfk_matte=='1400'){			
 document.getElementById('zusatzl_erklaerung').innerHTML=zusatzl_erklaerung1400;
 }else if(gfk_matte=='1050'){
  document.getElementById('zusatzl_erklaerung').innerHTML=zusatzl_erklaerung1050;
 }

 
}

//---------------------------------------------------------------------------------------------
function selekt_change() {


masse_tst=document.getElementById('sel').value;
if(masse!=masse_tst){
	
masse=masse_tst;
document.getElementById('a_wert').innerHTML=masse_tst;
}
	


matte_tst=document.getElementById('sel_1').value;
if(matte!=matte_tst){	
matte=matte_tst;
zusatzlagen_set_selection=true;
document.getElementById('matte_ausw_wert').innerHTML=matte_tst;
	
if(matte_tst=='1050 g/m²'){
gfk_matte= '1050';
zusatzl_erklaerung(zusatzl_erklaerung1400,zusatzl_erklaerung1050);
  $( ".zusatzlagen_laenge" ).slideUp( "slow", function() {
     $( ".reperatur_laenge"  ).slideDown( "slow", function() {
    // Animation complete.
	onoff_crf=true;
	nutzl_schild();
  });
  });

}else if(matte_tst=='1400 g/m²'){
gfk_matte= '1400';
zusatzl_erklaerung(zusatzl_erklaerung1400,zusatzl_erklaerung1050);
  $( ".zusatzlagen_laenge" ).slideUp( "slow", function() {
     $( ".reperatur_laenge" ).slideDown( "slow", function() {
    // Animation complete.
		onoff_crf=true;
	nutzl_schild();
  });
  });

  			
}

}


dm_rohr_val_tst=parseFloat(koma_ers(zahl_pruefen('durchmesser_rohr')));
if((dm_rohr_val!=dm_rohr_val_tst)){	
zusatzlagen_set_selection=true;
dm_rohr_val = dm_rohr_val_tst;


if((dm_rohr_val_tst>=100 && dm_rohr_val_tst<=1400)){
onoff_rd=true;	
nutzl_schild();
}
if((dm_rohr_val_tst<100||dm_rohr_val_tst>1400) ){
onoff_rd=false;		
nutzl_schild();
}
	




}
reperatur_lange_val_tst=parseFloat(koma_ers(zahl_pruefen('reperatur_l')));
if(reperatur_lange_val!=reperatur_lange_val_tst*1000){	
//zusatzlagen_set_selection=true;
reperatur_lange_val = reperatur_lange_val_tst*1000;

}

zusatzlagen_l_val_tst=parseFloat(koma_ers(zahl_pruefen('zusatzlagen_l')));
if(zusatzlagen_l_val!=zusatzlagen_l_val_tst){	

zusatzlagen_l_val = zusatzlagen_l_val_tst;
}
//id="zusatzlagen_laenge_label">Länge der Zusatzlagen (Optional)
if(dm_rohr_val>1400 && !inp_focus && dm_rohr_val!=0){
	
  alert_ausgeben('Der Durchmesser überschreitet 1400mm. Der Durchmesser kann zwischen 100mm und 1400mm sein.' );
  document.getElementById('durchmesser_rohr').focus();	
}else if(dm_rohr_val<100 && !inp_focus && dm_rohr_val!=0){
	
	 alert_ausgeben('Der Durchmesser ist kleiner als 100mm. Der Durchmesser kann zwischen 100mm und 1400mm sein.' );
	   document.getElementById('durchmesser_rohr').focus();
}





//zusatzlagen
if(zusatzlagen_set_selection){
ClearOptions('sel_2');
 duchm_dm_hinzufuegen (0,'sel_2');
duchm_dm_hinzufuegen (1,'sel_2');
duchm_dm_hinzufuegen (2,'sel_2');
duchm_dm_hinzufuegen (3,'sel_2');
duchm_dm_hinzufuegen (4,'sel_2');
duchm_dm_hinzufuegen (5,'sel_2');

/*gfk_matte=='1400'*/
if(gfk_matte=='1400' && dm_rohr_val>=100 && dm_rohr_val<375){
CheckAuswahl (0,'sel_2'); 	
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>2<br>0</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 2 <br>(davon min. 0 Zusatzlagen)';	
}else if(gfk_matte=='1400' && dm_rohr_val>=375 && dm_rohr_val<600){
 CheckAuswahl (1,'sel_2'); 	
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>3<br>1</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 3 <br>(davon min. 1 Zusatzlage)';	
}else if(gfk_matte=='1400' && dm_rohr_val>=600 && dm_rohr_val<750){
 CheckAuswahl (2,'sel_2');  	
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>4<br>2</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 4 <br>(davon min. 2 Zusatzlagen)';	
}else if(gfk_matte=='1400' && dm_rohr_val>=750 && dm_rohr_val<800){
CheckAuswahl (3,'sel_2');
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>5<br>3</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 5 <br>(davon min. 3 Zusatzlagen)';	
}else if(gfk_matte=='1400' && dm_rohr_val>=800 && dm_rohr_val<1200){
CheckAuswahl (4,'sel_2');
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>6<br>4</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 6 <br>(davon min. 4 Zusatzlagen)';	
}else if(gfk_matte=='1400' && dm_rohr_val>=1200 && dm_rohr_val<1400){
CheckAuswahl (5,'sel_2');
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>7<br>5</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 7 <br>(davon min. 5 Zusatzlagen)';	
}
/*gfk_matte=='1050'*/

if(gfk_matte=='1050' && dm_rohr_val>=100 && dm_rohr_val<500){
CheckAuswahl (0,'sel_2'); 	
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>3<br>0</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 3 <br>(davon min. 0 Zusatzlagen)';	



}else if(gfk_matte=='1050' && dm_rohr_val>=500 && dm_rohr_val<675){
 CheckAuswahl (1,'sel_2'); 	
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>4<br>1</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 4 <br>(davon min. 1 Zusatzlage)';

	
}else if(gfk_matte=='1050' && dm_rohr_val>=675 && dm_rohr_val<800){
 CheckAuswahl (2,'sel_2');  	
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>5<br>2</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 5 <br>(davon min. 2 Zusatzlagen)';
	
}else if(gfk_matte=='1050' && dm_rohr_val>=800 && dm_rohr_val<1200){
CheckAuswahl (3,'sel_2');
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>6<br>3</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 6 <br>(davon min. 3 Zusatzlagen)';

	
}else if(gfk_matte=='1050' && dm_rohr_val>=1200 && dm_rohr_val<1400){
CheckAuswahl (5,'sel_2');
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>8<br>5</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 8 <br>(davon min. 5 Zusatzlagen)';	
}







zusatzlagen_set_selection=false;

zusatzl_erklaerung(zusatzl_erklaerung1400,zusatzl_erklaerung1050);
}/*zusatzlagen_set_selection*/

		


	





zusatzlagen_val_tst=parseFloat(document.getElementById('sel_2').value);

if(zusatzlagen_val!=zusatzlagen_val_tst){
	
zusatzlagen_val=zusatzlagen_val_tst;
document.getElementById('zusatzlagen_wert').innerHTML=zusatzlagen_val_tst;
}













  if ( (gfk_matte=='1050' && dm_rohr_val >= 100  && dm_rohr_val <= 1400 && reperatur_lange_val>0  )||  (gfk_matte== '1400' && dm_rohr_val >= 100  && dm_rohr_val <= 1400 && reperatur_lange_val>0)) {
    
		
	
		   berechnen_go = true;
		   
	
        $("#berechnen").css({
            "color": '#ffffff'
        });
		
		
    } else {

        berechnen_go = false;

        $("#berechnen").css({
            "color": '#999999'
        });
    }















aktiv=window.setTimeout("selekt_change()", 100);

}//selekt_change


selekt_change();






























