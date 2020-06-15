$(window).load(function() {
calc=true;

})



resign_type ='';
hardener_type='';



//parent.seite_aktivieren('menu_weg');
dm_hk_mass=document.getElementsByClassName('dm_hk')[0].getElementsByClassName('mass')[0];
dm_sa_mass=document.getElementsByClassName('dm_sa')[0].getElementsByClassName('mass')[0];
snl_sa_mass=document.getElementsByClassName('snl_sa')[0].getElementsByClassName('mass')[0];




liner_typ_val='';
harz_sys_val='';

dm_hk_val='';
dm_sa_val='';
snl_sa_val='';

berechnen_go=false;
	
	
function ergebnisse_berechnen(e){
	if(berechnen_go){
	berechnen_go=false;
	

	
	
	document.getElementById('aa1lt').innerHTML='<nobr>'+ liner_typ_val+' <span class="w30"></span></nobr>';
	document.getElementById('aa1hs').innerHTML='<nobr>'+harz_sys_val+' <span class="w30"></span></nobr>';
	document.getElementById('aa1').innerHTML='<nobr>'+ dm_hk_val+' <span class="w30">'+dm_hk_mass.innerHTML+'</span></nobr>';
	document.getElementById('aa2').innerHTML='<nobr>'+dm_sa_val+' <span class="w30">'+dm_sa_mass.innerHTML+'</span></nobr>';
	document.getElementById('aa3').innerHTML='<nobr>'+snl_sa_val+' <span class="w30">'+snl_sa_mass.innerHTML+'</span></nobr>';	



 erg_berechnet();

		
	}
	
}
volumen=0;
function erg_berechnet(){
	
	pi=3.14159;
	



//alert(masse+' / '+hartzsys+' / '+liner+' / '+dm_hk_val+' / '+dm_sa_val+' / '+snl_sa_val);	

//Gesamtharzmenge als Volumen:------------------------------------------------------------------------------------------


 
 //Harzfaktor----------------------------------------------------------

harzfaktor = new Array();
harzfaktor['DrainLiner PVC'] =1;
harzfaktor['Trelleborg MultiFlex Liner'] =1;


harzfaktor['Trelleborg ProLiner'] =1.05;
harzfaktor['Trelleborg MainLiner'] =1.05;


harzfaktor['DrainSteamLiner PP'] =1;
harzfaktor['DrainPlusLiner DPL 2.0'] =1;
harzfaktor['Trelleborg UltraFlex Liner'] =1;

harzfaktor['Trelleborg HybridLiner'] =0.92;







/*
dm_hk_val ist durchmesser_hauptkanal
dm_sa_val ist durchmesser_seitenanschluss
snl_sa_val ist sanierungslaenge_seitenanschluss
*/

dm_hk_val=koma_ers(dm_hk_val);

dm_sa_val=koma_ers(dm_sa_val);

snl_sa_val=koma_ers(snl_sa_val);

/*Harzfaktor----------------------------------------------
----------------------------------------------------------

Formel Berechnen
V= pi*DN*Thickness*distance of liner  + (0.05* pi*DN*Thickness*distance of liner).
----------------------------------------------------------

	console.log('Durchmesser: dm_hk_val '+dm_hk_val);
		console.log('Wandstärke: dm_sa_val '+dm_sa_val);
		console.log('Länge: snl_sa_val '+snl_sa_val);
		console.log('ges_volumen=(pi*(dm_hk_val/1000)*dm_sa_val*snl_sa_val)+(0.05* pi*dm_hk_val*dm_sa_val*snl_sa_val); ');
*/
if(liner_tst=="Trelleborg HybridLiner"){
	if (masse == 'imperial' || masse == 'Imperial') {
		dm_hk_val = masse_umrechnen.in_zu_mm(dm_hk_val);
        dm_hk_val_durch1000=dm_hk_val/1000;
		ges_volumen=(pi*dm_hk_val_durch1000*dm_sa_val*snl_sa_val)+(0.05* pi*dm_hk_val_durch1000*dm_sa_val*snl_sa_val);
					
	}else{
	
		dm_hk_val_durch1000=dm_hk_val/1000;
		ges_volumen=(pi*dm_hk_val_durch1000*dm_sa_val*snl_sa_val)+(0.05* pi*dm_hk_val_durch1000*dm_sa_val*snl_sa_val);		
	};	
}else{
	if (masse == 'imperial' || masse == 'Imperial') {
			ges_volumen=pi*(dm_hk_val/1000)*masse_umrechnen.in_zu_mm(dm_sa_val)*masse_umrechnen.ft_zu_m(snl_sa_val)*harzfaktor[liner];	
			
			
	}else{
			ges_volumen=pi*(dm_hk_val/1000)*dm_sa_val*snl_sa_val*harzfaktor[liner];	
	};
};


ges_gewicht=ges_volumen*dichtetabelle[hartzsys]['dichte_gem'];

gew_harz=ges_gewicht/(dichtetabelle[hartzsys]['anteil_a_gew']+dichtetabelle[hartzsys]['anteil_b_gew'])*dichtetabelle[hartzsys]['anteil_a_gew'];
gew_haerter=ges_gewicht/(dichtetabelle[hartzsys]['anteil_a_gew']+dichtetabelle[hartzsys]['anteil_b_gew'])*dichtetabelle[hartzsys]['anteil_b_gew'];

vol_harz=gew_harz/dichtetabelle[hartzsys]['dichte_a'];
vol_haerter=gew_haerter/dichtetabelle[hartzsys]['dichte_b'];

//alert('ges_volumen:'+ges_volumen.toFixed(2)+' //ges_gewicht: '+ges_gewicht.toFixed(2)+' //gew_harz: '+gew_harz.toFixed(2)+' //gew_haerter: '+gew_haerter.toFixed(2)+' //vol_harz: '+vol_harz.toFixed(2)+' //vol_haerter: '+vol_haerter.toFixed(2));



if (masse == 'imperial' || masse == 'Imperial') {
	
	
	document.getElementById('liter').innerHTML=masse_umrechnen.liter_zu_gallon(ges_volumen).toFixed(2);
document.getElementById('gewicht').innerHTML=masse_umrechnen.kg_zu_lbs(ges_gewicht).toFixed(4);


document.getElementById('harz_l').innerHTML=masse_umrechnen.liter_zu_gallon(vol_harz).toFixed(2);
document.getElementById('haerter_l').innerHTML=masse_umrechnen.liter_zu_gallon((ges_volumen-vol_harz)).toFixed(2);

	if(en){
					$(".w30_vol").html('gallons');
					$(".w30_gew").html('lbs');
					}else{
						$(".w30_vol").html('Gallonen');
						$(".w30_gew").html('lbs');
						
					}


/*
document.getElementById('harz_gew').innerHTML=masse_umrechnen.kg_zu_lbs(gew_harz).toFixed(4);
document.getElementById('haerter_gew').innerHTML=masse_umrechnen.kg_zu_lbs((ges_gewicht-gew_harz)).toFixed(4);
*/


$(".harz_gew_td").html(gew_harz.toFixed(2)+' kg<br>('+masse_umrechnen.kg_zu_lbs(gew_harz).toFixed(2)+' lbs)');
$(".haerter_gew_td").html((ges_gewicht-gew_harz).toFixed(2)+' kg<br>('+masse_umrechnen.kg_zu_lbs((ges_gewicht-gew_harz)).toFixed(2)+' lbs)');





document.getElementsByClassName('kompnente_a')[0].innerHTML=hartzsys+' A';
document.getElementsByClassName('kompnente_a')[1].innerHTML=hartzsys+' A';

document.getElementsByClassName('kompnente_b')[0].innerHTML=hartzsys+' B';
document.getElementsByClassName('kompnente_b')[1].innerHTML=hartzsys+' B';
}else  {
	
	
	document.getElementById('liter').innerHTML=ges_volumen.toFixed(2);
document.getElementById('gewicht').innerHTML=ges_gewicht.toFixed(2);


document.getElementById('harz_l').innerHTML=vol_harz.toFixed(2);
document.getElementById('haerter_l').innerHTML=(ges_volumen-vol_harz).toFixed(2);

document.getElementById('harz_gew').innerHTML=gew_harz.toFixed(2);
document.getElementById('haerter_gew').innerHTML=(ges_gewicht-gew_harz).toFixed(2);

document.getElementsByClassName('kompnente_a')[0].innerHTML=hartzsys+' A';
document.getElementsByClassName('kompnente_a')[1].innerHTML=hartzsys+' A';

document.getElementsByClassName('kompnente_b')[0].innerHTML=hartzsys+' B';
document.getElementsByClassName('kompnente_b')[1].innerHTML=hartzsys+' B';
	

	
}

c1_console_log(dp_harze['FC15A'][dp_harze_index]);

c1_console_log('resign_type: '+ resign_type +' / hardener_type: '+hardener_type+ ' / '+hartz_systeme_mengen[dp_harze['FC15A'][dp_harze_index]][0]['beschr']);

ausw_menge_hartz=Math.ceil(gew_harz/hartz_systeme_mengen[dp_harze[resign_type][dp_harze_index]][0]['gewicht']);
ausw_menge_haerter=Math.ceil(gew_haerter/hartz_systeme_mengen[hardener_type][0]['gewicht']);
drum='';
if(gew_harz >= 200 || gew_haerter >= 200){	

drum='<div>'+innerHTML_lang('Bei Abnahme über 200kg ist auch Fassware erhältlich.')+'</div>';
	
}



resign_type_imperial_lbs='';
hardener_type_imperial_lbs='';
if(masse=='imperial'){	
resign_type_imperial_lbs='<span class="produkt_imperial_lbs">('+hartz_systeme_mengen[dp_harze[resign_type][dp_harze_index]][0]['imperial_lbs']+')</span>';
hardener_type_imperial_lbs='<span class="produkt_imperial_lbs">('+hartz_systeme_mengen[hardener_type][0]['imperial_lbs']+')</span>';
}

if(en){
document.getElementById('produkte_verwenden').innerHTML ='<h2>Products</h2><table width="100%" border="0" cellspacing="0" cellpadding="0">'
                    +'<tr>'
					+'<td align="left" >'+ausw_menge_hartz+' x Resin:</td>'
					+'<td align="right" ><nobr>'+hartz_systeme_mengen[dp_harze[resign_type][dp_harze_index]][0]['beschr']+resign_type_imperial_lbs+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Item No.:</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[dp_harze[resign_type][dp_harze_index]][0]['art_nr']+'</nobr></td>'
					+'</tr>'
					+'</table>'
					+'<table width="100%" border="0" cellspacing="0" cellpadding="0">'
					+'</tr>'
					+'<td align="left">'+ausw_menge_haerter+' x Harder:</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[hardener_type][0]['beschr']+hardener_type_imperial_lbs+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Item No.:</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[hardener_type][0]['art_nr']+'</nobr></td>'
					+'</tr>'
                    +'</table>';
} else {
	//deutsch


document.getElementById('produkte_verwenden').innerHTML ='<h2>Produkte</h2><table width="100%" border="0" cellspacing="0" cellpadding="0">'
                    +'<tr>'
					+'<td align="left" >'+ausw_menge_hartz+' x Harz:</td>'
					+'<td align="right" ><nobr>'+hartz_systeme_mengen[dp_harze[resign_type][dp_harze_index]][0]['beschr']+resign_type_imperial_lbs+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Art. Nr.:</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[dp_harze[resign_type][dp_harze_index]][0]['art_nr']+'</nobr></td>'
					+'</tr>'
					+'</table>'
					+'<table width="100%" border="0" cellspacing="0" cellpadding="0">'
					+'</tr>'
					+'<td align="left">'+ausw_menge_haerter+' x Härter:</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[hardener_type][0]['beschr']+hardener_type_imperial_lbs+'</nobr></td>'
					+'</tr>'
					+'<tr>'
					+'<td align="left">Art. Nr.:</td>'
					+'<td align="right"><nobr>'+hartz_systeme_mengen[hardener_type][0]['art_nr']+'</nobr></td>'
					+'</tr>'
                    +'</table>';

}










berechnen_animation();


		
	
	
}

























