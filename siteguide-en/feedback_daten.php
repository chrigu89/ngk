<?php 
$datenfehler=false;
function checkmail($eingabe) {
return preg_match("/^[_a-z0-9-.]+(\.[_a-z0-9-.]+)*@([0-9a-z][0-9a-z-]*[0-9a-z]{1}\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|shop)$/i", $eingabe);
}
function varset($var){
		if(!isset($var) || empty($var) || is_array($var)){return false;}
		return true;  
	}


$feedback_daten=$_POST['feedback_daten'];


$gut_gefallen=$_POST['gut_gefallen'];
$vn_name=$_POST['vn_name'];
$email=$_POST['email'];

	
$vermisse_p_s=$_POST['vermisse_p_s'];
$verbesserungsvorschlaege=$_POST['verbesserungsvorschlaege'];
$sub=5;

if(!checkmail($email)){
	$sub=1;
	
}



//produkte_systeme:sehrgut!*!kundenservice:gut!*!produkte_service:ja!*!beratung:gut!*!verb:ja!*!app_beurteilung:gut!*!alter:40-50!*!geschlecht:Weiblich!*!
$feed_back_str='';
$feed_array = array();
$feed_array = explode("!*!", $feedback_daten);
for ( $x = 0; $x < count($feed_array); $x++ ){

$tmp_array = explode(":", $feed_array[$x] );
	
$tmp_array[0] = str_replace('produkte_systeme', 'Produkte Systeme: '.$tmp_array[1],  $tmp_array[0]);
$tmp_array[0] = str_replace('kundenservice', 'Kundenservice: '.$tmp_array[1],  $tmp_array[0]);
$tmp_array[0] = str_replace('produkte_service', 'Vermissen Sie Produkte Service: '.$tmp_array[1].'<br />'.$vermisse_p_s,  $tmp_array[0]);
$tmp_array[0] = str_replace('beratung', 'Beratung: '.$tmp_array[1],  $tmp_array[0]);
$tmp_array[0] = str_replace('verb', 'Verbesserungsvorschläge: '.$tmp_array[1].'<br />'.$verbesserungsvorschlaege,  $tmp_array[0]);
$tmp_array[0] = str_replace('app_beurteilung', 'App Beurteilung: '.$tmp_array[1],  $tmp_array[0]);
$tmp_array[0] = str_replace('alter', 'Alter: '.$tmp_array[1],  $tmp_array[0]);
$tmp_array[0] = str_replace('geschlecht', 'Geschlecht: '.$tmp_array[1],  $tmp_array[0]);
$feed_back_str.=$tmp_array[0].' <br />';

}



	if($sub=='5'){
		$nachricht = '<h1>Feedback Formular Calculator App</h1>';
		$nachricht .= 'Name:: '.$vn_name."<br>";
		$nachricht .= 'E-Mail: '.$email."<br>";
		$nachricht .= 'Besonders gut gefallen hat: <br />'.$gut_gefallen."<br><br />";
			$nachricht .= $feed_back_str;
		
		
		
	}



	$sender=$email;

$betreff='Feedback Formular Calculator App';	


$header  = 'MIME-Version: 1.0' . "\n";
//$header .= 'Content-Type: text/plain; charset=iso-8859-1' . "\n";
$header .= 'Content-Type: text/html; charset=UTF-8' . "\n";
$header .= "From: <".$sender.">". "\n";



$empfaenger='cb@design-busse.de';

if(@mail($empfaenger, $betreff, $nachricht,$header)){
echo '<h4>Vielen Dank für Ihr Feedback!</h4>';	
//header("Location: kontakt-danke.php");
}else{
echo '<h4>Fehler beim Senden!</h4> <p>Gegebenenfalls besteht keine Internetverbindung. <br />Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.</p>
';

}


?>