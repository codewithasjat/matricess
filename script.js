function outer(){
    let count=0 
    return function inner(){
        count++
        console.log(count)
    }
}

let result = outer()
result()
result()