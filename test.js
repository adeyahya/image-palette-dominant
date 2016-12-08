var ipd  = require('./'),
		path = require('path'),
    expect  = require('expect.js'),
    imgPath = path.join(__dirname, 'purr.jpg')

describe('dominant-colour', function(){
  it('works', function(done){
  	this.timeout(3000)
    ipd(imgPath, function(err, colour){
      expect(typeof colour).to.be('object')
      done()
    })
  })
})