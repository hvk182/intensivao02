//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const firstNumber = 3;
const secondNumber = 2;

alert(firstNumber + secondNumber);

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const myNumber = 23;

if (typeof myNumber == "number") {
  alert("É um número");
} else {
  alert("Não é um número");
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const myString = "Sou uma string.";

if (typeof myString == "string") {
  alert("É uma string");
} else {
  alert("Não é uma string");
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const myBoolean = true;

if (typeof myBoolean == "boolean") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
alert(firstNumber - secondNumber);

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
alert(firstNumber * secondNumber);

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
alert(firstNumber / secondNumber);

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const evenNumber = 2;

if (evenNumber % 2 == 0) {
  alert("É um número par");
} else {
  alert("Não é um número par");
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const oddNumber = 1;

if (oddNumber % 2 != 0) {
  alert("É um número ímpar");
} else {
  alert("Não é um número ímpar");
}
