function order(){
    
    // section 2
    // let gender = String(prompt("Please enter your gender"));
    // let title;

    // section 3
    // if(gender == "male" || gender == "Male"){
    //     window.alert ("welcome to the cafe mr " + name);
    //     title = "Mr";
    // }
    // else if(gender == "female" || gender == "Female"){
    //     window.alert("welcome to the cafe ms " + name);
    //     title = "Ms";
    // }
    // else{
    //     window.alert("welcome to the cafe");
    // }

    // Ex 2
    // instead of section 3
    // while loop
    // while(gender != "male" && gender != "Male" && gender != "female" && gender != "Female"){
    //     gender = String(prompt("Something went wrong. Please enter your gender (Male or Female)"));
    // }
    // if(gender == "male" || gender == "Male"){
    //     window.alert ("welcome to the cafe mr " + name);
    //     title = "Mr";
    // }
    // else if(gender == "female" || gender == "Female"){
    //     window.alert("welcome to the cafe ms " + name);
    //     title = "Ms";
    // }

    
    // section 1
    let name = String(prompt("Please enter your name"));

    // ex 3 
    // instead of ex 2 for the previous section 
    // it take the value for gender and check it, but using a function that is called here
    let gender = String(prompt("Please enter your gender"));
    let title;
    gender = getGender(gender);

    function getGender(gender){
        while(gender != "male" && gender != "Male" && gender != "female" && gender != "Female"){
            gender = String(prompt("Something went wrong. Please enter your gender (Male or Female)"));
        }
        if(gender == "male" || gender == "Male"){
            window.alert ("welcome to the cafe mr " + name);
            title = "Mr";
        }
        else if(gender == "female" || gender == "Female"){
            window.alert("welcome to the cafe ms " + name);
            title = "Ms";
        }
        return gender;
    }

    let age = Number(prompt("Please enter your age"));
    while(isNaN(age)){
        age = Number(prompt("Something went wrong, please try again"));
    }
    
    // section 4
    let drinkType = String(prompt("Do you prefer a hot or a cold drink?"));

    // section 5
    let drinkName = String(prompt("please Enter the name of your drink"));

    // ex2
    let order = [name, gender, drinkType, drinkName];

    // section 6
    window.alert("Your drink is getting prepared");
    


    // section 7
    // console.log(title + " " + name + " ordered " + drinkType + " " + drinkName);

    // ex2
    // instead of section 7
    for(var i = 0;i<order.length;i++){
        console.log(order[i]);
    }

    // DOM task
    // create elements to add
    // let paragraph = document.createElement("p");
    // let list = document.createElement("ul");
    // let listItem1 = document.createElement("li");
    // let listItem2 = document.createElement("li");
    // var listItem3 = document.createElement("li");


    // // assign content for each element
    // paragraph.textContent = `${name}`;
    // listItem1.textContent = `Gender: ${gender}`;
    // listItem2.textContent = `Age: ${age}`;
    // listItem3.textContent = `Drink: ${drinkType} ${drinkName}`;

    // // add items to div to the last child
    // document.getElementById("dom").appendChild (paragraph);
    // document.getElementById("dom").appendChild (list);

    // // add id to the list then add list items in it
    // list.setAttribute('id','infoList');
    // document.getElementById("infoList").appendChild(listItem1);
    // document.getElementById("infoList").appendChild(listItem2);
    // document.getElementById("infoList").appendChild(listItem3);
}
