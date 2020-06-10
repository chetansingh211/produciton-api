/* jshint indent: 1 */
const sql = require('mssql');
const client = require('./db');

//Buyer models
async function getBuyers() {
	const sqlSelect = 'select * from buyer order by buyer_name';
	const pool = await client.getPool();
	const request = await pool.request();   
	try {
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getBuyerById(buyerId) {
	try {
		const sqlSelect = 'select * from buyer where buyer_id = @buyerId';

		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerId', sql.Int, buyerId);
		
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function createBuyer(inputParams){
	try {
		const  pool = await client.getPool();
		const request = await pool.request();

		request.input('company_id', sql.Int, inputParams.company_id);
		request.input('buyer_name', sql.NVarChar, inputParams.buyer_name);
		request.input('address', sql.INVarCharnt, inputParams.address);
		request.input('city', sql.NVarChar, inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar, inputParams.country);
		request.input('zip', sql.NVarChar, inputParams.zip);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax', sql.NVarChar, inputParams.fax);
		request.input('email', sql.NVarChar, inputParams.email);
		
		const sqlInsert = `insert into buyer(company_id, user_name, address, city, state, country, zip, phone, fax, email)
						   values (@company_id, @buyer_name, @address, @city, @state, @country, @zip, @phone, @fax, @email)`;							

		const result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	} 		
}

async function updateBuyer(buyerId, inputParams){
	try {
		const  pool = await client.getPool();
		const request  = await pool.request();

		request.input('buyerId', sql.Int, buyerId);
		request.input('company_id', sql.Int, inputParams.company_id);
		request.input('buyer_name', sql.NVarChar, inputParams.buyer_name);
		request.input('address', sql.INVarCharnt, inputParams.address);
		request.input('city', sql.NVarChar, inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar, inputParams.country);
		request.input('zip', sql.NVarChar, inputParams.zip);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax', sql.NVarChar, inputParams.fax);
		request.input('email', sql.NVarChar, inputParams.email);
		
		const sqlUpdate = `update buyer set 
							company_id = @company_id, 
							user_name = @user_name, 
							address = @address, 
							city = @city, 
							state = @state , 
							country = @country, 
							zip = @zip, 
							phone = @phone, 
							fax = @fax,
							email = @email
						   where buyer_id = @buyerId`;							

		const result = await request.query(sqlUpdate);
		return result;
	} catch(error) {
		return error;
	}	
}

async function deleteBuyer(buyerId){
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerId', sql.Int, buyerId);

		const sqlDelete = `delete from buyer where buyer_id = @buyerId`;							

		const result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	} 
}

//Buyer agents models
async function getBuyerAgents(buyerId) {
	const sqlSelect = 'select * from buyer_agents where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	}	
}

async function getBuyerAgentById(buyerAgentId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		
		request.input('buyerAgentId', sql.Int, buyerAgentId);
		
		const sqlSelect = `select * from buyer_agents 
							where buyer_agent_id = @buyerAgentId`;

		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getBuyerAgentByBuyerId(buyerId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerId', sql.Int, buyerId);
		const sqlSelect = 'select * from buyer_agents where buyer_id = @buyerId';
		const result = await request.query(sqlSelect);
		return result;

	} catch(error) {
		return error;
	} 	
}

async function createBuyerAgent(inputParams){
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('agent_name', sql.NVarChar, inputParams.agent_name);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('address', sql.NVarChar, inputParams.address);
		request.input('city', sql.NVarChar, inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar, inputParams.country);
		request.input('zip', sql.NVarChar, inputParams.zip);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax', sql.NVarChar, inputParams.fax);
		request.input('email', sql.NVarChar, inputParams.email);

		const sqlInsert = `insert into buyer_agents(agent_name, buyer_id, address, city, state, country, zip, phone, fax, email)
						   values (@agent_name, @buyer_id, @address, @city, @state, @country, @zip, @phone, @fax, @email)`;							

		const result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	}	
}

async function updateBuyerAgent(buyerAgentId, inputParams){
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerAgentId', sql.Int, buyerAgentId);
		request.input('agent_name', sql.NVarChar, inputParams.agent_name);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('address', sql.NVarChar, inputParams.address);
		request.input('city', sql.NVarChar, inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar, inputParams.country);
		request.input('zip', sql.NVarChar, inputParams.zip);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax', sql.NVarChar, inputParams.fax);
		request.input('email', sql.NVarChar, inputParams.email);
		
		const sqlUpdate = `update buyer_agents set 
							agent_name = @agent_name, 
							buyer_id = @buyer_id, 
							address = @address, 
							city = @city, 
							state = @state , 
							country = @country, 
							zip = @zip, 
							phone = @phone, 
							fax = @fax,
							email = @email
						where buyer_agent_id = @buyerAgentId`;							

		const result = await request.query(sqlUpdate);
		return result;
	} catch(error) {
		return error;
	}		
}

async function deleteBuyerAgent(buyerAgentId){
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerAgentId', sql.Int, buyerAgentId);

		const sqlDelete = `delete from buyer_agents where buyer_agent_id = @buyerAgentId`;							

		const result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	}	
}

