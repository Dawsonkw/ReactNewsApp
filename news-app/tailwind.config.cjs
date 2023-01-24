/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'modak': ['Modak', 'cursive'],
        'bilbo': ['Bilbo', 'cursive'],
        'blackops': ['black ops one', 'cursive']
      },
      colors: {
        'regal-blue': '#243c5a',
        'tan': '#b68d40',
        'cream': '#f4ebd0',
        'charcoal': '#122620',
        'gold': '#d6ad60',
        'forestgreen': '#104210',
        'coolgrey': '#264653',
        'peacockgreen': '#2A9D8F',
        'yellowochre': '#E9C46A',
        'sand': '#F4A261',
        'cadmiumorange': '#E76F51',
        'otterTeal': '#3cbcc0',
        'onyx': '#6F8F72', 
      },
    },
  },
  plugins: [],
}
