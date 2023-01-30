const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Chase's Contact API",
    description: "Contact API",
  },
  host: "https://week07.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
