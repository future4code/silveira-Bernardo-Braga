### 1)

#### a)

        chave estrangeira é quando precisamos de uma informação que esta em uma tabelae que usaremos em outra

#### b)

    INSERT INTO Rating VALUES ("1","TOP",9,"02");

#### c)

    Não vai conseguir pois o id na qual voce esta tentando inserir não existe

#### d)

    ALTER TABLE Movie DROP COLLUM Rating

## 2)

#### a)

    Essa tabela faz a ligação de uma tabela com a outra

#### b)

    INSERT INTO MovieCast(movie_id, actor_id) VALUES('3','1')
    INSERT INTO MovieCast(movie_id, actor_id) VALUES('3','2')
    INSERT INTO MovieCast(movie_id, actor_id) VALUES('2','3')
    INSERT INTO MovieCast(movie_id, actor_id) VALUES('2','4')
    INSERT INTO MovieCast(movie_id, actor_id) VALUES('1','5')
    INSERT INTO MovieCast(movie_id, actor_id) VALUES('1','6')

#### c)

    Não vai far pois o ator nao existe

#### d)

    O mySQL não deixa apagar uma tabela que tenha ligação com outra tabela, para isso devemos deletar as tabelas folhas primeiro

## 3)

#### a)

    Essa query ela seleciona * da tabela Movie, fazendo uma condicional de ver se o id de Movie é igual ao de Rating.movie_id

#### b)

    SELECT m.id as movie_id, r.rate as rating FROM Movie INNER JOIN Rating r ON m.id = r.movie_id;
