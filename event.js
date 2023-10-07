function myOrder(){

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let drinkTemp;
    if(document.getElementById("cold").checked && document.getElementById("hot").checked){
        drinkTemp = "Invaild selected";
    }
    else if(document.getElementById("cold").checked){
        drinkTemp = "Cold";
    }
    else if (document.getElementById("hot").checked){
        drinkTemp = "Hot";
    }
    else {
        drinkTemp = "Invaild selected";
    }
    let drink = document.getElementById('drink').value;

    console.log(`name: ${name}, age: ${age}, temp: ${drinkTemp}, type: ${drink},`);

    // let paragraph1 = document.createElement("p");
    // let paragraph2 = document.createElement("p");
    // let paragraph3 = document.createElement("p");
    // let paragraph4 = document.createElement("p");
    
    // // assign content for each element
    // paragraph1.textContent = `Name: ${name}`;
    // paragraph2.textContent = `Age: ${age}`;
    // paragraph3.textContent = `Drink Temperature: ${drinkTemp}`;
    // paragraph4.textContent = `Drink Name: ${drink}`;

    // // add items to div to the last child
    // document.getElementById("dom").appendChild (paragraph1);
    // document.getElementById("dom").appendChild (paragraph2);
    // document.getElementById("dom").appendChild (paragraph3);
    // document.getElementById("dom").appendChild (paragraph4);

    // add order info in the document
    document.getElementById('dom').innerHTML = 
        `<p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Drink Temperature: ${drinkTemp}</p>
        <p>Drink Name: ${drink}</p>`;
}