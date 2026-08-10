const exercises=[];

function addExercise(){
    const inputEle = document.querySelector('.inputElement');
    let exerciseName = inputEle.value;

    const weightEle = document.querySelector('.weightElement');
    let weight = weightEle.value;

    exercises.push(
        {name : exerciseName,
        weight : weight});

    inputEle.value = "";
    weightEle.value = "";
}

let html='';

function display(){
    exercises.forEach
    //htmlCode='<p></p>'
    //document.querySelector('.display').innerHTML=`html`;
}

const addButton=document.querySelector('.addButton')
addButton.addEventListener('click',()=>{
    addExercise();
    display();
});