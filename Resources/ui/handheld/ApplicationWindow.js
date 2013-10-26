function ApplicationWindow() {
	
	var self = Ti.UI.createWindow({
		top:'10dpi',
		bottom:10,
		left:10,
		right:10,
		borderColor:'green',
		borderRadius:5,
		backgroundColor:'red',
		layout:'vertical',
	});
	
	
	var Header = require('ui/handheld/header');
	var Main = require('ui/handheld/main');
	var Footer = require('ui/handheld/footer');
	
	var header = new Header();
	var main = new Main();
	var footer = new Footer();
	
	
	self.add(header);
	self.add(main);
	
	Titanium.App.addEventListener('Agregarfooter', function(e){
		self.add(footer);
	});
	
	Titanium.App.addEventListener('quitarFooter', function(e){
		self.remove(footer);
	});
	
	// self.addEventListener('click', function(e){
		// self.close();
	// });
	
	
	self.addEventListener('open', function(e){
		Titanium.App.fireEvent('Agregarfooter');
	});
	
	return self;
}
module.exports = ApplicationWindow;
