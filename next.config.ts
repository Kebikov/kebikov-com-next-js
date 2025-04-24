import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     /* config options here */
    //reactStrictMode: false
      // 👇 Разрешаем доступ с локального IP для дев-сервера
    allowedDevOrigins: ['http://192.168.0.178:3000'],
      // остальная конфигурация
    images: {
        formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
