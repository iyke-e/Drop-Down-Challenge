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


function dropdown() {
    const feature = document.getElementById('feature');
    const drop1 = document.getElementById('active-drp')

    if (drop1.style.display = 'none') {
        feature.addEventListener('click', () => {
            drop1.classList.add = 'dropdown'
        })
    } else {
        feature.addEventListener('click', () => {
            drop1.classList.remove = 'dropdown'
        })
    }

}