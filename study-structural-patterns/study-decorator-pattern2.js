class Beverage {
    get_price(){ }
}

class TurkishCoffee extends Beverage {
    get_price(){
        return 12.5;
    }
}

class FilterCoffee extends Beverage {
    get_price(){
        return 10.0;
    }
}

class Tea extends Beverage {
    get_price(){
        return 5.0;
    }
}

class Milk extends Beverage {
    constructor(beverage) {
        super();
        if(!beverage) throw "i need a beverage to decorate."
        this.beverage = beverage;
    }
    get_price(){
        return this.beverage.get_price() + 2.;
    }
}
class Sugar extends Beverage {
    constructor(beverage) {
        super();
        if(!beverage) throw "i need a beverage to decorate."
        this.beverage = beverage;
    }
    get_price(){
        return this.beverage.get_price() + 1.;
    }
}

class Long extends Beverage {
    constructor(beverage) {
        super();
        if(!beverage) throw "i need a beverage to decorate."
        this.beverage = beverage;
    }
    get_price(){
        return 1.5 * this.beverage.get_price() ;
    }
}

let beverages = [
    new Long(new Sugar(new Milk(new FilterCoffee()))), // 13
    new Sugar(new Sugar(new TurkishCoffee())), // 14.5
    new TurkishCoffee(),
    new Sugar(new Tea())
];
let total_price = beverages.map( beverage => beverage.get_price())
                           .reduce( (sum,price) => sum + price , 0.);
console.log(`Total price: ${total_price}`);