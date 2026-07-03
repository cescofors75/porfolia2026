export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  sector: string;
  excerpt: string;
  stack: string[];
  challenge: string;
  solution: string;
  result: string;
  link?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "visittoo-apis-travel-tech",
    title: "APIs REST WhiteLabel para una plataforma de Travel Tech",
    client: "VisitToo.com",
    sector: "Travel Tech",
    excerpt: "Diseño e implementación de APIs REST WhiteLabel con Next.js y C#, integración de pasarelas de pago Stripe y Redsys, generación de PDFs dinámicos y despliegue continuo en Azure DevOps.",
    stack: ["Next.js", "C#", ".NET", "Stripe", "Redsys", "Azure DevOps"],
    challenge:
      "VisitToo necesitaba una arquitectura de APIs capaz de servir a múltiples marcas (WhiteLabel) desde una única base de código, procesando pagos con dos pasarelas distintas (Stripe para mercado internacional, Redsys para el mercado español) y generando documentación de viaje en PDF de forma dinámica para cada reserva.",
    solution:
      "Como desarrollador full stack, trabajando desde Girona, diseñé una capa de API REST en C#/.NET desacoplada del frontend en Next.js, con un sistema de configuración por marca que permite añadir nuevos clientes WhiteLabel sin duplicar lógica de negocio. Integré Stripe y Redsys detrás de una interfaz común de pagos, y automaticé la generación de PDFs de itinerarios y facturas. El pipeline de despliegue se gestiona íntegramente con Azure DevOps, con entornos separados de staging y producción.",
    result:
      "El resultado es una plataforma que soporta varias marcas de venta de experiencias de viaje con una única infraestructura, pagos fiables en ambas pasarelas y despliegues automatizados que reducen el tiempo de salida a producción de nuevas funcionalidades.",
    link: "https://visittoo.com",
  },
  {
    slug: "baco-ai-sommelier-virtual",
    title: "Baco AI: un sommelier virtual con IA y RAG",
    client: "Baco AI (proyecto propio)",
    sector: "IA & SaaS · Enoturismo",
    excerpt: "Servicio de IA para crear sommeliers virtuales personalizados mediante RAG (Retrieval-Augmented Generation) y embeddings dinámicos, pensado para bodegas y restaurantes.",
    stack: ["IA", "RAG", "Embeddings", "Next.js", "APIs LLM"],
    challenge:
      "Las recomendaciones de vino genéricas de un chatbot estándar no bastan para un maridaje serio: hace falta conocimiento específico de cada bodega, su carta y sus notas de cata, además de la capacidad de razonar sobre combinaciones de comida y vino en tiempo real.",
    solution:
      "Fundé y desarrollé Baco AI como consultoría e implementación de IA aplicada: una arquitectura RAG que indexa la carta de vinos y notas de cata de cada bodega o restaurante en una base de embeddings propia, de forma que el modelo de lenguaje responde con conocimiento real del catálogo del cliente en lugar de conocimiento genérico de internet. El proyecto fue reconocido y patrocinado por Microsoft Startup Founders Hub.",
    result:
      "Baco AI permite a bodegas y restaurantes ofrecer un sommelier virtual personalizado sin necesidad de reentrenar modelos, simplemente actualizando su base de conocimiento. Es el ejemplo de consultoría de IA aplicada a negocio que ofrezco a clientes de Girona y la Costa Brava con necesidades similares.",
    link: "https://baco.cat",
  },
  {
    slug: "red808-caja-ritmos-iot",
    title: "RED808: una caja de ritmos IoT open source",
    client: "Proyecto de I+D personal",
    sector: "IoT & Hardware",
    excerpt: "Diseño y firmware de una caja de ritmos distribuida en tres placas (ESP32-S3, ESP32-P4 y Daisy Seed), con interfaz web para gestionar stems de audio en tiempo real.",
    stack: ["C++", "ESP32-S3", "ESP32-P4", "Daisy Seed", "STM32H750", "LVGL", "JavaScript"],
    challenge:
      "Construir un instrumento musical IoT con procesamiento de audio profesional (DSP) y una interfaz gráfica táctil fluida exige repartir el trabajo entre varios microcontroladores especializados, y sincronizarlos con latencia mínima para que el resultado suene como un instrumento real, no como un prototipo.",
    solution:
      "Diseñé una arquitectura maestro-esclavo: el ESP32-S3 actúa como secuenciador maestro, el ESP32-P4 gestiona una interfaz LVGL como esclavo remoto, y un Daisy Seed con STM32H750 se encarga exclusivamente del DSP de audio en tiempo real. Todo el conjunto se controla también desde una UI web (StemsGroove) que permite gestionar los stems de cada patrón.",
    result:
      "RED808 es un proyecto de investigación y desarrollo propio, publicado en abierto en GitHub, que demuestra capacidad de ingeniería de software en sistemas embebidos, DSP de audio y arquitecturas distribuidas de hardware — más allá del desarrollo web tradicional.",
    link: "https://github.com/cescofors75/RedMaster-ESP32S3",
  },
  {
    slug: "toonjs-libreria-datos",
    title: "ToonJS: librería TypeScript para manipulación de datos tabulares",
    client: "Proyecto propio, publicado en NPM",
    sector: "Data Analytics · Open Source",
    excerpt: "Librería TypeScript de alto rendimiento con más de 60 métodos optimizados, cero dependencias externas y cobertura de tests del 100%.",
    stack: ["TypeScript", "NPM", "Testing"],
    challenge:
      "Las librerías de manipulación de datos tabulares en el ecosistema JavaScript suelen arrastrar dependencias pesadas o sacrificar rendimiento por comodidad de API, lo que las hace poco adecuadas para aplicaciones que necesitan procesar datos en el cliente sin penalizar el tamaño del bundle.",
    solution:
      "Desarrollé ToonJS desde cero en TypeScript, sin dependencias externas, con un conjunto de más de 60 métodos para filtrar, agrupar, transformar y agregar datos tabulares, y una suite de tests con cobertura completa antes de cada publicación en NPM.",
    result:
      "ToonJS está publicada en NPM y disponible como código abierto, con documentación propia en toonjs.dev, y sirve como base de datos analytics para otros proyectos propios y de clientes.",
    link: "https://www.npmjs.com/package/@cescofors/toonjs",
  },
];
