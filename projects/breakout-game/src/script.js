let rulesBtn = null;
let closeBtn = null;
let rules = null;
let canvas = null;
let ctx = null;

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;
const delay = 500; // delay to reset the game

const bricks = [];

let ball = null;
let paddle = null;
let brickInfo = null;

export const getDOMElements = () => {
    rulesBtn = document.getElementById("rules-btn");
    closeBtn = document.getElementById("close-btn");
    rules = document.getElementById("rules");
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    setProps();
    createBricks();
    update();
    addEvents();
};

const addEvents = () => {
    // keyboard event
    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    // rules and close event
    rulesBtn.addEventListener("click", () => rules.classList.add("show"));
    closeBtn.addEventListener("click", () => rules.classList.remove("show"));
};

// create ball props
const setProps = () => {
    ball = {
        x:canvas.width/2,
        y:canvas.height/2,
        size:10,
        speed:4,
        dx:4,
        dy:-4,
        visible:true
    };
    
    // create paddle props
    paddle = {
        x:canvas.width/2-40,
        y:canvas.height-20,
        w:80,
        h:10,
        speed:8,
        dx:0,
        visible:true
    };
    
    // create brick props
    brickInfo = {
        w:70,
        h:20,
        padding:10,
        offsetX:45,
        offsetY:60,
        visible:true
    };
};

// create bricks
const createBricks = () => {
    for(let i = 0; i < brickRowCount; i++){
        bricks[i] = [];
        for(let j = 0; j < brickColumnCount; j++){
            const x = i*(brickInfo.w + brickInfo.padding)+brickInfo.offsetX;
            const y = j*(brickInfo.h + brickInfo.padding)+brickInfo.offsetY;
            bricks[i][j] = {x, y, ...brickInfo};
        }
    }
};

// draw ball on canvas
const drawBall = () => {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI*2);
    ctx.fillStyle = ball.visible ? "#0095dd" : "transparent";
    ctx.fill();
    ctx.closePath();
};

// draw paddle on canvas
const drawPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.fillStyle = paddle.visible ? "#0095dd" : "transparent";
    ctx.fill();
    ctx.closePath();
};

// draw score on canvas
const drawScore = () => {
    ctx.font = "20px Arial";
    ctx.fillText(`Score:${score}`, canvas.width-100, 30);
};

// draw bricks on canvas
const drawBricks = () => {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.w, brick.h);
            ctx.fillStyle = brick.visible ? "#0095dd" : "transparent";
            ctx.fill();
            ctx.closePath();
        });
    });
};

// move paddle on canvas
const movePaddle = () => {
    paddle.x += paddle.dx;
    // wall detection
    if(paddle.x + paddle.w > canvas.width){
        paddle.x = canvas.width - paddle.w;
    }
    if(paddle.x < 0){
        paddle.x = 0;
    }
};

// move ball on canvas
const moveBall = () => {
    ball.x += ball.dx;
    ball.y += ball.dy;
    // wall collision (right/left)
    if(ball.x + ball.size > canvas.width || ball.x - ball.size < 0){
        ball.dx *= -1; // ball.dx = ball.dx*-1
    }
    // wall collision (top/bottom)
    if(ball.y + ball.size > canvas.height || ball.y - ball.size < 0){
        ball.dy *= -1;
    }
    // paddle collision
    if(
        ball.x - ball.size > paddle.x &&
        ball.x + ball.size < paddle.x + paddle.w &&
        ball.y + ball.size > paddle.y
    ){
        ball.dy = -ball.speed;
    }
    // brick collision
    bricks.forEach(column => {
        column.forEach(brick => {
            if(brick.visible){
                if(
                    ball.x - ball.size > brick.x && // left brick side check
                    ball.x + ball.size < brick.x + brick.w && // right brick side check
                    ball.y + ball.size > brick.y && // top birck side check
                    ball.y - ball.size < brick.y + brick.h // bottom brick size check
                ){
                    ball.dy *= -1;
                    brick.visible = false;
                    increaseScore();
                }
            }
        });
    });
    //  hit bottom wall - lose
    if(ball.y + ball.size > canvas.height){
        showAllBricks();
        score = 0;
    }
};

const increaseScore = () => {
    score++;
    if(score % (brickRowCount * brickColumnCount) === 0){
        ball.visible = false;
        paddle.visible = false;
        //after 0.5 sec restart the game
        setTimeout(() => {
            score = 0;
            paddle.x = canvas.width/2-40;
            paddle.y = canvas.height-20;
            ball.x = canvas.width/2;
            ball.y = canvas.height/2;
            ball.visible = true;
            paddle.visible = true;
        }, delay);
    }
};

// make all bricks appear
const showAllBricks = () => {
    bricks.forEach(column => {
        column.forEach(brick => (brick.visible = true));
    });
};

// draw everything
const draw = () => {
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
};

// update canvas drawing and animation
const update = () => {
    movePaddle();
    moveBall();
    // draw everything
    draw();
    requestAnimationFrame(update);
};

// keydown event
const keyDown = e => {
    if(e.key === "Right" || e.key === "ArrowRight"){
        paddle.dx = paddle.speed;
    }else if(e.key === "Left" || e.key === "ArrowLeft"){
        paddle.dx = -paddle.speed;
    }
};

// keyup event
const keyUp = e => {
    if(
        e.key === "Right" ||
        e.key === "ArrowRight" ||
        e.key === "Left" ||
        e.key === "ArrowLeft"
    ){
        paddle.dx = 0;
    }
};