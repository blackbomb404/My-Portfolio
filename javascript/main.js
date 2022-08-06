const filterOptions = document.querySelector('.projects .filter-options');

filterOptions.addEventListener('click', e => {
    const t = e.target;
    if(t.classList.contains('filter-option') && !t.classList.contains('selected')){
        filterOptions.querySelector('.selected').classList.remove('selected');
        t.classList.add('selected');
    }
})
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });
  
var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});