import * as utils from './utils'

var src = 'https://doc.webpack-china.org/cd0bb358c45b584743d8ce4991777c42.svg'
var result = utils.loadImage(src)

result.then((img) => {
    console.log(img.width)
    return img
}, () => console.log('failed'))
.then((img) => {
    console.log(img.height)
    return img
}).then((img) => {
    document.body.appendChild(img)
})