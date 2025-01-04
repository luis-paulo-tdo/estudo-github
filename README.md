# Curso Git e GitHub: Compartilhando e Colaborando em Projetos

## 1. Compartilhando Projetos

### 1.1. Apresentação
- O aprendizado deste curso é independente de linguagem de programação.
- Git e GitHub são ferramentas de compartilhamento de projetos.
- O curso mostrará:
	- O que é e como funciona o GitHub.
	- Como se cadastrar, criar e compartilhar repositórios.
	- Como é o flxuo de trabalho dentro do GitHub.
	- O uso das ferramentas Git e VS Code para compartilhamento.
	- Como realizar solução de conflitos.
	- O histórico do Git e como gerenciá-lo.
	- Ferramentas como o Gist, a criação de READMES e o gitignore.

### 1.2. Conhecendo o GitHub
- A ideia do GitHub é compartilhar o código do projeto.
- O compartilhamento permite a visualização e a colaboração.
- É possível utilizá-lo gratuitamente, criando uma conta.

### 1.3. Criando um Repositório
- É um lugar onde será guardado um repositório de um determinado projeto.
- Cada repositório deve ter um nome único para aquele usuário.
- O repositório pode ser público ou privado, definindo a visibilidade dele.

### 1.4. Instalando o Git
- É necessária uma ferramenta para se conectar com o repositório do projeto.
- Será necessário utilizar um prompt de comando para fazer esta conexão.
- Será também necessária a instalação da ferramenta Git.
- O Git é uma ferramenta para realizar o controle de versão dos códigos.
- É com ela que nos conectamos com a plataforma GitHub, que hospeda códigos.
- O Git também é usado para se conectar com outras plataformas além do GitHub.
- A ferramenta pode ser baixada e instalada pelo seu site oficial.
- Ao realizar o download, deve-se configurar as variáveis de ambiente para o Git.
- Com o Git instalado, ao rodar o 'git init' em um diretório, ele o inicializa.

### 1.5. Sincronizando Repositórios
- O repositório criado no GitHub chama-se Repositório Remoto.
- Além dele, é necessário criar um Repositório Local na máquina.
- O Repositório Local é criado justamente pelo comando 'git init'.
- Os arquivos são adicionados ao conjunto de alterações a serem versionadas:
	- Isto pode ser feito ao executar o comando 'git add .'.
	- Ele faz com que todos os arquivos do diretório sejam adicionados.
- Com o comando 'git commit', os arquivos adicionados são submetidos:
	- Este submit versiona as alterações dentro do Repositório Local.
	- Para fazer um commit, o usuário precisa configurar sua identidade.
	- Com o 'git config', você diz ao Git qual é o seu usuário e e-mail.
- Com o comando 'git branch', uma branch é escolhida para o versionamento.
- O 'git remote add origin', estabelece a conexão entre os Repositórios:
	- Pode-se fazer esta conexão através dos protocolos HTTPS ou do SSH.
- O 'git push -u origin main' efetua o commit no Repositório Remoto:
	- O git só permitirá este comando quando você fizer uma autenticação.
	- No caso do SSH, você precisa fazer a geração de uma chave SSH.
	- O SSH te dará a autorização para enviar seus arquivos ao GitHub.
	- O próprio GitHub disponibiliza um tutorial para gerar a chave.
	- A chave é gerada através do comando 'ssh-keygen -t ed25519'.
	- Você deve passar seu e-mail, senha (opcional) e onde vai salvar a chave.
	- A chave pública gerada deve ser copiada para o GitHub reconhecê-la.
	- Assim, sua máquina torna-se identificada e autenticada dentro do GitHub.
	- Com a identificação e autenticação, torna-se possível versionar o código.
