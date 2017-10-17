//str_liner_600_dn100='100!4!45°/90°!1.83!61.63!0.61!20.54!1.22!41.09§125!5!45°/90°!2.06!69.39!0.69!23.13!1.37!46.26§150!6!45°/90°!2.27!76.70!0.76!25.57!1.51!51.13§200!8!45°/90°!2.73!92.22!0.91!30.74!1.82!61.48§225!9!45°/90°!2.95!99.53!0.98!33.18!1.97!66.35§250!10!45°/90°!3.18!107.29!1.06!35.76!2.12!71.53§300!12!45°/90°!3.62!122.36!1.21!40.79!2.41!81.57§350!14!45°/90°!4.08!137.87!1.36!45.96!2.72!91.91§400!16!45°/90°!4.53!152.93!1.51!50.98!3.02!101.95§450!18!45°/90°!4.99!168.46!1.66!56.15!3.33!112.31§500!20!45°/90°!5.43!183.52!1.81!61.17!3.62!122.35§550!22!45°/90°!5.88!198.59!1.96!66.20!3.92!132.39§600!24!45°/90°!6.34!214.10!2.11!71.37!4.23!142.73'
;
str_liner_600_dn100='100!4!45°/90°!1.83!61.63!0.61!20.54!1.22!41.09§125!5!45°/90°!2.06!69.39!0.69!23.13!1.37!46.26§150!6!45°/90°!2.27!76.70!0.76!25.57!1.51!51.13§200!8!45°/90°!2.73!92.22!0.91!30.74!1.82!61.48§225!9!45°/90°!2.95!99.53!0.98!33.18!1.97!66.35§250!10!45°/90°!3.18!107.29!1.06!35.76!2.12!71.53§300!12!45°/90°!3.62!122.36!1.21!40.79!2.41!81.57§350!14!45°/90°!4.08!137.87!1.36!45.96!2.72!91.91§400!16!45°/90°!4.53!152.93!1.51!50.98!3.02!101.95§450!18!45°/90°!4.99!168.46!1.66!56.15!3.33!112.31§500!20!45°/90°!5.43!183.52!1.81!61.17!3.62!122.35§550!22!45°/90°!5.88!198.59!1.96!66.20!3.92!132.39§600!24!45°/90°!6.34!214.10!2.11!71.37!4.23!142.73'
;
var liner_hausanschlussleitung_600_dn100_array = new Array();
var tmp_array = new Array();
tmp_array=str_liner_600_dn100.split('§');
for (var i = 0; i <= tmp_array.length-1; i++){
	var tmp_array_l = new Array();
	tmp_array_l=tmp_array[i].split('!');

liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])] = new Array();
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['DN_'] = parseFloat(tmp_array_l[0]);
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['DN__us'] = parseFloat(tmp_array_l[1]);
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['Winkel'] = "'"+tmp_array_l[2]+"'";;
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter'] = parseFloat(tmp_array_l[3]);
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter_us'] = parseFloat(tmp_array_l[4]);
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter'] = parseFloat(tmp_array_l[5]);
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter_us'] = parseFloat(tmp_array_l[6]);
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter'] = parseFloat(tmp_array_l[7]);
liner_hausanschlussleitung_600_dn100_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter_us'] = parseFloat(tmp_array_l[8]);
}


