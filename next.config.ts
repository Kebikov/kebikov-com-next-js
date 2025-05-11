import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     /* config options here */
    //reactStrictMode: false
      // 👇 Разрешаем доступ с локального IP для дев-сервера
    allowedDevOrigins: ['http://192.168.0.178:3000'],
      // остальная конфигурация
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840]
    },
     // предотврашяет редирект с /page на /page/
    trailingSlash: false,

    async redirects() {
        return [
            { source: '/svadebnye-fotografii', destination: 'https://kebikov.com/weddings-all', permanent: true },
            { source: '/wedding-slideshow', destination: 'https://kebikov.com/slideshow', permanent: true },
            { source: '/stati', destination: 'https://kebikov.com/articles', permanent: true },
            { source: '/obomne', destination: 'https://kebikov.com/about-me', permanent: true },
            { source: '/otziviklientov', destination: 'https://kebikov.com/reviews', permanent: true },
            { source: '/paketiuslug', destination: 'https://kebikov.com/price-packages', permanent: true },
            { source: '/kontakt', destination: 'https://kebikov.com/contacts', permanent: true },

            { source: '/15-variantov-krasivogo-svadebnogo-finala', destination: 'https://kebikov.com/articles/beautiful-wedding-finale', permanent: true },
            { source: '/8-originalnyx-sposobov-brosit-buket-nevesty', destination: 'https://kebikov.com/articles/bouquet-roll', permanent: true },
            { source: '/c-chego-nachat-podgotovku-k-svadbe', destination: 'https://kebikov.com/articles/preparations-wedding', permanent: true },
            { source: '/7-sovetov-dlya-nevest-ot-fotografa', destination: 'https://kebikov.com/articles/from-the-photographer', permanent: true },
            { source: '/perfect-wedding-photo-session', destination: 'https://kebikov.com/articles/perfect-wedding-photo-session', permanent: true },
            { source: '/aksessuary-dlya-svadebnoj-fotosessii', destination: 'https://kebikov.com/articles/accessories', permanent: true }
        ]
    }
};

export default nextConfig;
