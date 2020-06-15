









function options_dp(){
$('#sel_5 option[value="1"]').html(dp_harze['W1'][dp_harze_index]);
$('#sel_5 option[value="2"]').html(dp_harze['W01'][dp_harze_index]);
$('#sel_5 option[value="3"]').html(dp_harze['S1'][dp_harze_index]);
$('#sel_5 option[value="4"]').html(dp_harze['L30E1'][dp_harze_index]);
$('#sel_5 option[value="5"]').html(dp_harze['L30E3'][dp_harze_index]);

}

$(document).ready(function() {
options_dp();

});

$(window).load(function() {
calc=true;



});





if(en){
vtc='<br> This is not a valid value! <br> Please enter a valid number.';	
} else {
	//deutsch
vtc='<br>Dies ist kein gültiger Wert! <br>Bitte geben Sie eine gültige Zahl ein.';
}


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
masssystem=lang_einh_metrisch;
reperatur_lange_val = 0;
gfk_flaeche=0;
zusatzlagen_val='1';
zusatzlagen_l_val=0;
zusatzlagen_flaeche=0;
z_lagen_flaeche=0;
gesamtflaeche=0;
zusatzlagen_set_selection=false;

if(en){
zusatzl_erklaerung1400='Recommended total positions 2 <br> (of which at least 0 additional layers)';
zusatzl_erklaerung1050='Recommended total positions 3 <br>(of which at least 0 additional layers)';
zusatzl_erklaerung_td='<td>Recommended total positions <br>of which at least 0 additional layers</td><td>2</td>';
zusatzl_erklaerung_td1400='<td>Recommended total positions <br>of which at least 0 additional layers</td><td>2</td>';
zusatzl_erklaerung_td1050='<td>Recommended total positions <br>of which at least 0 additional layers</td><td>3</td>';	
} else {
	//deutsch
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 2 <br>(davon min. 0 Zusatzlagen)';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 3 <br>(davon min. 0 Zusatzlagen)';
zusatzl_erklaerung_td='<td>Empfohlene Gesamtlagen <br>davon min. 0 Zusatzlagen</td><td>2</td>';
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. 0 Zusatzlagen</td><td>2</td>';
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. 0 Zusatzlagen</td><td>3</td>';
}



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
	
	
if(masse=="Metrisch" || masse=="metric"){

	dm_rohr_val_anz=dm_rohr_val+' mm';
	reperatur_lange_valdurch_1000_anz=reperatur_lange_valdurch_1000+' ft';
		reperatur_lange_valdurch_1000_anz=parseFloat(koma_ers(zahl_pruefen('reperatur_l')))+' m';
	
}else if(masse=="imperial" || masse=="Imperial"){
	
	
	dm_rohr_val_anz= parseFloat(koma_ers(zahl_pruefen('durchmesser_rohr')))+' in';
	//reperatur_lange_valdurch_1000_anz=masse_umrechnen.m_zu_ft(reperatur_lange_valdurch_1000)+' ft';
	
	reperatur_lange_valdurch_1000_anz=parseFloat(koma_ers(zahl_pruefen('reperatur_l')))+' ft';
}
	
if(en){
		document.getElementById('eingaben_anz_tb').innerHTML ='<tr>'
						+'<td>CRF Fibre glass mat types:</td>'
					+'<td align="right" id="aa1"><nobr>'+gfk_matte+' g/m²</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td>Pipe diameter: </td>'
					+'<td align="right" id="aa2"><nobr>'+dm_rohr_val_anz+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td>Repair length: </td>'
					+'<td align="right"><nobr>'+reperatur_lange_valdurch_1000_anz+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'</tr>'
					+'<tr id="te_td">'
					+'<td> Required layers (total): <br>included layers:</td><td align="right">'+(hauptlagen+zusatzlagen_val)+'<br>'+zusatzlagen_val+'</td>'
					+'</tr>';
} else {
	//deutsch
document.getElementById('eingaben_anz_tb').innerHTML ='<tr>'
					+'<td>Glasfasergewebematte CRF:</td>'
					+'<td align="right" id="aa1"><nobr>'+gfk_matte+' g/m²</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td>Rohrdurchmesser: </td>'
					+'<td align="right" id="aa2"><nobr>'+dm_rohr_val_anz+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td>Reparaturlänge: </td>'
					+'<td align="right"><nobr>'+reperatur_lange_valdurch_1000_anz+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'</tr>'
					+'<tr id="te_td">'
					+'<td> Gesamtlagen: <br>davon Zusatzlage/n:</td><td align="right">'+(hauptlagen+zusatzlagen_val)+'<br>'+zusatzlagen_val+'</td>'
					+'</tr>';
					
}
				
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
 
