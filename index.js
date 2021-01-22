
// document.addEventListener("DOMContentLoaded", function (event) {

//     document.getElementById("show").addEventListener("click", function () {
//         console.log(PersonArray);
//         let message = "Name  City\n";
//         for (i = 0; i < PersonArray.length; i++) {
//             message = message + PersonArray[i].name + "  " + PersonArray[i].city + "\n";
//         }
//         document.getElementById("output").value = message;
//     });
// });

PersonArray = []; // define an array of type Person

function formSubmitEvent() {
    let Person = {
        name: document.getElementById("custname").value,
        city: document.getElementById("city").value,
        payment: document.getElementById("payment").value
    }

    PersonArray.push(Person);
    makeCusList();
    // console.log(makeCusList());
}


function makeCusList() {
    let myUl = document.getElementById("cusList");
    myUl.innerHTML = "";

    PersonArray.map(person => {
        console.log(myUl.innerText)

        let li = document.createElement("li");
        li.innerText = `${person.name} ${person.city} ${person.payment}`

        myUl.appendChild(li)
    })
    console.log(myUl.innerText)
}