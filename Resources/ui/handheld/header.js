function Header(){
	var self = Titanium.UI.createView({
		top:0,
		backgroundColor:'pink',
		height:80,
		width:'100%',
	});
	
	var titulo = Titanium.UI.createLabel({
		text:'App de ejemplo',
		top:10,
		font:{fontSize:25},
	});
	
	
	self.add(titulo);
	return self;
}
module.exports = Header;