str_liner_600_dn125='125!5!45°/90°!2.25!75.79!0.75!25.26!1.50!50.53§150!6!45°/90°!2.48!83.54!0.83!27.85!1.65!55.69§200!8!45°/90°!2.92!98.61!0.97!32.87!1.95!65.74§225!9!45°/90°!3.15!106.37!1.05!35.46!2.10!70.91§250!10!45°/90°!3.37!113.67!1.12!37.89!2.25!75.78§300!12!45°/90°!3.83!129.20!1.28!43.07!2.55!86.13§350!14!45°/90°!4.27!144.27!1.42!48.09!2.85!96.18§400!16!45°/90°!4.73!159.78!1.58!53.26!3.15!106.52§450!18!45°/90°!5.18!174.84!1.73!58.28!3.45!116.56§500!20!45°/90°!5.62!189.91!1.87!63.30!3.75!126.61§550!22!45°/90°!6.08!205.43!2.03!68.48!4.05!136.95§600!24!45°/90°!6.53!220.50!2.18!73.50!4.35!147.00';
var liner_hausanschlussleitung_600_dn125_array = new Array();
var tmp_array = new Array();
tmp_array=str_liner_600_dn125.split('§');
for (var i = 0; i <= tmp_array.length-1; i++){
	var tmp_array_l = new Array();
	tmp_array_l=tmp_array[i].split('!');

liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])] = new Array();
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['DN_'] = parseFloat(tmp_array_l[0]);
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['DN__us'] = parseFloat(tmp_array_l[1]);
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['Winkel'] = "'"+tmp_array_l[2]+"'";;
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter'] = parseFloat(tmp_array_l[3]);
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter_us'] = parseFloat(tmp_array_l[4]);
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter'] = parseFloat(tmp_array_l[5]);
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter_us'] = parseFloat(tmp_array_l[6]);
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter'] = parseFloat(tmp_array_l[7]);
liner_hausanschlussleitung_600_dn125_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter_us'] = parseFloat(tmp_array_l[8]);
}




str_liner_600_dn150='150!6!45°/90°!2.64!89.02!0.88!29.67!1.76!59.35§200!8!45°/90°!3.10!104.55!1.03!34.85!2.07!69.70§225!9!45°/90°!3.31!111.85!1.10!37.28!2.21!74.57§250!10!45°/90°!3.54!119.61!1.18!39.87!2.36!79.74§300!12!45°/90°!3.99!134.68!1.33!44.89!2.66!89.79§350!14!45°/90°!4.45!150.19!1.48!50.06!2.97!100.13§400!16!45°/90°!4.89!165.26!1.63!55.09!3.26!110.17§450!18!45°/90°!5.34!180.32!1.78!60.11!3.56!120.21§500!20!45°/90°!5.80!195.85!1.93!65.28!3.87!130.57§550!22!45°/90°!6.24!210.92!2.08!70.31!4.16!140.61§600!24!45°/90°!6.69!225.97!2.23!75.32!4.46!150.65';
var liner_hausanschlussleitung_600_dn150_array = new Array();
var tmp_array = new Array();
tmp_array=str_liner_600_dn150.split('§');
for (var i = 0; i <= tmp_array.length-1; i++){
	var tmp_array_l = new Array();
	tmp_array_l=tmp_array[i].split('!');

liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])] = new Array();
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['DN_'] = parseFloat(tmp_array_l[0]);
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['DN__us'] = parseFloat(tmp_array_l[1]);
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['Winkel'] = "'"+tmp_array_l[2]+"'";;
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter'] = parseFloat(tmp_array_l[3]);
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter_us'] = parseFloat(tmp_array_l[4]);
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter'] = parseFloat(tmp_array_l[5]);
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter_us'] = parseFloat(tmp_array_l[6]);
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter'] = parseFloat(tmp_array_l[7]);
liner_hausanschlussleitung_600_dn150_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter_us'] = parseFloat(tmp_array_l[8]);
}













str_liner_600_dn200='200!8!45°/90°!3.49!117.79!1.16!39.26!2.33!78.53§225!9!45°/90°!3.70!125.10!1.23!41.70!2.47!83.40§250!10!45°/90°!3.93!132.84!1.31!44.28!2.62!88.56§300!12!45°/90°!4.38!147.91!1.46!49.30!2.92!98.61§350!14!45°/90°!4.84!163.44!1.61!54.48!3.23!108.96§400!16!45°/90°!5.28!178.50!1.76!59.50!3.52!119.00§450!18!45°/90°!5.74!194.01!1.91!64.67!3.83!129.34§500!20!45°/90°!6.19!209.08!2.06!69.69!4.13!139.39§550!22!45°/90°!6.63!224.15!2.21!74.72!4.42!149.43§600!24!45°/90°!7.09!239.67!2.36!79.89!4.73!159.78';
var liner_hausanschlussleitung_600_dn200_array = new Array();
var tmp_array = new Array();
tmp_array=str_liner_600_dn200.split('§');
for (var i = 0; i <= tmp_array.length-1; i++){
	var tmp_array_l = new Array();
	tmp_array_l=tmp_array[i].split('!');

liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])] = new Array();
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['DN_'] = parseFloat(tmp_array_l[0]);
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['DN__us'] = parseFloat(tmp_array_l[1]);
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['Winkel'] = "'"+tmp_array_l[2]+"'";;
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter'] = parseFloat(tmp_array_l[3]);
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter_us'] = parseFloat(tmp_array_l[4]);
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter'] = parseFloat(tmp_array_l[5]);
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter_us'] = parseFloat(tmp_array_l[6]);
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter'] = parseFloat(tmp_array_l[7]);
liner_hausanschlussleitung_600_dn200_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter_us'] = parseFloat(tmp_array_l[8]);
}





