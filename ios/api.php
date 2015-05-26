<?php
    require_once("Rest.inc.php");
    require_once("apn/APNSBase.php");
    require_once("apn/APNotification.php");
    require_once("apn/APFeedback.php");

	
	class API extends REST {
	
		public $data = "";
		private $response_array = array();

                const DB_SERVER = "localhost";
                const DB_USER = "design-busse";
                const DB_PASSWORD = "DTxhruKb5q";
                const DB = "de_designbusse";         

                //Push Notifications
                //Apple
                const APN_ENVIROMENT = "development"; //'development' || 'production'
                const APN_PRIVATEKEY = "aps_development.pem";
                const APN_PRIVATEKEY_PASSFRASE = "1234";
                //Google
                const GCN_API_KEY = 'AIzaSyBiLaHw0JjbhFPKBSSdeeODhM2_r-nNk4g';

		
		private $db = NULL;
	
		public function __construct(){
			parent::__construct();				// Init parent contructor
			$this->dbConnect();					// Initiate Database connection
		}
		
		/*
		 *  Database connection 
		*/
		private function dbConnect(){
			$this->db = mysqli_connect(self::DB_SERVER, self::DB_USER, self::DB_PASSWORD, self::DB);
		}
		
		/*
		 * Public method for access api.
		 * This method dynmically call the method based on the query string
		 *
		 */
		public function processApi(){
			$func = strtolower(trim(str_replace("/","",$_REQUEST['rquest'])));
			if((int)method_exists($this,$func) > 0)
				$this->$func();
			else
				$this->response('',404);				// If the method not exist with in this class, response would be "Page not found".
		}
		private function json($data){
			if(is_array($data)){
				return json_encode($data);
			}
		}
		
		//test function
		private function check_product(){
				$qry = mysqli_query($this->db,"SELECT * FROM ngk");
				$result = $qry->fetch_object();
				print_r($result);	
		}  
 
		private function pushIt(){
			if($_POST["pass"] == 'DTxhruKb5q') {
				$text = $_POST["text"];
			} else {
				if($_GET["text"] == 'test') {
					$text = 'Test';	
				} else {
					exit;
				}
			}
			
			$device = mysqli_query($this->db,"SELECT * FROM `ngk` WHERE `status`='1' AND os = 1");
				
			if (mysqli_num_rows($device)){ 
					foreach ($device as $row) { 

						//sent push notification
						$push_title = 'NGK: Neues auf Twitter!';
						$push_text = $text;
						$sentpnf = $this->pushDevice($row['os'], array($row['token']), $push_title,  $push_text); 
						
					}
			}  
			return true;
		}
                
		public function pushDevice($os, $token, $title, $text) {
				$error = false; 
				$json = array();
				$dead_tokens = array();

				if ($os == 1) { //APN
					try { 
						# Notification Example
						$notification = new APNotification("development");  //echo '111';
						//$notification = new APNotification;
						$notification->setDeviceToken($token);
						$notification->setMessage($text);
						if (isset($this->request->get['badge'])) {
								$notification->setBadge($this->request->get['badge']);
						}
						$notification->setPrivateKey("ios_developer.pem");
						$notification->setPrivateKeyPassphrase("1234");
						$notification->send();
						  //  print_r($notification); echo '<br />';

						# Feedback Example
						$feedback = new APFeedback("development");
						//$feedback = new APFeedback;
						$feedback->setPrivateKey("ios_developer.pem");
						$feedback->setPrivateKeyPassphrase("1234");
						$dead_tokens = $feedback->receive();
							
					} catch(Exception $e) {
							echo $e->getLine().': '.$e->getMessage();
					}
					$status = 'OK';
				} 
				elseif ($os == 2) { //Google Push
				
						// Set POST variables
						$url = 'https://android.googleapis.com/gcm/send';

						$fields = array(
							'registration_ids' => $token,
							'data' => array(
								'title' => $title,
								'message' => $text
							)                                    
						);

						$headers = array(
							'Authorization: key=AIzaSyBiLaHw0JjbhFPKBSSdeeODhM2_r-nNk4g',
							'Content-Type: application/json'
						);
								//print_r($headers);
						// Open connection
						$ch = curl_init();

						// Set the url, number of POST vars, POST data
						curl_setopt($ch, CURLOPT_URL, $url);
						//print_r($headers);
						curl_setopt($ch, CURLOPT_POST, true);
						curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
						curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));

						// Execute post
						$dead_tokens = curl_exec($ch); 

						if ($dead_tokens === FALSE) {
							die('Curl failed: ' . curl_error($ch));
						}

						// Close connection
						curl_close($ch); print_r($dead_tokens);
						$status = 1;
				}
				
				$json['os'] = $os;
				$json['token'] = $token;
				$json['status'] = $status;
				$json['feedback'] = $dead_tokens;
				//print_r(json_encode($json)); echo '<br />';
				//$this->response->setOutput(json_encode($json));

				if ($error) {
						header("HTTP/1.0 404 Not Found");
						echo "404!";
						die;
				}
				return $status;
		}  
		
		        
        /*
			INSERT DEVICE
		*/      
		private function set_device(){
			if($_GET["token"]) {
				$token = $_GET["token"];  
				$os = $_GET["os"];
				
				$result_dev = mysqli_query($this->db,"SELECT id FROM ngk WHERE token = '".$token."'");
				if (mysqli_num_rows($result_dev)){
					// DEVICE EXISTS                          
				} else {
					$qry = "INSERT INTO `ngk` SET `token` = '".$token."', `os` = '".$os."', `date_added` = NOW(), status = 1";
					mysqli_query($this->db, $qry);              
				}
				header("HTTP/1.1 200 OK");

			} 
			return false;
	  	}       
                
        /*
			GET USER
		*/      
		private function get_user(){
			if($_GET["token"]) {
				$token = $_GET["token"];  
				
				$qry = mysqli_query($this->db,"SELECT * FROM ngk WHERE token = '".$token."'");
				$result = $qry->fetch_object();
				exit(json_encode($result));
				header("HTTP/1.1 200 OK");
			} 
			exit;
	  	}     
		/*
			CHANGE STATUS
		*/      
		private function change_status(){
			if($_GET["token"]) {
				$token = $_GET["token"];  
				$status = $_GET["status"];
				
				$result_dev = mysqli_query($this->db,"SELECT id FROM ngk WHERE token = '".$token."'");
				if (mysqli_num_rows($result_dev)){
			
					$qry = "UPDATE `ngk` SET `status` = '".$status."' WHERE `token` = '".$token."'";
					$result = mysqli_query($this->db, $qry);   
				}
				header("HTTP/1.1 200 OK");
				
			} 
			exit;
	  	}  
                       
		private function testph() {
				// Put your device token here (without spaces):
				$deviceToken = '77348550314d445c67505cdc0d4ccc3e2dd7de23ba8961067356a1725fb1eddd';
				

				// Put your private key's passphrase here:
				$passphrase = '1234';

				////////////////////////////////////////////////////////////////////////////////

				
				$ctx = stream_context_create();
				stream_context_set_option($ctx, 'ssl', 'local_cert', 'developer.pem');
				stream_context_set_option($ctx, 'ssl', 'passphrase', $passphrase);
//print_r($ctx);
				// Open a connection to the APNS server
				$fp = stream_socket_client('ssl://gateway.push.apple.com:2195', $err, $errstr, 60, STREAM_CLIENT_CONNECT|STREAM_CLIENT_PERSISTENT, $ctx);
//print_r($fp);
				if (!$fp)
						exit("Failed to connect: $err $errstr" . PHP_EOL);

				echo 'Connected to APNS' . PHP_EOL;

				// Create the payload body
				$body['aps'] = array(
						'alert' => 'Test',
						'sound' => 'default'
						);

				// Encode the payload as JSON
				$payload = json_encode($body);

				// Build the binary notification
				$msg = chr(0) . pack('n', 32) . pack('H*', $deviceToken) . pack('n', strlen($payload)) . $payload;

				// Send it to the server
				$result = fwrite($fp, $msg, strlen($msg));

				if (!$result)
						echo 'Message not delivered' . PHP_EOL;
				else
						echo 'Message successfully delivered' . PHP_EOL;

				// Close the connection to the server
				fclose($fp);
			
		}
		
		private function myinfo(){
			echo phpinfo();
		}
                
                
                
	}
	
	// Initiiate Library
	
	$api = new API;
	$api->processApi();
       
?>
