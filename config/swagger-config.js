
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Animes", 
      description: "Uma API RESTful desenvolvida para fornecer informações sobre animes.",
      version: "1.0.0",
      contact: {
        name: "Seu Nome ou Nome do Time",
      },
      servers: [{ url: "http://localhost:4000/api" }], 
    },
  
  },
  apis: ["./routes/*.js", "./docs/swaggerDocs.yaml"],
};

export default swaggerOptions;