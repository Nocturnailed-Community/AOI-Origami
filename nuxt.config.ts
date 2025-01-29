// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "~/assets/css/style.css",
    "~/assets/css/bootstrap.min.css", // Tambahkan file CSS ke dalam properti css
  ],
  vite: {
    build: {
      rollupOptions: {
        input: {
          main: "/assets/js/main.js", // Jika Anda ingin menggunakan file secara modular
        },
      },
    },
  },
  dir: {
    assets: "assets", // Pastikan direktori `assets` sudah benar
  },
  app: {
    head: {
      title: "Asosiasi Origami Indonesia",
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
          defer: true, // Tambahkan properti ini agar file JavaScript dimuat setelah HTML selesai diparse
        },
        {
          src: "/assets/js/main.js", // Gunakan jalur absolut untuk file lokal
          defer: true, // Pastikan file dimuat tanpa memblokir parsing HTML
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css",
        },
        {
          rel: "stylesheet",
          href: "/assets/css/style.css",
        },
        {
          rel: "stylesheet",
          href: "/assets/css/bootstrap.min.css",
        },
      ],
    },
  },
});
