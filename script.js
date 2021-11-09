
// Calcolatrice:

function calculator(numbers){
    function sum() {
        let sumTotal = 0;
        for (num of numbers) sumTotal += num;
        return sumTotal
    }
    function sub() {
        let subTotal = numbers[0];
        for (num of numbers) subTotal -= num;
        return subTotal + numbers[0]
    }
    function mul() {
        let mulTotal = numbers[0];
        for (num of numbers) mulTotal *= num ;
        return mulTotal / numbers[0]
    }
    function div() {
        let divTotal = numbers[0];
        for (num of numbers) divTotal /= num;
        return divTotal * numbers[0]
    }

    return {
        sum: sum(),
        sub: sub(),
        mul: mul(),
        div: div()
    }
}

//Esercizio Avanzato: 

function newCalculator(numbers) {
    const sum = () => numbers.reduce((acc , num) => acc + num);
    const sub = () => numbers.reduce((acc , num) => acc - num);
    const mul = () => numbers.reduce((acc , num) => acc * num);
    const div = () => numbers.reduce((acc , num) => acc / num);
    const ele = () => numbers.map(num => num * num);
    const rad = () => numbers.map(num => Math.sqrt(num));
    return {
        sum: sum(),
        sub: sub(),
        mul: mul(),
        div: div(),
        ele: ele(),
        rad: rad()
    }
}