masssystem=lang_einh_metrisch;
function neue_masse_ausgewaehlt(val){
	
if(val=="Metrisch" || val=="metric"){
	
	document.getElementById('a_wert').innerHTML=lang_einh_metrisch;
	
dm_hk_mass.innerHTML='mm';	
dm_sa_mass.innerHTML='mm';
snl_sa_mass.innerHTML='m';

$(".w30_gew,.w30_vol,.w30").css({'width': 33 });	
		
}else if(val=="imperial" || val=="Imperial"){
		document.getElementById('a_wert').innerHTML=lang_einh_imperial;	
dm_hk_mass.innerHTML='in';	
//dm_sa_mass.innerHTML='in';
snl_sa_mass.innerHTML='ft';


$(".w30_gew,.w30_vol,.w30").css({'width': 'auto' });
			
}

for (var i = 0; i <= 2; i++){
	//ausgabe.innerHTML =' '+i;
	if(val=="Metrisch" || val=="metric"){
document.getElementsByClassName('w30_gew')[i].innerHTML="Kg";	
document.getElementsByClassName('w30_vol')[i].innerHTML="Liter";
}else if(val=="imperial" || val=="Imperial"){
document.getElementsByClassName('w30_gew')[i].innerHTML="lbs";	
document.getElementsByClassName('w30_vol')[i].innerHTML="Gallonen"	
}


}




}
dichte_a=0;
dichte_b=0;
dichte_gem=0;
anteil_a_gew=0;
anteil_b_gew=0;
harzsystem_name='';



