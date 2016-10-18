var main = function () {    
	"use strict";
	$('.route button').on('click', function (event) {
		var route_input = $('#routeInput').val();
		functionToRun(route_input);
        
	});

	var functionToRun = function(route_input)
	{console.log(route_input);
		if(route_input == '/Average')	
        	$.ajax({
	            contentType: 'application/json',
	            type: 'POST',
	            url: 'http://localhost:3000/Average',
	            data: JSON.stringify({
	                'array': '[1,2,3,4]'
	            }),
	            dataType: 'json',
	            success: function(data) {
	                window.alert('Result: ' + data.result);
	            }
        	});
        else if(route_input == '/AllEven')	
        	$.ajax({
	            contentType: 'application/json',
	            type: 'POST',
	            url: 'http://localhost:3000/AllEven',
	            data: JSON.stringify({
	                'array': '[1,2,3,4]'
	            }),
	            dataType: 'json',
	            success: function(data) {
	                window.alert('Result: ' + data.result);
	            }
        	});	
        else if(route_input == '/InArray')	
        	$.ajax({
	            contentType: 'application/json',
	            type: 'POST',
	            url: 'http://localhost:3000/InArray',
	            data: JSON.stringify({
	                'array': '["hello","world"]',
	                'string': 'hello'
	            }),
	            dataType: 'json',
	            success: function(data) {
	                window.alert('Result: ' + data.result);
	            }
        	});
        else if(route_input == '/InArrayTwice')	
        	$.ajax({
	            contentType: 'application/json',
	            type: 'POST',
	            url: 'http://localhost:3000/InArrayTwice',
	            data: JSON.stringify({
	                'array': '["a","b","a","c"]',
	                'string': 'a'
	            }),
	            dataType: 'json',
	            success: function(data) {
	                window.alert('Result: ' + data.result);
	            }
        	});	
        else if(route_input == '/IsEven')	
        	$.ajax({
	            contentType: 'application/json',
	            type: 'POST',
	            url: 'http://localhost:3000/IsEven',
	            data: JSON.stringify({
	                'array': '[1,2,3,4]'
	            }),
	            dataType: 'json',
	            success: function(data) {
	                window.alert('Result: ' + data.result);
	            }
        	});	
        else if(route_input == '/Largest')	
        	$.ajax({
	            contentType: 'application/json',
	            type: 'POST',
	            url: 'http://localhost:3000/Largest',
	            data: JSON.stringify({
	                'array': '[1,2,3,4]'
	            }),
	            dataType: 'json',
	            success: function(data) {
	                window.alert('Result: ' + data.result);
	            }
        	});	
        else
        	alert("It puts the route in the text box, or it gets the hose again!");			
	}
};

$(document).ready(main);