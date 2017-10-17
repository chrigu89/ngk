$(window).load(function() {
calc=true;






})


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
harzfaktor['DrainPlusLiner PUR'] =1;
harzfaktor['DrainFlexLiner'] =1.05;
harzfaktor['DrainSteamLiner PP'] =1;

harzfaktor['DrainPlusLiner DPL 2.0'] =1;
harzfaktor['DrainPlusLiner 2.0'] =1;











dm_hk_val=koma_ers(dm_hk_val);

dm_sa_val=koma_ers(dm_sa_val);

snl_sa_val=koma_ers(snl_sa_val);



if (masse == 'imperial') {



//Harzfaktor----------------------------------------------------------

dm_sa_val=masse_umrechnen.mm_zu_in(dm_sa_val);

ges_volumen=pi*(masse_umrechnen.in_zu_mm(dm_hk_val)/1000)*masse_umrechnen.in_zu_mm(dm_sa_val)*masse_umrechnen.ft_zu_m(snl_sa_val)*harzfaktor[liner];	
	
}else{

ges_volumen=pi*(dm_hk_val/1000)*dm_sa_val*snl_sa_val*harzfaktor[liner];	

}

ges_gewicht=ges_volumen*dichtetabelle[hartzsys]['dichte_gem'];

gew_harz=ges_gewicht/(dichtetabelle[hartzsys]['anteil_a_gew']+dichtetabelle[hartzsys]['anteil_b_gew'])*dichtetabelle[hartzsys]['anteil_a_gew'];
gew_haerter=ges_gewicht/(dichtetabelle[hartzsys]['anteil_a_gew']+dichtetabelle[hartzsys]['anteil_b_gew'])*dichtetabelle[hartzsys]['anteil_b_gew'];

vol_harz=gew_harz/dichtetabelle[hartzsys]['dichte_a'];
vol_haerter=gew_haerter/dichtetabelle[hartzsys]['dichte_b'];

//alert('ges_volumen:'+ges_volumen.toFixed(2)+' //ges_gewicht: '+ges_gewicht.toFixed(2)+' //gew_harz: '+gew_harz.toFixed(2)+' //gew_haerter: '+gew_haerter.toFixed(2)+' //vol_harz: '+vol_harz.toFixed(2)+' //vol_haerter: '+vol_haerter.toFixed(2));

if (masse == 'imperial') {
	document.getElementById('liter').innerHTML=masse_umrechnen.liter_zu_gallon(ges_volumen).toFixed(4);
document.getElementById('gewicht').innerHTML=masse_umrechnen.kg_zu_lbs(ges_gewicht).toFixed(4);


document.getElementById('harz_l').innerHTML=masse_umrechnen.liter_zu_gallon(vol_harz).toFixed(4);
document.getElementById('haerter_l').innerHTML=masse_umrechnen.liter_zu_gallon((ges_volumen-vol_harz)).toFixed(4);

document.getElementById('harz_gew').innerHTML=masse_umrechnen.kg_zu_lbs(gew_harz).toFixed(4);
document.getElementById('haerter_gew').innerHTML=masse_umrechnen.kg_zu_lbs((ges_gewicht-gew_harz)).toFixed(4);

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
/*
	//Berechnung------------------------------------------------------------------------------------------------------
dm_hk_val
dm_sa_val
snl_sa_val	

dichte_a=0;
dichte_b=0;
dichte_gem=0;
anteil_a_gew=0;
anteil_b_gew=0;

harzsystem_name='';
masssystem="metric";

//Harzgemisch Total:
document.getElementById('liter');
document.getElementById('gewicht');
//Volumen
document.getElementById('harz_l');
document.getElementById('haerter_l');
//Gewicht
document.getElementById('harz_gew');
document.getElementById('haerter_gew');

document.getElementById('');
document.getElementById('');
document.getElementById('');
document.getElementById('');

	//Berechnung------------------------------------------------------------------------------------------------------
*/
	



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
		
			$('html,body').delay(300).animate({
          scrollTop:0
        }, 1400, 'swing', function() {

			NachOben ();
		
		});
		
	
	
}










if(navigator.userAgent.indexOf("Firefox") != -1){
document.getElementById('berechnen').onmousedown=ergebnisse_berechnen;
}else{
	document.getElementById('berechnen').ontouchstart=ergebnisse_berechnen;
}


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
});
		
	
});	

			$('html,body').animate({
          scrollTop:0
        }, 1000, 'swing', function() {

			NachOben ();
		
		});	
	
}

if(navigator.userAgent.indexOf("Firefox") != -1){
	document.getElementById('zurueck').onmousedown=zurueck_eing;
	document.getElementById('zuruck_z_eingabe').onmousedown=zurueck_eing;
}else{
document.getElementById('zurueck').ontouchstart=zurueck_eing;
	document.getElementById('zuruck_z_eingabe').ontouchstart=zurueck_eing;
}

