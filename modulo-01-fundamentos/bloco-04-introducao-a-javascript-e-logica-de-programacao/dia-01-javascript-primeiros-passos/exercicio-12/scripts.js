const chessPiece = "knight";

switch (chessPiece) {
  case "king":
    console.log("King: The king moves exactly one square horizontally, vertically, or diagonally. A special move with the king known as castling is allowed only once per player, per game.");
    break;
  case "queen":
    console.log("Queen: The queen moves any number of vacant squares horizontally, vertically, or diagonally.");
    break;
  case "bishop":
    console.log("Bishop: A bishop moves any number of vacant squares diagonally.");
    break;
  case "knight":
    console.log("Knight: A knight can move two squares horizontally then one square vertically.");
    break;
  case "rook":
    console.log("Rook: A rook moves any number of vacant squares horizontally or vertically.");
    break;
  case "pawn":
    console.log("Pawn: A pawn moves straight forward one square, if that square is vacant. If it has not yet moved, a pawn also has the option of moving two squares straight forward, provided both squares are vacant. Pawns cannot move backwards.");
    break;
  default:
    console.log("Error: Invalid piece!");
};