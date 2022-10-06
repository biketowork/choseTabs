let tabs=document.querySelectorAll(".tabs_simple");
let texts=document.querySelectorAll('.tabs_content');



tabs.forEach((tab, index)=> {
    tab.addEventListener('click', () => {
        texts.forEach((text) => {
            text.classList.remove('active');
        })
        tabs.forEach((el)=> {
            el.classList.remove('active');
        });

        tabs[index].classList.add('active');
        texts[index].classList.add('active');
    })
})