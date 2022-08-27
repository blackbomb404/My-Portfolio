const filterOptions = document.querySelector('.projects .filter-options');
let carouselInstance;
let sideNavInstance;

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

document.addEventListener('DOMContentLoaded', function() {
    const elem = document.querySelector('.sidenav');
    sideNavInstance = M.Sidenav.init(elem, {
        edge: 'left',
        draggable: true
    });
    sideNavInstance.el.addEventListener('click', e => {
        if(e.target.tagName === 'A'){
            sideNavInstance.close();
        }
    })
  });

let scrollSpyInstances;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    scrollSpyInstances = M.ScrollSpy.init(elems, {
        scrollOffset: 100
    });
  });


// document.querySelector('.section.table-of-contents')
//     .addEventListener('click', e => {
//         if(e.target.tagName === 'A') {
//             // alert(e.target.textContent)
//             alert(scrollSpyInstances.getActiveElement());
//         }
//     })

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