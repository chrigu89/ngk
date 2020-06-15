var hartz_systeme_mengen = new Array();
hartz_systeme_mengen['W1'] = new Array();
hartz_systeme_mengen['W1'][0] = new Array();
hartz_systeme_mengen['W1'][0]['beschr']='Type W1 | 13 kg';
hartz_systeme_mengen['W1'][0]['gewicht']=13;
hartz_systeme_mengen['W1'][0]['art_nr']='234504';


hartz_systeme_mengen['W01'] = new Array();
hartz_systeme_mengen['W01'][0] = new Array();
hartz_systeme_mengen['W01'][0]['beschr']='Type W01 | 13 kg';
hartz_systeme_mengen['W01'][0]['gewicht']=13;
hartz_systeme_mengen['W01'][0]['art_nr']='234505';


hartz_systeme_mengen['S1'] = new Array();
hartz_systeme_mengen['S1'][0] = new Array();
hartz_systeme_mengen['S1'][0]['beschr']='Type S1 | 13 kg';
hartz_systeme_mengen['S1'][0]['gewicht']=13;
hartz_systeme_mengen['S1'][0]['art_nr']='234506';



hartz_systeme_mengen['L30E1'] = new Array();
hartz_systeme_mengen['L30E1'][0] = new Array();
hartz_systeme_mengen['L30E1'][0]['beschr']='Type L30E1 | 26 kg';
hartz_systeme_mengen['L30E1'][0]['gewicht']=26;
hartz_systeme_mengen['L30E1'][0]['art_nr']='116904';

hartz_systeme_mengen['L30E3'] = new Array();
hartz_systeme_mengen['L30E3'][0] = new Array();







hartz_systeme_mengen['haerter'] = new Array();
hartz_systeme_mengen['haerter'][0] = new Array();
hartz_systeme_mengen['haerter'][0]['beschr']='Härter | 16 kg';
hartz_systeme_mengen['haerter'][0]['gewicht']=16;
hartz_systeme_mengen['haerter'][0]['art_nr']='116700';


$(window).load(function() {
calc=true;



})







vtc='<br>Dies ist kein gültiger Wert! <br>Bitte geben Sie eine gültige Zahl ein.';
hartzsys = '';
harz_sys_dichte=0;

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



hauptlagen=0
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
					+'<td align="right" id="aa1"><nobr>'+gfk_matte+' g/m²</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td>Rohrdurchmesser: </td>'
					+'<td align="right" id="aa2"><nobr>'+dm_rohr_val+' mm</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td>Reparaturlänge: </td>'
					+'<td align="right"><nobr>'+reperatur_lange_valdurch_1000+' m</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'</tr>'
					+'<tr id="te_td">'
					+'<td> Gesamtlagen: <br>davon Zusatzlage/n:</td><td align="right">'+(hauptlagen+zusatzlagen_val)+'<br>'+zusatzlagen_val+'</td>'
					+'</tr>';
				
/*------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------*/						
gfk_flaeche=aufrunden((parseFloat(reperatur_lange_val)*hauptlagen)*(parseFloat(dm_rohr_val)*3.5)/1000000,true);	
/*------------------------------------------------------------------------------*/		
/*------------------------------------------------------------------------------*/		
mattenfaktor=0;				
 if(gfk_matte=='1400'){			
//gfk_flaeche=aufrunden((parseFloat(reperatur_lange_val)*2)*(parseFloat(dm_rohr_val)*3.5)/1000000,true);
harzfaktor = 1.8;
mattenfaktor=2;
 }else if(gfk_matte=='1050'){
//gfk_flaeche=aufrunden((parseFloat(reperatur_lange_val)*3)*(parseFloat(dm_rohr_val)*3.5)/1000000,true);	
harzfaktor = 1.6; 
mattenfaktor=3;
 }
 
 
 dm_rohr_umfang=(parseFloat(dm_rohr_val)*3.5)/1000;
 reperatur_lange_val_meter=reperatur_lange_val/1000;
 zusatzlagen_flaeche=aufrunden(parseFloat(reperatur_lange_val)*parseFloat(zusatzlagen_val)*(parseFloat(dm_rohr_val)*3.5)/1000000,true);
 

