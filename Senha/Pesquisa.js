document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const wishlistBtn = document.getElementById('wishlistBtn');
    const cartBtn = document.getElementById('cartBtn');

    wishlistBtn.addEventListener('click', function() {
        alert('Adicionado à lista de desejos!');
    });

    cartBtn.addEventListener('click', function() {
        alert('Adicionado ao carrinho!');
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') { // Verifica se a tecla pressionada foi Enter
            const query = searchInput.value.trim().toLowerCase(); // Captura o valor da busca
            if (query === 'left 4 dead') {
                window.location.href = ''; // Altere para a URL que você deseja redirecionar
            } else {
                alert('Jogo não encontrado.'); // Mensagem para pesquisa não encontrada
            }
        }
    });
});

function updatePriceRange(value) {
    const priceMax = document.getElementById('price-max');
    priceMax.textContent = `R$ ${value}`;
}

// Função para alternar a exibição das opções de idioma
function toggleLanguageOptions() {
    const languageOptions = document.getElementById('language-options');
    languageOptions.style.display = (languageOptions.style.display === 'block') ? 'none' : 'block';
}

// Função para alterar o idioma
function changeLanguage(language) {
    console.log('Idioma selecionado:', language);
    toggleLanguageOptions(); // Oculta as opções após a seleção
}

// Função para fechar o dropdown ao clicar fora dele
function closeDropdown(event) {
    const languageOptions = document.getElementById('language-options');
    
    // Verifica se o clique foi fora do dropdown e do botão
    if (!languageOptions.contains(event.target) && !document.getElementById('language-button').contains(event.target)) {
        languageOptions.style.display = 'none';
    }
}

// Adiciona listeners de evento para idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('language-button');
    
    languageButton.addEventListener('click', toggleLanguageOptions);
    document.addEventListener('click', closeDropdown); // Escuta cliques fora do dropdown
});