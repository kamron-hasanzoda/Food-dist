// modal
let btns_modal = document.querySelectorAll('[data-modal]')
let modal = document.querySelector('.modal')
let close_modal = document.querySelector('.modal__close')

btns_modal.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'block'
        close_modal.onclick = () => {
            modal.style.display = 'none'
        }
    }
})

// tabcontents
let tabcontents = document.querySelectorAll('.tabcontent')
let tabheader_items = document.querySelectorAll('.tabheader__item')

tabheader_items.forEach((tabheader, index) => {
    tabheader.onclick = () => {
        tabheader_items.forEach(tab => tab.classList.remove('tabheader__item_active'))
        tabheader.classList.add('tabheader__item_active')
        reload(index)
    }
})

function reload(n = 0) {
    tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove('fade')
        tabcontent.style.display = 'none'
    })
    tabcontents[n].style.display = 'block'
    tabcontents[n].classList.add('fade')
}

reload()

//prev next
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')
let current = document.querySelector('#current')
let n = 0

slide(n)
function slide(num) {
    if (n > slides.length - 1) {
        n = 0
    }

    if (n < 0) {
        n = slides.length - 1
    }

    slides.forEach(sl => sl.style.display = 'none')
    slides[n].style.display = 'block'
    slides[n].classList.add('fade')
    current.innerHTML = `0${n + 1}`
}

next.onclick = () => {
    n++
    slide(n)
}

prev.onclick = () => {
    n--
    slide(n)
}