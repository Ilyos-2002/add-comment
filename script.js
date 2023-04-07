//optional changing


// let data = {
//     name: "ali",
//     address: {
//         country: "uzbekistan"
//     }
// }


// let city = data?.address?.city;
// console.log(city);

// import { data } from "./demo.js";
// console.log(data);
import { Api } from "./demo.js";
// console.log(await Api.GET("users"));
// console.log(await Api.GET("posts/1"));
// console.log(await Api.GET("comments/1"));


// console.log(await Api.POST("users", newData));
// console.log(await Api.DELETE("posts/1"));

let elForm = document.querySelector("#form")
// let elInpTitle = document.querySelector("#inptitle")
// let elInpBody = document.querySelector("#inpbody")
// let elInpUser = document.querySelector("#inpuser")
// let elBtn = document.querySelector("#btn")
let elSelect = elForm.querySelector("#user_id")

let userData = await Api.GET("users");
// console.log(userData);
userData.forEach(element => {
    let option = document.createElement("option")
    option.textContent = element.name;
    option.value = element.id;
    // option.value = element

    elSelect.append(option);
    // console.log(option);
});



elForm.addEventListener("submit", async (evt) => {
    evt.preventDefault()

    let { inptitle, inpbody, inpuser, } = evt.target.elements;
    console.log();
    let newObject = {
        userId: inpuser.value,
        title: inptitle.value,
        body: inpbody.value,
    }

    console.log(newObject);




})