//buyer_bankers model
async function getBuyerBankers(buyerId) {
	const sqlSelect = 'select * from buyer_bankers where buyer_id = @buyerId';
	const pool  = await client.getPool();
	const request = await pool.request();
	try {
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	}	
}

async function getBuyerBankerById(buyerBankerId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();		
		request.input('buyerBankerId', sql.Int, buyerBankerId);
		
		const sqlSelect = 'select * from buyer_bankers where buyer_banker_id = @buyerBankerId';

		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 
}

async function getBuyerBankerByBuyerId(buyerId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();		
		request.input('buyerId', sql.Int, buyerId);
		
		const sqlSelect = 'select * from buyer_bankers where buyer_id = @buyerId';

		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}
async function createBuyerBanker(inputParams){
	try {
		const pool = await client.getPool();
		const request = await pool.request();		
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('buyer_account', sql.NVarChar, inputParams.buyer_account);
		request.input('our_account', sql.NVarChar, inputParams.our_account);
		request.input('modetxn', sql.NVarChar, inputParams.modetxn);
		request.input('bank_name', sql.NVarChar, inputParams.bank_name);
		request.input('cfname', sql.NVarChar, inputParams.cfname);
		request.input('pmname', sql.NVarChar, inputParams.pmname);
		request.input('plname', sql.NVarChar, inputParams.plname);
		request.input('address', sql.NVarChar, inputParams.address);
		request.input('city', sql.NVarChar, inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar, inputParams.country);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax', sql.NVarChar, inputParams.fax);
		request.input('e_mail', sql.NVarChar, inputParams.e_mail);
		request.input('swift_account_id', sql.NVarChar, inputParams.swift_account_id);
		request.input('telex', sql.NVarChar, inputParams.telex);
		request.input('agent_id', sql.NVarChar, inputParams.agent_id);

		const sqlInsert = `insert into buyer_bankers(
								buyer_id, buyer_account, our_account, modetxn, bank_name, cfname, pmname, 
								plname, address, city, state, country, phone, fax, e_mail, swift_account_id, telex, agent_id)
						   values (@buyer_id, @buyer_account, @our_account, @modetxn, @bank_name, @cfname, @pmname, 
									@plname, @address, @city, @state, @country, @phone, @fax, @e_mail, @swift_account_id, @telex, @agent_id)`;

		const result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	}		
}

async function updateBuyerBanker(buyerBankerId, inputParams){
	try {
		const pool = await client.getPool();
		const request = await pool.request();		
		request.input('buyerBankerId', sql.Int, buyerBankerId);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('buyer_account', sql.NVarChar, inputParams.buyer_account);
		request.input('our_account', sql.NVarChar, inputParams.our_account);
		request.input('modetxn', sql.NVarChar, inputParams.modetxn);
		request.input('bank_name', sql.NVarChar, inputParams.bank_name);
		request.input('cfname', sql.NVarChar, inputParams.cfname);
		request.input('pmname', sql.NVarChar, inputParams.pmname);
		request.input('plname', sql.NVarChar, inputParams.plname);
		request.input('address', sql.NVarChar, inputParams.address);
		request.input('city', sql.NVarChar, inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar, inputParams.country);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax', sql.NVarChar, inputParams.fax);
		request.input('e_mail', sql.NVarChar, inputParams.e_mail);
		request.input('swift_account_id', sql.NVarChar, inputParams.swift_account_id);
		request.input('telex', sql.NVarChar, inputParams.telex);
		request.input('agent_id', sql.NVarChar, inputParams.agent_id);
		
		const sqlUpdate = `update buyer_bankers set 
								buyer_id = @buyer_id, 
								buyer_account = @buyer_account, 
								our_account= @our_account, 
								modetxn =  @modetxn, 
								bank_name = @bank_name, 
								cfname = @cfname, 
								pmname = @pmname, 
								plname = @plname, 
								address = @address, 
								city = @city, 
								state = @state, 
								country = @country, 
								phone = @phone, 
								fax = @fax, 
								e_mail = @e_mail, 
								swift_account_id = @swift_account_id, 
								telex = @telex, 
								agent_id= @agent_id
						where buyer_banker_id = @buyerBankerId`;							

		const result = await request.query(sqlUpdate);
		return result;
	} catch(error) {
		return error;
	} 		
}

