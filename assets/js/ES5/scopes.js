function scoper(newA){

    if(this === window){
        return new scoper();
    }

    this.a = newA || 90;
    var b = 80;

    this.changeB = function (newvalue) {
        b = newvalue;
    };

    this.getB = function(){
        return b;
    };

    this.setB = function(val){
        b = val;
    }

}