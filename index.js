
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(muscians, instruments) {
    var allMuscians = [];
    for (var i=0; i < muscians.length; i++) {
        allMuscians.push(muscians[i] + " plays " + instruments[i]);
    }
    return allMuscians;
}
