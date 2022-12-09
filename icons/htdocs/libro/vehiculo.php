


<?php class Coche{
		
		protected $ruedas;
		
		var $color;
		
		var $motor;
		
		function Coche(){//Método construtor;
			
			$this->ruedas=4;
			$this->color="";
			$this->motor=1600;
		}
	
	function get_motor(){
		return $this->motor;
	}
	
	function get_ruedas(){
		
		return $this->ruedas;
	}
	
		
		function arrancar(){
			
			echo "Estoy arancando<br>";
			
		}
		
		function girar(){
			
			echo "Estoy girando<br>";
		}
		
		function frenar(){
			
			echo "Estoy frenado<br>";
				
		}
		
		function establece_color($color_coche,$nombre_coche){
			
			$this->color=$color_coche;
			
			echo "El color de " . $nombre_coche . " Es:  " . $this->color . "<br>";
			
			
		}
		
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

 class Camion extends Coche{
	 
	 	function Camion(){//Método construtor
		
	 		$this->ruedas=8;
			$this->color="gris";
			$this->motor=2600;
			
		}
		function set_color($color_camion,$nombre_camion){
			
			$this->color=$color_camion;
			
			echo "El color de " . $nombre_camion . " Es:  " . $this->color . "<br>";
			
			
		}
	function arrancar(){
		
		parent::arrancar();
		
		echo "camión arrancado";
	}
		
	}
	?>
