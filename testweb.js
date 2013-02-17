// Create a HTTP server on port 8000
// Send plain text headers and 'Hello World' to each client

var http = require('http');
var port = process.env.PORT || 5000;

var url1 = '<a href="http://www.flickr.com/photos/mdelamerced/8458417011/" title="cpwinter.jpg 10 by mdelamerced, on Flickr"><img src="http://farm9.staticflickr.com/8520/8458417011_cbba27ee41_c.jpg" width="800" height="533" alt="cpwinter.jpg 10"></a>';

var counter = 0;

http.createServer(function (req, res) {
  	
  	// increment the counter for each visitor request
  	counter=counter+1;

	var path = req.url;
	console.log("requested=" + path + " counter=" + counter);

	res.writeHead(200, {'Content-Type': 'text/html'}); // prepare response headers

	if (path == "/") {
		res.end("Hello World. You are requestor # " + counter + ".<br><a href='/page2'>Page 2</a>\n");
		
		
	} else if (path == "/page2") {
		res.end("This is really page 2. <a href='/page3'>Next.</a>\n"); // send response and close connection	
		
	} else if (path =="/page3"){
		res.end(url1+ "What are you still doing here? <a href='/'>Back.</a>\n");
	}

}).listen(port);

// console info message
console.log('Server running at http://127.0.0.1:' + port);