async function deleteBuyerBanker(buyerBankerId){
	try {
		const pool = await client.getPool();
		const request = await pool.request();		
		request.input('buyerBankerId', sql.Int, buyerBankerId);

		const sqlDelete = `delete from buyer_bankers where buyer_banker_id = @buyerBankerId`;							

		const result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	} 	
}

//buyer_approvals

async function getBuyerApprovals(buyerId) {
	const sqlSelect = 'select * from buyer_approvals where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 
}
async function getBuyerApprovalById(buyerApprovalId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerApprovalId', sql.Int, buyerApprovalId);

		const sqlSelect = 'select * from buyer_approvals where buyer_approval_id = @buyerApprovalId';
		
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 
}

async function getBuyerApprovalByBuyerId(buyerId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerId', sql.Int, buyerId);

		const sqlSelect = 'select * from buyer_approvals where buyer_approval_id = @buyerApprovalId';
		
		const result = await request.query(sqlSelect);
		return result;
		} catch(error) {
			return error;
		} 
}

	async function createBuyerApproval(inputParams) {
		try {
			const pool = await client.getPool();
			const request = await pool.request();
			request.input('buyer_id', sql.Int, inputParams.buyer_id);
			request.input('action_name', sql.NVarChar, inputParams.action_name);
			request.input('approval_type', sql.NVarChar, inputParams.approval_type);
			request.input('description', sql.NVarChar, inputParams.description);
			request.input('quantity', sql.NVarChar, inputParams.quantity);
			request.iput('unit_of_qty', sql.NVarChar, inputParams.unit_of_qty);
			request.input('shipment_mode', sql.NVarChar, inputParams.shipment_mode);
			request.input('notify', sql.NVarChar, inputParams.notify);
			request.input('chargable', sql.NVarChar, inputParams.chargable);
			request.input('bill_to' , sql.NVarChar, inputParams.bill_to);

			const sqlInsert = `insert into buyer_approvals(buyer_id, action_name, approval_type,description, quantity, unit_of_qty, shipment_mode, notify, chargable, bill_to)
			                   values (@buyer_id, @action_name, @approval_type,@description, @quantity, @unit_of_qty, @shipment_mode, @notify, @chargable, @bill_to)`;

		const result = await request.query(sqlInsert);
			return result;
		} catch(error) {
			return error;
		} 
	}

	async function updateBuyerApproval(buyerApprovalId, inputParams){
		try {
			const pool = await client.getPool();
			const request = await pool.request();
			request.input('buyerApprovalId', sql.Int, buyerApprovalId);
			request.input('buyer_id', sql.Int, inputParams.buyer_id);
			request.input('action_name', sql.NVarChar, inputParams.action_name);
			request.input('approval_type', sql.NVarChar, inputParams.approval_type);
			request.input('description', sql.NVarChar, inputParams.description);
			request.input('quantity', sql.NVarChar, inputParams.quantity);
			request.iput('unit_of_qty', sql.NVarChar, inputParams.unit_of_qty);
			request.input('shipment_mode', sql.NVarChar, inputParams.shipment_mode);
			request.input('notify', sql.NVarChar, inputParams.notify);
			request.input('chargable', sql.NVarChar, inputParams.chargable);
			request.input('bill_to' , sql.NVarChar, inputParams.bill_to);

			const sqlUpdate = `update buyer_approvals  set 
							   buyer_id = @buyer_id,
							   action_name = @action_name,
							   approval_type = @approval_type,
							   description = @description,
							   quantity = @quantity,
							   unit_of_qty = @unit_of_qty,
							   shipment_mode = @shipment_mode,
							   notify = @notify,
							   chargable = @chargable,
							   bill_to = @bill_to
							   where buyer_approval_id = @buyerApprovalId`;


			const result = await request.query(sqlUpdate);
			return result;
		} catch(error) {
			return error;
		}
	}

	async function deleteBuyerApproval(buyerApprovalId){
		try {
			const pool = await client.getPool();
			const request = await pool.request();

			request.input('buyerApprovalId', sql.Int, buyerApprovalId);

			const sqlDelete = `delete from buyer_approvals where buyer buyer_approval_id = @buyerApprovalId`;

			const result = await request.query(sqlDelete);
			return result;
		} catch(error){
			return(error);
		} 
	}

//buyer_contacts model

async function getBuyerContacts(buyerId){
	const sqlSelect = 'select * from buyer_contacts where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try{
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	} catch (error){
		return error;
	} 
}

async function getBuyerContactById(buyerContactId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerContactId', sql.Int, buyerContactId);

		const sqlSelect = 'select * from buyer_contacts where buyer_contact_id = @buyerContactId';

		const result = await request.query(sqlSelect);
		return result;
	} catch(error){
		return error;
	} 
}

