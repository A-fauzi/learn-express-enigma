const arr = [
    {
        id : 1,
        name: "satu"
    },
    {
        id : 2,
        name: "dua"
    },
    {
        id : 3,
        name: "tiga"
    }
]

console.log(arr.find())

const indexOfObject = arr.findIndex(object => {
    return object.id === 2
})

arr.splice(indexOfObject, 1, {id: 2, name: "update"})
console.log(arr)


