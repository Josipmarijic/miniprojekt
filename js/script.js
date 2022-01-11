const list = document.createElement("div");
document.body.append(list);

for (let i = 1; i <= 5; i++) {
    const ele = document.createElement("h1");
    const hue = 120 + (i*20);
    ele.style.backgroundColor = `hsl(${hue}, 80%, 85%)`;
    ele.innerText = `Rad ${i}`;
    ele.style.margin = "10px";
    ele.style.height = `${i*10}px`;
    ele.style.fontSize = `${i*10}px`;
    ele.style.textAlign = "center";
    list.append(ele);
    
    
}

const flexboss = document.createElement("div");
document.body.append(flexboss);
flexboss.style.display = "flex";
flexboss.style.border = "1px solid black"
flexboss.style.justifyContent = "space-around";


const flex = document.createElement("div");
flexboss.append(flex);
flex.style.display = "flex";
flex.style.flexDirection ="column";
flex.style.flexBasis ="200px";
flex.style.backgroundColor = "skyblue"
flex.style.margin = "50px";



for (let i = 0; i < 10; i++) {
    const ele = document.createElement("p");
    ele.innerText = i;
    flex.append(ele);
    ele.style.margin = "10px";
    if(i%2){
        ele.style.backgroundColor = "pink";
    }
    else if (i==4) {
        ele.style.backgroundColor = "skyblue";
        
    } else {
        ele.style.backgroundColor = "red";
        
    }
    
    
}

const flex2 = document.createElement("div");
flexboss.append(flex2);
flex2.style.display = "flex";
flex2.style.flexDirection = "column-reverse";
flex2.style.flexBasis = "200px";
flex2.style.backgroundColor = "skyblue";
flex2.style.margin = "50px";
for (let i = 0; i < 10; i++) {
    const ele = document.createElement("p");
    ele.innerText = i;
    flex2.append(ele);
    ele.style.margin = "10px";

    if(i%2){
        ele.style.backgroundColor = "pink";
    }
    
         
    else if (i==8)
    {
   ele.style.backgroundColor = "skybue";
   
}
    else {
        ele.style.backgroundColor = "red";
        
    }
    
    
}
let numbers = ["Ett", "Två", "Tre", "Fyra", "Fem", "Sex", "Sju", "Åtta", "Nio", "Tio"];
const flex3 = document.createElement("div");
flexboss.append(flex3);
flex3.style.display = "flex";
flex3.style.flexDirection = "column";
flex3.style.flexBasis = "200px";
flex3.style.backgroundColor = "skyblue";
flex3.style.margin = "50px";
for (let i = 0; i < numbers.length; i++) {
    const ele = document.createElement("p");
    ele.innerText = numbers[i];
    flex3.append(ele);
    ele.style.margin = "10px";

    if(i==5){
        ele.style.backgroundColor = "skyblue";
    }
    else if (i%2) {
        ele.style.backgroundColor = "pink";
        
    } else {
        ele.style.backgroundColor = "red";
        
    }
    
    
    
}


    
