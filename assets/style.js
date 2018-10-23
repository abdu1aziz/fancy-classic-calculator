

function press(number){
  document.form.textview.value = document.form.textview.value + number;

}

function calculate(){
  var calculation = document.form.textview.value;
  if(calculation){
        document.form.textview.value = eval(calculation);
  }
}

function clearBox(){
  document.form.textview.value = "";
}

function backspace(){
  var totalValue = document.form.textview.value;
  document.form.textview.value = totalValue.substring(0, totalValue.length - 1);
}