/*
c1_console_log('hauptlagen:'+hauptlagen); 
c1_console_log('#sel_2: '+$('#sel_2').val());
c1_console_log('zusatzlagen_val:'+zusatzlagen_val);


c1_console_log('reperatur_lange_val:'+(reperatur_lange_val_meter));
//c1_console_log('dm_rohr_val:'+(dm_rohr_val)); 
c1_console_log('dm_rohr_umfang:'+(dm_rohr_umfang));
c1_console_log('gfk_flaeche:'+(gfk_flaeche));

c1_console_log('gfk_flaeche:'+(gfk_flaeche));
c1_console_log('zusatzlagen_flaeche:'+(zusatzlagen_flaeche));
c1_console_log('gesamtflaeche:'+(gesamtflaeche));
*/
reperatur_lange_val_meter_z=(reperatur_lange_val_meter/2);

if(masse=="Metrisch" || masse=="metric"){
cutting_size_anz=((parseFloat(reperatur_lange_val_meter)*mattenfaktor)+0.01).toFixed(2)+' m x '+ dm_rohr_umfang.toFixed(2)+' m';
blank_size_anz=(parseFloat(reperatur_lange_val_meter_z)*2).toFixed(2)+' m x '+ dm_rohr_umfang.toFixed(2)+' m';	
}else if(masse=="imperial" || masse=="Imperial"){
	
cutting_size_anz=masse_umrechnen.m_zu_ft(((parseFloat(reperatur_lange_val_meter)*mattenfaktor)+0.01)).toFixed(2)+' ft x '+ masse_umrechnen.m_zu_ft(dm_rohr_umfang).toFixed(2)+' ft';
blank_size_anz=masse_umrechnen.m_zu_ft((parseFloat(reperatur_lange_val_meter_z)*2)).toFixed(2)+' ft x '+ masse_umrechnen.m_zu_ft(dm_rohr_umfang).toFixed(2)+' ft';		
	
}
	

