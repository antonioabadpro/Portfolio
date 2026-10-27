/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./template.html",
        "./build.js",
        "./es/**/*.html",
        "./en/**/*.html",
        "./js/**/*.js"
    ],
    theme: {
        extend: {}
    },
    plugins: [],
}