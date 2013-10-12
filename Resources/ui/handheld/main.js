function Main (){
	var Eventos = require('ui/handheld/eventos');
	var Param = require('ui/handheld/param');
	var Properties = require('ui/handheld/properties'); 
	
	
	var numero = 10;
	var numero2 = 'numero';
	
	var self = Titanium.UI.createScrollView({
		height:300,
		width:'100%',
		backgroundColor:'#fff',
		top:10,
		layout:'vertical',
	});
	
	
	
	var boton1 = Titanium.UI.createButton({
		title:'Evento1',
		height:40,
		width:150,
		top:20,
		backgroundColor:'#000',
		backgroundImage:'none',
		borderColor:'red',
		borderWidth:3,
		borderRadius:5,
		font:{fontSize:18,},
	});
	
	
	var boton2 = Titanium.UI.createButton({
		title:'Eventos App',
		height:40,
		width:150,
		top:20
	});
	
	var boton3 = Titanium.UI.createButton({
		title:'parametro',
		height:40,
		width:150,
		top:20
	});
	
	var boton4 = Titanium.UI.createButton({
		title:'Properties',
		height:40,
		width:150,
		top:20
	});
	
	var boton5 = Titanium.UI.createButton({
		title:'mapa',
		height:40,
		width:150,
		top:20
	});
	
	var boton6 = Titanium.UI.createButton({
		title:'boton',
		height:40,
		width:150,
		top:20
	});
	
	var boton7 = Titanium.UI.createButton({
		title:'boton',
		height:40,
		width:150,
		top:20
	});
	
	
	
	//--------------------------------------------------------
	// eventos
	//-------------------------------------------------------
	
	boton1.addEventListener('swipe',function(e){
		if (e.direction == 'left') {
			alert('left');
		}else if(e.direction == 'right'){
			alert('right');
		}
	});
	
	
	
	boton2.addEventListener('click', function(){
		var eventos = new Eventos();
		eventos.open();
	});
	
	
	boton3.addEventListener('click', function(e){
		var param = new Param(numero);
		param.open();
	});
	
	
	boton4.addEventListener('click', function(e){
		var properties = new Properties;
		properties.open();
		Titanium.App.Properties.setString('pasarNumero', numero2);
	});
	
	
	
	boton5.addEventListener('click', function(e){
		
	});
	
	//-------------------------------------------------------
	
	self.add(boton1);
	self.add(boton2);
	self.add(boton3);
	self.add(boton4);
	self.add(boton5);
	self.add(boton6);
	self.add(boton7);
	return self;
}
module.exports = Main;