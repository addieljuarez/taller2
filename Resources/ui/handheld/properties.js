function Properties (){
	
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff'
	});
	
	
	alert(Titanium.App.Properties.getString('pasarNumero'));
	
	
	return self;
}

module.exports = Properties;