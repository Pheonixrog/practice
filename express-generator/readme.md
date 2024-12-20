# Express Generator
- makes all the essential folders for backend
# steps to use express generator
- install globally , npm i express-generator -g

to create new app anywhere:
open cmd move to desktop
create new app : 
express appname --view=ejs

now use 3 command
cd appname
npm i
open in vs code


# client                  server
  cookie                  session
  saving on frontend      saving on backend

for sessions u need express-session

# cookie setup
- cookie setup
- res.cookie("name",value)
- cookie reading
- req.cookies.name
- cookie delete 
- res.clearCookie("name")