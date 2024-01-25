const tasksService = require('../services/tasksService');

const getAll = async (req,res) =>  {
    const all = await tasksService.getAll();

    if(all)
        res.status(200).send({status: 'OK', data: all})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

const get = async (req,res) =>  {
    let id = req.params.id;
    const get = await tasksService.get(id);
    if(get)
        res.status(200).send({status: 'OK', data: get})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

const create = async (req,res) =>  {
    const {body} = req;
    const create = await tasksService.create(body.title, body.status, body.affair);
    if(create)
        res.status(200).send({status: 'OK', data: create})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

const update = async (req,res) =>  {
    let id = req.params.id;
    let {title,status,affair} = req.body;
    const update = await tasksService.update(id,title,status,affair);
    if(update)
        res.status(200).send({status: 'OK', data: update})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

const destroy = async (req,res) =>  {
    let id = req.params.id;
    const destroy = await tasksService.destroy(id);
    if(destroy)
        res.status(200).send({status: 'OK', data: destroy})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

module.exports = {
    getAll,
    get,
    create,
    update,
    destroy
};