var bool = false;
document.getElementById('kkk').addEventListener('click', function(event) {
    var target = event.target;
    if (target.id === 'uk') {
        translateToEnglish();
    } else if (target.id === 'br') {
        translateToPortuguese();
    }
});

function translateToEnglish() {
    var elementsToTranslate = document.querySelectorAll('h1, label, button');
    alert("Essa funcionalidade ainda não foi 100% finalizada e se reparar eu também não deixei e nem deixarei a aplicação responsiva pois tenho que fazer coisas mais importantes em breve")

    var translations = {
        'Bem vindo de volta,<br> Faça seu login e aproveite!': 'Welcome back, Login and enjoy!',
        'Email:': 'Email:',
        'Insira seu email aqui': 'Enter your email here',
        'Senha:': 'Password:',
        'Insira sua senha aqui': 'Enter your password here',
        'Entrar': 'Login'
    };

    elementsToTranslate.forEach(function(element) {
        var originalText = element.textContent.trim();
        var translatedText = translations[originalText];

        if (translatedText) {
            element.textContent = translatedText;
        }
    });
}

function translateToPortuguese() {
    var elementsToTranslate = document.querySelectorAll('h1, label, button');

    var translations = {
        'Welcome back, Login and enjoy!': 'Bem vindo de volta,<br> Faça seu login e aproveite!',
        'Email:': 'Email:',
        'Enter your email here': 'Insira seu email aqui',
        'Password:': 'Senha:',
        'Enter your password here': 'Insira sua senha aqui',
        'Login': 'Entrar'
    };

    elementsToTranslate.forEach(function(element) {
        var originalText = element.textContent.trim();
        var translatedText = translations[originalText];

        if (translatedText) {
            element.innerHTML = translatedText.replace('<br>', '<br>');
        }
    });
}
function alert2(params) {
    alert("Não, não tem link âncora pois com a Vercel não tem como subir backend para o ar gratuitamente")
}
