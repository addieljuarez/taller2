function Mapa(){
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
	});
	
	var punto = Titanium.Map.createAnnotation({
		latitude:'19.361296',
		longitude:'-99.072865',
		pincolor:Titanium.Map.ANNOTATION_RED,
		title:'hola',
		subtitle:'saludos',
		animate:true,
	});
	
	
	
	var map = Titanium.Map.createView({
		mapType:Titanium.Map.STANDARD_TYPE,
		// mapType:Titanium.Map.TERRAIN_TYPE,
		region:{
			latitude:'19.361296', longitude:'-99.072865', latitudeDelta:0.01, longitudeDelta:0.01
		},
		annotations:[punto],
		animate:true,
		animated:true,
	});
	
	
	
	
	
	self.add(map);
	return self;
}
module.exports = Mapa;