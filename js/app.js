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
		
		
		var push = PushNotification.init({
			android: {
				senderID: "245131791687"
			},
			ios: {
				alert: "true",
				badge: true,
				sound: 'true'
			},
			windows: {}
		});
		
		push.on('registration', function(data) {
			final_token = data.registrationId;
			window.localStorage.setItem("token", final_token);
			var os = 1;
			if(final_token.length == 64) {
				os = 1;
				//Apple
			} else {
				os = 2;
				//Android
			}
			
			$.ajax({
				type: 'GET',
				url: 'http://apps.apfel.gold/ngk/ios/api.php?rquest=set_device',
				data:  { os: os, token: final_token },
				crossDomain: true,
				cache: false,
				success: function(response) {
					
				}
			});
		});
		
		push.on('notification', function(data) {				
			alert(data.title + ': ' + data.message);
		});

		
		
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFail);  // TEMPORARY oder PERSISTENT

		onReady();

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
		'http://apps.apfel.gold/ngk/images/pdf/leitfaden.pdf',
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


function successHandler (result) {
	//$("#app-status-ul").append('<li>success:'+ result +'</li>');
}


function errorHandler (error) {
	//$("#app-status-ul").append('<li>error:'+ error +'</li>');
}

var onSettings = function() {
	var token = window.localStorage.getItem("token");
	$.ajax({
		type: 'GET',
		dataType: "json",
		url: 'http://apps.apfel.gold/ngk/ios/api.php?rquest=get_user',
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

var onTermine = function() {
	

	window.plugins.calendar.hasReadWritePermission(
	  function(result) {
		// if this is 'false' you probably want to call 'requestReadWritePermission' now
		if(result === false) {
			alert('Du hast die Rechte für den Kalender nicht freigegeben. Bitte überprüfe deine Sicherheitseinstellungen');
			return false;
			
			else {
			
				window.plugins.calendar.listCalendars(function(message) {
					$('#calenderIds select').html("");
					
					message.forEach(function(entry) {
						$('#calenderIds select').append($('<option>', {
							value: entry["id"],
							text: entry["name"]
						}));
					});
					
				},function(message) {
					alert("Sorry, es ist ein Fehler aufgetreten. Bitte wenden Sie sich an Christian Busse <christian.busse@apfel.gold>");
				});
			}
		}

	  }
	)	
	


};

var changeStatus = function(status) {
	var token = window.localStorage.getItem("token");
	
	$.ajax({
		type: 'GET',
		url: 'http://apps.apfel.gold/ngk/ios/api.php?rquest=change_status',
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

