let exercises=JSON.parse(localStorage.getItem('exercises'));

if (exercises===null){
        exercises=[];
    }

function addExercise(){
    const inputEle = document.querySelector('.inputElement');
    let exerciseName = inputEle.value;

    const weightEle = document.querySelector('.weightElement');
    let weight = weightEle.value;

    const repsEle = document.querySelector('.repsElement');
    let reps = repsEle.value;

    const setsEle = document.querySelector('.setsElement');
    let sets = setsEle.value;

    const dateElement=document.querySelector('.dateElement');
    let date= dateElement.value;

    const message = document.querySelector('.goodJob');

    if (exerciseName===""){message.innerHTML="No Exercise Selected";
        message.style.color = "red";
            setTimeout (() => {message.innerHTML=""},2000);
    }
    else {message.innerHTML="Good Job";
        message.style.color = "limegreen";
            setTimeout (() => {message.innerHTML=""},2000);

        exercises.push(
            {name : exerciseName,
            weight : weight,
            reps: reps,
            sets: sets,
            date: date});
        display(); 

        inputEle.value = "";
        weightEle.value = "";
        repsEle.value="";
        setsEle.value="";
        dateElement.value="";
        const stringified= JSON.stringify(exercises);
        localStorage.setItem('exercises',stringified);    
        };
}

let html='';
let exerciseObject='';

function display(){
    html = '';
    exercises.forEach((value,i)=>{exerciseObject=value;
            htmlCode=`<p>${exerciseObject.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        Weight: ${exerciseObject.weight} kg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        Reps: ${exerciseObject.reps} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        Sets: ${exerciseObject.sets} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        date:&nbsp;&nbsp;${exerciseObject.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="deleteButton" onclick="deleteButton(${i})">DELETE</button></p>`
    html += htmlCode;
    });
    document.querySelector('.display').innerHTML=`${html}`;
}

function deleteButton(i){
    exercises.splice(i,1);
    const stringified= JSON.stringify(exercises);
    localStorage.setItem('exercises',stringified);
    display();
}

const addButton=document.querySelector('.addButton')
addButton.addEventListener('click',()=>{
    addExercise();
});
