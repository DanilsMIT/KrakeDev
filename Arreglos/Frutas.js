let frutas=["kiwi","manzana","piña","papaya"]

Buscar=function(){
    let FrutaI=recuperarTexto("box");
    let CFruta=buscarFruit(FrutaI);

    if(CFruta==null){
        alert("La fruta no se encuentra en stock")
    }else{ alert("Contamos con esta fruta en inventario")}
}

buscarFruit=function(fruta){
    let FrutaFounded=null

    let element;
    for(e=0;e<frutas.length;e++){
        element=frutas[e]

        if(element==fruta){
            FrutaFounded=fruta
            break;
        }
    }

    return FrutaFounded
}