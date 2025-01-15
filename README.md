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
- Escrever os parâmetros de criação de uma imagem
- Criar uma uma imagem com o comando no cmd: `docker build -t app .`
- Verificar imagem criada com o comando `docker images`
- Rodar a imagem (Criar um container a partir dessa imagem com o comando e abrirno shell) : `docker run -it app sh`
