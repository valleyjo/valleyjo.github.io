//ppl = list;
var last = 0;
next_ten = function () {
  var i = last;
  while (i < last + 10){
    var id = ppl.list[i];
    var url_end = id.substring(0, id.length-2);
    window.open("http://facebook.com/" + url_end, "_blank");
    i++;
  }
  last = i;
}
