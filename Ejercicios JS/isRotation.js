function isSubstring (str1, str2) {
  var flag = false;
  if (str1.length > str2.length) {
      for (var i = 0; i <= str1.length - str2.length; i++) {
        var res = '';
        for (var j = i; j < i + str2.length && j < str1.length && i + str2.length <= str1.length; j++) {
          res += str1[j];
        }
        if (res === str2) {
          flag = true;
          break;
        }
      }
  }
  return flag;
}

function isRotation (str1, str2) {
  var flag = false;
  if (str1.length === str2.length) {
    str1 += str1;
      if (isSubstring (str1, str2)) {
        flag = true
        return flag;
      } else {
        return flag;
      }
  }
  return flag;
}
console.log(isRotation('waterbottle','terbottlewa'));
console.log(isRotation('waterbottle','alsdkfasdfs'));