const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=062347acb5d017c450bd3bb3c75cd740&query=${latitude},${longitude}&units=f`

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weatherstack service!', undefined)
        } else if(body.error) {
            callback('Unable to find location.', undefined)
        }  else {
            const weather = body.current
            const temperature = weather.temperature
            const apparentTemp = weather.feelslike
            const weather_desc = weather.weather_descriptions[0]
            callback(undefined,
                `${weather_desc}. It is currently ${temperature} degrees out. It feels like ${apparentTemp} degrees out.`)
        }
    })
}

module.exports = forecast