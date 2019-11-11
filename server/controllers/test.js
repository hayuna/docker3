const Test = require('../models/test')

const createNew = (req, res) => {
    const test = new Test()
    test.name = req.body.name;
    test.save(err => {
        if(err){
            res.send(err)
        }
        res.json({ message: 'test created' })
    })
}

const getAll = (req, res) => {
    Test.find((err, tests) => {
        if(err){
            res.send(err)
        }
        res.json(tests)
    })
}

const getOne = (req, res) => {
    Test.findById(req.params.test_id, (err, test) => {
        if(err) {
            res.send(err)
        }
        res.json(test)
    })
}

const updateOne = (req, res) => {
    Test.findById(req.params.test_id, (err, test) => {
        if(err){
            res.send(err)
        }
        test.name = req.body.name
        test.save(err => {
            if(err){
                res.send(err)
            }
            res.json({ message: 'Test updated' })
        }) 
    })
}

const deleteOne = (req, res) => {
    Test.remove({ _id: req.params.test_id }, (err, test) => {
        if(err) {
            res.send(err)
        }
        res.json({ message: 'Successfully deleted' })
    })
}

module.exports = {
    createNew, getAll, getOne, updateOne, deleteOne
}