async function createBuyerContact(inputParams){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('cshortname', sql.NVarChar , inputParams.cshortname);
		request.input('department_id', sql.Int, inputParams.department_id);
		request.input('buyer_id', sql.Int , inputParams.buyer_id);
		request.input('cfname', sql.NVarChar  , inputParams.cfname);
		request.input('cmname', sql.NVarChar, inputParams.cmname);
		request.input('clname', sql.NVarChar, inputParams.clname);
		request.input('designation', sql.NVarChar , inputParams.designation);
		request.input('address', sql.NVarChar , inputParams.address);
		request.input('city', sql.NVarChar , inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar , inputParams.country);
		request.input('zip', sql.NVarChar , inputParams.zip);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax',  sql.NVarChar, inputParams.fax);
		request.input('e_mail', sql.NVarChar, inputParams.e_mail);
		request.input('beeper', sql.NVarChar, inputParams.beeper);
		request.contact('principal_contact', sql.NVarChar, inputParams.principal_contact);


		constInsert = `insert into buyer_contacts(cshortname, department_id, buyer_id, cfname, cmname, clname, designation, address, city, state, country, zip, phone, fax, e_mail, beeper. principal_contact)
		                values(@cshortname, @department_id, @buyer_id, @cfname, @cmname, @clname, @designation, @address, @city, @state, @country, @zip, @phone, @fax, @e_mail, @beeper, @principal_contact)`;

		const result = await request.query(sqlInsert);
		return result;
	} catch(error){
		return error;
	} 
}

async function updateBuyerContact(buyerContactId, inputParams){
	try {
		const pool = await client.pool();
		const request = await pool.request();
		request.input('buyerContactId', sql.Int, buyerContactId);
		request.input('cshortname', sql.NVarChar , inputParams.cshortname);
		request.input('department_id', sql.Int, inputParams.department_id);
		request.input('buyer_id', sql.Int , inputParams.buyer_id);
		request.input('cfname', sql.NVarChar  , inputParams.cfname);
		request.input('cmname', sql.NVarChar, inputParams.cmname);
		request.input('clname', sql.NVarChar, inputParams.clname);
		request.input('designation', sql.NVarChar , inputParams.designation);
		request.input('address', sql.NVarChar , inputParams.address);
		request.input('city', sql.NVarChar , inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar , inputParams.country);
		request.input('zip', sql.NVarChar , inputParams.zip);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax',  sql.NVarChar, inputParams.fax);
		request.input('e_mail', sql.NVarChar, inputParams.e_mail);
		request.input('beeper', sql.NVarChar, inputParams.beeper);
		request.contact('principal_contact', sql.NVarChar, inputParams.principal_contact);


		const sqlUpdate = `update buyer_contacts set
						   cshortname = @cshortname,
						   department_id = @department_id,
						   buyer_id = @buyer_id,
						   cfname = @cfname,
						   cmname = @cmname,
						   clname = @clname,
						   designation = @designation,
						   address = @address,
						   city = @city,
						   state = @state,
						   country = @country,
						   zip = @zip,
						   phone = @phone,
						   fax = @fax,
						   e_mail = @e_mail,
						   beeper = @beeper,
						   principal_contact = @principal_contact  
		                where buyer_contact_id = @buyerContactId` ;

		const result = await request.query(sqlUpdate);
		return result;
	} catch(error){
		return error;
	} 
} 

async function deleteBuyerContact(buyerContactId){
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerContactId', sql.Int, buyerContactId);
		const sqlDelete = `delete from buyer_contacts where buyer_contact_id = @buyerContactId`;

		const result = await request.query(sqlDelete);
		return result ;
	} catch(error){
		return error;
	}
}

//buyer_instructions

async function getBuyerInstructions(buyerId){
	const sqlSelect = 'select * from buyer_instructions where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;		
	} catch(error) {
		return error;
	}
	
}
async function getBuyerInstructionById(buyerInstructionId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerInstructionId', sql.Int,  buyerInstructionId);

		const sqlSelect = 'select * from buyer_instructions where buyer_instruction_id = @buyerInstructionId';

		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 
}

async function createBuyerInstruction(inputParams){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('instruction_type', sql.NVarChar, inputParams.instruction_type);
		request.input('buyer_id' , sql.Int, inputParams.buyer_id);
		request.input('description', sql.NVarChar, inputParams.description);

		const sqlInsert = `insert into buyer_instructions(instruction_type, buyer_id, description)
						  values (@instruction_type, @buyer_id, @description)`;
						  
		const result = await request.query(sqlInsert);
		 return result;
	} catch (error) {
		return(error);
	}
}

