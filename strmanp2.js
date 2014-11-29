var name = "albERt EINstEiN"
var s= name[0].toUpperCase();
var t = name.indexOf(" ");
var firstname = s + name.substr(1,t).toLowerCase();
var lastname = name.substr(t+1).toUpperCase();
var name = firstname + lastname ;
console.log(s);
console.log(t);
console.log(firstname);
console.log(lastname);
console.log(name);