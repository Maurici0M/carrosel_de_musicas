'use strict'

const switcher = document.querySelector('.btn')

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark_theme')

    var className = document.body.className;
    if (className == 'dark_theme') {

        const tema_escuro = document.querySelector('body')
        const title_initial = document.querySelector('.title_initial h3')
        const title_playlist = document.querySelector('.title_playlists>h3')
        const container_cards = document.querySelector('.container-carrosel-cards')
        const txt_alert_mobile = document.querySelector('.text_alert_mobile')
        
        tema_escuro.style.backgroundColor = 'darkblue'
        title_initial.style.color = '#fff'
        title_playlist.style.color = '#fff'
        container_cards.style.background = 'darkslategray'
        txt_alert_mobile.style.color = '#fff'

    }

    else {
        const tema_escuro = document.querySelector('body')
        const title_initial = document.querySelector('.title_initial h3')
        const title_playlist = document.querySelector('.title_playlists>h3')
        const container_cards = document.querySelector('.container-carrosel-cards')
        const txt_alert_mobile = document.querySelector('.text_alert_mobile')
        
        tema_escuro.style.backgroundColor = ''
        title_initial.style.color = ''
        title_playlist.style.color = ''
        container_cards.style.background = ''
        txt_alert_mobile.style.color = ''
    }
})