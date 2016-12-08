var ipd  = require('./'),
    expect  = require('expect.js'),
    imgPath = './purr.jpg'

describe('dominant-colour', function(){
  it('works', function(done){
  	this.timeout(3000)
    ipd(imgPath, function(err, colour){
      expect(typeof colour).to.be('object')
      done()
    })
  })
})