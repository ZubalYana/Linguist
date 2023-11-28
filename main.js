let semanticCore ={
    home: {
        "en": "Home",
        "ukraine": "Домашня сторінка",
        "poland": "Strona główna",
        "japan": "ホームページ",
        "france": "Page d'accueil",
    },
    aboutUs: {
        "en": "About",
        "ukraine": "Про нас",
        "poland": "O nas",
        "ja": "私たちについて",
        "france": "À propos de nous",
    },
    security: {
        "en": "Servise",
        "ukraine": "Безпека",
        "poland": "Praca",
        "japan": "サービス",
        "france": "Service",
    },
    contacts: {
        "en": "Contact",
        "ukraine": "Контакти",
        "poland": "Kontakty",
        "japan": "連絡先",
        "france": "Contacts",
    },
    help: {
        "en": "Help",
        "ukraine": "Допомога",
        "poland": "Kontakty",
        "japan": "連絡先",
        "france": "Contacts",
    },
    title: {
        "en": "Hello!",
        "ukraine": "Привіт!",
        "poland": "Językoznawca",
        "japan": "言語学者",
        "france": "Linguiste",
    },
    text: {
        "en": "Are you looking for somebody to translate your material corectly, shortly and qualitatively? You are lucky to find yourself here! We can translate everything on over 20 languages! Our people are very well educatied and smart. Our team includes native speakers and polyglot linguists who will provide you with a reliable and clear translation. Our modern team will provide you with the development and promotion of any business or material.",
        "ukraine": "Шукаєте когось, хто б правильно, коротко та якісно переклав ваш матеріал? Вам пощастило опинитися тут! Ми можемо перекласти все на понад 20 мов! Наші люди дуже освічені та розумні. Наша команда складається з носіїв мови та лінгвістів-поліглотів, які забезпечать вам надійний та зрозумілий переклад. Наша сучасна команда забезпечить вам розвиток і просування будь-якого бізнесу або матеріалу.",
        "poland": "Przetłumacz poprawnie swoją witrynę",
        "japan": "サイトを正しく翻訳する",
        "france": "Traduisez correctement votre site",
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
