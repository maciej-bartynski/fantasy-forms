'use strict';
document.addEventListener('DOMContentLoaded', function (){
    userFlowViaFirstFieldset();
})
function userFlowViaFirstFieldset(){
    let userName = document.querySelector('input[name="imie"]');
    let userNick = document.querySelector('input[name="przydomek"]');
    let userMotto = document.querySelector('textarea[name="zawolanie"]');
    userNameAccept(userName, userNick);
    userNickAccept(userNick, userMotto);
    userMottoAccept(userMotto, userName);
}
function userNameAccept(item, nextItem){
    item.addEventListener('keypress', function (event) {
        if(event.keyCode===13){
            nextItem.focus();
        }
    });
}
function userNickAccept(item, nextItem){
    item.addEventListener('keypress', function (event) {
        if(event.keyCode===13){
            nextItem.focus();
        }
    });
}
function userMottoAccept(item, nextItem){
    item.addEventListener('keypress', function (event) {
        if(event.keyCode===13){
            nextItem.focus();
        }
    });
}