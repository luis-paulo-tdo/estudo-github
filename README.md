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
- A ideia do GitHub é que o usuário compartilhe o código de seus projetos.
- Compartilhamento permite a visualização e a colaboração por outros devs.
- É possível utilizá-lo gratuitamente, criando uma conta em seu sit.

### 1.3. Criando um Repositório
- É um lugar onde será guardado um repositório de um determinado projeto.
- Cada repositório deve ter um nome único para aquele usuário.
- O repositório pode ser público ou privado, definindo sua visibilidade.

### 1.4. Instalando o Git
- É necessária uma ferramenta para se conectar com o repositório do projeto.
- Será necessário utilizar um prompt de comando para fazer esta conexão.
- Será também necessária a instalação da ferramenta Git.
- O Git é uma ferramenta para realizar o controle de versão dos códigos.
- É com ela que nos conectamos com a plataforma GitHub, que hospeda códigos.
- O Git também é usado para se conectar com outras plataformas.
- A ferramenta pode ser baixada e instalada pelo seu site oficial.
- Ao fazer o download, deve-se configurar as variáveis de ambiente do Git.
- Ao rodar o 'git init' com o Git em uma pasta, ele inicia o repositório.

### 1.5. Sincronizando Repositórios
- O repositório que é criado no GitHub chama-se Repositório Remoto.
- Além dele, é necessário criar um Repositório Local na máquina.
- O Repositório Local é criado justamente pelo comando 'git init'.
- Arquivos são adicionados ao conjunto de alterações:
	- Isto pode ser feito ao executar o comando 'git add .'.
	- Ele faz com que todos os arquivos sejam adicionados.
- O comando 'git commit' submete os arquivos adicionados:
	- Este submit versiona as alterações no Repositório Local.
	- Para commitar, o usuário precisa configurar sua identidade.
	- Com o 'git config', o seu usuário e e-mail são configurados.
- O comando 'git branch' escolhe uma branch para o versionamento.
- O 'git remote add origin' cria conexão entre os Repositórios:
	- Pode-se fazer esta conexão com os protocolos HTTPS ou do SSH.
- O 'git push -u origin main' faz o commit no Repositório Remoto:
	- O git só permite este comando com autenticação.
	- No caso do SSH, é preciso que uma chave SSH seja gerada.
	- O SSH te dará a autorização para enviar arquivos ao GitHub.
	- O próprio GitHub dispõe de um tutorial para gerar a chave.
	- A chave é gerada através do comando 'ssh-keygen -t ed25519'.
	- Deve-se passar seu e-mail, senha e onde vai salvar a chave.
	- A chave pública gerada deve ser copiada para o GitHub.
	- Assim, sua máquina torna-se autenticada dentro do GitHub.
	- A identificação e autenticação permitem o versionamento.
- A sincronização faz os arquivos serem visíveis dentro do projeto.
	
## 2. Colaborando em Projetos

### 2.1. Clonando um Repositório
- Existem algumas opções para baixar o código do GitHub no computador.
- Download zip, abrir com GitHub ou clonar o repositório via URL.
- A clonagem do repositório é feita com o comando 'git clone <url>'.
- Clonando o repositório, todos os arquivos são baixados.
- Além do código, o Repositório Local têm arquivos de configuração.

### 2.2. Realizando um Commit
- Ao clonar um repositório, o código está pronto para receber colaborações.
- Ao receber as alterações do colaborador, elas ficam gravadas na máquina.
- Para submeter estas alterações ao repositório, a ferramenta Git é usada.
- Submeter o código ajuda os demais programadores a saber o que você fez.
- O comando 'git status' exibe as nossas colaborações dentro do código.
- O comando 'git add' seleciona os arquivos que serão commitados.
- O comando 'git commit' sobe os arquivos e registra as mudanças.
	- No comando de commit, devemos descrever as alterações que fizemos.
- Ao submeter um código, é como se estivéssemos subindo uma versão nova.
- O comando 'git log' torna possível a ver os commits feitos no projeto.

### 2.3. Enviando Commits
- O commit só registra as mudanças feitas no projeto em Repositório Local.
- O código precisa subir para o Repositório Remoto para ficar visível.
- O comando 'git clone' já cria uma conexão entre estes dois Repositórios.
- O comando 'git remote' permite ver os Repositórios Remotos do projeto.
- Por padrão, o GitHub já fornece o Repositório Remoto 'origin'.
- O comando 'git push' realiza o envio dos commits ao Repositório Remoto.
	- É preciso informar o nome do Repositório Remoto e da Branch.
- Lembrando sempre que é preciso identificar e autenticar a máquina.
- O dono do projeto também deve permitir novos colaboradores no projeto.
	- O GitHub envia o convite para o colaborador, que deve aceitá-lo.
	- Ao aceitá-lo, o colaborador torna-se capaz de rodar o 'git push'.
	
### 2.4. Baixando os Novos Commits
- As alterações feitas por um colaborador precisam ser baixadas pelos demais.
- O comando 'git pull' baixa os commits feitos no Repositório Remoto.
- Com o 'git log', pode-ser ver as alterações feitas pelos colaboradores.
- Com todas estas etapas e comandos, há um fluxo de trabalho no Git.
	- Checar suas modificações com o 'git status'.
	- Adicionar as mudanças com o 'git add'.
	- Registrar as mudanças com o 'git commit'.
	- Enviar os commits para o Repositório Remoto com o 'git push'.
	- Baixar as mudanças dos outros colaboradores com o 'git pull'.
