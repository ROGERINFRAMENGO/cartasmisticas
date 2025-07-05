// Dados das cartas de tarot
const tarotCards = {
    major: [
        {
            id: 0,
            name: "O Louco",
            symbol: "🃏",
            positive: "Novos começos, espontaneidade, liberdade, aventura, potencial ilimitado",
            negative: "Imprudência, falta de direção, decisões precipitadas, irresponsabilidade",
            keywords: ["liberdade", "aventura", "novos começos", "espontaneidade", "potencial"]
        },
        {
            id: 1,
            name: "O Mago",
            symbol: "🎩",
            positive: "Manifestação, poder pessoal, habilidade, concentração, ação",
            negative: "Manipulação, falta de energia, hesitação, abuso de poder",
            keywords: ["manifestação", "poder", "habilidade", "concentração", "ação"]
        },
        {
            id: 2,
            name: "A Sacerdotisa",
            symbol: "🌙",
            positive: "Intuição, mistério, sabedoria interior, espiritualidade, feminino divino",
            negative: "Segredos, falta de intuição, superficialidade, desconexão espiritual",
            keywords: ["intuição", "mistério", "sabedoria", "espiritualidade", "feminino"]
        },
        {
            id: 3,
            name: "A Imperatriz",
            symbol: "👑",
            positive: "Fertilidade, criatividade, abundância, natureza, maternidade",
            negative: "Dependência, falta de crescimento, bloqueios criativos, negligência",
            keywords: ["fertilidade", "criatividade", "abundância", "natureza", "maternidade"]
        },
        {
            id: 4,
            name: "O Imperador",
            symbol: "⚔️",
            positive: "Autoridade, estrutura, controle, estabilidade, liderança",
            negative: "Tirania, rigidez, falta de disciplina, abuso de autoridade",
            keywords: ["autoridade", "estrutura", "controle", "estabilidade", "liderança"]
        },
        {
            id: 5,
            name: "O Hierofante",
            symbol: "🏛️",
            positive: "Tradição, conformidade, moralidade, ética, conhecimento",
            negative: "Dogma, conformidade excessiva, restrição, ortodoxia",
            keywords: ["tradição", "moralidade", "ética", "conhecimento", "conformidade"]
        },
        {
            id: 6,
            name: "Os Enamorados",
            symbol: "💕",
            positive: "Amor, harmonia, relacionamentos, escolhas, união",
            negative: "Desarmonia, desequilíbrio, escolhas ruins, separação",
            keywords: ["amor", "harmonia", "relacionamentos", "escolhas", "união"]
        },
        {
            id: 7,
            name: "O Carro",
            symbol: "🏇",
            positive: "Controle, determinação, direção, sucesso, força de vontade",
            negative: "Falta de controle, direção perdida, agressividade, derrota",
            keywords: ["controle", "determinação", "direção", "sucesso", "vontade"]
        },
        {
            id: 8,
            name: "A Força",
            symbol: "🦁",
            positive: "Força interior, coragem, paciência, controle, compaixão",
            negative: "Fraqueza, falta de autocontrole, dúvida, medo",
            keywords: ["força interior", "coragem", "paciência", "controle", "compaixão"]
        },
        {
            id: 9,
            name: "O Eremita",
            symbol: "🕯️",
            positive: "Introspecção, busca interior, orientação, sabedoria, solidão",
            negative: "Isolamento, paranoia, reclusão, rejeição de ajuda",
            keywords: ["introspecção", "busca interior", "orientação", "sabedoria", "solidão"]
        },
        {
            id: 10,
            name: "A Roda da Fortuna",
            symbol: "☸️",
            positive: "Boa sorte, karma, ciclos de vida, destino, mudança",
            negative: "Má sorte, falta de controle, ciclos negativos, resistência à mudança",
            keywords: ["sorte", "karma", "ciclos", "destino", "mudança"]
        },
        {
            id: 11,
            name: "A Justiça",
            symbol: "⚖️",
            positive: "Justiça, equidade, verdade, causa e efeito, lei",
            negative: "Injustiça, falta de responsabilidade, desonestidade, desequilíbrio",
            keywords: ["justiça", "equidade", "verdade", "lei", "responsabilidade"]
        },
        {
            id: 12,
            name: "O Enforcado",
            symbol: "🙃",
            positive: "Suspensão, entrega, nova perspectiva, sacrifício, paciência",
            negative: "Atraso, resistência, indecisão, sacrifício desnecessário",
            keywords: ["suspensão", "entrega", "perspectiva", "sacrifício", "paciência"]
        },
        {
            id: 13,
            name: "A Morte",
            symbol: "💀",
            positive: "Transformação, fim, transição, renovação, libertação",
            negative: "Resistência à mudança, estagnação, medo, apego",
            keywords: ["transformação", "fim", "transição", "renovação", "libertação"]
        },
        {
            id: 14,
            name: "A Temperança",
            symbol: "🍷",
            positive: "Equilíbrio, moderação, paciência, propósito, significado",
            negative: "Desequilíbrio, excesso, falta de propósito, impaciência",
            keywords: ["equilíbrio", "moderação", "paciência", "propósito", "significado"]
        },
        {
            id: 15,
            name: "O Diabo",
            symbol: "😈",
            positive: "Libertação, confronto com sombras, sexualidade, materialismo",
            negative: "Escravidão, vício, obsessão, materialismo excessivo, tentação",
            keywords: ["libertação", "sombras", "sexualidade", "materialismo", "tentação"]
        },
        {
            id: 16,
            name: "A Torre",
            symbol: "🏗️",
            positive: "Revelação súbita, despertar, libertação, mudança necessária",
            negative: "Desastre, ruptura, caos, resistência à mudança, trauma",
            keywords: ["revelação", "despertar", "libertação", "mudança", "ruptura"]
        },
        {
            id: 17,
            name: "A Estrela",
            symbol: "⭐",
            positive: "Esperança, fé, propósito, renovação, espiritualidade",
            negative: "Falta de fé, desespero, desconexão, pessimismo",
            keywords: ["esperança", "fé", "propósito", "renovação", "espiritualidade"]
        },
        {
            id: 18,
            name: "A Lua",
            symbol: "🌙",
            positive: "Intuição, sonhos, subconsciente, ciclos, feminino",
            negative: "Ilusão, medo, ansiedade, confusão, engano",
            keywords: ["intuição", "sonhos", "subconsciente", "ciclos", "ilusão"]
        },
        {
            id: 19,
            name: "O Sol",
            symbol: "☀️",
            positive: "Alegria, sucesso, vitalidade, positividade, iluminação",
            negative: "Pessimismo, falta de energia, arrogância, ego inflado",
            keywords: ["alegria", "sucesso", "vitalidade", "positividade", "iluminação"]
        },
        {
            id: 20,
            name: "O Julgamento",
            symbol: "📯",
            positive: "Julgamento, renascimento, despertar interior, perdão, redenção",
            negative: "Julgamento severo, falta de perdão, negação, resistência",
            keywords: ["julgamento", "renascimento", "despertar", "perdão", "redenção"]
        },
        {
            id: 21,
            name: "O Mundo",
            symbol: "🌍",
            positive: "Realização, conclusão, sucesso, viagem, cumprimento",
            negative: "Falta de conclusão, atraso, busca externa, incompletude",
            keywords: ["realização", "conclusão", "sucesso", "viagem", "cumprimento"]
        }
    ],
    minor: [
        // Copas
        {
            id: 22,
            name: "Ás de Copas",
            symbol: "🏆",
            suit: "copas",
            positive: "Novo amor, intuição, espiritualidade, criatividade",
            negative: "Bloqueio emocional, amor não correspondido, criatividade bloqueada",
            keywords: ["novo amor", "intuição", "espiritualidade", "criatividade", "emoções"]
        },
        {
            id: 23,
            name: "Dois de Copas",
            symbol: "💑",
            suit: "copas",
            positive: "Parceria, amor mútuo, conexão, harmonia",
            negative: "Desequilíbrio, relacionamento tóxico, falta de harmonia",
            keywords: ["parceria", "amor mútuo", "conexão", "harmonia", "relacionamento"]
        },
        // Espadas
        {
            id: 24,
            name: "Ás de Espadas",
            symbol: "⚔️",
            suit: "espadas",
            positive: "Nova ideia, clareza mental, comunicação, verdade",
            negative: "Confusão, falta de clareza, comunicação ruim, mentiras",
            keywords: ["nova ideia", "clareza", "comunicação", "verdade", "intelecto"]
        },
        {
            id: 25,
            name: "Dois de Espadas",
            symbol: "🤔",
            suit: "espadas",
            positive: "Decisão equilibrada, paz, trégua, diplomacia",
            negative: "Indecisão, conflito interno, evitar decisões, estagnação",
            keywords: ["decisão", "paz", "trégua", "diplomacia", "equilíbrio"]
        },
        // Paus
        {
            id: 26,
            name: "Ás de Paus",
            symbol: "🌱",
            suit: "paus",
            positive: "Novo projeto, inspiração, crescimento, potencial",
            negative: "Falta de direção, projetos abandonados, falta de energia",
            keywords: ["novo projeto", "inspiração", "crescimento", "potencial", "energia"]
        },
        {
            id: 27,
            name: "Dois de Paus",
            symbol: "🗺️",
            suit: "paus",
            positive: "Planejamento, progresso pessoal, decisões futuras",
            negative: "Falta de planejamento, medo do desconhecido, indecisão",
            keywords: ["planejamento", "progresso", "decisões", "futuro", "visão"]
        },
        // Ouros
        {
            id: 28,
            name: "Ás de Ouros",
            symbol: "💰",
            suit: "ouros",
            positive: "Nova oportunidade, prosperidade, manifestação, abundância",
            negative: "Oportunidade perdida, ganância, materialismo excessivo",
            keywords: ["oportunidade", "prosperidade", "manifestação", "abundância", "material"]
        },
        {
            id: 29,
            name: "Dois de Ouros",
            symbol: "⚖️",
            suit: "ouros",
            positive: "Equilíbrio, adaptabilidade, gestão de recursos, flexibilidade",
            negative: "Desequilíbrio, má gestão, inflexibilidade, caos financeiro",
            keywords: ["equilíbrio", "adaptabilidade", "gestão", "flexibilidade", "recursos"]
        }
    ]
};