console.log('hauptlagen:'+hauptlagen); 
console.log('#sel_2: '+$('#sel_2').val());
console.log('zusatzlagen_val:'+zusatzlagen_val);
/*

console.log('reperatur_lange_val:'+(reperatur_lange_val_meter));
//console.log('dm_rohr_val:'+(dm_rohr_val)); 
console.log('dm_rohr_umfang:'+(dm_rohr_umfang));
console.log('gfk_flaeche:'+(gfk_flaeche));

console.log('gfk_flaeche:'+(gfk_flaeche));
console.log('zusatzlagen_flaeche:'+(zusatzlagen_flaeche));
console.log('gesamtflaeche:'+(gesamtflaeche));
*/
reperatur_lange_val_meter_z=(reperatur_lange_val_meter/2);


                    st_r1='<tr>'
					+'<td align="left">Zuschnittsgröße:</td>'
					+'<td align="right"><nobr>'+((parseFloat(reperatur_lange_val_meter)*mattenfaktor)+0.01).toFixed(2)+' m x '+ dm_rohr_umfang.toFixed(2)+' m</nobr></td>'
					+'</tr>'
					+'<tr>';
					st_r2='';
					
					if(parseFloat(zusatzlagen_val)>0){
					st_r2='<td align="left">Zuschnittsgröße <br>pro Zusatzlage: </td>';
					
					st_r2+='<td align="right"><nobr>'+(parseFloat(reperatur_lange_val_meter_z)*2).toFixed(2)+' m x '+ dm_rohr_umfang.toFixed(2)+' m</nobr></td>'
					+'</tr>';
					}
					
						
					if(parseFloat(zusatzlagen_val)==0){
						/*
					st_r2='<td align="left">Additional Layers <br>cutting size: </td>'
					+'<td align="right"><nobr>Es gibt keine</nobr></td>'
					+'</tr>';
					*/
					
					}
				st_r3='';
					document.getElementById('lagen_anz_tb').innerHTML =st_r1+st_r2+st_r3;
					
				
					
					
					
	        gesamtflaeche= gfk_flaeche+zusatzlagen_flaeche;
			ges_liter=gesamtflaeche*harzfaktor;
			
			 //  gesamtflaeche = gfk_flaeche+(zusatzlagen_flaeche* parseFloat(zusatzlagen_val));
			
			console.log('nn gfk_flaeche: '+gfk_flaeche);
			console.log('nn (zusatzlagen_flaeche* parseFloat(zusatzlagen_val): '+ (zusatzlagen_flaeche * parseFloat(zusatzlagen_val)) );
			console.log('nn zusatzlagen_flaeche: '+zusatzlagen_flaeche);
			console.log('nn gesamtflaeche: '+gesamtflaeche);
	
		
			komp_b_liter = aufrunden(parseFloat(ges_liter/3),false).toFixed(2);
			komp_a_liter = (komp_b_liter*2).toFixed(2);
			ges_liter = (parseFloat(komp_a_liter)+parseFloat(komp_b_liter));	
			
			 document.getElementById('liter').innerHTML =ges_liter.toFixed(2);
			 document.getElementById('gewicht').innerHTML =ges_liter.toFixed(2);
			
			 document.getElementById('harz_l').innerHTML =komp_a_liter;
			 document.getElementById('haerter_l').innerHTML =komp_b_liter;
		
		
		resign_type=$("#sel_5 option:selected").text();
	
		//$(".kompnente_a").html($("#sel_5 option:selected").text());  
		$(".kompnente_b").html(resign_type); 












