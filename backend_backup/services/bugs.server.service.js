const gBugs = require('../data/bug.json')

module.exports = {
    query,
    save,
    getById,
    remove,

   
}



function query() {
    return Promise.resolve(gBugs);
}

function getById(todoId){{
    const todo = gBugs.find(todo => todo._id === todoId)
    return Promise.resolve(todo);
}}

// save todo to the file
function save(bug) {
    if (bug._id) {
        const idx = gBugs.findIndex(c => c._id === bug._id)
        if (idx < 0) return Promise.reject('No such todo', bug._id)
        gBugs.splice(idx, 1, bug)
    } else {
        bug._id = _makeId()
        gBugs.unshift(bug)
    }
    return _saveTodosToFile()
        .then(() => bug)


}


function remove(myBugId){
    const idx = gBugs.findIndex(bug => bug._id === myBugId)
    gBugs.splice(idx, 1)
    return _saveTodosToFile();
}

function _saveTodosToFile() {
    return new Promise((resolve, reject) => {
        const fs = require('fs')
        fs.writeFile('data/bug.json', JSON.stringify(gBugs, null, 2), (err) => {
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