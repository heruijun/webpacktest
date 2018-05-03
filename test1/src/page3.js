import * as utils from './utils'

var src1 = 'https://doc.webpack-china.org/cd0bb358c45b584743d8ce4991777c42.svg'
var result1 = utils.loadImage(src1)
var src2 = 'https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png'
var result2 = utils.loadImage(src2)

result1.then((img) => {
    console.log(img.width)
    return img
}, () => console.log('failed'))
    .then((img) => {
        console.log(img.height)
        return img
    }).then((img) => {
        document.body.appendChild(img)
        return result2
    }).then((img) => {
        document.body.appendChild(img)
    }).catch(ex => console.log(ex))

// 待全部处理完之后，统一执行success
Promise.all([result1, result2]).then(datas => {
    // 接收到的datas是一个数组，依次包含多个promise返回的内容
    console.log('---- all ----')
    console.log(datas[0])
    console.log(datas[1])
})

// 只要有一个完成，就执行success
Promise.race([result1, result2]).then(data => {
    // data即最先执行完成的
    console.log('---- race ----')
    console.log(data)
})