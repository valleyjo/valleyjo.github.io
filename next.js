//past in this first:
//ppl = [...];

var number_viewed_profiles= 0;
next = function() {
  var i = number_viewed_profiles;
  while (i < last + 10){
    var id = ppl[i];
    var url_end = id.substring(0, id.length-2);
    window.open("http://facebook.com/" + url_end, "_blank");
    i++;
  }
  number_viewed_profiles = i;
};
