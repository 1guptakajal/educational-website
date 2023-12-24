let availableKeywords=[
    'html','css','javascript'
];
const resultbox=document.querySelector(".result-box");
const inputbox=document.getElementById("input-box");

inputbox.onkeyup=function(){
    let result=[];
    let input=inputbox.value;
    if(input.length){
        result=availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultbox.innerHTML='';
    }
}

function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultbox.innerHTML="<ul>"+ content +"</ul>";
}
function selectInput(list){
inputbox.value=list.innerHTML;
resultbox.innerHTML=' ';
}