function neues_harzsystem(val){

	
if(val=="Trelleborg Epoxy FC15"){
	resign_type='FC15A';
	hardener_type='FC15B';
	document.getElementById('a_wert_h').innerHTML="Trelleborg Epoxy FC15";
dichte_a=1.15;
dichte_b=1.1;
dichte_gem=1.13717472;
anteil_a_gew=100;
anteil_b_gew=33;	
}else if(val=="Trelleborg Epoxy FC30"){
		resign_type='FC30A';
	hardener_type='FC30B';
		document.getElementById('a_wert_h').innerHTML="Trelleborg Epoxy FC30";	
dichte_a=1.15;
dichte_b=1.1;
dichte_gem=1.13717472;
anteil_a_gew=100;
anteil_b_gew=33;	
}else if(val=="Trelleborg Epoxy HC60"){
		resign_type='HC60A';
	hardener_type='HC60B';
		document.getElementById('a_wert_h').innerHTML="Trelleborg Epoxy HC60";	
dichte_a=1.16;
dichte_b=0.96;
dichte_gem=1.09968487;
anteil_a_gew=100;
anteil_b_gew=33;	
}else if(val=="Trelleborg Epoxy HC120"){
	resign_type='HC120A';
	hardener_type='HC120B';
		document.getElementById('a_wert_h').innerHTML="Trelleborg Epoxy HC120";	
dichte_a=1.15;
dichte_b=0.96;
dichte_gem=1.09617021;
anteil_a_gew=100;
anteil_b_gew=33;	
}else if(val=="Trelleborg Epoxy HC120+"){
	resign_type='HC120Ap';
	hardener_type='HC120Bp';
		document.getElementById('a_wert_h').innerHTML="Trelleborg Epoxy HC120+";	
        dichte_a = 1.23;
        dichte_b = 0.98;
        dichte_gem = 1.1616160119;
        anteil_a_gew = 100;
        anteil_b_gew = 30;
}else if(val=="Trelleborg Epoxy HC2640"){
	resign_type='HC2640A';
	hardener_type='HC2640B';
		document.getElementById('a_wert_h').innerHTML="Trelleborg Epoxy HC2640";	
		dichte_a=1.15;
dichte_b=0.97;
dichte_gem=1.13092166;
anteil_a_gew=100;
anteil_b_gew=10;	
}

c1_console_log('resign_type: '+ resign_type +' / hardener_type: '+hardener_type);

}
function neue_linertyp_ausgewaehlt(val){

	



}

