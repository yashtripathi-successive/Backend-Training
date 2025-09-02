import _ from 'lodash'

export function add(n1:number,n2: number){
    return _.add(n1,n2)
}


export function sub(n1:number,n2:number){
    return n1-n2
}


export function mul(n1:number,n2:number){
    return _.multiply(n1,n2)
}

export function div(n1:number,n2:number){
    return _.divide(n1,n2)  
}
