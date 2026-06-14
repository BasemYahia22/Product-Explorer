/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A2E',
        paper: '#FAF7F2',
        canvas: '#F1ECE2',
        amber: '#E8A33D',
        rust: '#C1502E',
        sage: '#5E7A6A',
        line: '#D8D2C4',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '4px',
      },
    },
  },
  plugins: [],
}
