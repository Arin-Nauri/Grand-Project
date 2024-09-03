window.addEventListener('scroll', function() {
    const posisiScroll = window.scrollY;
    console.log(posisiScroll);
    animasiNavigasi(posisiScroll);
    animasiDeskripsi(posisiScroll);
    animasiKlinik(posisiScroll);
})

function animasiNavigasi(posisiScroll) {
    const Navigasi = document.querySelector('.Navigasi');
    const ElementNavigasi = document.querySelectorAll('.Navigasi a');
    const Judul = document.querySelector('.Judul');
    
    //animasi 1
    if (posisiScroll >= 78) {
        Navigasi.style.position = 'fixed';
        Navigasi.style.top = '0';
        Judul.style.marginBottom = '70px';
    }
    else {
        Navigasi.style.position = 'relative';
        Navigasi.style.top = 'auto';
        Judul.style.marginBottom = '0px';
    }
    //animasi 2
    if (posisiScroll >= 308) {
        const Home = document.querySelector('.Navigasi').querySelector('a:nth-of-type(1)');
        const Klinik = document.querySelector('.Navigasi').querySelector('a:nth-of-type(2)');
        Klinik.style.borderBottom = '2px solid white';
        Home.style.borderBottom = 'none';
    }
    else {
        const Home = document.querySelector('.Navigasi').querySelector('a:nth-of-type(1)');
        const Klinik = document.querySelector('.Navigasi').querySelector('a:nth-of-type(2)');
        Klinik.style.borderBottom = 'none';
        Home.style.borderBottom = '2px solid black';
    }
    //animasi 3
    if (posisiScroll >= 411) {
        Navigasi.style.backgroundColor = 'rgba(70, 70, 70,0.6)';
        Navigasi.style.borderTop = '1px solid rgba(70, 70, 70,0.6)';
        Navigasi.style.borderBottom = '1px solid rgba(70, 70, 70,0.6)';
        Navigasi.style.backdropFilter = 'blur(5px)';
        ElementNavigasi.forEach(function(button) {
            button.style.color = 'white';
        })
    }
    else {
        Navigasi.style.backgroundColor = '';
        Navigasi.style.borderTop = '1px solid black';
        Navigasi.style.borderBottom = '1px solid black';
        Navigasi.style.backdropFilter = 'none';
        ElementNavigasi.forEach(function(button) {
            button.style.color = 'black';
        })
    }
}

function animasiDeskripsi(posisiScroll) {
    const Deskripsi = document.querySelectorAll('.Deskripsi');
    if (posisiScroll >= 244 && posisiScroll <= 309) {
        transparansi = 1 - (posisiScroll - 244)/52;
        Deskripsi.forEach(function(h1) {
            h1.style.color = 'rgba(0,0,0,' + transparansi + ')';
        }); 
    }
    else if (posisiScroll < 244) {
        Deskripsi.forEach(function(h1){
            h1.style.color = 'rgba(0,0,0,1)';
        });
    }
    else if (posisiScroll > 309) {
        Deskripsi.forEach(function(h1) {
            h1.style.color = 'rgba(0,0,0,0)';
        });
    }
}

function animasiKlinik(posisiScroll) {
    const Klinik = document.querySelectorAll('.AnimasiKlinik');
    const Background = document.querySelector('.HomeBackground');
    if (posisiScroll >= 308 && posisiScroll <= 925) {
        Klinik.forEach(function(element) {
            element.style.transform = 'translateX(0)';
            element.style.filter = 'blur(0px)';
            element.style.opacity = '1';
        })
        Background.style.backgroundSize = '100vw 612px';
    }
    else {
        Klinik.forEach(function(element) {
            element.style.transform = 'translateX(100%)';
            element.style.filter = 'blur(5px)';
            element.style.opacity = '0';
        })
        Background.style.backgroundSize = '100vw 100vh';
    }
}