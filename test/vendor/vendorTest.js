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
var vendor_id = null;

describe('Vendor API Test', () => {
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
    it('Able to successfully insert new vendor', (done) => {
        var vendor = {
            "company_id" : 1,
            "agent_code" : "xyz",
            "vendor_name" : "Ketu",
            "vendor_type" : "normal",
            "address" : "74/219, DIZ AREA, SEC-1, Gole Market",
            "city" : "New Delhi",
            "state" : "DL",
            "country" : "IN",
            "zip" : "110001",
            "phone" : "9958210854",
            "fax" : "38872732",
            "e_mail" : "k2@gmail.com",
            "principal_contact" : "xyz",
            "introduced_by" : "xyz",
            //"introduced_date" : "10/09/2019",
            "credit_days" : "12.5",
            "vendor_rating" : "Good",
            "income_tax" : "xyz"
        };
        chai.request(server)
        .post('/vendor')
        .set('authorization', 'Bearer ' + token)
        .send(vendor)
        .end((err, res) => {
            res.should.have.status(200);
            vendor_id = res.body.vendor_id;
            done();
        });
    });
    
    it('Retrieve all vendor', (done) => {
        chai.request(server)
        .get('/vendor')
        .set('authorization', 'Bearer '+ token)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
    it('Retrieve one vendor', (done) => {
        chai.request(server)
        .get('/vendor/'+ vendor_id)
        .set('authorization', 'Bearer ' + token)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
    it('Able to update vendor successfully', (done) => {
        var vendor = {
            "company_id" : 1,
            "agent_code" : "xyz",
            "vendor_name" : "Ketu",
            "vendor_type" : "normal",
            "address" : "74/219, DIZ AREA, SEC-1, Gole Market",
            "city" : "New Delhi",
            "state" : "DL",
            "country" : "IN",
            "zip" : "110001",
            "phone" : "9958210854",
            "fax" : "38872732",
            "e_mail" : "k2@gmail.com",
            "principal_contact" : "xyz",
            "introduced_by" : "xyz",
            //"introduced_date" : "10/09/2019",
            "credit_days" : "12.5",
            "vendor_rating" : "Good",
            "income_tax" : "xyz"
        };
        chai.request(server)
        .put('/vendor/' + vendor_id)
        .set('authorization', 'Bearer ' + token)
        .send(vendor)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
    });
    it('Able to delete vendor', (done) => {
      chai.request(server)
      .delete('/vendor/' + vendor_id)
      .set('authorization', 'Bearer ' + token)
      .end((err, res) => {
          res.should.have.status(200);
          done();
      });
    });
   
});