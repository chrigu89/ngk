$(window).load(function () {
    calc = true;
})
masse = 'Metrisch';
resign_type='HC120A';
hardener_type='HC120B';

//parent.seite_aktivieren('menu_weg');
dm_hk_mass = document.getElementsByClassName('dm_hk')[0].getElementsByClassName('mass')[0];

dm_sa_mass = document.getElementsByClassName('dm_sa')[0].getElementsByClassName('mass')[0];

snl_sa_mass = document.getElementsByClassName('snl_sa')[0].getElementsByClassName('mass')[0];
dm_hk_val = '';
dm_sa_val = '';
snl_sa_val = '';
berechnen_go = false;

dichte_a = 0;
dichte_b = 0;
dichte_gem = 0;
anteil_a_gew = 0;
anteil_b_gew = 0;
harzsystem_name = 'Trelleborg Epoxy HC120';
masssystem=lang_einh_metrisch;

function ergebnisse_berechnen(e) {
    if (berechnen_go) {
        berechnen_go = false;

        document.getElementById('aa1').innerHTML = '<nobr>' + dm_hk_val + ' <span class="w30 ' + masse + '">' + dm_hk_mass.innerHTML + '</span></nobr>';
        document.getElementById('aa2').innerHTML = '<nobr>' + dm_sa_val + ' <span class="w30 ' + masse + '">' + dm_sa_mass.innerHTML + '</span></nobr>';
        document.getElementById('aa3').innerHTML = '<nobr>' + snl_sa_val + ' <span class="w30 ' + masse + '">' + snl_sa_mass.innerHTML + '</span></nobr>';

        erg_berechnet();

    }

}
volumen = 0;

