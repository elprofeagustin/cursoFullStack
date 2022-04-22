window.addEventListener('load',inicio);
function inicio()
{
   document.getElementById("pagar").addEventListener('click',generarventa);
}
precio_producto=0;
cant_productos=0;
misproductos = [];
function agregarproducto(p,d) {
   precio_producto = precio_producto + p;
   misproductos.push(d);
   cant_productos+=1;
   document.getElementById("c1").value=cant_productos;
 }
function quitararticulo(p)
{
   if(cant_productos<=0)
   {
      alert("no se puede quitar mas productos")
   }
   else
   {
      cant_productos-=1;
      document.getElementById("c1").value=cant_productos;
      misproductos.pop();
      precio_producto=precio_producto - p;
   }
      
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
     producto: misproductos,
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