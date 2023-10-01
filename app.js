function order(){
    // section 1
    let name = String(prompt("Please enter your name"));

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

    // ex 3 
    // instead of ex 2 for the previous section 
    // it take the value for gender and check it, but using a function that is called here
    let gender = String(prompt("Please enter your gender"));
    let title;
    getGender(gender);

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
}
