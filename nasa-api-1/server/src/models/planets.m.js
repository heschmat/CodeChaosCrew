const fs = require('fs')
const path = require('path')

const { parse } = require('csv-parse')

const habitablePlanets = [{'kepler_name': 'Cam'}]


function isHabitable(planet) {
    return planet['koi_disposition'] == 'CONFIRMED'
        && (planet['koi_insol'] < 1.11 && planet['koi_insol'] > .36)
        && planet['koi_prad'] < 1.6
}


const filePath = path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')

function loadPlanetsData() {

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(
                parse({comment: '#', columns: true})
            )
            .on('data', planet => {
                if (isHabitable(planet)) {
                    habitablePlanets.push({'kepler_name': planet['kepler_name']})
                }
            })
            .on('error', (err) => {
                console.log(err)
                reject(err)
            })
            .on('end', () => {
                console.log(`Found ${habitablePlanets.length} viable planets ...`)
            })
    })
}

function getAllPlanets() {
    return habitablePlanets
}
module.exports = {
    getAllPlanets,
    loadPlanetsData,
}
