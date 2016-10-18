var Average = function(nums) {
	var sumSoFar=0,
	average;

	nums.forEach(function (value) {
		sumSoFar = sumSoFar + value;
	});
	average = sumSoFar/nums.length;
	return average;
};

var AllEven = function (nums) {
	var largestValue = nums[0],
	allEven = true;

	for(i = 0; i < nums.length; i++) {
		if(nums[i] % 2 != 0){
			allEven = false;	
		}
	}
	return allEven;
};

var IsEven = function(nums) {
	for(i = 0; i < nums.length; i++) {
		if(nums[i] % 2 == 0){
			return true;	
		}
	}
	return false;
};

var LargestValue = function(nums) {
	var largestValue = nums[0];

	for(i = 1; i < nums.length; i++) {
		if(nums[i] > largestValue){
			largestValue = nums[i];		
		}
	}
	return largestValue;
};

var InArrayTwice = function(letterArray, letter) {
	
	var numberOfTimesSeen = 0;

	for(i = 0; i < letterArray.length; i++){
		if(letter == letterArray[i]){
			numberOfTimesSeen++;
		}
		if(numberOfTimesSeen == 2){
			return "\"" + letter + "\"" + " seen at least twice";
			break;
		}
	}
	if(numberOfTimesSeen < 2){
		return "\"" + letter + "\"" + " not seen at least twice";
	}
};

var InArray = function(worArray, string) {
	var stringInArray = false;

	for(i = 0; i < wordArray.length; i++){
		if(string == wordArray[i]){
			stringInArray = true;
		}
	}
	return stringInArray;
};

var express = require("express"),
 http = require("http"),
 app;

app = express();

app.use(express.static(__dirname + '/../client'));

http.createServer(app).listen(3000);


app.get("/", function (req, res) {
});

app.post("/Average", function (req, res) {
	console.log("Array passed: ", req.body.array);
 	var array = JSON.parse(req.body.array);
 	var result = Average(array);
 	res.json({
 		'result': result
 	});
});

app.post("/AllEven/", function (req, res) {
	console.log("Array passed: ", req.body.array);
 	var array = JSON.parse(req.body.array);
 	var result = AllEven(array);
 	res.json({
 		'result': result
 	});
});

app.post("/InArray", function (req, res) {
	console.log("Array passed: ", req.body.array);
	console.log("String passed: ", req.body.string);
 	var array = JSON.parse(req.body.array);
 	var string = JSON.parse(req.body.string);
 	var result = InArray(array, string);
 	res.json({
 		'result': result
 	});
});

app.post("/InArrayTwice", function (req, res) {
	console.log("Array passed: ", req.body.array);
	console.log("String passed: ", req.body.string);
 	var array = JSON.parse(req.body);
 	var string = JSON.parse(req.body.string);
 	var result = InArrayTwice(array);
 	res.json({
 		'result': result
 	});
});

app.post("/IsEven", function (req, res) {
	console.log("Array passed: ", req.body.array);
 	var array = JSON.parse(req.body);
 	var result = IsEven(array);
 	res.json({
 		'result': result
 	});
});

app.post("/Largest", function (req, res) {
	console.log("Array passed: ", req.body.array);
 	var array = JSON.parse(req.body);
 	var result = Largest(array);
 	res.json({
 		'result': result
 	});
});
