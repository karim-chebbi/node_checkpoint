const fs = require(`fs`)

// fs.writeFile(`test.txt`, `Hello Node`, function (err) {
//     if (err) {
//         console.log(err)
//     }
//     console.log("File created, you're doing ok for now :) ")
// })
// console.log(fs)

console.log("task 1")
fs.readFile ("./test.txt", function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log("task 2")
})
console.log("task 3")