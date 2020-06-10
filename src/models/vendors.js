/* jshint indent: 1 */
const sql = require('mssql');
const client = require('./db');

//vendor models
async function getVendors() {
	const sqlSelect = 'select * from vendors order by vendor_name';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} finally {
		client.closePool();
	}
}



async function getVendorById(vendorId) {
	try {
		const sqlSelect = 'select * from vendors where vendor_id = @vendorId';

		const pool = await client.getPool();
		const request = await pool.request();

		request.input('vendorId', sql.Int, vendorId);

		const result = await request.query(sqlSelect);
		return result;
	} catch(error) {
		return error;
	} finally {
		client.closePool();
	}
}

async function createVendor(inputParams){
	try {
        const pool = await client.getPool();
		const request = await pool.request();

		request.input('company_id', sql.Int, inputParams.company_id);
        request.input('vendor_name', sql.NVarChar, inputParams.vendor_name);
        request.input('vendor_type', sql.NVarChar, inputParams.vendor_type);
		request.input('address', sql.NVarChar, inputParams.address);
		request.input('city', sql.NVarChar, inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar, inputParams.country);
		request.input('zip', sql.NVarChar, inputParams.zip);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax', sql.NVarChar, inputParams.fax);
        request.input('email', sql.NVarChar, inputParams.email);
        request.input('credit_days', sql.Decimal, inputParams.credit_days);
        request.input('income_tax', sql.NVarChar, inputParams.income_tax);


		const sqlInsert = `insert into vendors(
                                company_id, vendor_name, vendor_type, address, city, state,
                                country, zip, phone, fax, email,credit_days, income_tax)
                           values (@company_id, @vendor_name, @vendor_type,  @address, @city, @state,
								@country, @zip, @phone, @fax, @email, @credit_days, @income_tax)`;


		let result = await request.query(sqlInsert);
		return result;
	} catch(error) {
		return error;
	} finally {
		client.closePool();
	}
}

async function updateVendor(vendorId, inputParams){
	try {
        const pool = await client.getPool();
		const request = await pool.request();

        request.input('vendorId', sql.Int, vendorId);
		request.input('company_id', sql.Int, inputParams.company_id);
        request.input('vendor_name', sql.NVarChar, inputParams.vendor_name);
        request.input('vendor_type', sql.NVarChar, inputParams.vendor_type);
		request.input('address', sql.NVarChar, inputParams.address);
		request.input('city', sql.NVarChar, inputParams.city);
		request.input('state', sql.NVarChar, inputParams.state);
		request.input('country', sql.NVarChar, inputParams.country);
		request.input('zip', sql.NVarChar, inputParams.zip);
		request.input('phone', sql.NVarChar, inputParams.phone);
		request.input('fax', sql.NVarChar, inputParams.fax);
        request.input('email', sql.NVarChar, inputParams.email);
        request.input('credit_days', sql.Int, inputParams.credit_days);
        request.input('income_tax', sql.NVarChar, inputParams.income_tax);

        const sqlUpdate = `update vendors
                            set
                                company_id = @company_id,
                                vendor_name = @vendor_name,
                                address = @address,
                                city = @city,
                                state = @state ,
                                country = @country,
                                zip = @zip,
                                phone = @phone,
                                fax = @fax,
                                email = @email,
                                credit_days = @credit_days,
                                income_tax = @income_tax
						   where vendor_id = @vendorId`;

		let result = await request.query(sqlUpdate);
		return result.recordset;
	} catch(error) {
		return error;
	} finally {
		client.closePool();
    }
}

async function deleteVendor(vendorId){
	try {
        const pool = await client.getPool();
        const request = await pool.request();
        const sqlDelete = `delete from vendors where vendor_id = @vendorId`;

        request.input('vendorId', sql.Int, vendorId);

        let result = await request.query(sqlDelete);

		return result;
	} catch(error) {
		return error;
	} finally {
		client.closePool();
    }
}


