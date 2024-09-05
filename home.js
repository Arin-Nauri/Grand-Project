window.addEventListener('scroll', function main() {
    const posisiScroll = window.scrollY;
    console.log(posisiScroll);
    animasiNavigasi(posisiScroll);
    animasiDeskripsi(posisiScroll);
    animasiKlinik(posisiScroll);
    animasiBelanja(posisiScroll);
    animasiEvent(posisiScroll);
})

document.addEventListener('DOMContentLoaded', function main2() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});

function animasiNavigasi(posisiScroll) {
    const Navigasi = document.querySelector('.Navigasi');
    const ElementNavigasi = document.querySelectorAll('.Navigasi a')
    const Judul = this.document.querySelector('.Judul');
    const Home = document.querySelector('.Navigasi').querySelector('a:nth-of-type(1)');
    const Klinik = document.querySelector('.Navigasi').querySelector('a:nth-of-type(2)');
    const Belanja = document.querySelector('.Navigasi').querySelector('a:nth-of-type(3)');
    const Event = document.querySelector('.Navigasi').querySelector('a:nth-of-type(4)');
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
    if (posisiScroll >= 411) {
        Navigasi.style.backgroundColor = 'gray';
        Navigasi.style.borderTop = '1px solid rgba(0,0,0,0.7)';
        Navigasi.style.borderBottom = '1px solid rgba(0,0,0,0.7)';
        Navigasi.style.backgroundColor = 'rgba(0,0,0,0.7)';
        document.querySelector('.btn').classList.remove('btn-outline-dark');
        document.querySelector('.btn').classList.add('btn-outline-light');
        ElementNavigasi.forEach(function(button) {
            button.style.color = 'white';
        })
    }
    else {
        Navigasi.style.backgroundColor = '';
        Navigasi.style.borderTop = '1px solid black';
        Navigasi.style.borderBottom = '1px solid black';
        Navigasi.style.backgroundColor = '';
        document.querySelector('.btn').classList.remove('btn-outline-light');
        document.querySelector('.btn').classList.add('btn-outline-dark');
        ElementNavigasi.forEach(function(button) {
            button.style.color = 'black';
        })
    }
    //animasi 3
    if (posisiScroll >= 308 && posisiScroll < 925) {
        Klinik.style.borderBottom = '2px solid' + warnaButton(posisiScroll);
        Klinik.style.opacity = '0.7';
        Home.style.borderBottom = 'none';
        Home.style.opacity = '1';
        Belanja.style.borderBottom = 'none';
        Belanja.style.opacity = '1'
        Event.style.borderBottom = 'none';
        Event.style.opacity = '1';
    }
    else if (posisiScroll >= 925 && posisiScroll < 1645) {
        Belanja.style.borderBottom = '2px solid' + warnaButton(posisiScroll);
        Belanja.style.opacity = '0.7';
        Klinik.style.borderBottom = 'none';
        Klinik.style.opacity = '1';
        Home.style.borderBottom = 'none';
        Home.style.opacity = '1';
        Event.style.borderBottom = 'none';
        Event.style.opacity = '1';
    }
    else if (posisiScroll >= 1645 && posisiScroll <= 2320) {
        Event.style.borderBottom = '2px solid' + warnaButton(posisiScroll);
        Event.style.opacity = '0.7';
        Klinik.style.borderBottom = 'none';
        Klinik.style.opacity = '1';
        Home.style.borderBottom = 'none';
        Home.style.opacity = '1';
        Belanja.style.borderBottom = 'none';
        Belanja.style.opacity = '1';
    }
    else {
        Home.style.borderBottom = '2px solid black';
        Home.style.opacity = '0.7';
        Klinik.style.opacity = '1';
        Klinik.style.borderBottom = 'none';
        Belanja.style.borderBottom = 'none';
        Belanja.style.opacity = '1'
        Event.style.borderBottom = 'none';
        Event.style.opacity = '1';
    }
}

function warnaButton(posisiScroll) {
    if (posisiScroll >= 411) {
        return ' white';
    }
    else {
        return ' black';
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
    if (posisiScroll >= 308 && posisiScroll <= 925) {
        Klinik.forEach(function(element) {
            element.style.transform = 'translateX(0)';
            element.style.filter = 'blur(0px)';
            element.style.opacity = '1';
        })
    }
    else {
        Klinik.forEach(function(element) {
            element.style.transform = 'translateX(100%)';
            element.style.filter = 'blur(5px)';
            element.style.opacity = '0';
        })
    }
}

function animasiBelanja(posisiScroll) {
    const Belanja = document.querySelectorAll('.AnimasiBelanja');
    if (posisiScroll >= 925 && posisiScroll <= 1645) {
        Belanja.forEach(function(element) {
            element.style.transform = 'translateX(0)';
            element.style.filter = 'blur(0px)';
            element.style.opacity = '1';
        })
    }
    else {
        Belanja.forEach(function(element) {
            element.style.transform = 'translateX(-100%)';
            element.style.filter = 'blur(5px)';
            element.style.opacity = '0';
        })
    }
}

function animasiEvent(posisiScroll) {
    const Event = document.querySelectorAll('.AnimasiEvent');
    if (posisiScroll >= 1645 && posisiScroll <= 2320) {
        Event.forEach(function(element) {
            element.style.transform = 'translateY(0)';
            element.style.filter = 'blur(0px)';
            element.style.opacity = '1';
        })
    }
    else if (posisiScroll < 1645){
        Event.forEach(function(element) {
            element.style.transform = 'translateY(100%)';
            element.style.filter = 'blur(5px)';
            element.style.opacity = '0';
        })
    }
    else if (posisiScroll > 2320){
        Event.forEach(function(element) {
            element.style.transform = 'translateY(-100%)';
            element.style.filter = 'blur(5px)';
            element.style.opacity = '0';
        })
    }
}