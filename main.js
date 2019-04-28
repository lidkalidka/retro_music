document.onscroll = () => {
    const navbar = document.querySelector('#topNavbar');
    
    if (document.documentElement.scrollTop > navbar.clientHeight){
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
};

document.querySelector('.navbar-toggler').addEventListener('click', function() {

    const collapse = document.querySelector('.collapse');

    if (!collapse.classList.contains('show')){
        document.querySelector('#topNavbar').classList.add('collapsed');
    } else {
        document.querySelector('#topNavbar').classList.remove('collapsed');
    }
});