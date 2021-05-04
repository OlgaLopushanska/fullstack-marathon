function mine(){
	let Number = 123;
	let BigInt = 1234567890123456789012345678901234567890n;
	let String = 'Single quotes are ok too';
	let Boolean = true;
	let Null = null;
	let Undefined = undefined;
	let Object = ['apple', 'pear'];
	let Symbo = Symbol("foo");
	let Functio = function(){};

	let Function = alert();
	alert('Number is ' + typeof(Number) + '\nBigInt is ' + typeof(BigInt) + 
		'\nString is ' + typeof(String) + '\nBoolean is ' + typeof(Boolean) +
		'\nNull is ' + typeof(Null) + '\nUndefined is ' + typeof(Undefined) +
		'\nObject is ' + typeof(Object) + '\nSymbo is ' + typeof(Symbo) +
		'\nFunctio is ' + typeof Functio);
}