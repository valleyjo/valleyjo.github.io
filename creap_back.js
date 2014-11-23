/*
 * Instructions (using chrome):
 *  1) right click and select "view source"
 *  2) press ctrl-f on windows and cmd-f on mac
 *  3) type initialchat
 *  4) it will take you to a section of the source with a long string of numbers
 *     they should look something like this: ["1497344113-2","100001243514282-2"
 *  5) Copy from the first bracket to the last bracket of the list
 *  6) right click the facebook page again and click "Inspect element"
 *  7) select the console in the inspector
 *  8) copy all of this text and paste it in your console -> press enter
 *  9) type "ppl = " and paste in the list you just copied -> press enter
 *  10) type next() -> press enter
 *  11) type next() and press enter again to see the next 10 people
 */

var number_viewed_profiles= 0;
next = function() {
  var i = number_viewed_profiles;
  while (i < number_viewed_profiles + 10){
    var id = ppl[i];
    var url_end = id.substring(0, id.length-2);
    window.open("http://facebook.com/" + url_end, "_blank");
    i++;
  }
  number_viewed_profiles = i;
};
