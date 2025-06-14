FROM node:16-alpine

# Cria o diretório da aplicação
WORKDIR /app

# Copia os arquivos de configuração
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Constrói a aplicação para produção
RUN npm run build

# Expõe a porta que o Nuxt.js utiliza
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD [ "npm", "start" ]