const items = require('../models/items');

async function getItems(req, res) {
    try {
        const result = await items.getItems();
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }    
    }
    catch(error){
        res.status(500).json(error);
    }
}

async function getItemById(req, res){
    try {
        const result =  await items.getItemById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500),json(error);
    }
}

async function createItem(req, res) {
    try {
        const result = await items.createItem(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateItem(req, res) {
    try {
        const result = await items.updateItem(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteItem(req, res) {
    try{
        const result = await items.deleteItem(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500),json(error);
    }
}

async function getItemTypes(req, res) {
    try {
        const result = await items.getItemTypes();
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }    
    }
    catch(error){
        res.status(500).json(error);
    }
}

async function getItemTypeById(req, res){
    try {
        const result =  await items.getItemTypeById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500),json(error);
    }
}

async function createItemType(req, res) {
    try {
        const result = await items.createItemType(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateItemType(req, res) {
    try {
        const result = await items.updateItemType(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteItemType(req, res) {
    try{
        const result = await items.deleteItemType(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500),json(error);
    }
}

async function getItemNotes(req, res) {
    try {
        const result = await items.getItemNotes();
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }    
    }
    catch(error){
        res.status(500).json(error);
    }
}

async function getItemNoteById(req, res){
    try {
        const result =  await items.getItemNoteById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500),json(error);
    }
}

async function createItemNote(req, res) {
    try {
        const result = await items.createItemNote(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateItemNote(req, res) {
    try {
        const result = await items.updateItemNote(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteItemNote(req, res) {
    try{
        const result = await items.deleteItemNote(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500),json(error);
    }
}

module.exports.getItems = getItems;
module.exports.getItemById = getItemById;
module.exports.createItem = createItem;
module.exports.updateItem = updateItem;
module.exports.deleteItem = deleteItem;

module.exports.getItemTypes = getItemTypes;
module.exports.getItemTypeById = getItemTypeById;
module.exports.createItemType = createItemType;
module.exports.updateItemType = updateItemType;
module.exports.deleteItemType = deleteItemType;

module.exports.getItemNotes = getItemNotes;
module.exports.getItemNoteById = getItemNoteById;
module.exports.createItemNote = createItemNote;
module.exports.updateItemNote = updateItemNote;
module.exports.deleteItemNote = deleteItemNote;