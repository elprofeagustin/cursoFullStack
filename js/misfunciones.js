function gestion_password()
{
   let v1 = prompt("ingrese contraseña entre 8 y 10 caracteres");
   let r=v1.length;
   if(r>=8 && r<=10)
   {
      alert("parametros correctos <br>");
      alert("pass: " + v1.charAt(0) + "...." + v1.charAt(r-1))
   }
   else
   {
      alert("error: la contraseña no cumple los requisitos <br>");
   }
}

function dame_palabra(n)
{
   let mipalabra = n.substring(0,5);
   alert(mipalabra);
   let r = n.indexOf("@");
   if(r != -1)
   {
      alert("datos correctos");
   }
   else
   {
      alert("incorrecto" )
   }
   alert(n.toUpperCase());
   alert(n.toLowerCase());

}
function datos_pago()
{
  let n_c = document.getElementById("nombre").value;
  let mifecha = new Date();
  let venta = {
     cliente: n_c,
     importe: 500,
     fecha: mifecha,
     producto : 'placa de video'
  };
  console.log("datos de la venta");
  console.log("cliente: " + venta.cliente);
  console.log("fecha: " + venta.fecha);

}
function pintar(col) {
   alert("cambio boton");
   document.getElementById('btn1').style.backgroundColor = col;
}