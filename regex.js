var a = "hi"
a.match("^([a-z]{2})$")

var a = "iHii"
a.match("^([A-Za-z]{2,5})$")

var a ="344568905"
a.match("^([0-9]{10})$")

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")