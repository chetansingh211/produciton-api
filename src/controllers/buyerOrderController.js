const buyerOrder = require('../models/buyerOrders');

async function getBuyerOrders(req, res){
    try {
        const result = await buyerOrder.getBuyerOrders();
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }        
    } catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

async function getBuyerOrderById(req, res){
    try {
        const result = await buyerOrder.getBuyerOrderById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }  
    } catch(error){
        res.status(500).json(error);
    }
}

async function createBuyerOrder(req, res){
    try {
        const result = await buyerOrder.createBuyerOrder(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        }     
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateBuyerOrder(req, res){
    try {
        const result = await buyerOrder.updateBuyerOrder(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteBuyerOrder(req, res){
    try {
        const result = await buyerOrder.deleteBuyerOrder(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

//buyer_order_style
async function getBuyerOrderStyles(req, res){
    try {
        const result = await buyerOrder.getBuyerOrderStyles(req.params.buyerorderid);
        console.log(result);        
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }  
    } catch(error){
        res.status(500).json(error);
    }
}

async function getBuyerOrderStyleById(req, res){
    try{
        const result = await buyerOrder.getBuyerOrderStyleById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }  
    } catch(error){
        res.status(500).json(error);
    }
}

async function createBuyerOrderStyle(req, res){
    try{
        const result = await buyerOrder.createBuyerOrderStyle(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        }  
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateBuyerOrderStyle(req, res){
    try{
        const result = await buyerOrder.updateBuyerOrderStyle(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteBuyerOrderStyle(req, res){
    try {
        const result = await buyerOrder.deleteBuyerOrderStyle(req.params.id)
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

//buyer_order_style_colors
async function getBuyerOrderStyleColors(req, res){
    try {
        const result = await buyerOrder.getBuyerOrderStyleColors(req.params.styleid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function getBuyerOrderStyleColorId(req, res){
    try{
        const result = await buyerOrder.getBuyerOrderStyleColorId(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function createBuyerOrderStyleColor(req, res){
    try{
        const result = await buyerOrder.createBuyerOrderStyleColor(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        }  
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateBuyerOrderStyleColor(req, res){
    try{
        const result = await buyerOrder.updateBuyerOrderStyleColor(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteBuyerOrderStyleColor(req, res){
    try {
        const result = await buyerOrder.deleteBuyerOrderStyleColor(req.params.id)
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

//buyer_order_notes
async function getBuyerOrderNotes(req, res){
    try{
        const result = await buyerOrder.getBuyerOrderNotes(req.params.buyerorderid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function getBuyerOrderNoteById(req, res){
    try{
        const result = await buyerOrder.getBuyerOrderNoteById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function createBuyerOrderNote(req, res){
    try{
        const result = await buyerOrder.createBuyerOrderNote(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        }  
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateBuyerOrderNote(req, res){
    try {
        const result = await buyerOrder.updateBuyerOrderNote(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteBuyerOrderNote(req, res){
    try {
        const result = await buyerOrder.deleteBuyerOrderNote(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}


//buyer_order_instruction

async function getBuyerOrderInstructions(req, res){
    try{
        const result = await buyerOrder.getBuyerOrderInstruction(req.params.buyerorderid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function getBuyerOrderInstructionById(req, res){
    try {
        const result = await buyerOrder.getBuyerOrderInstructionById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function createBuyerOrderInstruction(req, res){
    try{
        const result = await buyerOrder.createBuyerOrderInstruction(req.body);
        if(result.rowsAffected[0] > 0){
            res.status(201).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateBuyerOrderInstruction(req, res){
    try{
        const result = await buyerOrder.updateBuyerOrderInstruction(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteBuyerOrderInstruction(req, res){
    try{
        const result = await buyerOrder.deleteBuyerOrderInstruction(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

module.exports.getBuyerOrders = getBuyerOrders;
module.exports.getBuyerOrderById = getBuyerOrderById;
module.exports.createBuyerOrder = createBuyerOrder;
module.exports.updateBuyerOrder = updateBuyerOrder;
module.exports.deleteBuyerOrder = deleteBuyerOrder;

module.exports.getBuyerOrderStyles = getBuyerOrderStyles;
module.exports.getBuyerOrderStyleById = getBuyerOrderStyleById;
module.exports.createBuyerOrderStyle = createBuyerOrderStyle;
module.exports.updateBuyerOrderStyle = updateBuyerOrderStyle;
module.exports.deleteBuyerOrderStyle = deleteBuyerOrderStyle;

module.exports.getBuyerOrderStyleColors = getBuyerOrderStyleColors;
module.exports.getBuyerOrderStyleColorId = getBuyerOrderStyleColorId;
module.exports.createBuyerOrderStyleColor = createBuyerOrderStyleColor;
module.exports.updateBuyerOrderStyleColor = updateBuyerOrderStyleColor;
module.exports.deleteBuyerOrderStyleColor = deleteBuyerOrderStyleColor;

module.exports.getBuyerOrderNotes = getBuyerOrderNotes;
module.exports.getBuyerOrderNoteById = getBuyerOrderNoteById;
module.exports.createBuyerOrderNote = createBuyerOrderNote;
module.exports.updateBuyerOrderNote = updateBuyerOrderNote;
module.exports.deleteBuyerOrderNote = deleteBuyerOrderNote;

module.exports.getBuyerOrderInstructions = getBuyerOrderInstructions;
module.exports.getBuyerOrderInstructionById = getBuyerOrderInstructionById;
module.exports.createBuyerOrderInstruction = createBuyerOrderInstruction;
module.exports.updateBuyerOrderInstruction = updateBuyerOrderInstruction;
module.exports.deleteBuyerOrderInstruction = deleteBuyerOrderInstruction;