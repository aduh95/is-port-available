const isPortAvailable = require("./index");

// Allow argument from command line, for testing purposes
if (typeof process.argv[2] !== "undefined") {
  var port = process.argv[2];
  console.log("Checking port " + port + " ...");
  isPortAvailable(port).then(function(status) {
    if (status) console.log("Port " + port + " is available!");
    else
      console.log(
        "Port " +
          port +
          " is  NOT available! (" +
          isPortAvailable.lastError +
          ")"
      );
  });
}
