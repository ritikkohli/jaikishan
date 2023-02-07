
function validBody(body){
    return Object.keys(body).length > 0
}

function validName(name){
    if(!name) return false
    if(typeof name !== 'string' || name.length == 0) return false
    return /^[a-zA-Z ]{3,20}$/.test(name.trim())
}

function validPhone(phone){
    return /^[0]?[6789]\d{9}$/.test(phone)
}

function validDate(date){
    return /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(date)
}

function validMail(email){
    if(!email) return false
    if(typeof email !== 'string' || email.length == 0) return false
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}

function validStatus(value){
    return value.match(/active|inactive/)
}

function validType(value){
    return value.match(/regular|special/)
}

module.exports = {validBody,validName,validPhone,validStatus,validMail,validDate,validType}