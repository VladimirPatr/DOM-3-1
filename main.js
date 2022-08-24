'use strict';

let list  = document.querySelector('.list'); //полученный список ul
let listItems = list.getElementsByTagName("li"); //список всех li



const addLi = ()=> {
    let userStrig = prompt('Введите предложение');//текст от пользователя

    //проверка на пустую строку
    if (userStrig.length === 0 || userStrig.trim() == ''){
         return addLi();
      }

    //проверка на отмену
    if (userStrig === 'exit' || userStrig === null){
        return 
     }

     //проверка на DEL
    if (userStrig === 'del'){
        if (listItems.length == 0) {
            alert("Список пуст, нечего удалять");
            return addLi();
        }
    else {
        let last = listItems[listItems.length-1];
        last.parentNode.removeChild(last);
        return addLi();
        }
        
     }
     //проверка на CLEAR
    if (userStrig === 'clear'){
        list.innerHTML = '';
        return addLi();
        };
               
    list.innerHTML += `<li> ${userStrig} </li>`;//добавление li в список
    return addLi();
};


addLi();
