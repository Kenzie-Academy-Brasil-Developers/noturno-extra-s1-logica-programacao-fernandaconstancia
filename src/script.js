// Seu código vem aqui
function calculateSalary(salary, sales) {
    if (sales <= 1200) {
            return salary + (sales * 0.03);
    } else {
            return salary + (sales * 0.05);
    }
}
console.log(calculateSalary(1000, 1500));

function calculateStock(stock, max, min) {
    let media = (max + min) / 2;
    if (stock >= media) {
        return 'Não efetuar compra';
    } else {
        return 'Efetuar compra';
    }
}
console.log(calculateStock(1500, 1500, 1400));

function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    return {
        age,
        ageInMonths: age * 12,
        ageInDays: age * 365,
        ageInWeeks: age * 52
    };
}
console.log(calculateAge(1990, 2022));

function getDiagonal(matrix) {
    let diagonal = [];
    for (let index = 0; index < matrix.length; index++) {
        diagonal.push(matrix[index][index]);
    }
    return diagonal;
}
console.log(getDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function cashMachine(value) {
    let notas = [100, 50, 20, 10, 2, 1];
    let quantidadeNotas = [];
    for (let index = 0; index < notas.length; index++) {
        quantidadeNotas.push(Math.floor(value / notas[index]));
        value = value % notas[index];
    }
    let message = '';
    for (let index = 0; index < quantidadeNotas.length; index++) {
        if (quantidadeNotas[index] > 0) {
            message += `${quantidadeNotas[index]} nota(s) de R$ ${notas[index]}.\n`;
        }
    }
    return message;
}
console.log(cashMachine(190));
