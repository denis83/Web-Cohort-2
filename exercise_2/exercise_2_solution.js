// Copy and paste js here
import "./styles.css";

const createDeckButton = document.getElementById("createDeck");
const drawHandButton = document.getElementById("drawHand");
const drawAceOfSpadesButton = document.getElementById("drawAceOfSpades");

let deckId = document.getElementById("deck").textContent;
let handCount = document.getElementById("handCount").textContent;

createDeckButton.addEventListener("click", createDeck);
drawHandButton.addEventListener("click", drawHand);
drawAceOfSpadesButton.addEventListener("click", drawAceOfSpades);

function createDeck() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Extract the deck ID from the response
      const deckId = data.deck_id;
      // Print the deck ID
      console.log(`Deck ID: ${deckId}`);
      deck.textContent = data.deck_id;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function drawHand() {
  let deckId = document.getElementById("deck").textContent;
  let handCount = document.getElementById("handCount").value;
  fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${handCount}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var hand = document.getElementById("hand");
      hand.innerHTML = "";
      data.cards.forEach((card) => {
        var image = document.createElement("img");
        image.src = card.image;
        hand.appendChild(image);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function drawAceOfSpades() {
  // Your work goes here

  let deckId = document.getElementById("deck").textContent;
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var hand = document.getElementById("aceofSpades");
      hand.innerHTML = "";
      const aceOfSpades = data.cards.find(
        (card) => card.value === "ACE" && card.suit === "SPADES"
      );
      if (aceOfSpades) {
        var image = document.createElement("img");
        image.src = aceOfSpades.image;
        hand.appendChild(image);
      } else {
        console.error("Ace of Spades not found in the deck.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  /*     -------------- My initial attemp ---- Why does deck doesn't update to new deck?--- 
  let NewDeckId = document.getElementById("deck").textContent;
  // Create new deck and put only AS in it
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Extract the deck ID from the response
      const deckId = data.deck_id;
      // Print the deck ID
      console.log(`NEW Deck ID: ${NewDeckId}`);
      deck.textContent = data.deck_id;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // wait 5 seconds to process new deck request
  setTimeout(() => {
    console.log("Waited 5 seconds!");
  }, 5000);

  // Draw that one card - AS
  fetch(`https://deckofcardsapi.com/api/deck/${NewDeckId}/draw/?count=1`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var hand = document.getElementById("aceofSpades");
      hand.innerHTML = "";
      data.cards.forEach((card) => {
        var image = document.createElement("img");
        image.src = card.image;
        hand.appendChild(image);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    */
}
