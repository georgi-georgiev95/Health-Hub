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

//* GET ALL RECIPES

// fetch("http://localhost:4000/recipes/catalog")
// .then((res) => {
//     if (!res.ok) {
//         return res.json().then((err) => {
//             throw new Error(err.error)
//         });
//     }
//     return res.json()
// })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

//* CREATE RECIPE

// fetch("http://localhost:4000/recipes/add", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         name: "test",
//         difficultyLevel: "Medium",
//         imageUrl: "http://test.test",
//         ingredients: "test",
//         description: "test",
//         owner: "6635183fb878e316f8121187"
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
//     .catch((err) => console.log(err))

//* GET ALL WORKOUTS

// fetch("http://localhost:4000/workouts/catalog")
//     .then((res) => {
//         if (!res.ok) {
//             return res.json().then((err) => {
//                 throw new Error(err.error)
//             });
//         }
//         return res.json()
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))


//* CREATE WORKOUT

// fetch("http://localhost:4000/workouts/add", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         name: "test",
//         difficultyLevel: "Medium",
//         goal: "test",
//         description: "test",
//         owner: "6635183fb878e316f8121187"
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
//     .catch((err) => console.log(err))