haerter_gew= komp_b_liter * 1.54;
harz_gew=komp_a_liter*harz_sys_dichte;
document.getElementById('haerter_gew').innerHTML=haerter_gew.toFixed(2);
document.getElementById('harz_gew').innerHTML=  harz_gew.toFixed(2);

document.getElementById('gewicht').innerHTML=(haerter_gew+harz_gew).toFixed(2);		
		



ausw_menge_hartz=Math.ceil(harz_gew/hartz_systeme_mengen[resign_type][0]['gewicht']);
ausw_menge_haerter=Math.ceil(haerter_gew/hartz_systeme_mengen['haerter'][0]['gewicht']);

document.getElementById('produkte_verwenden').innerHTML ='<h2>Produkte</h2><table width="100%" border="0" cellspacing="0" cellpadding="0">'
                    +'<tr>'
					+'<td align="left" >'+ausw_menge_hartz+' x Harz</td>'
					+'<td align="right" ><nobr>'+hartz_systeme_mengen[resign_type][0]['beschr']+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Art. Nr. </td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[resign_type][0]['art_nr']+'</nobr></td>'
					+'</tr>'
					+'</table>'
					+'<table width="100%" border="0" cellspacing="0" cellpadding="0">'
					+'</tr>'
					+'<td align="left">'+ausw_menge_haerter+' x Härter</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen['haerter'][0]['beschr']+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Art. Nr. </td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen['haerter'][0]['art_nr']+'</nobr></td>'
					+'</tr>'
                    +'</table>';


/*	
console.log('ausw_menge_hartz: '+ausw_menge_hartz);		  	
console.log('ausw_menge_haerter: '+ausw_menge_haerter);	
*/ 
}

/*
console.log('gfk_flaeche:'+(gfk_flaeche/1000000));
console.log('z_lagen_flaeche:'+(zusatzlagen_flaeche/1000000));				
console.log('gesamtflaeche:'+gesamtflaeche);		
*/	

		
		
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
		
			$("#komponenten_anfr,#zusch_d").removeAttr('style');
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


function komponenten_anfr(e) {
	
	 $("#komponenten_anfr").fadeOut(160, 'easeInQuart', function () {
      $("#zusch_d").slideDown(380, 'easeInQuart', function () {});
		  
		});
	
}





