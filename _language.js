en=false;
if(window.location.href.indexOf('siteguide-en')>=0){
en=true;		
} else {
	//deutsch
url_beg='';	
}









	


lang_einh_metrisch='Metrisch';
lang_einh_imperial='Imperial';
z_inc_bestellformular= 'z_inc_bestellformular.html';

Bitte_wählen_str="Bitte wählen";

if(en){
dp_harze_index=1;	
lang_einh_metrisch='metric';
lang_einh_imperial='imperial';
z_inc_bestellformular= '../z_inc_bestellformular.html';	
Bitte_wählen_str="Please Select";
}
//var en_EN = new Array();
var sprache_global = {
	'Harzmengenberechnung':'Quantity calculation',
	'für Trelleborg Epoxidharz-Systeme':'for Trelleborg Epoxy Resin systems',
	'Einheiten':'Units',
	'Einheit':'Unit',
	'Bitte wählen':'Please Select',
	'Linertyp':'Liner type',
	'Liner / Hat-Profiltyp':'Liner / Hat Profile type',
	'Harzsystem':'Resin system',
	'Durchmesser':'Diameter',
	'Wandstärke':'Wall thickness',
	'Länge':'Length',
	'Berechnen':'calculate',
	'Sanierungslänge Seitenanschluss':'Rehabilitation length lateral pipe',
	'Metrisch':'metric',
    'Imperial':'imperial',
	'für Trelleborg MtH Liner':'for Trelleborg MtH Liner',
	'Resultierende Gesamtmenge an Harz':'Resultant total amount of resin',
	'Harzgemisch Total':'Resin mixture Total',
	'Volumen':'Volume',
	'Harz':'Resin',
	'Härter':'Hardener',
	'Komponente':'Component', 
	'WICHTIG':'IMPORTANT',
	'Bitte beachten Sie das Datenblatt des verwendeten Liners sowie des verwendeten Harzsystems':'Please read the technical data sheets for the liner and resin system in use!',
	'Zurück zur Eingabe':'Back to entry',
	'Gewicht':'Weight',
	'Ihre Eingaben':'Your entries',
	'für LCR-B / LCR-S Hutmanschetten und Liner (Vakuum)':'for LCR-B, LCR-S and LCR vacuum',
	'Hutmanschette/Reparaturlänge':'Repair length lateral pipe',
	'Seitenanschluss DN':'Lateral Pipe diameter',
	'Harzsystem':'Resin system',
	'für das Trelleborg Kurzliner Verfahren':'Trelleborg Sectional Pipe Repair',
	'Ihre Zuschnitte':'Calculation results',
	'Resultierendes Gesamtvolumen':'Resulting total',
	'Wasserglas':'waterglass',
	'Glasfasergewebematte CRF':'CRF Fibre glass mat types',
	'Komponenten anfragen':'Request components',

	'Bestellformular':'Order form',
	'Schematische Ansicht':'Schematic view',
	'Länge der Zusatzlagen (Optional)':'Length of additional layers (optional)',
	'Empfohlene Gesamtlagen 3 (davon min. 1 Zusatzlage)':'Required layers (total) 3 ( 1 included additional layers )',
	'Zusatzlagen':'Additional layers',
	
	'Rohrdurchmesser':'Pipe diameter',
	'Reparaturlänge':'Repair length ',
	'Hutmanschette / Reparaturlänge':'Repair length lateral pipe',
	'Hauptkanal':'Main pipe',
	'Hauptrohr':'Main pipe',
	'für LCR-B / LCR-S Hutmanschetten und Liner (Vakuum)':'LCR Lateral Connection <span>for LCR-B, LCR-S and LCR vacuum',
	
	'Durchmesser Seitenanschluss':'Diameter lateral pipe',
	'Sanierungsl&auml;nge Seitenanschluss':'Rehabilitation length lateral pipe',
	'Durchmesser Hauptkanal':'Diameter main pipe',
	'DN Hauptkanal':'Diameter Main Pipe',
	'DN Seitenanschluss':'Diameter Lateral connection pipe',
	'Sanierungsl. Seitenanschluss':'Rehabilitation length LCP',
	'Bitte beachten Sie das Datenblatt des verwendeten MtH-Liners sowie des verwendeten Harzsystems!':'Please read the technical data sheets for the MtH-liner and resin systems in use!',
	'<br>Dies ist kein gültiger Wert! <br>Bitte geben Sie eine gültige Zahl ein.':'<br>This is not a valid value! <br>Please enter a valid number.',
	'Liter':'liter',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'Vorname':'First name',
	'Nachname':'Last name',
	'Firma':'Company',
	'Haben Sie eine Kundennummer?':'Do you have a customer number?',
	'Nein':'Yes',
	'Ja':'No',
	'Kundennummer':'Customer number',
	'Straße':'Street',
	'Nr.':'No.',
	'PLZ':'ZIP',
	'Ort':'City',
	'Land':'Country',
	'Telefon':'Phone',
	'E-Mail':'Email',
	'Nachricht':'Message',
	'Absenden':'Submit',
	'Ihre Anfrage wurde erfolgreich versendet.':'Your request has been sent successfully.',
	'Vielen Dank für Ihre Anfrage.':'Thank you for your Request.',
	'Wir werden uns schnellstmöglich bei Ihnen melden.':'We will contact you as soon as possible.',
	'Es ist ein Fehler aufgetreten.':'An error has occurred.',
	'Bitte versuchen Sie es später erneut.':'Please try again later.',
	'Wählen Sie den Durchmesser des Seitenanschluss aus.':'Select the Lateral Pipe diameter.',
	'Wählen Sie den Durchmesser der Hausanschlussleitung aus.':'Select the Main Pipe diameter.',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'':'',
	'Bei Abnahme über 200kg ist auch Fassware erhältich.':'For orders over 200kg please ask for Drum.',
	'Vielen Dank für Ihre Anfrage.<span style="display:block;">Wir werden uns schnellstmöglich bei Ihnen melden.</span>':'Thank you for your Request. <span style="display:block;">We will contact you as soon as possible.</span>',
	'Es ist ein Fehler aufgetreten.<span style="display:block;"> Bitte versuchen Sie es später erneut.</span>':'An error has occurred. <span style="display:block;"> Please try again later. </span>'
};

   