function DPL_2_0_alert(){
hartzsys='120+';

if(en){
alert_ausgeben('Trelleborg UltraFlex Liner can only be used with the Trelleborg Epoxy HC120+ and a wall thickness of 4.5mm!');
} else {
	//deutsch
alert_ausgeben('Trelleborg UltraFlex Liner kann nur mit dem Trelleborg Epoxy HC120+ und einer Wandstärke von 4,5mm verwendet werden!');
}	
}
function HybridLiner_alert(){
hartzsys='120';

if(en){
alert_ausgeben('Trelleborg HybridLiner can only be used with the Trelleborg Epoxy HC120 and a wall thickness of 4.5mm!');
} else {
	//deutsch
alert_ausgeben('Trelleborg HybridLiner kann nur mit dem Trelleborg Epoxy HC120 und einer Wandstärke von 4,5mm verwendet werden!');
}	
}
function Hinzufuegen (neu_str) {
  NeuerEintrag = new Option(neu_str, neu_str, false, true);
  document.getElementById('sel1').options[document.getElementById('sel1').length] = NeuerEintrag;

}
function Loeschen () {  
var x = document.getElementById("sel1");
		for(i=0;i<22 ;i++){

 
if (x.length>0){ 
  x.remove(0);
  } 
  
		}
}
function CheckAuswahl (nr_,id_) {
  if (document.getElementById(id_).selectedIndex != nr_)
    document.getElementById(id_).selectedIndex = nr_;
}
////////////////////////////////////////////////////////////
//listener-------------------------------------------------
////////////////////////////////////////////////////////////
i=0;
masse=document.getElementById('sel').value;
hartzsys=document.getElementById('sel1').value;
liner=document.getElementById('sel_l').value;



