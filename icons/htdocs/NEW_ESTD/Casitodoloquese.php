<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<title>Casitodoloquesé</title>
<meta name="description" content="ejemplo de una web"/> 
<meta name="keywords" content="html5,mi blog,mi ejemplo"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="mystyle.css">
<script src="js/myScript.js"></script>
</head>


<body>

	<div id="container">

		<header class="cabezera">
		
			<a href="#"><h4 class="logo">LOGO</h4></a>
			
			<div class="title">
				<h1>casitodoloquesé</h1>
				<br>	
				<p class="subtitulo">Un viejo proberbio chino dice tanbien un hombre solo puede ser un ejercito<br><cite>provervio chino</cite></p>
			</div>
				
<!----------------Formulario iniciar sesión----------------->
			<button class="iniciarsesion" onclick="document.getElementById('id01').style.display='block'">Iniciar sesión</button>

			<div id="id01" class="login">
  
				<form class="modal-content animate" action="/action_page.php">

					<span class="close" onclick="document.getElementById('id01').style.display='none'" title="Cerrar">&times;</span>

					 <div class="containerlogin">
						 <label><b>Usuario</b></label>
						 <input type="text" placeholder="Introduzca su nombre de usuario" name="uname" required>

						<label><b>Contraseña</b></label>
						<input type="password" placeholder="Introduzca su contraseña" name="psw" required>

						<button type="submit">Iniciar sesión</button>
						<input type="checkbox" checked="checked">Recuérdame
					</div>

					<div class="containercancel" style="">
						<button class="cancelbtn" type="button" onclick="document.getElementById('id01').style.display='none'">Cancelar</button>
						<span class="psw"><a href="#">Recuperar contraseña</a></span>
					</div>
				</form>
			</div>
		  <!--Fin formulario inciar sesión-->
		  
			  <!---------------- Formulario de Registro ---------->
			
		<button class="registrarse" onclick="document.getElementById('id011').style.display='block'">Registrarse</button>

			<div id="id011" class="registro">
			  <span onclick="document.getElementById('id011').style.display='none'" class="close" title="Cerrar">×</span>
			  
			  <form class="modal-content animate" action="/action_page.php">
				<div class="container_registro">
				  <label><b>Email</b></label>
				  <input type="text" placeholder="Introduzca su Email" name="email" required>

				  <label><b>Contraseña</b></label>
				  <input type="password" placeholder="Introducir contraseña" name="psw" required>

				  <label><b>Repite la contraseña</b></label>
				  <input type="password" placeholder="Repite la contraseña" name="psw-repeat" required>
				  <input type="checkbox" checked="checked"> Recuérdame
				  <p>Al crear una cuenta, usted acepta nuestros <a href="#">Términos & Privacidad</a>.</p>

				  <div class="clearfix">
				  	<button type="submit" class="signupbtn">Registrarse</button>
					<button class="cancelarbtn" type="button" onclick="document.getElementById('id011').style.display='none'">Cancelar</button>
					
				  </div>
				</div>
			  </form>
			</div>
			
		  <!--------FIN FORMULARIO DE REGISTRO---------->
			
	  </header>

		<nav>
			<ul>
				<li><a href="#">uno</a></li>
				<li><a href="#">Fotos</a></li>
				<li><a href="#">Nosotros</a></li>
				<li><a href="#">Contacto</a></li>
			</ul>
		</nav>
		<!--Cerramos menu de navegacion-->
		<main role="main">
		<section class="mainArticle">
			<div class="row">
				<article class="column left">
					<header class="cabezeraArticulo">
						<!--<hgroup id="document-title>--Esta etiqueta demomento la quitamos ya que no se si la voy a usar-->
							<!--<h1>Titulo del mensaje uno</h1>--Esta demonento tambien-->
							<h2><a class="headline" title="leer articulo" href="ejemplo_operadores.html">Subtitulo del mensaje uno</a></h2><br>
						<!--</hgroup>-->
						<time datetime="05-07-2015" pubdate>Publicado 05-07-2015</time>
					</header>

					<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

				<figure>
					<img src="../Desktop/cumpletia/retocada2.jpg" alt="mi primer img">
					<figcaption>
						Esta es la imagen de mi primer mensaje
					</figcaption>
				</figure>
				<footer class="comentarios">
					<p>Comentarios (0)</p>
				</footer>
				</article>



				<aside class="column right">
			 <!-------------------BUSCADOR--------------------->
				 <form>
					<input class="buscar" type="text" name="search" placeholder="Buscador"><!--<i class="fa fa-search"></i>-->
				 </form>
				
				 <!------------------FIN BUSCADOR----------------------->
				 <div class="card">
					  <img class="imgcard" src="francisco coto.jpg" alt="Paco">
					  <h1>Paco</h1>
					  <p class="estesoyyo">Yo soy el encargadillo de esto</p>
					  <p class="about me">me llamo paco y soy el encargadillo de esto asi que espero que mole y os guste el royo este</p>
					  <div style="margin: 24px 0;">
						<a href="#"><i class="fa fa-dribbble"></i></a> 
						<a href="#"><i class="fa fa-twitter"></i></a>  
						<a href="#"><i class="fa fa-linkedin"></i></a>  
						<a href="#"><i class="fa fa-facebook"></i></a> 
					 </div>
					 <p><!--<button>Contact</button>--></p>
				</div>

					<blockquote>Mensaje numero1</blockquote>
					<blockquote>mensaje numero2</blockquote>
				</aside>
			</div><!--Cerramos div class row-->
		</section>
		</main>
		
			<footer>Derechos Reservados &copy; 2015 2016
		</footer>
    
	</div><!--Cerramos Div class container-->

</body>
</html>


