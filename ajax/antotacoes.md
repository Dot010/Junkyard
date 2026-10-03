<!-- AGORA VAMOS ENTENDER SEU CÓDIGO DE VERDADE

1️⃣ Tudo começa aqui
$(document).ready(function () {

Significa:

Só executa quando o HTML estiver carregado.

Sem isso, o JS pode tentar acessar algo que ainda não existe.
 
2️⃣ Máscara
$('#cep').mask('00000-000');

Só controla formato do input.
Não tem lógica pesada aqui.

3️⃣ Quando clica no botão
$('#btn-buscar-cep').click(function () {

Aqui começa o fluxo principal.

Tudo dentro disso só acontece quando o usuário clica.

4️⃣ Pegando o valor digitado
const cep = $('#cep').val();

Você está lendo o que o usuário digitou.

Isso é interação com DOM.

5️⃣ Criando a URL
const endpoint = `https://viacep.com.br/ws/${cep}/json/`;

Template string → insere variável dentro da string.

6️⃣ Fetch (parte mais importante)
fetch(endpoint)

Isso é uma PROMISE.

Promise significa:

Algo que vai acontecer no futuro.

Por isso usamos:

.then()
.catch()
.finally()
7️⃣ Primeiro .then()
.then(function (resposta) {
    return resposta.json();
})

Aqui você está:

📦 Pegando a resposta bruta
🔓 Abrindo ela
📄 Transformando em objeto JS

Sem isso você não consegue acessar logradouro.

8️⃣ Segundo .then()
.then(function (json) {

Agora sim você tem:

json.logradouro
json.bairro
json.localidade
json.uf

Você monta a string:

const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

E joga no input:

$('#endereco').val(endereco);
9️⃣ .catch()

Só roda se der erro de rede.

🔟 .finally()

Sempre roda.

Você usa para restaurar o botão.

📌 O que é FETCH?

fetch() é uma função do JavaScript usada para fazer requisições para APIs.

Ela retorna uma Promise.

📌 O que é uma Promise?

Uma Promise é algo que:

Ainda não terminou

Vai terminar no futuro

Pode dar certo ou dar erro

Por isso usamos:

.then() → quando dá certo

.catch() → quando dá erro

.finally() → sempre executa

📌 Estrutura básica do fetch
fetch(endpoint)
  .then(function(resposta) {
    return resposta.json();
  })
  .then(function(dados) {
    console.log(dados);
  })
  .catch(function(erro) {
    console.log("Erro na requisição");
  });
📌 O que é resposta?

resposta NÃO é o JSON ainda.

Ela é um objeto do tipo Response.

Ela contém:

status

headers

body

Para pegar os dados precisamos usar:

resposta.json()
📌 O que faz resposta.json()?

Ele:

Abre o corpo da resposta

Converte para objeto JavaScript

Permite acessar propriedades

Exemplo:

json.logradouro
json.bairro
📌 Importante sobre erros

O fetch() NÃO considera erro automaticamente quando a API responde 404 ou 500.

Para tratar isso corretamente:

fetch(endpoint)
  .then(function(resposta) {
    if (!resposta.ok) {
      throw new Error("Erro HTTP");
    }
    return resposta.json();
  })
  .catch(function(erro) {
    console.log("Erro tratado");
  });
📌 Fluxo mental do fetch

Usuário faz ação (ex: clique)

Fetch envia requisição

API responde

Convertemos resposta para JSON

Manipulamos os dados

Atualizamos a tela

📌 O que eu preciso saber para dominar isso?

Manipular DOM

Entender Promise

Saber usar .then

Saber usar .catch

Entender JSON

🧠 Agora a parte mais importante

Não adianta só salvar.

Faça isso:

Amanhã, sem olhar esse arquivo, tente escrever a estrutura básica do fetch.

Depois confira.

Repita por 3 dias.

Você vai perceber que começa a lembrar sozinho.