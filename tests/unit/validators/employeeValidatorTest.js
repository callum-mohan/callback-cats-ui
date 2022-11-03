const chai = require('chai')
const assert = chai.assert;
const employeeValidator = require('../../../app/validators/EmployeeValidator')

describe('employeeValidation', () => { //file name

    describe('presenceCheckString', () => { //function name

        it('should return true when there is a type of somesort present', () => { //test

            var testCase = "HereIsAString";

            const result = employeeValidator.presenceCheckString(testCase)

            assert.equal(result, true)

        })


        it('should return false when there is an empty string', () => { //test

            var testCase = "";

            const result = employeeValidator.presenceCheckString(testCase)

            assert.equal(result, false)

        })




    })

    // describe('presenceCheckInt', () => {
    //     it('should return true when there is an int greater than 0', () => { //test

    //         var testCase = 1;

    //         const result = employeeValidator.presenceCheckInt(testCase)

    //         assert.equal(result, true)

    //     })

    //     it('should return false when there is an int less than 0', () => { //test

    //         var testCase = -1;

    //         const result = employeeValidator.presenceCheckInt(testCase)

    //         assert.equal(result, false)

    //     })

    //     it('should return false when there is a string', () => { //test

    //         var testCase = "string";

    //         const result = employeeValidator.presenceCheckInt(testCase)

    //         assert.equal(result, false)

    //     })


    //     it('should return false when the type is an object', () => { //test

    //         var testCase = {
    //             int: 12
    //         };

    //         const result = employeeValidator.presenceCheckString(testCase)

    //         assert.equal(result, false)

    //     })

        
    // })

    describe('lengthCheckString', () => {
        var MAX_LENGTH = 30;
        it('should return true when the length is less than the MAX', () => { //test

            var testCase = "validString";

            const result = employeeValidator.lengthCheckString(MAX_LENGTH,testCase)

            assert.equal(result, true)

        })


        it('should return false when the length is greater than MAX', () => { //test

            var testCase = "DlMQHMdKxsDlMQHMdKxsDlMQHMdKxsDlMQHMdKxs";

            const result = employeeValidator.presenceCheckInt(testCase)

            assert.equal(result, false)

        })

    })

    describe('typeCheckString', () => {
        it('should return true when the type is a string', () => { //test

            var testCase = "validString";

            const result = employeeValidator.typeCheckString(testCase)

            assert.equal(result, true)

        })

        it('should return false when the type is an int', () => { //test

            var testCase = 12;

            const result = employeeValidator.typeCheckString(testCase)

            assert.equal(result, false )

        })
    })

    describe('typeCheckInt', () => {

        it('should return true when the type is an int', () => { //test

            var testCase = 12;

            const result = employeeValidator.typeCheckInt(testCase)

            assert.equal(result, true)

        })


        it('should return false when the type is an string', () => { //test

            var testCase = "12";

            const result = employeeValidator.typeCheckInt(testCase)

            assert.equal(result, false)

        })


        it('should return false when the type is an array', () => { //test

            var testCase = [12];

            const result = employeeValidator.typeCheckInt(testCase)

            assert.equal(result, false)

        })


        it('should return false when the type is an object', () => { //test

            var testCase = {
                int: 12
            };

            const result = employeeValidator.typeCheckInt(testCase)

            assert.equal(result, false)

        })

    })

    describe('checkLevelValue', () => {
        it('should return true when the level is a assosciate', () => { //test

            var testCase = "Associate"

            const result = employeeValidator.checkLevelValue(testCase)

            assert.equal(result, true)

        })
        it('should return false when the level is a choose level', () => { //test

            var testCase = "Choose Level"

            const result = employeeValidator.checkLevelValue(testCase)

            assert.equal(result, false)

        })

        it('should return false when the level is a choose', () => { //test

            var testCase = "choose"

            const result = employeeValidator.checkLevelValue(testCase)

            assert.equal(result, false)

        })
    })
    
})