str_liner_600_dn225='225!9!45°/90°!3.91!131.94!1.30!43.98!2.61!87.96§250!10!45°/90°!4.12!139.24!1.37!46.41!2.75!92.83§300!12!45°/90°!4.58!154.76!1.53!51.59!3.05!103.17§350!14!45°/90°!5.03!169.82!1.68!56.61!3.35!113.21§400!16!45°/90°!5.47!184.89!1.82!61.63!3.65!123.26§450!18!45°/90°!5.93!200.41!1.98!66.80!3.95!133.61§500!20!45°/90°!6.38!215.48!2.13!71.83!4.25!143.65§550!22!45°/90°!6.82!230.54!2.27!76.85!4.55!153.69§600!24!45°/90°!7.28!246.06!2.43!82.02!4.85!164.04';
var liner_hausanschlussleitung_600_dn225_array = new Array();
var tmp_array = new Array();
tmp_array=str_liner_600_dn225.split('§');
for (var i = 0; i <= tmp_array.length-1; i++){  
	var tmp_array_l = new Array();
	tmp_array_l=tmp_array[i].split('!');

liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])] = new Array();
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['DN_'] = parseFloat(tmp_array_l[0]);
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['DN__us'] = parseFloat(tmp_array_l[1]);
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['Winkel'] = "'"+tmp_array_l[2]+"'";;
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter'] = parseFloat(tmp_array_l[3]);
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter_us'] = parseFloat(tmp_array_l[4]);
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter'] = parseFloat(tmp_array_l[5]);
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter_us'] = parseFloat(tmp_array_l[6]);
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter'] = parseFloat(tmp_array_l[7]);
liner_hausanschlussleitung_600_dn225_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter_us'] = parseFloat(tmp_array_l[8]);
}




str_liner_600_dn250='250!10!45°/90°!4.31!145.63!1.44!48.54!2.87!97.09§300!12!45°/90°!4.76!160.70!1.59!53.57!3.17!107.13§350!14!45°/90°!5.22!176.22!1.74!58.74!3.48!117.48§400!16!45°/90°!5.66!191.29!1.89!63.76!3.77!127.53§450!18!45°/90°!6.12!206.80!2.04!68.93!4.08!137.87§500!20!45°/90°!6.57!221.86!2.19!73.95!4.38!147.91§550!22!45°/90°!7.01!236.93!2.34!78.98!4.67!157.95§600!24!45°/90°!7.47!252.45!2.49!84.15!4.98!168.30';
var liner_hausanschlussleitung_600_dn250_array = new Array();
var tmp_array = new Array();
tmp_array=str_liner_600_dn250.split('§');
for (var i = 0; i <= tmp_array.length-1; i++){  
	var tmp_array_l = new Array();
	tmp_array_l=tmp_array[i].split('!');

liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])] = new Array();
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['DN_'] = parseFloat(tmp_array_l[0]);
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['DN__us'] = parseFloat(tmp_array_l[1]);
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['Winkel'] = "'"+tmp_array_l[2]+"'";;
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter'] = parseFloat(tmp_array_l[3]);
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['Harzsystem_Liter_us'] = parseFloat(tmp_array_l[4]);
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter'] = parseFloat(tmp_array_l[5]);
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['Komponente_A_Liter_us'] = parseFloat(tmp_array_l[6]);
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter'] = parseFloat(tmp_array_l[7]);
liner_hausanschlussleitung_600_dn250_array[parseFloat(tmp_array_l[0])]['Komponente_B_Liter_us'] = parseFloat(tmp_array_l[8]);
}
































