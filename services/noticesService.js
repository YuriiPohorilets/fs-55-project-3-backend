const { Notice } = require("../models");

const createNotice = async(req) => {
    const createdNotice = await Notice.create({...req.body});
    return createdNotice;
};

module.exports = {createNotice};