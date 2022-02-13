//Validar si el texto introducido tiene numeros
var numeros="0123456789";
function tiene_numeros(texto){
   for(i=0; i<texto.length; i++){
      if (numeros.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
} 
//Validar si el texto tiene letras Mayusculas
var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
function tiene_mayusculas(texto){
   for(i=0; i<texto.length; i++){
      if (letras_mayusculas.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
} 
//Validar acentos y simbolos
var acento= "áéíóúñüàè{}´+[]!#$%&/()=?¡¿'|´+-.,@+-*/,.:"
function tiene_acentos(texto){
   for(i=0; i<texto.length; i++){
      if (acento.indexOf(texto.charAt(i),0)!=-1){
         return 1;
      }
   }
   return 0;
} 

//boton encriptar
	var botonEncriptar = document.querySelector("#btn-encriptar");
	botonEncriptar.addEventListener("click",function Encriptar(){
	var textoEscrito = document.querySelector("#input-texto");
	let encriptarTexto = textoEscrito.value;
//Validacion de espacio vacio, si tiene numeros, si tiene mayusculas
	if(textoEscrito.value == "") {
			 alert("Tiene que ingresar texto");
			 document.querySelector("#input-texto").style.borderColor="#FF0000";
		}
		else if(tiene_numeros(encriptarTexto)==1){
			alert("Debe ingresar texto no Numeros");
			document.querySelector("#input-texto").style.borderColor="#FF0000";
		}
		else if(tiene_mayusculas(encriptarTexto)==1){
			alert("Solo debe ingresar letras minusculas");
			document.querySelector("#input-texto").style.borderColor="#FF0000";
		}
		else if(tiene_acentos(encriptarTexto)==1){
			alert("No debe ingresar acentos u otros simbolos");
			document.querySelector("#input-texto").style.borderColor="#FF0000";
		}		
		else{
				document.querySelector("#input-texto").style.borderColor="#CdCdCd";
				var vocal = /[aeiou]/gi;				
				let palabraEncriptada=[];									
				var encriptarVocal = {a: "ai",e: "enter",i: "imes", o: "ober",u: "ufat"};
				palabraEncriptada = encriptarTexto.replace(vocal,function(matched){
					return encriptarVocal[matched];				
				}); 
				document.querySelector("#msg").value= palabraEncriptada;
		}	
	});
	
//boton desencriptar
	var botonDesncriptar = document.querySelector("#btn-desencriptar");
	botonDesncriptar.addEventListener("click",function Desencriptar(){
	var desencriptarTexto = document.querySelector("#msg");
	var almacenaTexto= desencriptarTexto.value
		if(desencriptarTexto.value == "") {
			 alert("No tiene texto para Desencriptar");
			 document.querySelector("#msg").style.borderColor="#FF0000";
		}
		else if(tiene_numeros(almacenaTexto)==1){
			alert("Debe ingresar texto no Numeros");
			document.querySelector("#msg").style.borderColor="#FF0000";
		}
		else if(tiene_mayusculas(almacenaTexto)==1){
			alert("Solo debe ingresar letras minusculas");
			document.querySelector("#msg").style.borderColor="#FF0000";
		}
		else if(tiene_acentos(almacenaTexto)==1){
			alert("No debe ingresar acentos u otros simbolos");
			document.querySelector("#msg").style.borderColor="#FF0000";
		}
		else{
			document.querySelector("#msg").style.borderColor="#CdCdCd";
			let palabraDesencriptada=[];
			var vocalesEncriptadas = /ai|enter|imes|ober|ufat/gi;	
			var caracteres = {ai: "a",enter: "e",imes: "i",ober: "o",ufat: "u"};						
			palabraDesencriptada = almacenaTexto.replace(vocalesEncriptadas,function(matched){
					return caracteres[matched];				
				});
			document.querySelector("#msg").value= palabraDesencriptada;			
		}	
	});
		
//boton copiar
	var botonCopiar = document.querySelector("#btn-copy");
		botonCopiar.addEventListener("click",function Copiar(){			
			var textoEscrito = document.querySelector("#input-texto").value;
			var copiaTexto = document.querySelector("#msg").value;		
			if(textoEscrito == "" && copiaTexto==""){
					alert("No tiene texto a copiar");
			}		
			else{
					alert("Texto copiado");
						var cajaTexto =  document.querySelector("#input-texto");
						cajaTexto.addEventListener("click",function(){
						botonCopiar.addEventListener("click",function Copiar(){
						cajaTexto.select();
						document.execCommand('copy');
							});
						});		
							var cajaCopia = document.querySelector("#msg");
							cajaCopia.addEventListener("click",function(){
							botonCopiar.addEventListener("click",function Copiar(){
							cajaCopia.select();
							document.execCommand('copy');
								});
							});
			}
		});
		
	
		