async function updateBuyerInstruction(buyerInstructionId, inputParams){
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerInstructionId', sql.Int, buyerInstructionId);
		request.input('instruction_type', sql.NVarChar, inputParams.instruction_type);
		request.input('buyer_id' , sql.Int, inputParams.buyer_id);
		request.input('description', sql.NVarChar, inputParams.description);

		const sqlUpdate = `update buyer_instructions set
						   instruction_type = @instruction_type,
						   buyer_id = @buyer_id,
						   description = @description
						where buyer_instruction_id = @buyerInstructionId`;

     const result = await request.query(sqlUpdate) ;
	 return result;
	} catch(error){
		return error;
	}
}

async function deleteBuyerInstruction(buyerInstructionId){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerInstructionId' , sql.Int, buyerInstructionId);

		const sqlDelete = `delete from buyer_instructions where buyer_instruction_id = @buyerInstructionId`;

		const result = await request.query(sqlDelete);
		return result;
	} catch(error){
		return error;
	} 
}

//buyer_labels


async function getBuyerLabels(buyerId) {
	const sqlSelect = 'select * from buyer_labels where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try{
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	} catch(error){
		return error;
	} 
}
	async function getBuyerLabelById(buyerLabelId) {
		try {
			const pool = await client.getPool();
			const request = await pool.request();
			request.input('buyerLabelId' , sql.Int, buyerLabelId);

			const sqlSelect = 'select * from buyer_labels where buyer_label_id = @buyerLabelId';

			const result = await request.query(sqlSelect);
			return result;
		} catch(error) {
			return error;
		} 
	}

	async function createBuyerLabel(inputParams){
		try {
			const pool = await client.getPool();
			const request  = await pool.request();
			request.input('department_id' , sql.Int, inputParams.department_id);
			request.input('buyer_id', sql.Int, inputParams.buyer_id );
			request.input('label_description', sql.NVarChar, inputParams.label_description);

			const sqlInsert = `insert into buyer_labels(department_id, buyer_id, label_description)
			                  values (@department_id, @buyer_id, @label_description)`;

			const result = await request.query(sqlInsert);
			return result;
		} catch (error){
			return error;
		}
	}
	async function updateBuyerLabel(buyerLabelId, inputParams){
		try{
			const pool = await client.getPool();
			const request = await pool.request();
			request.input('buyerLabelId', sql.Int, buyerLabelId);
			request.input('department_id' , sql.Int, inputParams.department_id);
			request.input('buyer_id', sql.Int, inputParams.buyer_id );
			request.input('label_description', sql.NVarChar, inputParams.label_description);

			const sqlUpdate = `update buyer_labels set
							   department_id = @department_id,
							   buyer_id = @buyer_id,
							   label_description= @label_description
						where buyer_label_id = @buyerLabelId`;

			const result = await request.query(sqlUpdate);
			return result;
		} catch(error){
			return error;		
	} 
}

async function deleteBuyerLabel(buyerLabelId){
	try { 
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerLabelId' , sql.Int, buyerLabelId);

		const sqlDelete = `delete from buyer_Labels where buyer_label_id = @buyerLabelId `;

	    const result = await request.query(sqlDelete);
		return result;
	} catch(error){
		return error;
	}
}
//buyer_notes

async function getBuyerNotes(buyerId){
	const sqlSelect = 'select * from buyer_notes where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
		}
	catch (error){
		return error;
	} 
}

 async function getBuyerNoteById(buyerNoteId) {
	 try {
		 const pool = await client.getPool();
		 const request  = await pool.request();
		 request.input('buyerNoteId', sql.Int, buyerNoteId);

		 const sqlSelect = 'select * from buyer_notes where buyer_note_id = @buyerNoteId ';
		  const result = await request.query(sqlSelect);
		  return result;
	 } catch(error){
		 return error;
	 } 
 }

 async function createBuyerNote(inputParams){
	 try {
		 const pool = await client.getPool();
		 const request = pool.request();
		 request.input('buyer_id', sql.Int, inputParams.buyer_id);
		 request.input('note_date', sql.Date, inputParams.note_date);
		 request.input('note_by' , sql.NVarChar, inputParams.note_by);
		 request.input('note_text', sql.NVarChar, inputParams.note_text);
		 request.input('topic', sql.NVarChar, inputParams.topic);

		 const sqlInsert = `insert into buyer_notes(buyer_id, note_date, note_by, note_text, topic)
							values(@buyer_id, @note_date, @note_by, @note_text, @topic)`;
							

		 const result = await request.query(sqlInsert);
		 return result;
	 } catch (error) {
		 return error;
	 }
 }


 async function updateBuyerNote(buyerNoteId, inputParams){
	 try {
		 const pool = await client.getPool();
		 const request = await pool.request();
		 request.input('buyerNoteId', sql.Int, buyerNoteId);
		 request.input('buyer_id', sql.Int, inputParams.buyer_id);
		 request.input('note_date', sql.Date, inputParams.note_date);
		 request.input('note_by' , sql.NVarChar, inputParams.note_by);
		 request.input('note_text', sql.NVarChar, inputParams.note_text);
		 request.input('topic', sql.NVarChar, inputParams.topic);  

		 const sqlUpdate = `update buyer_notes set
							buyer_id = @buyer_id,
							note_date= @note_date,
							note_by = @note_by,
							note_text = @note_text,
							topic = @topic
						where buyer_note_id = @buyerNoteId`;


		 const result = await request.query(sqlUpdate);
		 return result;
	 } catch(error){
		 return error;
	 }
 }

 async function deleteBuyerNote(buyerNoteId) {
	 try{
		 const pool = await client.getPool();
		 const request = await pool.request();
		 request.input('buyerNoteId', sql.Int, buyerNoteId);

		 const sqlDelete = `delete from buyer_notes where buyer_note_id = @buyerNoteId`;
		  
		 const result = await request.query(sqlDelete);
		 return result;
	 } catch (error) {
		 return error;
	 }
 }
