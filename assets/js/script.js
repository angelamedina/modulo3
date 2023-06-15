
let ingresar = [];


//ingresar presupuesto
function agregarPresupuesto(presupuestoAdd){
   var presupuestoIngresado ={
      presupuesto: presupuestoAdd,
   }
   ingresar.push(presupuestoIngresado);
};

//ingresar presupuesto
var miIngreso = document.querySelector('#formGroupExampleInput');

var btnAgregar = document.querySelector('#presupuestoAdd');
   btnAgregar.addEventListener ('click', function(){
   var ingreso = miIngreso.value
   var ingreso = document.querySelector('#ingreso');
   
   ingreso.innerHTML = '$' + miIngreso.value

   
  
   console.log('ingreso')
   })

function TotalGasto(nombre, gasto){
   this.nombre= nombre;
   this.gasto = gasto;
}
//ingresar gasto
   var miGasto = document.querySelector('#gastoCantidad')

   var btnGasto = document.querySelector('#gastoAdd');
      btnGasto.addEventListener('click', function(){
      var gastos = miGasto.value
      var gastos = document.querySelector('#gastos') 
 
      gastos.innerHTML = '$' + miGasto.value
      console.log('btnGasto')
      })

//ingresar nombre gasto en tabla2
   var miNombre = document.querySelector('#nombreGasto')

   var btnNombre = document.querySelector('#gastoAdd');
      btnNombre.addEventListener('click', function(){
      var nombre = miNombre.value
      var nombre = document.querySelector('#gastoName')

      nombre.innerHTML = '' + miNombre.value
      console.log('btnNombre')
   }) 

//ingreso gasto en tabla2
   var miGasto = document.querySelector('#gastoCantidad')
 
   var btnGasto = document.querySelector('#gastoAdd');
      btnGasto.addEventListener('click', function(){
      var gastos = miGasto.value
      var gastos = document.querySelector('#cantidadGasto') 

      gastos.innerHTML = '$' + miGasto.value
      let miTotal = new TotalGasto(miGasto.value)
      TotalGasto.push(miGasto)
      console.log('btnGasto')
      graficar/* los que estamos agregandode contable */
   })

  /*  
   var btnGasto = document.querySelector('#gastoAdd');
      btnGasto.addEventListener('click', (event) => {
         if(miGasto.value != ""){
            const td = document.createElement("td")
            td.add("")
            td.innerHTML= templateElement(`${miGasto.value}`)
         }else{
            alert("completa loscampos")
         }
      })*/

//Obtener saldo
      var miSaldo = document.querySelector('#saldo')

      var btnSaldo = document.querySelector('#gastoAdd');
      btnSaldo.addEventListener('click', function(){
            var saldo = miSaldo.value
            var saldo = document.querySelector('#saldo')

      saldo.innerHTML = '$' + (miIngreso.value - miGasto.value)
       console.log(miSaldo)
      })

//Obtener lista de gastos falta









//eliminar datos y nuevo saldo
var eliminarDatos = document.querySelector('#eliminar');

   var btnEliminar = document.querySelector('#gastoAdd')
   eliminar.addEventListener('click', function(){
   var eliminarNombre = miNombre.value
   var eliminarNombre = document.querySelector('#nombreGasto') 
   
   var eliminarValor = miSaldo.value
   var eliminarValor = document.querySelector('#gastoCantidad')

   var nuevoSaldo = miGasto.value
   var nuevoSaldo = document.querySelector('#gasto')

   eliminarNombre.innerHTML = ''  + miNombre.value
   eliminarValor.innerHTML = '' +  miSaldo.value
   nuevoSaldo.innerHTML = '$' + (miSaldo.value + miGasto.value)
   console.log('eliminarDatos')
   
   })

   
    /*  
    function eliminarPresupuesto(eliminar){
      var presupuestoIngresado ={
         presupuesto: presupuestoAdd,
      }
      eliminar.pop(presupuestoIngresado);
   };*/