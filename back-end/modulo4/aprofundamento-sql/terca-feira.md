# Terca-feira SQL

## Exercicio 1

### a)

```
~~~ sql
ALTER TABLE Actor DROP COLUMN salary;
```

    o codigo deleta a coluna salary da tabela Actor

### b)

```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

    o codigo muda a tabela gender por sex com um tipo VARCHAR(6), na tabela Actor

### c)

```
~~~ SQL

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

## 2)

### a)

```
    UPDATE Actor SET name = "O Poderoso Bernardo Braga" AND  nascimento = "2001-08-20" WHERE id = 3;
```

### b)

```
    SELECT UPPER (name) FROM Actor;
    SELECT LOWER(name) FROM Actor;

```

### c)

```
    UPDATE Actor SET name='bernardo' nascimento = '2001-08-20' salary=123456 where id = 5;
```

## 3)

### a)

```
    DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

### b)

```
    DELETE FROM Actor WHERE genero LIKE "male" and salario > 1000000
```

## 4)

### a)

```
    SELECT MAX(salary) FROM Actor
```

### b)

```
     SELECT MIN(salary) FROM Actor where genero LIKE 'female'
```

### c)

```
    SELECT COUNT(*) FROM Actor WHERE genero LIKE 'female'
```

### d)

```
     SELECT SUM(salary) FROM Actor
```

## 5)

### a)

```
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
```

    seleciona a quantidade e o genero da tabela de Actor , agrupados por genero

### b)

```
    SELECT id, nome FROM Actor ORDER BY name ASC
```

### c)

```
    SELECT * FROM Actor ORDER BY salario ASC
```

### d)

```
    SELECT AVG(salary) FROM Actor GROUP BY genero
```

## 6)

### a)

```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

### b)

```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

### c)

```
UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001"
```

### d)

```
    DELETE FROM Movie WHERE id = "001"
```
