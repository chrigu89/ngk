<?php 

$empfaenger=''; 
$eingabe_berechnung = $_POST['eingabe_berechnung'];
$land_de_en = '';
$senden=false;
	function checkmail($eingabe) {
return preg_match("/^[_a-z0-9-.]+(\.[_a-z0-9-.]+)*@([0-9a-z][0-9a-z-]*[0-9a-z]{1}\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|shop)$/i", $eingabe);
}
if(!checkmail($_POST['email'])){
	
echo 'fehler';
break;	
}

if($_POST['en_de']== 'deutsch'){
	
	$empfaenger='nancy.shea@trelleborg.com'; 
	$empfaenger2='mark.yanzo@trelleborg.com'; 
	$land_de_en = 'Deutsch'; 
}else if($_POST['en_de']== 'englisch'){

	$empfaenger='melanie.beckmann@trelleborg.com'; 
	$empfaenger2='regine.becker@trelleborg.com';   
	$land_de_en = 'Englisch'; 
}

// $empfaenger='christian.busse@apfel.gold'; 
// $empfaenger2='christian.busse@apfel.gold'; 

if(strlen($eingabe_berechnung)> 20){
	
$sender=$_POST['email'];	
$mailtext = '<style>table{width:570px;} .eingaben_user{font-size:20px; font-weight:bold;} h2{font-size:18px; margin-bottom:0;} td{vertical-align:top;}</style>';
$mailtext .= '<div style="width:570px;">';
$mailtext .= '<small><em>Gesendet in '.$land_de_en.' am '.date("d.m.Y").' um '.date("H:i:s").'.</em></small>';
$mailtext .= '<div class="eingaben_user" style="margin-bottom:12px;">Komponenten anfrage DrainPacker Verfahren von:</div>';
$mailtext .= '<table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-bottom:1px solid #aaa;margin-bottom:10px;">';
$mailtext .= '<tr><td>Land: </td><td>'.$_POST['land'].'</td></tr>';
$mailtext .= '<tr><td>Vorname: </td><td>'.$_POST['v_name'].'</td></tr>';
$mailtext .= '<tr><td style="padding-bottom:7px;">Nachname: </td><td>'.$_POST['n_name'].'</td></tr>';
$mailtext .= '<tr><td>Firma: </td><td>'.$_POST['firma'].'</td></tr>';
$mailtext .= '<tr ><td style="padding-top:7px;padding-bottom:7px;">Kundennummer: </td><td>'.$_POST['knr'].'</td></tr>';
$mailtext .= '<tr><td>Straße, Nr.: </td><td>'.$_POST['strasse'].' '.$_POST['hnr'].'</td></tr>';
$mailtext .= '<tr><td style="padding-bottom:7px;">PLZ Ort: </td><td>'.$_POST['plz'].' '.$_POST['ort'].'</td></tr>';
$mailtext .= '<tr><td>Telefon: </td><td>'.$_POST['telefon'].'</td></tr>';
$mailtext .= '<tr><td>E-Mail: </td><td>'.$sender.'</td></tr>';
$mailtext .= '<tr><td colspan="2" style="padding-top:7px;">Nachricht: </td></tr>';
$mailtext .= '<tr><td colspan="2">'.$_POST['nachricht'].'</td></tr>';
$mailtext .= '<tr><td colspan="2">&nbsp;</td></tr>';
$mailtext .= '</table>';



$mailtext .= $eingabe_berechnung;



$mailtext .= '</div>';
$mailtext .= '<br>';
$mailtext .= '<small><em>Gesendet von der SiteGuide App</em></small>';
$mailtext .= '<br>';
$mailtext .= '<br>';

  
 
$betreff='Komponenten anfrage DrainPacker Verfahren ';	


$header  = 'MIME-Version: 1.0' . "\n";
//$header .= 'Content-Type: text/plain; charset=iso-8859-1' . "\n";
$header .= 'Content-Type: text/html; charset=UTF-8' . "\n";
$header .= "From: <".$sender.">". "\n";



$mailtext = '<small><em>Empfänger: '.$empfaenger.', '.$empfaenger2.'</em></small><br />' .$mailtext;
  
 if(@mail($empfaenger, $betreff, $mailtext,$header)){


if(@mail($empfaenger2, $betreff, $mailtext,$header)){
//echo 'Hallo: '.$mailtext.'!';
echo 'erfolg';	
}else{
echo 'fehler';	

} 	
}else{
echo 'fehler';	

}
 
 }else{	 
echo 'fehler';	 	 
 }
 ?>