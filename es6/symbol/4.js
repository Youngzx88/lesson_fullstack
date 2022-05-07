const spread = [12,5,8,130,44];
let temp = spread.filter((item)=>item > 10);
console.log(temp);

const users = [
    {
        'user': 'barney',
        'age':36,
        'active':true
    },
    {
        'user': 'fred',
        'age':40,
        'active':false
    },
    {
        'user': 'ared',
        'age':24,
        'active':false
    },
    {
        'user': 'ered',
        'age':80,
        'active':false
    },
    {
        'user': 'abc',
        'age':60,
        'active':false
    }
]

const filteredUsers = users.filter(
    item => item.age == 24 || item.age == 40
)
console.log(filteredUsers);
// [
//     { user: 'fred', age: 40, active: false },
//     { user: 'ared', age: 24, active: false }
// ]