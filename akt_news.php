<?php

session_start();

include("lib/autoexec.php");

//$abfrage = "SHOW TABLES";
$abfrage = "SELECT * FROM tl_news WHERE date >= CURDATE() AND published = 1 ORDER BY date DESC";
$query = $db->query($abfrage);	
$news = $query->fetchAll();

//$abfrage = "SHOW TABLES";
$abfrage = "SELECT * FROM tl_calendar_events WHERE startTime >= curdate() AND published = 1 AND pid = 1 ORDER BY startTime ASC";
$query = $db->query($abfrage);	
$termine = $query->fetchAll();
				      
?>
<!doctype html>
<head>
	<title>Neuss Grenadierkorps von 1823</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="apple-mobile-web-app-capable" content="no">
	<meta name="viewport" content="width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0"/>
	<link href="style/style.css" rel="stylesheet" type="text/css">
</head>
<body">

	<p>&nbsp;</p>
	<h2 style="color: #5ea9dd;"><img src="images/twitter.png" width="40"> Twitternachrichten</h2>
	<?php include("_twitter.php"); ?>
	</div>
	</div>
	<!--content -->
	
	<div class="menu"> 
		<script src="js/scripts.js" type="text/javascript"></script> 
	</div>
</body>
</html>