// Estado da aplicação
let currentReading = {
    type: null,
    cards: [],
    isActive: false
};

let allCards = [...tarotCards.major, ...tarotCards.minor];

// Navegação
function showSection(sectionId) {
    // Esconder todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar seção selecionada
    document.getElementById(sectionId).classList.add('active');
    
    // Atualizar navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Carregar cartas se for a seção de biblioteca
    if (sectionId === 'cards') {
        loadCardsLibrary();
    }
}

// Iniciar leitura
function startReading(type) {
    currentReading.type = type;
    currentReading.cards = [];
    currentReading.isActive = true;
    
    showSection('reading');
    setupReading(type);
}

function setupReading(type) {
    const selectedCardsContainer = document.getElementById('selectedCards');
    const interpretationContainer = document.getElementById('interpretation');
    
    selectedCardsContainer.innerHTML = '';
    interpretationContainer.style.display = 'none';
    
    // Configurar número de cartas baseado no tipo
    let cardCount = 1;
    let positions = ['Resposta'];
    
    if (type === 'three') {
        cardCount = 3;
        positions = ['Passado', 'Presente', 'Futuro'];
    } else if (type === 'celtic') {
        cardCount = 10;
        positions = ['Situação Atual', 'Desafio', 'Passado Distante', 'Passado Recente', 
                    'Possível Resultado', 'Futuro Próximo', 'Sua Abordagem', 'Influências Externas', 
                    'Esperanças e Medos', 'Resultado Final'];
    }
    
    currentReading.positions = positions;
    currentReading.cardCount = cardCount;
}

