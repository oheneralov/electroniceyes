'use strict'

const Fs = require('fs')  
const Path = require('path')  
const Axios = require('axios')

async function downloadImage (url, dest) {  
  const path = Path.resolve(__dirname, 'images', dest)
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}

const url = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F5d0d219c6d27d026df672182%2F1%3A1%2Fw_150%2Ch_150%2Cc_limit%2FTranspo_Roundup_TA-IMG_7645-copy.jpg&imgrefurl=https%3A%2F%2Fwww.wired.com%2Fstory%2Frobot-fish-jd-power-korean-cars-taylor-swift-todays-news%2F&docid=SNSHZwF8Y8WsCM&tbnid=tDYlSvTgQfslZM%3A&vet=10ahUKEwi8rOLnsp3jAhWSlosKHZ6ND7EQMwhrKAIwAg..i&w=150&h=150&bih=898&biw=1700&q=cars&ved=0ahUKEwi8rOLnsp3jAhWSlosKHZ6ND7EQMwhrKAIwAg&iact=mrc&uact=8'
const dest = 'code.jpeg'
downloadImage(url, dest) 
