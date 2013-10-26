function Foto(){
	var self = Titanium.UI.createWindow({
		backgroundColor:'green'
	});
	
	
	var sound = Titanium.Media.createSound({
		url:'sounds/Aplauso.mp3',	
	});
	
	sound.play();
	
	var imagen = Titanium.UI.createImageView({
		height:200,
		width:200,
		borderColor:'red',
		// image:'http://berepublic.es/newbeBlog/wp-content/uploads/appcelerator-logo1.png',
	});
	
	
	
	if (Titanium.Media.isCameraSupported) {
		Titanium.Media.showCamera({
			success: function(event){
				var img = event.media;
				imagen.image = img;
				// var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'photo'+_bounty.id+'.png');
				// f.write(image);
				// db.addPhoto(_bounty.id,f.nativePath);
				// alert('open camera');
			},
			error: function(){
				alert('error cam');
			},
			cancel: function(){
				self.close();
			},
			saveToPhotoGallery:true,
			allowEditing:true,
			mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO, Titanium.Media.MEDIA_TYPE_VIDEO]

		});
	}else{
		Titanium.Media.openPhotoGallery({
			success: function(event){
				var img = event.media;
				imagen.image = img;
				// var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'photo'+_bounty.id+'.png');
					// f.write(image);
					// db.addPhoto(_bounty.id,f.nativePath);
				// alert('open galeria');
			},
			error:function(){
				alert('error galeria');
			},
			cancel:function(){
				self.close();
			},
			// saveToPhotoGallery:true,
			allowEditing:true,
		});
	}
	
	
	
	
	
	self.add(imagen);
	return self;
}
module.exports = Foto;