const gtodos = require('../data/todos.json')

module.exports = {
    query,
    save,
    getById,
    remove,

   
}



function query() {
    return Promise.resolve(gtodos);
}

function getById(todoId){{
    const todo = gtodos.find(todo => todo._id === todoId)
    return Promise.resolve(todo);
}}

// save todo to the file
function save(todo) {
    if (todo._id) {
        const idx = gtodos.findIndex(c => c._id === todo._id)
        if (idx < 0) return Promise.reject('No such todo', todo._id)
        gtodos.splice(idx, 1, todo)
    } else {
        todo._id = _makeId()
        gtodos.unshift(todo)
    }
    return _saveTodosToFile()
        .then(() => todo)


}


function remove(myTodoId){
    const idx = gtodos.findIndex(todo => todo._id === myTodoId)
    gtodos.splice(idx, 1)
    return _saveTodosToFile();
}

function _saveTodosToFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs')
        fs.writeFile('data/todos.json', JSON.stringify(gtodos, null, 2), (err) => {
            if (err) reject(err)
            else resolve()
        })
    })
}

function _makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}