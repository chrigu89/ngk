
<html>
<head>
	<title>Neuss Grenadierkorps von 1823</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="apple-mobile-web-app-capable" content="no">
	<meta name="viewport" content="width=450,user-scalable=no"/>

	<link href="style/style.css" rel="stylesheet" type="text/css">
	<link href="style/swipe.css" rel="stylesheet" type="text/css">
	
</head>
<body>

<?php 
# Load Twitter class
require_once('twitteroauth-master/twitteroauth/twitteroauth.php');
# Define constants
define('TWEET_LIMIT', 3);
define('TWITTER_USERNAME', 'ngk1823');
define('CONSUMER_KEY', 'pSGVadPINnIk886eauF6hg');
define('CONSUMER_SECRET', 'fcbiBwuFtlfNA1skVxh7CHGseDUNCPvbGMGfnxgFA');
define('ACCESS_TOKEN', '784245799-PPxEhxiad5j2B20Jr89pNJU63tsHtMwM50WpBmN1');
define('ACCESS_TOKEN_SECRET', 'BAM0Ted5uGCVqwv4PHCPn0QplqSy11DwYVZMauQI9IO0p');

$db=mysql_connect("localhost", "design-busse", "DTxhruKb5q");
$db_in_use=mysql_select_db("de_designbusse");   

# Create the connection
$twitter = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);

# Migrate over to SSL/TLS
$twitter->ssl_verifypeer = false;

# Load the Tweets
$tweets = $twitter->get('statuses/user_timeline', array('screen_name' => TWITTER_USERNAME, 'exclude_replies' => 'true', 'include_rts' => 'false', 'count' => TWEET_LIMIT));

# Example output
if(!empty($tweets)) {
    foreach($tweets as $tweet) {

        # Access as an object
        $tweetText = $tweet->text;
		$date = date_create($tweet->created_at);
		$date->add(new DateInterval('PT2H'));
		$date = date_format($date, 'Y.m.d - H:i:s');	
                         
        # Make links active
        # $tweetText = preg_replace("/(http:\/\/|(www.))(([^s<]{4,68})[^s<]*)/", '<a href="http:\/\/$2$3" target="_blank">$1$2$4</a>', $tweetText);

        # Linkify user mentions
        $tweetText = preg_replace("/@(w+)/", '<a href="http://www.twitter.com/$1" target="_blank">@$1</a>', $tweetText);

        # Linkify tags
        $tweetText = preg_replace("/#(w+)/", '<a href="http://search.twitter.com/search?q=$1" target="_blank">#$1</a>', $tweetText);
		

		# check of the new twitter
		$abfrage = "SELECT `id` FROM `tweets` WHERE `date` = '". $date ."'";
		$result=mysql_query($abfrage);
		$rowo=mysql_fetch_assoc($result);
										
		if(!$rowo){   
			$qry = "INSERT INTO `tweets` SET `date` = '".$date."', `text` = '".$tweetText."', pushed = 0";
			MYSQL_QUERY($qry); 
			
			
			$url = 'http://apps.design-busse.de/ngk/ios/api.php?rquest=pushIt';
			$myvars = 'text=' . $tweetText . '&pass=' . 'DTxhruKb5q';
			
			$ch = curl_init( $url );
			curl_setopt( $ch, CURLOPT_POST, 1);
			curl_setopt( $ch, CURLOPT_POSTFIELDS, $myvars);
			curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
			curl_setopt( $ch, CURLOPT_HEADER, 0);
			curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
			
			$response = curl_exec( $ch );
			
		}                

        # Output
		echo "<strong>";
		echo $date;
		echo "</strong>: ";
		
        echo $tweetText;
		echo "<br>";
		echo "<br>";

    }
}

?>
</body>

</html>