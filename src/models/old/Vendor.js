/* jshint indent: 1 */
const sql = require('mssql');
const config = require('../config/config.json');

//vendor models
async function getVendors(){
    const sqlSelect = 'select * from vendor order by vendor_name';
    try{
        let pool = await sql.Connect(config);
        let result = await pool.request().query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function getVendorById(vendorId){
    try{
        let pool = await sql.Connect(config).request();
        pool.input('vendorId', sql.Int, vendorId);
        const sqlSelect = 'select * from vendor where vendor_id = @vendorId';
        let result = await pool.query(sqlSelect);
        return result;
        } catch(error){
            return result;
        } finally {
            pool.close();
        }
}

async function createVendor(inputParams) {
    try{
        let pool = await sql.connect(config).request();
        pool.input('company_id', sql.Int, inputParams.company_id);
        pool.input('agent_code', sql.NVarChar, inputParams.agent_code);
        pool.inpu('vendor_name',sql.NVarChar, inputParams.vendor_name);
        pool.input('vendor_type', sql.NVarChar, inputParams.vendor_type);
        pool.input('address', sql.NVarChar, inputParams.address);
        pool.input('city', sql.NVarChar, inputParams.city);
        pool.input('state', sql.NVarChar, inputParams.state);
        pool.input('zip', sql.NVarChar, inputParams.zip);
        pool.inpu('country', sql.NVarChar, inputParams.country);
        pool.input('phone', sql.NVarChar, inputParams.phone);
        pool.input('fax', sql.NVarChar, inputParams.fax);
        pool.input('e_mail', sql.NVarChar, inputParams.e_mail);
        pool.input('principal_contact', sql.NVarChar, inputParams.principal_contact);
        pool.input('introduced_by', sql.NVarChar, inputParams.introduced_by);
        pool.input('introduced_date', sql.DateTime, inputParams.introduced_date);
        pool.input('credit_days',sql.Decimal , inputParams.credit_days);
        pool.input('vendor_rating', sql.NVarChar, inputParams.vendor_rating);
        pool.input('income_tax', sql.NVarChar, inputParams.income_tax);


        const sqlInsert = ` insert into vendor(company_id, agent_code, vendor_type, vendor_name, address, city, state, zip, country, phone, fax, e_mail, principal_contact, introduced_by, introduced_date, credit_days, vendor_rating, income_tax);
                           values(@company_id, @agent_code, @vendor_type, @vendor_name, @address, @city, @state, @zip, @country, @phone, @fax, @e_mail, @principal_contact, @introduced_by, @introduced_date, @credit_days, @vendor_rating, @income_tax)`;

        let result = await pool.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function updateVendor(vendorId, inputParams){
    try {
        let pool = await sql.connect(config).request();
        pool.input('vendor_id', sql.Int, vendorId);
        pool.input('company_id', sql.Int, inputParams.company_id);
        pool.input('agent_code', sql.NVarChar, inputParams.agent_code);
        pool.inpu('vendor_name',sql.NVarChar, inputParams.vendor_name);
        pool.input('vendor_type', sql.NVarChar, inputParams.vendor_type);
        pool.input('address', sql.NVarChar, inputParams.address);
        pool.input('city', sql.NVarChar, inputParams.city);
        pool.input('state', sql.NVarChar, inputParams.state);
        pool.input('zip', sql.NVarChar, inputParams.zip);
        pool.inpu('country', sql.NVarChar, inputParams.country);
        pool.input('phone', sql.NVarChar, inputParams.phone);
        pool.input('fax', sql.NVarChar, inputParams.fax);
        pool.input('e_mail', sql.NVarChar, inputParams.e_mail);
        pool.input('principal_contact', sql.NVarChar, inputParams.principal_contact);
        pool.input('introduced_by', sql.NVarChar, inputParams.introduced_by);
        pool.input('introduced_date', sql.DateTime, inputParams.introduced_date);
        pool.input('credit_days',sql.Decimal , inputParams.credit_days);
        pool.input('vendor_rating', sql.NVarChar, inputParams.vendor_rating);
        pool.input('income_tax', sql.NVarChar, inputParams.income_tax);

        const sqlUpdate = `update vendor set
                            company_id  = @company_id ,
                            agent_code = @agent_id,
                            vendor_name = @vendor_name,
                            vendor_type = @vendor_type,
                            address = @address,
                            city = @city,
                            state = @state,
                            zip = @zip,
                            country = @country,
                            phone = @phone,
                            fax = @fax,
                            e_mail = @e_mail ,
                            principal_contact = @principal_contact,
                            introduced_by = @introduced_by,
                            introduced_date = @introduced_date,
                            credit_days = @credit_days,
                            vendor_rating  = @vendor_rating,
                            income_tax = @income_tax
                           where vendor_id = @vendor_id`;

        let result = await pool.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function deleteVendor(vendorId){
    try{
        let pool = await sql.connect(config).request();
        pool.input('vendor_id', sql.Int, vendorId);

        const sqlDelete = `delete from vendor where vendor_id = @vendor_id`;

        let result = await pool.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

//vendor_bankers model
async function getVendorBankers() {
    const sqlSelect = 'select* from vendor_bankers';
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function getVendorBankerById(vendorBankerId){
    try {
        let pool = await sql.connect(config).request();
        pool.input('vendorBankerId', sql.Int, vendorBankerId);

        const sqlSelect = 'select * from vendor_bankers where vendor_banker_id = @vendorBankerId';

        let result = await pool.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally{
        pool.close();
    }
}

async function createVendorBanker(inputParams){
    try{
        let pool = await sql.connect(config).request();
        pool.input('vendor_id', sql.Int, inputParams.vendor_id);
        pool.input('vendor_account', sql.NVarChar, inputParams.vendor_account);
        pool.input('our_account', sql.NVarChar, inputParams.our_account);
        pool.input('mode_of_trxn', sql.NVarChar, inputParams.mode_of_trxn);
        pool.input('bank_name', sql.NVarChar, inputParams.bank_name);
        pool.input('contact_name', sql.NVarChar, inputParams.contact_name);
        pool.input('address', sql.NVarChar, inputParams.address);
        pool.input('city', sql.NVarChar, inputParams.city);
        pool.input('state', sql.NVarChar, inputParams.state);
        pool.input('contact', sql.NVarChar, inputParams.contact);
        pool.input('zip', sql.NVarChar, inputParams.zip);
        pool.input('phone', sql.NVarChar, inputParams.phone);
        pool.input('fax', sql.NVarChar, inputParams.fax);
        pool.input('e_mail', sql.NVarChar, inputParams.e_mail);
        pool.input('swift_account', sql.NVarChar, inputParams.swift_account);


        const sqlInsert = `insert into vendor_bankers(vendor_id, vendor_account, our_account, mode_of_trxn,bank_name, contact_name, address, city, state, contact, zip, phone, fax, e_mail, swift_account)
                           values(@vendor_id, @vendor_account, @our_account, @mode_of_trxn, @bank_name, @contact_name, @address, @city, @state, @contact, @zip, @phone, @fax, @e_mail, @swift_account)`;

        let result = await pool.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function updateVendorBanker(vendorBankerId, inputParams){
    try{
        let pool = await sql.connect(config).request();
        pool.input('vendor_banker_id', sql.Int, vendorBankerId);
        pool.input('vendor_id', sql.Int, inputParams.vendor_id);
        pool.input('vendor_account', sql.NVarChar, inputParams.vendor_account);
        pool.input('our_account', sql.NVarChar, inputParams.our_account);
        pool.input('mode_of_trxn', sql.NVarChar, inputParams.mode_of_trxn);
        pool.input('bank_name', sql.NVarChar, inputParams.bank_name);
        pool.input('contact_name', sql.NVarChar, inputParams.contact_name);
        pool.input('address', sql.NVarChar, inputParams.address);
        pool.input('city', sql.NVarChar, inputParams.city);
        pool.input('state', sql.NVarChar, inputParams.state);
        pool.input('contact', sql.NVarChar, inputParams.contact);
        pool.input('zip', sql.NVarChar, inputParams.zip);
        pool.input('phone', sql.NVarChar, inputParams.phone);
        pool.input('fax', sql.NVarChar, inputParams.fax);
        pool.input('e_mail', sql.NVarChar, inputParams.e_mail);
        pool.input('swift_account', sql.NVarChar, inputParams.swift_account);


        const sqlUpdate = `updtae vendor_bankers set
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
                        where vendor_banker_id = @vendor_banker_id`;

        let result = await pool.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function deleteVendorBanker(vendorBankerId){
    try{
        let pool = await sql.connect(config).request();
        pool.input('vendor_banker_id', sql.Int, vendorBankerId);

        const sqlDelete = `delete from vendor_bankers where vendor_banker_id = @vendor_banker_id`;

        let result = await pool.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally{
        pool.close();
    }
}


//vendor_contacts

async function getVendorContacts(){
    const sqlSelect = 'select * from vendor vendor_contacts';
    try {
        let pool = await sql.connect(config);
        let result  = await pool.request().query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function getVendorContactById(vendorContactId){
    try {
        let pool = await sql.connect(config).request();
        pool.input('vendorContactId', sql.Int, vendorContactId);

        const sqlSelect = 'select * from vendor_contacts where vendor_contact_id = @vendorContactId';

        let result = await pool.query(sqlSelect);
        return result;
    } catch (error){
        return error;
    } finally {
        pool.close();
    }
}

async function createVendorContact(inputParams){
    try {
        let pool = await sql.connect(config).request();
        pool.input('vendor_id', sql.Int, inputParams.vendor_id);
        pool.input('contact_name', sql.NVarChar, inputParams.contact_name);
        pool.input('address', sql.NVarChar, inputParams.address);
        pool.input('city', sql.NVarChar, inputParams.city);
        pool.input('state', sql.NVarChar, inputParams.state);
        pool.input('zip', sql.NVarChar, inputParams.zip);
        pool.input('country', sql.NVarChar, inputParams.country);
        pool.input('phone', sql.NVarChar, inputParams.phone);
        pool.input('fax', sql.NVarChar, inputParams.fax);
        pool.input('e_mail', sql.NVarChar, inputParams.e_mail);
        pool.input('department', sql.NVarChar, inputParams.department);
        pool.input('designation', sql.NVarChar, inputParams.designation);


        const sqlInsert = `insert into vendor_contacts(vendor_id, contact_name, address, city, state, zip, country, phone, fax, e_mail, departmemt, designation);
                           values(@vendor_id, @contact_name, @address, @city, @state, @zip, @country, @phone, @fax, @e_mail, @departmemt, @designation)`;

        let result = await pool.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function updateVendorContact(vendorContactId, inputParams){
    try {
        let pool = await sql.connect(config).request();
        pool.input('vendor_contact_id', sql.Int, vendorContactId)
        pool.input('vendor_id', sql.Int, inputParams.vendor_id);
        pool.input('contact_name', sql.NVarChar, inputParams.contact_name);
        pool.input('address', sql.NVarChar, inputParams.address);
        pool.input('city', sql.NVarChar, inputParams.city);
        pool.input('state', sql.NVarChar, inputParams.state);
        pool.input('zip', sql.NVarChar, inputParams.zip);
        pool.input('country', sql.NVarChar, inputParams.country);
        pool.input('phone', sql.NVarChar, inputParams.phone);
        pool.input('fax', sql.NVarChar, inputParams.fax);
        pool.input('e_mail', sql.NVarChar, inputParams.e_mail);
        pool.input('department', sql.NVarChar, inputParams.department);
        pool.input('designation', sql.NVarChar, inputParams.designation);


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
                         where vendor_contact_id = @vendor_contact_id`;
        let result = await pool.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function deleteVendorContact(vendorContactId){
    try{
        let pool = await sql.connect(config).request();
        pool.input('vendor_contact_id', sql.Int , vendorContactId);

        const sqlDelete = `delete from vendor_contacts where vendor_contact_id = @vendor_contact_id`;

        let result = await pool.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}


//vendor_items

async function getVendorItems(){
    const sqlSelect = 'select * from vendor_items';
    try{
        let pool = await sql.connect(config);
        let result  = await pool.request().query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function getVendorItemById(vendorItemId){
    try {
        let pool = await sql.connect(config).request();
        pool.input('vendorItemId', sql.Int, vendorItemId);
        const sqlSelect= ' select *  from vendor_items where vendor_item_id = @vendorItemId';
        let result  = await pool.query(sqlSelect);
        return result;
    } catch(error) {
        return error;
    } finally {
        pool.close();
    }
}

async function createVendorItem(inputParams){
    try{
        let pool = await  sql.connect(config).request();
        pool.input('item_id', sql.Int, inputParams.item_id);
        pool.input('lead_time', sql.Decimal, inputParams.lead_time);
        pool.input('unit_time', sql.Int, inputParams.unit_time);
        pool.input('capacity', sql.Decimal, inputParams.capacity);
        pool.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        pool.input('basic_rates', sql.Decimal, inputParams.basic_rates);
        pool.input('unit_rate', sql.Decimal, inputParams.unit_rate);
        pool.input('last_updated', sql.DateTime, inputParams.last_updated);
        pool.input('last_updated_by', sql.NVarChar, inputParams.last_updated_by);


        const sqlInsert = `insert into vendor_items(item_id, lead_time, unit_time, capacity, unit_capacity, basic_rates, unit_rate, last_updated, last_updated_by);
                         value(@item_id, @lead_time, @unit_time, @capacity, @unit_capacity, @basic_rates, @unit_rate, @last_updated, @last_updated_by)`;

        let result = await pool.query(sqlInsert);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function updateVendorItem(vendorItemId, inputParams){
    try {
        let pool = await sql.connect(config).request();
        pool.input('vendor_item_id', sql.Int, vendorItemId);
        pool.input('item_id', sql.Int, inputParams.item_id);
        pool.input('lead_time', sql.Decimal, inputParams.lead_time);
        pool.input('unit_time', sql.Int, inputParams.unit_time);
        pool.input('capacity', sql.Decimal, inputParams.capacity);
        pool.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        pool.input('basic_rates', sql.Decimal, inputParams.basic_rates);
        pool.input('unit_rate', sql.Decimal, inputParams.unit_rate);
        pool.input('last_updated', sql.Date, inputParams.last_updated);
        pool.input('last_updated_by', sql.NVarChar, inputParams.last_updated_by);


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
                        where vendor_item_id = @vendor_item_id`;

        let result = await pool.query(sqlUpdate);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function deleteVendorItem(vendorItemId){
    try {
        let pool = await sql.connect(config).request();
        pool.input('vendor_item_id', sql.Int, vendorItemId);

        const sqlDelete = 'delete from vendor_items where vendor_item_id = @vendor_item_id';

        let result = await pool.query(sqlDelete);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}
// vendor_item_history

async function getVendorItemHistory(){
    const sqlSelect = 'select  * from vendor_item_history';
    try{
        let pool = await sql.connect(config);
        let result = await pool.request().query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally{
        pool.close();
    }
}

async function getVendorItemHistoryById(vendorItemHistoryId){
    try{
        let pool = await sql.connect(confiq).request();
        pool.input('vendorItemHistoryId', sql.Int, vendorItemHistoryId);

        const sqlSelect = 'select * from vendor_item_history where vendor_item_history_id = @vendorItemHistory';

        let result = await pool.query(sqlSelect);
        return result;
    } catch(error){
        return error;
    } finally {
        pool.close();
    }
}

async function createVendorItemHistory(inputParams){
    try{
        let pool = await sql.connect(config).request();
        pool.input('vendor_id', sql.Int, inputParams.vendor_id);
        pool.input('item_id', sql.Int, inputParams.item_id);
        pool.input('last_updated', sql.DateTime, inputParams.last_updated);
        pool.input('lead_time', sql.Decimal, inputParams.lead_time);
        pool.input('unit_time', sql.NVarChar, inputParams.unit_time);
        pool.input('capacity', sql.Decimal, inputParams.capacity);
        pool.input('unit_capacity', sql.NVarChar, inputParams.unit_capacity);
        pool.input('basic_rates', sql.Decimal, inputParams.basic_rates);
        pool.input('unit_rate', sql.NVarChar, inputParams.unit_rate);
        pool.input('last_updated_ by', sql.NVarChar, inputParams.last_updated_by);
        pool.input('reasons', sql.NVarChar, inputParams.reasons);

        const sqlInsert = `insert into vendor_item_history(vendor_id, item_id, last_updated, lead_time, unit_time, capacity, unit_capacity, basic_rates, unit_rate, last_updated_by, reasons)
                            values(vendor_id, item_id, last_updated, lead_time, unit_time, capacity, unit_capacity, basic_rates, unit_rate, last_updated_by, reasons)`;

        let result = await pool.query(sqlInsert);
        return tresult;
    } catch(error){
        return error;
    } finally{
        pool.close();
    }
}
