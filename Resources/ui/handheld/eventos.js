function Eventos (){
	var self = Titanium.UI.createWindow({
		backgroundColor:'#000',
		opacity:0.4,
	});
	
	var boton = Titanium.UI.createButton({
		height:40,
		width:150,
		title:'click',
	});
	
	
	boton.addEventListener('click', function(e){
		self.close();
		Titanium.App.fireEvent('Agregarfooter');
	});
	
	
	self.add(boton);
	return self;
}
module.exports = Eventos;