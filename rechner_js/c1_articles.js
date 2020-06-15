
function article_lang(str_de, str_en){
	if(en){
	return str_en;
} else {
	//deutsch
return str_de;
}
		
}

dp_harze_index=0;
	if(en){
dp_harze_index=1;
} else {
	//deutsch
dp_harze_index=0;
}


/*
C1_drainpacker_verfahren.html
-------------------------------------------------------------------------
*/

var dp_harze = {
	W1:['Trelleborg Harz Typ W','Trelleborg Resin Type W' ],
	S1:['Trelleborg Harz Typ S','Trelleborg Resin Type S' ],
	W01:['Trelleborg Harz Beschleuniger','Trelleborg Resin Accelerator' ],
	L30E1:['Trelleborg Harz Typ L30E1', 'Trelleborg Resin L30E1'],
	L30E3:['Trelleborg Harz Typ L30E3', 'Trelelborg Resin L30E3'],
	FC15A:['Trelleborg Epoxy FC15','Trelleborg Epoxy FC15' ],

	FC30A:['Trelleborg Epoxy FC30','Trelleborg Epoxy FC30' ],

	HC60A:['Trelleborg Epoxy HC60','Trelleborg Epoxy HC60' ],

	HC120A:['Trelleborg Epoxy HC120', 'Trelleborg Epoxy HC120'],

	HC120Ap:['Trelleborg Epoxy 120+', 'Trelleborg Epoxy 120+'],

	HC2640A:['Trelleborg Epoxy HC2640', 'Trelleborg Epoxy HC2640'],

	
};
  
/*
-------------------------------------------------------------------------
*/

/*
c1_resign_amount.html
-------------------------------------------------------------------------
*/
  
/*
var dp_harze = {
	FC15A:['Trelleborg Epoxy FC15','Trelleborg Epoxy FC15' ],
	FC30A:['Trelleborg Epoxy FC30','Trelleborg Epoxy FC30' ],
	HC60A:['Trelleborg Epoxy HC60','Trelleborg Epoxy HC60' ],
	HC120:['Trelleborg Epoxy HC120', 'Trelleborg Epoxy HC120'],
	HC120p:['Trelleborg Epoxy 120+', 'Trelleborg Epoxy 120+'],
	HC2640:['Trelleborg Epoxy HC2640', 'Trelleborg Epoxy HC2640'],
	

	
};

-------------------------------------------------------------------------
*/










