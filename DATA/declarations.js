const escapeStr = "\`\\\/\"\'", arr = [4, '2'];
const obj = {str:"hello", num:10, bool:true, undef:undefined};

const nested = {
   arr:[4, undefined, '2'], 
   obj:{str:"string", num:20, bool:false}
};

const deepFreeze = obj => {
    if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
       Object.freeze(obj);
       Object.getOwnPropertyNames(obj).forEach(prop => deepFreeze(obj[prop]));
     }
   return obj;
  };

deepFreeze(nested);