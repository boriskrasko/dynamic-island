const dynamicIsland = document.querySelector('.dynamic-island');

dynamicIsland.addEventListener('mouseover', () => dynamicIsland.classList.add('open'));

window.addEventListener('scroll', () => { 
    dynamicIsland.classList.remove('open', 'menu');
    document.querySelector('.nav').style.display = 'none';
}); 

window.addEventListener('click', (e) => { 
    !dynamicIsland.contains(e.target) ? dynamicIsland.classList.remove('open', 'menu') : '' ; 
    !dynamicIsland.contains(e.target) ? document.querySelector('.nav').style.display = 'none' : '';
})