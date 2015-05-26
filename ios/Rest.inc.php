<?php
	/* File : Rest.inc.php
	 * Author : Arun Kumar Sekar
	*/
	class REST {
		
		public $_allow = array();
		public $_content_type = "application/json";
		public $_request = array();
		
		private $_method = "";		
		private $_code = 200;
		
		public function __construct(){
			$this->inputs();
		}
		
		public function get_referer(){
			return $_SERVER['HTTP_REFERER'];
		}
		
		public function response($data,$status){
			$this->_code = ($status)?$status:200;
			$this->set_headers();
			echo $data;
			exit;
		}
		
		public function generateApiKey() {
			return md5(uniqid(rand(), true));
		}
		
		private function get_status_message(){
			$status = array(
						100 => 'Continue',  
						101 => 'Switching Protocols',  
						200 => 'OK',
						201 => 'Created',  
						202 => 'Accepted',  
						203 => 'Non-Authoritative Information',  
						204 => 'No Content',  
						205 => 'Reset Content',  
						206 => 'Partial Content',  
						300 => 'Multiple Choices',  
						301 => 'Moved Permanently',  
						302 => 'Found',  
						303 => 'See Other',  
						304 => 'Not Modified',  
						305 => 'Use Proxy',  
						306 => '(Unused)',  
						307 => 'Temporary Redirect',  
						400 => 'Bad Request',  
						401 => 'Unauthorized',  
						402 => 'Payment Required',  
						403 => 'Forbidden',  
						404 => 'Not Found',  
						405 => 'Method Not Allowed',  
						406 => 'Not Acceptable',  
						407 => 'Proxy Authentication Required',  
						408 => 'Request Timeout',  
						409 => 'Conflict',  
						410 => 'Gone',  
						411 => 'Length Required',  
						412 => 'Precondition Failed',  
						413 => 'Request Entity Too Large',  
						414 => 'Request-URI Too Long',  
						415 => 'Unsupported Media Type',  
						416 => 'Requested Range Not Satisfiable',  
						417 => 'Expectation Failed',  
						500 => 'Internal Server Error',  
						501 => 'Not Implemented',  
						502 => 'Bad Gateway',  
						503 => 'Service Unavailable',  
						504 => 'Gateway Timeout',  
						505 => 'HTTP Version Not Supported',
                                                506 => 'No member_id',
                                                507 => 'No group_id');
			return ($status[$this->_code])?$status[$this->_code]:$status[500];
		}
		
	function get_response($key){
		$status = array(
				'0000'=>'Success', 
				'0001'=>'Fail', 
				'0002'=>'System error', 
				'5000'=>'No category found', 
				'5001'=>'No product in the selected category', 
                                '5002'=>'No product found',
                                '5003'=>'No subtype found',
				'5050'=>'First name submitted value must not be empty', 
				'5051'=>'First name filed value not more than 30 characters', 
				'5052'=>'Last name submitted value must not be empty', 
				'5053'=>'Last Name filed value not more than 30 characters', 
				'5054'=>'User submitted value must not be empty', 
				'5055'=>'User filed value not more than 30 characters', 
				'5056'=>'Only alphanumeric value for the User Name field allowed', 
				'5057'=>'User in the database already exists', 
				'5058'=>'Please upload photo',
				'5059'=>'Please upload photos with jpg, png or gif format only',
				'5060'=>'Can Upload file, try again', 
				'5061'=>'Invalid login data, please try again',
				'5062'=>'Unable to udpate profile info, please try again',
				'5063'=> 'Group name already exists',
				'5064'=> 'Unable to create group, please try again',
				'5065'=> 'Group does not exists or user has not access for this group',
				'5066'=> 'All the items has already been added',
				'5067'=> 'Unable to add item, please check request format',
				'5068'=> 'Please enter mobile number',
				'5069'=> 'This mobile number already exists',
				'5070'=> 'No access for this group',
				'5071'=> 'Account deleted successfully',
				'5072'=> 'Please enter the product name',
				'5073'=> 'Please enter the product name',
				'5074'=> 'This product is already existing',
                                '5075'=> 'This subtype is already existing for this product',
                                '5076'=> 'The body for json_decode is absent',
                                '5077'=> 'Users token is absent'
				);
		
		return ($status[$key])?($status[$key]):$status['0000'];
	}
	
	function checkstring($string=''){
		if($string){
			return strip_tags(trim($string));
		}else{
			return '';
		}
	}
	
	function check_username($username){
		return preg_match('/^[a-zA-Z0-9]+$/',$username);
	}
	
	function server_dir_path(){
		if($_SERVER['HTTP_HOST'] == 'localhost'){
			return 'http://localhost/projects/EatSheetWebSerice/rest';
		}else{
			return 'http://ada-nrw.de/ios';
		}
	}
		
	function jsonencode($data) {
        switch ($type = gettype($data)) {
            case 'NULL':
                return 'null';
            case 'boolean':
                return ($data ? 'true' : 'false');
            case 'integer':
            case 'double':
            case 'float':
                return $data;
            case 'string':
                return '"' . addslashes($data) . '"';
            case 'object':
                $data = get_object_vars($data);
            case 'array':
                $output_index_count = 0;
                $output_indexed = array();
                $output_associative = array();
                foreach ($data as $key => $value) {
                    $output_indexed[] = $this->jsonencode($value);
                    $output_associative[] = $this->jsonencode($key) . ':' . $this->jsonencode($value);
                    if ($output_index_count !== NULL && $output_index_count++ !== $key) {
                        $output_index_count = NULL;
                    }
                }
                if ($output_index_count !== NULL) {
                    return '[' . implode(',', $output_indexed) . ']';
                } else {
                    return '{' . implode(',', $output_associative) . '}';
                }
            default:
                return ''; // Not supported
        }
    }
		
		public function get_request_method(){
			return $_SERVER['REQUEST_METHOD'];
		}
		
		private function inputs(){
			switch($this->get_request_method()){
				case "POST":
					$this->_request = $this->cleanInputs($_POST);
					break;
				case "GET":
				case "DELETE":
					$this->_request = $this->cleanInputs($_GET);
					break;
				case "PUT":
					parse_str(file_get_contents("php://input"),$this->_request);
					$this->_request = $this->cleanInputs($this->_request);
					break;
				default:
					$this->response('',406);
					break;
			}
		}		
		
		private function cleanInputs($data){
			$clean_input = array();
			if(is_array($data)){
				foreach($data as $k => $v){
					$clean_input[$k] = $this->cleanInputs($v);
				}
			}else{
				if(get_magic_quotes_gpc()){
					$data = trim(stripslashes($data));
				}
				$data = strip_tags($data);
				$clean_input = trim($data);
			}
			return $clean_input;
		}		
		
		private function set_headers(){
			header("HTTP/1.1 ".$this->_code." ".$this->get_status_message());
			header("Content-Type:".$this->_content_type);
		}
	}	
?>
