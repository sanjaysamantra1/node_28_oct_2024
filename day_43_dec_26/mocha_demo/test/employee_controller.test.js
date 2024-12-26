import * as chai from "chai";
const { expect } = chai;
import { default as chaiHttp, request } from "chai-http";
import sinon from "sinon";
import { EmployeeModel } from "../src/models/employee_model.js"
import { app } from "../app.js";
chai.use(chaiHttp);

describe('Test suite for employee CRUD', () => {
    let findStub;

    beforeEach(() => {
        findStub = sinon.stub(EmployeeModel, 'find');
    })
    afterEach(() => {
        findStub.restore();
    })

    it('should verify getAllEmployee', async () => {
        const mockEmployees = [
            { _id: 111, name: 'sanjay', gender: 'male', sal: 5000 },
            { _id: 222, name: 'geeta', gender: 'female', sal: 6000 }
        ];
        findStub.resolves(mockEmployees);

        const res = await request.execute(app).get('/employees');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployees);
    })

})
