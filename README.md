# image-palette-dominant
[![Build Status](https://travis-ci.org/adeyahya/image-palette-dominant.svg?branch=master)](https://travis-ci.org/adeyahya/image-palette-dominant.svg?branch=master)

Gets dominant color palette of an image using imagemagick

## Installation

    npm install image-palette-dominant

## Example

```javascript
var ipd   = require('image-palette-dominant'),
    imgPath = './path/to/your/image.jpg'

ipd(imgPath, function(err, color){
  // hex color by default
  console.log(color) // '5b6c6e'
})

ipd(imgPath, {format: 'rgb'}, function(err, color){
  console.log(color) // [{count: '233234', hex: '#000'}, {...}]
})
```

## License

MIT
