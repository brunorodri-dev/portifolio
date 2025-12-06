document.querySelectorAll('a[href^="#"]').forEach(botao => {
    botao.addEventListener('click', function (evento) {
        evento.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const secoes = document.querySelectorAll('section');
    const linksMenu = document.querySelectorAll('.link-menu');

    let secaoAtual = '';
    secoes.forEach(secao => {
        const topoDaSecao = secao.offsetTop;
        if (pageYOffset >= topoDaSecao - 200) {
            secaoAtual = secao.getAttribute('id');
        }
    });

    linksMenu.forEach(link => {
        link.classList.remove('ativo');
        if (link.getAttribute('href').slice(1) === secaoAtual) {
            link.classList.add('ativo');
        }
    });
});

const opcoesSinalizador = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sinalizador = new IntersectionObserver(function(entradas) {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.animation = 'aparecer 0.6s ease-out forwards';
            sinalizador.unobserve(entrada.target);
        }
    });
}, opcoesSinalizador);

document.querySelectorAll('.cartao-projeto, .coluna-habilidades').forEach(elemento => {
    elemento.style.opacity = '0';
    sinalizador.observe(elemento);
});