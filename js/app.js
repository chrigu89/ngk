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



		var calenderId = 1;
		var calenderName  ="";

		var successLoad = function(message) {

			var calender = message[0];
			calenderId = calender["id"];
			calenderName = calender["name"];

		};
		var errorLoad = function(message) {
			//alert("Sorry, es ist ein Fehler aufgetreten. Bitte wenden Sie sich an Christian Busse <christian.busse@apfel.gold>");
			//return false;
		};

		window.plugins.calendar.listCalendars(successLoad,errorLoad);

		

		function allEvents(dat) {

			var success = function(message) {
				//alertObject(message);

			};

			var error = function(message) {
				alert("Sorry, es ist ein Fehler aufgetreten. Bitte wenden Sie sich an Christian Busse <christian.busse@apfel.gold>");
				//return false;
			};

			var doAction = confirm('Möchtest du alle Termine in deinen Kalender "'+calenderName+'" eintragen? Um Dublikate zu vermeiden werden alle Termine mit gleichem Namen vor dem Eintragen gelöscht.');


			if(doAction == false) {

			} else {


				$("#load_").fadeIn(300, 'easeInQuart', function() {
					$('#load_').addClass("loader_img");

					setTimeout(function(){

					for (var i = 0; i < termine_array.length; ++i){
						var heute_date = new Date();	

						var title = termine_array[i]["title"];
						var location = termine_array[i]["location"];
						var notes = termine_array[i]["teaser"];

						tmp_array1 = new Array();
						tmp_array2 = new Array();
						tmp_array3 = new Array();

						tmp_array1 = termine_array[i]["datum"].split('.');
						str_=tmp_array1.join(':');
						tmp_array2=str_.split(':');
						str_=tmp_array2.join(' ');
						tmp_array3=str_.split(' ');

						var calOptions = window.plugins.calendar.getCalendarOptions();
						//calOptions.calendarId = calenderId;
						//calOptions.calendarId = 6;

						var startDate = new Date(tmp_array3[2], (tmp_array3[1] - 1), tmp_array3[0], tmp_array3[3], tmp_array3[4], 0, 0, 0);
						var endDate = new Date(tmp_array3[2], (tmp_array3[1] - 1), tmp_array3[0], tmp_array3[3], (tmp_array3[4] + 1), 0, 0, 0);

						if(startDate > heute_date){		
							window.plugins.calendar.deleteEvent(title, location, notes, startDate, endDate, success, error);
							sleep(150);
							window.plugins.calendar.createEvent(title, location, notes, startDate, endDate, success, error);
							sleep(150);

						}


					}

					alert('Alle Termine wurden erfolgreich im Kalender "'+calenderName+'" eingetragen.');


					$("#load_").fadeOut(300, 'easeInQuart', function() {
						$('#load_').removeClass("loader_img");
					});


					}, 300);

				});

			}
			return false;


		}


		
		
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

