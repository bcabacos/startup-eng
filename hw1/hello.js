#!/usr/bin/env node

var fs = require('fs');
var outf = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";

fs.writeFileSync(outf,out);

console.log("Script: "+__filename+"\nWrote: "+out+"To: "+outf);
