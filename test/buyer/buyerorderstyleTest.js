//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = require('chai').expect;
const server = require('../../../app');
var request = require('supertest');
chai.use(chaiHttp);

const DUMMY_USER = {
    username: 'dbd_chetans',
    password:"Interglobe@12"
};

var token = null;
var buyer_order_style_id = null;

describe('Buyer_Order_Style API Test', () => {
    before(function(done) {
        chai.request(server)
        .post('/users/authenticate')
        .send(DUMMY_USER)
        .end(function(err, res) {
            res.redirects.length.should.equal(0);
            res.status.should.equal(200);
            token = res.body.token;
            res.type.should.equal('application/json');
            done();
        });
    });
    it('Able to sucessfully insert new buyer_order_style', (done) => {
        var buyer_order_style = {
            "buyer_order_id": 1,
            "costing_id": 2,
            "total_quantity": "5",
            "unit_quantity": "3",
            "rate": "1002.32",
            "invoiced_quantity": "8.05",
            "packed_quantity": "8.05",
            "shipped_quantity": "8.05",
           "segment": "AS000001",
            "category": "General",
            "quota_system": "xyz",
            "garment_id": 3,
            "qty_in_perc": "12.05"
        };
        chai.request(server)
        .post('/buyer_order_style')
        .set('authorization', 'Bearer' + token)
        .send(buyer_order_style)
        .end((err, res) => {
            res.should.have.status(200);
            buyer_order_style_id = res.body.buyer_order_style_id;
            done();
        });
    });
    it('Retrieve all buyer_order_style', (done) => {
        chai.request(server)
        .get('/buyer_order_style')
        .set('authorization', 'Bearer' + token)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
    it('Retrieve one buyer_order_style', (done) => {
        chai.request(server)
        .get('/buyer_order_style/' + buyer_order_style_id)
        .set('authorization', 'Bearer' + token)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
    it('Able to update buyer_order_style successfully', (done) => {
        var buyer_order_style = {
            "buyer_order_id": 1,
            "costing_id": 2,
            "total_quantity": "5",
            "unit_quantity": "3",
            "rate": "1002.32",
            "invoiced_quantity": "8.05",
            "packed_quantity": "8.05",
            "shipped_quantity": "8.05",
            "segment": "AS000001",
            "category": "General",
            "quota_system": "xyz",
            "garment_id": 3,
            "qty_in_perc": "12.05"
    };
    chai.request(server)
    .put('/buyer_order_style/' + buyer_order_style_id)
    .set('authorization', 'Bearer' + token)
    .send(buyer_order_style)
    .end((err, res) => {
        res.should.have.status(200);
        done();
       });
    });
    /*it('Able to delete buyer_order_style', (done) => {
        chai.request(server)
        .delete('/buyer_order_style/' + buyer_order_style_id)
        .set('authorization', 'Bearer' + token)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });*/
});
