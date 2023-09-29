function order(){
    // section 1
    let name = String(prompt("Please entaer your name"));

    // section 2
    let gender = String(prompt("Please entaer your gender"));
    let title;

    // section 3
    if(gender == "male" || gender == "Male"){
        window.alert ("welcome to the cafe mr " + name);
        title = "Mr";
    }
    else if(gender == "female" || gender == "Female"){
        window.alert("welcome to the cafe ms " + name);
        title = "Ms";
    }
    else{
        window.alert("welcome to the cafe");
    }

    // section 4
    let drinkType = String(prompt("Do you prefer a hot or a cold drink?"));

    // section 5
    let drinkName = String(prompt("please Enter the name of your drink"));

    // section 6
    window.alert("Your drink is getting prepared");

    // section 7
    console.log(title + " " + name + " ordered " + drinkType + " " + drinkName);
}