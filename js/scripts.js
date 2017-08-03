function external(url) {
    var ref = window.open(url, '_blank', 'location=yes,enableViewPortScale=yes');
}

function pdf(url) {
	
	if (navigator.userAgent.match(/(Android)/)) {
		alert("Der Download wird gestartet - bitte einen Moment Geduld");
		downloadFile(url);
		
    } else {
        var ref = window.open(url, '_blank', 'location=yes,enableViewPortScale=yes');
    }
}

function image(url) {
    var ref = window.open(url, '_blank', 'location=no,enableViewPortScale=yes');
}

function downloadFile(url){
	window.requestFileSystem(
		LocalFileSystem.TEMPORARY, 0,
		function onFileSystemSuccess(fileSystem) {
		fileSystem.root.getFile(
			'index.html', {create: true, exclusive: false},
			function gotFileEntry(fileEntry){
				var sPath = fileEntry.toURL().replace("index.html","");
				var fileTransfer = new FileTransfer();
				fileEntry.remove();
				fileTransfer.download(
					"http://apps.apfel.gold/ngk/" + url,
					sPath  + url,
					function(theFile) {
						showLink = theFile.toURI();
						cordova.plugins.fileOpener2.open(
							showLink,
							'application/pdf', {
								error: function(errorObj) {
									if(errorObj.status == 9) {
										alert('Sorry - Sie besitzen kein Programm, um PDF Dateien anzusehen.');
									} else {
										alert('Error status: ' + errorObj.status + ' - Error message: ' + errorObj.message);
									}
								},
								success: function() { }
							}
						);
					},
					function(error) {
						alert("Der Download ist fehlgeschlagen. Bitte überprüfe deine Internetverbindung.");
					}
				);
			},
		onFail);
	},
	onFail);
}



function alertObject(obj){      
	for(var key in obj) {
		alert('key: ' + key + '\n' + 'value: ' + obj[key]);
		if( typeof obj[key] === 'object' ) {
			alertObject(obj[key]);
		}
	}
}

	

/*Wenn die DropDowns Beim Firefox nicht funktionieren muss dieser Code deaktiviert werden*/
function disableselect(e) {
    return false
}

function reEnable() {
    return true
}
document.onselectstart = new Function("return false")
if (window.sidebar) {
    document.ontouchstart = disableselect
    document.ontouchmove = disableselect
    document.ontouchend = disableselect
    document.onmousedown = disableselect
}


$(window).load(function() {

})

function NachOben() {
    var y = 0;
    var x = 0;
    if (window.pageYOffset) {
        y = window.pageYOffset;
    } else if (document.body && document.body.scrollTop) {
        y = document.body.scrollTop;
    }
    if (y > 0) {
        window.scrollBy(-0, -10);
        setTimeout("NachOben()", 5);
    }
}

$(window).ready(function() {
    $("#content").css({
        "opacity": 1
    });
    $("#load_").delay(350).fadeOut(300, 'easeInQuart', function() {
        $('#load_').removeClass("loader_img");
    });
})

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


