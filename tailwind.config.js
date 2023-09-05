/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#3E3939",
        secondary: "#59CE8F",
        greyColor: "#cacaca",
        backgroundColor: "#F5F5F5",
        githubColor: "#504099",
        linkedlnColor: "#0077B5",
      },
      boxShadow: {
        boxShadowOne:
          "0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
      },
     
    },
  },
  plugins: [],
};
