let dbObj = {}
dbObj.user = [
    {
        name:'Alvin',
        city:'Amsterddam'
    },
    {
        name:'Priya',
        city:'Paris'
    }
]

dbObj.dbQuery = {
    find:(table) => {return `Select * from ${table}`},

}

module.exports = dbObj;