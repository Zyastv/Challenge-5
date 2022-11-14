var setTime = {
  time9: '#hour9',
  time10: '#hour10',
  time11: '#hour11',
  time12: '#hour12',
  time1: '#hour1',
  time2: '#hour2',
  time3: '#hour3',
  time4: '#hour4',
  time5: '#hour5'
}
var savetextareaId = {
  save9: '#textarea9',
  save10: '#textarea10',
  save11: '#textarea11',
  save12: '#textarea12',
  save1: '#textarea1',
  save2: '#textarea2',
  save3: '#textarea3',
  save4: '#textarea4',
  save5: '#textarea5'
}
var savetextarea = {
  save9: 'textarea9',
  save10: 'textarea10',
  save11: 'textarea11',
  save12: 'textarea12',
  save1: 'textarea1',
  save2: 'textarea2',
  save3: 'textarea3',
  save4: 'textarea4',
  save5: 'textarea5'
}

for(i=0;i<9;i++){
  $(Object.values(savetextareaId)[i]).val(localStorage.getItem(Object.values(savetextarea)[i]))
}

$('#btn9').on('click', function (){
  localStorage.setItem('textarea9', $('#textarea9').val())
})
$('#btn10').on('click', function (){
  localStorage.setItem('textarea10', $('#textarea10').val())
})
$('#btn11').on('click', function (){
  localStorage.setItem('textarea11', $('#textarea11').val())
})
$('#btn12').on('click', function (){
  localStorage.setItem('textarea12', $('#textarea12').val())
})
$('#btn1').on('click', function (){
  localStorage.setItem('textarea1', $('#textarea1').val())
})
$('#btn2').on('click', function (){
  localStorage.setItem('textarea2', $('#textarea2').val())
})
$('#btn3').on('click', function (){
  localStorage.setItem('textarea3', $('#textarea3').val())
})
$('#btn4').on('click', function (){
  localStorage.setItem('textarea4', $('#textarea4').val())
})
$('#btn5').on('click', function (){
  localStorage.setItem('textarea5', $('#textarea5').val())
})

var current = moment().hours()


if (current > 9){
  $('#textarea9').addClass('past')
} else if (current == 9){
  $('#textarea9').addClass('present')
} else{
  $('#textarea9').addClass('future')
}

if (current > 10){
  $('#textarea10').addClass('past')
} else if (current == 10){
  $('#textarea10').addClass('present')
} else{
  $('#textarea10').addClass('future')
}

if (current > 11){
  $('#textarea11').addClass('past')
} else if (current == 11){
  $('#textarea11').addClass('present')
} else{
  $('#textarea11').addClass('future')
}

if (current > 12){
  $('#textarea12').addClass('past')
} else if (current == 12){
  $('#textarea12').addClass('present')
} else{
  $('#textarea12').addClass('future')
}

if (current > 13){
  $('#textarea1').addClass('past')
} else if (current == 13){
  $('#textarea1').addClass('present')
} else{
  $('#textarea1').addClass('future')
}

if (current > 14){
  $('#textarea2').addClass('past')
} else if (current == 14){
  $('#textarea2').addClass('present')
} else{
  $('#textarea2').addClass('future')
}

if (current > 15){
  $('#textarea3').addClass('past')
} else if (current == 15){
  $('#textarea3').addClass('present')
} else{
  $('#textarea3').addClass('future')
}

if (current > 16){
  $('#textarea4').addClass('past')
} else if (current == 16){
  $('#textarea4').addClass('present')
} else{
  $('#textarea4').addClass('future')
}

if (current > 17){
  $('#textarea5').addClass('past')
} else if (current == 17){
  $('#textarea5').addClass('present')
} else{
  $('#textarea5').addClass('future')
}

$('#currentDay').text(moment.utc())