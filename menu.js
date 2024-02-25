function openwindow(Link){
    window.open(Link, '_self');
}


{
    let button = document.getElementById("user");
    let control = document.getElementById("control-box");

    button.addEventListener('click',function(){
        let displayValue = window.getComputedStyle(control).getPropertyValue('display');
  
        if (displayValue === 'none' || displayValue === '') {
            control.style.display = 'block';
        } else {
            control.style.display = 'none';
        }
    })
}

function showfilters() {
    var filtersBox = document.querySelector('.filters-box');
    var displayValue = window.getComputedStyle(filtersBox).getPropertyValue('display');
  
    if (displayValue === 'none' || displayValue === '') {
      filtersBox.style.display = 'block';
    } else {
      filtersBox.style.display = 'none';
    }
}
