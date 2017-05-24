var assert=require('chai').assert;
var app=require('../app');

describe("array test",function(){
     it("Empty array",function(){
         assert.equal(app.array([]),undefined)

     })

    it("check null array",function(){
         assert.equal(app.array(),'Null input not accepted')
    })

    it("single value",function(){
        assert.equal(app.array([-5]),-5)
    })

    it("two values",function(){
        assert.equal(app.array([1,2]),1)
    })

    it("three values",function(){
        assert.equal(app.array([1,2,3]),1)
    })

    it("two negative values",function(){
        assert.equal(app.array([-1,-2]),-1)
    })

    it("multiple positive and negative values",function(){
        assert.equal(app.array([1,2,-5,1]),1)
    })

    it("two equal(absolute) values",function(){
        assert.equal(app.array([10,2,-2]),2)
    })

    it("two equal values in different order",function(){
        assert.equal(app.array([10,-2,2]),2)
    })

    it("multiple inputs",function(){
        assert.equal(app.array([-5,-2,12,-6,17,2,3,-1,-3,0.5]),0.5)
    })

})