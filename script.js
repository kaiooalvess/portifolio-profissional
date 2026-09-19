const meusProjetos = [
    {
        id: 1,
        titulo: "Nike Air Jordan",
        imagem: "img/nike.png",
        descricao: "Página de detalhes de produto com design moderno e focado na experiência de compra da linha Nike Air Jordan.",
        github: "https://github.com/kaiooalvess/nike-air-jordan-detalhes",
        demo: "https://kaiooalvess.github.io/nike-air-jordan-detalhes/"
    },
    {
        id: 2,
        titulo: "Portfólio Kaio Alves",
        imagem: "img/portifolio.png",
        descricao: "Template de portfólio moderno para Web Developer com interface Dark Mode construído com HTML5 e CSS3 puro.",
        github: "https://github.com/kaiooalvess/kaio-alves-portfolio",
        demo: "https://kaiooalvess.github.io/kaio-alves-portfolio/"
    },
    {
        id: 3,
        titulo: "Lista de Tarefas",
        imagem: "img/lista.png",
        descricao: "Aplicação interativa para organização e acompanhamento de tarefas com título, status e descrição detalhada.",
        github: "https://github.com/kaiooalvess/Lista-de-Tarefas",
        demo: "https://kaiooalvess.github.io/Lista-de-Tarefas/"
    },
    {
        id: 4,
        titulo: "Music Player",
        imagem: "img/music.png",
        descricao: "Player de áudio dinâmico e responsivo projetado para reprodução de músicas e audição offline.",
        github: "https://github.com/kaiooalvess/music-Player",
        demo: "https://kaiooalvess.github.io/music-Player/"
    },
    {
        id: 5,
        titulo: "Mercado Livre Replica",
        imagem: "img/mercado livre.png",
        descricao: "Réplica do Mercado Livre desenvolvida para fins educacionais, simulando uma plataforma de marketplace com catálogo de produtos, busca, carrinho e interface de compra.",
        github: "https://github.com/kaiooalvess/E-commerce-Marketplace-R-plica-do-Mercado-Livre",
        demo: "https://kaiooalvess.github.io/E-commerce-Marketplace-R-plica-do-Mercado-Livre/"
    },
    {
        id: 6,
        titulo: "Cartaz de Procura-se",
        imagem: "img/progura-se.png",
        descricao: "Cartaz informativo criado para divulgar a procura por uma pessoa, animal ou objeto, reunindo informações importantes para facilitar a identificação e o contato.",
        github: "https://github.com/kaiooalvess/Cartaz-de-Procura-se",
        demo: "https://kaiooalvess.github.io/Cartaz-de-Procura-se/"
    },
    {
        id: 7,
        titulo: "Link-Bio",
        imagem: "img/link-bio.png",
        descricao: "Página personalizada para reunir meus principais links de contato e redes sociais em um só lugar, facilitando o acesso às minhas informações e formas de contato.",
        github: "https://github.com/kaiooalvess/Link-Bio",
        demo: "https://kaiooalvess.github.io/Link-Bio/"
    },
    {
        id: 8,
        titulo: "Calculadora Simples",
        imagem: "img/calculadora.png",
        descricao: "Software básico para realizar cálculos matemáticos de forma rápida e fácil, permitindo operações como adição, subtração, multiplicação e divisão.",
        github: "https://github.com/kaiooalvess/Calculadora-Simples",
        demo: "https://kaiooalvess.github.io/Calculadora-Simples/"
    },
    {
        id: 9,
        titulo: "Catálogo De Materiais",
        imagem: "img/catalogo.png",
        descricao: "Site profissional e responsivo para catálogo de materiais elétricos, desenvolvido com HTML, CSS e JavaScript, com design moderno, banners, animações e apresentação organizada dos produtos.",
        github: "https://github.com/kaiooalvess/Cat-logo-de-Materiais-El-tricos",
        demo: "https://kaiooalvess.github.io/Cat-logo-de-Materiais-El-tricos/"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const containerProjetos = document.getElementById('containerProjetos');
    const modal = document.getElementById('modalTrabalho');
    const fechar = document.querySelector('.modal .fechar');
    const modalImg = document.getElementById('modalImg');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    const acoesModal = document.querySelector('.modal-acoes');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    // 1. Renderizar os Cards no Carrossel
    if (containerProjetos) {
        containerProjetos.innerHTML = meusProjetos.map((projeto, index) => `
            <div class="result-card" data-index="${index}">
                <img src="${projeto.imagem}" alt="${projeto.titulo}" onerror="this.src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500'">
                <div class="result-overlay">
                    <h3>${projeto.titulo}</h3>
                    <p class="time">HTML, CSS & JS</p>
                </div>
                <button class="btn-card" data-index="${index}">VER PROJETO</button>
            </div>
        `).join('');

        // Aplicar Efeito Tilt 3D Realista nos Cards dos Projetos
        const cards = document.querySelectorAll('.result-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -12;
                const rotateY = ((x - centerX) / centerX) * 12;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
            });
        });
    }

    // 2. Scroll Reveal Animações de Entrada ao Rolar a Página
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    elementsToReveal.forEach(el => revealObserver.observe(el));

    // 3. Controle do Carrossel por Setas
    if (btnPrev && btnNext && containerProjetos) {
        btnNext.addEventListener('click', () => {
            containerProjetos.scrollBy({ left: 360, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            containerProjetos.scrollBy({ left: -360, behavior: 'smooth' });
        });
    }

    // 4. Modal
    function abrirModal(index) {
        const projeto = meusProjetos[index];
        if (!projeto) return;

        if (modalImg) {
            modalImg.src = projeto.imagem;
            modalImg.alt = projeto.titulo;
        }
        if (modalTitulo) modalTitulo.textContent = projeto.titulo;
        if (modalDescricao) modalDescricao.textContent = projeto.descricao;

        if (acoesModal) {
            acoesModal.innerHTML = `
                <a href="${projeto.demo}" target="_blank" rel="noopener noreferrer" class="btn-modal-link btn-demo">
                    <i class="ph ph-desktop"></i> Ver Landing Page
                </a>
                <a href="${projeto.github}" target="_blank" rel="noopener noreferrer" class="btn-modal-link btn-github">
                    <i class="ph ph-github-logo"></i> Código no GitHub
                </a>
            `;
        }

        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function fecharModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (containerProjetos) {
        containerProjetos.addEventListener('click', (e) => {
            const btnCard = e.target.closest('.btn-card');
            if (btnCard) {
                const index = btnCard.getAttribute('data-index');
                abrirModal(index);
            }
        });
    }

    if (fechar) fechar.addEventListener('click', fecharModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) fecharModal();
    });
});