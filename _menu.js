var id_a=new Array();
	for(var i = 0; i < 20; i++) {
		id_a[i]='';
	}
id_a[activ]=' id="active"';

menu='<ul>'
+'<li><a'+id_a[0]+' href="index.html" ><i class="fa fa-home"></i>Home</a></li>'
+'<li><a'+id_a[2]+' href="termine.html"><i class="fa fa-calendar"></i>Termine</a></li>'
// +'<li><a'+id_a[3]+' href="sf_18.html"><i class="fa fa-file-text"></i>Schützenfest 2018</a></li>'
+'<li><a'+id_a[3]+' href="liederbuch.html"><i class="fa fa-music "></i>Liederbuch</a></li>'
+'<li><a'+id_a[3]+' href="wissen.html"><i class="fa fa-file-text"></i>Handbuch</a></li>'
+'<li><a'+id_a[4]+' href="jahrbuch.html" ><i class="fa fa-book"></i>Jahrbuch</a></li>'
+'<li><a'+id_a[5]+' href="korpsschiessen.html" ><i class="fa fa-tasks"></i>Korpsschiessen</a></li>'
+'<li><a'+id_a[6]+' href="vorstand.html" ><i class="fa fa-male"></i>Vorstand &amp; Achterausschuss</a></li>'
// +'<li><a'+id_a[7]+' href="achterausschuss.html" ><i class="fa fa-male"></i>Achterausschuss</a></li>'
+'<li><a'+id_a[8]+' href="settings.html" ><i class="fa fa-cog"></i>Einstellungen</a></li>'
+'</ul>';
document.write(menu);