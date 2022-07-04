const bar = document.getElementById('bar');
const times = document.getElementById('close');
const nav = document.getElementById('nav-bar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active-nav')
    })

}

if (times) {
    times.addEventListener('click', () => {
        nav.classList.remove('active-nav')
    })
}


// javasript for the drop down

const drop = document.getElementsByClassName('drp-container')

for (i = 0; i < drop.length; i++) {
    drop[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}