if (navigator.userAgent.indexOf("Firefox") != -1) {
    document.getElementById('komponenten_anfr').onmousedown = komponenten_anfr;

} else {
    document.getElementById('komponenten_anfr').ontouchstart = komponenten_anfr;
   
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


harz_sys_tst=document.getElementById('sel_5').value;
hartzsys = harz_sys_tst;
if(harz_sys!=harz_sys_tst){

	harz_sys=harz_sys_tst;
	if(harz_sys==1){
		document.getElementById('a_wert_2').innerHTML='W1';
		document.getElementById('headline_txt').innerHTML='DrainPacker Verfahren <br> für Silikatharzsysteme W1';
			harz_sys_dichte=1.25;
	}else if(harz_sys==2){
		document.getElementById('a_wert_2').innerHTML='W01';
		document.getElementById('headline_txt').innerHTML='DrainPacker Verfahren <br> für Silikatharzsysteme W01';
		harz_sys_dichte=1.2;
	}else if(harz_sys==3){
		document.getElementById('a_wert_2').innerHTML='S1';
		document.getElementById('headline_txt').innerHTML='DrainPacker Verfahren <br> für Silikatharzsysteme S1';
		harz_sys_dichte=1.25;
	}else if(harz_sys==4){
		document.getElementById('a_wert_2').innerHTML='E30L1';
		document.getElementById('headline_txt').innerHTML='DrainPacker Verfahren <br> für Silikatharzsysteme L30E1';
			harz_sys_dichte=1.19;
	}else if(harz_sys==5){
		document.getElementById('a_wert_2').innerHTML='L30E3';
		document.getElementById('headline_txt').innerHTML='DrainPacker Verfahren <br> für Silikatharzsysteme L30E3';
		harz_sys_dichte=1.19;
	}

	
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
hauptlagen=2;
}else if(gfk_matte=='1400' && dm_rohr_val>=375 && dm_rohr_val<600){
 CheckAuswahl (1,'sel_2'); 	
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon Zusatzlage</td><td>3<br>1</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 3 <br>(davon min. 1 Zusatzlage)';
hauptlagen=2;	
}else if(gfk_matte=='1400' && dm_rohr_val>=600 && dm_rohr_val<750){
 CheckAuswahl (2,'sel_2');  	
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon Zusatzlage</td><td>4<br>2</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 4 <br>(davon min. 2 Zusatzlagen)';
hauptlagen=2;	
}else if(gfk_matte=='1400' && dm_rohr_val>=750 && dm_rohr_val<800){
CheckAuswahl (3,'sel_2');
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>5<br>3</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 5 <br>(davon min. 3 Zusatzlagen)';
hauptlagen=2;	
}else if(gfk_matte=='1400' && dm_rohr_val>=800 && dm_rohr_val<1200){
CheckAuswahl (4,'sel_2');
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>6<br>4</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 6 <br>(davon min. 4 Zusatzlagen)';
hauptlagen=2;	
}else if(gfk_matte=='1400' && dm_rohr_val>=1200 && dm_rohr_val<1400){
CheckAuswahl (5,'sel_2');
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>7<br>5</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 7 <br>(davon min. 5 Zusatzlagen)';	
hauptlagen=2;
}
/*gfk_matte=='1050'*/

if(gfk_matte=='1050' && dm_rohr_val>=100 && dm_rohr_val<500){
CheckAuswahl (0,'sel_2'); 	
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>3<br>0</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 3 <br>(davon min. 0 Zusatzlagen)';	
hauptlagen=3;


}else if(gfk_matte=='1050' && dm_rohr_val>=500 && dm_rohr_val<675){
 CheckAuswahl (1,'sel_2'); 	
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>4<br>1</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 4 <br>(davon min. 1 Zusatzlage)';
hauptlagen=3;
	
}else if(gfk_matte=='1050' && dm_rohr_val>=675 && dm_rohr_val<800){
 CheckAuswahl (2,'sel_2');  	
zusatzl_erklaerung_td1050='<td> Gesamtlagen <br>davon min. Zusatzlage</td><td>5<br>2</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 5 <br>(davon min. 2 Zusatzlagen)';
	hauptlagen=3;
}else if(gfk_matte=='1050' && dm_rohr_val>=800 && dm_rohr_val<1200){
CheckAuswahl (3,'sel_2');
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>6<br>3</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 6 <br>(davon min. 3 Zusatzlagen)';
hauptlagen=3;
	
}else if(gfk_matte=='1050' && dm_rohr_val>=1200 && dm_rohr_val<1400){
CheckAuswahl (5,'sel_2');
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>8<br>5</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 8 <br>(davon min. 5 Zusatzlagen)';
hauptlagen=3;	
}







zusatzlagen_set_selection=false;

zusatzl_erklaerung(zusatzl_erklaerung1400,zusatzl_erklaerung1050);
}/*zusatzlagen_set_selection*/

		


	





zusatzlagen_val_tst=parseFloat(document.getElementById('sel_2').value);

if(zusatzlagen_val!=zusatzlagen_val_tst){
	
zusatzlagen_val=zusatzlagen_val_tst;
document.getElementById('zusatzlagen_wert').innerHTML=zusatzlagen_val_tst;
}











if (harz_sys != 'Bitte wählen'){

  if ( (gfk_matte=='1050' && dm_rohr_val >= 100  && dm_rohr_val <= 1400 && reperatur_lange_val>0  )||  (gfk_matte== '1400' && dm_rohr_val >= 100  && dm_rohr_val <= 1400 && reperatur_lange_val>0  )) {
    
		
	
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
}















aktiv=window.setTimeout("selekt_change()", 100);

}//selekt_change


selekt_change();






























