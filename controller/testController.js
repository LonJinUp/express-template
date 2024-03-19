const { testModel } = require('../model/index')
const { v4: uuidv4 } = require('uuid')


exports.add = async (req, res) => {
    req.body.todoId = uuidv4()
    try {
        const addTestModel = new testModel(req.body)
        const dbBack = await addTodoModel.save()
        res.handleSuccess(dbBack)
    } catch (err) {
        res.handleError('api error', err)
    }
}



