import './style.css';

// Helper: resolve image paths corretamente no GitHub Pages
const getImageUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

// Data Structure
const categories = [
  { id: 'todos', name: 'Todos' },
  { id: 'snacks-tradicionais', name: 'Snacks Tradicionais' },
  { id: 'snacks-proteicos', name: 'Snacks Proteicos' },
  {
    id: 'barrinhas-proteicas', name: 'Barrinhas Proteicas', subcategories: [
      { id: 'refeicao-rapida', name: 'Refeição Rápida' },
      { id: 'lanche-rapido', name: 'Lanche Rápido' }
    ]
  },
  { id: 'repositor-energeticos', name: 'Repositor Energéticos' },
  {
    id: 'pre-treinos', name: 'Pré Treinos', subcategories: [
      { id: 'uso-ao-dia', name: 'Uso ao Dia' },
      { id: 'uso-a-noite', name: 'Uso à Noite' }
    ]
  },
  { id: 'energeticos-liquidos', name: 'Energéticos (Líquidos)' }
];

const mockProducts = [
  // Snacks tradicionais
  {
    id: 1, name: 'Snacks Believe Cebola e Salsa', categoryId: 'snacks-tradicionais', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/believe salsa e cebola.jfif'),
    description: 'Delicioso snack sabor cebola e salsa perfeito para matar a vontade de um salgadinho no meio do dia.',
    slots: [{ slot: '03', flavor: 'Salsa e Cebola' }, { slot: '05', flavor: 'Queijo Suiço' }],
    ingredients: 'Farinha de trigo enriquecida com ferro e ácido fólico, óleo vegetal, amido de milho, sal, tempero (cebola desidratada, salsa desidratada, realçador de sabor glutamato monossódico, aromatizante).'
  },
  {
    id: 2, name: 'Cookie Believe Chocolate', categoryId: 'snacks-tradicionais', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/cookies believe.jfif'),
    description: 'Cookie de chocolate macio e com gosta de feito em casa. O doce perfeito para a tarde.',
    slots: [{ slot: '36' }],
    ingredients: 'Farinha de trigo integral, achocolatado em pó (cacau em pó, açúcar), ovos, óleo de coco, whey protein isolado, fermento químico.'
  },

  // Snacks proteicos
  {
    id: 3, name: 'Snacks Whey Viv', categoryId: 'snacks-proteicos', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/whey viv.jfif'),
    description: 'Snack crocante e enriquecido com whey protein. Muita saciedade para sua rotina.',
    slots: [{ slot: '01', flavor: 'Chocolate' }],
    ingredients: 'Concentrado proteico de soro de leite (whey protein), farinha de milho, amido modificado, sal, óleo de girassol, tempero natural, vitaminas e minerais.'
  },
  {
    id: 20, name: 'Alfajor Dr Peanut', categoryId: 'snacks-proteicos', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/alfajor dr peanut.jfif'),
    description: 'Alfajor rico em proteínas e com aquele sabor inconfundível de amendoim.',
    slots: [{ slot: '35', flavor: 'Chocolate' }],
    ingredients: 'pasta de amendoim sabor avelã (amendoim torrado, creme sabor avelã, whey protein sabor chocolate, sal e edulcorantes: xilitol, sucralose, acessulfame de potássio), biscoito (farinha de trigo enriquecida com ferro e ácido fólico; creme de milho; gordura vegetal; polidextrose; amido de milho; vitaminas: D, B1, B3,B5, B6, H e B12; corante natural caramelo IV; edulcorantes xilitol, glicosídeos de steviol e sucralose; emulsificante lecitina de soja) cobertura sabor chocolate ao leite (açúcar, óleo de palma, soro de leite em pó, cacau em pó, emulsificantes lecitina de soja e poliglicerol polirricinoleato e aroma artificial de chocolate.'
  },
  {
    id: 4, name: 'Wafer Dr Peanut', categoryId: 'snacks-proteicos', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/wafer dr peanut.jfif'),
    description: 'O inconfundível sabor da pasta de amendoim D. Peanut em um wafer hiper crocante e proteico.',
    slots: [{ slot: '25' }],
    ingredients: 'Pasta de amendoim (amendoim torrado, sal), farinha de trigo, cacau em pó, concentrado proteico de soro de leite, óleo de palma, açúcar, lecitina de soja, aromatizante natural.'
  },

  // Barrinhas Proteicas - Refeição Rápida
  {
    id: 5, name: 'Dark Bar 90g', categoryId: 'barrinhas-proteicas', subcategoryId: 'refeicao-rapida', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/darkbar.jfif'),
    description: 'Barra hiperproteica e densa, capaz de substituir uma refeição nos dias em que o tempo estiver corrido.',
    slots: [{ slot: '11', flavor: 'Creme de Coco' }, { slot: '12', flavor: 'Avelã' }],
    ingredients: 'Proteína isolada de soja, concentrado proteico de soro de leite, cacau em pó, aveia, fibras solúveis, óleo de coco, adoçante sucralose, vitaminas do complexo B, cálcio, ferro.'
  },
  {
    id: 6, name: 'Power Protein Bar 90g', categoryId: 'barrinhas-proteicas', subcategoryId: 'refeicao-rapida', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/power protein bar.jfif'),
    description: 'A proteína e a energia de uma refeição completa, concentradas em uma barra de 90g super saborosa.',
    slots: [{ slot: '13', flavor: 'Caramelo' }, { slot: '16', flavor: 'Trufa de Chocolate' }, { slot: '15', flavor: 'Cookies' }, { slot: '14', flavor: 'Creme de Avelã com Coco' }],
    ingredients: 'Concentrado proteico de soro de leite, pasta de amendoim, xarope de glicose, aveia em flocos, cacau em pó, óleo de girassol, sal, aromatizante, lecitina de soja, adoçante sucralose.'
  },

  // Barrinhas Proteicas - Lanche Rápido
  {
    id: 8, name: 'Power Protein Bar 40g', categoryId: 'barrinhas-proteicas', subcategoryId: 'lanche-rapido', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/power protein bar 40g.jfif'),
    description: 'A versão pocket da sua barra favorita, do tamanho ideal para o lanche da tarde.',
    slots: [{ slot: '24', flavor: 'Caramelo' }, { slot: '23', flavor: 'Trufa de Chocolate' }],
    ingredients: 'Concentrado proteico de soro de leite, pasta de amendoim, xarope de glicose, aveia em flocos, cacau em pó, óleo de girassol, sal, aromatizante, lecitina de soja, adoçante sucralose.'
  },
  {
    id: 9, name: 'Whey Bar 40g', categoryId: 'barrinhas-proteicas', subcategoryId: 'lanche-rapido', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/whey bar.jfif'),
    description: 'Lanchinho nutritivo com aquele boost de whey para os momentos entre uma tarefa e outra.',
    slots: [{ slot: '21', flavor: 'Amendoim' }, { slot: '22', flavor: 'Chocolate' }],
    ingredients: 'Isolado proteico de soro de leite (whey protein isolate), xarope de frutose, cobertura de chocolate (cacau, açúcar, manteiga de cacau, lecitina de soja), glicerina, sal, aromatizante.'
  },
  {
    id: 10, name: 'Bold Thin 40g', categoryId: 'barrinhas-proteicas', subcategoryId: 'lanche-rapido', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/bold thin.jfif'),
    description: 'Sabor surreal em uma barra fininha e super deliciosa. Ideal com um cafezinho.',
    slots: [{ slot: '26', flavor: 'Avelã Branco' }],
    ingredients: 'Concentrado proteico de soro de leite, cobertura sabor chocolate (açúcar, gordura vegetal, cacau, emulsificante lecitina de soja, aromatizante), glicerina, crisps de arroz, sal, adoçante sucralose.'
  },
  {
    id: 11, name: 'Protein Crisp 40g', categoryId: 'barrinhas-proteicas', subcategoryId: 'lanche-rapido', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/protein crisp 40g.jfif'),
    description: 'Se você gosta de texturas e crocância, vai amar os pedacinhos crocantes dessa barra proteica.',
    slots: [{ slot: '31', flavor: 'Brownie' }, { slot: '32', flavor: 'Leite Ninho com Avelã' }, { slot: '33', flavor: 'Ovomaltine' }, { slot: '34', flavor: 'Duo Crunch' }],
    ingredients: 'Concentrado de proteína de soro de leite, crisps proteicos (isolado de soja, amido de tapioca, cacau), cobertura sabor chocolate, glicerina, fibra solúvel, lecitina de soja, adoçante sucralose.'
  },

  // Repositor Energéticos
  {
    id: 12, name: 'Nuclear Gel', categoryId: 'repositor-energeticos', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/nuclear gel.jfif'),
    description: 'Absorção ultra rápida de carboidratos, excelente para usar durante o treino e manter a carga energética alta.',
    slots: [{ slot: '41' }],
    ingredients: 'Maltodextrina, frutose, água, eletrólitos (sódio, potássio, magnésio), cafeína anidra, taurina, vitamina C, aromatizante natural, corante natural.'
  },

  // Pré treinos - Uso ao dia
  {
    id: 13, name: 'Crack', categoryId: 'pre-treinos', subcategoryId: 'uso-ao-dia', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/crack.jfif'),
    description: 'Uma dose alucinante de foco e energia. O pontapé que faltava para seu treino ir pra outro nível.',
    slots: [{ slot: '43' }],
    ingredients: 'Cafeína anidra, beta-alanina, L-citrulina malato, creatina monoidratada, L-arginina, extrato de guaraná, taurina, vitaminas B3 e B6, aromatizante, adoçante sucralose.'
  },
  {
    id: 14, name: 'Psichotic', categoryId: 'pre-treinos', subcategoryId: 'uso-ao-dia', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/psichotic.jfif'),
    description: 'Foco mental insano e energia duradoura, perfeito para quem treina pesado.',
    slots: [{ slot: '44' }],
    ingredients: 'Cafeína anidra, DMHA (2-aminoisoheptane), beta-alanina, L-citrulina malato, extrato de yohimbe, hordenina, L-teanina, vitamina B12, niacina, aromatizante.'
  },
  {
    id: 15, name: 'Panic', categoryId: 'pre-treinos', subcategoryId: 'uso-ao-dia', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/panic.jfif'),
    description: 'Combinação potente de estimulantes pensada especialmente para retardar a fadiga extrema no seu dia a dia.',
    slots: [{ slot: '45' }],
    ingredients: 'Cafeína anidra, beta-alanina, L-citrulina, arginina AKG, extrato de chá verde, piperina, creatina HCL, vitaminas B6 e B12, niacina, adoçante acesulfame-k, aromatizante.'
  },

  // Pré treinos - Uso à noite
  {
    id: 16, name: 'Dila Pump', categoryId: 'pre-treinos', subcategoryId: 'uso-a-noite', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/dila pump.jfif'),
    description: 'Vaso dilatador sensacional que não afeta seu sono pois não contém estimulantes que tirem o seu descanso após treinar à noite.',
    slots: [{ slot: '46' }],
    ingredients: 'L-citrulina malato, arginina nitrato, agmatina sulfato, L-norvalina, betaína anidra, extrato de beterraba, vitamina C, aromatizante natural, adoçante sucralose. Não contém cafeína.'
  },

  // Energéticos (Líquidos)
  {
    id: 17, name: 'Monster', categoryId: 'energeticos-liquidos', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/monster.jfif'),
    description: 'A dose épica de energia que você precisa em uma lata extremamente refrescante.',
    slots: [{ slot: '53', flavor: 'Ultra' }, { slot: '54', flavor: 'Manga' }, { slot: '55', flavor: 'Ultra Violeta' }, { slot: '56', flavor: 'Tradicional' }],
    ingredients: 'Água carbonatada, sacarose, glicose, suco de limão, taurina (0,4%), regulador de acidez citrato de sódio, cafeína (0,03%), extrato de guaraná, vitaminas B3, B6 e B12, ginseng, aromatizante.'
  },
  {
    id: 18, name: 'Booster Energy Drink', categoryId: 'energeticos-liquidos', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/booster.jfif'),
    description: 'Leve e superpotente, perfeito para dar um boost imediato e refrescante na rotina.',
    slots: [{ slot: '51' }],
    ingredients: 'Água carbonatada, açúcar, taurina, cafeína, vitaminas B2, B3, B5, B6 e B12, ácido cítrico, aromatizante, corante caramelo, conservante benzoato de sódio.'
  },
  {
    id: 19, name: 'Évora Drink', categoryId: 'energeticos-liquidos', price: 'Exibido na Máquina',
    image: getImageUrl('fotos maquina/evora drink.jfif'),
    description: 'Sabor único com uma carga extra de ingredientes que aceleram seu metabolismo e afastam a preguiça.',
    slots: [{ slot: '52' }],
    ingredients: 'Água, dextrose, taurina (2.000mg), cafeína anidra (80mg), extrato de ginseng, L-carnitina, vitaminas B3, B6 e B12, aromatizante natural, adoçante sucralose, ácido cítrico.'
  }
];

