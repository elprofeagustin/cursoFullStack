function dame_datos()
{
    let u = document.getElementById('login').value;
    let p = document.getElementById('password').value;
    let usuario_correcto= "pepe@25";
    let pass_correcto = "123456";
    if(u == usuario_correcto && p == pass_correcto)
    {
        alert("correcto");
        window.location="compra.html";
    }else
    {
        alert("es incorrecto");
    }
}
function ayuda()
{
    alert("evento ejecutado");
}
function pintar(col) {
    document.getElementById('btn1').style.backgroundColor = col;
 }