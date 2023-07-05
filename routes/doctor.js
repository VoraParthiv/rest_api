var express = require('express')
var router = express.Router()

var product = require('../Models/add-doctor-schema')

router.post('/add-doctor', async function (req, res, next) {
    try {
        data = await product.create(req.body)
        console.log(data);
        res.status(201).json({
            status: "success",
            data
        })
    }
    catch (error) {
        console.log(error);
    }
});

router.get('/getData', async function (req, res) {
    try {
        data = await product.find()
        console.log(data);
        res.status(201).json({
            status: "success",
            data
        })
    }
    catch (error) {
        console.log(error);
    }
})

// router.get('/getData/:id', async function (req, res) {
//     try {
//         data = await product.findById(req.params.id)
//         console.log(data);
//         res.status(201).json({
//             status: "success",
//             data
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
// })

// router.get('/getData/:name', async function (req, res) {
//     try {
//         data = await product.find({ name: req.params.name })
//         console.log(data);
//         res.status(201).json({
//             status: "success",
//             data
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
// })

// router.get('/getData/:email', async function (req, res) {
//     try {
//         data = await product.find({ email: req.params.email })
//         console.log(data);
//         res.status(201).json({
//             status: "success",
//             data
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
// })

router.get('/updateData/:id', async function (req, res) {
    // console.log(req.params.id);
    try {
        data = await product.findByIdAndUpdate(req.params.id, req.body)
        console.log(data);
        res.status(201).json({
            status: "success",
            data
        })
    }
    catch (error) {
        console.log(error);
    }
})

router.delete('/deleteData/:id', async function (req, res) {
    // console.log(req.params.id);
    try {
        data = await product.findByIdAndDelete(req.params.id)
        console.log(data);
        res.status(201).json({
            status: "success",
            data
        })
    }
    catch (error) {
        console.log(error);
    }
})
module.exports = router