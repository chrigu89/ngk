var id_a=new Array();
	for(var i = 0; i < 20; i++) {
		id_a[i]='';
	}
id_a[activ]=' id="active"';

menu='<ul id="m1">'
+'<li><a'+id_a[0]+' class="icon-home1" rel="index.html" href="index.html" >Home</a></li>'
+'<li><a'+id_a[1]+' class="icon-calculator" rel="calculator.html"  href="calculator.html">Calculator</a></li>'
+'<li><a'+id_a[2]+' class="icon-tech_details" rel="tech_details.html"  href="tech_details.html">Downloads</a></li>'
+'<li><a'+id_a[3]+' class="icon-kontakt" rel="kontakt.html"  href="kontakt.html" >Contact</a></li>'
+'<li><a'+id_a[4]+' class="icon-profil" rel="profil.html"  href="profil.html">Profile</a></li>'
+'<div class="clr"></div>'
+'</ul>';
document.write(menu);