const db = require('../models');

const getAll = async () => {
    try{
        let getAll = await db.Task.findAll();
        return getAll;  
    }catch(error){
        throw {status: 500 , message: "Failed to get Tasks"};
    }
};

const get = async (id)=>{
    try{
        let get = await db.Task.findByPk(id);
        return get;
    }catch(error){
        throw {status: 500 , message: "Failed to get Task"};
    }
};

const create = async (title,status,affair)=>{
    try{
        let create = await db.Task.create({
            title,
            status,
            affair
        });
        return create;
    }catch(error){
        console.log(error)
        throw {status: 500 , message: "Task could not be created"};
    }
};

const update = async (id, title,status,affair)=>{
    try{
        let update = await db.Task.update({
            title,
            status,
            affair
        },{
            where: {
                id,
            }
        });
        return update;
    }catch(error){
        throw {status: 500 , message: "Task could not be updated"};
    }
};

const destroy = async (id)=>{
    try{
        let destroy = await db.Task.destroy({
            where: {
                id,
            }
        });
        return destroy;
    }catch(error){
        throw {status: 500 , message: "Task could not be deleted"};
    }
};

module.exports = {
    getAll,
    get,
    create,
    update,
    destroy,
};