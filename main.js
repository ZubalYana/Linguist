let semanticCore ={
    home: {
        "en": "Home",
        "ukraine": "Домашня сторінка",
        "poland": "Strona główna",
        "japan": "ホームページ",
        "france": "Page d'accueil",
        "lithuania": "Pagrindinis puslapis",
        "portugal": "Pagina inicial",
        "spain": "Pagina de inicio",
        "hungary": "Kezdőlap",
    },
    aboutUs: {
        "en": "About",
        "ukraine": "Про нас",
        "poland": "O nas",
        "japan": "私たちについて",
        "france": "À propos de nous",
        "lithuania": "Apie mus",
        "portugal": "Sobre nós",
        "spain": "Sobre nosotros",
        "hungary": "Rólunk",
    },
    security: {
        "en": "Security",
        "ukraine": "Безпека",
        "poland": "Praca",
        "japan": "安全",
        "france": "Service",
        //поправити тут французький переклад
        "lithuania": "Aptarnauti",
        "portugal": "Segurança",
        "spain": "Seguridad",
        "hungary": "Biztonság",
    },
    contacts: {
        "en": "Contact",
        "ukraine": "Контакти",
        "poland": "Kontakty",
        "japan": "連絡先",
        "france": "Contacts",
        "lithuania": "Kontaktai",
        "portugal": "Contato",
        "spain": "Contacto",
        "hungary": "Kapcsolatba lépni",
    },
    help: {
        "en": "Help",
        "ukraine": "Допомога",
        "poland": "Kontakty",
        "japan": "ヘルプ",
        "france": "Contacts",
        "lithuania": "Pagalba",
        "portugal": "Ajuda",
        "spain": "Ayuda",
        "hungary": "Segítség",
    },
    title: {
        "en": "Hello!",
        "ukraine": "Привіт!",
        "poland": "Językoznawca!",
        "japan": "こんにちは!",
        "france": "Linguiste!",
        "lithuania": "Sveiki!",
        "portugal": "Olá!",
        "spain": "Hola!",
        "hungary": "Helló!",
    },
    text: {
        "en": "Are you looking for somebody to translate your material corectly, shortly and qualitatively? You are lucky to find yourself here! We can translate everything on over 20 languages! Our people are very well educatied and smart. Our team includes native speakers and polyglot linguists who will provide you with a reliable and clear translation. Our modern team will provide you with the development and promotion of any business or material.",
        "ukraine": "Шукаєте когось, хто б правильно, коротко та якісно переклав ваш матеріал? Вам пощастило опинитися тут! Ми можемо перекласти все на понад 20 мов! Наші люди дуже освічені та розумні. Наша команда складається з носіїв мови та лінгвістів-поліглотів, які забезпечать вам надійний та зрозумілий переклад. Наша сучасна команда забезпечить вам розвиток і просування будь-якого бізнесу або матеріалу.",
        "poland": "Przetłumacz poprawnie swoją witrynę",
        "japan": "あなたの資料を正確に、短く、質的に翻訳してくれる人を探していますか?ここに出会えてあなたは幸運です! 20 以上の言語にあらゆるものを翻訳できます。私たちの従業員は非常に教育を受けており、賢いです。当社のチームにはネイティブ スピーカーと多言語対応言語学者が含まれており、信頼性が高く明確な翻訳を提供します。私たちの最新のチームは、あらゆるビジネスや素材の開発とプロモーションを提供します",
        "france": "Traduisez correctement votre site",
        "lithuania": "Ar ieškote žmogaus, kuris teisingai, trumpai ir kokybiškai išverstų jūsų medžiagą? Jums pasisekė, kad čia atsidūrėte! Viską galime išversti į daugiau nei 20 kalbų! Mūsų žmonės yra labai išsilavinę ir protingi. Mūsų komandą sudaro gimtoji kalba ir poliglotai kalbininkai, kurie pateiks jums patikimą ir aiškų vertimą. Mūsų šiuolaikiška komanda padės jums sukurti ir reklamuoti bet kokį verslą ar medžiagą.",
        "portugal": "Você está procurando alguém para traduzir seu material de maneira correta, breve e qualitativa? Você tem sorte de se encontrar aqui! Podemos traduzir tudo em mais de 20 idiomas! Nosso povo é muito bem educado e inteligente. Nossa equipe inclui falantes nativos e linguistas poliglotas que fornecerão uma tradução confiável e clara. Nossa moderna equipe irá lhe proporcionar o desenvolvimento e promoção de qualquer negócio ou material.",
        "spain": "¿Está buscando a alguien que traduzca su material de forma correcta, breve y cualitativa? ¡Tienes suerte de encontrarte aquí! ¡Podemos traducir todo en más de 20 idiomas! Nuestra gente está muy bien educada y es inteligente. Nuestro equipo incluye hablantes nativos y lingüistas políglotas que le brindarán una traducción clara y confiable. Nuestro moderno equipo le facilitará el desarrollo y promoción de cualquier negocio o material.",
        "hungary": "Keres valakit, aki helyesen, röviden és minőségileg lefordítja az anyagát? Szerencsés vagy, hogy itt találtad magad! Mindent le tudunk fordítani több mint 20 nyelvre! Embereink nagyon jól képzettek és okosak. Csapatunk anyanyelvi beszélőkből és többnyelvű nyelvészekből áll, akik megbízható és egyértelmű fordítást nyújtanak Önnek. Modern csapatunk bármilyen vállalkozás vagy anyag fejlesztését és promócióját biztosítja Önnek.",
    },
}

let allLang = ['en', 'ukraine', 'poland', 'japan', 'france', 'lithuania', 'netherlands', 'portugal', 'saudiArabia', 'spain', 'china', 'hungary'];
let lang = 'en'

ukraine.onclick = function(){
    lang = 'ukraine'
    console.log(lang)
    changeUrl()
}
en.onclick = function(){
    lang = 'en'
    console.log(lang)
    changeUrl()
}
poland.onclick = function(){
    lang = 'poland'
    console.log(lang)
    changeUrl()
}
japan.onclick = function(){
    lang = 'japan'
    console.log(lang)
    changeUrl()
}
france.onclick = function(){
    lang = 'france'
    console.log(lang)
    changeUrl()
}
lithuania.onclick = function(){
    lang = 'lithuania'
    console.log(lang)
    changeUrl()
}
netherlands.onclick = function(){
    lang = 'netherlands'
    console.log(lang)
    changeUrl()
}
portugal.onclick = function(){
    lang = 'portugal'
    console.log(lang)
    changeUrl()
}
saudiArabia.onclick = function(){
    lang = 'saudiArabia'
    console.log(lang)
    changeUrl()
}
spain.onclick = function(){
    lang = 'spain'
    console.log(lang)
    changeUrl()
}
china.onclick = function(){
    lang = 'china'
    console.log(lang)
    changeUrl()
}
hungary.onclick = function(){
    lang = 'hungary'
    console.log(lang)
    changeUrl()
}
function changeUrl(){
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = (window.location.hash).substring(1)
    console.log(hash)
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en'
        location.reload();
    }

    for(let key in semanticCore){
        document.querySelector('.language-' + key).innerText = semanticCore[key][hash]
    }
}

changeLanguage()
