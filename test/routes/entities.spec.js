import {
    expect
} from 'chai'
import {
    testServer,server
} from '../server/testServer.spec'

describe('GET /api/entities', async () => {
    const server = server;


    console.log('server');
   
    
    const request = {
        method: 'GET',
        url: '/api/entities'
    }
    it('describe the entity', () => {
        expect(1).to.be.equal(1);
    })


    it('returns HTTP Status Code 200', done => {
        server.select('IL').inject(request, response => {

            expect(JSON.parse(response.statusCode)).to.equal(200);
            console.log('response is:');
            console.log(response);

            done();
        })
    })

    it('returns an array', done => {
        try {
            server.select('IL').inject(request, response => {
                expect(JSON.parse(response.payload)).to.be.an('array')

                console.log('response payload');
                console.log(response.payload);
                done()
            })
        } catch (err) {
            console.log('Test Error', err)
        }
    })
});