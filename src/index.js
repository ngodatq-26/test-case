function insertPhone (phone) {
    if(!isNaN(phone)) {
        if(phone.toString().length > 0 && phone.toString().length < 10 && parseInt(phone) > 0 && Number.isInteger(parseInt(phone)))  {
            return true;
        }
        return false;
    } else return false;
}

console.log(insertPhone('12349394434431'));

module.exports = {
    insertPhone : insertPhone,
}