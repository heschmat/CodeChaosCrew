
const { getAllPlanets } = require("../../models/planets.m"); // all the code gets run
// hence, because we use stream, the `module.export` gets returned before we have results back
// => load data on startup trick


function httpGetAllPlanets(req, res) {
    res.status(200).json(getAllPlanets())

}

module.exports = {
    httpGetAllPlanets,
}
