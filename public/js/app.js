console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if(data.error) {
//             console.log(data.error)
//             return
//         }
//         console.log('location: ', data.location)
//         console.log('forecast: ', data.forecast)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


// messageOne.textContent = 'From javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // prevents page to refresh

    const location = search.value
    messageOne.textContent = 'Loading..'
    messageTwo.textContent = ''


    // fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                // console.log(data.error)
                messageOne.textContent = data.error
                return

            }
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            // console.log('location: ', data.location)
            // console.log('forecast: ', data.forecast)
        })
    })
})