if(en){
	
	 st_r1='<tr>'
					+'<td align="left">Cutting size <br>Fiber Glass Mat:</td>'
					+'<td align="right"><nobr>'+cutting_size_anz+'</nobr></td>'
					+'</tr>'
					+'<tr>';
					st_r2='';
					
					if(parseFloat(zusatzlagen_val)>0){
			
					st_r2='<td align="left">Blank size <br> per additional layer: </td>';
					st_r2+='<td align="right"><nobr>'+blank_size_anz+'</nobr></td>'
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

} else {
	//deutsch
                    st_r1='<tr>'
					+'<td align="left">Zuschnittsgröße:</td>'
					+'<td align="right"><nobr>'+cutting_size_anz+'</nobr></td>'
					+'</tr>'
					+'<tr>';
					st_r2='';
					
					if(parseFloat(zusatzlagen_val)>0){
					st_r2='<td align="left">Zuschnittsgröße <br>pro Zusatzlage: </td>';
					
					st_r2+='<td align="right"><nobr>'+blank_size_anz+'</nobr></td>'
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
					
				}
					
					
					
	        gesamtflaeche= gfk_flaeche+zusatzlagen_flaeche;
			ges_liter=gesamtflaeche*harzfaktor;
			
			 //  gesamtflaeche = gfk_flaeche+(zusatzlagen_flaeche* parseFloat(zusatzlagen_val));
			
			c1_console_log('nn gfk_flaeche: '+gfk_flaeche);
			c1_console_log('nn (zusatzlagen_flaeche* parseFloat(zusatzlagen_val): '+ (zusatzlagen_flaeche * parseFloat(zusatzlagen_val)) );
			c1_console_log('nn zusatzlagen_flaeche: '+zusatzlagen_flaeche);
			c1_console_log('nn gesamtflaeche: '+gesamtflaeche);
	
		
			komp_b_liter = aufrunden(parseFloat(ges_liter/3),false).toFixed(2);
			komp_a_liter = (komp_b_liter*2).toFixed(2);
			ges_liter = (parseFloat(komp_a_liter)+parseFloat(komp_b_liter));	
			
			
				if(masse=="Metrisch" || masse=="metric"){
					document.getElementById('liter').innerHTML =ges_liter.toFixed(2);
				
					document.getElementById('harz_l').innerHTML =komp_a_liter;
					document.getElementById('haerter_l').innerHTML =komp_b_liter;
					$(".w30_vol, .w30_gew, .w30 ").css({'width':'33px'});
					if(en){
					$(".w30_vol").html('liter');
					$(".w30_gew").html('kg');	
					}else{
					$(".w30_vol").html('Liter');	
					$(".w30_gew").html('kg');	
					}

				}else if(masse=="imperial" || masse=="Imperial"){
	
	                document.getElementById('liter').innerHTML =masse_umrechnen.liter_zu_gallon(ges_liter).toFixed(2);
			
					document.getElementById('harz_l').innerHTML =masse_umrechnen.liter_zu_gallon(komp_a_liter).toFixed(2);
					document.getElementById('haerter_l').innerHTML =masse_umrechnen.liter_zu_gallon(komp_b_liter).toFixed(2);
					
					$(".w30_vol, .w30_gew, .w30 ").css({'width':'auto'});
					
					if(en){
					$(".w30_vol").html('gallon');
					$(".w30_gew").html('lbs');
					}else{
						$(".w30_vol").html('Gallonen');
						$(".w30_gew").html('lbs');
						
					}
					
				}
	
		
		
		resign_type=$("#sel_5 option:selected").text();
	c1_console_log('resign_type '+resign_type);
		//$(".kompnente_a").html($("#sel_5 option:selected").text());  
		$(".kompnente_b").html(resign_type); 












haerter_gew= komp_b_liter * 1.54;
harz_gew=komp_a_liter*harz_sys_dichte;
drum='';
	if(masse=="Metrisch" || masse=="metric"){
document.getElementById('haerter_gew').innerHTML=haerter_gew.toFixed(2);
document.getElementById('harz_gew').innerHTML=  harz_gew.toFixed(2);

if(harz_gew >= 200 || haerter_gew >= 200){	

drum='<div>'+innerHTML_lang('Bei Abnahme über 200kg (440lbs) ist auch Fassware erhältlich.')+'</div>';
	
}

	}else if(masse=="imperial" || masse=="Imperial"){


$(".haerter_gew_td").html(haerter_gew.toFixed(2)+' kg<br>('+masse_umrechnen.kg_zu_lbs(haerter_gew).toFixed(2)+' lbs)');
$(".harz_gew_td").html(harz_gew.toFixed(2)+' kg<br>('+masse_umrechnen.kg_zu_lbs(harz_gew).toFixed(2)+' lbs)');	


	if(harz_gew >= 200 || haerter_gew >= 200){	

drum='<div>'+innerHTML_lang('With over 200kg (440lbs) also Fassware is available.')+'</div>';
	
}	
	}



			if(masse=="Metrisch" || masse=="metric"){
				document.getElementById('gewicht').innerHTML=(haerter_gew+harz_gew).toFixed(2);		
			}else if(masse=="imperial" || masse=="Imperial"){
				document.getElementById('gewicht').innerHTML=masse_umrechnen.kg_zu_lbs((haerter_gew+harz_gew)).toFixed(2);	
			}

		

console.log('komp_b_liter: '+komp_b_liter);
console.log('haerter_gew: '+haerter_gew);
console.log('komp_a_liter: '+komp_a_liter);
console.log('harz_sys_dichte: '+harz_sys_dichte);
console.log('harz_gew: '+harz_gew);




ausw_menge_hartz=Math.ceil(harz_gew/hartz_systeme_mengen[resign_type][0]['gewicht']);
ausw_menge_haerter=Math.ceil(haerter_gew/hartz_systeme_mengen['haerter'][0]['gewicht']);



resign_type_imperial_lbs='';
hardener_type_imperial_lbs='';
if(masse=='imperial'|| en){	
resign_type_imperial_lbs='<span class="produkt_imperial_lbs">('+hartz_systeme_mengen[resign_type][0]['imperial_lbs']+')</span>';
hardener_type_imperial_lbs='<span class="produkt_imperial_lbs">('+hartz_systeme_mengen['haerter'][0]['imperial_lbs']+')</span>';
}

if(en){
document.getElementById('produkte_verwenden').innerHTML ='<h2>Products</h2><table width="100%" border="0" cellspacing="0" cellpadding="0">'
                    +'<tr>'
					+'<td align="left" >'+ausw_menge_hartz+' x Resin:</td>'
					+'<td align="right" ><nobr>'+hartz_systeme_mengen[resign_type][0]['beschr']+resign_type_imperial_lbs+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Item No.:</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[resign_type][0]['art_nr']+'</nobr></td>'
					+'</tr>'
					+'</table>'
					+'<table width="100%" border="0" cellspacing="0" cellpadding="0">'
					+'</tr>'
					+'<td align="left">'+ausw_menge_haerter+' x Harder:</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen['haerter'][0]['beschr']+hardener_type_imperial_lbs+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Item No.: </td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen['haerter'][0]['art_nr']+'</nobr></td>'
					+'</tr>'
                    +'</table>'+drum;
					
} else {
	//deutsch


document.getElementById('produkte_verwenden').innerHTML ='<h2>Produkte</h2><table width="100%" border="0" cellspacing="0" cellpadding="0">'
                    +'<tr>'
					+'<td align="left" >'+ausw_menge_hartz+' x Harz</td>'
					+'<td align="right" ><nobr>'+hartz_systeme_mengen[resign_type][0]['beschr']+resign_type_imperial_lbs+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Art. Nr. </td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[resign_type][0]['art_nr']+'</nobr></td>'
					+'</tr>'
					+'</table>'
					+'<table width="100%" border="0" cellspacing="0" cellpadding="0">'
					+'</tr>'
					+'<td align="left">'+ausw_menge_haerter+' x Härter</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen['haerter'][0]['beschr']+hardener_type_imperial_lbs+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Art. Nr. </td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen['haerter'][0]['art_nr']+'</nobr></td>'
					+'</tr>'
                    +'</table>'+drum;
					

}
/*	
c1_console_log('ausw_menge_hartz: '+ausw_menge_hartz);		  	
c1_console_log('ausw_menge_haerter: '+ausw_menge_haerter);	
*/ 
}

/*
c1_console_log('gfk_flaeche:'+(gfk_flaeche/1000000));
c1_console_log('z_lagen_flaeche:'+(zusatzlagen_flaeche/1000000));				
c1_console_log('gesamtflaeche:'+gesamtflaeche);		
*/	

		
		
      berechnen_animation();

   
}, 400);
 }
}
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------