// State
let selectedCategory = categories[0].id;
let selectedSubcategory = null;

// DOM Elements
const elCategories = document.getElementById('categories-container');
const elSubcategories = document.getElementById('subcategories-container');
const elProducts = document.getElementById('products-grid');
const elEmptyState = document.getElementById('empty-state');
const form = document.getElementById('suggestion-form');
const feedback = document.getElementById('form-feedback');

// Modal Elements
const modal = document.getElementById('product-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const btnCloseModal = document.getElementById('close-modal');

const renderCategories = () => {
  elCategories.innerHTML = categories.map(cat => `
    <button data-id="${cat.id}" class="category-btn snap-start whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat.id
      ? 'bg-brand-primary text-white shadow-md'
      : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-primary/50'
    }">
      ${cat.name}
    </button>
  `).join('');

  // Add event listeners
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      selectedCategory = e.target.dataset.id;
      selectedSubcategory = null; // Reset subcategory when changing main category
      renderCategories();
      renderSubcategories();
      renderProducts();
    });
  });
};

const renderSubcategories = () => {
  const currentCat = categories.find(c => c.id === selectedCategory);

  if (currentCat && currentCat.subcategories) {
    elSubcategories.classList.remove('hidden');

    // Add "Todos" option
    const allOptionHtml = `
      <button data-id="all" class="subcategory-btn snap-start whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${selectedSubcategory === null
        ? 'bg-gray-800 text-white shadow-sm'
        : 'bg-transparent border border-gray-200 text-gray-500'
      }">
        Todos
      </button>
    `;

    const subHtml = currentCat.subcategories.map(sub => `
      <button data-id="${sub.id}" class="subcategory-btn snap-start whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${selectedSubcategory === sub.id
        ? 'bg-gray-800 text-white shadow-sm'
        : 'bg-transparent border border-gray-200 text-gray-500'
      }">
        ${sub.name}
      </button>
    `).join('');

    elSubcategories.innerHTML = allOptionHtml + subHtml;

    document.querySelectorAll('.subcategory-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        selectedSubcategory = id === 'all' ? null : id;
        renderSubcategories();
        renderProducts();
      });
    });

  } else {
    elSubcategories.classList.add('hidden');
    elSubcategories.innerHTML = '';
  }
};

