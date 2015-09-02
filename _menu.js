var id_a=new Array();
	for(var i = 0; i < 20; i++) {
		id_a[i]='';
	}
id_a[activ]=' id="active"';

menu='<ul>'
+'<li><a'+id_a[0]+' rel="index.php" href="index.html" ><i class="fa fa-home"></i>Home</a></li>'
+'<li><a'+id_a[1]+' rel="termine.php"  href="termine.html"><i class="fa fa-calendar"></i>Termine</a></li>'
+'<li><a'+id_a[2]+' rel="wissen.php"  href="wissen.html"><i class="fa fa-graduation-cap "></i>Wissen</a></li>'
+'<li><a'+id_a[3]+' rel="jahrbuch.html" href="jahrbuch.html" ><i class="fa fa-book"></i>Jahrbuch</a></li>'
+'<li><a'+id_a[4]+' rel="korpsschiessen.html" href="korpsschiessen.html" ><i class="fa fa-tasks"></i>Korpsschiessen</a></li>'
+'<li><a'+id_a[5]+' rel="vorstand.html" href="vorstand.html" ><i class="fa fa-male"></i>Vorstand</a></li>'
+'<li><a'+id_a[6]+' rel="achterausschuss.html" href="achterausschuss.html" ><i class="fa fa-male"></i>Achterausschuss</a></li>'
+'<li><a'+id_a[7]+' rel="settings.html" href="settings.html" ><i class="fa fa-cog"></i>Einstellungen</a></li>'
+'</ul>';
document.write(menu);