const students = [
    {id: 21 , name:'Omar Sunny'},
    {id: 31 , name:'Manna'},
    {id: 41 , name:'Poly'},
    {id: 51 , name:'Deepjol'}
]
// names = [];
// for(let i = 0; i < students.length; i++){
//     names.push(students[i].name);
// }
// console.log(names);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);

