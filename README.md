# Mínimo sobre Docker

### Objetivo:

A ideia nesse pequeno projeto react typescript com vite é mostrar
os passos iniciais sobre `docker` para criação de imagens, containes.
E seus principais comandos básicos para rodar um container e subir para o `docker hub`.

### Requisitos

- criar uma conta no docker hub
- baixar docker desktop

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

### Colocando a imagem no Docker Hub

- Primeiro criar uma conta no docker hub
- Criar um repositório na plataforma do docker hub
- Vinculando a imagem local com o repositório remoto : `docker images`
- Verifique as imagens existentes. E escolha a que irá ser vinculada.
- Copie o ImageId da imagem e copie o nome do repositório remoto. Digite no terminal:
- `docker image tag 9dcd571f59e4 owesleymoraes/app:v1`
- Nesse código estou renomeando a tag da minha imagem local para o nome do meu repositório do docker hub.
- obs: o nome da tag local está : v1
- obs: o nome do repositório local está app
- usar o `docker image` : owesleymoraes/app v1 9dcd571f59e4 7 minutes ago 795MB
- Na linha de comando usar o login : `docker login`
  Username: owesleymoraes
  Password:
  Login Succeeded
- Faça o push : `docker push owesleymoraes/app:v1`
  obs: comando o nome do repositório seguido do nome da tag

### Nomeando e iniciando um Container

- Ver containers em execução: `docker ps`
- Parar container em execução: `docker stop id_container`
- Verificar imagem para rodar em um container docker: `docker image`
- Roda um container em background: `docker run -d app:v2`

### Logs do Container

- `docker logs id_container`

### Mapeando Portas

- comando : `docker run -d -p 80:3000 --name seya app:v2`
- Explicando: está sendo redirecionado a aplicação para porta localhost: 80 e tudo que chega a essa rota
  é direcionado para a porta 3000 do docker.
- É possível conferir com o comando `docker ps` e ver esse redirecioamento.

ex:  
 PORTS  
 0.0.0.0:80->3000/tcp

### Listando um Container :

        docker exec name_container ls

### Start, Stop e Remove - Container

- Stop:
  docker stop name_container
- Start:

        docker start name_container

- Remove:

         docker rm -f name_container

### Criando Volumes:

A criação de volumes no Docker serve para preservar dados importantes, assim como ocorre ao formatar um computador e desejar salvar arquivos essenciais que não podem ser perdidos.

No contexto do Docker, ao criar uma imagem e,
a partir dela, iniciar um container,
é possível que sejam gerados arquivos dentro desse container. Caso o container seja excluído, esses arquivos seriam perdidos, pois o ciclo de vida dos containers é efêmero. Para evitar essa perda de dados, utilizam-se volumes,
que permitem armazenar informações de forma persistente e separada do container,
garantindo sua disponibilidade mesmo após a remoção do container.

#### Criando o volume (local):

        docker volume create app-data

- Verificando os volumes (informações) :

        docker volume inspect app-data

Para uma prática mais detalhada criar um novo container e vinculá-lo ao volume criado:

        docker run -d -p 3000:3000 --name seya-volume -v app-data:/src/data app:v2

- app-data: Nome do volume no Docker (armazenado no host).

- /app/data: Caminho dentro do container onde o volume será montado.
  Resultado: Dados gravados no diretório /app/data dentro do container serão salvos no volume app-data. Esses dados persistem mesmo que o container seja removido.

- Verificando vinculação do Container a um Volume :
        docker exec -it seya-volume sh

- Navegar até o folder app e entrar dentro da folder data
- Na folder data criar um arquivo com o comando `echo hi docker > docker.txt`
- Verificar o que tem dentro do arquivo com o comando `cat docker.txt`
- faço um exit no terminal.

### Vinculando um Volume para um Container:

- Remover o container recém criado: `docker rm -f seya-volume`
- Criando um novo container e vinculando a um volume existente
 
        docker run -d -p 3000:3000 --name saori-volume -v app-data:/src/data app:v2

- Vereficando o vinculo do container recém criado com o volume já existente: 

        docker exec -it saori-volume sh



