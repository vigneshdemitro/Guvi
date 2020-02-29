My SQL Exercise-1:  SQLBOLT

1. Find the title of each film

Ans: SELECT title FROM movies;

2. Find the director of each film

Ans: SELECT director FROM movies;

3. Find the title and year of each film

Ans: SELECT title,director FROM movies;

4. Find the title and year of each film

Ans: SELECT title,year FROM movies;

5. Find all the information about each film

Ans: SELECT * FROM movies;

_____________________________________________________________________

My SQL Exercise-2:  SQLBOLT
 
1. Find the movie with a row id of 6

Ans: SELECT title FROM movies where id=6;

2. Find the movies released in the years between 2000 and 2010

Ans: SELECT title FROM movies where year BETWEEN 2000 AND 2010;

3. Find the movies not released in the years between 2000 and 2010

Ans: SELECT title FROM movies where year NOT BETWEEN 2000 AND 2010;

4. Find the first 5 Pixar movies and their release year

Ans: SELECT * FROM movies where id<=5;

_____________________________________________________________________

Exercise-3:  SQLBOLT

1. Find all the Toy Story movies

Ans: SELECT * FROM movies where title like 'TOY STORY%';

2. Find all the movies directed by John Lasseter

Ans: SELECT * FROM movies where DIRECTOR like 'john lasseter';

3. Find all the movies (and director) not directed by John Lasseter

Ans: SELECT * FROM movies where DIRECTOR != 'john lasseter';

4. Find all the WALL-* movies

Ans: SELECT * FROM movies where title LIKE 'WALL%';

_____________________________________________________________________

Exercise-4:  SQLBOLT

1. List all directors of Pixar movies (alphabetically), without duplicates

Ans: SELECT DISTINCT director from movies order by director asc;

2. List the last four Pixar movies released (ordered from most recent to least)

Ans: SELECT * from movies order by year desc limit 4;

3. List the first five Pixar movies sorted alphabetically	

Ans: SELECT * from movies order by title asc limit 5;

4. List the next five Pixar movies sorted alphabetically

Ans: SELECT * from movies order by title asc limit 5 offset 5;

_____________________________________________________________________

Review Task-1: SQLBOLT

1. List all the Canadian cities and their populations

Ans: SELECT city,population from North_american_cities where country='Canada';

2. Order all the cities in the United States by their latitude from north to south

Ans: SELECT city from North_american_cities where country ='United States' 
         order by latitude desc;

3. List all the cities west of Chicago, ordered from west to east

Ans: SELECT city from North_american_cities where longitude <-87.629798;

4. List the two largest cities in Mexico (by population)

Ans: SELECT city FROM north_american_cities where country = 'Mexico' 
         order by population desc limit 2;

5. List the third and fourth largest cities (by population) in the United States and their population

Ans: SELECT city FROM north_american_cities where country = 'United States' 
         order by population desc limit 2 offset 2;

