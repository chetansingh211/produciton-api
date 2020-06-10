const vendor = require('../models/vendors');

async function getVendors(req, res) {
    try {
        const result = await vendor.getVendors();
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }    
    } catch(error) {
        res.status(500).json(error);
    }
}

async function getVendorById(req, res){
    try {
        const result =  await vendor.getVendorById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function createVendor(req, res) {
    try {
        const result = await vendor.createVendor(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateVendor(req, res) {
    try {
        const result = await vendor.updateVendor(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteVendor(req, res) {
    try{
        const result = await vendor.deleteVendor(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

//vendor_bankers
async function getVendorBankers(req, res){
    try{
        const result = await vendor.getVendorBankers(req.params.vendorid);
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
 
async function getVendorBankerById(req, res) {
    try {
        const result = await vendor.getVendorBankerById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    }
    catch(error) {
        res.status(500).json(error);
    }
}


async function createVendorBanker(req, res) {
    try {
        const result = await vendor.createVendorBanker(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error) {
        res.status(500).json(error);
    }
}

async function updateVendorBanker(req, res) {
    try {
        const result = await vendor.updateVendorBanker(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteVendorBanker(req, res) {
    try {
        const result = await vendor.deleteVendorBanker(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

//vendor_contacts
async function getVendorContacts(req, res) {
    try{
        const result = await vendor.getVendorContacts(req.params.vendorid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch (error){
        res.status(500).json(error);
    }
}
async function getVendorContactById(req, res){
    try {
        const result = await vendor.getVendorContactById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function createVendorContact(req, res){
    try {

        const result = await vendor.createVendorContact(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateVendorContact(req, res) {
    try {
        const result  =  await vendor.updateVendorContact(req.params.id , req. body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}
async function deleteVendorContact(req, res) {
    try {
        const result = await vendor.deleteVendorContact(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}


//vendor_items

async function getVendorItems(req, res){
    try {
        const result = await vendor.getVendorItems(req.params.vendorid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch( error) {
        res.status(500).json(error);
    }
}

async function getVendorItemById(req, res){
    try {
        const result  = await vendor.getVendorItemById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch (error){
        res.status(500).json(error);
    }
}

async function createVendorItem(req, res) {
    try {
        const result = await vendor.createVendorItem(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch (error){
        res.status(500).json(error);
    }
}

async function updateVendorItem(req, res){
    try {
        const result = await vendor.updateVendorItem(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}
async function deleteVendorItem(req, res) {
    try {
        const result = await vendor.deleteVendorItem(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

//vendor_item_history

async function getVendorItemHistory(req, res){
    try {
        const result = await vendor.getVendorItemHistory(req.params.vendorid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch( error) {
        res.status(500).json(error);
    }
}

async function getVendorItemHistoryById(req, res){
    try {
        const result  = await vendor.getVendorItemHistoryById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch (error){
        res.status(500).json(error);
    }
}

async function createVendorItemHistory(req, res) {
    try {
        const result = await vendor.createVendorItemHistory(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch (error){
        res.status(500).json(error);
    }
}

async function updateVendorItemHistory(req, res){
    try {
        const result = await vendor.updateVendorItemHistory(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}
async function deleteVendorItemHistory(req, res) {
    try {
        const result = await vendor.deleteVendorItemHistory(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

//vendor_job_works

async function getVendorJobWorks(req, res){
    try{
        const result = await vendor.getVendorJobWorks(req.params.vendorid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function getVendorJobWorkById(req, res) {
    try {
        const result = await vendor.getVendorJobWorkById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error)
    }
}

async function createVendorJobWork(req, res){
    try{
        const result = await vendor.createVendorJobWork(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateVendorJobWork(req, res){
    try{
        const result = await vendor.updateVendorJobWork(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteVendorJobWork(req, res){
    try{
        const result = await vendor.deleteVendorJobWork(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

//vendor_notes
async function getVendorNotes(req, res) {
    try {
        const result = await vendor.getVendorNotes(req.params.vendorid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch( error) {
        res.status(500).json(error);
    }
}
async function getVendorNoteById(req, res) {
    try {
        const result = await vendor.getVendorNoteById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function createVendorNote(req, res) {
    try {
         const result = await vendor.createVendorNote(req.body);
         if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch (error) {
        res.status(500).json(error);
    }
}

async function updateVendorNote(req, res){
    try {
        const result = await vendor.updateVendorNote(req.params.id , req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch (error){
        res.status(500).json(error);
    }
}

async function deleteVendorNote(req, res) {
    try{
        const result = await vendor.deleteVendorNote(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}
//vendor_terms

async function getVendorTerms(req, res) {
    try{
        const result = await vendor.getVendorTerms(req.params.vendorid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    }
    catch(error) {
        res.status(500).json(error);
    }
}

async function getVendorTermById (req, res) {
    try{
        const result = await vendor.getVendorTermById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    }
    catch(error) { 
        res.status(500).json(error);
    }
}

async function createVendorTerm(req, res){
    try {
        const result = await vendor.createVendorTerm(req.body);
        res.status(200).json(result);
    }
    catch(error) {
        res.status(500).json(error);
    }
}
 
async function updateVendorTerm( req, res) {
    try{
        const result  = await vendor.updateVendorTerms(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteVendorTerm(req, res) {
    try {
        const result  = await vendor.deleteVendorTerm(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.json(500).json(error);
    }
}


module.exports.getVendors = getVendors;
module.exports.getVendorById = getVendorById;
module.exports.createVendor = createVendor;
module.exports.updateVendor = updateVendor;
module.exports.deleteVendor = deleteVendor;


module.exports.getVendorBankers = getVendorBankers;
module.exports.getVendorBankerById = getVendorBankerById;
module.exports.createVendorBanker = createVendorBanker;
module.exports.updateVendorBanker = updateVendorBanker;
module.exports.deleteVendorBanker = deleteVendorBanker;


module.exports.getVendorContacts = getVendorContacts;
module.exports.getVendorContactById = getVendorContactById;
module.exports.createVendorContact = createVendorContact;
module.exports.updateVendorContact = updateVendorContact;
module.exports.deleteVendorContact = deleteVendorContact;

module.exports.getVendorItems = getVendorItems;
module.exports.getVendorItemById = getVendorItemById;
module.exports.createVendorItem = createVendorItem;
module.exports.updateVendorItem = updateVendorItem;
module.exports.deleteVendorItem = deleteVendorItem;


module.exports.getVendorItemHistory = getVendorItemHistory;
module.exports.getVendorItemHistoryById = getVendorItemHistoryById;
module.exports.createVendorItemHistory = createVendorItemHistory;
module.exports.updateVendorItemHistory = updateVendorItemHistory;
module.exports.deleteVendorItemHistory = deleteVendorItemHistory;

module.exports.getVendorJobWorks = getVendorJobWorks;
module.exports.getVendorJobWorkById = getVendorJobWorkById;
module.exports.createVendorJobWork = createVendorJobWork;
module.exports.updateVendorJobWork = updateVendorJobWork;
module.exports.deleteVendorJobWork = deleteVendorJobWork;


module.exports.getVendorNotes = getVendorNotes;
module.exports.getVendorNoteById = getVendorNoteById;
module.exports.createVendorNote = createVendorNote;
module.exports.updateVendorNote = updateVendorNote;
module.exports.deleteVendorNote = deleteVendorNote;

module.exports.getVendorTerms = getVendorTerms;
module.exports.getVendorTermById = getVendorTermById;
module.exports.createVendorTerm = createVendorTerm;
module.exports.updateVendorTerm = updateVendorTerm;
module.exports.deleteVendorTerm = deleteVendorTerm;