let tasks=[];
let input=document.querySelector('.inputBar');
let addButton=document.querySelector(".add");
let paragraph=document.querySelector('.tasks');
let dumassMsg=document.querySelector(".dumassMsg");
let time=document.querySelector(".time");
let date;


addButton.addEventListener("click",()=>{add()});
input.addEventListener("keydown",(eve)=>{
    if(eve.key === "Enter"){
        add();
    }
})





function add(){

    
    task=input.value;
    date=time.value;

    if(task !== ""){
    
        paragraph.innerHTML+=`<p class="task"> ${task} &nbsp&nbsp&nbsp&nbsp&nbsp
        &nbsp&nbsp&nbsp ${date} &nbsp&nbsp&nbsp&nbsp<button onclick="deleteTask(this)" class="delete">Delete</button></P>`;
        input.value='';

    }else {
        dumassMsg.innerHTML=`Bro, there ain't no task what am i supposed to add?`;
        setInterval(()=>{
            dumassMsg.innerHTML="";
        },5000);
    }



}

function deleteTask(button){
    button.parentElement.remove();
}
