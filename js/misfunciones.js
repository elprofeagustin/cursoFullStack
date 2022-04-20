precio_producto=0;
misproductos = [];
function agregarproducto(p,d) {
   precio_producto = precio_producto + p;
   misproductos.push(d);
   alert("Se agrego el articulo para la venta");
 }

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
function generarventa()
{
  let n_c = document.getElementById("nombre").value;
  let fecha_sistema = new Date();
  let d = fecha_sistema.getDate();
  let m = fecha_sistema.getMonth() + 1;
  let y  = fecha_sistema.getFullYear();
  let mifecha =  d + "/" + m + "/" + y; 
  let venta = {
     cliente: n_c,
     importe: precio_producto,
     fecha: mifecha,
     producto : misproductos,
  };
  console.log("Detalle de la venta");
  console.log("cliente: " + venta.cliente);
  console.log("fecha: " + venta.fecha);
  console.log("importe: " + venta.importe);
  for (let f in venta.producto)
  {
     console.log(venta.producto[f]);
  }
}

function juegodearreglos()
{
   let misdatos = [];
   misdatos.push(5);
   misdatos.push("hola");
   misdatos.push(505);
   misdatos.push(24);
   delete misdatos[1];

   for(let f=0;f<misdatos.length;f++)
   {
      console.log(misdatos[f]);
   }
   for(let f in misdatos)
   {
      console.log(misdatos[f]);
   }
   misdatos.forEach(function(v,f)
   {
      console.log(v);
   });
}
