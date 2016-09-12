'use strict';


var pushNotification;
var final_token;

var permanentStorage = window.localStorage;
var tempStorage = window.sessionStorage;

var init = {
	initialize: function() {

		console.log('init.initialize');

		if (document.location.protocol == "file:") {
			// file protocol indicates phonegap
			document.addEventListener("deviceready", init.onDeviceReady, false);
		} else {
			// browser on localhost, no phonegap
			init.onDomReady();
		}
	},
	onDeviceReady: function() {
		
		$.support.cors = true;
		
		console.log('init.onDeviceReady ❤ running on DEVICE');
		init.run();

		document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);
		
		try 
		{ 
			pushNotification = window.plugins.pushNotification;
			
			//$("#app-status-ul").append('<li>registering ' + device.platform + '</li>');
			if (device.platform == 'android' || device.platform == 'Android' ||
					device.platform == 'amazon-fireos' ) {
					pushNotification.register(successHandler, errorHandler, {"senderID":"245131791687","ecb":"onNotification"});		// required!
					
			} else {
				pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
			}
		}
		catch(err) 
		{ 
			txt="Es ist ein Fehler aufgetreten:\n"; 
			txt+="" + err.message + "\n"; 
			alert(txt); 
		} 

		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFail);  // TEMPORARY oder PERSISTENT


	},
	onDomReady: function() {
		console.log('init.onDomReady ❤ running on DESKTOP');
		init.run();
	},
	run: function() {
		console.log('init.run');
	}
};
init.initialize();

// Dateisystem erfolgreich geladen!
function onFileSystemSuccess(fileSystem) {
	 fileSystem.root.getFile(
		'index.html',
		{create: true, exclusive: false},
		onGetFileSuccess,
		onFail
	);
	/*alert(fileSystem.root.toURL());
	alert(fileSystem.root.toInternalURL());
	alert(fileSystem.root.nativeURL);*/
	
}

//  Hole Root Verzeichnis
function onGetFileSuccess(fileEntry) {
	var path = fileEntry.toURL().replace('index.html', ''); // URL der offenen Datei!
	/*
		Download starten
	
	var fileTransfer = new FileTransfer();
	fileEntry.remove();
	fileTransfer.download(
		'http://apps.design-busse.de/ngk/images/pdf/leitfaden.pdf',
		path + 'leitfaden.pdf',
		function(file) {
			//alert('Download erfolgreich, datei wird geöffnet: ' + file.toURI());
			showPDF(file.toURI());
		},
		function(error) {
			alert('download error source ' + error.source);
			alert('download error target ' + error.target);
			alert('upload error code: ' + error.code);
		}
	);*/
}

// PDF Anzeigen
function showPDF(url) {
	//window.resolveLocalFileSystemURI(url, onResolveSuccess, onFail); <- Klappt
	cordova.plugins.fileOpener2.open(
		url, // e.g. '/var/mobile/Applications/XXXXXXXXX/Library/files/mypdf.pdf'
		'application/pdf', {
			error: function(errorObj) {
				alert('Error status: ' + errorObj.status + ' - Error message: ' + errorObj.message);
			},
			success: function() {
				//alert('Datei erfolgreich geladen');
			}
		}
	);
}


function onResolveSuccess(fileEntry){
	alert(fileEntry.name);	
	alert(fileEntry.fullPath);	
	alert(fileEntry.filesystem);	
}

function onFail(error){
	alert(error.code);
}


function onOnline() {
	document.getElementById('offline').css('display', 'none');
}

function onOffline() {
	
	if(activ==0){
		document.getElementById('offline').css('display', 'block');
	}
	
}

// handle APNS notifications for iOS
function onNotificationAPN(e) {
	if (e.alert) {
		// $("#app-status-ul").append('<li>push-notification: ' + e.alert + '</li>');
		 // showing an alert also requires the org.apache.cordova.dialogs plugin
		 navigator.notification.alert(e.alert);
	}
		
	if (e.sound) {
		// playing a sound also requires the org.apache.cordova.media plugin
		var snd = new Media(e.sound);
		snd.play();
	}
	
	if (e.badge) {
		pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
	}
}

