export default function main() {
const heading = document.getElementById('head');
const btn = document.querySelector('.btn-nav');
const primaryBtn = document.querySelector('.primary-nav');
function scroll() {
    if(window.scrollY >= 150) {
        primaryBtn.classList.remove('access');
    } else if(window.scrollY <= 100) {
        primaryBtn.classList.add('access');
    }
}

document.querySelector('.top').addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
})

function access() {
    if(primaryBtn.classList.contains('access')) {
        primaryBtn.classList.remove('access');
        btn.innerHTML = 'hide';
    } else {
        primaryBtn.classList.add('access');
        btn.innerHTML = 'Show';
    }
}

const bottom = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}

btn.addEventListener('click', access);

addEventListener('scroll', scroll);

// const online = document.querySelector('.online');
// if(navigator.onLine) {
//     online.innerHTML = 'Online'
// } else {
//     online.innerHTML = 'Online'
// }
}

