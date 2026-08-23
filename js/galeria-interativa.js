/* ==========================================================================
   GALERIA INTERATIVA — Ricco Decor & Paisagismo
   Versão estática (JavaScript puro, sem dependências).
   Reproduz o componente React: carrossel de 5 cards com autoplay +
   modal flutuante navegável (visor + miniaturas) + lightbox de zoom.
   ========================================================================== */
(function () {
  'use strict';

  var raiz = document.getElementById('galeria-ricco');
  if (!raiz) return;

  /* ------------------------------------------------ Dados mock (5 álbuns) */
  var albuns = [
  {
    id: "galeria-de-ambientacao",
    titulo: "Galeria de Ambientação",
    descricao: "Composições, detalhes e ambientações dos eventos.",
    icone: "evento",
    capa: "images/galeria/Capas/Galeria de Ambientação.jpeg",
    subfotos: [
      {
        id: "galeria-de-ambientacao-1",
        url: "images/galeria/Galeria de Ambientação/IMG_8843.jpg",
        legenda: "Ambientação 01",
      },
      {
        id: "galeria-de-ambientacao-2",
        url: "images/galeria/Galeria de Ambientação/IMG_8854.jpg",
        legenda: "Ambientação 02",
      },
      {
        id: "galeria-de-ambientacao-3",
        url: "images/galeria/Galeria de Ambientação/IMG_8900.jpg",
        legenda: "Ambientação 03",
      },
      {
        id: "galeria-de-ambientacao-4",
        url: "images/galeria/Galeria de Ambientação/IMG_8906.jpg",
        legenda: "Ambientação 04",
      },
      {
        id: "galeria-de-ambientacao-5",
        url: "images/galeria/Galeria de Ambientação/IMG_8910.jpg",
        legenda: "Ambientação 05",
      },
      {
        id: "galeria-de-ambientacao-6",
        url: "images/galeria/Galeria de Ambientação/IMG_8911.jpg",
        legenda: "Ambientação 06",
      },
      {
        id: "galeria-de-ambientacao-7",
        url: "images/galeria/Galeria de Ambientação/IMG_8920.jpg",
        legenda: "Ambientação 07",
      },
      {
        id: "galeria-de-ambientacao-8",
        url: "images/galeria/Galeria de Ambientação/IMG_8944.jpg",
        legenda: "Ambientação 08",
      },
      {
        id: "galeria-de-ambientacao-9",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.24.36 (1).jpeg",
        legenda: "Ambientação 09",
      },
      {
        id: "galeria-de-ambientacao-10",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.24.36 (2).jpeg",
        legenda: "Ambientação 10",
      },
      {
        id: "galeria-de-ambientacao-11",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.24.36.jpeg",
        legenda: "Ambientação 11",
      },
      {
        id: "galeria-de-ambientacao-12",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.03 (2).jpeg",
        legenda: "Ambientação 12",
      },
      {
        id: "galeria-de-ambientacao-13",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.03 (3).jpeg",
        legenda: "Ambientação 13",
      },
      {
        id: "galeria-de-ambientacao-14",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.04 (1).jpeg",
        legenda: "Ambientação 14",
      },
      {
        id: "galeria-de-ambientacao-15",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.04 (2).jpeg",
        legenda: "Ambientação 15",
      },
      {
        id: "galeria-de-ambientacao-16",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.04.jpeg",
        legenda: "Ambientação 16",
      },
      {
        id: "galeria-de-ambientacao-17",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.05 (1).jpeg",
        legenda: "Ambientação 17",
      },
      {
        id: "galeria-de-ambientacao-18",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.05.jpeg",
        legenda: "Ambientação 18",
      },
      {
        id: "galeria-de-ambientacao-19",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.06 (1).jpeg",
        legenda: "Ambientação 19",
      },
      {
        id: "galeria-de-ambientacao-20",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.06.jpeg",
        legenda: "Ambientação 20",
      },
      {
        id: "galeria-de-ambientacao-21",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.08.jpeg",
        legenda: "Ambientação 21",
      },
      {
        id: "galeria-de-ambientacao-22",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.11 (1).jpeg",
        legenda: "Ambientação 22",
      },
      {
        id: "galeria-de-ambientacao-23",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.11 (2).jpeg",
        legenda: "Ambientação 23",
      },
      {
        id: "galeria-de-ambientacao-24",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.11.jpeg",
        legenda: "Ambientação 24",
      },
      {
        id: "galeria-de-ambientacao-25",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.12.jpeg",
        legenda: "Ambientação 25",
      },
      {
        id: "galeria-de-ambientacao-26",
        url: "images/galeria/Galeria de Ambientação/WhatsApp Image 2026-08-03 at 20.43.18.jpeg",
        legenda: "Ambientação 26",
      },
    ],
  },
  {
    id: "debutante",
    titulo: "Debutante",
    descricao: "Momentos e detalhes de festas de debutante.",
    icone: "pessoas",
    capa: "images/galeria/Capas/Debutante.jpeg",
    subfotos: [
      {
        id: "debutante-1",
        url: "images/galeria/debutante/WhatsApp Image 2026-08-12 at 21.20.28.jpeg",
        legenda: "Debutante 01",
      },
      {
        id: "debutante-2",
        url: "images/galeria/debutante/WhatsApp Image 2026-08-12 at 21.20.29 (1).jpeg",
        legenda: "Debutante 02",
      },
      {
        id: "debutante-3",
        url: "images/galeria/debutante/WhatsApp Image 2026-08-12 at 21.20.29.jpeg",
        legenda: "Debutante 03",
      },
      {
        id: "debutante-4",
        url: "images/galeria/debutante/WhatsApp Image 2026-08-12 at 21.20.31.jpeg",
        legenda: "Debutante 04",
      },
      {
        id: "debutante-5",
        url: "images/galeria/debutante/WhatsApp Image 2026-08-12 at 21.20.59.jpeg",
        legenda: "Debutante 05",
      },
    ],
  },
  {
    id: "viviane-thiago",
    titulo: "Viviane & Thiago",
    descricao: "Álbum do casamento de Viviane & Thiago.",
    icone: "pessoas",
    capa: "images/galeria/Capas/Viviane & Thiago.jpeg",
    subfotos: [
      {
        id: "viviane-thiago-1",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.20.59.jpeg",
        legenda: "Viviane & Thiago 01",
      },
      {
        id: "viviane-thiago-2",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.00.jpeg",
        legenda: "Viviane & Thiago 02",
      },
      {
        id: "viviane-thiago-3",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.03.jpeg",
        legenda: "Viviane & Thiago 03",
      },
      {
        id: "viviane-thiago-4",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.04 (1).jpeg",
        legenda: "Viviane & Thiago 04",
      },
      {
        id: "viviane-thiago-5",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.04 (2).jpeg",
        legenda: "Viviane & Thiago 05",
      },
      {
        id: "viviane-thiago-6",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.04.jpeg",
        legenda: "Viviane & Thiago 06",
      },
      {
        id: "viviane-thiago-7",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.05 (1).jpeg",
        legenda: "Viviane & Thiago 07",
      },
      {
        id: "viviane-thiago-8",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.05 (2).jpeg",
        legenda: "Viviane & Thiago 08",
      },
      {
        id: "viviane-thiago-9",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.05.jpeg",
        legenda: "Viviane & Thiago 09",
      },
      {
        id: "viviane-thiago-10",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.06.jpeg",
        legenda: "Viviane & Thiago 10",
      },
      {
        id: "viviane-thiago-11",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.08 (1).jpeg",
        legenda: "Viviane & Thiago 11",
      },
      {
        id: "viviane-thiago-12",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.08.jpeg",
        legenda: "Viviane & Thiago 12",
      },
      {
        id: "viviane-thiago-13",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.09 (1).jpeg",
        legenda: "Viviane & Thiago 13",
      },
      {
        id: "viviane-thiago-14",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.09.jpeg",
        legenda: "Viviane & Thiago 14",
      },
      {
        id: "viviane-thiago-15",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.10 (1).jpeg",
        legenda: "Viviane & Thiago 15",
      },
      {
        id: "viviane-thiago-16",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.10 (2).jpeg",
        legenda: "Viviane & Thiago 16",
      },
      {
        id: "viviane-thiago-17",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.10.jpeg",
        legenda: "Viviane & Thiago 17",
      },
      {
        id: "viviane-thiago-18",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.11.jpeg",
        legenda: "Viviane & Thiago 18",
      },
      {
        id: "viviane-thiago-19",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.12 (1).jpeg",
        legenda: "Viviane & Thiago 19",
      },
      {
        id: "viviane-thiago-20",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.12 (2).jpeg",
        legenda: "Viviane & Thiago 20",
      },
      {
        id: "viviane-thiago-21",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.12.jpeg",
        legenda: "Viviane & Thiago 21",
      },
      {
        id: "viviane-thiago-22",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.13.jpeg",
        legenda: "Viviane & Thiago 22",
      },
      {
        id: "viviane-thiago-23",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.14 (1).jpeg",
        legenda: "Viviane & Thiago 23",
      },
      {
        id: "viviane-thiago-24",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.14.jpeg",
        legenda: "Viviane & Thiago 24",
      },
      {
        id: "viviane-thiago-25",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.15 (1).jpeg",
        legenda: "Viviane & Thiago 25",
      },
      {
        id: "viviane-thiago-26",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.15 (2).jpeg",
        legenda: "Viviane & Thiago 26",
      },
      {
        id: "viviane-thiago-27",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.15.jpeg",
        legenda: "Viviane & Thiago 27",
      },
      {
        id: "viviane-thiago-28",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.16.jpeg",
        legenda: "Viviane & Thiago 28",
      },
      {
        id: "viviane-thiago-29",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.17 (1).jpeg",
        legenda: "Viviane & Thiago 29",
      },
      {
        id: "viviane-thiago-30",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.17.jpeg",
        legenda: "Viviane & Thiago 30",
      },
      {
        id: "viviane-thiago-31",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.18 (1).jpeg",
        legenda: "Viviane & Thiago 31",
      },
      {
        id: "viviane-thiago-32",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.18 (2).jpeg",
        legenda: "Viviane & Thiago 32",
      },
      {
        id: "viviane-thiago-33",
        url: "images/galeria/Viviane & Thiago/WhatsApp Image 2026-08-12 at 21.21.18.jpeg",
        legenda: "Viviane & Thiago 33",
      },
    ],
  },
  {
    id: "nayara-roger",
    titulo: "Nayara & Roger",
    descricao: "Álbum do casamento de Nayara & Roger.",
    icone: "pessoas",
    capa: "images/galeria/Capas/Nayara & Roger.jpeg",
    subfotos: [
      {
        id: "nayara-roger-1",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.13.jpeg",
        legenda: "Nayara & Roger 01",
      },
      {
        id: "nayara-roger-2",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.14 (1).jpeg",
        legenda: "Nayara & Roger 02",
      },
      {
        id: "nayara-roger-3",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.14 (2).jpeg",
        legenda: "Nayara & Roger 03",
      },
      {
        id: "nayara-roger-4",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.14.jpeg",
        legenda: "Nayara & Roger 04",
      },
      {
        id: "nayara-roger-5",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.15 (1).jpeg",
        legenda: "Nayara & Roger 05",
      },
      {
        id: "nayara-roger-6",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.15 (2).jpeg",
        legenda: "Nayara & Roger 06",
      },
      {
        id: "nayara-roger-7",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.15.jpeg",
        legenda: "Nayara & Roger 07",
      },
      {
        id: "nayara-roger-8",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.17.jpeg",
        legenda: "Nayara & Roger 08",
      },
      {
        id: "nayara-roger-9",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.18 (1).jpeg",
        legenda: "Nayara & Roger 09",
      },
      {
        id: "nayara-roger-10",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.18.jpeg",
        legenda: "Nayara & Roger 10",
      },
      {
        id: "nayara-roger-11",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.19 (1).jpeg",
        legenda: "Nayara & Roger 11",
      },
      {
        id: "nayara-roger-12",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.19 (2).jpeg",
        legenda: "Nayara & Roger 12",
      },
      {
        id: "nayara-roger-13",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.19 (3).jpeg",
        legenda: "Nayara & Roger 13",
      },
      {
        id: "nayara-roger-14",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.19.jpeg",
        legenda: "Nayara & Roger 14",
      },
      {
        id: "nayara-roger-15",
        url: "images/galeria/Nayara & Roger/WhatsApp Image 2026-08-12 at 21.30.20.jpeg",
        legenda: "Nayara & Roger 15",
      },
    ],
  },
  {
    id: "pricila-thiago",
    titulo: "Pricila e Thiago",
    descricao: "Álbum do casamento de Pricila e Thiago.",
    icone: "pessoas",
    capa: "images/galeria/Capas/Pricila & Thiago.jpeg",
    subfotos: [
      {
        id: "pricila-thiago-1",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.21.20.jpeg",
        legenda: "Pricila e Thiago 01",
      },
      {
        id: "pricila-thiago-2",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.21.21 (1).jpeg",
        legenda: "Pricila e Thiago 02",
      },
      {
        id: "pricila-thiago-3",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.21.21 (2).jpeg",
        legenda: "Pricila e Thiago 03",
      },
      {
        id: "pricila-thiago-4",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.21.21 (3).jpeg",
        legenda: "Pricila e Thiago 04",
      },
      {
        id: "pricila-thiago-5",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.21.21.jpeg",
        legenda: "Pricila e Thiago 05",
      },
      {
        id: "pricila-thiago-6",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.09.jpeg",
        legenda: "Pricila e Thiago 06",
      },
      {
        id: "pricila-thiago-7",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.10 (1).jpeg",
        legenda: "Pricila e Thiago 07",
      },
      {
        id: "pricila-thiago-8",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.10 (2).jpeg",
        legenda: "Pricila e Thiago 08",
      },
      {
        id: "pricila-thiago-9",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.10.jpeg",
        legenda: "Pricila e Thiago 09",
      },
      {
        id: "pricila-thiago-10",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.12 (1).jpeg",
        legenda: "Pricila e Thiago 10",
      },
      {
        id: "pricila-thiago-11",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.12 (2).jpeg",
        legenda: "Pricila e Thiago 11",
      },
      {
        id: "pricila-thiago-12",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.12.jpeg",
        legenda: "Pricila e Thiago 12",
      },
      {
        id: "pricila-thiago-13",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.13 (1).jpeg",
        legenda: "Pricila e Thiago 13",
      },
      {
        id: "pricila-thiago-14",
        url: "images/galeria/Pricila e Thiago/WhatsApp Image 2026-08-12 at 21.30.13.jpeg",
        legenda: "Pricila e Thiago 14",
      },
    ],
  },
  {
    id: "mesas-arranjos",
    titulo: "Mesas & Arranjos",
    descricao: "Mesas decoradas, arranjos florais e detalhes de composição.",
    icone: "evento",
    capa: "images/galeria/Capas/Mesas & Arranjos.jpeg",
    subfotos: [
      {
        id: "mesas-arranjos-1",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.20 (1).jpeg",
        legenda: "Mesas & Arranjos 01",
      },
      {
        id: "mesas-arranjos-2",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.20.jpeg",
        legenda: "Mesas & Arranjos 02",
      },
      {
        id: "mesas-arranjos-3",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.21 (1).jpeg",
        legenda: "Mesas & Arranjos 03",
      },
      {
        id: "mesas-arranjos-4",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.21.jpeg",
        legenda: "Mesas & Arranjos 04",
      },
      {
        id: "mesas-arranjos-5",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.22.jpeg",
        legenda: "Mesas & Arranjos 05",
      },
      {
        id: "mesas-arranjos-6",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.23 (1).jpeg",
        legenda: "Mesas & Arranjos 06",
      },
      {
        id: "mesas-arranjos-7",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.23.jpeg",
        legenda: "Mesas & Arranjos 07",
      },
      {
        id: "mesas-arranjos-8",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.24 (1).jpeg",
        legenda: "Mesas & Arranjos 08",
      },
      {
        id: "mesas-arranjos-9",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.24.jpeg",
        legenda: "Mesas & Arranjos 09",
      },
      {
        id: "mesas-arranjos-10",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.25.jpeg",
        legenda: "Mesas & Arranjos 10",
      },
      {
        id: "mesas-arranjos-11",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.26 (1).jpeg",
        legenda: "Mesas & Arranjos 11",
      },
      {
        id: "mesas-arranjos-12",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.26 (2).jpeg",
        legenda: "Mesas & Arranjos 12",
      },
      {
        id: "mesas-arranjos-13",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.26 (3).jpeg",
        legenda: "Mesas & Arranjos 13",
      },
      {
        id: "mesas-arranjos-14",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.26.jpeg",
        legenda: "Mesas & Arranjos 14",
      },
      {
        id: "mesas-arranjos-15",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.27 (1).jpeg",
        legenda: "Mesas & Arranjos 15",
      },
      {
        id: "mesas-arranjos-16",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.27.jpeg",
        legenda: "Mesas & Arranjos 16",
      },
      {
        id: "mesas-arranjos-17",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.28 (1).jpeg",
        legenda: "Mesas & Arranjos 17",
      },
      {
        id: "mesas-arranjos-18",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.28.jpeg",
        legenda: "Mesas & Arranjos 18",
      },
      {
        id: "mesas-arranjos-19",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.31 (1).jpeg",
        legenda: "Mesas & Arranjos 19",
      },
      {
        id: "mesas-arranjos-20",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.31.jpeg",
        legenda: "Mesas & Arranjos 20",
      },
      {
        id: "mesas-arranjos-21",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.32.jpeg",
        legenda: "Mesas & Arranjos 21",
      },
      {
        id: "mesas-arranjos-22",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.33 (1).jpeg",
        legenda: "Mesas & Arranjos 22",
      },
      {
        id: "mesas-arranjos-23",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.33 (2).jpeg",
        legenda: "Mesas & Arranjos 23",
      },
      {
        id: "mesas-arranjos-24",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.33 (3).jpeg",
        legenda: "Mesas & Arranjos 24",
      },
      {
        id: "mesas-arranjos-25",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.33.jpeg",
        legenda: "Mesas & Arranjos 25",
      },
      {
        id: "mesas-arranjos-26",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.34 (1).jpeg",
        legenda: "Mesas & Arranjos 26",
      },
      {
        id: "mesas-arranjos-27",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.34 (2).jpeg",
        legenda: "Mesas & Arranjos 27",
      },
      {
        id: "mesas-arranjos-28",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.34.jpeg",
        legenda: "Mesas & Arranjos 28",
      },
      {
        id: "mesas-arranjos-29",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.35 (1).jpeg",
        legenda: "Mesas & Arranjos 29",
      },
      {
        id: "mesas-arranjos-30",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.35 (2).jpeg",
        legenda: "Mesas & Arranjos 30",
      },
      {
        id: "mesas-arranjos-31",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.35 (3).jpeg",
        legenda: "Mesas & Arranjos 31",
      },
      {
        id: "mesas-arranjos-32",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.35.jpeg",
        legenda: "Mesas & Arranjos 32",
      },
      {
        id: "mesas-arranjos-33",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.36 (1).jpeg",
        legenda: "Mesas & Arranjos 33",
      },
      {
        id: "mesas-arranjos-34",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.36 (2).jpeg",
        legenda: "Mesas & Arranjos 34",
      },
      {
        id: "mesas-arranjos-35",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.37 (1).jpeg",
        legenda: "Mesas & Arranjos 35",
      },
      {
        id: "mesas-arranjos-36",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.37.jpeg",
        legenda: "Mesas & Arranjos 36",
      },
      {
        id: "mesas-arranjos-37",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.39.jpeg",
        legenda: "Mesas & Arranjos 37",
      },
      {
        id: "mesas-arranjos-38",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.40 (2).jpeg",
        legenda: "Mesas & Arranjos 38",
      },
      {
        id: "mesas-arranjos-39",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.41 (1).jpeg",
        legenda: "Mesas & Arranjos 39",
      },
      {
        id: "mesas-arranjos-40",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.41.jpeg",
        legenda: "Mesas & Arranjos 40",
      },
      {
        id: "mesas-arranjos-41",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.42 (1).jpeg",
        legenda: "Mesas & Arranjos 41",
      },
      {
        id: "mesas-arranjos-42",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.42.jpeg",
        legenda: "Mesas & Arranjos 42",
      },
      {
        id: "mesas-arranjos-43",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.43 (1).jpeg",
        legenda: "Mesas & Arranjos 43",
      },
      {
        id: "mesas-arranjos-44",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.43.jpeg",
        legenda: "Mesas & Arranjos 44",
      },
      {
        id: "mesas-arranjos-45",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.45.jpeg",
        legenda: "Mesas & Arranjos 45",
      },
      {
        id: "mesas-arranjos-46",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.46 (1).jpeg",
        legenda: "Mesas & Arranjos 46",
      },
      {
        id: "mesas-arranjos-47",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.46 (2).jpeg",
        legenda: "Mesas & Arranjos 47",
      },
      {
        id: "mesas-arranjos-48",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.46.jpeg",
        legenda: "Mesas & Arranjos 48",
      },
      {
        id: "mesas-arranjos-49",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.47 (1).jpeg",
        legenda: "Mesas & Arranjos 49",
      },
      {
        id: "mesas-arranjos-50",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.47 (2).jpeg",
        legenda: "Mesas & Arranjos 50",
      },
      {
        id: "mesas-arranjos-51",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.47.jpeg",
        legenda: "Mesas & Arranjos 51",
      },
      {
        id: "mesas-arranjos-52",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.48 (1).jpeg",
        legenda: "Mesas & Arranjos 52",
      },
      {
        id: "mesas-arranjos-53",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.48.jpeg",
        legenda: "Mesas & Arranjos 53",
      },
      {
        id: "mesas-arranjos-54",
        url: "images/galeria/Mesas & Arranjos/WhatsApp Image 2026-08-12 at 21.30.49.jpeg",
        legenda: "Mesas & Arranjos 54",
      },
    ],
  },
];

  var TOTAL = albuns.length;
  var indiceAtivo = 0;
  var autoplayLigado = true;
  var timerAutoplay = null;

  /* ------------------------------------------------ Ícones SVG */
  var SVG = {
    setaEsq:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',
    setaDir:
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 6 15 12 9 18"/></svg>',
    fechar:
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    pausa:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16" rx="1.2"/><rect x="14" y="4" width="4" height="16" rx="1.2"/></svg>',
    play:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.86l11.08-6.86a1 1 0 0 0 0-1.72L9.52 4.28A1 1 0 0 0 8 5.14Z"/></svg>'
  };

  function esc(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* ------------------------------------------------ Templates do carrossel */
  function variacaoDo(offset) {
    if (offset === 0) return 'central';
    if (offset === 1) return 'direita';
    if (offset === TOTAL - 1) return 'esquerda';
    if (offset === 2) return 'fundo-direita';
    if (offset === TOTAL - 2) return 'fundo-esquerda';
    return 'oculto';
  }

  function cardHTML(album, i) {
    var offset = (i - indiceAtivo + TOTAL) % TOTAL;
    var variacao = variacaoDo(offset);
    return (
      '<article class="galeria__card galeria__card--' + variacao + '" data-indice="' + i + '" data-central="' + (variacao === 'central') + '">' +
        '<div class="galeria__card-media">' +
          '<img class="galeria__card-img" src="' + album.capa + '" alt="Capa do álbum ' + esc(album.titulo) + '" loading="lazy">' +
          '<div class="galeria__card-corpo">' +
            '<h3 class="galeria__card-titulo">' + esc(album.titulo) + '</h3>' +
            '<button type="button" class="galeria__card-ver" data-abrir="' + i + '">Ver fotos</button>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function dotsHTML() {
    var html = '';
    for (var i = 0; i < TOTAL; i++) {
      html +=
        '<button type="button" class="carrossel__dot' + (i === indiceAtivo ? ' carrossel__dot--ativo' : '') + '"' +
        ' data-indice="' + i + '"' +
        ' aria-label="Ver álbum ' + esc(albuns[i].titulo) + '"' +
        (i === indiceAtivo ? ' aria-current="true"' : '') +
        '></button>';
    }
    return html;
  }

  function controlesHTML() {
    return (
      '<div class="carrossel__controles">' +
        '<div class="carrossel__dots" role="group" aria-label="Selecionar álbum">' + dotsHTML() + '</div>' +
        '<button type="button" class="carrossel__pause" data-pause' +
        ' aria-pressed="' + autoplayLigado + '"' +
        ' aria-label="' + (autoplayLigado ? 'Pausar autoplay' : 'Ativar autoplay') + '"' +
        ' title="' + (autoplayLigado ? 'Pausar autoplay' : 'Ativar autoplay') + '">' +
        (autoplayLigado ? SVG.pausa : SVG.play) +
        '</button>' +
      '</div>'
    );
  }

  function render() {
    var palco = '';
    for (var i = 0; i < TOTAL; i++) palco += cardHTML(albuns[i], i);

    raiz.innerHTML =
      '<section class="galeria" aria-labelledby="galeria-titulo">' +
        '<header class="galeria__cabecalho">' +
          '<h2 id="galeria-titulo" class="galeria__titulo">Galeria</h2>' +
        '</header>' +
        '<div class="carrossel" role="group" aria-roledescription="carrossel" aria-label="Álbuns da galeria">' +
          '<div class="carrossel__palco">' + palco + '</div>' +
          '<button type="button" class="carrossel__seta carrossel__seta--anterior" data-seta="-1" aria-label="Álbum anterior">' + SVG.setaEsq + '</button>' +
          '<button type="button" class="carrossel__seta carrossel__seta--proxima" data-seta="1" aria-label="Próximo álbum">' + SVG.setaDir + '</button>' +
          controlesHTML() +
        '</div>' +
      '</section>';
    atualizarAutoplay();
  }

  /* ------------------------------------------------ Modal (visor + lightbox) */
  var estadoModal = { albumIndice: 0, fotoAtiva: 0, ampliada: false };

  function miniaturasHTML(album, fotoAtiva) {
    var html = '';
    for (var i = 0; i < album.subfotos.length; i++) {
      var f = album.subfotos[i];
      html +=
        '<button type="button" class="galeria-modal__miniatura' + (i === fotoAtiva ? ' galeria-modal__miniatura--ativa' : '') + '"' +
        ' data-miniatura="' + i + '"' +
        ' aria-label="Ver foto: ' + esc(f.legenda) + '"' +
        (i === fotoAtiva ? ' aria-current="true"' : '') +
        '><img src="' + f.url + '" alt=""></button>';
    }
    return html;
  }

  function modalHTML(album, fotoAtiva, ampliada) {
    var fotos = album.subfotos;
    var foto = fotos[fotoAtiva];
    var total = fotos.length;

    var janela =
      '<div class="galeria-modal__janela" role="dialog" aria-modal="true" aria-labelledby="galeria-modal-titulo">' +
        '<button type="button" class="galeria-modal__fechar" data-fechar aria-label="Fechar galeria">' + SVG.fechar + '</button>' +
        '<header class="galeria-modal__cabecalho">' +
          '<h3 id="galeria-modal-titulo" class="galeria-modal__titulo">' + esc(album.titulo) + '</h3>' +
          '<p class="galeria-modal__contador" aria-live="polite">Foto ' + (fotoAtiva + 1) + ' de ' + total + '</p>' +
        '</header>' +
        '<div class="galeria-modal__visor">' +
          '<button type="button" class="galeria-modal__seta galeria-modal__seta--anterior" data-modal-seta="-1" aria-label="Foto anterior">' + SVG.setaEsq + '</button>' +
          '<button type="button" class="galeria-modal__zoom" data-ampliar aria-label="Ampliar foto: ' + esc(foto.legenda) + '">' +
            '<figure class="galeria-modal__figura">' +
              '<img class="galeria-modal__img" src="' + foto.url + '" alt="' + esc(foto.legenda) + '">' +
              '<figcaption class="galeria-modal__legenda">' + esc(foto.legenda) + '</figcaption>' +
            '</figure>' +
          '</button>' +
          '<button type="button" class="galeria-modal__seta galeria-modal__seta--proxima" data-modal-seta="1" aria-label="Próxima foto">' + SVG.setaDir + '</button>' +
        '</div>' +
        '<div class="galeria-modal__miniaturas" role="group" aria-label="Miniaturas do álbum">' + miniaturasHTML(album, fotoAtiva) + '</div>' +
      '</div>';

    var lightbox = '';
    if (ampliada) {
      lightbox =
        '<div class="galeria-lightbox__overlay" data-fechar-ampliada>' +
          '<div class="galeria-lightbox__janela">' +
            '<button type="button" class="galeria-lightbox__fechar" data-fechar-ampliada aria-label="Fechar foto ampliada">' + SVG.fechar + '</button>' +
            '<button type="button" class="galeria-lightbox__seta galeria-lightbox__seta--anterior" data-modal-seta="-1" aria-label="Foto anterior">' + SVG.setaEsq + '</button>' +
            '<figure class="galeria-lightbox__figura">' +
              '<img src="' + foto.url + '" alt="' + esc(foto.legenda) + '">' +
              '<figcaption class="galeria-lightbox__legenda">' + esc(foto.legenda) + ' · ' + (fotoAtiva + 1) + ' / ' + total + '</figcaption>' +
            '</figure>' +
            '<button type="button" class="galeria-lightbox__seta galeria-lightbox__seta--proxima" data-modal-seta="1" aria-label="Próxima foto">' + SVG.setaDir + '</button>' +
          '</div>' +
        '</div>';
    }

    return '<div class="galeria-modal__overlay">' + janela + lightbox + '</div>';
  }

  function abrirModal(indice) {
    if (document.getElementById('galeria-modal')) return;
    estadoModal.albumIndice = indice;
    estadoModal.fotoAtiva = 0;
    estadoModal.ampliada = false;
    var modal = document.createElement('div');
    modal.className = 'galeria-modal__overlay';
    modal.id = 'galeria-modal';
    modal.innerHTML = modalHTML(albuns[indice], 0, false);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    var fechar = modal.querySelector('.galeria-modal__fechar');
    if (fechar) fechar.focus();
    atualizarAutoplay(); // pausa o autoplay enquanto o modal está aberto
  }

  function pintarModal() {
    var modal = document.getElementById('galeria-modal');
    if (!modal) return;
    var album = albuns[estadoModal.albumIndice];
    modal.innerHTML = modalHTML(album, estadoModal.fotoAtiva, estadoModal.ampliada);
    var fechar = modal.querySelector('.galeria-modal__fechar');
    if (fechar) fechar.focus();
  }

  function fecharModal() {
    var modal = document.getElementById('galeria-modal');
    if (modal) modal.remove();
    document.body.style.overflow = '';
    atualizarAutoplay(); // retoma o autoplay se estiver ligado
  }

  function navegarFoto(delta) {
    var album = albuns[estadoModal.albumIndice];
    estadoModal.fotoAtiva =
      (estadoModal.fotoAtiva + delta + album.subfotos.length) % album.subfotos.length;
    pintarModal();
  }

  /* ------------------------------------------------ Autoplay */
  function atualizarAutoplay() {
    if (timerAutoplay) {
      clearInterval(timerAutoplay);
      timerAutoplay = null;
    }
    if (!autoplayLigado || document.getElementById('galeria-modal')) return;
    timerAutoplay = setInterval(function () {
      irPara(indiceAtivo + 1);
    }, 4500);
  }

  function alternarAutoplay() {
    autoplayLigado = !autoplayLigado;
    atualizarAutoplay();
    render();
  }

  function irPara(n) {
    indiceAtivo = (n + TOTAL) % TOTAL;
    render();
  }

  /* ------------------------------------------------ Eventos do carrossel */
  raiz.addEventListener('click', function (e) {
    var ver = e.target.closest('.galeria__card-ver');
    if (ver) { abrirModal(Number(ver.dataset.abrir)); return; }

    var card = e.target.closest('.galeria__card');
    if (card) {
      var i = Number(card.dataset.indice);
      if (card.dataset.central === 'true') abrirModal(i);
      else irPara(i);
      return;
    }

    var seta = e.target.closest('.carrossel__seta');
    if (seta) { irPara(indiceAtivo + Number(seta.dataset.seta)); return; }

    var dot = e.target.closest('.carrossel__dot');
    if (dot) { irPara(Number(dot.dataset.indice)); return; }

    var pause = e.target.closest('.carrossel__pause');
    if (pause) { alternarAutoplay(); return; }
  });

  /* ------------------------------------------------ Eventos do modal */
  document.addEventListener('click', function (e) {
    if (!document.getElementById('galeria-modal')) return;

    // Com a foto ampliada, o lightbox cobre a tela: fecha/navega por cima.
    if (estadoModal.ampliada) {
      if (e.target.closest('[data-fechar-ampliada]')) {
        estadoModal.ampliada = false;
        pintarModal();
        return;
      }
      if (e.target.closest('[data-modal-seta]')) {
        navegarFoto(Number(e.target.closest('[data-modal-seta]').dataset.modalSeta));
        return;
      }
      return; // clique no corpo da foto ampliada não faz nada
    }

    // Fechar modal: botão X ou clique no overlay escuro.
    if (e.target.closest('[data-fechar]') || e.target.classList.contains('galeria-modal__overlay')) {
      fecharModal();
      return;
    }

    // Navegação dentro do visor.
    var seta = e.target.closest('[data-modal-seta]');
    if (seta) { navegarFoto(Number(seta.dataset.modalSeta)); return; }

    // Zoom: clicar na foto amplia.
    if (e.target.closest('[data-ampliar]')) {
      estadoModal.ampliada = true;
      pintarModal();
      return;
    }

    // Miniaturas: pular para a foto escolhida.
    var miniatura = e.target.closest('[data-miniatura]');
    if (miniatura) {
      estadoModal.fotoAtiva = Number(miniatura.dataset.miniatura);
      pintarModal();
      return;
    }
  });

  document.addEventListener('keydown', function (e) {
    var modal = document.getElementById('galeria-modal');
    if (!modal) return;

    if (estadoModal.ampliada && e.key === 'Escape') {
      estadoModal.ampliada = false;
      pintarModal();
      return;
    }
    if (e.key === 'Escape') { fecharModal(); return; }
    if (e.key === 'ArrowRight') { navegarFoto(1); return; }
    if (e.key === 'ArrowLeft') { navegarFoto(-1); return; }
  });

  /*拦截 scroll do mouse: redireciona para miniaturas ou trava a página */
  document.addEventListener('wheel', function (e) {
    var modal = document.getElementById('galeria-modal');
    if (!modal) return;
    if (estadoModal.ampliada) return;

    var miniaturas = modal.querySelector('.galeria-modal__miniaturas');
    if (!miniaturas) return;

    if (miniaturas.matches(':hover')) {
      e.preventDefault();
      miniaturas.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  /* ------------------------------------------------ Início */
  render();
})();
