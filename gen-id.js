function makeid(num = 4) {
  let result = "";
  let characters = "AB8CDE3FGHIJKLMNOPQR0STUV9WX4YZa2bcde1fghijklm7nopq6rstu5vwxyz";
  var characters9 = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}
module.exports = {makeid};
