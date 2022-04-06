# API SEU ESTOQUE

## <a name="cofiguracao-projeto"></a> 🔨 Configuração do projeto

1. Para **clonar repositorio** você precisa ter [git](https://git-scm.com/downloads) instalado:

```bash
git clone git@github.com:Fagner-Carvalho/api-seu-estoque.git

```

2. Entre no respositorio

```bash
cd api-seu-estoque
```

3. Para **instalar as dependencias** você precisa ter [NodeJS](https://nodejs.org/en/) ou [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) instalado:

```bash
npm install ou yarn
```

4. Para **criar container** você precisa ter [Docker](https://docs.docker.com/get-docker/) e [Docker-Compose](https://docs.docker.com/compose/install/) instalado e após executar os camandos abaixo:
   
- obs: docker-compose subirá banco de dados e a aplicação da api

```bash
docker-compose build
docker-compose up -d
```

5. Atualize o esquema do banco de dados para a versão mais recente:

```bash
yarn typeorm migration:run
```

6. Atualize as tabelas com algumas informações padrões:

```bash
yarn seed:admin 
yarn seed:categories
yarn seed:unit
```


### <a name="dev"></a> 💪 Desenvolvedor

![Fagner-Carvalho](https://avatars.githubusercontent.com/u/5354645?s=100)