masssystem="metric";
function neue_masse_ausgewaehlt(val){
	
if(val=="metric"){
	
	document.getElementById('a_wert').innerHTML="metric";
	
dm_hk_mass.innerHTML='mm';	
dm_sa_mass.innerHTML='mm';
snl_sa_mass.innerHTML='m';

$(".w30_gew,.w30_vol,.w30").css({'width': 33 });	
		
}else if(val=="imperial"){
		document.getElementById('a_wert').innerHTML="Imperial";	
dm_hk_mass.innerHTML='in';	
dm_sa_mass.innerHTML='mm';
snl_sa_mass.innerHTML='ft';


$(".w30_gew,.w30_vol,.w30").css({'width': 70 });
			
}

for (var i = 0; i <= 2; i++){
	//ausgabe.innerHTML =' '+i;
	if(val=="metric"){
document.getElementsByClassName('w30_gew')[i].innerHTML="Kg";	
document.getElementsByClassName('w30_vol')[i].innerHTML="Liter";
}else if(val=="imperial"){
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

	
if(val=="FC15"){
	document.getElementById('a_wert_h').innerHTML="FC15";
dichte_a=1.15;
dichte_b=1.1;
dichte_gem=1.13717472;
anteil_a_gew=100;
anteil_b_gew=33;	
}else if(val=="FC30"){
		document.getElementById('a_wert_h').innerHTML="FC30";	
dichte_a=1.15;
dichte_b=1.1;
dichte_gem=1.13717472;
anteil_a_gew=100;
anteil_b_gew=33;	
}else if(val=="HC60"){
		document.getElementById('a_wert_h').innerHTML="HC60";	
dichte_a=1.16;
dichte_b=0.96;
dichte_gem=1.09968487;
anteil_a_gew=100;
anteil_b_gew=33;	
}else if(val=="HC120"){
		document.getElementById('a_wert_h').innerHTML="HC120";	
dichte_a=1.15;
dichte_b=0.96;
dichte_gem=1.09617021;
anteil_a_gew=100;
anteil_b_gew=33;	
}else if(val=="HC120+"){
		document.getElementById('a_wert_h').innerHTML="HC120+";	
        dichte_a = 1.23;
        dichte_b = 0.98;
        dichte_gem = 1.1616160119;
        anteil_a_gew = 100;
        anteil_b_gew = 30;
}else if(val=="HC2640"){
		document.getElementById('a_wert_h').innerHTML="HC2640";	
		dichte_a=1.15;
dichte_b=0.97;
dichte_gem=1.13092166;
anteil_a_gew=100;
anteil_b_gew=10;	
}



}
function neue_linertyp_ausgewaehlt(val){

	



}

function DPL_2_0_alert(){
hartzsys='120+';
alert_ausgeben('Drain Liner Plus 2.0 can only be used with the resin system HC120 + and a wall thickness of 4.5mm!');	
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
if(liner_tst=="DrainPlusLiner 2.0"){
	
	

	
	DPL_2_0_alert();

if(document.getElementById('sel').value=="metric"){
	document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
}else if(document.getElementById('sel').value=="imperial"){
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
}
}else{
	
}

	liner=liner_tst;	
	liner_typ_val=liner_tst;
document.getElementById('a_wert_li').innerHTML=liner_tst;
neue_linertyp_ausgewaehlt(liner_tst);
	Loeschen ();
if(liner_tst=="DrainPlusLiner PUR"){


Hinzufuegen ('Please Select');
Hinzufuegen ('FC15');
Hinzufuegen ('FC30');
Hinzufuegen ('HC60');
Hinzufuegen ('HC120');
Hinzufuegen ('HC120+');
Hinzufuegen ('HC2640');


	   
	
}else{



Hinzufuegen ('Please Select');
Hinzufuegen ('FC15');
Hinzufuegen ('FC30');
Hinzufuegen ('HC60');
Hinzufuegen ('HC120');
Hinzufuegen ('HC120+');
Hinzufuegen ('HC2640');

}
	
}  	    
hartzsys_tst=document.getElementById('sel1').value;



if(hartzsys!=hartzsys_tst){
	
if(liner_tst=="DrainPlusLiner 2.0"){
	DPL_2_0_alert();
}


	hartzsys=hartzsys_tst;
	harz_sys_val=hartzsys_tst;
neues_harzsystem(hartzsys_tst);	
}


if(liner_tst=="DrainPlusLiner PUR"){
				if(document.getElementById('sel').value=="metric"){
	document.getElementsByName('durchmesser_seitenanschluss')[0].value='3';
}else if(document.getElementById('sel').value=="imperial"){
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='3';
}
}

if(liner_tst=="DrainPlusLiner 2.0"){
				if(document.getElementById('sel').value=="metric"){
	document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
}else if(document.getElementById('sel').value=="imperial"){
		document.getElementsByName('durchmesser_seitenanschluss')[0].value='4.5';
}
	
	if(hartzsys_tst!='HC120+'){
		
				hartzsys_tst='HC120+';
		harz_sys_val=hartzsys_tst;
		document.getElementById('a_wert_li').innerHTML=liner_tst;
	
		document.getElementById("sel1").selectedIndex = "5";
		neues_harzsystem(hartzsys_tst);	

		
			
	}

	
}
	
	
i=i+1;
durchmesser_hauptkanal_l=document.mth_liner_basic_calc.durchmesser_hauptkanal.value.length;
durchmesser_seitenanschluss_l=document.mth_liner_basic_calc.durchmesser_seitenanschluss.value.length;
sanierungslaenge_seitenanschluss_l=document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value.length;
if(durchmesser_hauptkanal_l>0&&durchmesser_seitenanschluss_l>0&&sanierungslaenge_seitenanschluss_l>0&&document.getElementById('a_wert_h').innerHTML!='Please Select'){
	berechnen_go=true;
	$("#berechnen").css({"color":'#ffffff'});

	
}else{
	berechnen_go=false;

	$("#berechnen").css({"color":'#999999'});
}

dm_hk_val=document.mth_liner_basic_calc.durchmesser_hauptkanal.value;
dm_sa_val=document.mth_liner_basic_calc.durchmesser_seitenanschluss.value;
snl_sa_val=document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value;

vtc='<br>This is not a valid value! <br>Please enter a valid number.';
	
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
 
 