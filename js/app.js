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
		downloadFile('https://apps.apfel.gold/siteguide20/test.zip');

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


function downloadFile(URL) {
    //step to request a file system 
	alert('downloadFile');
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);

    function fileSystemSuccess(fileSystem) {
	alert('fileSystem');
        var download_link = encodeURI(URL);
        fileName = download_link.substr(download_link.lastIndexOf('/') + 1); //Get filename of URL
	alert(fileName);
        var directoryEntry = fileSystem.root; // to get root path of directory
        directoryEntry.getDirectory(folderName, {
            create: true,
            exclusive: false
        }, onDirectorySuccess, onDirectoryFail); // creating folder in sdcard
        var rootdir = fileSystem.root;
        var fp = fileSystem.root.toNativeURL(); // Returns Fullpath of local directory

        fp = fp + "/" + folderName + "/" + fileName; // fullpath and name of the file which we want to give
        // download function call
        filetransfer(download_link, fp);
    }

    function onDirectorySuccess(parent) {
        // Directory created successfuly
		alert('onDirectorySuccess');
    }

    function onDirectoryFail(error) {
        //Error while creating directory
        alert("Unable to create new directory: " + error.code);

    }

    function fileSystemFail(evt) {
        //Unable to access file system
		alert('fileSystemFail');
        alert(evt.target.error.code);
    }
}

function filetransfer(download_link, fp) {
    var fileTransfer = new FileTransfer();
    // File download function with URL and local path
    fileTransfer.download(download_link, fp,
        function(entry) {
            alert("download complete: " + entry.fullPath);
        },
        function(error) {
            //Download abort errors or download failed errors
            alert("download error source " + error.source);
        }
    );
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