// handle GCM notifications for Android
function onNotification(e) {
	switch( e.event )
	{
		case 'registered':
		if ( e.regid.length > 0 )
		{
			// Token für Android
			final_token = e.regid;
			window.localStorage.setItem("token", final_token);
			
			$.ajax({
				type: 'GET',
				url: 'http://apps.design-busse.de/ngk/ios/api.php?rquest=set_device',
				data:  { os: 2, token: final_token },
				crossDomain: true,
				cache: false,
				success: function(response) {
					
				}
			});
			
	
		}
		break;
		
		case 'message':
			if (e.foreground)
			{
				//$("#app-status-ul").append('<li>--INLINE NOTIFICATION--' + '</li>');
				// var my_media = new Media("/android_asset/www/"+ soundfile);
				// my_media.play();
			} else {
				if (e.coldstart) {
					//$("#app-status-ul").append('<li>--COLDSTART NOTIFICATION--' + '</li>');
				} else {
					//$("#app-status-ul").append('<li>--BACKGROUND NOTIFICATION--' + '</li>');
				}
			}
			
			alert(e.payload.title + ': ' + e.payload.message);
			
		break;
		
		case 'error':
			//$("#app-status-ul").append('<li>ERROR -> MSG:' + e.msg + '</li>');
		break;
		
		default:
			//$("#app-status-ul").append('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
		break;
	}
}

function tokenHandler (result) {
	// Token für iOS
	final_token = result;
	window.localStorage.setItem("token", final_token);
	$.ajax({
		type: 'GET',
		url: 'http://apps.design-busse.de/ngk/ios/api.php?rquest=set_device',
		data:  { os: 1, token: final_token },
		crossDomain: true,
		cache: false,
		success: function(response) {
			
		}
	});
	

}

function successHandler (result) {
	//$("#app-status-ul").append('<li>success:'+ result +'</li>');
}


function errorHandler (error) {
	//$("#app-status-ul").append('<li>error:'+ error +'</li>');
}

var onSettings = function() {
	var token = window.localStorage.getItem("token");
	alert(token);
	$.ajax({
		type: 'GET',
		dataType: "json",
		url: 'http://apps.design-busse.de/ngk/ios/api.php?rquest=get_user',
		data:  { token: token },
		crossDomain: true,
		cache: false,
		success: function(response) {
			var status = response.status;
			if(status == 1) {
				$('.status').addClass('on');
			} else {
				$('.status').addClass('off');
			}
			$('.id').text(response.id);
			
		}
	});

	return;
};

var changeStatus = function(status) {
	var token = window.localStorage.getItem("token");
	
	$.ajax({
		type: 'GET',
		url: 'http://apps.design-busse.de/ngk/ios/api.php?rquest=change_status',
		data:  { token: token, status: status },
		crossDomain: true,
		cache: false,
		success: function(response) {
			alert('Der Status wurde geändert');			
		}
	});

	return;
};


$('.status').click(function(){
	
	if($(this).hasClass('off')) {
		changeStatus(1);
		$(this).removeClass('off');
		$(this).addClass('on');
	} else {
		changeStatus(0);
		$(this).removeClass('on');
		$(this).addClass('off');
	}
	
});

var onNews = function() {
		

	$.ajax({
		type: 'GET',
		dataType: "json",
		url: 'http://neusser-grenadierkorps.de/webapp/api.php',
		data:  { "action": "news" },
		crossDomain: true,
		cache: false,
		success: function(response) {
			
			var news = response;
			var ausgabe = '<ul>';
			for (var i=0; i < news.length; i++) {
				var current = news[i];
				ausgabe += '<li><strong>'+current.date+'</strong><br>'+current.subheadline+'<br>'+current.text+'</li>';
			}
			ausgabe += '<ul>';
			$( "#news" ).html( ausgabe );
			
			onReady();
			
		}
	});

	return;
};

var onTwitter = function() {
	
	$.ajax({
		type: 'GET',
		dataType: "json",
		url: 'http://neusser-grenadierkorps.de/webapp/api.php',
		data:  { "action": "twitter" },
		crossDomain: true,
		cache: false,
		success: function(response) {
			
			var news = response;
			var ausgabe = '<ul>';
			for (var i=0; i < news.length; i++) {
				var current = news[i];
				ausgabe += '<li><strong>'+current.date+'</strong><br>'+current.text+'</li>';
			}
			ausgabe += '<ul>';
			$( "#twitter" ).html( ausgabe );
			
		}
	});

	return;
};

