/*

6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало
обычных заданий, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.

*/

"use strict";

// запрос на ввод суммы для зачисления
let rubles = parseInt( prompt("Введите сумму для зачисления (копейки не учитываются)"));

// проверка корректности ввода числа
if ( isNaN( rubles )) {

    alert("Сумма введена некорректно");

} else {

    // вычисляем последние две цифры введенной суммы
    let theLastDigit = rubles % 100;
    let sign = "";  // инициализируем переменную для хранения подписи в нужном падеже

    // проверка чисел, выбивающихся из общего правила 
    switch (theLastDigit) {
        case 11:
        case 12:
        case 13:
        case 14:
            sign = "рублей";            
            break;
    
        default:

            // проверка согласно основному правилу
            theLastDigit = rubles % 10;
            switch (theLastDigit) {
                case 0:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    sign = "рублей";            
                    break;
                    
                case 1:
                    sign = "рубль";
                    break;
        
                case 2:
                case 3:
                case 4:
                    sign = 'рубля';            
                    break;
                    
            }

            break;
    }

    
    // вывод результата
    alert(`Ваша сумма в ${rubles} ${sign} успешно зачислена.`);

}