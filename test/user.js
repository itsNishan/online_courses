const chai = require('chai');
const chaiHttp = require('chai-http');
const baseUrlRoutes = 'http://localhost:3000';

const should = chai.should();
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(chaiHttp);

const myapp = require('../app.js');

let serverr

before(done => {
    serverr = myapp.listen(2000, done);
});

after(done => {
    serverr.close(done);
});

// login
describe('users', () => {
    describe('/POST login', () => {
        it('it should log in user', (done) => {
            // chai.request(baseUrlRoutes)
            chai.request(myapp)
                .post('/user/login')
                .send({
                    "email": 'rai.rai.ribin1000@gmail.com',
                    "password": 'asd',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
f

// admin login
describe('admin login', () => {
    describe('/POST login', () => {
        it('it should log in admin', (done) => {
            // chai.request(baseUrlRoutes)
            chai.request(myapp)
                .post('/admin/login')
                .send({
                    "email": 'arunmajhi@gmail.com',
                    "password": 'asd',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});