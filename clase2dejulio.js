console.log("aquí está")

var one= "la papa rica ";
var two= "es papa rica";
var three="papa";

if(one.indexOf(two)!=-1){
     console.log("la papa rica 1 contiene a 2 es papa rica")
}
if(one.indexOf(three)!=-1){
     console.log("la papa rica 1 contiene a 3 papa")
}
if(two.indexOf(one)!=-1){
     console.log("es papa rica 2 contiene a 1 la papa rica")
}
if(two.indexOf(three)!=-1){
     console.log("es papa rica 2 contiene a 3 papa")
}
if(three.indexOf(one)!=-1){
     console.log("papa 3 contiene a 1 la papa rica")
}
if(three.indexOf(two)!=-1){
     console.log("papa 3 contiene a 2 es papa rica")
}



