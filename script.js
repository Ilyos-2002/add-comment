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



elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()

    let { inptitle, inpbody, inpuser } = evt.target.elements
    // // console.log(inptitle.value, inpbody.value, inpuser.value);
    // // newData.push(title.elInpTitle.value)
    // newData.push(title.inptitle.value)
    // // newData.push(body.elInpBody.value)
    // newData.push(body.inpbody.value)
    // // newData.push(userId.elInpUser.value)
    // newData.push(userId.inpuser.value)

    let userData = await Api.GET("users");
    console.log(userData);
    userData.forEach(element => {
        let option = document.createElement("option")
        option.textContent = element.name;
        option.value = element.id;
        // option.value = element
        element.append(option);
    });

})

// console.log(newData);
// console.log(await Api.POST("posts", newData));