const renderProducts = () => {
  let filtered = mockProducts;
  if (selectedCategory !== 'todos') {
    filtered = mockProducts.filter(p => p.categoryId === selectedCategory);
  }

  if (selectedSubcategory !== null) {
    filtered = filtered.filter(p => p.subcategoryId === selectedSubcategory);
  }

  if (filtered.length === 0) {
    elProducts.innerHTML = '';
    elEmptyState.classList.remove('hidden');
    return;
  }

  elEmptyState.classList.add('hidden');
  elProducts.innerHTML = filtered.map((p, index) => `
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition transform hover:-translate-y-1 animate-fade-in-up" 
         style="animation-delay: ${index * 50}ms"
         onclick="window.openProductModal(${p.id})">
      <div class="aspect-square bg-gray-50 flex items-center justify-center p-4 relative">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain mix-blend-multiply drop-shadow-sm">
        <button class="absolute bottom-2 right-2 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform backdrop-blur-sm bg-opacity-90">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
      <div class="p-3">
        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 leading-snug mb-1">${p.name}</h3>
        <p class="text-sm font-bold text-brand-primary">${p.price}</p>
      </div>
    </div>
  `).join('');
};

// Modal Logic
window.openProductModal = (productId) => {
  const p = mockProducts.find(x => x.id === productId);
  if (!p) return;

  const cat = categories.find(c => c.id === p.categoryId);
  const catName = cat?.name || '';

  document.getElementById('modal-image').src = p.image;
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-price').textContent = p.price;
  document.getElementById('modal-category').textContent = catName;
  document.getElementById('modal-desc').textContent = p.description;

  // Subcategory badge
  const subcatSection = document.getElementById('modal-subcategory-section');
  const subcatEl = document.getElementById('modal-subcategory');
  if (p.subcategoryId && cat?.subcategories) {
    const subName = cat.subcategories.find(s => s.id === p.subcategoryId)?.name || '';
    subcatEl.textContent = subName;
    subcatSection.classList.remove('hidden');
  } else {
    subcatSection.classList.add('hidden');
  }

  // Slots / Molas
  const slotsEl = document.getElementById('modal-slots');
  const slotsSection = document.getElementById('modal-slots-section');
  if (p.slots && p.slots.length > 0) {
    slotsEl.innerHTML = p.slots.map(s => `
      <div class="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-xl px-3 py-2">
        <span class="text-xs font-extrabold text-brand-primary">Mola ${s.slot}</span>
        ${s.flavor ? `<span class="text-xs text-gray-500">— ${s.flavor}</span>` : ''}
      </div>
    `).join('');
    slotsSection.classList.remove('hidden');
  } else {
    slotsSection.classList.add('hidden');
  }

  // Ingredients
  const ingredientsSection = document.getElementById('modal-ingredients-section');
  const ingredientsEl = document.getElementById('modal-ingredients');
  if (p.ingredients) {
    ingredientsEl.textContent = p.ingredients;
    ingredientsSection.classList.remove('hidden');
  } else {
    ingredientsSection.classList.add('hidden');
  }

  // Show Modal
  modal.classList.remove('pointer-events-none');
  modalBackdrop.classList.remove('opacity-0');
  modalBackdrop.classList.add('opacity-100', 'pointer-events-auto');

  // Transform to slide up
  setTimeout(() => {
    modalContent.classList.remove('translate-y-full');
  }, 10);
};

