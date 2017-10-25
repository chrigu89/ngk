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

				      
?><!doctype html>
<head>
	<title>Neuss Grenadierkorps von 1823</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="apple-mobile-web-app-capable" content="no">
	<meta name="viewport" content="width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1.0"/>

	<link href="style/style.css" rel="stylesheet" type="text/css">
	<link href="style/swipe.css" rel="stylesheet" type="text/css">
	
	<script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="js/jquery-ui-min.js" type="text/javascript"></script>
		
	<script src="js/swipe.js" type="text/javascript"></script>

	
</head>
<body>

	
					<?php
						$i = 0;
						foreach($news as $key => $value) {
							$datum = date("d.m.Y H:i", $value["date"]);
							?>
							<p><span class="red"><?php echo $datum ?></span><br>							
							<strong><?php echo $value["subheadline"]; ?></strong></p>
							<?php echo $value["teaser"]; ?>
							<?
							$i++;
							if ($i == 1) break;
						}
					
					?>
					
				</td>
			
			</tr>
		</table>
		
  <script src="js/scripts.js" type="text/javascript"></script>


</body>
</html>
