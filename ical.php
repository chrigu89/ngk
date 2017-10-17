<?php

session_start();

include("lib/autoexec.php");

//$abfrage = "SHOW TABLES";
$abfrage = "SELECT * FROM tl_calendar_events WHERE startTime >= CURDATE() AND published = 1 AND pid = 1  ORDER BY startTime ASC";
$query = $db->query($abfrage);	
$row = $query->fetchAll();

// Variablen
$entrys = array();
$id = 0;

if(isset($_GET["id"]) AND (int)$_GET["id"] > 0) {
	$id = (int)$_GET["id"];
}

/**
 * Beispiel Eintrag
 * $entrys[1] = array("date_start"		=>	"2014-06-13 19:00",
 * 					  "date_end"		=>	"2014-06-13 22:00",
 * 					  "name"			=>	"Test",
 * 					  "description"		=>	"Hallo Welt",
 * 					  "address"			=>	"Strasse, Ort");

$entrys[1] = array(	"date_start"		=>	"2014-06-13 19:00",
					"date_end"			=>	"2014-06-13 22:00",
					"name"				=>	"Test",
					"description"		=>	"Hallo Welt",
					"address"			=>	"Strasse, Ort"); */

$i = 0;

$now = time();
$now = date("Ymd", $now);

foreach($row as $key => $value) {
	$datum_check = date("Ymd", $value["startTime"]);
	$datum = date("d.m.Y H:i", $value["startTime"]);
	if($datum_check >= $now) {
		$entrys[$i]["date_start"] = $datum;
		$entrys[$i]["date_end"] = $datum;
		$entrys[$i]["name"] = $value["title"];
		$entrys[$i]["description"] = $value["teaser"];
		$entrys[$i]["address"] = $value["location"];
		$i++;
	}
}


if(isset($entrys[$id])) {
	$current = $entrys[$id];
	$current["date_start"] = dateToCal($current["date_start"]);
	$current["date_end"] = dateToCal($current["date_end"]);
	generateCalendar($current);
}

function dateToCal($timestamp) {
	//return date('Ymd\THis\Z', strtotime($timestamp));
	$date = new DateTime($timestamp, new DateTimeZone('Europe/Berlin'));
	return $date->format('Ymd\THis') . "\n";
}

function escapeString($string) {
	return preg_replace('/([\,;])/','\\\$1', $string);
}

function generateCalendar($entry) {
	header('Content-type: text/calendar; charset=utf-8');
	header('Content-Disposition: attachment; filename=calendar.ics');
	echo 'BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//hacksw/handcal//NONSGML v1.0//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
DTEND:' .  $entry["date_end"] . '
UID:' . uniqid() . '
DTSTAMP:' .  dateToCal("now") . '
LOCATION:' .  escapeString($entry["address"]) . '
DESCRIPTION:' .  escapeString($entry["description"]) . '
SUMMARY:' .  escapeString($entry["name"]) . '
DTSTART:' .  $entry["date_start"] . '
END:VEVENT
END:VCALENDAR';
}

?>