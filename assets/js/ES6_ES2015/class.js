'use strict';

// obey:
// 1) names of props must have '_' prefix
// 2) no private props&methods (((
// 3) no props ((((((


class Person {

    constructor(name, age){
        this._Name = name || 'Default';
        this._Age = age || 18;
    }

    get Name() {
        console.log('getter called');
        return this._Name;
    }

    set Name(value) {
        console.log('setter called');
        this._Name = value;
    }

    get Age() {
        console.log('getter called');
        return this._Age;
    }

    set Age(value) {
        console.log('setter called');
        this._Age = value;
    }

    Personilize(){
        console.log('Personilize');
    }

    // // getter
    // get Name(){
    //     return `${this.Name}`;
    // }
    //
    // // setter
    // set Name(newValue){
    //     this.Name = newValue;
    // }

    static cry(){
        console.log('IM a Person');
    }
}

Person.cry();

// inheritance
class Serviceman extends Person {

    constructor(rank, name, age){
        super(name,age);
        if(rank in Serviceman.ranks){
            this._rank = rank ;
        }else{
            console.log('rank not exists, tobe set to '+ Serviceman.ranks[0] +' instead');
            this._rank = Serviceman.ranks[0];
        }
    }

    static get ranks(){
        return [
            'Private',
            'Private First Class',
            'Specialist',
            'Corporal',
            'Sergeant',
            'Stuff Sergeant',
            'Sergeant First Class',
            'Master Sergeant',
            'First Sergeant',
            'Sergeant Major',
            'Command Sergeant Major',
            'Sergeant Major of the Army'
        ];
    }

    get rank() {
        return this._rank;
    }

    //computed method name
    ["test".toUpperCase()]() {
        alert("PASSED!");
    }

    promotion(){
        const index = Serviceman.ranks.indexOf(this._rank)+1;
        this._rank = Serviceman.ranks[index < Serviceman.ranks.length ? index : Serviceman.ranks.length];
    }

    demotion(){
        const index = Serviceman.ranks.indexOf(this._rank)-1;
        this._rank = Serviceman.ranks[index > -1 ? index : 0];
    }

    // overwrite
    cry(){
        // console.log(`Serviceman's battle cry`);
        console.log( this._rank + '`s battle cry');
    }

    Personilize(){
        super.Personilize();
        console.log( this._rank + ' personalize');
    }

}

let soldier = new Serviceman();

console.log('soldier.Name', soldier.Name);
console.log('soldier.Age', soldier.Age);
soldier.cry();

let colonel = new Serviceman('Colonel', 'McBoo', 45);

console.log('colonel.Name', colonel.Name);
console.log('colonel.Age', colonel.Age);
colonel.cry();