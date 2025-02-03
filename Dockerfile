# Usa a imagem base do Cypress
FROM cypress/base:latest

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY package.json package-lock.json ./

# Instala as dependências, incluindo o Cypress
RUN npm install && npx cypress install

# Copia todo o código para dentro do contêiner
COPY . .

# Define o comando para rodar os testes
CMD ["npx", "cypress", "run"]
