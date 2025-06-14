var person={
    fullName:function(city,country){
        return this.firstname+""+this.lastname+""+city+""+country
    }

}

var John = {
    firstname:'Join',
    lastname:'Dave'
}

// person.fullName.call(John)
person.fullName.call(Join,'Delhi','India')