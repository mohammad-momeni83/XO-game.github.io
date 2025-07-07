        var color_change = 0;

        changebtncolor = () => {
            if (color_change === 0) {
                document.getElementById("start-btn").style.backgroundColor = "blue";
                document.getElementById("start-btn").style.color = "white";
                color_change = 1;
            } else {
                document.getElementById("start-btn").style.backgroundColor = "white";
                document.getElementById("start-btn").style.color = "black";
                color_change = 0;
            }
        };
        setInterval(changebtncolor, 1000);

        var boardgame = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
        console.log(boardgame)

        startgame = () => {
            document.getElementById("emoji-gif").src = "./media/hmm.gif"
            document.getElementById("board-game").style.width = "1350px"
            document.getElementById("board-game").style.height = "1350px"

            document.getElementById("start-btn").hidden = true
            document.getElementById("restart-game").hidden = false
            document.getElementById("title-text").innerText = "Choose a block..."


            for (var i = 0; i < boardgame.length; i++) {
                for (var j = 0; j < boardgame.length; j++) {
                    console.log(boardgame[i][j])
                    document.getElementById("board-game").innerHTML += `<button onclick="playerclick('${i}${j}')" id="Btn${i}${j}">-</button>`

                }
            }
        }

        var boardState = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];

        var click = "X"
        playerclick = (clickedbtn) => {

            document.getElementById("Btn" + clickedbtn).innerText = click
            document.getElementById("Btn" + clickedbtn).disabled = true
            var i = parseInt(clickedbtn[0]);
            var j = parseInt(clickedbtn[1]);


            if (click == "X") {
                document.getElementById("Btn" + clickedbtn).innerText = click
                document.getElementById("Btn" + clickedbtn).style.color = "#c40000"
                document.getElementById("Btn" + clickedbtn).disabled = true
                boardState[i][j] = click
                console.log(boardState[i][j])
                console.log(boardState)
                if (checkwinner()) {
                    document.getElementById("title-text").innerText = `Player ${click} wins!`;
                    document.getElementById("emoji-gif").src = "./media/emoji-shocked.webp"

                    disableAllButtons();
                    return;
                } else if (isdraw()) {
                    document.getElementById("title-text").innerText = "It's a draw!";
                    document.getElementById("emoji-gif").src = "./media/angry-emoji.webp"
                    return;
                }
                click = "O"
            } else {
                document.getElementById("Btn" + clickedbtn).innerText = click
                document.getElementById("Btn" + clickedbtn).style.color = "#41ead4"
                document.getElementById("Btn" + clickedbtn).disabled = true
                boardState[i][j] = click
                console.log(boardState[i][j])
                console.log(boardState)

                if (checkwinner()) {
                    document.getElementById("title-text").innerText = `Player ${click} wins!`;
                    document.getElementById("emoji-gif").src = "./media/emoji-shocked.webp"

                    disableAllButtons();

                    return;
                } else if (isdraw()) {
                    document.getElementById("title-text").innerText = "It's a draw!";
                    document.getElementById("emoji-gif").src = "./media/angry-emoji.webp"
                    return;
                }
                click = "X"
            }


        }

        checkwinner = () => {
            for (let i = 0; i < 3; i++) {
                if (boardState[i][0] && boardState[i][0] === boardState[i][1] && boardState[i][1] === boardState[i][2]) return true;
                if (boardState[0][i] && boardState[0][i] === boardState[1][i] && boardState[1][i] === boardState[2][i]) return true;
            }
            if (boardState[0][0] && boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2]) return true;
            if (boardState[0][2] && boardState[0][2] === boardState[1][1] && boardState[1][1] === boardState[2][0]) return true;
            return false;


        }

        isdraw = () => {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (boardState[i][j] === "") return false;
                }
            }
            return true;
        }

        restartGame = () => {
            location.reload()
        }