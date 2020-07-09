const isEmpty= (astring)=>{
  if(!astring || astring.trim()=='') return true;
    else return false;
};


const isEmail = (emaili) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emaili.match(regEx)) return true;
    else return false;
  };


  exports.validateSignupData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) {
      errors.email = 'Must not be empty';
    } else if (!isEmail(data.email)) {
      errors.email = 'Must be a valid email address';
    }
  
    if (isEmpty(data.password)) errors.password = 'Must not be empty';
    
    if (data.password !== data.confirmpass) errors.confirmpass = 'Passwords must match';
    
    if (isEmpty(data.username)) errors.username = 'Must not be empty';

    var valid;
    if(Object.keys(errors).length === 0){
      valid=true;
    }else valid=false;

    return {errors,valid};
  };
  

  exports.validateLoginData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) errors.email = 'Must not be empty';
    if (isEmpty(data.password)) errors.password = 'Must not be empty';
  
    var valid;
    if(Object.keys(errors).length === 0){
      valid=true;
    }else valid=false;

    return {errors,valid};
  };