- As IDEs possuem integração com o Git, facilitando o uso destes comandos.

## 3. Utilizando Git na IDE

### 3.1. Git no VSCode
- As IDEs apresentam formas visuais para se trabalhar com o Git.
- Eles oferecem ícones e componentes gráficos para facilitar.
- Ao realizar alterações, a IDE aponta a ocorrência delas.
- É possível visualizar todos os arquivos alterados.
- A IDE apresenta uma caixa para digitar a mensagem de commit.
- Há ícones para adicionar ou desfazer alterações nos arquivos.
- Existe também um botão para download dos commits Remotos.
- Existe outro botão para enviar os commits para o Remoto.

### 3.2. Simulando um Conflito
- Em um projeto no Git, podem ter diversas pessoas colaborando juntas.
- Então, é normal haver a ocorrência de conflitos entre as alterações.
- Os mesmos arquivos são alterados por dois ou mais colaboradores. 
	- O Colaborador A faz o commit de suas alterações no Local.
	- O Colaborador A faz o pull das alterações feitas no Remoto.
	- O Colaborador A percebe que o B alterou o mesmo arquivo.
- O Git acaba por apontar os arquivos onde houveram conflitos.
- A ferramenta vai tentar fazer a resolução dos conflitos sozinha.
- Em alguns casos, os colaboradores precisarão resolvê-los:
	- Eles devem decidir qual alteração irá prevaleces no arquivo.

### 3.3. Resolvendo Conflitos
- Em cada arquivo com conflito, aparecerá os trechos com ambas as versões.
- Podemos resolver o conflito tanto por IDE quanto manualmente.
- O trecho marcado abaixo do HEAD contém a mudança de outro colaborador.
- Os trechos e as marcações que serão descartados devem ser apagados.
- Após resolver o conflito, deve ser feito um commit das resoluções.
 
## 4. Voltando no Tempo

### 4.1. Desfazendo um Commit
- Cada commit representa uma versão que fica registrada no histórico. 
- Pode haver a necessidade de voltar commits realizados com o tempo.
- Mudanças com bug, features que não deveriam ser retiradas, etc.
- Com o 'git log', é possível ver e reverter mudanças em arquivos.
- Porém, existem casos em que muitos arquivos foram alterados.
- O 'git log' também exibe um ID para cada commit realiado.
- Usando este ID no comando 'git revert', o commit é desfeito.
- As mudanças são desfeitas de forma automatizada.
- Um novo commit é criado para registrar as mudanças desfeitas.
- Após o novo commit, basta apenas fazer um 'git push'.

### 4.2. Resetando um Commit
- Existem situações onde queremos apagar o commit do histórico.
- Isso ocorre caso uma alteração precise ser cancelada.
- Diferente do revert, é necessário o ID do commit anterior.
- O comando usado é o 'git reset --hard <id-commit-anterior>'.
- Com isso, tanto o commit quanto as mudanças são desfeitas.
- É interessante que o revert e reset sejam usados localmente.

### 4.3. Alterando o Último Commit
- Podem haver situações que as mensagens de commit estão erradas.
- Isto pode ser feito com o 'git commit --amend -m "<Mensagem>"'.
	- Este comando funciona em repositório local.
- Também é possível adicionar novos arquivos ao commit existente.

## 5. Mais Recursos

### 5.1. Readme do Repositório
- Necessário quando precisamos realizar uma documentação resumida do código.
- Ele pode servir para quem está entrando em um projeto.
- Pode servir também em casos onde o projeto é Open Source.
- O arquivo Readme funciona como uma documentação dentro do repositório.
- O próprio GitHub realiza o tratamento deste arquivo:
	- Todo o seu conteúdo é exibido e formatado na página do repositório.
- O arquivo README.md deve ser criado na pasta raíz do repositório.
- É possível formatá-lo com as linguagens Markdown e HTML.

### 5.2. Ignorando Arquivos no Repositório
- Existem arquivos que não precisam ou que não podem ser postos em repositório.
- Selecionar cada arquivo e pasta com o 'git add' pode ser muito custoso.
- É possível delegar para o git a tarefa de ignorar estes arquivos indesejados.
- Basta criar um arquivo '.gitignore' no projeto e especificá-los.
- Para cada linha do arquivo, pode ser especificado um ou vários itens:
	- Nome de uma pasta/diretório de projeto.
	- Arquivos com determinados nomes ou formatações.
- Em seguida, o .gitignore precisa ser enviado para o repositório.
- Ao fazer um commit, os arquivos listados no .gitignore não são versionados.
- Existem sites que podem gerar automaticamente o .gitignore:
	- Ao selecionar uma linguagem/framework, um arquivo padrão é gerado.
	- Todos os arquivos/diretórios gerados pelo framework são ignorados.

### 5.3. Compartilhando Códigos com Gist
- Existem casos em que desejamos compartilhar trechos de códigos, e não projetos.
- Nestes casos, queremos fazer isto sem precisar criar repositórios e commits.
- A página do repositório contém uma opção chamada 'New Gist'.
- A ferramenta contém um espaço para editar o código de cada arquivo.
- Uma vez o código editado, ao compartilhá-lo você gera uma URL dele.
- Nesta URL, os códigos já estarão separados por arquivos.
