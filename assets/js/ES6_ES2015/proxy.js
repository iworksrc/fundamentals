'use strict';
//============================getter/setter===========================================


const person = {};

const proxyPerson = new Proxy(person, {
    get(target, prop){// must return some obj or value
        console.log(target, 'get property ' + prop);
        return target[prop];
    },
    set(target, prop, value){ // may returns any or not
        console.log(target, 'set new property ' + prop + ' and value to ' + value);
        target[prop] = value;
        return true;
    }
});

proxyPerson.NewProp = 'newValue';
proxyPerson.AnotherNewProp = 'anotherNewValue';

//---------------------------check property existing-----------------------------------

const dictGet = {
  'Prived':'Привед',
  'Medved':'Медвед'
};

const proxyGet = new Proxy( dictGet, {
   get(target, prop){ // must return some obj or value
       if(prop in target){
           return target[prop];
       }else {
           return 'Not in dictGet';
       }
   }
});

console.log(proxyGet.Prived);
console.log(proxyGet.Poka);

//================================  has  ===============================================

const dictHas = {
    'Prived':'Привед',
    'Medved':'Медвед'
};

let proxyHas = new Proxy(dictHas, {

    has(target, prop) {// must return boolean
        return true;
    }

});

console.log('\'someval\' in dictionary' ,'someval' in dictHas); // always true

//================================= delete property ====================================

const dictDelete = {
    'Prived':'Привед',
    'Medved':'Медвед'
};

let proxyDelete = new Proxy(dictDelete, {
    deleteProperty(target, prop) { // must return boolean
        console.log('try delete prop ' + prop + ' from ', target);
        return delete target[prop];
    }
});

delete proxyDelete['Prived'];

console.log('Prived in dictionary? ', 'Prived' in dictDelete);

//=====================================================================================


let objForInForOf = {
    a:-1,
    b:2,
    c:-3
};

let proxyObjForInForOf = new Proxy(objForInForOf, {
    enumerate(target){
        
        return true;
    }
});

// Array.prototype.filter.call(objForInForOf, (e,i,a) => {
//     if(a[e] > 0) {
//         return true;
//     }else{
//         return false;
//     }
// });

