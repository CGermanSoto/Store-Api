const notFound = (req,res) => res.status(404).send('Error 404. No existe página.')

module.exports = notFound 