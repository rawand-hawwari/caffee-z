function myOrder(){

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let types = document.querySelectorAll('#type');
    let type;
    if(types[0].checked == true){
        type = "hot";
    }else if(types[1].checked == true) {
        type = "cold";
    }else{
        type = "not specified";
    }
    let drink = document.getElementById('drink').value;

    console.log(`${name},${age},${type},${drink}`);
    let paragraph1 = document.createElement("p");
    let paragraph2 = document.createElement("p");
    let paragraph3 = document.createElement("p");
    let paragraph4 = document.createElement("p");
    
    // assign content for each element
    paragraph1.textContent = `Name: ${name}`;
    paragraph2.textContent = `Age: ${age}`;
    paragraph3.textContent = `Drink Temperature: ${type}`;
    paragraph4.textContent = `Drink Name: ${drink}`;

    // add items to div to the last child
    document.getElementById("dom").appendChild (paragraph1);
    document.getElementById("dom").appendChild (paragraph2);
    document.getElementById("dom").appendChild (paragraph3);
    document.getElementById("dom").appendChild (paragraph4);
}