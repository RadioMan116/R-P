'use strict'
var cw = document.querySelector('#class');
var hw = document.querySelector('#home');
var money = ('��� ������ �� �����?', '999999999'),
	time = ('������� ���� � ������� YYYY-MM-DD', '');
var a1 = ("������� ������������ ������ �������� � ���� ������", ''),
	a2 = ("�� ������� ���������?", ''),
	a3 = ("������� ������������ ������ �������� � ���� ������", ''),
	a4 = ("�� ������� ���������?", '');

var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
cw.innerHTML += "<div>������ �� 1 ���� " + appData.budget / 30 + "</div>";
// console.log(appData.budget / 30);
// console.log(cw);
function showFirstMessage(text) {
	cw.innerHTML += "<div>" + text + "</div>";
};
showFirstMessage("<div>" + "����" + ' ����� �� ' + "�����" + "</div>");
$(document).ready(function () {

});