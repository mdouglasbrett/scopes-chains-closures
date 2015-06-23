function foo() {
	var bar;
	quux = "global scope";
	function zip() {
		var quux;
		bar = true;
	}
	return zip;
}
