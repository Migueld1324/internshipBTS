etiqueta:
var var1 = 1;
while(true){
  switch(var1){
    case 1:
      console.log("Hola");
      var1 = 2;
      break;
    case 2:
      console.log("Adios");
      break etiqueta;
  }
}
