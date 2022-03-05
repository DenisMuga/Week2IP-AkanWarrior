var DaysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
var AkanNames = {
    "male": {
        "sunday": "Kwasi",
        "monday": "Kwadwo",
        "tuesday": "Kwabena",
        "wednesday": "Kwaku",
        "thursday": "Yaw",
        "friday": "Kofi",
        "saturday": "Kwame"
    },
    "female": {
        "sunday": "Akosua",
        "monday": "Adwoa",
        "tuesday": "Abenaa",
        "wednesday": "Akua",
        "thursday": "Yaa",
        "friday": "Afua",
        "saturday": "Ama"
    }
}

let birthday = document.getElemementById('birthday');
let gender = document.getElemementById('gender');
let submitBtn = document.getElementById('submit-btn');
let results = document.getElementById('result-name');

submitBtn.onclick = (event) => {
    event.preventDefault();
    let genderValue =gender.options[gender.selectedIndex].value;
    let birthdayValue =birthday.value;

    if(!birthdayValue || !genderValue){
        alert("All fields are required");
    }
    else{
        let officialBirthDay = new Date(birthdayValue);
        let day = DaysOfTheWeek[officialBirthDay.getDay()];

        if (genderValue === "male"){
            let akanName = AkanNames.male[day];
            results.innerHTML = akanName;
        }
    }
}