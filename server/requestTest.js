//! TEST SERVER REQUESTS



//* REGISTER USER

// fetch("http://localhost:4000/users/register", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         username: "test",
//         email: "test@test.bg",
//         password: "test123",
//         rePassword: "test123",
//     }),
// })
//     .then((res) => {
//         if (!res.ok) {
//             return res.json().then((err) => {
//                 throw new Error(err.error)
//             });
//         }
//         res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


//* LOGIN USER

// fetch("http://localhost:4000/users/login", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         email: "test@test.bg",
//         password: "test1234",
//     }),
// })
//     .then((res) => {
//         if (!res.ok) {
//             return res.json().then((err) => {
//                 throw new Error(err.error)
//             });
//         }
//         return res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err) => {
//         console.log(err);
//     })