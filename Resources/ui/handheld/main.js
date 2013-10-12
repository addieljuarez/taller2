function Main (){
	
	var self = Titanium.UI.createScrollView({
		height:300,
		width:'100%',
		backgroundColor:'#fff',
		top:10,
		layout:'vertical',
	});
	
	
	
	var boton1 = Titanium.UI.createButton({
		title:'boton',
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
		title:'boton',
		height:40,
		width:150,
		top:20
	});
	
	var boton3 = Titanium.UI.createButton({
		title:'boton',
		height:40,
		width:150,
		top:20
	});
	
	var boton4 = Titanium.UI.createButton({
		title:'boton',
		height:40,
		width:150,
		top:20
	});
	
	var boton5 = Titanium.UI.createButton({
		title:'boton',
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