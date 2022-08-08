const filterOptions = document.querySelector('.projects .filter-options');
let carouselInstance;

filterOptions.addEventListener('click', e => {
    const t = e.target;
    if(t.classList.contains('filter-option') && !t.classList.contains('selected')){
        filterOptions.querySelector('.selected').classList.remove('selected');
        t.classList.add('selected');
    }
})
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    carouselInstance = M.Carousel.init(carousel, {
        fullWidth: true,
        indicators: true,
        noWrap: true,
        // onCycleTo: resizeTab
    });
    
    // resizeTab();
});
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', e => {
    if(window.scrollY >= 2048)
        backToTop.classList.add('show');
    else
        backToTop.classList.remove('show');
    
})
backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

// function resizeTab(){
//     let maxHeight = 0;
//     const carouselItems = document.querySelectorAll('.carousel-item');

//     let currentItemHeight;
//     carouselItems.forEach(item => {
//         currentItemHeight = getComputedStyle(item).height;
//         currentItemHeight = currentItemHeight.substring(0, currentItemHeight.indexOf('px'));
//         if(currentItemHeight > maxHeight)
//             maxHeight = parseInt(currentItemHeight); 
//     });

//     document.querySelector('.carousel').style.height = maxHeight + 'px';
// }