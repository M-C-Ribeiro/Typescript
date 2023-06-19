# AppFood

## Baixando os arquivos
- Primeiro executar o código: `git clone "https://github.com/ifpr-cascavel/AppFood_WebII_2023.git"`, para baixar os arquivos do respositório.
- Em seguida, acessar a pasta com os arquivos com o comando:  `cd .\AppFood_WebII_2023\`.

## Instalando dependências e pacotes
- Para instalar as dependências, executa o código: `npm install`.
- Para instalar o pacote Yarn, execute: `npm install -g yarn`.

## Preparando o Docker
- Para preparar o docker, usa-se o comando `docker run --name mongodb -p 27017:27017 mongo`. Após executar esse comando, o terminal no qual ele foi executado, ficará inutilizável e será necessário abrir outro terminal para iniciar o servidor.

## Iniciar o servidor
- Para iniciar o servidor, basta executar o comando `yarn dev`. Para isso é obrigatório que o pacote Yarn tenha sido instalado. Após isso o servidor será estará rodando no link: "http://localhost:3000".

## Método Get
- Dentro do Insomnia, pode-se acessar os dados cadastradas utilizando as seguintes rotas em requisições Get:
  - http://localhost:3000/categories
  - http://localhost:3000/products
  - http://localhost:3000/categories/:categoryId/products
  - http://localhost:3000/orders

## Métodos Post
### Criação de Categoria
- Dentro do Insomnia, pode-se enviar um novo dado, utilizando as seguintes rotas em requisições Post:
  - http://localhost:3000/categories
  - http://localhost:3000/products
  - http://localhost:3000/orders

### Envio dos dados
Para enviar os dados a serem cadastrados, deve-se selecionar a opção Json no Insomnia e enviar as informações da seguinte forma
#### Categories
```
{
  "name":"nome da categoria",
  "icon":"emoji para categoria"
 }
 ```
 
#### Products
```
{
  "name":"nome do produto",
  "description":"descrição do produto",
  "imagePath":"caminho da imagem do produto
  "price":"preço do produto",
  "ingredients":"{
                    "name":"nome do ingrediente",
                    "icon":"ícone do ingrediente"
                  },
  "category":"número da categoria"
}
```

#### Orders
```
{
  "table":"mesa que pediu o produto",
  "status":"descrição de como está o andamento do pedido",
  "creatdAt":"data de quando o pedido foi realizado"
  "products":{
              "product":"número do produto do cardápio",
              "quantity":"quantidade do produto"
             }
}
```
