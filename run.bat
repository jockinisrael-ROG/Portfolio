@echo off
SETLOCAL EnableExtensions
set "WORKDIR=%~dp0"
cd /d "%WORKDIR%"

echo ===================================================
echo   Installing Project Requirements (npm install)
echo ===================================================
call npm install

if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] npm install failed. Please check the logs above.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ===================================================
echo   Starting the Development Server (npm run dev)
echo ===================================================
call npm run dev

pause