const closeModal = () => {
  modalContent.classList.add('translate-y-full');
  modalBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
  modalBackdrop.classList.add('opacity-0');

  setTimeout(() => {
    modal.classList.add('pointer-events-none');
  }, 300);
};

btnCloseModal.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.getElementById('buy-action').addEventListener('click', closeModal);

// Provide a swipe-to-close feel (Basic touch handler)
let touchStartY = 0;
modalContent.addEventListener('touchstart', e => {
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

modalContent.addEventListener('touchend', e => {
  const touchEndY = e.changedTouches[0].screenY;
  // If user swiped down significantly
  if (touchEndY - touchStartY > 60) {
    closeModal();
  }
}, { passive: true });


// Form Submission — n8n Webhook
const N8N_WEBHOOK_URL = 'https://n8n.aceleraflowai.tech/webhook/landpage-leads';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const suggestion = document.getElementById('suggestion').value.trim();
  const btn = form.querySelector('button[type="submit"]');

  // Change button state
  const originalText = btn.textContent;
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  btn.classList.add('opacity-70');

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, suggestion })
    });

    if (!response.ok) {
      throw new Error(`Servidor retornou ${response.status}`);
    }

    feedback.classList.remove('hidden', 'text-red-500');
    feedback.classList.add('text-green-600');
    feedback.textContent = 'Sugestão enviada com sucesso! Obrigado 🎉';
    form.reset();

  } catch (err) {
    console.error('Erro ao enviar para o webhook:', err);
    feedback.classList.remove('hidden', 'text-green-600');
    feedback.classList.add('text-red-500');
    feedback.textContent = 'Houve um erro ao enviar. Tente novamente.';
  } finally {
    btn.textContent = originalText;
    btn.disabled = false;
    btn.classList.remove('opacity-70');

    setTimeout(() => {
      feedback.classList.add('hidden');
    }, 5000);
  }
});

