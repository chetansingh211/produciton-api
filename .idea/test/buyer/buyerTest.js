//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = require('chai').expect;
const server = require('../../src/app');
var request = require('supertest');
chai.use(chaiHttp);

const DUMMY_USER = {
  username: 'dbd_chetans', 
  password: 'Interglobe@12'
};

var token = null;
var buyer_id = null;

describe('Buyer API Test', () => {
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
  it('Able to sucesfully insert new buyer', (done) => {
    var buyer = {
      "company_id" : 1,
      "buyer_name": "Test Insert",
      "address": "4/15-19 HASSALL STREET, WESTMEAD, NSW-2145, AUSTRALIA",
      "city": "Sydney",
      "state": "DL",
      "zip": "2145",
      "country" : "AU",
      "phone" : "0470670218",
      "email": "chetansingh211@yahoo.com"
    };
    chai.request(server)
      .post('/buyer')
      .set('authorization', 'Bearer ' + token)
      .send(buyer)
      .end((err, res) => {
        res.should.have.status(200);
        buyer_id = res.body.buyer_id;
      done();
    });
  });
  it('Retrieve all buyer', (done) => {
    chai.request(server)
      .get('/buyer')
      .set('authorization', 'Bearer ' + token)
      .end((err, res) => {
        res.should.have.status(200);
      done();
    });
  });
  it('Retrieve one buyer', (done) => {
    chai.request(server)
      .get('/buyer/'+ buyer_id)
      .set('authorization', 'Bearer ' + token)
      .end((err, res) => {
        res.should.have.status(200);
      done();
    });
  });
  it('Able to update buyer sucesfully', (done) => {
    var buyer = {
      "company_id" : 1,
      "buyer_name": "Update test Insert",
      "address": "4/15-19 HASSALL STREET, WESTMEAD, NSW-2145, AUSTRALIA",
      "city": "Sydney",
      "state": "DL",
      "zip": "2145",
      "country" : "AU",
      "phone" : "0470670218",
      "email": "chetansingh211@yahoo.com"
    };
    chai.request(server)
      .put('/buyer/'+buyer_id)
      .set('authorization', 'Bearer ' + token)
      .send(buyer)
      .end((err, res) => {
        res.should.have.status(200);
      done();
    });
  });
  
  it('Able to delete buyer', (done) => {
    chai.request(server)
      .delete('/buyer/'+buyer_id)
      .set('authorization', 'Bearer ' + token)
      .end((err, res) => {
        res.should.have.status(200);
      done();
    });
  });
});