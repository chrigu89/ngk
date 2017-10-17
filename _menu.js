var id_a=new Array();
	for(var i = 0; i < 20; i++) {
		id_a[i]='';
	}
id_a[activ]=' id="active"';

menu='<ul id="m1">'
+'<li><a'+id_a[0]+' class="icon-home1" rel="home.html" href="home.html" >Home</li>'
+'<li><a'+id_a[1]+' class="icon-calculator" rel="calculator.html"  href="calculator.html">Kalkulator</li>'
+'<li><a'+id_a[2]+' class="icon-tech_details" rel="tech_details.html"  href="tech_details.html">Downloads</li>'
+'<li><a'+id_a[3]+' class="icon-kontakt" rel="kontakt.html"  href="kontakt.html" >Kontakt</li>'
+'<li><a'+id_a[4]+' class="icon-fedback" rel="feedback.html"  href="feedback.html">Feedback</li>'
+'<div class="clr"></div>'
+'</ul>';
document.write(menu);