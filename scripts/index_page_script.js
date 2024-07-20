'use strict'

//Arquivos de alimentação do carrosel - Músicas que serão mostradas

const arrayCarrossel = [

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/270414959&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        
        a: '<a href="https://soundcloud.com/vicetone" title="Vicetone" target="_blank" style="color: #cccccc; text-decoration: none;">Vicetone</a> · <a href="https://soundcloud.com/vicetone/vicetone-mc-nevada" title="Vicetone - &#x27;Nevada feat. Cozi Zuehlsdorff&#x27;" target="_blank" style="color: #cccccc; text-decoration: none;">Vicetone - &#x27;Nevada feat. Cozi Zuehlsdorff&#x27;</a>',
    },
    
    {
        
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/258097961&color=%23b2e0de&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        
        a: '<a href="https://soundcloud.com/thechainsmokers" title="The Chainsmokers" target="_blank" style="color: #cccccc; text-decoration: none;">The Chainsmokers</a> · <a href="https://soundcloud.com/thechainsmokers/roses-1" title="Roses" target="_blank" style="color: #cccccc; text-decoration: none;">Roses</a>',
    },
    
    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/391900884&color=%2394beb7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
    
        a: '<a href="https://soundcloud.com/dayglowmusic" title="Dayglow" target="_blank" style="color: #cccccc; text-decoration: none;">Dayglow</a> · <a href="https://soundcloud.com/dayglowmusic/can-i-call-you-tonight" title="Can I Call You Tonight?" target="_blank" style="color: #cccccc; text-decoration: none;">Can I Call You Tonight?</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605759085&color=%239c9c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/less-gravity-lofi" title="Less Gravity" target="_blank" style="color: #cccccc; text-decoration: none;">Less Gravity</a> · <a href="https://soundcloud.com/less-gravity-lofi/less-gravity-face-my-fears-kingdom-hearts-3" title="Kingdom Hearts 3 - Face My Fears (lofi)" target="_blank" style="color: #cccccc; text-decoration: none;">Kingdom Hearts 3 - Face My Fears (lofi)</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1069489900&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/camikazemusic" title="Camikaze" target="_blank" style="color: #cccccc; text-decoration: none;">Camikaze</a> · <a href="https://soundcloud.com/camikazemusic/cold-clockwork-feat-duchess-2" title="Cold Clockwork feat. Duchess" target="_blank" style="color: #cccccc; text-decoration: none;">Cold Clockwork feat. Duchess</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276642604&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/kasbomusic" title="Kasbo" target="_blank" style="color: #cccccc; text-decoration: none;">Kasbo</a> · <a href="https://soundcloud.com/kasbomusic/mutemath-monument-kasbo-remix" title="Mutemath - Monument (Kasbo Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Mutemath - Monument (Kasbo Remix)</a>',
    },


    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/526882980&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/officialrando" title="Rando" target="_blank" style="color: #cccccc; text-decoration: none;">Rando</a> · <a href="https://soundcloud.com/officialrando/running-from-the-lion-feat" title="Running From The Lion (feat. Kate Hindle)" target="_blank" style="color: #cccccc; text-decoration: none;">Running From The Lion (feat. Kate Hindle)</a>',
    },


    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/306407290&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/illeniumofficial" title="ILLENIUM" target="_blank" style="color: #cccccc; text-decoration: none;">ILLENIUM</a> · <a href="https://soundcloud.com/illeniumofficial/illenium-fractures-ft-nevve" title="Illenium - Fractures (ft. Nevve)" target="_blank" style="color: #cccccc; text-decoration: none;">Illenium - Fractures (ft. Nevve)</a>',
    },


    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/338277395&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/trinix1" title="TRINIX" target="_blank" style="color: #cccccc; text-decoration: none;">TRINIX</a> · <a href="https://soundcloud.com/trinix1/midnight" title="MIDNIGHT" target="_blank" style="color: #cccccc; text-decoration: none;">MIDNIGHT</a>',
    },

    
    
    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/593649357&color=%239c9c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/ford" title="ford." target="_blank" style="color: #cccccc; text-decoration: none;">ford.</a> · <a href="https://soundcloud.com/ford/kasbo-places-we-dont-know-ford-remix" title="Kasbo - Places We Don&#x27;t Know (ford. Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Kasbo - Places We Don&#x27;t Know (ford. Remix)</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/301307778&color=%23807474&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/dreamivory" title="Dream, Ivory" target="_blank" style="color: #cccccc; text-decoration: none;">Dream, Ivory</a> · <a href="https://soundcloud.com/dreamivory/red-love" title="red love" target="_blank" style="color: #cccccc; text-decoration: none;">red love</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1308846835&color=%239c9c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/d4vddd" title="d4vd (@d4vddd)" target="_blank" style="color: #cccccc; text-decoration: none;">d4vd (@d4vddd)</a> · <a href="https://soundcloud.com/d4vddd/romantic-homicide" title="Romantic Homicide" target="_blank" style="color: #cccccc; text-decoration: none;">Romantic Homicide</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/513228630&color=%239c9c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/janeemusic" title="Janee" target="_blank" style="color: #cccccc; text-decoration: none;">Janee</a> · <a href="https://soundcloud.com/janeemusic/zombie" title="Janee x Lunis - Zombie" target="_blank" style="color: #cccccc; text-decoration: none;">Janee x Lunis - Zombie</a>',
    },


    {
        iFrame: ' <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/369013451&color=%239c9c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/wearesolstis" title="Solstis" target="_blank" style="color: #cccccc; text-decoration: none;">Solstis</a> · <a href="https://soundcloud.com/wearesolstis/inmyhead" title="In My Head (feat. SANDS &amp; Simona Shao)" target="_blank" style="color: #cccccc; text-decoration: none;">In My Head (feat. SANDS &amp; Simona Shao)</a>',
    },


    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1076383891&color=%239c9c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/iamsadface" title="sad face." target="_blank" style="color: #cccccc; text-decoration: none;">sad face.</a> · <a href="https://soundcloud.com/iamsadface/one-day-1" title="one day" target="_blank" style="color: #cccccc; text-decoration: none;">one day</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274840618&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/dreamivory" title="Dream, Ivory" target="_blank" style="color: #cccccc; text-decoration: none;">Dream, Ivory</a> · <a href="https://soundcloud.com/dreamivory/welcome-and-goodbye" title="welcome and goodbye" target="_blank" style="color: #cccccc; text-decoration: none;">welcome and goodbye</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/613150521&color=%239c9c74&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/fragile-touch" title="fragile." target="_blank" style="color: #cccccc; text-decoration: none;">fragile.</a> · <a href="https://soundcloud.com/fragile-touch/mysterious-girlfriend-pt-1-healmag" title="mysterious girlfriend pt. 1: healmag" target="_blank" style="color: #cccccc; text-decoration: none;">mysterious girlfriend pt. 1: healmag</a>',
    },


    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/601943670&color=%231c7c8c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/laszewo" title="Łaszewo" target="_blank" style="color: #cccccc; text-decoration: none;">Łaszewo</a> · <a href="https://soundcloud.com/laszewo/dont-walk-away-ft-keev" title="don&#x27;t walk away" target="_blank" style="color: #cccccc; text-decoration: none;">don&#x27;t walk away</a',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/493173450&color=%23212121&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/kinabeats" title="Kina" target="_blank" style="color: #cccccc; text-decoration: none;">Kina</a> · <a href="https://soundcloud.com/kinabeats/kina-can-we-kiss-foreverfeat-adriana-proenza" title="Kina - Can We Kiss Forever?(feat. Adriana Proenza)" target="_blank" style="color: #cccccc; text-decoration: none;">Kina - Can We Kiss Forever?(feat. Adriana Proenza)</a>',
    },

    {
        iFrame: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330402767&color=%237e6c5e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',

        a: '<a href="https://soundcloud.com/touristmusic" title="Tourist" target="_blank" style="color: #cccccc; text-decoration: none;">Tourist</a> · <a href="https://soundcloud.com/touristmusic/we-stayed-up-all-night-feat-ardyn" title="We Stayed Up All Night (feat. Ardyn)" target="_blank" style="color: #cccccc; text-decoration: none;">We Stayed Up All Night (feat. Ardyn)</a>',
    },

    /*{
        iFrame: '',

        a: '',
    },*/

]

// Código principal, desenvolvido com base nos conhecimentos obtidos nos estudos de programação na Proz.

// Mostra as músicas na tela, organizadas na mesma ordem em que estão no array.


/*

for (let index = 0; index < arrayCarrossel.length; index++) {
    // Criar elemento
    let carrosselScript = document.createElement('div')
    
    // Atribuir uma classe ao elemento (caso necessário)
    carrosselScript.className = 'card swiper-slide'
    
    
    // Manipular elemento
    carrosselScript.innerHTML = `
    
    ${arrayCarrossel[index].iFrame}
    
    <div class="copyright_credits" style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
    
             ${arrayCarrossel[index].a}
        
        </div>
        
        `

        // Adicionar na página

        let selecionarClasseCarrossel = document.querySelector('.card-wrapper')
    selecionarClasseCarrossel.appendChild(carrosselScript)
    
}

*/

// Código desativado.
