# Payload pela Rota.

### Objetivo:

A ideia nesse pequeno projeto react typescript com vite e styled components é mostrar os passos iniciais para criação de imagens usando o docker.

### Tecnologias:

- React
- Typescript
- styled component
- react-router-dom

### Docker:

- FROM: Qual imagem será usada e em qual linguagem irá rodar essa imagem.

- WORKDIR: Indicando pastar origem dos arquivos no projeto.

- COPY: Copia os arquivos para a imagem internos ao projeto.

- ADD: Adiciona os arquivos para a imagem externos ao projeto. (ex: https://google/file.json .)

- ADD: Descompacta e copia arquivos internos ao projeto. (ex: teste.zip .)

- RUN: Roda a aplicação

- ENV: Configuração do ambiente, tudo que precisa para rodar no ambiente.

- EXPOSE: Direciona a porta onde irá rodar a aplicação.

- USER: Quem o usuário que irá rodar a aplicação

- CMD ou ENTRYPOINT : Roda comandos cmd

### Construindo a imagem

- Abrir um terminal do vs-code na pasta
- Criar um file Dockerfile
- Escrever os parâmetros de criação de uma imagem:


FROM node:lts-alpine
WORKDIR /src
COPY . .
RUN yarn install
RUN yarn build
RUN yarn global add serve
CMD ["serve", "-s", "dist"]
EXPOSE 3000


- Criar uma uma imagem com o comando no cmd: `docker build -t app .`
- Verificar imagem criada com o comando `docker images`
- Rodar a imagem (Criar um container a partir dessa imagem com o comando e abrir no shell) : `docker run -dp 3000:3000 app`, vinculando a porta da imagem com a porta local.


### Colando a imagme no Docker Hub

- Primeiro criar uma conta no docker hub
- Criar um repositório na plataforma do docker hub
- Vinculando a imagem local com o repositório remoto : `docker images`
- Verifique as imagens existentes. E escolha a que irá ser vinculada.
- Copie o ImageId da imagem e copie o nome do repositório remoto. Digite no terminal:
- `docker image tag 9dcd571f59e4 owesleymoraes/app:v1`
- Nesse código estou renomeando a tag da minha imagem local para o nome do meu repositório do docker hub.
- obs: o nome da tag local está : v1
- obs: o nome do repositório local está app
- usar o `docker image` : owesleymoraes/app  v1  9dcd571f59e4  7 minutes ago  795MB
- Na linha de comando usar o login : `docker login`
        Username: owesleymoraes
        Password: 
        Login Succeeded
  
- Faça o push : `docker push owesleymoraes/app:v1`
                obs: comando o nome do repositório seguido do nome da tag
                
