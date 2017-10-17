//Dichtetabelle-------------------------------------------------------

dichtetabelle = new Array();


dichtetabelle['FC15'] = new Array();
dichtetabelle['FC15']['dichte_a']=1.15;
dichtetabelle['FC15']['dichte_b']=1.1;
dichtetabelle['FC15']['dichte_gem']=1.137174721;
dichtetabelle['FC15']['anteil_a_gew']=100;
dichtetabelle['FC15']['anteil_b_gew']=33;
dichtetabelle['FC15']['anteil_ges']=133;

dichtetabelle['FC30'] = new Array();
dichtetabelle['FC30']['dichte_a']=1.15;
dichtetabelle['FC30']['dichte_b']=1.1;
dichtetabelle['FC30']['dichte_gem']=1.137174721;
dichtetabelle['FC30']['anteil_a_gew']=100;
dichtetabelle['FC30']['anteil_b_gew']=33;
dichtetabelle['FC30']['anteil_ges']=133;

dichtetabelle['HC60'] = new Array();
dichtetabelle['HC60']['dichte_a']=1.16;
dichtetabelle['HC60']['dichte_b']=0.95;
dichtetabelle['HC60']['dichte_gem']=1.099684874;
dichtetabelle['HC60']['anteil_a_gew']=100;
dichtetabelle['HC60']['anteil_b_gew']=33;
dichtetabelle['HC60']['anteil_ges']=133;

dichtetabelle['HC120'] = new Array();
dichtetabelle['HC120']['dichte_a']=1.15;
dichtetabelle['HC120']['dichte_b']=0.96;
dichtetabelle['HC120']['dichte_gem']=1.096170213;
dichtetabelle['HC120']['anteil_a_gew']=100;
dichtetabelle['HC120']['anteil_b_gew']=33;
dichtetabelle['HC120']['anteil_ges']=133;

dichtetabelle['HC120+'] = new Array();
dichtetabelle['HC120+']['dichte_a']=1.23;
dichtetabelle['HC120+']['dichte_b']=0.98;
dichtetabelle['HC120+']['dichte_gem']=1.1616160119;
dichtetabelle['HC120+']['anteil_a_gew']=100;
dichtetabelle['HC120+']['anteil_b_gew']=30;
dichtetabelle['HC120+']['anteil_ges']=130;

dichtetabelle['HC2640'] = new Array();
dichtetabelle['HC2640']['dichte_a']=1.15;
dichtetabelle['HC2640']['dichte_b']=0.97;
dichtetabelle['HC2640']['dichte_gem']=1.130921659;
dichtetabelle['HC2640']['anteil_a_gew']=100;
dichtetabelle['HC2640']['anteil_b_gew']=10;
dichtetabelle['HC2640']['anteil_ges']=110;

 //Dichtetabelle-------------------------------------------------------
 
 
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