function erg_berechnet() {

   dm_hk_val = koma_ers(dm_hk_val);
        dm_sa_val = koma_ers(dm_sa_val);
        snl_sa_val = koma_ers(snl_sa_val);
		

    pi = 3.14159;

    if (masse == 'imperial') {
		/*
        dm_hk_val = masse_umrechnen.in_zu_mm(dm_hk_val).toFixed(2);
        dm_sa_val = masse_umrechnen.in_zu_mm(dm_sa_val).toFixed(2);
        snl_sa_val = masse_umrechnen.ft_zu_m(snl_sa_val).toFixed(2);
   */
    dm_hk_val1000 = (masse_umrechnen.in_zu_mm(dm_hk_val).toFixed(2) / 1000);
    dm_sa_val1000 = (masse_umrechnen.in_zu_mm(dm_sa_val).toFixed(2) / 1000);

	volumen1 = (3.4 * dm_hk_val1000 * 3 * 0.5);
	volumen2 = (pi * dm_sa_val1000 * 3 * masse_umrechnen.ft_zu_m(snl_sa_val).toFixed(2));
	

    	ges_volumen = (volumen1 + volumen2) * 1.1;
	

    ges_gewicht = ges_volumen * dichtetabelle[harzsystem_name]['dichte_gem'];

   gew_harz = ges_gewicht / dichtetabelle[harzsystem_name]['anteil_ges'] * dichtetabelle[harzsystem_name]['anteil_a_gew'];
    gew_haerter = ges_gewicht / dichtetabelle[harzsystem_name]['anteil_ges'] * dichtetabelle[harzsystem_name]['anteil_b_gew'];

    vol_harz = gew_harz / dichtetabelle[harzsystem_name]['dichte_a'];
    vol_haerter = gew_haerter / dichtetabelle[harzsystem_name]['dichte_b'];
	
	$(".kompnente_a").html(harzsystem_name+ ' A');
$(".kompnente_b").html(harzsystem_name+ ' B');
    
        document.getElementById('liter').innerHTML = masse_umrechnen.liter_zu_gallon(ges_volumen).toFixed(2);
        document.getElementById('gewicht').innerHTML = masse_umrechnen.kg_zu_lbs(ges_gewicht).toFixed(2);

        document.getElementById('harz_l').innerHTML = masse_umrechnen.liter_zu_gallon(vol_harz).toFixed(2);
        document.getElementById('haerter_l').innerHTML = masse_umrechnen.liter_zu_gallon((ges_volumen - vol_harz)).toFixed(2);

      
		
		
				if (masse == 'imperial' || masse == 'Imperial') {
			
		$(".harz_gew_td").html(gew_harz.toFixed(2)+' kg<br>('+masse_umrechnen.kg_zu_lbs(gew_harz).toFixed(2)+' lbs)');
$(".haerter_gew_td").html((ges_gewicht-gew_harz).toFixed(2)+' kg<br>('+masse_umrechnen.kg_zu_lbs((ges_gewicht-gew_harz)).toFixed(2)+' lbs)');
	
			
		}else{
		   document.getElementById('harz_gew').innerHTML = gew_harz.toFixed(2);
        document.getElementById('haerter_gew').innerHTML = (ges_gewicht - gew_harz).toFixed(2);	
		}
		
		
		
		
		
    } else {
		
		   dm_hk_val1000 = (dm_hk_val / 1000);
    dm_sa_val1000 = (dm_sa_val / 1000);

	volumen1 = (3.4 * dm_hk_val1000 * 3 * 0.5);
	volumen2 = (pi * dm_sa_val1000 * 3 * snl_sa_val);
	

    	ges_volumen = (volumen1 + volumen2) * 1.1;
	

    ges_gewicht = ges_volumen * dichtetabelle[harzsystem_name]['dichte_gem'];

    gew_harz = ges_gewicht / dichtetabelle[harzsystem_name]['anteil_ges'] * dichtetabelle[harzsystem_name]['anteil_a_gew'];
    gew_haerter = ges_gewicht / dichtetabelle[harzsystem_name]['anteil_ges'] * dichtetabelle[harzsystem_name]['anteil_b_gew'];

    vol_harz = gew_harz / dichtetabelle[harzsystem_name]['dichte_a'];
    vol_haerter = gew_haerter / dichtetabelle[harzsystem_name]['dichte_b'];
		
		
			$(".kompnente_a").html(harzsystem_name+ ' A');
$(".kompnente_b").html(harzsystem_name+ ' B');
		
		
        document.getElementById('liter').innerHTML = ges_volumen.toFixed(2);
        document.getElementById('gewicht').innerHTML = ges_gewicht.toFixed(2);

        document.getElementById('harz_l').innerHTML = vol_harz.toFixed(2);
        document.getElementById('haerter_l').innerHTML = (ges_volumen - vol_harz).toFixed(2);

        document.getElementById('harz_gew').innerHTML = gew_harz.toFixed(2);
        document.getElementById('haerter_gew').innerHTML = (ges_gewicht - gew_harz).toFixed(2);
		
		if (masse == 'imperial' || masse == 'Imperial') {
			
		$(".harz_gew_td").html(gew_harz.toFixed(2)+' kg<br>('+masse_umrechnen.kg_zu_lbs(gew_harz).toFixed(2)+' lbs)');
$(".haerter_gew_td").html((ges_gewicht-gew_harz).toFixed(2)+' kg<br>('+masse_umrechnen.kg_zu_lbs((ges_gewicht-gew_harz)).toFixed(2)+' lbs)');
	
			
		}else{
		   document.getElementById('harz_gew').innerHTML = gew_harz.toFixed(2);
        document.getElementById('haerter_gew').innerHTML = (ges_gewicht - gew_harz).toFixed(2);	
		}
		

    }

    //alert('dm_hk_val1000 '+dm_hk_val1000+' dm_sa_val1000 '+dm_sa_val1000+' snl_sa_val '+snl_sa_val);


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







function neue_masse_ausgewaehlt(val) {

    if (val == "Metrisch") {

        document.getElementById('a_wert').innerHTML = lang_einh_metrisch;

        dm_hk_mass.innerHTML = 'mm';
        dm_sa_mass.innerHTML = 'mm';
        snl_sa_mass.innerHTML = 'm';
        $(".w30_gew,.w30_vol").css({
            'width': 33
        });

    } else if (val == "imperial") {
        document.getElementById('a_wert').innerHTML = lang_einh_imperial;
        dm_hk_mass.innerHTML = 'in';
        dm_sa_mass.innerHTML = 'in';
        snl_sa_mass.innerHTML = 'ft';


        $(".w30_gew,.w30_vol").css({
            'width': 'auto'
        });

    }

    for (var i = 0; i <= 2; i++) {
        //ausgabe.innerHTML =' '+i;
        if (val == "Metrisch") {
            document.getElementsByClassName('w30_gew')[i].innerHTML = "Kg";
            document.getElementsByClassName('w30_vol')[i].innerHTML = "Liter";
        } else if (val == "imperial") {
            document.getElementsByClassName('w30_gew')[i].innerHTML = "lbs";
            document.getElementsByClassName('w30_vol')[i].innerHTML = "gallons"
        }


    }

}




function neues_harzsystem(val) {


    if (val == "FC15") {
			resign_type='FC15A';
	hardener_type='FC15B';
        document.getElementById('a_wert_h').innerHTML = "FC15";
		harzsystem_name = "FC15";
        dichte_a = 1.15;
        dichte_b = 1.1;
        dichte_gem = 1.137174721;
        anteil_a_gew = 100;
        anteil_b_gew = 33;
    } else if (val == "FC30") {
		resign_type='FC30A';
	hardener_type='FC30B';
        document.getElementById('a_wert_h').innerHTML = "FC30";
		harzsystem_name = "FC30";
        dichte_a = 1.15;
        dichte_b = 1.1;
        dichte_gem = 1.137174721;
        anteil_a_gew = 100;
        anteil_b_gew = 33;
    } else if (val == "HC60") {
			resign_type='HC60A';
	hardener_type='HC60B';
        document.getElementById('a_wert_h').innerHTML = "HC60";
		harzsystem_name = "HC60";
        dichte_a = 1.16;
        dichte_b = 0.96;
        dichte_gem = 1.099684874;
        anteil_a_gew = 100;
        anteil_b_gew = 33;
    } else if (val == "HC120") {
		resign_type='HC120A';
	hardener_type='HC120B';
        document.getElementById('a_wert_h').innerHTML = "HC120";
		harzsystem_name = "HC120";
        dichte_a = 1.15;
        dichte_b = 0.96;1,
        dichte_gem = 1.096170213;
        anteil_a_gew = 100;
        anteil_b_gew = 33;
    } else if (val == "HC120+") {
		resign_type='HC120Ap';
	hardener_type='HC120Bp';
        document.getElementById('a_wert_h').innerHTML = "HC120+";
		harzsystem_name = "HC120+";
        dichte_a = 1.23;
        dichte_b = 0.98;
        dichte_gem = 1.1616160119;
        anteil_a_gew = 100;
        anteil_b_gew = 30;
    }else if (val == "HC2640") {
		resign_type='HC2640A';
	hardener_type='HC2640B';
        document.getElementById('a_wert_h').innerHTML = "HC2640";
		harzsystem_name=  "HC2640";
        dichte_a = 1.15;
        dichte_b = 0.97;
        dichte_gem = 1.130921659;
        anteil_a_gew = 100;
        anteil_b_gew = 10;
    }
}




//listener-------------------------------------------------
i = 0;
masse = document.getElementById('sel').value;
hartz_sys = document.getElementById('sel2').value;
//hartzsys=document.getElementById('sel1').value;
function selekt_change() {

	masse_tst = document.getElementById('sel').value;
	if (masse != masse_tst) {
		masse = masse_tst;
		neue_masse_ausgewaehlt(masse_tst);
	}
	hartz_sys_tst = document.getElementById('sel2').value;
	if (hartz_sys != hartz_sys_tst) {
		hartz_sys = hartz_sys_tst;
		document.getElementById('a_wert_h').innerHTML = hartz_sys;
		harzsystem_name = hartz_sys
	}

    i = i + 1;
    durchmesser_hauptkanal_l = document.mth_liner_basic_calc.durchmesser_hauptkanal.value.length;
    durchmesser_seitenanschluss_l = document.mth_liner_basic_calc.durchmesser_seitenanschluss.value.length;
    sanierungslaenge_seitenanschluss_l = document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value.length;

    if (durchmesser_hauptkanal_l > 0 && durchmesser_seitenanschluss_l > 0 && sanierungslaenge_seitenanschluss_l > 0) {
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

    dm_hk_val = document.mth_liner_basic_calc.durchmesser_hauptkanal.value;
    dm_sa_val = document.mth_liner_basic_calc.durchmesser_seitenanschluss.value;
    snl_sa_val = document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value;

	
	
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
    if (isNaN(document.mth_liner_basic_calc.durchmesser_hauptkanal.value)) {
        document.mth_liner_basic_calc.durchmesser_hauptkanal.value = '';
    }
    if (isNaN(document.mth_liner_basic_calc.durchmesser_seitenanschluss.value)) {
        document.mth_liner_basic_calc.durchmesser_seitenanschluss.value = '';
    }
    if (isNaN(document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value)) {
        document.mth_liner_basic_calc.sanierungslaenge_seitenanschluss.value = '';
    }
	*/
    //$( "#topbar_unters" ).html('uuuuuuuu'+i);

    aktiv = window.setTimeout("selekt_change()", 100);

}


selekt_change();

//listener-------------------------------------------------




var inputFocus = {

    elements: ['input'],
    setup: function () {
        for (j = 0; j < inputFocus.elements.length + 1; j++) {


            for (i = 0; i < document.getElementsByTagName(inputFocus.elements[j]).length; i++) {

                var el = document.getElementsByTagName(inputFocus.elements[j])[i];

                if (navigator.userAgent.indexOf("Firefox") != -1) {
                    el.onfocus = inputFocus._focus;
                    el.onblur = inputFocus._blur;
                    el.onmousemove = inputFocus.touchmove;
                } else {
                    /*
	el.ontouchstart = inputFocus.touchstart;
	el.ontouchend = inputFocus.touchend; 
	el.ontouchmove = inputFocus.touchmove;
	*/
                }
            }
        }
    },

    _focus: function () {

        $(this).parent(".eing_mth").addClass("input_focus");


    },
    _blur: function (event) {
        //event.preventDefault();
        $(this).parent(".eing_mth").removeClass("input_focus");

    },
    touchend: function () {


    }
}
inputFocus.setup();




$(document).ready(function (e) {


    //$(".content").css({"min-height":700});
    //$(".werte_ergebnisse").css({"borrom":0});
    //$(".werte_eingaben").css({"borrom":0});	


});
 