function selekt_change() {


	
masse_tst=document.getElementById('sel').value;
if(masse!=masse_tst){
	masse=masse_tst;
neue_masse_ausgewaehlt(masse_tst);	
}
liner_tst=document.getElementById('sel_l').value;  
if(liner!=liner_tst){

if(liner_tst=="Trelleborg UltraFlex Liner"){
	DPL_2_0_alert();
		if(document.getElementById('sel').value=="Metrisch" || document.getElementById('sel').value=="metric"){
			document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
		}else if(document.getElementById('sel').value=="imperial" || document.getElementById('sel').value=="Imperial"){
			console.log('durchmesser_seitenanschluss DPL_2_0_alert');
			//document.getElementsByName('durchmesser_seitenanschluss')[0].value=masse_umrechnen.mm_zu_in(4.5).toFixed(3);
			document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
		}		
}else if(liner_tst=="Trelleborg HybridLiner"){
	HybridLiner_alert();
		if(document.getElementById('sel').value=="Metrisch" || document.getElementById('sel').value=="metric"){
			document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
		}else if(document.getElementById('sel').value=="imperial" || document.getElementById('sel').value=="Imperial"){
			//document.getElementsByName('durchmesser_seitenanschluss')[0].value=masse_umrechnen.mm_zu_in(4.5).toFixed(3);
			document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
		}		
}

	liner=liner_tst;	
	liner_typ_val=liner_tst;
document.getElementById('a_wert_li').innerHTML=liner_tst;
neue_linertyp_ausgewaehlt(liner_tst);
	Loeschen ();
if(liner_tst=="Trelleborg MultiFlex Liner"){


if(en){
Hinzufuegen ('Please Select');
document.getElementById('a_wert_h').innerHTML='Please Select';
} else {
	//deutsch
Hinzufuegen ('Bitte wählen');
document.getElementById('a_wert_h').innerHTML='Bitte wählen';
}
Hinzufuegen ('Trelleborg Epoxy FC15');
Hinzufuegen ('Trelleborg Epoxy FC30');
Hinzufuegen ('Trelleborg Epoxy HC60');
Hinzufuegen ('Trelleborg Epoxy HC120')
Hinzufuegen ('Trelleborg Epoxy HC120+');
//Hinzufuegen ('Trelleborg Epoxy HC2640');

CheckAuswahl (0,'sel1');
	   
	
}else{


if(en){
Hinzufuegen ('Please Select');
document.getElementById('a_wert_h').innerHTML='Please Select';
} else {
	//deutsch
Hinzufuegen ('Bitte wählen');
document.getElementById('a_wert_h').innerHTML='Bitte wählen';
}
Hinzufuegen ('Trelleborg Epoxy FC15');
Hinzufuegen ('Trelleborg Epoxy FC30');
Hinzufuegen ('Trelleborg Epoxy HC60');
Hinzufuegen ('Trelleborg Epoxy HC120')
Hinzufuegen ('Trelleborg Epoxy HC120+');
//Hinzufuegen ('Trelleborg Epoxy HC2640');
CheckAuswahl (0,'sel1');
}
	

if(liner_tst=='Trelleborg ProLiner' || liner_tst=='Trelleborg MainLiner'){
	
CheckAuswahl (0,'sel1');	
if(en){
document.getElementById('sel1').value='Please Select';
hartzsys='Please Select';
//hartzsys_tst='Please Select';
document.getElementById('a_wert_h').innerHTML='Please Select';
} else {
	//deutsch
document.getElementById('sel1').value='Bitte wählen';
hartzsys='Bitte wählen';
//hartzsys_tst='Bitte wählen';
document.getElementById('a_wert_h').innerHTML='Bitte wählen';
}


c1_console_log('Trelleborg ProLiner / MainLiner');	
c1_console_log(hartzsys)	
	
}

}  	    
hartzsys_tst=document.getElementById('sel1').value;



if(hartzsys!=hartzsys_tst){
	
if(liner_tst=="Trelleborg UltraFlex Liner"){
	DPL_2_0_alert();
}
if(liner_tst=="Trelleborg HybridLiner"){
	HybridLiner_alert();
}
hartzsys=hartzsys_tst;
harz_sys_val=hartzsys_tst;
neues_harzsystem(hartzsys_tst);	
}


if(liner_tst=="Trelleborg MultiFlex Liner"){
	if(document.getElementById('sel').value=="Metrisch"||document.getElementById('sel').value=="metric"){
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='3';
	}else if(document.getElementById('sel').value=="Imperial" || document.getElementById('sel').value=="imperial"){
		//document.getElementsByName('durchmesser_seitenanschluss')[0].value=masse_umrechnen.mm_zu_in(3).toFixed(3);
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='3';
	}
}	

if(liner_tst=="Trelleborg UltraFlex Liner"){
	if(document.getElementById('sel').value=="Metrisch"||document.getElementById('sel').value=="metric"){
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
	}else if(document.getElementById('sel').value=="Imperial" || document.getElementById('sel').value=="imperial"){
		//document.getElementsByName('durchmesser_seitenanschluss')[0].value=masse_umrechnen.mm_zu_in(4.5).toFixed(3);
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
	}	
	  //document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
		
		if(hartzsys_tst!='Trelleborg Epoxy HC120+'){
		
       	 	hartzsys_tst='Trelleborg Epoxy HC120+';
			harz_sys_val=hartzsys_tst;
			document.getElementById('a_wert_li').innerHTML=liner_tst;
	
			document.getElementById("sel1").selectedIndex = "5";
			neues_harzsystem(hartzsys_tst);			
		}
}
if(liner_tst=="Trelleborg HybridLiner"){
	if(document.getElementById('sel').value=="Metrisch"||document.getElementById('sel').value=="metric"){
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
	}else if(document.getElementById('sel').value=="Imperial" || document.getElementById('sel').value=="imperial"){
		//document.getElementsByName('durchmesser_seitenanschluss')[0].value=masse_umrechnen.mm_zu_in(4.5).toFixed(3);
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
	}	
	  //document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
		
		if(hartzsys_tst!='Trelleborg Epoxy HC120'){
		
       	 	hartzsys_tst='Trelleborg Epoxy HC120';
			harz_sys_val=hartzsys_tst;
			document.getElementById('a_wert_li').innerHTML=liner_tst;
	
			document.getElementById("sel1").selectedIndex = "4";
			neues_harzsystem(hartzsys_tst);			
		}
}	
	
i=i+1;
durchmesser_hauptkanal_l=document.mth_liner_basic_calc.durchmesser_hauptkanal.value.length;
durchmesser_seitenanschluss_l=document.mth_liner_basic_calc.durchmesser_seitenanschluss.value.length;
sanierungslaenge_seitenanschluss_l=document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value.length;
if(durchmesser_hauptkanal_l>0&&durchmesser_seitenanschluss_l>0&&sanierungslaenge_seitenanschluss_l>0&&document.getElementById('a_wert_h').innerHTML!='Bitte wählen'){
	berechnen_go=true;
	$("#berechnen").css({"color":'#ffffff'});

	
}else{
	berechnen_go=false;

	$("#berechnen").css({"color":'#999999'});
}

dm_hk_val=document.mth_liner_basic_calc.durchmesser_hauptkanal.value;
dm_sa_val=document.mth_liner_basic_calc.durchmesser_seitenanschluss.value;
snl_sa_val=document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value;


vtc=innerHTML_lang('<br>Dies ist kein gültiger Wert! <br>Bitte geben Sie eine gültige Zahl ein.');

	
if(!elaubte_nr(document.mth_liner_basic_calc.durchmesser_hauptkanal.value)){
  utz=document.mth_liner_basic_calc.durchmesser_hauptkanal.value;
	alert_ausgeben(utz+vtc );
	document.mth_liner_basic_calc.durchmesser_hauptkanal.value='';
	
}
if(!elaubte_nr(document.mth_liner_basic_calc.durchmesser_seitenanschluss.value)){
  utz=document.mth_liner_basic_calc.durchmesser_seitenanschluss.value;
	alert_ausgeben(utz+vtc );
	document.mth_liner_basic_calc.durchmesser_seitenanschluss.value='';
}
if(!elaubte_nr(document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value)){
  utz=document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value;
	alert_ausgeben(utz+vtc );
	document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value='';
}



/*
if(isNaN(document.mth_liner_basic_calc.durchmesser_hauptkanal.value)){
	document.mth_liner_basic_calc.durchmesser_hauptkanal.value='';
}
if(isNaN(document.mth_liner_basic_calc.durchmesser_seitenanschluss.value)){
	document.mth_liner_basic_calc.durchmesser_seitenanschluss.value='';
}
if(isNaN(document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value)){
	document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value='';
}
*/
//$( "#topbar_unters" ).html('uuuuuuuu'+i);

aktiv=window.setTimeout("selekt_change()", 100);

}