var onReady = function() {
	
	

	function kalender(dat) {
		termin_array_tmp = new Array();
		termin_array_tmp = dat.split('!+!');
		tmp_array1 = new Array();
		tmp_array2 = new Array();
		tmp_array3 = new Array();
		tmp_array4 = new Array();
		tmp_array1 = termin_array_tmp[0].split('.');
		str_ = tmp_array1.join(':');
		tmp_array2 = str_.split(':');
		str_ = tmp_array2.join(' ');
		tmp_array3 = str_.split(' ');

		var startDate = new Date(tmp_array3[2], (tmp_array3[1] - 1), tmp_array3[0], tmp_array3[3], tmp_array3[4], 0, 0, 0);
		var endDate = new Date(tmp_array3[2], (tmp_array3[1] - 1), tmp_array3[0], tmp_array3[3], (tmp_array3[4] + 1), 0, 0, 0);

		var title = termin_array_tmp[1];
		var location = termin_array_tmp[3];
		var notes = termin_array_tmp[2];
		var success = function(message) {
			alert("Der Termin wurde erfolgrich eingetragen");
			return false;
		};
		var error = function(message) {
			alert("Sorry, es ist ein Fehler aufgetreten. Bitte wenden Sie sich an Christian Busse <christian.busse@apfel.gold>");
			return false;
		};
		window.plugins.calendar.createEventInteractivelyWithOptions(title, location, notes, startDate, endDate, success, error);


	}
	
	

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
		
		var doAction = confirm("Möchtest du alle Termine in deinen Kalender eintragen? Um Dublikate zu vermeiden werden alle NGK-Termine vor dem Eintragen gelöscht.");
		
		$("#load_").delay(350).fadeIn(300, 'easeInQuart', function() {
			$('#load_').addClass("loader_img");
		});
		sleep(200);

		if(doAction == false) {
			
		} else {
 			
			
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
				calOptions.calendarId = 6;

				var startDate = new Date(tmp_array3[2], (tmp_array3[1] - 1), tmp_array3[0], tmp_array3[3], tmp_array3[4], 0, 0, 0);
				var endDate = new Date(tmp_array3[2], (tmp_array3[1] - 1), tmp_array3[0], tmp_array3[3], (tmp_array3[4] + 1), 0, 0, 0);

				if(startDate > heute_date){		
					window.plugins.calendar.deleteEvent(title, location, notes, startDate, endDate, success, error);
					sleep(150);
					window.plugins.calendar.createEventWithOptions(title, location, notes, startDate, endDate, calOptions, success, error);
					sleep(150);
					
				}


			}
			
			alert('Alle Termine wurden erfolgreich im Kalender "'+calenderName+'" eingetragen.');
			

		}
		
		$("#load_").delay(350).fadeOut(300, 'easeInQuart', function() {
			$('#load_').removeClass("loader_img");
		});
		
		return false;


	}


    function neu_seite(url) {

        $('body').animate({
            opacity: 0
        }, 300, 'easeInQuart', function() {

            window.location.href = url;

        });

    }

    xWidth = null;
    if (xWidth == null) {
        if (window.innerWidth != null)
            xWidth = window.innerWidth;

    }

    xHeight = window.innerHeight;
    $(".content").css({
        "min-height": xHeight + 20
    });

    //LinkToutch--------------------------------------------------------------------------------------------
    bewegung = false;
    tatsch = false;
    var LinkToutch = {

        elements: ['a'],
        setup: function() {
            for (j = 0; j < LinkToutch.elements.length + 1; j++) {


                for (i = 0; i < document.getElementsByTagName(LinkToutch.elements[j]).length; i++) {

                    var el = document.getElementsByTagName(LinkToutch.elements[j])[i];

                    if (navigator.userAgent.indexOf("Firefox") != -1) {
                        el.onmousedown = LinkToutch.touchstart;
                        el.onmouseup = LinkToutch.touchend;
                        el.onmousemove = LinkToutch.touchmove;
                    } else {
                        el.ontouchstart = LinkToutch.touchstart;
                        el.ontouchend = LinkToutch.touchend;
                        el.ontouchmove = LinkToutch.touchmove;
                    }
                }
            }
        },
        touchstart: function() {

            $(this).addClass("a_hover");
            bewegung = false;

        },
        touchmove: function(event) {
            bewegung = true;
            $(".a_hover").removeClass("a_hover");

        },

        touchend: function() {
            $(this).removeClass("a_hover");

            if (!bewegung) {
                if (this.className.indexOf("kalender") >= 0) {
                    kalender(this.rel);
                } else if (this.className.indexOf("allEvents") >= 0) {
                    allEvents();
                }
                if (this.id == 'alert_btn') {
                    LinkToutch.alert_schliessen();

                } else if (this.className.indexOf("feed") >= 0) {
                    //window.location.href=this.rel;
                    LinkToutch.feedback(this.id, this.rel);

                } else if (this.id.indexOf('#') >= 0) {
                    LinkToutch.formssenden(this.id);
                } else if (this.id == 'zip_btn') {
                    zip_btn_akt();
                } else if (this.className.indexOf('alert_') >= 0) {
                    LinkToutch.alert_ausgeben(this.rel);
                } else {

                    if (this.id != 'load_' && this.id != 'alert_btn' && this.href == '') {
                        if (this.className.indexOf('onclick_external') >= 0) {
                            external(this.rel);
                        } else if (this.className.indexOf('onclick_image') >= 0) {
                            image(this.rel);
                        } else if (this.className.indexOf('onclick_external') >= 0) {
                            image(this.rel);
                        } else if (this.className.indexOf('onclick_pdf') >= 0) {
                            pdf(this.rel);
                        } else if (this.className.indexOf('toogle') >= 0) {
							$('#navigation').animate({
								height: "toggle"
							});
							return false;
                        } else if (this.className.indexOf('close') >= 0) {
							$('#navigation').animate({
								height: "toggle"
							});
							return false;
						} else {
                            neu_seite(this.rel);
                        }
                    } else {

                    }
                }
            }
        }
    }
    LinkToutch.setup();


}

$(document).ready(onReady);