// Init
renderCategories();
renderSubcategories();
renderProducts();

// ─── PROMOTIONS ────────────────────────────────────────────────────────────────
// Edite este array para adicionar, remover ou alterar promoções.
// Deixe o array vazio para exibir o estado "sem promoções".
const promotions = [
  {
    id: 'p1',
    type: 'price',             // card especial de preço
    productIds: [5, 6],        // Dark Bar 90g + Power Protein Bar 90g
    badge: 'PROMOÇÃO DE PREÇO',
    badgeColor: 'bg-red-500 text-white',
    highlight: 'Barrinhas 90g por apenas R$ 13,00!',
    promoPrice: 'R$ 13,00',
    originalPrice: 'R$ 16,00',
    promoDescription: 'Dark Bar e Power Protein Bar no tamanho 90g com preço especial. Refeição rápida, saborosa e com muito mais proteína por muito menos!',
    slots: [
      { slot: '11', flavor: 'Dark Bar — Creme de Coco' },
      { slot: '12', flavor: 'Dark Bar — Avelã' },
      { slot: '13', flavor: 'Power Bar — Caramelo' },
      { slot: '14', flavor: 'Power Bar — Avelã com Coco' },
      { slot: '15', flavor: 'Power Bar — Cookies' },
      { slot: '16', flavor: 'Power Bar — Trufa de Chocolate' },
    ],
  },
  {
    id: 'p2',
    productId: 3,              // Snacks Whey Viv
    badge: 'DESTAQUE DA SEMANA',
    badgeColor: 'bg-yellow-400 text-yellow-900',
    highlight: 'Experimente os sabores!',
    promoDescription: 'Snack proteico delicioso disponível em dois sabores na máquina. Crocante, nutritivo e perfeito para qualquer hora do dia.',
    slots: [{ slot: '05', flavor: 'Cookies' }, { slot: '01', flavor: 'Chocolate' }],
  },
  {
    id: 'p3',
    productId: 11,             // Protein Crisp 40g
    badge: 'MAIS VENDIDO',
    badgeColor: 'bg-brand-primary text-white',
    highlight: '4 sabores incríveis!',
    promoDescription: 'A barra mais crocante da máquina. Brownie, Leite Ninho com Avelã, Ovomaltine e Duo Crunch — escolha o seu favorito!',
    slots: [
      { slot: '31', flavor: 'Brownie' },
      { slot: '32', flavor: 'Leite Ninho com Avelã' },
      { slot: '33', flavor: 'Ovomaltine' },
      { slot: '34', flavor: 'Duo Crunch' },
    ],
  },
  {
    id: 'p4',
    productId: 17,             // Monster
    badge: 'NOVIDADE',
    badgeColor: 'bg-purple-500 text-white',
    highlight: 'Chegou o Monster!',
    promoDescription: 'Quatro versões do energético mais famoso do mundo disponíveis. Tradicional, Ultra, Manga e Ultra Violeta. Escolha a sua dose de energia!',
    slots: [
      { slot: '53', flavor: 'Ultra' },
      { slot: '54', flavor: 'Manga' },
      { slot: '55', flavor: 'Ultra Violeta' },
      { slot: '56', flavor: 'Tradicional' },
    ],
  },
];

