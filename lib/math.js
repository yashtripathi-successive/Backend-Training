const _= require('lodash')

function add(n1,n2){
    return _.add(n1,n2)
}


function sub(n1,n2){
    return n1-n2
}


function mul(n1,n2){
    return _.multiply(n1,n2)
}

function div(n1,n2){
    return _.divide(n1,n2)  
}


module.exports = {add,sub,mul,div}