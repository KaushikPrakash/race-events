# Race eventts

Hi! This a small app that to lookup race event List and edit them.


# Project Setup

Extract the zipped code and and run:
`npm i`

This should install all the dependencies.

**Routes Defined:**

/api/v1/raceStartList

This Route is used to:
1. Query all the race startlist data
2. Add new race startlist entries
3. Added pagination, search and filter.

**Sample Request URL:**
http://localhost:5000/api/v1/raceStartList?page=5

**Optional Params for pagination**	
 - page
 - perPage


Things that can be improved: 
1. API documentation
2. DB connection
3. Unit tests

 