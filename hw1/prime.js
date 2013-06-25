#!/usr/bin/env node

var fs = require('fs');
var outf = "prime.txt";
var out = "2,";
var cont = 0;
var num = 3;

function isPrime(num){
	for(var i=2; i<num; i++){
		if(num%i == 0)
			return false;
	}
	return true;
}

while(cont < 100){
	if(isPrime(num)){
		out+=num+",";
		cont++;
	}
	num +=2;
}
out = out.substr(0,out.length - 1) + "\n";
fs.writeFileSync(outf,out);
console.log("Output: "+ out+"Cont: "+cont);