//console.log(sprache_global['Harzmengenberechnung'])


 
function uebersetzen(str){
	
	ubers=sprache_global[str];
	if(ubers != undefined){
	return ubers;
	}else{
	return str;	
		
	}
};
function innerHTML_lang(str){
	/*
		console.log(str);
	console.log(sprache_global[str]);
	*/
	if(en){
	
	ubers=sprache_global[str];

	if(ubers != undefined){
	return ubers;
	}else{
	return str;	
		
	}
	} else {
	//deutsch
return str;	
}
	
}


$(document).ready(function(e) {
if(en){
	//console.log(z_inc_bestellformular);
  $.ajax({url: z_inc_bestellformular,type: 'POST',dataType: 'html',async: false, success: function(result){
  //console.log(result);
   $('.dp_bestellform').html(result);
	$('#bst_script').html('<script type="text/javascript" src="../js/bestell_formular_script.js?v='+random_nr+'"></script>');
	
console.log('englisch');	
$( "bdo,.wert_select, #a_label, option, .a_wert_anz" ).each(function( index ) {

	t=$( this ).text();
	//console.log('englisch:' +t);	
	$( this ).html(uebersetzen( t ) );

	

});
 }});
}else{
  $.ajax({url: z_inc_bestellformular,type: 'POST', success: function(result){
  // console.log(result);
   $('.dp_bestellform').html(result);

		
$('#bst_script').html('<script type="text/javascript" src="js/bestell_formular_script.js?v='+random_nr+'"></script>');
  }});	
	
}
	
			
 });