// Embaralhar baralho
function shuffleDeck() {
    const deck = document.getElementById('deck');
    deck.style.animation = 'none';
    deck.offsetHeight; // Trigger reflow
    deck.style.animation = 'shuffle 1s ease-in-out';
    
    setTimeout(() => {
        deck.style.animation = '';
    }, 1000);
}

// Selecionar carta
function selectCard() {
    if (!currentReading.isActive || currentReading.cards.length >= currentReading.cardCount) {
        return;
    }
    
    // Selecionar carta aleatória
    const randomCard = allCards[Math.floor(Math.random() * allCards.length)];
    const position = currentReading.positions[currentReading.cards.length];
    
    currentReading.cards.push({
        card: randomCard,
        position: position
    });
    
    displaySelectedCard(randomCard, position);
    
    // Verificar se todas as cartas foram selecionadas
    if (currentReading.cards.length >= currentReading.cardCount) {
        setTimeout(() => {
            showInterpretation();
        }, 500);
    }
}

function displaySelectedCard(card, position) {
    const selectedCardsContainer = document.getElementById('selectedCards');
    
    const cardElement = document.createElement('div');
    cardElement.className = 'selected-card';
    cardElement.innerHTML = `
        <h4>${card.name}</h4>
        <div class="position">${position}</div>
        <div class="symbol">${card.symbol}</div>
    `;
    
    selectedCardsContainer.appendChild(cardElement);
}

function showInterpretation() {
    const interpretationContainer = document.getElementById('interpretation');
    const contentContainer = interpretationContainer.querySelector('.interpretation-content');
    
    let interpretationHTML = '';
    
    currentReading.cards.forEach((item, index) => {
        const card = item.card;
        const position = item.position;
        
        interpretationHTML += `
            <div class="card-interpretation">
                <h4>${card.name} - ${position}</h4>
                <p><strong>Significado:</strong> ${card.positive}</p>
                <p><strong>Palavras-chave:</strong> ${card.keywords.join(', ')}</p>
            </div>
        `;
    });
    
    // Adicionar interpretação geral
    interpretationHTML += `
        <div class="card-interpretation">
            <h4>Interpretação Geral</h4>
            <p>${generateGeneralInterpretation()}</p>
        </div>
    `;
    
    contentContainer.innerHTML = interpretationHTML;
    interpretationContainer.style.display = 'block';
}