//buyer_measurements

async function getBuyerMeasurements(buyerId) {
	const sqlSelect = 'select  * from buyer_measurements where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try{
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	} catch(error){
		return error;
		}
} 

async function getBuyerMeasurementById(buyerMeasurementId) {
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerMeasurementId', sql.Int, buyerMeasurementId);
	
		const sqlSelect = 'select from buyer_measurements where buyer_measurement_id = @buyerMeasurementId';

		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	}
}

async function createBuyerMeasurement(inputParams){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('size_id', sql.Int, inputParams.size_id);
		request.input('garment_id', sql.Int, inputParams.garment_id);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('sequence_id', sql.Int, inputParams.sequence_id);
		request.input('measurement', sql.Decimal, inputParams.measurement);
		request.input('measurement_unit', sql.NVarChar, inputParams.measurement_unit);
		request.input('description', sql.NVarChar, inputParams.description);


		const sqlInsert = `insert into buyer_measurements(size_id, garment_id, buyer_id, sequence_id, measurement, measurement_unit, description)
		                    values(@size_id, @garment_id, @buyer_id, @sequence_id, @measurement, @measurement_unit, @description)`

		const result = await request.query(sqlInsert);
		return result;
	} catch(error){
		return result;
	} 
}

async function updateBuyerMeasurement(buyerMeasurementId, inputParams){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerMeasurementId' , sql.Int, buyerMeasurementId);
		request.input('size_id', sql.Int, inputParams.size_id);
		request.input('garment_id', sql.Int, inputParams.garment_id);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('sequence_id', sql.Int, inputParams.sequence_id);
		request.input('measurement', sql.Decimal, inputParams.measurement);
		request.input('measurement_unit', sql.NVarChar, inputParams.measurement_unit);
		request.input('description', sql.NVarChar, inputParams.description);

		const sqlUpdate = `update buyer_measurements set
						  size_id = @size_id,
						  garment_id = @garment_id,
						  buyer_id = @buyer_id,
						  sequence_id = @sequence_id,
						  measurement = @measurement,
						  measurement_unit = @measurement_unit,
						  description = @description
						where buyer_measurement_id= @buyerMeasurementId`;

		const result =  await request.query(sqlUpdate);
		return result;
	} catch(error) {
		return error;
	}
}

async function deleteBuyerMeasurement(buyerMeasurementId){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerMeasurementId', sql.Int, buyerMeasurementId);

		const sqlDelete = `delete from buyer_measurements where buyer_measurement_id = @buyerMeasurementId`;

		const result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	}
}



//buyer sizes


async function getBuyerSizes(buyerId){
	const sqlSelect = 'select * from buyer_sizes where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	} catch(error){
		return error;
	} 
}

async function getBuyerSizeById(buyerSizeId){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerSizeId', sql.Int, buyerSizeId);
		
		const sqlSelect = 'select * from buyer_sizes where buyer_size_id = @buyerSizeId';
		const result =  await request.query(sqlSelect);
		return result;
	} catch(error){
		return result;
	} 
}

