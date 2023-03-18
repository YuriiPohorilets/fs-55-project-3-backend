const asyncHandler = require('express-async-handler');
const { createNotice } = require('../../services/noticesService');

const addNotice = asyncHandler(async (req, res) => {
    const createdNotice = await createNotice(req);

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