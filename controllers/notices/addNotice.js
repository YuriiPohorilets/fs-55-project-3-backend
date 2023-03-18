const asyncHandler = require('express-async-handler');
const { Notice } = require('../../models');

const addNotice = asyncHandler(async (req, res) => {
    const createdNotice = await Notice.create({...req.body});

    if(!createdNotice){
        res.status(400).json({
            code: 400,
            status: 'bad request',
        })
    };

    res.status(201).json({
        code: 201,
        status: 'success',
        result: createdNotice
    })
});

module.exports = addNotice;