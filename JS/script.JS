window.onload=function(){
    //alert("viembenido a la diweb");
}

function otraFuncion(){
    console.log("mensaje 1");
}

function mostrarvariables(){
    let variable=12345;
    let variableString="hola 1";
    let variableArray= ["elemento 1", "elemento 2"];
    console.log(variable);
    console.log(variableString);
    console.log(variableArray);
    console.log(variableArray[0]);
}

function concatenarVariables(parametro1, parametro2){
    let texto= parametro1+parametro2;
    console.log(texto);

}

function mostraobjeto(){
    let objetoTipoJson={"elemento1":"valor1", "elemento2":"valor2", "elemento3":"valor3"}
    console.log(objetoTipoJson);
    console.log(objetoTipoJson.elemento1);
}

function mostraobjetosClasicos(){
    let objeto= new Object();
    objeto.nombre= 'alumno';
    objeto.correo= 'correo@gmail.com';
    objeto.telefono= 47264325;
    console.log(objeto.correo);
    console.log(objeto);
    funcionAnidada(objeto);
    eliminarpropiedadDeObjetos(objeto);
}

function funcionAnidada(argument){
    console.log(argument.nombre);
}

function eliminarpropiedadDeObjetos(objeto){
    if(delete objeto.correo){
        console.log(objeto);
    }
    
}

function ManipularElementosDelDom(){
    let elemento=document.getElementById("prueba4");
    let elemento2=document.getElementsByName("cajaDetexto")[0].value;

    console.log(elemento.value);
    console.log(elemento2);
}

function borraValores(idElemento){
    idElemento.value="";
    console.log(idElemento.value);

}

function CrearElementosEnEjecusion(){
    let e=document.createElement('div');
    let container=document.getElementById("contenedor");
    e.append("texto de pruebas");
    container.append(e);
    
}

function eliminarElementos(){
    let elemento = document.getElementById("contenedor");
    contenedor.remove();
}


//*************** */
function bitacora(){
    alert ("minuto 55:28 elementos del dom del video");
}