function zusatzl_erklaerung(zusatzl_erklaerung1400,zusatzl_erklaerung1050){
	
	 if(gfk_matte=='1400'){			
 document.getElementById('zusatzl_erklaerung').innerHTML=zusatzl_erklaerung1400;
 }else if(gfk_matte=='1050'){
  document.getElementById('zusatzl_erklaerung').innerHTML=zusatzl_erklaerung1050;
 }

 
}
masse=document.getElementById('sel').value;
function neue_masse_ausgewaehlt(val){

	if(val=="Metrisch" || val=="metric"){
	
		document.getElementById('a_wert').innerHTML=lang_einh_metrisch;
		//$(".dm_rohr .mass").css({"width":'33px'});
		$(".dm_rohr .mass").html('mm');
		$(".reperatur_laenge .mass").html('m');
		
	}else if(val=="imperial" || val=="Imperial"){
		document.getElementById('a_wert').innerHTML=lang_einh_imperial;

		//$(".dm_rohr .mass").css({"width":'33px'});
		$(".dm_rohr .mass").html('in');	
		$(".reperatur_laenge .mass").html('ft');
	}
	}
inp_focus_d_r =false;
//---------------------------------------------------------------------------------------------
function selekt_change() {
	masse_tst = document.getElementById('sel').value;
	if (masse != masse_tst) {
		masse = masse_tst;
		neue_masse_ausgewaehlt(masse_tst);
	}

harz_sys_tst=document.getElementById('sel_5').value;
hartzsys = harz_sys_tst;
if(harz_sys!=harz_sys_tst){

	harz_sys=harz_sys_tst;
	if(harz_sys==1){
		
		if(en){
	document.getElementById('a_wert_2').innerHTML=dp_harze['W1'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> Silicate resin system '+dp_harze['W1'][dp_harze_index];
} else {
	//deutsch
		document.getElementById('a_wert_2').innerHTML=dp_harze['W1'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> für '+dp_harze['W1'][dp_harze_index];
}
			harz_sys_dichte=1.25;
	}else if(harz_sys==2){
		if(en){
			document.getElementById('a_wert_2').innerHTML=dp_harze['W01'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> Silicate resin system '+dp_harze['W01'][dp_harze_index];
} else {
	//deutsch
		document.getElementById('a_wert_2').innerHTML=dp_harze['W01'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> für '+dp_harze['W01'][dp_harze_index];
}
		harz_sys_dichte=1.2;
	}else if(harz_sys==3){
		if(en){
		document.getElementById('a_wert_2').innerHTML=dp_harze['S1'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> Silicate resin system '+dp_harze['S1'][dp_harze_index];
} else {
	//deutsch
		document.getElementById('a_wert_2').innerHTML=dp_harze['S1'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> für '+dp_harze['S1'][dp_harze_index];
}
		harz_sys_dichte=1.25;
	}else if(harz_sys==4){
		if(en){
	document.getElementById('a_wert_2').innerHTML=dp_harze['L30E1'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> Silicate resin system '+dp_harze['L30E1'][dp_harze_index];
} else {
	//deutsch
		document.getElementById('a_wert_2').innerHTML=dp_harze['L30E1'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> für '+dp_harze['L30E1'][dp_harze_index];
}
			harz_sys_dichte=1.19;
	}else if(harz_sys==5){
		
		if(en){
	document.getElementById('a_wert_2').innerHTML=dp_harze['L30E3'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> Silicate resin system '+dp_harze['L30E3'][dp_harze_index];
} else {
	//deutsch
		document.getElementById('a_wert_2').innerHTML=dp_harze['L30E3'][dp_harze_index];
		document.getElementById('headline_txt').innerHTML='Trelleborg Sectional Pipe Repair <br> für '+dp_harze['L30E3'][dp_harze_index];
}
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




if(masse=="imperial" || masse=="Imperial"){
//console.log('dm_rohr_val_tst: '+dm_rohr_val_tst );
	//console.log('dm_rohr_val: '+dm_rohr_val );

	dm_rohr_val_tst=masse_umrechnen.in_zu_mm(dm_rohr_val_tst);
dm_rohr_val = dm_rohr_val_tst;
		
}else{
dm_rohr_val = dm_rohr_val_tst;	
	
}

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


if(masse=="imperial" || masse=="Imperial"){
	
	if(reperatur_lange_val !=  masse_umrechnen.ft_zu_m(reperatur_lange_val_tst)*1000){	
//zusatzlagen_set_selection=true;
reperatur_lange_val = masse_umrechnen.ft_zu_m(reperatur_lange_val_tst)*1000;
	//console.log('masse_umrechnen.ft_zu_m(reperatur_lange_val_tst)*1000: '+masse_umrechnen.ft_zu_m(reperatur_lange_val_tst)*1000 );
	//console.log('reperatur_lange_val: '+reperatur_lange_val );
}
	
}else{
	
	
if(reperatur_lange_val!=reperatur_lange_val_tst*1000){	
//zusatzlagen_set_selection=true;
reperatur_lange_val = reperatur_lange_val_tst*1000;

}
	
}

zusatzlagen_l_val_tst=parseFloat(koma_ers(zahl_pruefen('zusatzlagen_l')));
if(zusatzlagen_l_val!=zusatzlagen_l_val_tst){	

zusatzlagen_l_val = zusatzlagen_l_val_tst;
}
//id="zusatzlagen_laenge_label">Länge der Zusatzlagen (Optional)

if($('#durchmesser_rohr').hasClass('input_focus')){
	
   inp_focus_d_r =true;
	
}else{
	
	inp_focus_d_r =false;	
	
}
if(dm_rohr_val>1400 && !inp_focus_d_r && dm_rohr_val!=0){
	if(en){
	  alert_ausgeben('Enter the diameter of the pipe to be repaired. Between 100mm (4in) and 1400mm (55in).' );
} else {
	//deutsch
  alert_ausgeben('Der Durchmesser überschreitet 1400mm. Der Durchmesser kann zwischen 100mm (4in) und 1400mm (55in) sein.' );
}
$('#durchmesser_rohr').val('');
 $('#durchmesser_rohr').focus();
  inp_focus_d_r =true;	
}else if(dm_rohr_val<100 && !inp_focus_d_r && dm_rohr_val!=0){
if(en){
		 alert_ausgeben('Enter the diameter of the pipe to be repaired. Between 100mm (4in) and 1400mm (55in).' );
} else {
	//deutsch
	 alert_ausgeben('Der Durchmesser ist kleiner als 100mm. Der Durchmesser kann zwischen 100mm (4in) und 1400mm (55in) sein.' );
	 
} 
$('#durchmesser_rohr').val('');
$('#durchmesser_rohr').focus();
	
	   inp_focus_d_r =true;
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
if(en){
zusatzl_erklaerung_td1400='<td>Required layers (total) <br>included additional layers </td><td>2<br>0</td>';
zusatzl_erklaerung1400='Required layers (total) 2 <br>0 included additional layers)';	
} else {
	//deutsch	
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>2<br>0</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 2 <br>(davon min. 0 Zusatzlagen)';
}
	
hauptlagen=2;
}else if(gfk_matte=='1400' && dm_rohr_val>=375 && dm_rohr_val<600){
 CheckAuswahl (1,'sel_2');
 if(en){
	zusatzl_erklaerung_td1400='<td>Required layers (total) <br>included additional layers </td><td>3<br>1</td>';
zusatzl_erklaerung1400='Required layers (total) 3 <br>1 included additional layer)';
} else {
	//deutsch 	
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon Zusatzlage</td><td>3<br>1</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 3 <br>(davon min. 1 Zusatzlage)';
}
hauptlagen=2;	
}else if(gfk_matte=='1400' && dm_rohr_val>=600 && dm_rohr_val<750){
 CheckAuswahl (2,'sel_2');
 if(en){
	zusatzl_erklaerung_td1400='<td>Required layers (total) <br>included additional layers </td><td>4<br>2</td>';
zusatzl_erklaerung1400='Required layers (total) 4 <br>2 included additional layers)';
} else {
	//deutsch  	
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon Zusatzlage</td><td>4<br>2</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 4 <br>(davon min. 2 Zusatzlagen)';
}
hauptlagen=2;	
}else if(gfk_matte=='1400' && dm_rohr_val>=750 && dm_rohr_val<800){
CheckAuswahl (3,'sel_2');
if(en){
	zusatzl_erklaerung_td1400='<td>Required layers (total) <br>included additional layers </td><td>5<br>3</td>';
zusatzl_erklaerung1400='Required layers (total) 5 <br>3 included additional layers)';
} else {
	//deutsch
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>5<br>3</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 5 <br>(davon min. 3 Zusatzlagen)';
}
hauptlagen=2;	
}else if(gfk_matte=='1400' && dm_rohr_val>=800 && dm_rohr_val<1200){
CheckAuswahl (4,'sel_2');
if(en){
zusatzl_erklaerung_td1400='<td>Required layers (total) <br>included additional layers </td><td>6<br>4</td>';
zusatzl_erklaerung1400='Required layers (total) 6 <br>4 included additional layers)';		
} else {
	//deutsch
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>6<br>4</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 6 <br>(davon min. 4 Zusatzlagen)';
}
hauptlagen=2;	
}else if(gfk_matte=='1400' && dm_rohr_val>=1200 && dm_rohr_val<1400){
CheckAuswahl (5,'sel_2');
if(en){
zusatzl_erklaerung_td1400='<td>Required layers (total) <br>included additional layers </td><td>7<br>5</td>';
zusatzl_erklaerung1400='Required layers (total) 7 <br>5 included additional layers)';	
} else {
	//deutsch
zusatzl_erklaerung_td1400='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>7<br>5</td>';
zusatzl_erklaerung1400='Empfohlene Gesamtlagen 7 <br>(davon min. 5 Zusatzlagen)';
}
hauptlagen=2;
}
/*gfk_matte=='1050'*/

if(gfk_matte=='1050' && dm_rohr_val>=100 && dm_rohr_val<500){
CheckAuswahl (0,'sel_2'); 	
if(en){
	zusatzl_erklaerung_td1050='<td>Required layers (total) <br>included additional layers </td><td>3<br>0</td>';
zusatzl_erklaerung1050='Required layers (total) 3 <br>0 included additional layers)';	
} else {
	//deutsch
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>3<br>0</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 3 <br>(davon min. 0 Zusatzlagen)';
}
hauptlagen=3;


}else if(gfk_matte=='1050' && dm_rohr_val>=500 && dm_rohr_val<675){
 CheckAuswahl (1,'sel_2'); 
 if(en){
	zusatzl_erklaerung_td1050='<td>Required layers (total) <br>included additional layers </td><td>4<br>1</td>';
zusatzl_erklaerung1050='Required layers (total) 4 <br>1 included additional layers)';
} else {
	//deutsch	
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>4<br>1</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 4 <br>(davon min. 1 Zusatzlage)';
}
hauptlagen=3;
	
}else if(gfk_matte=='1050' && dm_rohr_val>=675 && dm_rohr_val<800){
 CheckAuswahl (2,'sel_2'); 
 if(en){
zusatzl_erklaerung_td1050='<td>Required layers (total) <br>included additional layers </td><td>5<br>2</td>';
zusatzl_erklaerung1050='Required layers (total) 5 <br>2 included additional layers)';	
} else {
	//deutsch 	
zusatzl_erklaerung_td1050='<td> Gesamtlagen <br>davon min. Zusatzlage</td><td>5<br>2</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 5 <br>(davon min. 2 Zusatzlagen)';
}
	hauptlagen=3;
}else if(gfk_matte=='1050' && dm_rohr_val>=800 && dm_rohr_val<1200){
CheckAuswahl (3,'sel_2');
if(en){
	zusatzl_erklaerung_td1050='<td>Required layers (total) <br>included additional layers </td><td>6<br>3</td>';
zusatzl_erklaerung1050='Required layers (total) 6 <br>3 included additional layers)';
} else {
	//deutsch
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>6<br>3</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 6 <br>(davon min. 3 Zusatzlagen)';

}
hauptlagen=3;
	
}else if(gfk_matte=='1050' && dm_rohr_val>=1200 && dm_rohr_val<1400){
CheckAuswahl (5,'sel_2');
if(en){
	zusatzl_erklaerung_td1050='<td>Required layers (total) <br>included additional layers </td><td>8<br>5</td>';
zusatzl_erklaerung1050='Required layers (total) 8 <br>5 included additional layers)';
} else {
	//deutsch
zusatzl_erklaerung_td1050='<td>Empfohlene Gesamtlagen <br>davon min. Zusatzlage</td><td>8<br>5</td>';
zusatzl_erklaerung1050='Empfohlene Gesamtlagen 8 <br>(davon min. 5 Zusatzlagen)';
}
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






