const renderPromos = () => {
  const list = document.getElementById('promo-list');
  const empty = document.getElementById('promo-empty');
  const badge = document.getElementById('promo-badge');

  if (promotions.length === 0) {
    list.innerHTML = '';
    empty.classList.remove('hidden');
    badge.classList.add('hidden');
    return;
  }

  empty.classList.add('hidden');
  badge.classList.remove('hidden');

  list.innerHTML = promotions.map(promo => {

    // ── MULTI-PRODUCT PRICE PROMO ─────────────────────────────────────────
    if (promo.type === 'price' && promo.productIds) {
      const products = promo.productIds.map(id => mockProducts.find(p => p.id === id)).filter(Boolean);
      if (products.length === 0) return '';

      const imagesHtml = products.map(p => `
        <div class="flex-1 flex flex-col items-center gap-1 cursor-pointer" onclick="event.stopPropagation(); window.openProductModal(${p.id})">
          <div class="w-full aspect-square rounded-xl bg-white flex items-center justify-center p-2 border border-gray-100 shadow-sm">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain mix-blend-multiply drop-shadow-sm">
          </div>
          <span class="text-[10px] font-semibold text-gray-500 text-center leading-tight">${p.name}</span>
        </div>
      `).join('');

      const slotsHtml = promo.slots.map(s => `
        <div class="flex items-center gap-1.5 bg-white/80 border border-green-200 rounded-lg px-2.5 py-1.5">
          <span class="text-xs font-extrabold text-brand-primary">Mola ${s.slot}</span>
          ${s.flavor ? `<span class="text-xs text-gray-500">— ${s.flavor}</span>` : ''}
        </div>
      `).join('');

      return `
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <!-- Price banner -->
          <div class="bg-gradient-to-r from-red-500 to-rose-600 px-4 py-3 flex items-center justify-between">
            <div>
              <span class="inline-block text-[10px] font-extrabold bg-white/20 text-white px-2 py-0.5 rounded-full mb-1">${promo.badge}</span>
              <p class="text-white font-bold text-sm leading-tight">${promo.highlight}</p>
            </div>
            <div class="text-right">
              <p class="text-white/70 text-[10px] line-through">${promo.originalPrice || 'Preço normal'}</p>
              <p class="text-white text-2xl font-extrabold leading-none">${promo.promoPrice}</p>
            </div>
          </div>
          <!-- Product images side by side -->
          <div class="flex gap-3 p-4 bg-gray-50">
            ${imagesHtml}
          </div>
          <!-- Description + slots -->
          <div class="px-4 pb-4">
            <p class="text-xs text-gray-500 leading-relaxed mb-3">${promo.promoDescription}</p>
            <div class="flex flex-wrap gap-1.5">${slotsHtml}</div>
          </div>
        </div>
      `;
    }

    // ── STANDARD SINGLE-PRODUCT PROMO ────────────────────────────────────
    const product = mockProducts.find(p => p.id === promo.productId);
    if (!product) return '';

    const slotsHtml = promo.slots.map(s => `
      <div class="flex items-center gap-1.5 bg-white/80 border border-green-200 rounded-lg px-2.5 py-1.5">
        <span class="text-xs font-extrabold text-brand-primary">Mola ${s.slot}</span>
        ${s.flavor ? `<span class="text-xs text-gray-500">— ${s.flavor}</span>` : ''}
      </div>
    `).join('');

    return `
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition"
           onclick="window.openProductModal(${product.id})">
        <!-- Badge + image row -->
        <div class="relative bg-gray-50 flex items-center gap-4 p-4">
          <div class="w-24 h-24 flex-shrink-0 rounded-xl bg-white flex items-center justify-center p-2 shadow-sm border border-gray-100">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain mix-blend-multiply drop-shadow-sm">
          </div>
          <div class="flex-1 min-w-0">
            <span class="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-full mb-1 ${promo.badgeColor}">${promo.badge}</span>
            <h3 class="text-sm font-bold text-gray-800 leading-snug">${product.name}</h3>
            <p class="text-xs text-brand-primary font-semibold mt-0.5">${promo.highlight}</p>
          </div>
        </div>
        <!-- Description -->
        <div class="px-4 pb-3 pt-1">
          <p class="text-xs text-gray-500 leading-relaxed mb-3">${promo.promoDescription}</p>
          <!-- Slots -->
          <div class="flex flex-wrap gap-1.5">${slotsHtml}</div>
          <!-- CTA -->
          <button class="mt-3 w-full text-xs font-bold text-brand-primary border border-brand-primary/30 bg-green-50 rounded-xl py-2 hover:bg-green-100 transition">
            Ver detalhes completos →
          </button>
        </div>
      </div>
    `;
  }).join('');
};

// Tab switching
window.switchTab = (tab) => {
  const mainPage = document.querySelector('main');
  const promoPage = document.getElementById('promo-page');
  const tabVitrine = document.getElementById('tab-vitrine');
  const tabPromos = document.getElementById('tab-promocoes');

  if (tab === 'vitrine') {
    mainPage.classList.remove('hidden');
    promoPage.classList.add('hidden');
    tabVitrine.classList.add('tab-active');
    tabPromos.classList.remove('tab-active');
  } else {
    mainPage.classList.add('hidden');
    promoPage.classList.remove('hidden');
    tabPromos.classList.add('tab-active');
    tabVitrine.classList.remove('tab-active');
    renderPromos();
  }
};

// Show badge on load if there are promotions
if (promotions.length > 0) {
  document.getElementById('promo-badge').classList.remove('hidden');
}
