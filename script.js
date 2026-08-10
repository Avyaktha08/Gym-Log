const exercises=[];

function addExercise(){
    const inputEle = document.querySelector('.inputElement');
    let exerciseName = inputEle.value;

    const weightEle = document.querySelector('.weightElement');
    let weight = weightEle.value;

    const repsEle = document.querySelector('.repsElement');
    let reps = repsEle.value;

    const setsEle = document.querySelector('.setsElement');
    let sets = setsEle.value;

    exercises.push(
        {name : exerciseName,
        weight : weight,
        reps: reps,
        sets: sets});

    inputEle.value = "";
    weightEle.value = "";
    repsEle.value="";
    setsEle.value="";
}

let html='';
let exerciseObject='';

function display(){
    exercises.forEach((value)=>{exerciseObject=value});
    htmlCode=`<p>${exerciseObject.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        Weight: ${exerciseObject.weight} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        Reps: ${exerciseObject.reps} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        Sets:${exerciseObject.sets}</p>`
    html += htmlCode;
    document.querySelector('.display').innerHTML=`${html}`;
}

const addButton=document.querySelector('.addButton')
addButton.addEventListener('click',()=>{
    addExercise();
    display();
});
