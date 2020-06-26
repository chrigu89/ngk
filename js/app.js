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
		
				
		alert('init');
		alert(cordova.file);
		/*
		var Downloader = window.plugins.Downloader;

		var downloadSuccessCallback = function(result) {
			   alert(result.file);
			   alert(result.path);
		};

		var downloadErrorCallback = function(error) {
			   alert('error');
			   alert(error);
		};

		var options = {
			title: 'Downloading File', // Download Notification Title
			url: "https://apps.apfel.gold/siteguide20/files/pdf/1-template-baustelleninformation.pdf", // File Url
			path: "1-template-baustelleninformation.pdf", // The File Name with extension
			description: 'The pdf file is downloading', // Download description Notification String
			visible: true, // This download is visible and shows in the notifications while in progress and after completion.
			folder: "downloads" // Folder to save the downloaded file, if not exist it will be created
		}

		alert('Downloader.download');
		Downloader.download(options, downloadSuccessCallback, downloadErrorCallback);

		alert('test');
*/
		var dl = new download();

		alert('download');

		dl.Initialize({
			fileSystem : cordova.file.cacheDirectory,
			folder: "download",
			unzip: false,
			remove: false,
			timeout: 0,
			success: DownloaderSuccess,
			error: DownloaderError,
			headers: [
				{
					Key: 'Authorization',
					Value: 'Basic ' + btoa(token)
				}
			]
		});
		 
		 
		alert('Get');
		dl.Get("https://apps.apfel.gold/siteguide20/test.zip");
		 
		function DownloaderError(err) {
			alert("download error: " + err);
			console.log("download error: " + err);
		}
		 
		function DownloaderSuccess() {
			alert("yay!");
		}
		
		

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
				url: 'https://apps.apfel.gold/ngk/ios/api.php?rquest=set_device',
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


		
		// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFail);  // TEMPORARY oder PERSISTENT

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
		url: 'https://apps.apfel.gold/ngk/ios/api.php?rquest=get_user',
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
	setTimeout(function(){
		window.plugins.calendar.hasReadWritePermission(
		  function(result) {
			// if this is 'false' you probably want to call 'requestReadWritePermission' now
		
				$('#calenderIds').html("<select></select>");
				window.plugins.calendar.listCalendars(function(message) {


					message.forEach(function(entry) {
						$('#calenderIds select').append($('<option>', {
							value: entry["id"],
							text: entry["name"]
						}));
					});

					$('.allEvents').show();

				},function(message) {
					alert("Sorry, es ist ein Fehler aufgetreten. Bitte wenden Sie sich an Christian Busse <christian.busse@apfel.gold>");
				});

				}

		  
		)
	}, 1200);
	return;
	


};

var changeStatus = function(status) {
	var token = window.localStorage.getItem("token");
	
	$.ajax({
		type: 'GET',
		url: 'https://apps.apfel.gold/ngk/ios/api.php?rquest=change_status',
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
		url: 'https://neusser-grenadierkorps.de/webapp/api.php',
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
		url: 'https://neusser-grenadierkorps.de/webapp/api.php',
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

