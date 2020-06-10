const buyers = require('../models/buyers');

async function getBuyers(req, res) {
    try {
        const result = await buyers.getBuyers();
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function getBuyerById(req, res) {
    try {
        const result = await buyers.getBuyerById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function createBuyer(req, res) {
    try {
        const result = await buyers.createBuyer(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error) {
        res.status(500).json(error);
    }
}

async function updateBuyer(req, res) {
    try {
        const result = await buyers.updateBuyer(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteBuyer(req, res) {
    try {
        const result = await buyers.deleteBuyer(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

//buyer_agents
async function getBuyerAgents(req, res) {
    try{
        const result = await buyers.getBuyerAgents(req.params.buyerid);
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

async function getBuyerAgentById (req, res) {
    try{
        const result = await buyers.getBuyerAgentById(req.params.id);
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

async function createBuyerAgent(req, res){
    try {
        const result = await buyers.createBuyerAgent(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    }
    catch(error) {
        res.status(500).json(error);
    }
}
 
async function updateBuyerAgent( req, res) {
    try {
        const result  = await buyers.updateBuyerAgent(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteBuyerAgent(req, res) {
    try {
        const result  = await buyers.deleteBuyerAgent(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

//buyer_approvals
async function getBuyerApprovals(req, res) {
    try{
        const result = await buyers.getBuyerApprovals(req.params.buyerid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error)
    }
}

async function getBuyerApprovalById(req, res) {
    try {
        const result = await buyers.getBuyerApprovalById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function createBuyerApproval(req, res) {
    try {
        const result = await buyers.createBuyerApproval(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateBuyerApproval(req, res) {
    try {
        const result = await buyers.updateBuyerApproval(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteBuyerApproval(req, res) {
    try{
        const result = await buyers.deleteBuyerApproval(req.params.id);
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
//buyer_bankers

async function getBuyerBankers(req, res) {
    try {
        const result = await buyers.getBuyerBankers(req.params.buyerid);
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

async function getBuyerBankerById(req, res) {
    try {
        const result = await buyers.getBuyerBankerById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch (error){
        res.status(500).json(error);

    }
}

async function createBuyerBanker(req, res) { 
    try {
        const result = await buyers.createBuyerBanker(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    }
    catch(error) {
        res.status(500).json(error);
    }
}

async function updateBuyerBanker(req, res)  {
    try {
        const result = await buyers.updateBuyerBanker(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteBuyerBanker(req, res) {
    try  {
        const result = await buyers.deleteBuyerBanker(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch (error){ 
        res.status(500).json(error);
    }
}


//buyer_contacts

async function getBuyerContacts(req, res) {
    try{
        const result = await buyers.getBuyerContacts(req.params.buyerid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
    
}

async function getBuyerContactById(req, res){
    try {
        const result = await buyers.getBuyerContactById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function createBuyerContact(req, res){
    try {
        const result = await buyers.createBuyerContact(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateBuyerContact(req, res){
    try {
        const result = await buyers.updateBuyerContact(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteBuyerContact(req, res){
    try {
        const result = await buyers.deleteBuyerContact(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

//buyer_instructions

async function  getBuyerInstructions(req, res){
    try{
        const result = await buyers.getBuyerInstructions(req.params.buyerid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function getBuyerInstructionById(req, res) {
    try {
        const result = await buyers.getBuyerInstructionById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function createBuyerInstruction(req, res){
    try {
        const result = await buyers.createBuyerInstruction(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error){
        res.status(500).json(error);
    }
}

async function updateBuyerInstruction(req, res) {
    try {
        const result = await buyers.updateBuyerInstruction(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch (error) {
        res.status( 500).json(error);
    }
}

async function deleteBuyerInstruction(req, res) {
    try {
        const result = await buyers.deleteBuyerInstruction(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

//buyer_labels

async  function getBuyerLabels(req, res) {
    try{
        const result = await buyers.getBuyerLabels(req.params.buyerid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function getBuyerLabelById(req, res) {
    try {
        const result = await buyers.getBuyerLabelById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function createBuyerLabel (req, res){
    try {

        const  result = await buyers.createBuyerLabel(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error) {
        res.status(500).json(error);
    }
}
async function updateBuyerLabel (req, res){
    try {
        const result = await buyers.updateBuyerLabel(req.param.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteBuyerLabel(req, res){
    try {
        const result = await buyers.deleteBuyerLabel(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

//buyer_measurement

async function getBuyerMeasurements(req, res) {
    try{
        const result = await buyers.getBuyerMeasurements(req.params.buyerid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function getBuyerMeasurementsById(req, res) {
    try{
        const result = await buyers.getBuyerMeasurementsById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}
 
async function createBuyerMeasurement(req, res){
    try{

        const result = await buyers.createBuyerMeasurement(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error) {
        res.status(500).json(error);
    }
}

async function updateBuyerMeasurement(req, res) {
    try {

        const result = await buyers.updateBuyerMeasurement(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function deleteBuyerMeasurement(req, res){
    try{
        const result = await buyers.deleteBuyerMeasurement(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

//buyer_notes

async function getBuyerNotes(req, res) {
    try {
        const result = await buyers.getBuyerNotes(req.params.buyerid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

async function getBuyerNotesById(req, res) {
    try {
        const result = await buyers.getBuyerNotesById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){ 
        res.status(500).json(error);
    }
}

async function createBuyerNote(req, res){
    try {
        const result = await buyers.createBuyerNote(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error) {
        res.status(500).json(error);
    }
}

async function updateBuyerNote(req, res){
    try {

        const result = await buyers.updateBuyerNote(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteBuyerNote(req, res) {
    try{
        const result = await buyers.deleteBuyerNote(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error){
        res.status(500).json(error);
    }
}

//buyer_sizes

 async function getBuyerSizes(req, res) {
     try {
         const result = await buyers.getBuyerSizes(req.params.buyerid);
         if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
     } catch(error){
         res.status(500).json(error)
     }
 }

 async function getBuyerSizeById(req, res) {
     try{
         const result = await buyers.getBuyerSizeById(req.params.id);
         if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
     } catch(error){
         res.status(500).json(error);
     }
 }

 async function createBuyerSize(req, res){
     try {

         const result = await buyers.createBuyerSize(req.body);
         if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
     } catch(error){
         res.status(500).json(error);
     }
 }
  
 async function updateBuyerSize(req, res){
     try{
         const result = await buyers.updateBuyerSize(req.params.id, req.body);
         if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
     } catch(error){
         res.status(500).json(error);
     }
 }

 async function deleteBuyerSize(req, res) {
     try {
         const result = await buyers.deleteBuyerSize(req.params.id);
         if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
     } catch(error){
         res.status(500).json(error);
     }
 }


 //buyer_tags

 async function getBuyerTags(req, res) {
    try {
        const result = await buyers.getBuyerTags(req.params.buyerid);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function getBuyerTagById(req, res) {
    try {
        const result = await buyers.getBuyerTagById(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function createBuyerTag(req, res) {
    try {
        const result = await buyers.createBuyerTag(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    } catch(error) {
        res.status(500).json(error);
    }
}

async function updateBuyerTag(req, res) {
    try {
        const result = await buyers.updateBuyerTag(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteBuyerTag(req, res) {
    try {
        const result = await buyers.deleteBuyerTag(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

//buyer_terms
async function getBuyerTerms(req, res) {
    try{
        const result = await buyers.getBuyerTerms(req.params.buyerid);
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

async function getBuyerTermById (req, res) {
    try{
        const result = await buyers.getBuyerTermById(req.params.id);
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

async function createBuyerTerm(req, res){
    try {
        const result = await buyers.createBuyerTerm(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    }
    catch(error) {
        res.status(500).json(error);
    }
}
 
async function updateBuyerTerm ( req, res) {
    try {
        const result  = await buyers.updateBuyerTerms(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteBuyerTerm(req, res) {
    try {
        const result  = await buyers.deleteBuyerTerm(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.json(500).json(error);
    }
}

//buyer_products

async function getBuyerProducts(req, res) {
    try{
        const result = await buyers.getBuyerProducts(req.params.buyerid);
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

async function getBuyerProductById (req, res) {
    try{
        const result = await buyers.getBuyerProductById(req.params.id);
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

async function createBuyerProduct(req, res){
    try {
        const result = await buyers.createBuyerProduct(req.body);
        if(result.rowsAffected){
            res.status(201).json(result.recordset);
        } 
    }
    catch(error) {
        res.status(500).json(error);
    }
}
 
async function updateBuyerProduct ( req, res) {
    try {
        const result  = await buyers.updateBuyerProduct(req.params.id, req.body);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.status(500).json(error);
    }
}

async function deleteBuyerProduct(req, res) {
    try {
        const result  = await buyers.deleteBuyerProduct(req.params.id);
        if(result.rowsAffected[0] > 0){
            res.status(200).json(result.recordset);
        } else if(result.rowsAffected[0] === 0){
            res.status(204).json(result.recordset);
        }
    } catch(error) {
        res.json(500).json(error);
    }
}

module.exports.getBuyers = getBuyers;
module.exports.getBuyerById = getBuyerById;
module.exports.createBuyer = createBuyer;
module.exports.updateBuyer = updateBuyer;
module.exports.deleteBuyer = deleteBuyer;


module.exports.getBuyerAgents = getBuyerAgents;
module.exports.getBuyerAgentById = getBuyerAgentById;
module.exports.createBuyerAgent = createBuyerAgent;
module.exports.updateBuyerAgent = updateBuyerAgent;
module.exports.deleteBuyerAgent = deleteBuyerAgent;


module.exports.getBuyerApprovals = getBuyerApprovals;
module.exports.getBuyerApprovalById = getBuyerApprovalById;
module.exports.createBuyerApproval = createBuyerApproval;
module.exports.updateBuyerApproval = updateBuyerApproval;
module.exports.deleteBuyerApproval = deleteBuyerApproval;


module.exports.getBuyerBankers = getBuyerBankers;
module.exports.getBuyerBankerById = getBuyerBankerById;
module.exports.createBuyerBanker = createBuyerBanker;
module.exports.updateBuyerBanker = updateBuyerBanker;
module.exports.deleteBuyerBanker = deleteBuyerBanker;


module.exports.getBuyerContacts = getBuyerContacts;
module.exports.getBuyerContactById = getBuyerContactById;
module.exports.createBuyerContact = createBuyerContact;
module.exports.updateBuyerContact = updateBuyerContact;
module.exports.deleteBuyerContact = deleteBuyerContact;


module.exports.getBuyerInstructions = getBuyerInstructions;
module.exports.getBuyerInstructionById = getBuyerInstructionById;
module.exports.createBuyerInstruction = createBuyerInstruction;
module.exports.updateBuyerInstruction = updateBuyerInstruction;
module.exports.deleteBuyerInstruction = deleteBuyerInstruction;



module.exports.getBuyerLabels = getBuyerLabels;
module.exports.getBuyerLabelById = getBuyerLabelById;
module.exports.createBuyerLabel = createBuyerLabel;
module.exports.updateBuyerLabel = updateBuyerLabel;
module.exports.deleteBuyerLabel = deleteBuyerLabel;


module.exports.getBuyerMeasurements = getBuyerMeasurements;
module.exports.getBuyerMeasurementsById = getBuyerMeasurementsById;
module.exports.createBuyerMeasurement = createBuyerMeasurement;
module.exports.updateBuyerMeasurement = updateBuyerMeasurement;
module.exports.deleteBuyerMeasurement = deleteBuyerMeasurement;

module.exports.getBuyerNotes = getBuyerNotes;
module.exports.getBuyerNotesById = getBuyerNotesById;
module.exports.createBuyerNote = createBuyerNote;
module.exports.updateBuyerNote = updateBuyerNote;
module.exports.deleteBuyerNote = deleteBuyerNote;


module.exports.getBuyerSizes = getBuyerSizes;
module.exports.getBuyerSizeById = getBuyerSizeById;
module.exports.createBuyerSize = createBuyerSize;
module.exports.updateBuyerSize = updateBuyerSize;
module.exports.deleteBuyerSize = deleteBuyerSize;

module.exports.getBuyerTags = getBuyerTags;
module.exports.getBuyerTagById = getBuyerTagById;
module.exports.createBuyerTag = createBuyerTag;
module.exports.updateBuyerTag = updateBuyerTag;
module.exports.deleteBuyerTag = deleteBuyerTag;

module.exports.getBuyerTerms = getBuyerTerms;
module.exports.getBuyerTermById = getBuyerTermById;
module.exports.createBuyerTerm = createBuyerTerm;
module.exports.updateBuyerTerm = updateBuyerTerm;
module.exports.deleteBuyerTerm = deleteBuyerTerm;

module.exports.getBuyerProducts = getBuyerProducts;
module.exports.getBuyerProductById = getBuyerProductById;
module.exports.createBuyerProduct = createBuyerProduct;
module.exports.updateBuyerProduct = updateBuyerProduct;
module.exports.deleteBuyerProduct = deleteBuyerProduct;
