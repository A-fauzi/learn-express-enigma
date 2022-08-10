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


const teee = (id, name) => {
    for (let i of arr) {
        if (i.id === id) {
            i.name = name
            return i
        }
    }
}

// console.log(teee(1, 'name'))

const indexOfObject = arr.findIndex(object => {
    return object.id === 2
})

arr.splice(indexOfObject, 1, {id: 2, name: "update"})
console.log(arr)


