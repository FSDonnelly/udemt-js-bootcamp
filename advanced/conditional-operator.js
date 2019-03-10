const myAge = 20
// const message = myAge >= 18 ? `You can vote` : `You cannot vote`

// if (myAge >= 18) {
//     message = `You can vote`
// } else {
//     message = `You cannot vote`
// }

// console.log(message)
const showPage = () => {
    console.log(`Showing the page`)
}

const showErrorPage = () => {
    console.log(`Showing the error page`)
}

myAge >= 21 ? showPage() : showErrorPage()


const team =  [`Tyler`, `Porter`, `Frank`]
console.log(team.length <= 4 ? `Team size: ${team.length}` : `Too many people on your team`)
// 1. Print "Team size: 3" if less than or equal to 4
// 2. Print "Too many people on your team otherwise"

// const teamSize = () => `Team size: ${team.length}`
// const tooMany = () => `Too many people on your team`

// const message = team >= 4 ?  tooMany() : teamSize()
// console.log(message)