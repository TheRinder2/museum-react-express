@echo off
cd /d "c:\Users\Some\Desktop\react-express-lab-master"
echo Installing root dependencies...
call npm install

echo.
echo Installing server dependencies...
cd server
call npm install
cd ..

echo.
echo Installing client dependencies...
cd client
call npm install
cd ..

echo.
echo All dependencies installed!
echo.
pause
