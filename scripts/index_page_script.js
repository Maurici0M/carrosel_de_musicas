'use strict'

// Controle de atualização do site

const dados_da_ultima_att = document.querySelector('.atualizacao-da-pagina')
dados_da_ultima_att.innerHTML = `Página Atualizada pela última vez em 21 de agosto de 2024 às 21:47`

//Arquivos de alimentação do carrosel - Músicas que serão mostradas

const arrayCarrossel = [

    /*{
        iFrame: ''
    },*/
    
    
    /*{
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/678814035&color=%23d5b8bc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nataliacarreira" title="Natália Carreira" target="_blank" style="color: #cccccc; text-decoration: none;">Natália Carreira</a> · <a href="https://soundcloud.com/nataliacarreira/pertencer-ao-vivo" title="Pertencer (Ao Vivo)" target="_blank" style="color: #cccccc; text-decoration: none;">Pertencer (Ao Vivo)</a></div>'
        },*/

    {
            iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/548156187&color=%23945c64&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lonelyintherain" title="Lonely in the Rain" target="_blank" style="color: #cccccc; text-decoration: none;">Lonely in the Rain</a> · <a href="https://soundcloud.com/lonelyintherain/dive-in" title="Dive In (feat. Freeless)" target="_blank" style="color: #cccccc; text-decoration: none;">Dive In (feat. Freeless)</a></div>'
    },
    
    {
            iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230341716&color=%232270ce&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dandis" title="Dandis" target="_blank" style="color: #cccccc; text-decoration: none;">Dandis</a> · <a href="https://soundcloud.com/dandis/feita-pra-fugir" title="Feita pra Fugir" target="_blank" style="color: #cccccc; text-decoration: none;">Feita pra Fugir</a></div>'
    },
        
    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455275359&color=%23d4ccfc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/prxzm" title="PRXZM" target="_blank" style="color: #cccccc; text-decoration: none;">PRXZM</a> · <a href="https://soundcloud.com/prxzm/through-the-night" title="Through The Night" target="_blank" style="color: #cccccc; text-decoration: none;">Through The Night</a></div>'
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1016429185&color=%23d48c44&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/sense-band" title="Sense" target="_blank" style="color: #cccccc; text-decoration: none;">Sense</a> · <a href="https://soundcloud.com/sense-band/orange-juice" title="Orange Juice" target="_blank" style="color: #cccccc; text-decoration: none;">Orange Juice</a></div>'
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/565807386&color=%23e49dc2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lostincolors" title="Lost In Colors" target="_blank" style="color: #cccccc; text-decoration: none;">Lost In Colors</a> · <a href="https://soundcloud.com/lostincolors/mauve-hearts" title="Mauve - Hearts" target="_blank" style="color: #cccccc; text-decoration: none;">Mauve - Hearts</a></div>'
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/648720929&color=%237e9498&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/forester-family" title="Forester" target="_blank" style="color: #cccccc; text-decoration: none;">Forester</a> · <a href="https://soundcloud.com/forester-family/present-1" title="Present" target="_blank" style="color: #cccccc; text-decoration: none;">Present</a></div>'
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485013687&color=%23606ccc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/arcanemuzic" title="Arcane" target="_blank" style="color: #cccccc; text-decoration: none;">Arcane</a> · <a href="https://soundcloud.com/arcanemuzic/feki-alone-feat-polarheart" title="Feki - Alone (feat. Polarheart)" target="_blank" style="color: #cccccc; text-decoration: none;">Feki - Alone (feat. Polarheart)</a></div>'
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/513642849&color=%235c6c9c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-956334953" title="coldplay songs" target="_blank" style="color: #cccccc; text-decoration: none;">coldplay songs</a> · <a href="https://soundcloud.com/user-956334953/coldplay-paradise-official-video" title="Coldplay - Paradise" target="_blank" style="color: #cccccc; text-decoration: none;">Coldplay - Paradise</a></div>',
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/999392089&color=%23376454&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/mugatunes-vip" title="MugaTunes" target="_blank" style="color: #cccccc; text-decoration: none;">MugaTunes</a> · <a href="https://soundcloud.com/mugatunes-vip/super-hi-following-the-sun" title="SUPER-HI - Following The Sun" target="_blank" style="color: #cccccc; text-decoration: none;">SUPER-HI - Following The Sun</a></div>',
  
    },

    {
        iFrame:  '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/493414&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/awolnation" title="AWOLNATION" target="_blank" style="color: #cccccc; text-decoration: none;">AWOLNATION</a> · <a href="https://soundcloud.com/awolnation/sail" title="Sail" target="_blank" style="color: #cccccc; text-decoration: none;">Sail</a></div>'
    },
    
    {
        iFrame:  '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/270414959&color=%239cb4b1&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vicetone" title="Vicetone" target="_blank" style="color: #cccccc; text-decoration: none;">Vicetone</a> · <a href="https://soundcloud.com/vicetone/vicetone-mc-nevada" title="Vicetone - &#x27;Nevada feat. Cozi Zuehlsdorff&#x27;" target="_blank" style="color: #cccccc; text-decoration: none;">Vicetone - &#x27;Nevada feat. Cozi Zuehlsdorff&#x27;</a></div>'
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/258097961&color=%23b2e0de&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thechainsmokers" title="The Chainsmokers" target="_blank" style="color: #cccccc; text-decoration: none;">The Chainsmokers</a> · <a href="https://soundcloud.com/thechainsmokers/roses-1" title="Roses" target="_blank" style="color: #cccccc; text-decoration: none;">Roses</a></div>',
        
    },
    
    {
        
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/391900884&color=%23b8554d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dayglowmusic" title="Dayglow" target="_blank" style="color: #cccccc; text-decoration: none;">Dayglow</a> · <a href="https://soundcloud.com/dayglowmusic/can-i-call-you-tonight" title="Can I Call You Tonight?" target="_blank" style="color: #cccccc; text-decoration: none;">Can I Call You Tonight?</a></div>',
        
    },
    
    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/605759085&color=%23b8554d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/less-gravity-lofi" title="Less Gravity" target="_blank" style="color: #cccccc; text-decoration: none;">Less Gravity</a> · <a href="https://soundcloud.com/less-gravity-lofi/less-gravity-face-my-fears-kingdom-hearts-3" title="Kingdom Hearts 3 - Face My Fears (lofi)" target="_blank" style="color: #cccccc; text-decoration: none;">Kingdom Hearts 3 - Face My Fears (lofi)</a></div>',
    
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/286915580&color=%2380809c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/camikazemusic" title="Camikaze" target="_blank" style="color: #cccccc; text-decoration: none;">Camikaze</a> · <a href="https://soundcloud.com/camikazemusic/camikaze-cold-clockwork-feat-duchess" title="Cold Clockwork feat. Duchess" target="_blank" style="color: #cccccc; text-decoration: none;">Cold Clockwork feat. Duchess</a></div>',

       
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276642604&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/kasbomusic" title="Kasbo" target="_blank" style="color: #cccccc; text-decoration: none;">Kasbo</a> · <a href="https://soundcloud.com/kasbomusic/mutemath-monument-kasbo-remix" title="Mutemath - Monument (Kasbo Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Mutemath - Monument (Kasbo Remix)</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/526882980&color=%23477461&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/officialrando" title="Rando" target="_blank" style="color: #cccccc; text-decoration: none;">Rando</a> · <a href="https://soundcloud.com/officialrando/running-from-the-lion-feat" title="Running From The Lion (feat. Kate Hindle)" target="_blank" style="color: #cccccc; text-decoration: none;">Running From The Lion (feat. Kate Hindle)</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/306407290&color=%23c0b894&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/illeniumofficial" title="ILLENIUM" target="_blank" style="color: #cccccc; text-decoration: none;">ILLENIUM</a> · <a href="https://soundcloud.com/illeniumofficial/illenium-fractures-ft-nevve" title="Illenium - Fractures (ft. Nevve)" target="_blank" style="color: #cccccc; text-decoration: none;">Illenium - Fractures (ft. Nevve)</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/338277395&color=%23695c39&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/trinix1" title="TRINIX" target="_blank" style="color: #cccccc; text-decoration: none;">TRINIX</a> · <a href="https://soundcloud.com/trinix1/midnight" title="MIDNIGHT" target="_blank" style="color: #cccccc; text-decoration: none;">MIDNIGHT</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/593649357&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ford" title="ford." target="_blank" style="color: #cccccc; text-decoration: none;">ford.</a> · <a href="https://soundcloud.com/ford/kasbo-places-we-dont-know-ford-remix" title="Kasbo - Places We Don&#x27;t Know (ford. Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Kasbo - Places We Don&#x27;t Know (ford. Remix)</a></div>',

    },

    {
        iFrame:  '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/301307778&color=%23f4dcd5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dreamivory" title="Dream, Ivory" target="_blank" style="color: #cccccc; text-decoration: none;">Dream, Ivory</a> · <a href="https://soundcloud.com/dreamivory/red-love" title="red love" target="_blank" style="color: #cccccc; text-decoration: none;">red love</a></div>'
    },
    
    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/513228630&color=%23e5a567&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/janeemusic" title="Janee" target="_blank" style="color: #cccccc; text-decoration: none;">Janee</a> · <a href="https://soundcloud.com/janeemusic/zombie" title="Janee x Lunis - Zombie" target="_blank" style="color: #cccccc; text-decoration: none;">Janee x Lunis - Zombie</a></div>',
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/369013451&color=%23947494&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/wearesolstis" title="Solstis" target="_blank" style="color: #cccccc; text-decoration: none;">Solstis</a> · <a href="https://soundcloud.com/wearesolstis/inmyhead" title="In My Head (feat. SANDS &amp; Simona Shao)" target="_blank" style="color: #cccccc; text-decoration: none;">In My Head (feat. SANDS &amp; Simona Shao)</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1076383891&color=%23947494&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/iamsadface" title="sad face." target="_blank" style="color: #cccccc; text-decoration: none;">sad face.</a> · <a href="https://soundcloud.com/iamsadface/one-day-1" title="one day" target="_blank" style="color: #cccccc; text-decoration: none;">one day</a></div>',

        
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/601943670&color=%23007fff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/laszewo" title="Łaszewo" target="_blank" style="color: #cccccc; text-decoration: none;">Łaszewo</a> · <a href="https://soundcloud.com/laszewo/dont-walk-away-ft-keev" title="don&#x27;t walk away" target="_blank" style="color: #cccccc; text-decoration: none;">don&#x27;t walk away</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/493173450&color=%23007fff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/kinabeats" title="Kina" target="_blank" style="color: #cccccc; text-decoration: none;">Kina</a> · <a href="https://soundcloud.com/kinabeats/kina-can-we-kiss-foreverfeat-adriana-proenza" title="Kina - Can We Kiss Forever?(feat. Adriana Proenza)" target="_blank" style="color: #cccccc; text-decoration: none;">Kina - Can We Kiss Forever?(feat. Adriana Proenza)</a></div>',
    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330402767&color=%23c0bcb6&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/touristmusic" title="Tourist" target="_blank" style="color: #cccccc; text-decoration: none;">Tourist</a> · <a href="https://soundcloud.com/touristmusic/we-stayed-up-all-night-feat-ardyn" title="We Stayed Up All Night (feat. Ardyn)" target="_blank" style="color: #cccccc; text-decoration: none;">We Stayed Up All Night (feat. Ardyn)</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/212230705&color=%233e3f38&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/andreyazizov" title="Andrey Azizov" target="_blank" style="color: #cccccc; text-decoration: none;">Andrey Azizov</a> · <a href="https://soundcloud.com/andreyazizov/the-lighthouse-and-the-whaler-venice-dreymix" title="The Lighthouse and the Whaler - Venice (Andrey Azizov Remix) - NOW ON SPOTIFY" target="_blank" style="color: #cccccc; text-decoration: none;">The Lighthouse and the Whaler - Venice (Andrey Azizov Remix) - NOW ON SPOTIFY</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/39162530&color=%23cd3cb2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/summer-heart" title="SUMMER HEART" target="_blank" style="color: #cccccc; text-decoration: none;">SUMMER HEART</a> · <a href="https://soundcloud.com/summer-heart/i-wanna-go" title="I Wanna Go" target="_blank" style="color: #cccccc; text-decoration: none;">I Wanna Go</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/274840618&color=%23cd3cb2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dreamivory" title="Dream, Ivory" target="_blank" style="color: #cccccc; text-decoration: none;">Dream, Ivory</a> · <a href="https://soundcloud.com/dreamivory/welcome-and-goodbye" title="welcome and goodbye" target="_blank" style="color: #cccccc; text-decoration: none;">welcome and goodbye</a></div>',

    },

    {
        iFrame: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/613150521&color=%23b4cce4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/fragile-touch" title="fragile." target="_blank" style="color: #cccccc; text-decoration: none;">fragile.</a> · <a href="https://soundcloud.com/fragile-touch/mysterious-girlfriend-pt-1-healmag" title="mysterious girlfriend pt. 1: healmag" target="_blank" style="color: #cccccc; text-decoration: none;">mysterious girlfriend pt. 1: healmag</a></div>',

    },

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
    carrosselScript.innerHTML = ` ${arrayCarrossel[index].iFrame} `

    // Adicionar elemento na página
    let selecionarClasseCarrossel = document.querySelector('.card-wrapper')
    selecionarClasseCarrossel.appendChild(carrosselScript)
    
}
*/

// Código desativado.
