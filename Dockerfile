# syntax=docker/dockerfile:1

FROM node:lts-alpine

# Diretório de trabalho
WORKDIR /src

# Copiar somente os arquivos de dependências para usar o cache
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn install

# Copiar o restante do código
COPY . .

# Construir a aplicação
RUN yarn build

# Instalar um servidor estático (como serve)
RUN yarn global add serve

# Comando para servir os arquivos estáticos
CMD ["serve", "-s", "dist"]

# Expor a porta
EXPOSE 3000
