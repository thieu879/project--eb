// -----------------Thể Loại-------------------------------------------------------------
let filterBtn = document.querySelector('#filter-form');
let filterClose = document.querySelector('#filter-close');
// ---------------------------------nav------------------------------------------
function nav5(){
    window.location.href = 'DangBai.html'
}


// console.log(slideTop);

filterBtn.addEventListener("click",function(){
    document.querySelector('.filter-form').style.display ="flex"
})

filterClose.addEventListener("click",function(){
    document.querySelector('.filter-form').style.display ="none"
})

// --------------------slide top------------------------
let rightFilter = document.querySelector('.fa-chevron-right');
let leftFilter = document.querySelector('.fa-chevron-left');
let imgNumber = document.querySelectorAll('.slide-content-top img');
let index = 0;

rightFilter.addEventListener("click",function(){
    index +=1;
    if(index>imgNumber.length-1){
        index = 0;
    }
    removeActive();
    document.querySelector(".slide-content-top").style.right = index * 100+"%";
    imgNumberLi[index].classList.add("active");
})
leftFilter.addEventListener("click",function(){
    index -=1;
    if(index<0){
        index = imgNumber.length - 1;
    }
    removeActive();
    document.querySelector(".slide-content-top").style.right = index * 100+"%";
    imgNumberLi[index].classList.add("active");
})

// --------------------slide bottom------------------------
let imgNumberLi = document.querySelectorAll('.slide-content-bottom li');
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeActive();
        document.querySelector(".slide-content-top").style.right = index * 100+"%";
        image.classList.add("active");
    })
})

function removeActive(){
    let imgActive = document.querySelector('.active');
    imgActive.classList.remove("active");
}

// ------------------------slide 2-----------------------------------

function imgAuto(){
    index = index + 1;
    if(index>imgNumber.length-1){
        index = 0;
    }
    removeActive();
    document.querySelector(".slide-content-top").style.right = index * 100+"%";
    imgNumberLi[index].classList.add("active");

}
setInterval(imgAuto,5000)


// -----------------------------đăng ký-------------------------------------
function register(){
    window.location.href = 'DangKy.html'
}

// ------------------------------Đăng Nhap--------------------------------------
function logIn(){
    window.location.href = 'DangNhap.html'
}
