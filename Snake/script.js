const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");
        
        const gridSize = 20;
        let snake = [{x: 200, y: 200}];
        let food = {x: 100, y: 100};
        let direction = "RIGHT";
        let gameInterval;
        let score = 0;
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
        
        function updateScore() {
            document.getElementById("score").textContent = score;
        }
        
        function updateLeaderboard() {
            leaderboard.push(score);
            leaderboard.sort((a, b) => b - a);
            leaderboard = leaderboard.slice(0, 5);
            localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
            document.getElementById("leaderboard").innerHTML = leaderboard.map(s => `<li>${s}</li>`).join('');
        }
        
        function drawSnake() {
            ctx.fillStyle = "lime";
            snake.forEach(part => {
                ctx.fillRect(part.x, part.y, gridSize, gridSize);
            });
        }
        
        function drawFood() {
            ctx.fillStyle = "red";
            ctx.fillRect(food.x, food.y, gridSize, gridSize);
        }
        
        function moveSnake() {
            let head = { ...snake[0] };
            if (direction === "RIGHT") head.x += gridSize;
            else if (direction === "LEFT") head.x -= gridSize;
            else if (direction === "UP") head.y -= gridSize;
            else if (direction === "DOWN") head.y += gridSize;
            
            if (head.x === food.x && head.y === food.y) {
                score++;
                updateScore();
                generateFood();
            } else {
                snake.pop();
            }
            
            if (isCollision(head)) {
                clearInterval(gameInterval);
                alert("Game Over!");
                updateLeaderboard();
                return;
            }
            
            snake.unshift(head);
        }
        
        function isCollision(head) {
            return snake.some((part, index) => index !== 0 && part.x === head.x && part.y === head.y) ||
                   head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height;
        }
        
        function generateFood() {
            let newFood;
            do {
                newFood = {
                    x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
                    y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
                };
            } while (snake.some(part => part.x === newFood.x && part.y === newFood.y));
            food = newFood;
        }
        
        function findBestMove() {
            let possibleMoves = ["UP", "DOWN", "LEFT", "RIGHT"];
            possibleMoves = possibleMoves.filter(move => {
                let testHead = { ...snake[0] };
                if (move === "UP") testHead.y -= gridSize;
                else if (move === "DOWN") testHead.y += gridSize;
                else if (move === "LEFT") testHead.x -= gridSize;
                else if (move === "RIGHT") testHead.x += gridSize;
                return !isCollision(testHead);
            });
            
            direction = possibleMoves.reduce((bestMove, move) => {
                let testHead = { ...snake[0] };
                if (move === "UP") testHead.y -= gridSize;
                else if (move === "DOWN") testHead.y += gridSize;
                else if (move === "LEFT") testHead.x -= gridSize;
                else if (move === "RIGHT") testHead.x += gridSize;
                
                let currentDistance = Math.abs(food.x - snake[0].x) + Math.abs(food.y - snake[0].y);
                let newDistance = Math.abs(food.x - testHead.x) + Math.abs(food.y - testHead.y);
                
                if (newDistance < currentDistance) return move;
                return bestMove;
            }, possibleMoves[0]);
        }
        
        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            findBestMove();
            moveSnake();
            drawSnake();
            drawFood();
        }
        
        function restartGame() {
            clearInterval(gameInterval);
            snake = [{x: 200, y: 200}];
            food = {x: 100, y: 100};
            direction = "RIGHT";
            score = 0;
            updateScore();
            gameInterval = setInterval(gameLoop, 100);
        }
        
        updateLeaderboard();
        gameInterval = setInterval(gameLoop, 100);