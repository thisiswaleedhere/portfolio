/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        caveat: ["Caveat", "sans-serif"]
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            blur: '5px',
            transform: 'translateY(-20%)'
          },
          '100%': {
            opacity: '1',
            blur: '0',
            transform: 'translateY(0)'
          },
        },

        'move-dark': {
          '0%': {
            transform: 'translate(0%, 0%)'
          },
          '25%': {
            transform: 'translate(0%, 20%)'
          },
          '50%': {
            transform: 'translate(20%, 20%)'
          },
          '75%': {
            transform: 'translate(20%, 0%)'
          },
          '100%': {
            transform: 'translate(0%, 0%)'
          }
        },

        'move-light': {
          '0%': {
            transform: 'translate(0%, 20%)'
          },
          '25%': {
            transform: 'translate(20%, 20%)'
          },
          '50%': {
            transform: 'translate(20%, 0%)'
          },
          '75%': {
            transform: 'translate(0%, 0%)'
          },
          '100%': {
            transform: 'translate(0%, 20%)'
          }
        },

        'move-dark-small': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '25%': {
            transform: 'translateX(10%)'
          },
          '50%': {
            transform: 'translateX(0%)'
          },
          '75%': {
            transform: 'translateX(10%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },

        'move-light-small': {
          '0%': {
            transform: 'translateX(0%)'
          },
          '25%': {
            transform: 'translateX(10%)'
          },
          '50%': {
            transform: 'translateX(0%)'
          },
          '75%': {
            transform: 'translateX(10%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },

      },
      animation: {
        'fade-in-left': 'fade-in-left 0.5s ease-in',
        'move-dark': 'move-dark 2s ease-in-out infinite',
        'move-light': 'move-light 2s ease-in-out 0.3s infinite',
        'move-dark-small': 'move-dark-small 2s ease-in-out infinite',
        'move-light-small': 'move-light-small 2s ease-in-out 0.4s infinite',
      }
    },
  },
  plugins: [],
}
