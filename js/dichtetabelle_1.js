//Dichtetabelle-------------------------------------------------------

dichtetabelle = new Array();


dichtetabelle['Trelleborg Epoxy FC15'] = new Array();
dichtetabelle['Trelleborg Epoxy FC15']['dichte_a']=1.15;
dichtetabelle['Trelleborg Epoxy FC15']['dichte_b']=1.1;
dichtetabelle['Trelleborg Epoxy FC15']['dichte_gem']=1.137174721;
dichtetabelle['Trelleborg Epoxy FC15']['anteil_a_gew']=100;
dichtetabelle['Trelleborg Epoxy FC15']['anteil_b_gew']=33;
dichtetabelle['Trelleborg Epoxy FC15']['anteil_ges']=133;
dichtetabelle['Trelleborg Epoxy FC15']['harz_sys_dichte']=1;


dichtetabelle['Trelleborg Epoxy FC30'] = new Array();
dichtetabelle['Trelleborg Epoxy FC30']['dichte_a']=1.15;
dichtetabelle['Trelleborg Epoxy FC30']['dichte_b']=1.1;
dichtetabelle['Trelleborg Epoxy FC30']['dichte_gem']=1.137174721;
dichtetabelle['Trelleborg Epoxy FC30']['anteil_a_gew']=100;
dichtetabelle['Trelleborg Epoxy FC30']['anteil_b_gew']=33;
dichtetabelle['Trelleborg Epoxy FC30']['anteil_ges']=133;
dichtetabelle['Trelleborg Epoxy FC30']['harz_sys_dichte']=1;

dichtetabelle['Trelleborg Epoxy HC60'] = new Array();
dichtetabelle['Trelleborg Epoxy HC60']['dichte_a']=1.16;
dichtetabelle['Trelleborg Epoxy HC60']['dichte_b']=0.95;
dichtetabelle['Trelleborg Epoxy HC60']['dichte_gem']=1.099684874;
dichtetabelle['Trelleborg Epoxy HC60']['anteil_a_gew']=100;
dichtetabelle['Trelleborg Epoxy HC60']['anteil_b_gew']=33;
dichtetabelle['Trelleborg Epoxy HC60']['anteil_ges']=133;
dichtetabelle['Trelleborg Epoxy HC60']['harz_sys_dichte']=1;

dichtetabelle['Trelleborg Epoxy HC120'] = new Array();
dichtetabelle['Trelleborg Epoxy HC120']['dichte_a']=1.15;
dichtetabelle['Trelleborg Epoxy HC120']['dichte_b']=0.96;
dichtetabelle['Trelleborg Epoxy HC120']['dichte_gem']=1.096170213;
dichtetabelle['Trelleborg Epoxy HC120']['anteil_a_gew']=100;
dichtetabelle['Trelleborg Epoxy HC120']['anteil_b_gew']=33;
dichtetabelle['Trelleborg Epoxy HC120']['anteil_ges']=133;
dichtetabelle['Trelleborg Epoxy HC120']['harz_sys_dichte']=1;

dichtetabelle['Trelleborg Epoxy HC120+'] = new Array();
dichtetabelle['Trelleborg Epoxy HC120+']['dichte_a']=1.23;
dichtetabelle['Trelleborg Epoxy HC120+']['dichte_b']=0.98;
dichtetabelle['Trelleborg Epoxy HC120+']['dichte_gem']=1.1616160119;
dichtetabelle['Trelleborg Epoxy HC120+']['anteil_a_gew']=100;
dichtetabelle['Trelleborg Epoxy HC120+']['anteil_b_gew']=30;
dichtetabelle['Trelleborg Epoxy HC120+']['anteil_ges']=130;
dichtetabelle['Trelleborg Epoxy HC120+']['harz_sys_dichte']=1;

dichtetabelle['Trelleborg Epoxy HC2640'] = new Array();
dichtetabelle['Trelleborg Epoxy HC2640']['dichte_a']=1.15;
dichtetabelle['Trelleborg Epoxy HC2640']['dichte_b']=0.97;
dichtetabelle['Trelleborg Epoxy HC2640']['dichte_gem']=1.130921659;
dichtetabelle['Trelleborg Epoxy HC2640']['anteil_a_gew']=100;
dichtetabelle['Trelleborg Epoxy HC2640']['anteil_b_gew']=10;
dichtetabelle['Trelleborg Epoxy HC2640']['anteil_ges']=110;
dichtetabelle['Trelleborg Epoxy HC2640']['harz_sys_dichte']=1;




/* LCR 24.4.2019-----------------------------------------------*/
dichtetabelle['Trelleborg Harz Typ W'] = new Array();
dichtetabelle['Trelleborg Harz Typ W']['dichte_a']=1.25;
dichtetabelle['Trelleborg Harz Typ W']['dichte_b']=1.54;
dichtetabelle['Trelleborg Harz Typ W']['dichte_gem']=0;
dichtetabelle['Trelleborg Harz Typ W']['anteil_a_gew']=0;
dichtetabelle['Trelleborg Harz Typ W']['anteil_b_gew']=0;
dichtetabelle['Trelleborg Harz Typ W']['anteil_ges']=0;
dichtetabelle['Trelleborg Harz Typ W']['harz_sys_dichte']=1.25;

dichtetabelle['Trelleborg Harz Typ S'] = new Array();
dichtetabelle['Trelleborg Harz Typ S']['dichte_a']=1.25;
dichtetabelle['Trelleborg Harz Typ S']['dichte_b']=1.54;
dichtetabelle['Trelleborg Harz Typ S']['dichte_gem']=0;
dichtetabelle['Trelleborg Harz Typ S']['anteil_a_gew']=0;
dichtetabelle['Trelleborg Harz Typ S']['anteil_b_gew']=0;
dichtetabelle['Trelleborg Harz Typ S']['anteil_ges']=0;
dichtetabelle['Trelleborg Harz Typ S']['harz_sys_dichte']=1.25;

dichtetabelle['Trelleborg Harz Beschleuniger'] = new Array();
dichtetabelle['Trelleborg Harz Beschleuniger']['dichte_a']=1.2;
dichtetabelle['Trelleborg Harz Beschleuniger']['dichte_b']=1.54;
dichtetabelle['Trelleborg Harz Beschleuniger']['dichte_gem']=0;
dichtetabelle['Trelleborg Harz Beschleuniger']['anteil_a_gew']=0;
dichtetabelle['Trelleborg Harz Beschleuniger']['anteil_b_gew']=0;
dichtetabelle['Trelleborg Harz Beschleuniger']['anteil_ges']=0;
dichtetabelle['Trelleborg Harz Beschleuniger']['harz_sys_dichte']=1.2;



 //Dichtetabelle-------------------------------------------------------
 
 
 
 harz_sys_dichte=1.25;
 
 
 
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


