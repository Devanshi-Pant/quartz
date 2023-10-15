
const text=document.getElementById("post-text");
const  table=document.getElementById("article-table");



function add(){
    if (text.value===''){
        alert("Text can't be left empty");}
   
    else{
        let a=document.createElement("a");
        a.innerHTML=text.value;
        table.appendChild(a);
    
    }
    text.value="";
save();    }




function save(){
    localStorage.setItem("data", table.innerHTML);
}

function  showtask(){
    table.innerHTML=localStorage.getItem("data");
}

showtask();



