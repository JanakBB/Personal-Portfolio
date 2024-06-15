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

console.log(project_cards);