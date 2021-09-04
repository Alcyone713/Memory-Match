document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'ball',
            img: 'images/Ball.png'
        },
        {
            name: 'Chair',
            img: 'images/Chair.png'
        },
        {
            name: 'hat',
            img: 'images/hat.png'
        },
        {
            name: 'sandbox',
            img: 'images/sandbox.png'
        },
        {
            name: 'Sandcastle',
            img: 'images/SandCastle.png'
        },
        {
            name: 'sunglasses',
            img: 'images/Sunglasses.png'
        },
        {
            name: 'Swimsuit',
            img: 'images/Swimsuit.png'
        },
        {
            name: 'tree',
            img: 'images/Tree.png'
        },
        {
            name: 'Tube',
            img: 'images/Tube.png'
        },
        {
            name: 'umbrella',
            img: 'images/Umbrella.png'
        },
        {
            name: 'ball',
            img: 'images/Ball.png'
        },
        {
            name: 'Chair',
            img: 'images/Chair.png'
        },
        {
            name: 'hat',
            img: 'images/hat.png'
        },
        {
            name: 'sandbox',
            img: 'images/sandbox.png'
        },
        {
            name: 'Sandcastle',
            img: 'images/SandCastle.png'
        },
        {
            name: 'sunglasses',
            img: 'images/Sunglasses.png'
        },
        {
            name: 'Swimsuit',
            img: 'images/Swimsuit.png'
        },
        {
            name: 'tree',
            img: 'images/Tree.png'
        },
        {
            name: 'Tube',
            img: 'images/Tube.png'
        },
        {
            name: 'umbrella',
            img: 'images/Umbrella.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenID = [];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/Blank2.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', FlipCard);
            grid.appendChild(card);
        }
    }
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        let optionOneId = cardsChosenID[0];
        let optionTwoId = cardsChosenID[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId] = setAttribute('src', 'images/Blank2.png');
            cards[optionTwoId] = setAttribute('src', 'images/Blank2.png');
            alert('You have clicked the same image, Fool!!');
        }

        else if (cardsChosen[0] == cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', 'images/White.png');
            cards[optionTwoId].setAttribute('src', 'images/White.png');
            cards[optionOneId].removeEventListener('click', FlipCard);
            cards[optionTwoId].removeEventListener('click', FlipCard);
            cardsWon.push(cardsChosen);
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/Blank2.png')
            cards[optionTwoId].setAttribute('src', 'images/Blank2.png')
        }
        cardsChosen = [];
        cardsChosenID = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length == cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations ! You  found  them  all!!'
        }
    }
    function FlipCard() {
        let cardID = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardID].name);
        cardsChosenID.push(cardID);
        this.setAttribute('src', cardArray[cardID].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();

})
