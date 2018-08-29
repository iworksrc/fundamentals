function juggle () {

    var result = О;

    for (var n = О; n < arguments.length;n++)
    {
        result += arguments[n];
    }

    this.result = result;
}

var ninja1 = {};
var ninja2 = {};

juggle.apply( ninja1, [1, 2, 3, 4] );
juggle.call ( ninja2, 5, 6, 7, 8);