async function createBuyerSize(inputParams){
try{
	const pool = await client.getPool();
	const request = await pool.request();  
	request.input('buyer_id', sql.Int, inputParams.buyer_id);
	request.input('garment_id', sql.Int, inputParams.garment_id);
	request.input('size_description', sql.NVarChar, inputParams.size_description);

	const sqlInsert = `insert into buyer_sizes(buyer_id, garment_id, size_description)
	                values(@buyer_id, @garment_id, @size_description)`;

	const result = await request.query(sqlInsert);
	return result;
	} catch (error){
		return error;
	} 
}
 async function updateBuyerSize(buyerSizeId, inputParams){
	 try{
		 const pool = await client.getPool();
		 const request =  await pool.request();
		 request.input('buyerSizeId', sql.Int, buyerSizeId);
		 request.input('buyer_id', sql.Int, inputParams.buyer_id);
	request.input('garment_id', sql.Int, inputParams.garment_id);
	request.input('size_description', sql.NVarChar, inputParams.size_description);	 

		 const sqlUpdate = `update buyer_sizes set 
							buyer_id = @buyer_id,
							garment_id = @garment_id,
							size_description = @size_description
						where buyer_size_id = @buyerSizeId`;
						   
	 const result = await request.query(sqlUpdate);
	 return result;
	 } catch(error){
		 return error;
	 } 
 }
  
 async function deleteBuyerSize(buyerSizeId){
	 try{
		 const pool = await client.getPool();
		 const request = await pool.request();
		 request.input('buyerSizeId', sql.Int, buyerSizeId);

		 const sqlDelete = `delete from buyer_sizes where buyer_size_id = @buyerSizeId`;

		 const result = await request.query(sqlDelete);
		 return result;
	 } catch(error) {
		 return error;
	 }
 }

//buyer tags

async function getBuyerTags(buyerId) {
	const sqlSelect = 'select * from buyer_tags where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try{
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	} catch(error){
		return error;
	} finally {
		client.closePool();

	}
}

async function getBuyerTagById(buyerTagId) {
	try {
		const pool = await client.getPool();
		const request= await pool.request();
		request.input('buyerTagId', sql.Int, buyerTagId);

		const sqlSelect = 'select *from buyer_tags where buyer_tag_id = @buyerTagId';

		const result = await request.query(sqlSelect);
		return result;
	} catch(error){
		return error;
	} finally {
		request.closePool();
	}
}

async function createBuyerTag(inputParams){
	try{
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('department_id', sql.Int, inputParams.department_id);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('tag_id', sql.Int, inputParams.tag_id);
		request.input('tag_desc', sql.NVarChar, inputParams.tag_desc);

		const sqlInsert = `insert into buyer_tags(department_id, buyer_id, tag_id, tag_desc)
		                   values(@department_id, @buyer_id, @tag_id, @tag_desc)`;

		const result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	} finally {
		client.closePool();
	}
}

async function updateBuyerTag(buyerTagId, inputParams){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerTagId', sql.Int, buyerTagId);
		request.input('department_id', sql.Int, inputParams.department_id);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('tag_id', sql.Int, inputParams.tag_id);
		request.input('tag_desc', sql.NVarChar, inputParams.tag_desc);

		const sqlUpdate = `update buyer_tags set
						   buyer_id = @buyer_id,
						   department_id = @department_id,
						   tag_id = @tag_id,
						   tag_desc = @tag_desc
		                where buyer_tag_id = @buyerTagId`;

		const result = await request.query(sqlUpdate);
		return result;
	} catch(error){
		return error;
	} finally {
		client.closePool();
	}
}

async function deleteBuyerTag(buyerTagId){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerTagId', sql.Int, buyerTagId);

		const sqlDelete = `delete from buyer_tags where buyer_tag_id = @buyerTagId`;

		const result = await request.query(sqlDelete);
		return result;
	} catch(error){
		return error;
	} finally {
		client.closePool();
	}
}

// buyer terms
async function getBuyerTerms(buyerId){
	const sqlSelect = ' select * from buyer_terms where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
		request.input('buyerId', sql.Int, buyerId);
		const result = await request.query(sqlSelect);
		return result;
	}  catch(error){
		return error;
	} finally {
		client.closePool();
	}
}

async function getBuyerTermById(buyerTermId){
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerTermId', sql.Int, buyerTermId);

		const sqlSelect = 'select * from buyer_terms where buyer_term_id = @buyerTermId';

		const result = await request.query(sqlSelect);
		return result;
	} catch (error) {
		return error;
	} finally {
		client.closePool();
	}
}

async function createBuyerTerm(inputParams){
	try { 
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyer_id', sql.Int , inputParams.buyer_id);
		request.input('term_desc' , sql.NVarChar, inputParams.term_desc);

		const sqlInsert = `insert into buyer_terms(buyer_id, term_desc)
		                  values(buyer_id, term_desc)`;
		
		const result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	} finally {
		client.closePool();
	}
}

async function updateBuyerTerm(buyerTermId, inputParams){
	try{
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerTermId', sql.Int , buyerTermId);
		request.input('buyer_id', sql.Int , inputParams.buyer_id);
		request.input('term_desc' , sql.NVarChar, inputParams.term_desc);

		const sqlUpdate = `update buyer_terms set
						   buyer_id = @buyer_id,
						   term_desc = @term_desc
		                 where buyer_term_id =  @buyerTermId`;

		const result = await request.query(sqlUpdate);
		return result;
 	} catch(error){
		 return error;
	 } finally {
		 client.closePool();
	 }
}
async function deleteBuyerTerm(buyerTermId){
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerTermId', sql.Int, buyerTermId);

		const sqlDelete = `delete from buyer_term_id  = @buyerTermId`;
		const result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	} finally{ 
		client.closePool();
	}
}
//buyer products

