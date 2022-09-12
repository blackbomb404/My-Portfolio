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
    if(window.scrollY >= 768)
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


document.querySelector('#contact-me form button[type=button]') .onclick = () => alert('Not yet implemented...')
