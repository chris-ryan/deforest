#!/usr/bin/env node

// require dependencies
const https = require('https');

const apiUrl = "https://ip-ranges.amazonaws.com/ip-ranges.json";
let args = [];

// get the command line arguments and store in args[]
let argInput = process.argv.slice(2);
for (const [index, value] of argInput.entries()){
    if (value.startsWith('--')){
        args.push({'type': value.substr(2), 'value': argInput[index+1]});
    }
}

// get the JSON from Amazon's API
https.get(apiUrl, function(res){
    let raw = "";
    res.on("data", data => {
      raw += data;
    });
    res.on("end", () => {
      let results = JSON.parse(raw).prefixes;

      // loop through the arguments and filter the results accordingly
      for(const filterArg of args){
          results=results.filter(function(ipEntry){
              return ipEntry[filterArg.type] === filterArg.value;
          });
      }

      process.stdout.write(JSON.stringify(results));
    });
});