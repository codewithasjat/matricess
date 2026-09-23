

let a =25 
var b =26
const c = 90 ;

function outer(){
let a =90
let name1 = "asjat"
    function inner(){
       console.log(a)
    }
 inner()
}
console.log(name1)

outer()
{
    var name2 = 34
}
console.log(name2)