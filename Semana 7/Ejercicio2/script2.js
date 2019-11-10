	// Array con todas las imágenes que deseamos que se vayan cambiando a
	// cada clic
    var imagenes=Array("http://programandoointentandolo.com/ejemplos/imagenes/cubo/img1.png",
    "http://programandoointentandolo.com/ejemplos/imagenes/cubo/img2.png",
    "http://programandoointentandolo.com/ejemplos/imagenes/cubo/img3.png",
    "http://programandoointentandolo.com/ejemplos/imagenes/cubo/img4.png");
	var imagenVisible=0;
 
	// Función que cambia la imagen actual por la siguiente
	function cambiar(img)
	{
		imagenVisible++;
		if(imagenVisible>=imagenes.length)
		{
			imagenVisible=0;
		}
		img.src=imagenes[imagenVisible];
		cargarSiguienteImagen();
	}
 
	/**
	 * Esta función carga la siguiente imagen para no tener que esperar su carga
	 * en el momento de mostrarla.
	 */
	function cargarSiguienteImagen()
	{
		if((imagenVisible+1)<imagenes.length)
		{
			console.log(imagenVisible+1);
			var imgTmp=new Image();
			imgTmp.src=imagenes[imagenVisible+1];
		}
	}
 
	window.onload=function() {
		cargarSiguienteImagen();
	}