var models = require('../../models');
const LedgerMasterValidation = require('./validator/ledgerMasterValidation');

module.exports= {
    findAll(req, res){
        models.Ledger_Master.findAll({order: [['ledger_master_id', 'ASC']]})
        .then(function(ledger_master){
            res.status(200).json(ledger_master);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    findOne(req, res){
        models.Ledger_Master.findById(req.params.id)
        .then(function(ledger_master){
            res.status(200).json(ledger_master);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    },
    create(req, res){
        //validate the data
        if(LedgerMasterValidation.validateCreate()){
        var ledger_master = models.Ledger_Master.Build();
        ledger_master.item_id = req.body.item_id;
        ledger_master.opening_stock = req.body.opening_stock;
        ledger_master.qty_received = req.body.qty_received;
        ledger_master.qty_issued = req.body.qty_issued;
        ledger_master.closing_stock = req.body.closing_stock;
        ledger_master.average_rate = req.body.average_rate;
        ledger_master.stock_value = req.body.stock_value;
        ledger_master.save()
        .then(function(instance){
            res.status(200).json(instance);
        })
        .catch(function(error){
            res.status(500).json(error);
        })
    }
    },
    update(req, res){
        models.Ledger_Master.findById(req.params.id)
        .then(function(ledger_master){
        if(LedgerMasterValidation.validateUpdate()){
        ledger_master.item_id = req.body.item_id;
        ledger_master.opening_stock = req.body.opening_stock;
        ledger_master.qty_received = req.body.qty_received;
        ledger_master.qty_issued = req.body.qty_issued;
        ledger_master.closing_stock = req.body.closing_stock;
        ledger_master.average_rate = req.body.average_rate;
        ledger_master.stock_value = req.body.stock_value;
        ledger_master.save()
        .then(function(ledger_master){
            res.status(200).json(ledger_master);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
        });
    },
    delete(req, res){
        if (LedgerMasterValidation.validateDelete()){
        models.Ledger_Master.destroy({
            where: {
                ledger_master_id: req.params.id
            }
        })
        .then(function(result){
            res.status(200).json(result);
        })
        .catch(function(error){
            res.status(500).json(error);
        });
    }
    }
};