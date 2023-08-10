//Mutable 
// const updateAge = (userInfo) => {
//     userInfo.age = userInfo.age + 1;
//     return userInfo;
// }
// userInfo BEFORE { name: 'Sergio', age: 33, email: 'sv@mail.com' }
// userInfo AFTER { name: 'Sergio', age: 34, email: 'sv@mail.com' }
// updateUser { name: 'Sergio', age: 34, email: 'sv@mail.com' }

//Inmutable: Object.assign
// const updateAge = (userInfo) => {
//     return Object.assign({}, userInfo, { age: userInfo.age + 1 })
// }
// userInfo BEFORE { name: 'Sergio', age: 33, email: 'sv@mail.com' }
// userInfo AFTER { name: 'Sergio', age: 33, email: 'sv@mail.com' }
// updateUser { name: 'Sergio', age: 34, email: 'sv@mail.com' }


//Inmutable: Spread Operator
const updateAge = (userInfo) => {
    return { ...userInfo, age: userInfo.age + 1 }
}


const userInfo = {
    name: 'Sergio',
    age: 33,
    email: 'sv@mail.com',
}

console.log('userInfo BEFORE', userInfo)

const updatedUserInfo = updateAge(userInfo);

console.log('userInfo AFTER', userInfo)
console.log('updateUser', updatedUserInfo)