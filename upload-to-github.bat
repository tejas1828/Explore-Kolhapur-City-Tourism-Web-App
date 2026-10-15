@echo off
echo ========================================================
echo   Kolhapur Kult - Git Setup ^& GitHub Upload Assistant
echo ========================================================
echo.

cd /d "%~dp0"

echo 1. Initializing Git repository...
git init
git branch -M main

echo 2. Staging all files...
git add .

echo 3. Creating initial commit...
git commit -m "Complete, responsive, and polished Kolhapur Kult Tourism Web Application"

echo.
echo ========================================================
echo  Local repository is now committed and GitHub-ready!
echo.
echo  To push to your remote GitHub repository:
echo    git remote add origin https://github.com/tejas1828/explore-kolhapur.git
echo    git push -u origin main
echo ========================================================
echo.
pause
