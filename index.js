const exec = require('child_process').exec;

module.exports = function(path, opts, next){
  if (typeof opts === 'function'){
    next = opts
    opts = undefined
  }
  if (!next) next = function(){}
  if (!opts) opts = {}
  if (!opts.format) opts.format = 'hex'
  var args = `convert ${path} -format %c -colorspace LAB -colors 5 histogram:info:- | sort -n -r`
  
  exec(args, function(err, stdout, stderr) {
    if (err) next(err)
    
    let result = stdout.split(/\n/g).sort()
    result = removeArr(result, 0)
    result = aa(result)

    next(null, result)
  })
}

let removeArr = (arr, idx) => {
  let temp = []
  arr.map((item, index) => {
    if (index != idx) {
      temp.push(item)
    }
  })

  return temp
}

let aa = (arr) => {
  let result = []
  arr.map((item) => {
    let countRegex = /\w+(\:)/
    let hexRegex = /(\#)+\w+/
    result.push({
      count: countRegex.exec(item)[0],
      hex: hexRegex.exec(item)[0]
    })
  })

  return result
}