//vendor_bankers model
async function getVendorBankers(vendorId) {
	const sqlSelect = 'select* from vendor_bankers where vendor_id = @vendorId';
	const pool = await client.getPool();
	const request = await pool.request();
    try {
        request.input('vendorId', sql.Int, vendorId);
        let result = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function getVendorBankerById(vendorBankerId){
    try {
		const sqlSelect = 'select * from vendor_bankers where vendor_banker_id = @vendorBankerId';
		const pool = await client.getPool();
		const request = await pool.request();
        request.input('vendorBankerId', sql.Int, vendorBankerId);

        const  result = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally{
        client.closePool();
    }
}

async function createVendorBanker(inputParams){
    try{
		const pool = await client.getPool();
		const request = await pool.request();
        request.input('vendor_id', sql.Int, inputParams.vendor_id);
        request.input('vendor_account', sql.NVarChar, inputParams.vendor_account);
        request.input('our_account', sql.NVarChar, inputParams.our_account);
        request.input('mode_of_trxn', sql.NVarChar, inputParams.mode_of_trxn);
        request.input('bank_name', sql.NVarChar, inputParams.bank_name);
        request.input('contact_name', sql.NVarChar, inputParams.contact_name);
        request.input('address', sql.NVarChar, inputParams.address);
        request.input('city', sql.NVarChar, inputParams.city);
        request.input('state', sql.NVarChar, inputParams.state);
        request.input('contact', sql.NVarChar, inputParams.contact);
        request.input('zip', sql.NVarChar, inputParams.zip);
        request.input('phone', sql.NVarChar, inputParams.phone);
        request.input('fax', sql.NVarChar, inputParams.fax);
        request.input('e_mail', sql.NVarChar, inputParams.e_mail);
        request.input('swift_account', sql.NVarChar, inputParams.swift_account);


        const sqlInsert = `insert into vendor_bankers(vendor_id, vendor_account, our_account, mode_of_trxn,bank_name, contact_name, address, city, state, contact, zip, phone, fax, e_mail, swift_account)
                           values(@vendor_id, @vendor_account, @our_account, @mode_of_trxn, @bank_name, @contact_name, @address, @city, @state, @contact, @zip, @phone, @fax, @e_mail, @swift_account)`;

        const result = await request.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function updateVendorBanker(vendorBankerId, inputParams){
    try{
		const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorBankerId', sql.Int, vendorBankerId);
		request.input('vendor_id', sql.Int, inputParams.vendor_id);
        request.input('vendor_account', sql.NVarChar, inputParams.vendor_account);
        request.input('our_account', sql.NVarChar, inputParams.our_account);
        request.input('mode_of_trxn', sql.NVarChar, inputParams.mode_of_trxn);
        request.input('bank_name', sql.NVarChar, inputParams.bank_name);
        request.input('contact_name', sql.NVarChar, inputParams.contact_name);
        request.input('address', sql.NVarChar, inputParams.address);
        request.input('city', sql.NVarChar, inputParams.city);
        request.input('state', sql.NVarChar, inputParams.state);
        request.input('contact', sql.NVarChar, inputParams.contact);
        request.input('zip', sql.NVarChar, inputParams.zip);
        request.input('phone', sql.NVarChar, inputParams.phone);
        request.input('fax', sql.NVarChar, inputParams.fax);
        request.input('e_mail', sql.NVarChar, inputParams.e_mail);
        request.input('swift_account', sql.NVarChar, inputParams.swift_account);


        const sqlUpdate = `update vendor_bankers set
                           vendor_id = @vendor_id,
                           vendor_account = @vendor_account,
                           our_account = @our_account,
                           mode_of_trxn = @mode_of_trxn,
                           bank_name = @bank_name,
                           contact_name = @contact_name,
                           address = @address,
                           city = @city,
                           state = @state,
                           contact = @contact,
                           zip = @zip,
                           phone = @phone,
                           fax = @fax,
                           e_mail = @e_mail,
                           swift_account = @swift_account
                        where vendor_banker_id = @vendorBankerId`;

        const result = await request.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally {
        request.closePool();
    }
}

async function deleteVendorBanker(vendorBankerId){
    try{
		const pool = await client.getPool();
		const request = await pool.request();
        request.input('vendorBankerId', sql.Int, vendorBankerId);

        const sqlDelete = `delete from vendor_bankers where vendor_banker_id = @vendorBankerId`;

        const result = await request.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally{
        client.closePool();
    }
}


//vendor_contacts

async function getVendorContacts(vendorId){
	const sqlSelect = 'select * from vendor vendor_contacts where vendor_id = @vendorId';
	const pool = await client.getPool();
	const request = await pool.request();
	try {
        request.input('vendorId', sql.Int, vendorId);
        const result  = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function getVendorContactById(vendorContactId){
    try {
		const sqlSelect = 'select * from vendor_contacts where vendor_contact_id = @vendorContactId';
		const  pool = await client.getPool();
		const request = await pool.request();
        pool.input('vendorContactId', sql.Int, vendorContactId);

        const result = await request.query(sqlSelect);
        return result;
    } catch (error){
        return error;
    } finally {
        client.closePool();
    }
}

async function createVendorContact(inputParams){
    try {
		const pool = await client.getPool();
		const request = await pool.request();
        request.input('vendor_id', sql.Int, inputParams.vendor_id);
        requset.input('contact_name', sql.NVarChar, inputParams.contact_name);
        request.input('address', sql.NVarChar, inputParams.address);
        request.input('city', sql.NVarChar, inputParams.city);
        request.input('state', sql.NVarChar, inputParams.state);
        request.input('zip', sql.NVarChar, inputParams.zip);
        request.input('country', sql.NVarChar, inputParams.country);
        request.input('phone', sql.NVarChar, inputParams.phone);
        request.input('fax', sql.NVarChar, inputParams.fax);
        request.input('e_mail', sql.NVarChar, inputParams.e_mail);
        request.input('department', sql.NVarChar, inputParams.department);
        request.input('designation', sql.NVarChar, inputParams.designation);


        const sqlInsert = `insert into vendor_contacts(vendor_id, contact_name, address, city, state, zip, country, phone, fax, e_mail, departmemt, designation);
                           values(@vendor_id, @contact_name, @address, @city, @state, @zip, @country, @phone, @fax, @e_mail, @departmemt, @designation)`;

        const result = await request.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function updateVendorContact(vendorContactId, inputParams){
    try {
		const pool = await client.getPool();
		const request = await pool.request();
        request.input('vendorContactId', sql.Int, vendorContactId);
        request.input('vendor_id', sql.Int, inputParams.vendor_id);
        requset.input('contact_name', sql.NVarChar, inputParams.contact_name);
        request.input('address', sql.NVarChar, inputParams.address);
        request.input('city', sql.NVarChar, inputParams.city);
        request.input('state', sql.NVarChar, inputParams.state);
        request.input('zip', sql.NVarChar, inputParams.zip);
        request.input('country', sql.NVarChar, inputParams.country);
        request.input('phone', sql.NVarChar, inputParams.phone);
        request.input('fax', sql.NVarChar, inputParams.fax);
        request.input('e_mail', sql.NVarChar, inputParams.e_mail);
        request.input('department', sql.NVarChar, inputParams.department);
        request.input('designation', sql.NVarChar, inputParams.designation);


        const sqlUpdate = `update vendor_contacts set
                           vendor_id = @vendor_id,
                           contact_name = @contact_name,
                           address = @address,
                           city = @city,
                           state = @state,
                           zip = @zip,
                           country = @country,
                           phone = @phone,
                           fax = @fax,
                           e_mail = @e_mail,
                           department = @department,
                           designation = @designation
                         where vendor_contact_id = @vendorContactId`;
        let result = await request.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function deleteVendorContact(vendorContactId){
    try{
		const  pool = await client.getPool();
		const request = await pool.request();
        request.input('vendor_contact_id', sql.Int , vendorContactId);

        const sqlDelete = `delete from vendor_contacts where vendor_contact_id = @vendorContactId`;

        const result = await request.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally {
        request.closePool();
    }
}


//vendor_items

async function getVendorItems(vendorId){
    const sqlSelect = 'select * from vendor_items where vendor_id = @vendorId';
    const  pool = await client.getPool();
    const request = await pool.request();
    try{
        request.input('vendorId', sql.Int, vendorId);
    let result  = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function getVendorItemById(vendorItemId){
    try {
        const  pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorItemId', sql.Int, vendorItemId);
        const sqlSelect= ' select *  from vendor_items where vendor_item_id = @vendorItemId';
        const result  = await request.query(sqlSelect);
        return result;
    } catch(error) {
        return error;
    } finally {
        client.closePool();
    }
}

async function createVendorItem(inputParams){
    try{
        const pool = await client.getPool();
        const request = await pool.request();

        request.input('item_id', sql.Int, inputParams.item_id);
        request.input('lead_time', sql.Decimal, inputParams.lead_time);
        request.input('unit_time', sql.Int, inputParams.unit_time);
        request.input('capacity', sql.Decimal, inputParams.capacity);
        request.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        request.input('basic_rates', sql.Decimal, inputParams.basic_rates);
        request.input('unit_rate', sql.Decimal, inputParams.unit_rate);
        request.input('last_updated', sql.DateTime, inputParams.last_updated);
        request.input('last_updated_by', sql.NVarChar, inputParams.last_updated_by);


        const sqlInsert = `insert into vendor_items(item_id, lead_time, unit_time, capacity, unit_capacity, basic_rates, unit_rate, last_updated, last_updated_by);
                         value(@item_id, @lead_time, @unit_time, @capacity, @unit_capacity, @basic_rates, @unit_rate, @last_updated, @last_updated_by)`;

        const result = await request.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function updateVendorItem(vendorItemId, inputParams){
    try {
        const pool = await  client.getPool();
        const request = await pool.request();
        request.input('vendorItemId', sql.Int, vendorItemId);
        request.input('item_id', sql.Int, inputParams.item_id);
        request.input('lead_time', sql.Decimal, inputParams.lead_time);
        request.input('unit_time', sql.Int, inputParams.unit_time);
        request.input('capacity', sql.Decimal, inputParams.capacity);
        request.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        request.input('basic_rates', sql.Decimal, inputParams.basic_rates);
        request.input('unit_rate', sql.Decimal, inputParams.unit_rate);
        request.input('last_updated', sql.DateTime, inputParams.last_updated);
        request.input('last_updated_by', sql.NVarChar, inputParams.last_updated_by);

        const sqlUpdate = `update vendor_items set
                           item_id= @item_id,
                           lead_time = @lead_time,
                           unit_time = @unit_time,
                           capacity = @capacity,
                           unit_capacity = @unit_capacity,
                           basic_rates = @basic_rates,
                           unit_rate = @unit_rate,
                           last_updated = @last_updated,
                           last_updated_by = @last_updated_by
                        where vendor_item_id = @vendorItemId`;

        const result = await request.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function deleteVendorItem(vendorItemId){
    try {
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorItemId', sql.Int, vendorItemId);

        const sqlDelete = 'delete from vendor_items where vendor_item_id = @vendorItemId';

        const result = await request.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}
// vendor_item_history

async function getVendorItemHistory(vendorId){
    const sqlSelect = 'select  * from vendor_item_history where vendor_id = @vendorId';
    const pool = await client.getPool();
    const request = await pool.request();
    try{
        request.input('vendorId', sql.Int, vendorId);
        let result = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally{
        client.closePool();
    }
}

async function getVendorItemHistoryById(vendorItemHistoryId){
    try{
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorItemHistoryId', sql.Int, vendorItemHistoryId);

        const sqlSelect = 'select * from vendor_item_history where vendor_item_history_id = @vendorItemHistory';

        const result = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function createVendorItemHistory(inputParams){
    try{
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendor_id', sql.Int, inputParams.vendor_id);
        request.input('item_id', sql.Int, inputParams.item_id);
        request.input('last_updated', sql.DateTime, inputParams.last_updated);
        request.input('lead_time', sql.Decimal, inputParams.lead_time);
        request.input('unit_time', sql.NVarChar, inputParams.unit_time);
        request.input('capacity', sql.Decimal, inputParams.capacity);
        request.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        request.input('basic_rates', sql.Decimal, inputParams.basic_rates);
        request.input('unit_rate', sql.NVarChar, inputParams.unit_rate);
        request.input('last_updated_ by', sql.NVarChar, inputParams.last_updated_by);
        request.input('reasons', sql.NVarChar, inputParams.reasons);

        const sqlInsert = `insert into vendor_item_history(vendor_id, item_id, last_updated, lead_time, unit_time, capacity, unit_capacity, basic_rates, unit_rate, last_updated_by, reasons)
                            values(vendor_id, item_id, last_updated, lead_time, unit_time, capacity, unit_capacity, basic_rates, unit_rate, last_updated_by, reasons)`;

        const result = await request.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally{
        client.closePool();
    }
}

async function updateVendorItemHistory(vendorItemHistoryId, inputParams){
    try{
        const pool = await client.getPool();
        const request = await pool.request ();
        request.input('vendorItemHistoryId', sql.Int, vendorItemHistoryId);
        request.input('vendor_id', sql.Int, inputParams.vendor_id);
        request.input('item_id', sql.Int, inputParams.item_id);
        request.input('last_updated', sql.DateTime, inputParams.last_updated);
        request.input('lead_time', sql.Decimal, inputParams.lead_time);
        request.input('unit_time', sql.NVarChar, inputParams.unit_time);
        request.input('capacity', sql.Decimal, inputParams.capacity);
        request.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        request.input('basic_rates', sql.Decimal, inputParams.basic_rates);
        request.input('unit_rate', sql.NVarChar, inputParams.unit_rate);
        request.input('last_updated_ by', sql.NVarChar, inputParams.last_updated_by);
        request.input('reasons', sql.NVarChar, inputParams.reasons);

        const sqlUpdate = `update vendor_item_history set
                           vendor_id = @vendor_id,
                           item_id = @item_id,
                           last_updated = @last_updated,
                           lead_time = @lead_time,
                           unit_time = @unit_time,
                           capacity = @capacity,
                           unit_capacity = @unit_capacity,
                           basic_rates = @basic_rates,
                           unit_rate = @unit_rate,
                           last_updated_by = @last_updated_by,
                           reasons = @reasons
                        where vendor_item_history_id = @vendorItemHistoryId`;

        const result = await request.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function deleteVendorItemHistory(vendorItemHistoryId){
    try{
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorItemHistoryId', sql.Int, vendorItemHistoryId);

        const sqlDelete = `delete from vendor_item_history where vendor_item_history_id = @vendorItemHistoryId`;

        const result = await request.query(sqlDelete);
        return result;
    } catch(error) {
        return error;
    } finally {
        client.closePool();
    }
}

//vendor_job_works
async function getVendorJobWorks(vendorId){
    const sqlSelect = 'select * from vendor_job_works where vendor_id = @vendorId';
    const pool = await client.getPool();
    const request = await pool.request();
    try{
        request.input('vendorId', sql.Int, vendorId);
        const result = await request.query(sqlSelect);
        return result ;
    } catch(error){
        return error;
    } finally{
        client.closePool();
    }
}

async function getVendorJobWorkById(vendorJobWorkId){
    try{
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorJobWorksId', sql.Int, vendorJobWorkId);
        const sqlSelect = 'select * from vendor_job_works where vendor_job_work_id = @vendorJobWorkId';
        const result = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function createVendorJobWork(inputParams){
    try{
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('process_id', sql.Int, inputParams.process_id);
        request.input('vendor_id', sql.Int, inputParams.vendor_id);
        request.input('capacity', sql.Decimal, inputParams.capacity);
        request.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        request.input('lead_time', sql.Decimal, inputParams.lead_time);
        request.input('lead_time_unit', sql.NVarChar, inputParams.lead_time_unit);
        request.input('rate', sql.Decimal, inputParams.rate);
        request.input('unit_rate', sql.NVarChar, inputParams.unit_rate);
        request.input('last_updated', sql.DateTime, inputParams.last_updated);
        request.input('last_updated_by', sql.NVarChar, inputParams.last_updated_by);
        request.input('last_supplied_rate', sql.Decimal, inputParams.last_supplied_rate);
        request.input('last_supplied_date', sql.DateTime, inputParams.last_supplied_date);


        const sqlInsert = `insert into vendor_job_works(process_id, vendor_id, capacity, unit_capacity, lead_time, lead_time_unit, rate, unit_rate, last_updtaed, last_updated_by, last_supplied_rate, last_supplied_date)
                         values(@process_id, @vendor_id, @capacity, @unit_capacity, @lead_time, @lead_time_unit, @rate, @unit_rate, @last_updtaed, @last_updated_by, l@ast_supplied_rate, @last_supplied_date)`;

        const result = await request.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally{
        client.closePool();
    }
}

async function updateVendorJobWork(vendorJobWorkId, inputParams){
try {
    const pool = await client.getPool();
    const request = await pool.request();
    request.input('vendorJobWorkId',  sql.Int , vendorJobWorkId);
    request.input('process_id', sql.Int, inputParams.process_id);
        request.input('vendor_id', sql.Int, inputParams.vendor_id);
        request.input('capacity', sql.Decimal, inputParams.capacity);
        request.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        request.input('lead_time', sql.Decimal, inputParams.lead_time);
        request.input('lead_time_unit', sql.NVarChar, inputParams.lead_time_unit);
        request.input('rate', sql.Decimal, inputParams.rate);
        request.input('unit_rate', sql.NVarChar, inputParams.unit_rate);
        request.input('last_updated', sql.DateTime, inputParams.last_updated);
        request.input('last_updated_by', sql.NVarChar, inputParams.last_updated_by);
        request.input('last_supplied_rate', sql.Decimal, inputParams.last_supplied_rate);
        request.input('last_supplied_date', sql.DateTime, inputParams.last_supplied_date);




    const sqlUpdate = `update vendor_job_woork set
                        vendor_id =@vendor_id,
                        capacity = @capacity,
                        unit_capacity = @unit_capacity,
                        lead_time = @lead_time,
                        lead_time_unit = @lead_time_unit,
                        rate = @rate,
                        unit = @unit_rate,
                        last_updated  = @last_updated,
                        last_updated_by = @last_updated_by,
                        last_supplied = @last_supplied,
                        last_Suplied_date = @last_suplied_date
                        where  vendor_job_work_id = @vendorJobWorkId `;

    const result = await request.query(sqlUpdate);
    return result;
} catch(error){
    return error;
} finally {

    client.closePool();
}
}

async function deleteVendorJobWork(vendorJobWorkId){
    try{
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorJobworkId', sql.Int, vendorJobWorkId);


        const sqlDelete = `delete from vendor_job_works where vendor_job_work_id = @vendorJobWorkId`;

        const result = await request.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}



//vendor_notes

async function getVendorNotes(vendorId){
    const sqlSelect = 'select * from vendor_notes where vendor_id = @vendorId';
    const pool =  await client.getPool();
    const request= await pool.request();
    try {
        request.input('vendorId', sql.Int, vendorId);
        const result = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally{
        client.closePool();
    }
}

async function getVendorNoteById(vendorNoteId){
    try{
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorNoteId', sql.Int, vendorNoteId);
        const sqlSelect = 'select * from vendor_notes where vendor_note_id = @vendorNoteId';
        const result = await request.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function createVendorNote(inputParams){
    try {
        const pool = await client.getPool();
        const request= await pool.request();
        request.input('vendor_id', sql.Int , inputParams.vendor_id);
        request.input('note_id', sql.Int, inputParams.note_id);
        request.input('note_date', sql.DateTime, inputParams.note_date);
        request.input('note_by', sql.NVarChar, inputParams.note_by );
        request.input('note', sql.VarChar, inputParams.note);
        request.input('topic' , sql.NVarChar, inputParams.topic);

        const sqlInsert = `insert into vendor_notes(vendor_id, note_id, note_date, note_by, note, topic)
                         values(vendor_id, note_id, note_date, note_by, note, topic)`;

        const result = await request.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}

async function updateVendorNote(vendorNoteId, inputParams){
    try{
        const pool = await client.getPool();
        const request = await pool.request();
        request.input('vendorNoteId', sql.Int, vendorNoteId);
        request.input('vendor_id', sql.Int , inputParams.vendor_id);
        request.input('note_id', sql.Int, inputParams.note_id);
        request.input('note_date', sql.DateTime, inputParams.note_date);
        request.input('note_by', sql.NVarChar, inputParams.note_by );
        request.input('note', sql.VarChar, inputParams.note);
        request.input('topic' , sql.NVarChar, inputParams.topic);

        const sqlUpdate = `update vendor_notes set
                          vendor_id = @vendor_id,
                          note_id = @note_id,
                           note_date = @note_date,
                           note_by = @note_by,
                           note = @note,
                           topic = @topic
                           where vendor_note_id = @vendorNoteId`;


        const result = await request.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally{
        client.closePool();
    }
}

async function deleteVendorNote(vendorNoteId){
    try{
        let pool = await sql.connect(config).request();
        const request = await pool.request();
        request.input('vendorNoteId', sql.Int, vendorNoteId);

        const sqlDelete = `delete from vendor_notes where vendor_note_id = @vendorNoteId`;

        const result = await request.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally {
        client.closePool();
    }
}




module.exports.getVendors = getVendors;
module.exports.getVendorById = getVendorById;
module.exports.createVendor = createVendor;
module.exports.updateVendor = updateVendor;
module.exports.deleteVendor = deleteVendor;

module.exports.getVendorBankers = getVendorBankers;
module.exports.getVendrById = getVendorBankerById;
module.exports.createVendorBanker = createVendorBanker;
module.exports.updateVendorBanker = updateVendorBanker;
module.exports.deleteVendor = deleteVendorBanker;

module.exports.getVendorContacts = getVendorContacts;
module.exports.getVendorContactById = getVendorContactById;
module.exports.createVendorContact = createVendorContact;
module.exports.updateVendorContact = updateVendorContact;
module.exports.deleteVendorContact = deleteVendorContact;



module.exports.getVendorItemHistory = getVendorItemHistory;
module.exports.getVendorItemHistoryById = getVendorItemHistoryById;
module.exports.createVendorItemHistory = createVendorItemHistory;
module.exports.updateVendorItemHistory = updateVendorItemHistory;
module.exports.deleteVendorItemHistory = deleteVendorItemHistory;

module.exports.getVendorItems = getVendorItems;
module.exports.getVendorItemById = getVendorItemById;
module.exports.createVendorItem = createVendorItem;
module.exports.updateVendorItem = updateVendorItem;
module.exports.deleteVendorItem = deleteVendorItem;


module.exports.getVendorJobWorks = getVendorJobWorks;
module.exports.getVendorJobWorkById = getVendorJobWorkById;
module.exports.createVendorJobWork = createVendorJobWork;
module.exports.updateVendorJobWork= updateVendorJobWork;
module.exports.deleteVendorJobWork = deleteVendorJobWork;


module.exports.getVendorNotes = getVendorNotes;
module.exports.getVendorNoteById = getVendorNoteById;
module.exports.createVendorNote = createVendorNote;
module.exports.updateVendorNote = updateVendorNote;
module.exports.deleteVendorNote = deleteVendorNote;