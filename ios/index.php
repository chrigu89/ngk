<?php
    class MAIN {	
     
        const DB_SERVER = "91.233.84.102";
        const DB_USER = "design-busse";
        const DB_PASSWORD = "DTxhruKb5q";
        const DB = "de_designbusse";    

        public function __construct(){
            $this->dbConnect();
	}
        public function dbConnect(){
            //mysql_connect(DB_SERVER, DB_USER, DB_PASSWORD) or die("MySQL connect problem!".mysql_error());
            //mysql_select_db(DB) or die("MySQL select database problem".mysql_error());      
            $this->db = mysqli_connect(self::DB_SERVER, self::DB_USER, self::DB_PASSWORD, self::DB);
            return 555;
        }
        public function processApi(){
            echo $_REQUEST['function'];
            return $_POST['function'];
        }        
      
        
   
    }
        
        
       
    	$main = new MAIN;    
        $main->processApi();
        //echo $main->dbConnect();
	/*$query_h="SELECT * FROM `ada` WHERE `id`='1';";
        $result_h=mysql_query($query_h);
        $row_h=mysql_fetch_assoc($result_h);
        echo $row_h['token'];*/
		
	
	//$this->echhho();
?>