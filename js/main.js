var a = prompt ('Wprowadź liczbę');
var b = prompt ('Wprowadź kolejną liczbę');
var value = (a * a) - (2 * a * b) + (b * b);
alert('Wynik działania ('+ a + ' * '+ a + ') - (2 * ' + a + ' * '+ b +') + (' + b + ' * '+ b + ') wynosi: ' + value +'.')
console.log('('+ a + ' * '+ a + ') - (2 * ' + a + ' * '+ b +') + (' + b + ' * '+ b + ') is equal to: ' + value + '.' );

if (value > 0) {
	alert('Wynik dodatni');
	console.log('Wynik dodatni');
} else if (value < 0) {
	alert('Wynik ujemny');
	console.log('Wynik ujemny');
} else { 
	alert('Wynik równy 0');
	console.log('Wynik równy 0');
	}
