let ani_js = document.querySelectorAll('.ani');

const aniInView = (e, i = 0) => {
    const eTop = e.getBoundingClientRect().top;
    return (
        eTop <= (window.innerHeight || document.documentElement.clientHeight) / i
    )
}
const aniOutOfView = (e) => {
    const eTop = e.getBoundingClientRect().top;
    return (
        eTop > window.innerHeight || document.documentElement.clientHeight
    )
}
window.addEventListener('scroll', () => {
    ani_js.forEach((element) => {
        if(aniInView(element, i = 1.1)) {
           element.classList.add('ani_jss')
           element.classList.remove('ani_jsss')
        } else if (aniOutOfView(element)) {
           element.classList.remove('ani_jss')
           element.classList.add('ani_jsss')
        }
    });
})

const left_scroll_p = document.querySelector('#left_scroll_p');
const right_scroll_p = document.querySelector('#right_scroll_p');
const project_cards = document.querySelector('#project_cards');

left_scroll_p.addEventListener('click', () => {
    project_cards.scrollLeft -= 350;
    console.log('hello');
});
right_scroll_p.addEventListener('click', () => {
    project_cards.scrollLeft += 350;
    console.log('hello');
});

// console.log(project_cards);

//testmonial
let c_img =  document.getElementsByClassName('c_img');
let c_title = document.getElementsByClassName('c_title');
let c_subtitle = document.getElementsByClassName('c_subtitle');
let change_d = document.getElementsByClassName('change_d');
let c_para = document.getElementsByClassName('c_para');


console.log(c_img);

const check = () => {
    change_d[0].style.background = '#fff';
    change_d[1].style.background = '#fff';
    change_d[2].style.background = '#fff';
}

change_d[0].addEventListener('click', () => {
    c_img[0].src = 'Images/kushal sir.png';
    c_title[0].innerText = 'Kushal Rajkarnikar';
    c_subtitle[0].innerText = 'UI/UX Designer';
    c_para[0].innerText = 'Janak is best student forever of web design course. He improve code like space-X starLInk projects.'

    c_img[1].src = 'Images/sushan sir.png';
    c_title[1].innerText = 'Shusan Shakhya';
    c_subtitle[1].innerText = 'MERN Stack Developer';
    c_para[1].innerText = 'He learn nowdays MERN Stack. He is average student in the oneline class. Best of luck Janak !'

    c_img[2].src = 'Images/sunil sir.png';
    c_title[2].innerText = 'Sunil Sharma';
    c_subtitle[2].innerText = 'IT Engineer';
    c_para[2].innerText = 'He is MERN Stack course student and my friend too. He is average student IT Field because of he learning IT protocal early.'

    check();

    change_d[0].style.background = '#0250FF';
});

change_d[1].addEventListener('click', () => {
    c_img[1].src = 'Images/kushal sir.png';
    c_title[1].innerText = 'Kushal Rajkarnikar';
    c_subtitle[1].innerText = 'UI/UX Designer';
    c_para[1].innerText = 'Janak is best student forever of web design course. He improve code like space-X starLInk projects.'

    c_img[0].src = 'Images/sushan sir.png';
    c_title[0].innerText = 'Shusan Shakhya';
    c_subtitle[0].innerText = 'MERN Stack Developer';
    c_para[0].innerText = 'He learn nowdays MERN Stack. He is average student in the oneline class. Best of luck Janak !'

    c_img[2].src = 'Images/sunil sir.png';
    c_title[2].innerText = 'Sunil Sharma';
    c_subtitle[2].innerText = 'IT Engineer';
    c_para[2].innerText = 'He is MERN Stack course student and my friend too. He is average student IT Field because of he learning IT protocal early.'

    check();

    change_d[1].style.background = '#0250FF';
});

change_d[2].addEventListener('click', () => {
    c_img[2].src = 'Images/kushal sir.png';
    c_title[2].innerText = 'Kushal Rajkarnikar';
    c_subtitle[2].innerText = 'UI/UX Designer';
    c_para[2].innerText = 'Janak is best student forever of web design course. He improve code like space-X starLInk projects.'

    c_img[1].src = 'Images/sushan sir.png';
    c_title[1].innerText = 'Shusan Shakhya';
    c_subtitle[1].innerText = 'MERN Stack Developer';
    c_para[1].innerText = 'He learn nowdays MERN Stack. He is average student in the oneline class. Best of luck Janak !'

    c_img[0].src = 'Images/sunil sir.png';
    c_title[0].innerText = 'Sunil Sharma';
    c_subtitle[0].innerText = 'IT Engineer';
    c_para[0].innerText = 'He is MERN Stack course student and my friend too. He is average student IT Field because of he learning IT protocal early.'

    check();

    change_d[2].style.background = '#0250FF';
});