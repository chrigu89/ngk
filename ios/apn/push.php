<?php  
class ControllerPushapplePush extends Controller {
	private $error = array(); 
	
	public function index() {
		header("HTTP/1.0 404 Not Found");
		echo "404!";
		die;
	}

	public function pushDevice() {
		$error = false;
		$json = array();
		$oses = array(
			'ios' => 1,
			'android' => 2,
		);
//		if (($this->request->server['REQUEST_METHOD'] == 'POST') && isset($this->request->post['token']) && isset($this->request->post['os'])) {
		if (($this->request->server['REQUEST_METHOD'] == 'GET') && isset($this->request->get['token']) && isset($this->request->get['os'])) {
		} else {
echo "wrong params!<br/>";
			$error=true;
		}
		if ($error) {
			header("HTTP/1.0 404 Not Found");
			echo "404!";
			die;
		}
	}
	public function pushDevices() {
	}
	public function addDevice() {
		$error = false;
		$json = array();
		$oses = array(
			'ios' => 1,
			'android' => 2,
		);
		if (($this->request->server['REQUEST_METHOD'] == 'POST') && isset($this->request->post['token']) && isset($this->request->post['os'])) {
//		if (($this->request->server['REQUEST_METHOD'] == 'GET') && isset($this->request->get['token']) && isset($this->request->get['os'])) {
			$os = trim(mb_strtolower($this->request->post['os']));
			if (array_key_exists($os, $oses)) {
				$sql = "SELECT DISTINCT `token_id` FROM " . DB_PREFIX . "token` WHERE `os`='".$oses[$os]."' AND `token`='".$this->db->escape($this->request->post['token'])."' ";
				$query = $this->db->query($sql);

				if ($query->num_rows) {
					$token_id = $query->row['token_id'];
					$token_type = 'returning';
				} else {
					$sql = "INSERT INTO `" . DB_PREFIX . "token` SET `os`='".$oses[$os]."', `token`='".$this->db->escape($this->request->post['token'])."' ";
					$query = $this->db->query($sql);
					$token_id = $this->db->getLastId(); 
					$token_type = 'new';
				}
				$json['token_id'] = $token_id;
				$json['type'] = $token_type;

				$this->response->setOutput(json_encode($json));
			} else {
echo "wrong os!<br/>";
				$error = true;
			}
		} else {
echo "wrong params!<br/>";
			$error=true;
		}
		if ($error) {
			header("HTTP/1.0 404 Not Found");
			echo "404!";
			die;
		}
	}
}
?>