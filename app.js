let arr = [];

arr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(arr);

for(let i = 20; i >=0; i--){
    console.log(i);
}

let words = prompt("Выбери цвет: красный, желтый, зеленый,")

if(words == "красный"){
    alert("STOP!");
}else if(words == "желтый"){
    alert("READY!")
}else if(words == "зеленый"){
    alert("GO!")
}else{
    alert("ERROR!, Выберите один из вышеуказанных цветов!")
}