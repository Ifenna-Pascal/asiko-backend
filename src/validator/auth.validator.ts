import Joi from "joi";

class AuthVaidator {
    public userExists = 
        Joi.object().keys({
            email: Joi.string()
                .required()
                .pattern(new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$")),
        });
    
}

export default new AuthVaidator();