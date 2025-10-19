/**
 * main.js
 * Funcionalidades avançadas para o site Desperdício Zero:
 * 1. Sistema de Tradução (Português/Inglês)
 * 2. Modo Escuro/Claro (Dark/Light Mode)
 * 3. Menu Lateral (Sidebar/Hamburguer)
 * 4. Modal de Conteúdo Detalhado (Textos Aumentados e Limpos)
 * 5. Scroll Suave e Feedback Visual (Flash)
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log(
    ">>> Desperdício Zero: Inicialização completa. Textos e botão fixo aprimorados. ✅"
  );

  // Elementos do DOM
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  // ELEMENTOS DO SUMÁRIO/SIDEBAR
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarClose = document.getElementById("sidebar-close");
  const sidebarOverlay = document.getElementById("sidebar-overlay");

  const modalTriggers = document.querySelectorAll(".modal-trigger");
  const modal = document.getElementById("info-modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.querySelector(".modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.querySelector(".modal-body");

  // Elementos de Idioma
  const langToggle = document.getElementById("lang-toggle");
  const currentFlag = document.getElementById("current-flag");
  const langDropdown = document.getElementById("lang-dropdown");
  const langOptions = document.querySelectorAll(".lang-option");

  // Botão Principal do Hero
  const heroButton = document.querySelector(".hero .btn");

  /* -------------------------------------- */
  /* I. Dicionário de Tradução (Apenas Inglês e Modais) */
  /* -------------------------------------- */

  // Dicionário de Tradução (English) - O PT-BR usa o texto do HTML
  const translations = {
    "en-US": {
      pageTitle: "Zero Waste | Combatting Food Waste",
      navCausas: "Causes",
      navImpacto: "Impact",
      navSolucoes: "Solutions",
      navNoticias: "News",

      // Sumário
      sumarioTitle: "Detailed Summary",
      sumarioCausas: "Causes of Waste",
      sumarioImpacto: "Social and Environmental Impact",
      sumarioSolucoes: "Practical Solutions",
      sumarioPoliticas: "Public Policies",
      sumarioFatos: "Facts and Curiosities",
      sumarioAprofunde: "Deepen Knowledge",
      sumarioBtnProducao: "Production Losses (Visual)",
      sumarioBtnConsumo: "Domestic Waste (Guide)",

      // Hero Section
      heroTitle: "The Urgent Challenge of Food Waste in Brazil",
      heroText:
        "Discover the impact and ways to fight food loss in our country, where nearly 30% of production is wasted. Our portal provides data and solutions based on national references.",
      heroBtn: "Change Your Habits",

      // Causas Section
      causasTitle: "Main Causes of Waste",
      causasCard1Title: "1. Losses in Harvest and Transport",
      causasCard1Text:
        "Brazil loses about 10 million tons annually in this phase due to inadequate handling, deficient logistics, and discarding items that do not fit aesthetic standards.",
      causasCard2Title: "2. Failures in Retail and Distribution",
      causasCard2Text:
        "At points of sale, large volumes of fresh food are discarded due to reasons like excess stock, storage damage, and inadequate turnover (FIFO rule).",
      causasCard3Title: "3. Waste in Final Consumption",
      causasCard3Text:
        "The largest volume of avoidable losses occurs in the consumer's home, reaching 30% of the total in the country, due to unplanned purchases and incorrect storage.",
      causasEstatistica:
        "Central Statistic: Brazil loses about 27 million tons of food per year. This amount is enough to feed the country for months.",
      causasFonte1: "Source: WRI Brazil (Official Information)",
      causasFonte2: "Source: Embrapa (Official Information)",

      // Consequências Section
      consequenciasTitle: "The Dual Impact: Social and Environmental",
      consequenciasCard1Title: "1. Food Insecurity Crisis",
      consequenciasCard1Text:
        "Discarded food could feed over 13 million Brazilians in extreme hunger. Waste is a cruel mirror of social inequality.",
      consequenciasCard2Title: "2. Emissions and Climate Change",
      consequenciasCard2Text:
        "When organic waste goes to landfills, it generates methane gas (CH4), a greenhouse gas 25 times more potent than CO2. By fighting waste, we fight global warming.",

      // Soluções Section
      solucoesTitle: "Be the Solution: Practical Actions",
      solucoesCard1Title: "Weekly Planning",
      solucoesCard1Text:
        "Make a list and organize the refrigerator. Use the First Expires, First Out (FEFO) rule.",
      solucoesCard2Title: "Integral Cooking",
      solucoesCard2Text:
        "Use peels, stalks, and seeds integrally in recipes. Leftovers become lunch the next day.",
      solucoesCard3Title: "Support Food Banks",
      solucoesCard3Text:
        "Law 14.016/2020 protects food donors. Support the donation of surplus in good condition.",
      solucoesCard4Title: "Composting",
      solucoesCard4Text:
        "Transform inevitable organic waste into fertilizer, drastically reducing landfill waste.",

      // CONTEÚDO EXTRA - DETALHADO (INGLÊS)
      politicasText:
        "The fight against food waste is strongly supported by national and international public policies. Brazil's Law 14.016/2020 facilitates and encourages the donation of surplus food in good condition by businesses, providing legal safety to donors. Globally, the UN's Agenda 2030, through Sustainable Development Goal (SDG) 12.3, sets the ambitious target of halving per capita global food waste at the retail and consumer levels by 2030, and reducing food losses along production and supply chains. These policies require cooperation between the government, private sector, and civil society.",
      noticiasText:
        "Successful cases in Brazil are demonstrating innovative ways to combat food waste. Food Bank projects act as crucial intermediaries, receiving surpluses from the food industry and distributing them to charities. The 'Comida Invisível' (Invisible Food) platform, for example, connects companies with surplus food directly to social institutions, efficiently redistributing items that would otherwise be discarded. These initiatives are essential not only for reducing waste but also for promoting social equity.",
      curiosidadesText:
        "The waste of water used in agriculture is one of the most significant hidden costs of food loss. Approximately 70% of the world's fresh water is used for agriculture. When food is discarded, all the water (known as 'virtual water') used to produce, transport, and process that item is also wasted. Furthermore, the land area dedicated to growing food that ends up in the trash is larger than the surface area of many countries combined. Fighting waste is, therefore, a fundamental action for protecting water resources and biodiversity.",

      modalDefaultTitle: "Detailed Information",
      modalDefaultText: "The content will be injected by JavaScript.",
      modalDefaultSource: "Sources: Variable.",
    },
  };

  // Conteúdo Detalhado para os Modais (PT-BR EXPANDIDO E LIMPO DE **)
  const modalContentPT = {
    producao: {
      title: "Perdas na Produção e Logística",
      body: "<p>As perdas primárias (na colheita) e as perdas logísticas representam a maior parte do desperdício de alimentos no Brasil em termos de volume e valor. Este problema complexo surge de vários fatores ao longo da cadeia de abastecimento, antes mesmo de o alimento chegar ao varejo.</p><ul><li>Padrões Estéticos Rígidos: O descarte ocorre com frequência para frutas e vegetais que possuem formatos ou cores 'imperfeitas', mas que estão nutricionalmente intactos. As grandes redes de varejo impõem padrões visuais altos, resultando em milhões de toneladas rejeitadas no campo.</li><li>Infraestrutura e Logística: A deficiência em estradas, a falta de veículos refrigerados adequados e o manuseio manual inadequado durante o transporte causam danos físicos e deterioração, especialmente em produtos perecíveis.</li><li>Manejo Incorreto e Doenças: Técnicas de colheita ou embalagem inadequadas, juntamente com a dificuldade de controle de pragas e doenças, levam ao descarte de grandes lotes.</li></ul><p>O foco principal para a redução deve ser o aprimoramento da infraestrutura de armazenamento e transporte, bem como a sensibilização do mercado para aceitar alimentos com aparência atípica.</p>",
      source:
        "Fontes: CONAB (Companhia Nacional de Abastecimento), Embrapa (Empresa Brasileira de Pesquisa Agropecuária) e estudos de Cadeia Logística.",
    },
    consumo: {
      title: "Guia Rápido: Desperdício Doméstico",
      body: "<p>O maior volume de perdas evitáveis ocorre na casa do consumidor. Pequenas mudanças de hábito podem gerar um grande impacto econômico e ambiental. Evitar o desperdício doméstico é um ato de cidadania.</p><ol><li>Planejamento Inteligente: Faça um inventário completo dos alimentos que você já tem em casa (armário e geladeira) antes de ir às compras. Use listas e compre apenas o necessário, evitando promoções em grandes volumes de perecíveis que você não consumirá a tempo.</li><li>Armazenamento Estratégico: Conheça as melhores práticas para guardar cada tipo de alimento. Armazene frutas e vegetais em locais adequados (como cebola e batata fora da geladeira; tomate fora da geladeira até amadurecer). Use a regra PVPS (Primeiro que Vence, Primeiro que Sai) na sua geladeira e despensa.</li><li>Culinária de Aproveitamento Total: Torne-se criativo na cozinha. Use cascas, talos, folhas e sementes em caldos, farofas e vitaminas. Transforme sobras do jantar em ingredientes para o almoço do dia seguinte. O congelamento rápido também é um grande aliado para preservar refeições prontas.</li></ol>",
      source:
        "Fontes: Ministério da Cidadania, Guia Prático Desperdício Zero (ONU Brasil) e manuais de Segurança Alimentar.",
    },
  };

  // Conteúdo Detalhado para os Modais (EN-US EXPANDIDO E LIMPO DE **)
  const modalContentEN = {
    producao: {
      title: "Losses in Production and Logistics",
      body: "<p>Primary losses (at harvest) and logistical losses represent the largest share of food waste in Brazil in terms of both volume and value. This complex issue arises from several factors along the supply chain, even before the food reaches retail.</p><ul><li>Strict Aesthetic Standards: Discarding occurs frequently for fruits and vegetables that have 'imperfect' shapes or colors but are nutritionally intact. Large retail chains impose high visual standards, resulting in millions of tons rejected in the field.</li><li>Infrastructure and Logistics: Deficiencies in roads, lack of adequate refrigerated vehicles, and improper manual handling during transport cause physical damage and deterioration, especially to perishable products.</li><li>Incorrect Management and Diseases: Inadequate harvesting or packaging techniques, coupled with difficulty in controlling pests and diseases, lead to the discarding of large batches.</li></ul><p>The main focus for reduction must be the improvement of storage and transport infrastructure, as well as raising market awareness to accept food with an atypical appearance.</p>",
      source:
        "Sources: CONAB (National Supply Company), Embrapa (Brazilian Agricultural Research Corporation), and Logistics Chain studies.",
    },
    consumo: {
      title: "Quick Guide: Domestic Waste",
      body: "<p>The largest volume of avoidable losses occurs in the consumer's home. Small changes in habits can generate a great economic and environmental impact. Avoiding domestic waste is an act of citizenship.</p><ol><li>Smart Planning: Take a complete inventory of the food you already have at home (pantry and refrigerator) before going shopping. Use lists and buy only what is necessary, avoiding promotions on large volumes of perishables that you won't consume in time.</li><li>Strategic Storage: Learn the best practices for storing each type of food. Store fruits and vegetables in appropriate locations (like onion and potato outside the refrigerator; tomato outside until ripe). Use the FEFO (First Expires, First Out) rule in your refrigerator and pantry.</li><li>Total Utilization Cooking: Get creative in the kitchen. Use peels, stalks, leaves, and seeds in broths, farofas (toasted manioc flour), and smoothies. Turn dinner leftovers into ingredients for the next day's lunch. Quick freezing is also a great ally for preserving ready meals.</li></ol>",
      source:
        "Sources: Ministry of Citizenship, Zero Waste Practical Guide (UN Brazil), and Food Safety manuals.",
    },
  };

  // Função para aplicar a tradução ao DOM
  const applyTranslation = (lang) => {
    const langData = translations[lang];
    body.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key");

      // Lógica para PT-BR: restaura o texto original do HTML
      if (lang === "pt-BR") {
        if (key === "pageTitle") {
          document.title =
            "Desperdício Zero | Combate ao Desperdício de Alimentos";
        } else if (element.dataset.originalText) {
          element.textContent = element.dataset.originalText;
        }

        // CONTEÚDO EXTRA DETALHADO (PT-BR)
        if (key === "politicasText") {
          element.innerHTML =
            "O combate ao desperdício de alimentos é fortemente amparado por políticas públicas nacionais e internacionais. A Lei 14.016/2020 brasileira facilita e incentiva a doação de excedentes de alimentos em boas condições por empresas, dando segurança jurídica aos doadores. Globalmente, a Agenda 2030 da ONU, através do Objetivo de Desenvolvimento Sustentável (ODS) 12.3, estabelece a meta ambiciosa de reduzir pela metade o desperdício global de alimentos per capita nos níveis de varejo e consumidor até 2030, e reduzir as perdas ao longo das cadeias de produção e suprimento. Tais políticas exigem cooperação entre governo, setor privado e sociedade civil.";
        } else if (key === "noticiasText") {
          element.innerHTML =
            "Casos de sucesso no Brasil demonstram formas inovadoras de combater o desperdício. Os projetos de Bancos de Alimentos atuam como intermediários cruciais, recebendo excedentes da indústria e do comércio de alimentos e distribuindo-os a instituições de caridade. A plataforma 'Comida Invisível', por exemplo, conecta empresas com excedentes de alimentos diretamente a instituições sociais, redistribuindo de forma eficiente itens que seriam descartados. Estas iniciativas são essenciais não só para a redução do desperdício, mas também para a promoção da equidade social.";
        } else if (key === "curiosidadesText") {
          element.innerHTML =
            "O desperdício da água utilizada na agricultura é um dos maiores custos ocultos da perda de alimentos. Cerca de 70% da água doce mundial é usada para a agricultura. Quando um alimento é descartado, toda a água (conhecida como 'água virtual') usada para produzir, transportar e processar aquele item também é desperdiçada. Além disso, a área de terra dedicada ao cultivo de alimentos que acabam no lixo é maior do que a área de superfície de muitos países somados. Combater o desperdício é, portanto, uma ação fundamental para a proteção dos recursos hídricos e da biodiversidade.";
        }

        return;
      }

      // Lógica para EN-US: traduz o texto
      if (langData && langData[key]) {
        // Guarda o texto original do HTML no primeiro uso
        if (!element.dataset.originalText) {
          element.dataset.originalText = element.textContent;
        }

        // Para links e seções detalhadas, usa innerHTML
        if (
          [
            "causasEstatistica",
            "causasFonte1",
            "causasFonte2",
            "politicasText",
            "noticiasText",
            "curiosidadesText",
          ].includes(key)
        ) {
          element.innerHTML = langData[key];
        } else {
          element.textContent = langData[key];
        }
      }
    });

    // Atualiza o EMOJI da bandeira no botão principal
    currentFlag.textContent = lang === "pt-BR" ? "🇧🇷" : "🇺🇸";

    document.title =
      lang === "pt-BR"
        ? "Desperdício Zero | Combate ao Desperdício de Alimentos"
        : translations["en-US"].pageTitle;
  };

  /* -------------------------------------- */
  /* 2. Modo Escuro/Claro (Dark/Light Mode) */
  /* -------------------------------------- */

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const setTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-mode");
      themeIcon.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      themeIcon.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = body.classList.contains("dark-mode")
      ? "light"
      : "dark";
    setTheme(currentTheme);
  });

  /* -------------------------------------- */
  /* 1.1. Inicialização do Idioma (e Listeners) */
  /* -------------------------------------- */

  const savedLang = localStorage.getItem("lang") || "pt-BR";
  applyTranslation(savedLang);

  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle("hidden");
  });

  langOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      const newLang = option.getAttribute("data-lang-value");
      applyTranslation(newLang);
      localStorage.setItem("lang", newLang);
      langDropdown.classList.add("hidden");
    });
  });

  document.addEventListener("click", () => {
    if (!langDropdown.classList.contains("hidden")) {
      langDropdown.classList.add("hidden");
    }
  });

  /* -------------------------------------- */
  /* 5. Scroll Suave e Feedback Visual (Flash) */
  /* -------------------------------------- */

  const scrollToTarget = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const headerHeight = document.querySelector(".header").offsetHeight;
    const offset = targetElement.offsetTop - headerHeight - 10;

    window.scrollTo({ top: offset, behavior: "smooth" });

    // Adiciona o efeito flash (piscar) após o scroll terminar
    setTimeout(() => {
      targetElement.classList.add("flash");

      setTimeout(() => {
        targetElement.classList.remove("flash");
      }, 500);
    }, 500); // Espera 500ms antes de iniciar o flash
  };

  // 5.1. Listener para o botão "Mude Seus Hábitos" (Hero)
  heroButton.addEventListener("click", (e) => scrollToTarget(e, "#solucoes"));

  /* -------------------------------------- */
  /* 3. Menu Lateral (Sidebar) */
  /* -------------------------------------- */

  const toggleSidebar = (open) => {
    sidebar.classList.toggle("visible", open);
    sidebarOverlay.classList.toggle("visible", open);
    body.style.overflow = open ? "hidden" : "";
  };

  // Listeners para abrir/fechar o sumário
  menuToggle.addEventListener("click", () => toggleSidebar(true));
  sidebarClose.addEventListener("click", () => toggleSidebar(false));
  sidebarOverlay.addEventListener("click", () => toggleSidebar(false));

  // 5.2. Listener para os links internos da sidebar (também com scroll suave)
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      toggleSidebar(false);
      const targetId = link.getAttribute("href");
      scrollToTarget(e, targetId); // Reutiliza a função de scroll suave
    });
  });

  /* -------------------------------------- */
  /* 4. Modal de Conteúdo Detalhado */
  /* -------------------------------------- */

  const closeModal = () => {
    modal.classList.remove("visible");
    modalBackdrop.classList.remove("visible");
    body.style.overflow = "";
  };

  const openModal = (type) => {
    const lang = body.getAttribute("data-lang");
    const content =
      lang === "pt-BR" ? modalContentPT[type] : modalContentEN[type];

    if (!content) {
      modalTitle.textContent = "Erro de Conteúdo";
      modalBody.innerHTML =
        "<p>Não foi possível carregar as informações detalhadas para este item.</p>";
      return;
    }

    modalTitle.textContent = content.title;
    // O conteúdo do corpo já vem com o HTML limpo e detalhado
    modalBody.innerHTML = content.body;
    document.querySelector(".modal-source").textContent = content.source;

    modal.classList.add("visible");
    modalBackdrop.classList.add("visible");
    body.style.overflow = "hidden";
  };

  const openModalHandler = function () {
    const modalType = this.getAttribute("data-modal");
    openModal(modalType);
  };

  // Adiciona o listener inicial
  modalTriggers.forEach((btn) => {
    btn.addEventListener("click", openModalHandler);
  });

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("visible")) {
      closeModal();
    }
  });
});
