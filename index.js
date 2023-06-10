console.log(`Piramide`);

const numero= 7; 

function piramideAsteriscos(n){

    let txt = "";
    let contador = 0;
    let espacios = n-1;
    let asteriscos = 1;

    while(contador<n){
        if (espacios > 0){
            for (let i = espacios; i > 0; i--) {
                txt = txt + " ";
            }
        } 
        for (let i = 0; i <asteriscos ; i++) {
            txt= txt+"*";
        }
    console.log(txt);
    txt ="";
    contador++;
    espacios--;
    asteriscos++; 

    }
}
piramideAsteriscos(numero);


console.log(`Libro`);


let libro = [0, 1]; 

const numberPages = 90; 
const paginaIr = 36; 
let contadorlibro = 0; 

while ( 1 <= numberPages <= 10**5, 1 <= paginaIr <= numberPages){

        for (let i = 0; i < numberPages; i++) {
            
            if( libro[0]==paginaIr || libro[1]==paginaIr){
                console.log("Debes voltear las paginas "+contadorlibro+ " veces."); 
                break;
            }
            libro[0] = libro[0]+2;
            libro[1] = libro[1]+2;
            contadorlibro++; 
        }
        break;
}


console.log(`Birds in migration`);


let aves= [1,4,4,2,1,1,1];
aves.sort(); 
console.log(aves);

let indice = 0; 
let contador1 =[0,0]; //El primer numero es el valor que se repite el segundo las veces que se repite.
let contador2 =[0,0];

// contador1 = buscar(indice); 
// console.log(contador1); 

// let temporal; 
// temporal = buscar(indice);
// contador1[0] =temporal[0];
// contador1[1] =temporal[1];;
// indice =temporal[2];

// console.log("Resultado de  la funcion: "+temporal);
// console.log("Contador 1: "+contador1);
// console.log("Indice de la funcion temporal y asigado a indice: "+indice);


while (indice < aves.length) {

    let temporal; 

    for (let i = indice; i < aves.length; i++) {
        temporal = buscar(i);

        if(temporal[1] > contador1[1]){

            contador1[0] =temporal[0];
            contador1[1] =temporal[1];
            i=temporal[2];
        }
        else if(temporal[1] > contador2[1]){

            contador2[0] =temporal[0];
            contador2[1] =temporal[1];
            i =temporal[2];
        }
        else if (i==aves.length){
            break;
        }
    }
    
    if(contador1[1]>contador2[1]){
        console.log(contador1[0]);
        break;
    }
    else if(contador2[1]>contador1[1]){
        console.log(contador2[0]);
        break;
    }
    else if(contador2[1]==contador1[1]){

        if(contador1[0]<contador2[0]){
            console.log(contador1[0]);
            break;
            
        }
        else{ 
            console.log(contador2[0]);
            break;
        }
    }
    else {
        console.log("Error");
        break;
    }

}

//Funcion para contar las veces que un numero se repite en el arreglo
function buscar(posicion){ 
    
    let temporal =[0,1,0]; // primer numero -> es el numero. 2-> Es el numero de veces que se repite ese numero en el arreglo, es el nuevo indice donde lo dejo. 
    temporal[0] = aves[posicion];

    for (let i = posicion; i < aves.length; i++) {
        if(aves[i]==aves[i+1]){
            temporal[1]++;
        }
        else{
            temporal[2]=i;
            return temporal; //Regresa el numero, las veces que aparece en el arreglo y el siguiente indice a revisar.
        }
    }
}

































