var id_a=new Array();
	for(var i = 0; i < 20; i++) {
		id_a[i]='';
	}
id_a[activ]=' id="active"';

menu='<ul id="m1">'
+'<li><a'+id_a[0]+' rel="index.php" href="index.html" ><i class="fa fa-home"></i><br>Home</a></li>'
+'<li><a'+id_a[1]+' rel="termine.php"  href="termine.html"><i class="fa fa-calendar"></i><br>Termine</a></li>'
+'<li><a'+id_a[2]+' rel="wissen.php"  href="wissen.html"><i class="fa fa-graduation-cap "></i><br>Wissen</a></li>'
+'<li><a'+id_a[3]+' class="toogle"><i class="fa fa-navicon"></i><br>mehr</a></li>'
+'<div class="clr"></div>'
+'</ul>';
document.write(menu);