


let students = [
  { name: "Asjat", marks: 80 },
  { name: "Rahul", marks: 65 },
  { name: "Om", marks: 90 }
];

let result = students.map((element)=>{
   
    return {
        name : element.name,
        marks :element.marks+5
    }
})
console.log(result)