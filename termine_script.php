<?php

session_start();

include("lib/autoexec.php");

//$abfrage = "SHOW TABLES";
$abfrage = "SELECT * FROM tl_calendar_events WHERE startTime >= CURDATE() AND published = 1 AND pid = 1  ORDER BY startTime ASC";
$query = $db->query($abfrage);	
$row = $query->fetchAll();
				      
?><!doctype html>
<head>
	<title>Neuss Grenadierkorps von 1823</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="apple-mobile-web-app-capable" content="no">
	<meta name="viewport" content="width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0"/>

	<link href="style/style.css" rel="stylesheet" type="text/css">

	
	
	
</head>
<body >





		<?php
		
		$array_='termine_array = new Array();';
		$i = 0;
		$now = time();
		$now = date("Ymd", $now);
		foreach($row as $key => $value) {
			$datum_check = date("Ymd", $value["startTime"]);
			$datum = date("d.m.Y H:i", $value["startTime"]);
			if($datum_check >= $now) {
				
				
				$array_.='termine_array['.$i.'] = new Object();
termine_array['.$i.']["datum"] = "24.06.2014 20:00";
termine_array['.$i.']["title"] = "'.$value["title"].'";
termine_array['.$i.']["teaser"] = "'.$value["teaser"].'";
termine_array['.$i.']["location"] = "'.$value["location"].'";';				
				
				
				
				
				
	
			$i++;
			}
		}
echo $array_;
?>
	
		
		
		

	 


<div class="menu"> 

  <script src="js/scripts.js" type="text/javascript"></script>
</div>

</body>
</html>
