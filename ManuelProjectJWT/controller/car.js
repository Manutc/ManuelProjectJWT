const Car = require('../models/car')


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!')
}
exports.carForId = function (req, res) {
    Car.findById(req.params.id, function (err, product) {
        if (err) return next(err)
        res.send(product)
    })
}
exports.carForCarMake = function (req, res) {
    Car.findOne({carMake:req.body.carMake}, function(err, product){
        if (err) 
        res.send(product)
    })
}

exports.carAll = function (req, res) {
    Car.find(function (err, product) {
        if (err) return next(err)
        res.send(product)
    })
}
exports.deleteForId = function (req, res) {
    Car.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!')
    })
}
exports.updateForId = function (req, res) {
    Car.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};


exports.create = function (req, res) {
    let product = new Car(
        {
            

             id: req.body.id,
             carMake: req.body.carMake,
             year: req.body.year,
             color: req.body.color, 
             equipated: req.body.equiped
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

