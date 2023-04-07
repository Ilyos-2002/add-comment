//optional changing


// let data = {
//     name: "ali",
//     address: {
//         country: "uzbekistan"
//     }
// }


// let city = data?.address?.city
// let city = data && data.addresscity && data.address.city;
// let city= !data ? undefined:!data.address? undefined :data.address.city
// console.log(city);



// object keys ()

// console.log(...Object.keys(data).concat(Object.keys(data.address)) );
// console.log(...Object.keys(data), ...Object.keys(data.address));
// console.log(...Object.values(data), ...Object.values(data.address));
// console.log(...Object.entries(data), ...Object.entries(data.address));

// export { data }  //malumot exsport qilish uchun


// const Api = {
//     GET: async (value) => {
//         let data = await fetch(`https://jsonplaceholder.typicode.com/${value}`)
//             .then((res) => res.json)
//             .then((data) => data)
//             .catch((error) => console.log(error))
//         return data
//     },
//     // GET_POST: async () => {
//     //     let data = await fetch(`https://jsonplaceholder.typicode.com${value}`)
//     //         .then((res) => res.json)
//     //         .then((data) => data)
//     //         .catch((error) => console.log(error))
//     //     return data
//     // }
// }

const Api = {
    GET: async (value) => {
        try {
            let data = await fetch(`https://jsonplaceholder.typicode.com/${value}`)
                .then((res) => res.json())
                .then((data) => data)
            // .catch((error) => console.log(error))
            return data
        } catch {
            return undefined
        }
    },
    POST: async (value, data) => {
        try {
            let userData = await fetch(`https://jsonplaceholder.typicode.com/${value}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userData)
            })
                .then((res) => res.json())
                .then((json) => json)
            return userData
        } catch {


        }
    },
    DELETE: async (value) => {
        try {
            let respons = await fetch(`https://jsonplaceholder.typicode.com/${value}`, {
                method: 'DELETE',
            })
                .then((respon) => respon.json())
                .then((json) => json);
            return respons

        } catch {
            return alert("xato delete")

        }
    }
}



export { Api }