var hartz_systeme_mengen = new Array();
hartz_systeme_mengen[dp_harze['W1'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['W1'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['W1'][dp_harze_index]][0]['beschr']=article_lang('Trelleborg Harz Typ W | 13kg','Trelleborg Resin Type W | 13kg');
hartz_systeme_mengen[dp_harze['W1'][dp_harze_index]][0]['gewicht']=13;
hartz_systeme_mengen[dp_harze['W1'][dp_harze_index]][0]['art_nr']='234504';
hartz_systeme_mengen[dp_harze['W1'][dp_harze_index]][0]['imperial_lbs']='28,66lbs';

hartz_systeme_mengen[dp_harze['W01'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['W01'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['W01'][dp_harze_index]][0]['beschr']=article_lang('Trelleborg Harz Beschleuniger | 13kg','Trelleborg Resin Accelerator | 13kg ');
hartz_systeme_mengen[dp_harze['W01'][dp_harze_index]][0]['gewicht']=13;
hartz_systeme_mengen[dp_harze['W01'][dp_harze_index]][0]['art_nr']='234505';
hartz_systeme_mengen[dp_harze['W01'][dp_harze_index]][0]['imperial_lbs']='28,66lbs';

hartz_systeme_mengen[dp_harze['S1'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['S1'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['S1'][dp_harze_index]][0]['beschr']=article_lang('Trelleborg Harz Typ S | 13kg','Trelleborg Resin Type S | 13kg');
hartz_systeme_mengen[dp_harze['S1'][dp_harze_index]][0]['gewicht']=13;
hartz_systeme_mengen[dp_harze['S1'][dp_harze_index]][0]['art_nr']='234506';
hartz_systeme_mengen[dp_harze['S1'][dp_harze_index]][0]['imperial_lbs']='28,66lbs';


hartz_systeme_mengen[dp_harze['L30E1'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['L30E1'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['L30E1'][dp_harze_index]][0]['beschr']=article_lang('Trelleborg Harz Typ L30E1 | 26kg','Trelleborg Resin L30E1 | 26kg');
hartz_systeme_mengen[dp_harze['L30E1'][dp_harze_index]][0]['gewicht']=26;
hartz_systeme_mengen[dp_harze['L30E1'][dp_harze_index]][0]['art_nr']='116904';
hartz_systeme_mengen[dp_harze['L30E1'][dp_harze_index]][0]['imperial_lbs']='57,32lbs';

hartz_systeme_mengen[dp_harze['L30E3'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['L30E3'][dp_harze_index]][0] = new Array();


hartz_systeme_mengen['haerter'] = new Array();
hartz_systeme_mengen['haerter'][0] = new Array();
hartz_systeme_mengen['haerter'][0]['beschr']=article_lang('Härter | 16kg','Hardener | 16kg');
hartz_systeme_mengen['haerter'][0]['gewicht']=16;
hartz_systeme_mengen['haerter'][0]['art_nr']='116700';
hartz_systeme_mengen['haerter'][0]['imperial_lbs']='35,27lbs';

/*-------------------------------------------------------*/

/*FC15-------------------------------------------------------*/
hartz_systeme_mengen[dp_harze['FC15A'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['FC15A'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['FC15A'][dp_harze_index]][0]['beschr']=article_lang('EPROPOX FC 15 A Harz: 6kg','EPROPOX FC 15 A Resin: 6kg');
hartz_systeme_mengen[dp_harze['FC15A'][dp_harze_index]][0]['gewicht']=6;
hartz_systeme_mengen[dp_harze['FC15A'][dp_harze_index]][0]['art_nr']='232256';
hartz_systeme_mengen[dp_harze['FC15A'][dp_harze_index]][0]['imperial_lbs']='13,23lbs';

hartz_systeme_mengen['FC15B'] = new Array();
hartz_systeme_mengen['FC15B'][0] = new Array();
hartz_systeme_mengen['FC15B'][0]['beschr']=article_lang('EPROPOX FC 15 B Härter: 2kg', 'EPROPOX FC 15 B Hardener: 2kg');
hartz_systeme_mengen['FC15B'][0]['gewicht']=2;
hartz_systeme_mengen['FC15B'][0]['art_nr']='231953';
hartz_systeme_mengen['FC15B'][0]['imperial_lbs']='4,41lbs';

/*FC30-------------------------------------------------------*/


hartz_systeme_mengen[dp_harze['FC30A'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['FC30A'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['FC30A'][dp_harze_index]][0]['beschr']=article_lang('EPROPOX FC 30 / HC120 A Harz: 15kg','EPROPOX FC 30 / HC120 A Resin: 15kg');
hartz_systeme_mengen[dp_harze['FC30A'][dp_harze_index]][0]['gewicht']=15;
hartz_systeme_mengen[dp_harze['FC30A'][dp_harze_index]][0]['art_nr']='231899';
hartz_systeme_mengen[dp_harze['FC30A'][dp_harze_index]][0]['imperial_lbs']='33,10lbs';

hartz_systeme_mengen['FC30B'] = new Array();
hartz_systeme_mengen['FC30B'][0] = new Array();
hartz_systeme_mengen['FC30B'][0]['beschr']=article_lang('FC30B Härter: 4,95kg', 'FC30B B Hardener: 4,95kg');
hartz_systeme_mengen['FC30B'][0]['gewicht']=4.95;
hartz_systeme_mengen['FC30B'][0]['art_nr']='231954';
hartz_systeme_mengen['FC30B'][0]['imperial_lbs']='10,91lbs';


/*FC60-------------------------------------------------------*/


hartz_systeme_mengen[dp_harze['HC60A'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['HC60A'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['HC60A'][dp_harze_index]][0]['beschr']=article_lang('EPROPOX HC60 A Harz: 15kg','EPROPOX HC60 A Resin: 15kg');
hartz_systeme_mengen[dp_harze['HC60A'][dp_harze_index]][0]['gewicht']=15;
hartz_systeme_mengen[dp_harze['HC60A'][dp_harze_index]][0]['art_nr']='231894';
hartz_systeme_mengen[dp_harze['HC60A'][dp_harze_index]][0]['imperial_lbs']='33,10lbs';

hartz_systeme_mengen['HC60B'] = new Array();
hartz_systeme_mengen['HC60B'][0] = new Array();
hartz_systeme_mengen['HC60B'][0]['beschr']=article_lang('EPROPOX HC60 B Härter: 4,95kg','EPROPOX HC60 B Hardener: 4,95kg');
hartz_systeme_mengen['HC60B'][0]['gewicht']=4.95;
hartz_systeme_mengen['HC60B'][0]['art_nr']='231905';
hartz_systeme_mengen['HC60B'][0]['imperial_lbs']='10,91lbs';



/*HC120-------------------------------------------------------*/
hartz_systeme_mengen[dp_harze['HC120A'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['HC120A'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['HC120A'][dp_harze_index]][0]['beschr']=article_lang('EPROPOX FC 30 / HC120 A Harz: 15kg','EPROPOX FC 30 / HC120 A Resin: 15kg');
hartz_systeme_mengen[dp_harze['HC120A'][dp_harze_index]][0]['gewicht']=15;
hartz_systeme_mengen[dp_harze['HC120A'][dp_harze_index]][0]['art_nr']='231899';
hartz_systeme_mengen[dp_harze['HC120A'][dp_harze_index]][0]['imperial_lbs']='33,10lbs';

hartz_systeme_mengen['HC120B'] = new Array();
hartz_systeme_mengen['HC120B'][0] = new Array();
hartz_systeme_mengen['HC120B'][0]['beschr']=article_lang('EPROPOX HC120 B Härter: 4,95kg','EPROPOX HC120 B Hardener: 4,95kg');
hartz_systeme_mengen['HC120B'][0]['gewicht']=4.95;
hartz_systeme_mengen['HC120B'][0]['art_nr']='231900';
hartz_systeme_mengen['HC120B'][0]['imperial_lbs']='10,91lbs';


/*HC120+-------------------------------------------------------*/
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][0]['beschr']=article_lang('EPROPOX HC120(+) A Harz: 16,5kg','EPROPOX HC120(+) A Resin: 16,5kg');
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][0]['gewicht']=16.5;
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][0]['art_nr']='231907';
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][0]['imperial_lbs']='36,38lbs';


hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][1] = new Array();
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][1]['beschr']=article_lang('EPROPOX HC120(+) A Harz: 220kg Fass','EPROPOX HC120(+) A Resin: 220kg Drum');
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][1]['gewicht']=220;
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][1]['art_nr']='231951';
hartz_systeme_mengen[dp_harze['HC120Ap'][dp_harze_index]][1]['imperial_lbs']='485,02lbs';


hartz_systeme_mengen['HC120Bp'] = new Array();
hartz_systeme_mengen['HC120Bp'][0] = new Array();
hartz_systeme_mengen['HC120Bp'][0]['beschr']=article_lang('EPROPOX HC120(+) B Härter: 4,95kg','EPROPOX HC120(+) B Hardener: 4,95kg');
hartz_systeme_mengen['HC120Bp'][0]['gewicht']=4.95;
hartz_systeme_mengen['HC120Bp'][0]['art_nr']='231908';
hartz_systeme_mengen['HC120Bp'][0]['imperial_lbs']='10,91lbs';

hartz_systeme_mengen['HC120Bp'][1] = new Array();
hartz_systeme_mengen['HC120Bp'][1]['beschr']=article_lang('EPROPOX HC120(+) B Härter: 200kg Fass ','EPROPOX HC120(+) B Härter: 200kg Drum');
hartz_systeme_mengen['HC120Bp'][1]['gewicht']=200;
hartz_systeme_mengen['HC120Bp'][1]['art_nr']='231952';
hartz_systeme_mengen['HC120Bp'][1]['imperial_lbs']='440,93lbs';




/*HC2640-------------------------------------------------------*/
hartz_systeme_mengen[dp_harze['HC2640A'][dp_harze_index]] = new Array();
hartz_systeme_mengen[dp_harze['HC2640A'][dp_harze_index]][0] = new Array();
hartz_systeme_mengen[dp_harze['HC2640A'][dp_harze_index]][0]['beschr']=article_lang('EPROPOX HC120 A Harz: 6kg','EPROPOX HC120 A Resin: 6kg');
hartz_systeme_mengen[dp_harze['HC2640A'][dp_harze_index]][0]['gewicht']=6;
hartz_systeme_mengen[dp_harze['HC2640A'][dp_harze_index]][0]['art_nr']='232256';


hartz_systeme_mengen['HC2640B'] = new Array();
hartz_systeme_mengen['HC2640B'][0] = new Array();
hartz_systeme_mengen['HC2640B'][0]['beschr']=article_lang('HC120B Härter: 2kg', 'HC120B B Hardener: 2kg');
hartz_systeme_mengen['HC2640B'][0]['gewicht']=2;
hartz_systeme_mengen['HC2640B'][0]['art_nr']='231953';


/*

console.log('hartz_systeme_mengen: ');

console.log(hartz_systeme_mengen);

*/