async function getBuyerProducts(buyerId){
	const sqlSelect = 'select *from buyer_products where buyer_id = @buyerId';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
		request.input('buyerId', sql.Int, buyerId);
		let result = await request.query(sqlSelect);
		return result;
	} catch(error){
		return error;
	} finally {
		client.closePool();
	}
}
 async function getBuyerProductById(buyerProductId) {
	 try {
		 const pool = await client.getPool();
		 const request = await pool.request();
		 request.input('buyerProductId' , sql.Int, buyerProductId) ;

		 const sqlSelect  = 'select * from buyer_products where buyer_product_id = @buyerProductId';

		 const result = await request.query(sqlSelect);
		 return result;
	 } catch(error){
		 return error;
	 } finally {
		 client.closePool();
	 }
 }

 async function createBuyerProduct(inputParams){
	 try{
		 const pool = await client.getPool();
		 const request = await pool.request();
		 request.input('product_id', sql.Int, inputParams.product_id);
		 request.input('buyer_id', sql.Int , inputParams.buyer_id);
		 request.input('company_id', sql.Int, inputParams.company_id);
		 request.input('remarks', sql.NVarChar , inputParams.remarks);
		 
		 
		 const sqlInsert = `insert into buyer_products(product_id, buyer_id, company_id, remarks)
		                   values(@product_id, @buyer_id, @company_id, @remarks)`;

		 const result = await request.query(sqlInsert);
		 return result;
	 } catch(error){
		 return error;
	 } finally {
		 client.closePool();
	 }
 } 

 async function updateBuyerProduct( buyerProductId, inputParams){
	 try{
		 const pool = await client.getPool();
		 const request = await pool.request();
		 request.input('buyerProductId', sql.Int , buyerProductId);
		 request.input('product_id', sql.Int, inputParams.product_id);
		 request.input('buyer_id', sql.Int , inputParams.buyer_id);
		 request.input('company_id', sql.Int, inputParams.company_id);
		 request.input('remarks', sql.NVarChar , inputParams.remarks);


		 const sqlUpdate = `update buyer_products set
							product_id= @product_id,
							buyer_id = @buyer_id,
							company_id = @company_id,
							remarks= @remarks
		            where buyer_product_id = @buyerProductId`;

		 const result = await request.query(sqlUpdate);
		 return result;
	 } catch(error){
		 return error;
	 } finally {
		 client.closePool();
	 }
 }

 async function deleteBuyerProduct(buyerProductId){
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerProductId', sql.Int, buyerProductId);

		const sqlDelete = `delete from buyer_products where buyer buyer_product_id = @buyerProductId`;

		const result = await request.query(sqlDelete);
		return result;
	} catch(error){
		return(error);
	} finally { 
		 client.closePool();
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

module.exports.getBuyerApprovals = getBuyerApprovals;
module.exports.getBuyerApprovalById = getBuyerApprovalById;
module.exports.createBuyerApproval = createBuyerApproval;
module.exports.updateBuyerApproval = updateBuyerApproval;
module.exports.deleteBuyerApproval = deleteBuyerApproval;

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

module.exports.getBuyerNotes = getBuyerNotes;
module.exports.getBuyerNoteById = getBuyerNoteById;
module.exports.createBuyerNote = createBuyerNote;
module.exports.updateBuyerNote = updateBuyerNote;
module.exports.deleteBuyerNote = deleteBuyerNote;

module.exports.getBuyerMeasurements = getBuyerMeasurements;
module.exports.getBuyerMeasurementById = getBuyerMeasurementById;
module.exports.createBuyerMeasurement = createBuyerMeasurement;
module.exports.updateBuyerMeasurement = updateBuyerMeasurement;
module.exports.deleteBuyerMeasurement = deleteBuyerMeasurement;

module.exports.getBuyerSizes = getBuyerSizes;
module.exports.getBuyerSizeById = getBuyerSizeById;
module.exports.createBuyerSize = createBuyerSize;
module.exports.updateBuyerSize = updateBuyerSize;
module.exports.deleteBuyerSize = deleteBuyerSize;

module.exports.getBuyerTags = getBuyerTags;
module.exports.getBuyerTagById = getBuyerTagById;
module.exports.createBuyerTag = createBuyerTag;
module.exports.updateBuyerTag = updateBuyerTag;
module.exports.deletebuyer = deleteBuyerTag;

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
