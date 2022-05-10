module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
   
    themes: [
     'cupcake',
      
      {
        doctortheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#1FB2A6",

         


        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
