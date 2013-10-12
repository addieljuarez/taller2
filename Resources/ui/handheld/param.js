function Param (numero){
	
	var test = numero;
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff'
	});
	
	
	alert(test);
	
	return self;
}

module.exports = Param;