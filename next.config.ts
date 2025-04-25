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
};

export default nextConfig;
