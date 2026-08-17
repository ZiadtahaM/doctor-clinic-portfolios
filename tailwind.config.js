/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#2563eb',
        'medical-green': '#059669',
        'medical-gray': '#6b7280',
        'medical-light': '#f8fafc',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      boxShadow: {
        'medical': '0 4px 14px 0 rgba(37, 99, 235, 0.1)',
        'medical-lg': '0 10px 28px 0 rgba(37, 99, 235, 0.15)',
      }
    },
  },
  plugins: [],
}