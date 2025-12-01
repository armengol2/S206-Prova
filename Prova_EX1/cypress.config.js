const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    overwrite: true,
    html: true,   // GERAR HTML DIRETO
    json: false   // NÃO gerar JSON
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com",

    setupNodeEvents(on, config) {

      // plugin do reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      // 👉 ADICIONAR A TASK AQUI: (para evitar erro nos testes)
      on("task", {
        exemplo(valor) {
          console.log("Task exemplo executada:", valor);
          return null;
        }
      });

      return config;
    }
  }
});
