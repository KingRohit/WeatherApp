const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2luZ3JvaGl0IiwiYSI6ImNrYXJvbTd2MDBiaGQydW1zc3hwdDRlMGcifQ.uGRTA2AWpSsf-kqM8piQ9A&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        }
        else if (body.features.length === 0) {
            callback('Unable to find location ', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode