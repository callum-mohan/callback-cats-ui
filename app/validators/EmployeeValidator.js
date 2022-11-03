module.exports.presenceCheckString = (type)  => {
    var IS_PRESENT = new Boolean(false);
    if(type) {
        IS_PRESENT = true;
    }
    return IS_PRESENT
}


module.exports.presenceCheckInt = (type)  => {
    var IS_PRESENT = new Boolean(false);
    if(Number(type) > 0) {
        IS_PRESENT = true;
    }
    return IS_PRESENT
}


module.exports.lengthCheckString = (MAX_LENGTH, stringBeingChecked) => {
    var IS_LENGTH = new Boolean(false);

    if(stringBeingChecked.length <= MAX_LENGTH) {
        IS_LENGTH = true
    }

    return IS_LENGTH;
}



module.exports.typeCheckString = (stringBeingChecked) => {
    var IS_TYPE = false;
    if(typeof stringBeingChecked === 'string') {
        IS_TYPE = true;
    }

    return IS_TYPE;
}

module.exports.typeCheckInt = (intBeingChecked) => {
    var IS_TYPE = new Boolean(false);

    if (typeof intBeingChecked === 'number') {
        IS_TYPE = true;
    }
    return IS_TYPE;
}

module.exports.checkLevelValue = (levelValue) => {
    var IS_VALID = false;

    if(!(levelValue == "Choose Level" || levelValue == "choose")) {
        IS_VALID = true;
    }

    return IS_VALID;
}

module.exports.checkPostcode = (postcode) => {
    var IS_VALID = false;
    
}