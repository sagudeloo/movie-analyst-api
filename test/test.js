process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('API', () => {

  /*
  * Test the / route
  */
  describe('/GET home', () => {
      it('it should GET any reply', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

  /*
  * Test the /movies route
  */
  describe('/GET movies', () => {
    it('it should GET any reply', (done) => {
      chai.request(server)
          .get('/movies')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });

  /*
  * Test the /reviewers route
  */
  describe('/GET reviewers', () => {
    it('it should GET any reply', (done) => {
      chai.request(server)
          .get('/reviewers')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });

  /*
  * Test the /publications route
  */
  describe('/GET publications', () => {
    it('it should GET any reply', (done) => {
      chai.request(server)
          .get('/publications')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
  });

});
