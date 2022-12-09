<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/jquery-ui-1.8.7.custom.js" ></script>
<script type="text/javascript" src="../js/jquery.colorbox.js"></script>

<script>
function mainmenu(){
	$("#menu_superior ul.menu_cabecera ul").css({display: "none"}); // Opera Fix
	$("#menu_superior ul.menu_cabecera li").hover(function(){
			$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
			},
			function(){
			$(this).find('ul:first').css({visibility: "hidden"});
			});
	}
	$(document).ready(function(){
		mainmenu();
	});
	$(".menu").mouseover(function(){
		mainmenu();
	});
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


function mostrar(submenu){
	$(document).ready(function() {
	    $('.cerrar').slideUp(300);
		$('#submenu'+submenu).slideDown(300);
		})
	}

</script>
<script>
            function muestraOculta(id) {
                if ($('#' + id).is(":visible")) {
                    $('#' + id).hide(250);
                } else {
                    $('#' + id).show(250);
                }
            }
			</script>
<script type="text/javascript">

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3) 
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
</script>

<script>
	$(document).ready(function() {
		$('#columna_principal .columna_index:nth-child(4)').css('margin-right', '0px');
		$("a[rel='abre_aviso_legal']").colorbox({iframe:true, innerWidth:550, innerHeight:344});
	    $("a[rel='abre_creditos']").colorbox({iframe:true, innerWidth:250, innerHeight:300, scrolling:false});
	});
</script>

<script type="text/javascript">
  $(document).ready(function(){ // Script del Navegador
    $("ul.subnavegador").not('.selected').hide();
    $("a.desplegable").click(function(e){
      var desplegable = $(this).parent().find("ul.subnavegador");
      $('.desplegable').parent().find("ul.subnavegador").not(desplegable).slideUp('slow');
      desplegable.slideToggle('slow');
      e.preventDefault();
    });
	$('.menu_cabecera ul.subcat').each(function(){
		var width;
		var li = $(this).children('li').length;
		if(li > 24){
			width = 645;
		}
		if(li < 25 && li > 16){
			width = 485;
		}
		if(li < 17 && li > 8){
			width = 325;
		}
		if(li < 9){
			width = 165;
		}
		$(this).css('width', width+'px');
	});
 });
</script>

<script type="text/javascript">
$(function() {
	$(".banner1")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
$(function() {
	$(".banner2")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
$(function() {
	$(".banner3")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
$(function() {
	$(".banner4")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
</script>
