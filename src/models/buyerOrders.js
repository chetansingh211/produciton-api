/* jshint indent: 1 */
const sql = require('mssql');
const client = require('./db');

//Buyer Order model
async function getBuyerOrders() {
	try {
		const sqlSelect = 'select * from buyer_orders';		
		const pool = await client.getPool();
		const request = await pool.request();  
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getBuyerOrderById(buyerOrderId) {
	try {
		const sqlSelect = 'select * from buyer_orders where buyer_order_id = @buyerOrderId';		
		const pool = await client.getPool();
		const request = await pool.request();  
		request.input('buyerOrderId', sql.Int, buyerOrderId);
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function createBuyerOrder(inputParams){
	
	try {

		const sqlInsert = `insert into buyer_orders(
			order_number, company_id, location_id, buyer_id, agent_id, order_type, order_date, payment_mode, order_rcpt_mode, 
			status, status_changed_dt, status_reference_dt, modified_by, comments, agent_commission, partial_shipment,
			authorised_flag, authorised_date, authorised_by, authorised_comments, currency, destination_country, 
			port_discharge_sea, port_discharge_air, final_destination, delivery_terms, payment_terms, order_expiry_date,
			shipment_address1, shipment_address2, shipment_city, shipment_state, shipment_country, shipment_pin_code, shipment_fax1,
			shipment_fax2, shipment_phone1, shipment_phone2, buyer_order_value)
	   values (
			@order_number, @company_id, @location_id, @buyer_id, @agent_id, @order_type, @order_date, @payment_mode, @order_rcpt_mode, 
			@status, @status_changed_dt, @status_reference_dt, @modified_by, @comments, @agent_commission, @partial_shipment,
			@authorised_flag, @authorised_date, @authorised_by, @authorised_comments, @currency, @destination_country, 
			@port_discharge_sea, @port_discharge_air, @final_destination, @delivery_terms, @payment_terms, @order_expiry_date,
			@shipment_address1, @shipment_address2, @shipment_city, @shipment_state, @shipment_country, @shipment_pin_code, @shipment_fax1,
			@shipment_fax2, @shipment_phone1, @shipment_phone2, @buyer_order_value)`;	

		const pool = await client.getPool();
		const request = await pool.request();  

		request.input('order_number', sql.NVarChar, inputParams.order_number);
		request.input('company_id', sql.Int, inputParams.company_id);
		request.input('location_id', sql.Int, inputParams.location_id);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('agent_id', sql.Int, inputParams.agent_id);
		request.input('order_type', sql.NVarChar, inputParams.order_type);
		request.input('order_date', sql.DateTime, inputParams.order_date);
		request.input('payment_mode', sql.NVarChar, inputParams.payment_mode);
		request.input('order_rcpt_mode', sql.NVarChar, inputParams.order_rcpt_mode);
		request.input('status', sql.NVarChar, inputParams.status);
		request.input('status_changed_dt', sql.DateTime, inputParams.status_changed_dt);
		request.input('status_reference_dt', sql.DateTime, inputParams.status_reference_dt);
		request.input('modified_by', sql.NVarChar, inputParams.modified_by);
		request.input('comments', sql.NVarChar, inputParams.comments);
		request.input('agent_commission', sql.NVarChar, inputParams.agent_commission);
		request.input('partial_shipment', sql.NVarChar, inputParams.partial_shipment);
		request.input('authorised_flag', sql.NVarChar, inputParams.authorised_flag);
		request.input('authorised_date', sql.DateTime, inputParams.authorised_date);
		request.input('authorised_by', sql.NVarChar, inputParams.authorised_by);
		request.input('authorised_comments', sql.NVarChar, inputParams.authorised_comments);
		request.input('currency', sql.NVarChar, inputParams.currency);
		request.input('destination_country', sql.NVarChar, inputParams.destination_country);
		request.input('port_discharge_sea', sql.NVarChar, inputParams.port_discharge_sea);
		request.input('port_discharge_air', sql.NVarChar, inputParams.port_discharge_air);
		request.input('final_destination', sql.NVarChar, inputParams.final_destination);
		request.input('delivery_terms', sql.NVarChar, inputParams.delivery_terms);
		request.input('payment_terms', sql.NVarChar, inputParams.payment_terms);
		request.input('order_expiry_date', sql.DateTime, inputParams.order_expiry_date);
		request.input('shipment_address1', sql.NVarChar, inputParams.shipment_address1);
		request.input('shipment_address2', sql.NVarChar, inputParams.shipment_address2);
		request.input('shipment_city', sql.NVarChar, inputParams.shipment_city);
		request.input('shipment_state', sql.NVarChar, inputParams.shipment_state);		
		request.input('shipment_country', sql.NVarChar, inputParams.shipment_country);	
		request.input('shipment_pin_code', sql.NVarChar, inputParams.shipment_pin_code);	
		request.input('shipment_fax1', sql.NVarChar, inputParams.shipment_fax1);	
		request.input('shipment_fax2', sql.NVarChar, inputParams.shipment_fax2);	
		request.input('shipment_phone1', sql.NVarChar, inputParams.shipment_phone1);			
		request.input('shipment_phone2', sql.NVarChar, inputParams.shipment_phone2);					
		request.input('buyer_order_value', sql.int, inputParams.buyer_order_value);															

		const result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	} 		
}

async function updateBuyerOrder(buyerOrderId, inputParams){
	try {
		const sqlUpdate = `update buyer_orders set 
							order_number = @order_number, company_id = @company_id, location_id = @location_id, buyer_id = @buyer_id, 
							agent_id = @agent_id, order_type = @order_type, order_date = @order_date, payment_mode = @payment_mode, 
							order_rcpt_mode = @order_rcpt_mode, status = @status, status_changed_dt = @status_changed_dt, 
							status_reference_dt = @status_reference_dt, modified_by = @modified_by, comments = @comments, 
							agent_commission = @agent_commission, partial_shipment = @partial_shipment, authorised_flag = @authorised_flag, 
							authorised_date = @authorised_date, authorised_by = @authorised_by,  = @authorised_comments, 
							currency = @currency, destination_country = @destination_country, port_discharge_sea = @port_discharge_sea, 
							port_discharge_air = @port_discharge_air, final_destination = @final_destination, delivery_terms = @delivery_terms, 
							payment_terms = @payment_terms, order_expiry_date = @order_expiry_date, shipment_address1 = @shipment_address1, 
							shipment_address2 = @shipment_address2, shipment_city = @shipment_city, shipment_state = @shipment_state, 
							shipment_country = @shipment_country, shipment_pin_code = @shipment_pin_code, shipment_fax1 = @shipment_fax1,
							shipment_fax2 = @shipment_fax2, shipment_phone1 = @shipment_phone1, shipment_phone2 = @shipment_phone2, buyer_order_value = @buyer_order_value)
						where buyer_order_id = @buyerOrderId`;	

		const pool = await client.getPool();
		const request = await pool.request();  

		request.input('buyerOrderId', sql.Int, inputParams.buyerOrderId);
		request.input('order_number', sql.NVarChar, inputParams.order_number);
		request.input('company_id', sql.Int, inputParams.company_id);
		request.input('location_id', sql.Int, inputParams.location_id);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('agent_id', sql.Int, inputParams.agent_id);
		request.input('order_type', sql.NVarChar, inputParams.order_type);
		request.input('order_date', sql.DateTime, inputParams.order_date);
		request.input('payment_mode', sql.NVarChar, inputParams.payment_mode);
		request.input('order_rcpt_mode', sql.NVarChar, inputParams.order_rcpt_mode);
		request.input('status', sql.NVarChar, inputParams.status);
		request.input('status_changed_dt', sql.DateTime, inputParams.status_changed_dt);
		request.input('status_reference_dt', sql.DateTime, inputParams.status_reference_dt);
		request.input('modified_by', sql.NVarChar, inputParams.modified_by);
		request.input('comments', sql.NVarChar, inputParams.comments);
		request.input('agent_commission', sql.NVarChar, inputParams.agent_commission);
		request.input('partial_shipment', sql.NVarChar, inputParams.partial_shipment);
		request.input('authorised_flag', sql.NVarChar, inputParams.authorised_flag);
		request.input('authorised_date', sql.DateTime, inputParams.authorised_date);
		request.input('authorised_by', sql.NVarChar, inputParams.authorised_by);
		request.input('authorised_comments', sql.NVarChar, inputParams.authorised_comments);
		request.input('currency', sql.NVarChar, inputParams.currency);
		request.input('destination_country', sql.NVarChar, inputParams.destination_country);
		request.input('port_discharge_sea', sql.NVarChar, inputParams.port_discharge_sea);
		request.input('port_discharge_air', sql.NVarChar, inputParams.port_discharge_air);
		request.input('final_destination', sql.NVarChar, inputParams.final_destination);
		request.input('delivery_terms', sql.NVarChar, inputParams.delivery_terms);
		request.input('payment_terms', sql.NVarChar, inputParams.payment_terms);
		request.input('order_expiry_date', sql.DateTime, inputParams.order_expiry_date);
		request.input('shipment_address1', sql.NVarChar, inputParams.shipment_address1);
		request.input('shipment_address2', sql.NVarChar, inputParams.shipment_address2);
		request.input('shipment_city', sql.NVarChar, inputParams.shipment_city);
		request.input('shipment_state', sql.NVarChar, inputParams.shipment_state);		
		request.input('shipment_country', sql.NVarChar, inputParams.shipment_country);	
		request.input('shipment_pin_code', sql.NVarChar, inputParams.shipment_pin_code);	
		request.input('shipment_fax1', sql.NVarChar, inputParams.shipment_fax1);	
		request.input('shipment_fax2', sql.NVarChar, inputParams.shipment_fax2);	
		request.input('shipment_phone1', sql.NVarChar, inputParams.shipment_phone1);			
		request.input('shipment_phone2', sql.NVarChar, inputParams.shipment_phone2);					
		request.input('buyer_order_value', sql.int, inputParams.buyer_order_value);	
		
		const result = await request.query(sqlUpdate);
		return result;
	} catch(error) {
		return error;
	} 		
}

async function deleteBuyerOrder(buyerOrderId){
	try {
		const sqlDelete = `delete from buyer_orders where buyer_agent_id = @buyerOrderId`;									
		const pool = await client.getPool();
		const request = await pool.request();  

		request.input('buyerOrderId', sql.Int, buyerOrderId);

		let result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	} 	
}

//buyer order style
async function getBuyerOrderStyles(buyerOrderId) {
	try {
		const sqlSelect = 'select * from buyer_order_styles where buyer_order_id = @buyerOrderId';	
		const pool = await client.getPool();
		const request = await pool.request();  
		request.input('buyerOrderId', sql.Int, buyerOrderId);
		let result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getBuyerOrderStyleById(buyerOrderStyleId) {
	try {
		const sqlSelect = 'select * from buyer_order_styles where buyer_order_style_id = @buyerOrderStyleId';		

		const pool = await client.getPool();
		const request = await pool.request(); 
		request.input('buyerOrderStyleId', sql.Int, buyerOrderStyleId);
		
		let result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function createBuyerOrderStyle(inputParams) {
	
	try {		
		const sqlInsert = `insert into buyer_order_styles(
			buyer_order_id, order_quantity, item_id, unit_quantity, rate, invoiced_quantity, 
			packed_quantity, shipped_quantity)
		   values (
			@buyer_order_id, @order_quantity, @item_id, @unit_quantity, @rate, @invoiced_quantity, 
			@packed_quantity, @shipped_quantity)`;	

		const pool = await client.getPool();
		const request = await pool.request(); 

		request.input('buyer_order_id', sql.Int, inputParams.buyer_order_id);
		request.input('order_quantity', sql.Int, inputParams.order_quantity);
		request.input('item_id', sql.Int, inputParams.item_id);		
		request.input('unit_quantity', sql.NVarChar, inputParams.unit_quantity);
		request.input('rate', sql.Decimal, inputParams.rate);
		request.input('invoiced_quantity', sql.Decimal, inputParams.invoiced_quantity);
		request.input('packed_quantity', sql.Decimal, inputParams.packed_quantity);
		request.input('shipped_quantity', sql.Decimal, inputParams.shipped_quantity);		
		
		let result = await request.query(sqlInsert);
		return result;		

	} catch(error) {
		return error;
	}

}

async function updateBuyerOrderStyle(buyerOrderStyleId, inputParams) {
	try {		
		const sqlUpdate = `update buyer_order_styles
						   set 
								buyer_order_id = @buyer_order_id, 
								order_quantity = @order_quantity, 
								item_id = @item_id, 
								unit_quantity = @unit_quantity, 
								rate = @rate, 
								invoiced_quantity = @invoiced_quantity, 
								packed_quantity = @packed_quantity, 
								shipped_quantity = @shipped_quantity
							where buyer_order_style_id = @buyerOrderStyleId`;	

		const pool = await client.getPool();
		const request = await pool.request(); 

		request.input('buyerOrderStyleId', sql.Int, buyerOrderStyleId);
		request.input('buyer_order_id', sql.Int, inputParams.buyer_order_id);
		request.input('order_quantity', sql.Int, inputParams.order_quantity);
		request.input('item_id', sql.Int, inputParams.item_id);		
		request.input('unit_quantity', sql.NVarChar, inputParams.unit_quantity);
		request.input('rate', sql.Decimal, inputParams.rate);
		request.input('invoiced_quantity', sql.Decimal, inputParams.invoiced_quantity);
		request.input('packed_quantity', sql.Decimal, inputParams.packed_quantity);
		request.input('shipped_quantity', sql.Decimal, inputParams.shipped_quantity);		
		
		let result = await request.query(sqlUpdate);
		return result;		
		
	} catch(error) {
		return error;
	}
}

async function deleteBuyerOrderStyle(buyerOrderStyleId) {
	try {
		const sqlDelete = `delete from buyer_order_styles where buyer_order_style_id = @buyerOrderStyleId`;									
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerOrderStyleId', sql.Int, buyerOrderStyleId);
		let result = await request.query(sqlDelete);
		return result;

	} catch(error) {
		return error;
	} 	
}


//buyer order style color
async function getBuyerOrderStyleColors(buyerOrderStyleId) {
	const sqlSelect = 'select * from buyer_order_style_colors where buyer_order_style_id = @buyerOrderStyleId';
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerOrderStyleId', sql.Int, buyerOrderStyleId);
		let result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getBuyerOrderStyleColorByBuyerOrderId(buyerOrderId) {
	const sqlSelect = 'select * from buyer_order_style_colors where buyer_order_id = @buyerOrderId';
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerOrderId', sql.Int, buyerOrderId);
		let result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getBuyerOrderStyleColorId(buyerOrderStyleColorId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerOrderStyleColorId', sql.Int, buyerOrderStyleColorId);		
		const sqlSelect = 'select * from buyer_order_style_colors where buyer_order_style_color_id = @buyerOrderStyleColorId';

		let result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function createBuyerOrderStyleColor(inputParams) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyer_order_id', sql.Int, inputParams.buyer_order_id);
		request.input('style_id', sql.Int, inputParams.style_id);
		request.input('color_id', sql.Int, inputParams.color_id);
		request.input('quantity', sql.Decimal, inputParams.quantity);
		request.input('unit_quantity', sql.NVarChar, inputParams.unit_quantity);

		const sqlCreate = `insert into buyer_order_style_colors(buyer_order_id, style_id, color_id, quantity, unit_quantity)
							valuse( @buyer_order_id, @style_id, @color_id, @quantity, @unit_quantity)`;							

		let result = await request.query(sqlCreate);
		return result;
	} catch(error){
		return error;
	}
}

async function updateBuyerOrderStyleColor(buyerOrderStyleColorId, inputParams) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		const sqlUpdate =`update buyer_order_style_colors
							set buyer_order_id = @buyer_order_id
								style_id = @style_id
								color_id = @color_id
								quantity = @quantity
								unit_quantity = @unit_quantity
							where buyer_order_style_color_id= @buyerOrderStyleColorId`;

		request.input('buyerOrderStyleColorId', sql.Int, buyerOrderStyleColorId);
		request.input('buyer_order_id', sql.Int, inputParams.buyer_order_id);
		request.input('style_id', sql.Int, inputParams.style_id);
		request.input('color_id', sql.Int, inputParams.color_id);
		request.input('quantity', sql.Decimal, inputParams.quantity);
		request.input('unit_quantity', sql.NVarChar, inputParams.unit_quantity);

		let result = await request.query(sqlUpdate);
		return result;
	} catch(error) {
		
	}
}

async function deleteBuyerOrderStyleColor(buyerOrderStyleColorId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerOrderStyleColorId', sql.Int, buyerOrderStyleColorId);

		const sqlDelete = `delete from buyer_order_style_colors 
							where buyer_order_style_color_id = @buyerOrderStyleColorId`;							

		let result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	} 	
}

// buyer order notes
async function getBuyerOrderNotes(buyerOrderId) {
	const sqlSelect = 'select * from buyer_order_notes where buyer_order_id = @buyerOrderId';
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerOrderId', sql.Int, buyerOrderId);
		let result = await pool.request().query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getBuyerOrderNoteById(buyerOrderNoteId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();	
		request.input('buyerOrderNoteId', sql.Int, buyerOrderNoteId);
		
		const sqlSelect = 'select * from buyer_order_notes where buyer_order_note_id = @buyerOrderNoteId';

		let result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function createBuyerOrderNote(inputParams) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyer_order_id', sql.Int, inputParams.buyer_order_id);
		request.input('note_date', sql.Date, inputParams.note_date);
		request.input('note_by', sql.NVarChar, inputParams.note_by);
		request.input('note', sql.NVarChar, inputParams.note);
		request.input('topic', sql.NVarChar, inputParams.topic);

		const sqlCreate = `insert into buyer_order_notes(buyer_order_id, note_date, note_by, note, topic)
							valuse( @buyer_order_id, @note_date, @note_by, @note, @topic)`;							

		let result = await request.query(sqlCreate);
		return result;
	} catch(error){
		return error;
	}
}

async function updateBuyerOrderNote(buyerOrderStyleColorId, inputParams) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerOrderNoteId', sql.Int, buyerOrderNoteId);
		request.input('buyer_order_id', sql.Int, inputParams.buyer_order_id);
		request.input('note_date', sql.Date, inputParams.note_date);
		request.input('note_by', sql.NVarChar, inputParams.note_by);
		request.input('note', sql.NVarChar, inputParams.note);
		request.input('topic', sql.NVarChar, inputParams.topic);

		const sqlUpdate =`update buyer_order_notes
							set buyer_order_id = @buyer_order_id,
								note_date = @note_date,
								note_by = @note_by,
								note = @note,
								topic = @topic
							where buyer_order_note_id= @buyerOrderNoteId`;

		let result = await request.query(sqlUpdate);
		return result;
	} catch(error) {
		
	}
}


async function deleteBuyerOrderNote(buyerOrderNoteId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();	
		
		request.input('buyerOrderNoteId', sql.Int, buyerOrderNoteId);
		const sqlDelete = `delete from buyer_order_notes where buyer_order_note_id = @buyerOrderNoteId`;							

		let result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	} 	
}

//buyer order instructions
async function getBuyerOrderInstructions(buyerOrderId) {
	const sqlSelect = 'select * from buyer_order_instructions where buyer_order_id = @buyerOrderId';
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		request.input('buyerOrderId', sql.Int, buyerOrderId);
		let result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getBuyerOrderInstructionById(buyerOrderInstructionId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();	
		request.input('buyerOrderInstructionId', sql.Int, buyerOrderInstructionId);
		
		const sqlSelect = 'select * from buyer_order_instructions where buyer_order_instruction_id = @buyerOrderInstructionId';

		let result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function createBuyerOrderInstruction(inputParams) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyer_order_id', sql.Int, inputParams.buyer_order_id);
		request.input('item_id', sql.Date, inputParams.item_id);
		request.input('comments', sql.NVarChar, inputParams.comments);
		request.input('approved', sql.NVarChar, inputParams.approved);

		const sqlCreate = `insert into buyer_order_instructions(buyer_order_id, item_id, comments, approved)
							valuse( @buyer_order_id, @item_id, @comments, @approved)`;							

		let result = await request.query(sqlCreate);
		return result;
	} catch(error){
		return error;
	}
}

async function updateBuyerOrderInstruction(buyerOrderInstructionId, inputParams) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('buyerOrderInstructionId', sql.Int, buyerOrderInstructionId);
		request.input('buyer_order_id', sql.Int, inputParams.buyer_order_id);
		request.input('item_id', sql.Date, inputParams.item_id);
		request.input('comments', sql.NVarChar, inputParams.comments);
		request.input('approved', sql.NVarChar, inputParams.approved);

		const sqlUpdate =`update buyer_order_instructions
							set buyer_order_id = @buyer_order_id,
								item_id = @item_id,
								comments = @comments,
								approved = @approved
							where buyer_order_instruction_id= @buyerOrderInstructionId`;

		let result = await request.query(sqlUpdate);
		return result;
	} catch(error) {
		
	}
}

async function deleteBuyerOrderInstruction(buyerOrderInstructionId) {
	try {
		const pool = await client.getPool();
		const request = await pool.request();		
		request.input('buyerOrderInstructionId', sql.Int, buyerOrderInstructionId);

		const sqlDelete = `delete from buyer_order_instructions where buyer_order_instruction_id = @buyerOrderInstructionId`;							

		let result = await request.query(sqlDelete);
		return result;
	} catch(error) {
		return error;
	} 	
}

//buyer order shipement shcedules
//buyer order stylewise labels

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
module.exports.getBuyerOrderStyleColorByBuyerOrderId = getBuyerOrderStyleColorByBuyerOrderId;
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