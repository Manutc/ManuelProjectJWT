const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//{"id":"45d2df16-7402-46da-9f21-2b29b62e435d","carMake":"Porsche","year":2003,"color":"Orange","equipated":"non-equipated"},
let CarSchema = new Schema({
    id: {type: String, required: true, max: 1000000},
    carMake: {type: String, required: true, max: 20},
    year: {type: Number, required: true, min: 1900},
    color: {type: String, required: true, max: 100}, 
    equipated: {enum:['non-equipated', 'full-equipated', 'custom']},
    
},  {versionKey : false})


// Export the model
module.exports = mongoose.model('Car', CarSchema)