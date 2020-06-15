random_nr=0;

random_nr =	window.sessionStorage.getItem('random_nr')

if(random_nr==null){
random_nr=Math.floor((Math.random() * 1000) + 1);
window.sessionStorage.setItem('random_nr',random_nr)
}
en=false;
url_beg='';
if(window.location.href.indexOf('siteguide-en')>=0){
url_beg='../';	
en=true;	
	
} else {
	//deutsch
url_beg='';	

};
function include( element, url){
  var script = document.createElement(element);
    if(url.indexOf('.css')>=0){
	 script.href = url;
	 script.rel = 'stylesheet';
	 script.type = 'text/css';
	}else if(url.indexOf('.js')>=0){
      script.type = "text/javascript";
	  script.src =url;
	}
	return script.outerHTML;
};
function c1_console_log(val){
	
	//console.log(val)
}