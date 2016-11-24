# mean-stack-trabalho-pratico
  Trabalho prático de Desenvolvimento de Aplicações Distribuidas, Tecnologia Web e Teste e Manunteção de Software
 +
 +#Gui de Instalação
 +
 +
 +Instalar o Nodejs: Link para o download do Windows: https://nodejs.org/en/
 +
 +Instale o MongoDB: Link de download: https: //www.mongodb.com/download-center? Jmp = nav # community
 +
 +Para obter mais informações sobre como instalar o MOGODB para Windows https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
 +
 +Para obter mais informações, visite o link: https://docs.mongodb.com/manual/
 +
 +------ Iniciar o projeto ------
 +
 +Faça o download do projeto em c:/
 +
 +Acesse a pasta do projeto por meio do prompt de comando.
 +
 +Use o comando: npm install para instalar as dependências do package.json
 +
 +---Configurando o Mongo DB----
 +
 +Acesso o diretorio que foi instalado o Mongo DB, utilize o comando mongod.exe
 +em outro terminal acesso o mesmo diretorio e execulte o comando mongo.exe, com isso irá
 +abrir o shell do mongo. De o comando: 
 +       
 +	use eleicao
 +
 +para criar o banco de dados. Logo após vamos criar as collections com os comandos:
 +      
 +       mongoimport --db eleicao --collection eleitors --type csv --headerline --file c:/mean-stack-trabalho-pratico/eleitorado2.txt
 +       mongoimport --db eleicao --collection candidatos --type csv --headerline --file c:/mean-stack-trabalho-pratico/candidatos2.txt
 +
 +Apos criar as coleções pode executar os seguintes comando ainda no shell do mongo para verificalas:
 +
 +	db.eleitors.find().pretty()
 +	db.candidatos.find().pretty()
 +
 +Ctrl + C para sair do shell do mongo, acesse o diretorio raiz do projeto e de o comando:
 +	
 +	nodemon server.js
 +
 +Abra o browser acesse localhost:8080, lembre se de não fechar o prompt de comnado onde se iniciou o
 +mongo e o server.
