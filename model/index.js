const mongoose = require('mongoose')
const { BASE_MONGO_URL } = require('../config/config.default')

async function main() {
    await mongoose.connect(BASE_MONGO_URL)
}

main().then(res => {
    console.log('✅ mongo connection successful')
}).catch(error => {
    console.log('❌ mongo error:', error)
})

//导出模块
module.exports = {
    testModel: mongoose.model('testModel', require('./testModel'))
}