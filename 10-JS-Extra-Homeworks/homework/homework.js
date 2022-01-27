// No cambies los nombres de las funciones.

const { parseLogOptions } = require("simple-git/src/lib/tasks/log");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    
    //Escribe tu código aquí
  let claves = Object.keys(objeto); //keys = ["D", "B", "C"]
  let valores = Object.values(objeto) //values = [1, 2, 3]
  var c =claves
  var v =valores
  var cl =c.length
  var x =0
  var y =0
  var z =0
  var ag =[]

  for (let u =0; u <cl *2; u++)
  {
    if (u %2 ===0)
    {
      ag[u] =c[x]
      x++
    }
    else if (u %2 ===1)
    {
      ag[u] =v[y]
      y++
    }
  }

  let a =new Array (cl)
  for (let i =0; i <cl; i ++)
  {
    a[i]= new Array (2)
    for (let o =0; o <2; o ++)
    {
      a[i][o] =ag[z]
      z++
    }
  }
  return a
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var s =string
  var sl =s.length
  var o ={}

  for (let p =0; p <sl; p++) 
  {  
     var contar =0 
     for (let m =0; m <sl; m++) 
     {
        if (s[p] ===s[m])
        {
          contar++
          o[s[p]] =contar
        }
     }
  }
  return (o)
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var Ms =[]
  var ms =[]
  var sl =s.length
  var z =0
  var y =0
  var nospace =""
  
  for (i =0; i <sl; i++)
  {
    if (s[i]===s[i].toUpperCase())
    {
      Ms[z]=s[i]
      z =z +1
    }
    else if (s[i]===s[i].toLowerCase())
    {
      ms[y]=s[i]
      y =y +1
    }
  }
  mayus =Ms.join(nospace)
  minus =ms.join(nospace)
  return mayus + minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var invert 
  var mirror
  invert =str.split(" ").reverse().join(" ")
  mirror =invert.split("").reverse().join("")
  return mirror

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  //Antes que nada, gracias Dios por hacerme tan crack, atentamente, el Rey David.
  word =numero.toString()
  if (word === word.split("").reverse().join("")) 
  {
    return "Es capicua"
  }
  else return "No es capicua" 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arr =[]
  arr [0]=cadena
  var y =0
  nArr =[]

  for (z=0; z<cadena.length; z++)
  {
    if (arr[0][z] !=="a" && arr[0][z] !=="b" && arr[0][z] !=="c")
    {
      nArr[y] =arr[0][z]
      y =y +1
    }
  }
  return nArr.join("")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí.
  return arr.sort(function(a, b){return a.length -b.length})
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var aa =arreglo1
  var aal =aa.length
  var ab =arreglo2
  var abl =ab.length
  let n =[]
  let z =0

  for (a =0; a <aal; a++)
  {
    for (e =0; e <abl; e++)
    {
      if(aa[a]===ab[e])
      {
        n[z]=aa[a]
        z++
      }
    }
  }
  return n
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

