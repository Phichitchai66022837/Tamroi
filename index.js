function showfilters() {
    var filtersBox = document.querySelector('.filters-box');
    var displayValue = window.getComputedStyle(filtersBox).getPropertyValue('display');
  
    if (displayValue === 'none' || displayValue === '') {
      filtersBox.style.display = 'block';
    } else {
      filtersBox.style.display = 'none';
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// เรียกใช้ฟังก์ชัน plusSlides ทุก 3 วินาที
setInterval(function() {
    plusSlides(1);
}, 3000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-image");
    
    // เมื่อเลื่อนไปรูปที่มี index เกินจำนวนรูป
    if (n > slides.length) { 
        slideIndex = 1;
    } 

    // เมื่อเลื่อนไปรูปที่มี index น้อยกว่า 1
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // ซ่อนรูปภาพทั้งหมด
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // แสดงรูปภาพที่มี index ที่ถูกต้อง
    slides[slideIndex-1].style.display = "block";
}

function showcontent1(content1, content2) {
    let contentdisplay = document.getElementsByClassName(content1);
    let Text_color = document.getElementById("main-text-content1");


    for (let i = 0; i < contentdisplay.length; i++) {
        contentdisplay[i].style.display = "block";
    }
    Text_color.style.color = "rgb(53, 53, 204)";
    let Text_color_none = document.getElementById("main-text-content2");
   

    let allContent2 = document.getElementsByClassName(content2);
    for (let i = 0; i < allContent2.length; i++) {
        allContent2[i].style.display = "none";
        Text_color_none.style.color = "black";
    }
}



function showcontent2(content1, content2) {
    let contentdisplay = document.getElementsByClassName(content2);
    let Text_color = document.getElementById("main-text-content2");


    for (let i = 0; i < contentdisplay.length;i++) {
        contentdisplay[i].style.display = "block";
    }

    Text_color.style.color = "rgb(53, 53, 204)";
    let Text_color_none = document.getElementById("main-text-content1");

    let allContent1 = document.getElementsByClassName(content1);
    for (let i = 0; i < allContent1.length; i++) {
        allContent1[i].style.display = "none";
        Text_color_none.style.color = "black";
    }
}

function openwindow(Link){
    window.open(Link, '_self');
}





