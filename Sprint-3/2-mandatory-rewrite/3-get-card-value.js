
function getCardValue(card) {
    const rank = card.slice(0, -1);
    if (rank === "A") return 11;
    if (!isNaN(Number(rank))) return Number(rank);
    if (rank === "J" || rank === "Q" || rank === "K") return 10;
    throw new Error("Invalid card rank.");

} 
module.exports = getCardValue;