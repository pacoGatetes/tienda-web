$(document).ready(function(){
			$("#tienda_online_02").validate();
			
			
		});
		//VALIDADOR PARA PUNTO PACK Y DE PASO PARA TODO
		$.validator.addMethod('cp_envio', function (value) { return /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/.test(value);  }, 'Por favor Codigo postal correcto.'); 		
		$("#cp_envio").addClass("nombre_envio");
		
		/*$.validator.addMethod('nombre_envio', function (value) { return /^[0-9A-Za-záéíóúñ_\-'., ]{2,32}$/.test(value);  }, 'Caracteres incorrectos.'); 		
		$("#nombre_envio").addClass("nombre_envio");*/
		
		/*$.validator.addMethod('apellidos_envio', function (value) { return /^[0-9A-Za-záéíóúñ_\-'., ]{2,32}$/.test(value);  }, 'Caracteres incorrectos.'); 		
		$("#apellidos_envio").addClass("apellidos_envio");*/
		
		/*$.validator.addMethod('direccion_envio', function (value) { return /^[0-9A-Za-záéíóúñ_\-'., ]{2,32}$/.test(value);  }, 'Caracteres incorrectos.'); 		
		$("#direccion_envio").addClass("direccion_envio");
		
		$.validator.addMethod('localidad_envio', function (value) { return /^[0-9A-Za-záéíóúñ_\-'., ]{2,32}$/.test(value);  }, 'Caracteres incorrectos.'); 		
		$("#localidad_envio").addClass("localidad_envio");*/
		
		$.validator.addMethod('telefono_envio', function (value) { return /^[0-9][0-9]{8}$/.test(value);  }, 'Caracteres incorrectos.'); 		
		$("#telefono_envio").addClass("telefono_envio");		
		
		$.validator.addMethod('email_envio', function (value) { return /^[\w\-\.\@_]{0,70}$/.test(value);  }, 'Caracteres incorrectos.'); 		
		$("#email_envio").addClass("email_envio");	
		//----------------------------------------------
		
		
		var idem = $("#idem:checked").val();
		if (idem==1){$('.datos_facturacion ul').slideDown();
		}else{$('.datos_facturacion ul').slideUp();}
		
		$("#entrega_domicilio").slideDown('slow');
		
		$(document).ready(function(){
			//en caso de que entremos por primera vez a la pagina y no exista todavia la session idem quitamos las 
			//validaciones de facturación ya que por defecto el formulario esta oculto
		var idem = $("#idem:checked").val();
		 
		if(idem==null){
			
			$('.datos_facturacion ul').slideUp();
			/*$('#datos_facturacion').animate({ backgroundColor: "#cff" }, 1000);*/				
			$("#nombre_factura").removeClass("required");
			$("#apellidos_factura").removeClass("required");
			$("#dni_factura").removeClass("required");
			$("#direccion_factura").removeClass("required");
			$("#localidad_factura").removeClass("required");
			$("#cp_factura").removeClass("required");
			$("#email_factura").removeClass("required");
			$("#telefono_factura").removeClass("required");	
		}
		});
		
		$('#idem').click(function(){			
			var idem = $("#idem:checked").val();
			if (idem==1){					
				/*$('#datos_facturacion').animate({ backgroundColor: "#ffc" }, 1000);*/
				$('.datos_facturacion ul').slideDown();
								
				$("#nombre_factura").addClass("required");
				$("#apellidos_factura").addClass("required");
				$("#dni_factura").addClass("required");
				$("#direccion_factura").addClass("required");
				$("#localidad_factura").addClass("required");
				$("#cp_factura").addClass("required");
				$("#email_factura").addClass("required");
				$("#telefono_factura").addClass("required");
				//$("#provincia_factura").addClass("required");			
			}else{
				$('.datos_facturacion ul').slideUp();
				/*$('#datos_facturacion').animate({ backgroundColor: "#cff" }, 1000);*/				
				$("#nombre_factura").removeClass("required");
				$("#apellidos_factura").removeClass("required");
				$("#dni_factura").removeClass("required");
				$("#direccion_factura").removeClass("required");
				$("#localidad_factura").removeClass("required");
				$("#cp_factura").removeClass("required");
				$("#email_factura").removeClass("required");
				$("#telefono_factura").removeClass("required");	
				//$("#provincia_factura").removeClass("required");									
			}
		});
		
		$('select.portes').change(function(){
			var data=$('#tienda_online_02').serialize();
			//alert(data);
			$('#cesta').load('../'+ruta_includes+'/inc_proceso_compra_02.php',data);
		});
		


		$('.entrega').change(function(){
			var data=$('#metodo_entrega1').serialize();
			var data2=$('#tienda_online_02').serialize();
			//alert(data);
			$('#cesta').load('../'+ruta_includes+'/inc_proceso_compra_02.php',data+"&"+data2,function() {
				//Una vez cargado, se muestra la capa
			
				$('#entrega_domicilio').animate({ backgroundColor: "#ffc" }, 100,function() {
					$("#entrega_domicilio").slideDown('slow',function() {
						$('#entrega_domicilio').animate({ backgroundColor: "#fff" }, 1200);
					});
				});	

			});			
		});
		
		$('.punto_pack_cercanos').click(function(){
			var data=$('#tienda_online_02').serialize();
			
			$('#entrega_domicilio').animate({ backgroundColor: "#f4f4f4" }, 1000);
			$(".punto_pack_cercanos").addClass("cargando").show("slow");
			
			//alert(data);
			$('#busca_punto_pack').load('../'+ruta_includes+'/punto_packs_cercanos.php',data,function() {
				//Una vez cargado, se muestra la capa
				$('#busca_punto_pack').slideDown('slow',function(){
					$(".punto_pack_cercanos").removeClass("cargando").show("slow");
					$('#entrega_domicilio').animate({ backgroundColor: "#fff" }, 1000);
				});
			});
		});
		
		$('a.borrar_envio').click(function(){
			$('input.envio').val('');
		});
		$('a.borrar_facturacion').click(function(){
			$('input.facturacion').val('');
		});
		
	var responseObserver=[];
	function comprueba_puntopack(){
	var html = $.ajax({ 
	  url: "../"+ruta_includes+"/inc_comprueba_puntopack.php", 
	  async: false 
	 }).responseText;
	if (html==0) 
		{
			document.getElementById('comprueba_puntopack').innerHTML="<p style='color:#F00'>Necesitas elegir un punto pack.</p>";
			return false;
		}
	else return true;
	}