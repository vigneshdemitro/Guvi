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

_____________________________________________________________________

Exercise-6 : SQLBOLT

1. Find the domestic and international sales for each movie 

Ans: SELECTt tiltle,domestic_sales,international_sales FROM movies 
         join boxoffice on movies.id = boxoffice.movie_id;

2. Show the sales numbers for each movie that did better internationally rather than domestically

Ans: SELECTt tiltle,domestic_sales,international_sales FROM movies 
         join boxoffice on movies.id = boxoffice.movie_id where international_sales > domestic_sales;

3. List all the movies by their ratings in descending order 

Ans: SELECT title, rating FROM movies JOIN boxoffice 
         ON movies.id = boxoffice.movie_id ORDER BY rating DESC;

_____________________________________________________________________

Exercise-7 : SQLBOLT

1. Find the list of all buildings that have employees 

Ans: SELECT distinct building FROM employees;

2. Find the names of the buildings that hold no employees 

Ans: SELECT DISTINCT building_name FROM buildings LEFT JOIN employees
         ON building_name = building WHERE role is NULL;

2. Find the list of all buildings and their capacity

Ans: SELECT * FROM buildings;

3. List all buildings and the distinct employee roles in each building (including empty buildings) 

Ans: SELECT DISTINCT building_name, role FROM buildings 
         LEFT JOIN employees ON building_name = building;

_____________________________________________________________________

Exercise-8 : SQLBOLT

1. Find the name and role of all employees who have not been assigned to a building 

Ans: SELECT name,role FROM employees where building is null;

2. Find the names of the buildings that hold no employees 

Ans: SELECT DISTINCT building_name FROM buildings LEFT JOIN employees
         ON building_name = building WHERE role is NULL;

_____________________________________________________________________

Exercise-9 : SQLBOLT

1. List all movies and their combined sales in millions of dollars 

Ans: SELECT title, (domestic_sales + international_sales) / 1000000 
         as gross_sales FROM movies JOIN boxoffice ON movies.id = boxoffice.movie_id;

2.  List all movies and their ratings in percent 

Ans: SELECT title, (rating*10)as rating_percent FROM movies 
         JOIN boxoffice ON movies.id = boxoffice.movie_id;

3. List all movies that were released on even number years 

Ans: SELECT title,year FROM movies JOIN boxoffice 
         ON movies.id = boxoffice.movie_id where year%2=0;

_____________________________________________________________________

Exercise-10 : SQLBOLT

1. Find the longest time that an employee has been at the studio

Ans: SELECT max(years_employed),* FROM employees;

2. For each role, find the average number of years employed by employees in that role 

Ans: SELECT role, avg(years_employed) as Average_years FROM employees
         GROUP BY role;

3. Find the total number of employee years worked in each building 

Ans: select building,sum(years_employed) as total_years from employees
         group by building

_____________________________________________________________________

Exercise-11 : SQLBOLT

1. Find the number of Artists in the studio (without a HAVING clause)

Ans: SELECT role, COUNT(*) as Number_of_artists
         FROM employees WHERE role = "Artist";

2. Find the number of Employees of each role in the studio 

Ans: SELECT role, COUNT(*) FROM employees GROUP BY role;

3. Find the total number of years employed by all Engineers 

Ans: select role,sum(years_employed) as total_employees from employees where role = "Engineer"

_____________________________________________________________________

Exercise-12 : SQLBOLT

1. Find the number of movies each director has directed

Ans: SELECT director,count(title) as Total_Movies FROM movies
         group by director;

2. Find the total domestic and international sales that can be attributed to each director 

Ans: SELECT director,sum(domestic_sales)+sum(international_sales) as Total_sales FROM movies
         inner join boxoffice on movies.id=boxoffice.movie_id group by director;

_____________________________________________________________________

Exercise-13 : SQLBOLT

1. Add the studio's new production, Toy Story 4 to the list of movies (you can use any director) 

Ans: insert into movies values(4,"Toy Story 4","John Lasseter",2012,120);

2. Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million 
     domestically and 270 million internationally. Add the record to the BoxOffice table. 

Ans: insert into boxoffice values(4,8.7,34000000,270000000);

_____________________________________________________________________

Exercise-14 : SQLBOLT

1. The director for A Bug's Life is incorrect, it was actually directed by John Lasseter 

Ans: update movies set director = "John Lasseter" where title = "A Bug's Life"

2. The year that Toy Story 2 was released is incorrect, it was actually released in 1999

Ans: update movies set year = 1999 where title = "Toy Story 2"

3. Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich

Ans: update movies set title = "Toy Story 3", director = "Lee Unkrich" 
         where title = "Toy Story 8"

_____________________________________________________________________

Exercise-15 : SQLBOLT

1. This database is getting too big, lets remove all movies that were released before 2005

Ans: delete FROM movies where year < 2005;

2. Andrew Stanton has also left the studio, so please remove all movies directed by him

Ans: delete FROM movies where director = "Andrew Stanton";

_____________________________________________________________________

Exercise-16 : SQLBOLT

Create a new table named Database with the following columns:

– Name A string (text) describing the name of the database
– Version A number (floating point) of the latest version of this database
– Download_count An integer count of the number of times this database was downloaded
This table has no constraints. 


Ans: CREATE TABLE Database (
   	 Name TEXT,
    	Version FLOAT,
    	Download_count INTEGER
)

_____________________________________________________________________

Exercise-17 : SQLBOLT

1. Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in

Ans: ALTER TABLE Movies ADD Aspect_ratio FLOAT

2. Add another column named Language with a TEXT data type to store the language that the movie was released in. 
    Ensure that the default for this language is English

Ans: ALTER TABLE Movies ADD Language TEXT Default English

_____________________________________________________________________

Exercise-18 : SQLBOLT

1. We've sadly reached the end of our lessons, lets clean up by removing the Movies table 

Ans: DROP TABLE Movies

2. And drop the BoxOffice table as well 

Ans: DROP TABLE boxoffice

_____________________________________________________________________