function generateGeneralInterpretation() {
    const interpretations = {
        single: "Esta carta revela insights importantes sobre sua situação atual. Reflita sobre seu significado e como ele se aplica à sua pergunta.",
        three: "Sua leitura mostra a jornada do passado ao futuro. O passado influencia o presente, que por sua vez molda o futuro. Use essas informações para tomar decisões conscientes.",
        celtic: "Esta leitura completa oferece uma visão abrangente de sua situação. Cada posição revela aspectos diferentes de sua jornada, desde influências internas até fatores externos que afetam seu caminho."
    };
    
    return interpretations[currentReading.type] || "Reflita sobre os significados das cartas e como elas se conectam com sua vida atual.";
}

// Nova leitura
function newReading() {
    currentReading = {
        type: null,
        cards: [],
        isActive: false
    };
    
    showSection('home');
}

// Salvar leitura
function saveReading() {
    const readingData = {
        date: new Date().toLocaleDateString('pt-BR'),
        type: currentReading.type,
        cards: currentReading.cards
    };
    
    // Salvar no localStorage
    let savedReadings = JSON.parse(localStorage.getItem('tarotReadings') || '[]');
    savedReadings.push(readingData);
    localStorage.setItem('tarotReadings', JSON.stringify(savedReadings));
    
    alert('Leitura salva com sucesso!');
}

// Biblioteca de cartas
function loadCardsLibrary() {
    const cardsGrid = document.getElementById('cardsGrid');
    cardsGrid.innerHTML = '';
    
    allCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-item';
        cardElement.setAttribute('data-type', card.suit ? 'minor' : 'major');
        cardElement.setAttribute('data-name', card.name.toLowerCase());
        
        cardElement.innerHTML = `
            <div class="symbol">${card.symbol}</div>
            <h4>${card.name}</h4>
            <div class="type">${card.suit ? 'Arcano Menor' : 'Arcano Maior'}</div>
        `;
        
        cardElement.addEventListener('click', () => showCardDetail(card));
        cardsGrid.appendChild(cardElement);
    });
}

function showCardDetail(card) {
    const cardDetail = document.getElementById('cardDetail');
    const cardDisplay = cardDetail.querySelector('.card-display');
    const cardName = cardDetail.querySelector('.card-name');
    const positiveMeaning = cardDetail.querySelector('.positive-meaning');
    const negativeMeaning = cardDetail.querySelector('.negative-meaning');
    const keywords = cardDetail.querySelector('.keywords');
    
    cardDisplay.innerHTML = card.symbol;
    cardName.textContent = card.name;
    positiveMeaning.textContent = card.positive;
    negativeMeaning.textContent = card.negative;
    
    keywords.innerHTML = '';
    card.keywords.forEach(keyword => {
        const keywordElement = document.createElement('span');
        keywordElement.className = 'keyword';
        keywordElement.textContent = keyword;
        keywords.appendChild(keywordElement);
    });
    
    cardDetail.style.display = 'block';
    cardDetail.scrollIntoView({ behavior: 'smooth' });
}

function filterCards() {
    const searchTerm = document.getElementById('cardSearch').value.toLowerCase();
    const filterType = document.getElementById('cardFilter').value;
    const cardItems = document.querySelectorAll('.card-item');
    
    cardItems.forEach(item => {
        const name = item.getAttribute('data-name');
        const type = item.getAttribute('data-type');
        
        const matchesSearch = name.includes(searchTerm);
        const matchesFilter = filterType === 'all' || type === filterType;
        
        if (matchesSearch && matchesFilter) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
    
    // Clique nas cartas do baralho
    document.querySelectorAll('.card-back').forEach(card => {
        card.addEventListener('click', selectCard);
    });
    
    // Mostrar seção inicial
    showSection('home');
});

// Animações adicionais
function addSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.position = 'absolute';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.color = '#FFD700';
    sparkle.innerHTML = '✨';
    sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// CSS para animação de sparkle
const sparkleCSS = `
@keyframes sparkleFloat {
    0% {
        opacity: 1;
        transform: translateY(0px) scale(0.5);
    }
    100% {
        opacity: 0;
        transform: translateY(-50px) scale(1);
    }
}

@keyframes shuffle {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px) rotateZ(-5deg); }
    75% { transform: translateX(10px) rotateZ(5deg); }
}
`;

// Adicionar CSS de animação
const style = document.createElement('style');
style.textContent = sparkleCSS;
document.head.appendChild(style);

