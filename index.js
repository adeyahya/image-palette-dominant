const exec = require('exec')

module.exports = function(path, sum, next){
  if (typeof sum === 'function'){
    next = sum
    sum = 5
  }
  if (!next) next = function(){}
  var args = `convert ${path} -format %c -colorspace LAB -colors ${sum} histogram:info:- | sort -n -r`
  
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
      count: countRegex.exec(item)[0].replace(':',''),
      hex: hexRegex.exec(item)[0]
    })
  })

  return result
}