selekt_change();

////////////////////////////////////////////////////////////
//listener-------------------------------------------------
////////////////////////////////////////////////////////////

			

	

	var inputFocus = {

	elements : ['input'],
	setup : function(){
	for(j=0;j<inputFocus.elements.length+1;j++){	
	
	
	for(i=0;i<document.getElementsByTagName(inputFocus.elements[j]).length;i++){
	
	var el = document.getElementsByTagName(inputFocus.elements[j])[i];
	
	if(navigator.userAgent.indexOf("Firefox") != -1){
	el.onfocus = inputFocus._focus;
	el.onblur = inputFocus._blur; 
	el.onmousemove = inputFocus.touchmove;	
	}else{
		/*
	el.ontouchstart = inputFocus.touchstart;
	el.ontouchend = inputFocus.touchend; 
	el.ontouchmove = inputFocus.touchmove;
	*/
	}
	}
	}
	},

	_focus : function(){
		
$( this ).parent( ".eing_mth" ).addClass( "input_focus" );	

	
	},
	_blur :function(event){
		//event.preventDefault();
$( this ).parent( ".eing_mth" ).removeClass( "input_focus" );
	
},
	touchend : function(){

		
	}
	}
	inputFocus.setup();



/*
	$('#harz_volumen').click(function() {
		$('html,body').animate({
          scrollTop:0
        }, 40);
 });
*/	







$(document).ready(function(e) {


//$(".content").css({"min-height":700});
//$(".werte_ergebnisse").css({"borrom":0});
//$(".werte_eingaben").css({"borrom":0});	
	
			
 });
 
 