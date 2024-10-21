# **Projeto: Página de Login**

Este projeto é uma página de login responsiva construída com HTML e CSS. Ele permite que os usuários façam login em suas contas, com a opção de lembrar do login e a possibilidade de usar contas do Google.

## Descrição

A interface do usuário é projetada para ser simples e intuitiva, oferecendo campos para o e-mail e a senha, além de opções para lembrar do login e redefinir a senha. O design é responsivo, se ajustando bem a diferentes tamanhos de tela.

## Objetivo do Módulo

Compreender a estrutura básica de uma aplicação web, focando na criação de uma Landing Page para uma tela de login. Este módulo proporcionará uma visão prática do desenvolvimento frontend utilizando HTML, CSS e Javascript, com a possibilidade de explorar outras tecnologias.

## Desafio: Desenvolvimento da Landing Page

**Descrição**: Construa uma Landing Page simples, aplicando os conceitos básicos de frontend apresentados até agora.

**Layout**: Utilize o template disponível no [Figma](https://www.figma.com/), que servirá como guia para o desenvolvimento da página. No desafio 4, selecione, pois vai ser este o layout do desafio.

**Tecnologias Permitidas**: Você é livre para utilizar HTML, CSS e Javascript. Sinta-se à vontade para explorar outras tecnologias, se desejar. Porém, o critério de avaliação não será pela utilização da ferramenta, mas sim pela organização do projeto e estrutura das páginas, dentro dos conceitos e boas práticas.

**Ferramenta de Desenvolvimento**: O desafio será realizado no Figma. Acesse o link do desafio para visualizar o layout.

## Estrutura do Projeto


src/
├── assets/
│   ├── fonts/
│   ├── images/
│   │   ├── icon.png
│   │   └── imagem desktop.png
│   └── styles/
│       └── styles.css
├── index.html
├── README.md
└── scripts/
    └── main.js
	
	
## Tecnologias Utilizadas

- **HTML5**: Estrutura da página e semântica.
- **CSS**: Estilização e layout da página.
- **Google Fonts**: Para tipografia personalizada.

## Funcionalidades

- **Campos de Login**: Os usuários podem inserir seu e-mail e senha.
- **Botão de Login**: Um botão **"Entrar na conta"** que permite ao usuário fazer login na conta. Implementação de um evento de clique que valida os campos de entrada e exibe mensagens apropriadas em caso de erro.
- **Lembre de mim**: Uma opção para os usuários escolherem se querem ser lembrados em logins futuros.
- **Redefinir Senha**: Link para redefinição de senha em caso de esquecimento (Esqueceu sua senha?).
- **Login com Google**: Um botão **"Ou faça login com o Google"** para login utilizando uma conta do Google, com uma integração sugerida com o sistema de autenticação do Google. A imagem do ícone do Google é incluída ao lado do texto do botão.
- **Registro de Nova Conta**: Uma mensagem no final (Não tem uma conta?) que oferece a opção de cadastro para novos usuários, com um link (Cadastre-se) que também não está definido no código atual.

### Formulário de Login

- **Campos de Entrada**:
  - Um campo para o E-mail com validação de formato (tipo email).
  - Um campo para a Senha com tipo password, que oculta a entrada do usuário.
  - Requisitos de Preenchimento: Ambos os campos são obrigatórios (required).

- **Lembre-se de Mim**:
  - Uma opção para o usuário escolher lembrar seus dados na próxima vez que acessar a conta, implementada como um checkbox.

- **Recuperação de Senha**:
  - Um link (Esqueceu sua senha?) que permite ao usuário recuperar sua senha, direcionando para uma página que não está definida no código atual (href="#").

## Login e Senha Pré-definidos

Para facilitar os testes, um login e uma senha pré-definidos estão disponíveis no código:

- **E-mail**: `teste@exemplo.com`
- **Senha**: `senha123`

## Como Executar o Projeto

Para executar o projeto da página de login, siga as instruções abaixo:

### Requisitos

Antes de iniciar, verifique se você tem as seguintes ferramentas instaladas:

- **Navegador**: Um navegador moderno (como Google Chrome, Firefox, Safari ou Edge).
- **Editor de Código**: Recomendamos o [Visual Studio Code](https://code.visualstudio.com/) ou qualquer editor de sua preferência.
- **Git**: Para clonar o repositório, você precisará ter o [Git](https://git-scm.com/) instalado. 

### Passos para Execução

1. **Clone o Repositório**:
   Abra o terminal (ou o prompt de comando) e execute o seguinte comando para clonar o repositório do projeto:

   ```bash
   git clone https://github.com/usuario/repositorio.git
