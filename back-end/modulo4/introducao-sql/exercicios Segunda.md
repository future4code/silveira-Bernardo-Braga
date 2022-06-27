/\*
CREATE TABLE => cria a tabela do schema,
VARCHAR(255) => tipo da variavel ,
(255) => indo ate 255 caracteres,
FLOAT => tipo de variavel number,
NOT NULL => obrigatorio,
DATEtipo de variavel data.

\*/

CREATE TABLE Actors(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);
/_ MOSTRA OS BANCOS DE DADOS E AS TABELAS DO BANCO _/
SHOW DATABASES;  
SHOW TABLES;

/_ comando DESCRIBE mostra o que tem em cada tabela passada por parametro no comando _/
DESCRIBE Actors;

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
"004",
"O Poderoso Bernardo Braga",
400000,
"1949-04-18",
"male"
);
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);

SELECT _ FROM Actors;
SELECT id, salary FROM Actors;
SELECT id, name FROM Actors WHERE gender = "male";
SELECT _ FROM Actors WHERE gender = "female";
SELECT id, salary, name FROM Actors WHERE name = "Tony Ramos";
SELECT id, salary, name FROM Actors WHERE salary < 500000;

SELECT id, nome FROM Actors WHERE id = "002";
/_ nao reconhece o campo de nome , tem que ser name _/
SELECT id, name FROM Actors WHERE id = "002";

SELECT \* FROM Actors WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT \* FROM Actors WHERE (name NOT LIKE "A%") AND salary > 350000;

SELECT \* FROM Actors WHERE name LIKE "G%" OR name LIKE "%g" OR name LIKE "%g%" ;

SELECT \* FROM Actors WHERE ( (name LIKE "G%" OR name LIKE "%g" OR name LIKE "%g%") OR (name LIKE "A%" OR name LIKE "%a" OR name LIKE "%a%") ) AND (salary > 350000 AND salary< 900000 );

TRUNCATE TABLE Actors;
drop tables Actor;
drop tables Actors;
/\* _/
/_ _/
/_ _/
/_ \*/

CREATE TABLE FILMES (
id INT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
data_lancamento DATE NOT NULL,
avaliacao INT
);

INSERT INTO FILMES (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
1,
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
INSERT INTO FILMES (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
2,
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

INSERT INTO FILMES (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
3,
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

INSERT INTO FILMES (id, nome, sinopse, data_lancamento, avaliacao)
VALUES(
4,
"Tropa de Elite",
"Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
"2007-10-5 ",
10.1
);

SELECT id, nome, avaliacao FROM FILMES where id = 4 ;
SELECT _ FROM FILMES where nome LIKE "Tropa%";
SELECT _ FROM FILMES where avaliacao >= 7;
SELECT \* FROM FILMES where nome like " %vida%";

drop tables FILMES;
/\* _/
/_ _/
/_ \*/
