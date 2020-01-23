	function puntos(GeoMarker)
    {
		var punto	=new String();
		var puntos	=new String();
		for(index in GeoMarker)
		{		
			punto	=GeoMarker[index];
			puntos	+=punto["latitude"]+","+punto["longitude"]+"|"; 
			console.log("field points="+puntos);    			
		    $("textarea[name='points']").val(puntos);
		}
		return puntos;
	}
	
	function limpiar_virtual()
	{		
		for(indexMarker=0;indexMarker<locationsMarker.length;indexMarker++)
		{
			locationsMarker[indexMarker].setMap(null);			
		}				
		locationsMarker.length = 0;		
		locationsMarker=Array();
	}

	function limpiar_real()
	{	
		limpiar_virtual();
		$("input#points").val("");		
		for(ilineas in lineas)
		{			
			lineas[ilineas].setMap(null);									
		}
		lineas		=Array();	
		GeoMarker	=Array();
		GeoMarker1	=Array();
	}
	
	
$(document).ready(function()
{
    limpiar_virtual();
    limpiar_real();	                 
});
