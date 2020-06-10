/* jshint indent: 1 */
const sql = require('mssql');
const client = require('./db');

//Items models
async function getItems() {
	const sqlSelect = 'select * from items order by item_name';
	const pool = await client.getPool();
	const request = await pool.request()   
	try {
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function getItemById(itemId) {
	try {
		const sqlSelect = 'select * from items where item_id = @itemId';

		const pool = await client.getPool();
		const request = await pool.request()

		request.input('itemId', sql.Int, itemId);
		
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function createItem(inputParams){
	try {
        const pool = await client.getPool();
		const request = await pool.request()

		request.input('item_type_id', sql.Int, inputParams.item_type_id);
		request.input('item_name', sql.NVarChar, inputParams.item_name);
		request.input('color_id', sql.Int, inputParams.color_id);
		request.input('measurement_unit', sql.NVarChar, inputParams.measurement_unit);
		request.input('average_rate', sql.Decimal, inputParams.average_rate);
		request.input('unit_rate', sql.Decimal, inputParams.unit_rate);
		request.input('last_purchase_rate', sql.Decimal, inputParams.last_purchase_rate);
		// last_purchase_date
		request.input('last_purchase_vendor_id', sql.Int, inputParams.last_purchase_vendor_id);
		request.input('item_weight', sql.Decimal, inputParams.item_weight);
		request.input('item_width', sql.Decimal, inputParams.item_width);
		request.input('opening_stock', sql.Decimal, inputParams.opening_stock);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('season', sql.NVarChar, inputParams.season);		
		request.input('material', sql.NVarChar, inputParams.material);
		request.input('width_uom', sql.NVarChar, inputParams.width_uom);
		request.input('consumption', sql.Decimal, inputParams.consumption);
		request.input('unit_quantity', sql.NVarChar, inputParams.unit_quantity);
		request.input('wastage_factor', sql.Decimal, inputParams.wastage_factor);
		request.input('procurement_rate', sql.Decimal, inputParams.procurement_rate);
		request.input('conversion_factor', sql.Decimal, inputParams.conversion_factor);
		request.input('conversion_type', sql.NVarChar, inputParams.conversion_type);

		const sqlInsert = `insert into items (
								item_type_id, item_name, color_id, measurement_unit, average_rate, 
								last_purchase_rate, last_purchase_vendor_id, item_weight, item_width, 
								opening_stock, buyer_id, season, material, width_uom, consumption,
								unit_quantity, wastage_factor, procurement_rate, conversion_factor, 
								conversion_type)
                           values (@item_type_id, @item_name, @color_id, @measurement_unit, @average_rate, 
								@last_purchase_rate, @last_purchase_vendor_id, @item_weight, @item_width, 
								@opening_stock, @buyer_id, @season, @material, @width_uom, @consumption,
								@unit_quantity, @wastage_factor, @procurement_rate, @conversion_factor, 
								@conversion_type)`;												

		let result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	} 		
}

async function updateItem(itemId, inputParams){
	try {
        const pool = await client.getPool();
		const request = await pool.request()

		request.input('itemId', sql.Int, itemId);
		request.input('item_type_id', sql.Int, inputParams.item_type_id);
		request.input('item_name', sql.NVarChar, inputParams.item_name);
		request.input('color_id', sql.Int, inputParams.color_id);
		request.input('measurement_unit', sql.NVarChar, inputParams.measurement_unit);
		request.input('average_rate', sql.Decimal, inputParams.average_rate);
		request.input('unit_rate', sql.Decimal, inputParams.unit_rate);
		request.input('last_purchase_rate', sql.Decimal, inputParams.last_purchase_rate);
		// last_purchase_date
		request.input('last_purchase_vendor_id', sql.Int, inputParams.last_purchase_vendor_id);
		request.input('item_weight', sql.Decimal, inputParams.item_weight);
		request.input('item_width', sql.Decimal, inputParams.item_width);
		request.input('opening_stock', sql.Decimal, inputParams.opening_stock);
		request.input('buyer_id', sql.Int, inputParams.buyer_id);
		request.input('season', sql.NVarChar, inputParams.season);		
		request.input('material', sql.NVarChar, inputParams.material);
		request.input('width_uom', sql.NVarChar, inputParams.width_uom);
		request.input('consumption', sql.Decimal, inputParams.consumption);
		request.input('unit_quantity', sql.NVarChar, inputParams.unit_quantity);
		request.input('wastage_factor', sql.Decimal, inputParams.wastage_factor);
		request.input('procurement_rate', sql.Decimal, inputParams.procurement_rate);
		request.input('conversion_factor', sql.Decimal, inputParams.conversion_factor);
		request.input('conversion_type', sql.NVarChar, inputParams.conversion_type);

		const sqlInsert = `update items 
							set 
								item_type_id = @item_type_id, 
								item_name = @item_name, 
								color_id = @color_id, 
								measurement_unit = @measurment_unit, 
								average_rate = @average_rate, 
								last_purchase_rate = @last_purchase_rate, 
								last_purchase_vendor_id = @last_purchase_vendor_id, 
								item_weight = @item_weight, 
								item_width = @item_width, 
								opening_stock = @opening_stock, 
								buyer_id = @buyer_id, 
								season = @season, 
								material = @material, 
								width_uom = @width_uom, 
								consumption = @consumption,
								unit_quantity = @unit_quantity, 
								wastage_factor = @wastage_factor, 
								procurement_rate = @procurement_rate, 
								conversion_factor = @conversion_factor, 
								conversion_type = @conversion_type
							where item_id = @itemId`;												

		let result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	}		
}

async function deleteItem(itemId){
	try {
        const pool = await client.getPool();
        const request = await pool.request()
        const sqlDelete = `delete from items where item_id = @itemId`;	

        request.input('itemId', sql.Int, itemId);

        let result = await request.query(sqlDelete);
        
		return result;
	} catch(error) {
		return error;
	} 
}

// Item Types
async function getItemTypes() {
	const sqlSelect = 'select * from item_types order by item_name';
	const pool = await client.getPool();
	const request = await pool.request()   
	try {
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 
}

async function getItemTypeById(itemTypeId) {
	try {
		const sqlSelect = 'select * from item_types where item_type_id = @itemTypeId';

		const pool = await client.getPool();
		const request = await pool.request()

		request.input('itemTypeId', sql.Int, itemTypeId);
		
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} 
}

async function createItemType(inputParams){
	try {
        const pool = await client.getPool();
		const request = await pool.request()

        request.input('item_type_description', sql.NVarChar, inputParams.item_type_description);
        request.input('item_type_code', sql.NVarChar, inputParams.item_type_code);

		const sqlInsert = `insert into item_types(item_type_description, item_type_code)
                           values (@item_type_description, @item_type_code)`;				
								
		let result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function updateItemType(itemTypeId, inputParams){
	try {
        const pool = await client.getPool();
		const request = await pool.request()

        request.input('itemTypeId', sql.Int, itemTypeId);
        request.input('item_type_description', sql.NVarChar, inputParams.item_type_description);
		request.input('item_type_code', sql.NVarChar, inputParams.item_type_code);
		
        const sqlUpdate = `update item_types 
                            set 
								item_type_description = @item_type_description, 
                                item_type_code = @item_type_code
						   where item_type_id = @itemTypeId`;							

		let result = await request.query(sqlUpdate);
		return result.recordset;
	} catch(error) {
		return error;
	}
}

async function deleteItemType(itemTypeId){
	try {
        const pool = await client.getPool();
		const request = await pool.request()
		
        const sqlDelete = `delete from item_types where item_type_id = @itemTypeId`;	

        request.input('itemTypeId', sql.Int, itemTypeId);

        let result = await request.query(sqlDelete);
        
		return result;
	} catch(error) {
		return error;
	}
}

async function getItemNotes() {
	const sqlSelect = 'select * from item_notes order by note_date';
	try {
		const pool = await client.getPool();
		const request = await pool.request();
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	}
}

async function getItemNoteById(itemNoteId) {
	try {
		const sqlSelect = 'select * from item_notes where item_note_id = @itemNoteId';
		const pool = await client.getPool();
		const request = await pool.request();

		request.input('itemNoteId', sql.Int, itemNoteId);

		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	}
}

async function createItemNote(inputParams){
	try {
        const pool = await client.getPool();
		const request = await pool.request()
		
        request.input('item_id', sql.Int, inputParams.item_id);
		request.input('note_date', sql.Date, inputParams.note_date);
		request.input('note_by', sql.NVarChar, inputParams.note_by);
		request.input('note', sql.NVarChar, inputParams.note);
		request.input('topic', sql.NVarChar, inputParams.topic);

		const sqlInsert = `insert into item_notes(item_id, note_date, note_by, note, topic)
                           values (@item_id, @note_date, @note_by, @note, @topic)`;				
								
		let result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	} 	
}

async function updateItemNote(itemNoteId, inputParams){
	try {
        const pool = await client.getPool();
		const request = await pool.request()

		request.input('itemNoteId', sql.Int, itemNoteId);
        request.input('item_id', sql.Int, inputParams.item_id);
		request.input('note_date', sql.Date, inputParams.note_date);
		request.input('note_by', sql.NVarChar, inputParams.note_by);
		request.input('note', sql.NVarChar, inputParams.note);
		request.input('topic', sql.NVarChar, inputParams.topic);
		
        const sqlUpdate = `update item_notes
                            set 
								item_id = @item_id, 
								note_date = @note_date,
								note_by = @note_by,
								note = @note,
								topic = @topic
						   where item_note_id = @itemNoteId`;							

		let result = await request.query(sqlUpdate);
		return result.recordset;
	} catch(error) {
		return error;
	}
}

async function deleteItemNote(itemNoteId){
	try {
        const pool = await client.getPool();
		const request = await pool.request();
		
        const sqlDelete = `delete from item_notes where item_note_id = @itemNoteId`;	

        request.input('itemNoteId', sql.Int, itemNoteId);

        let result = await request.query(sqlDelete);
        
		return result;
	} catch(error) {
		return error;
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
