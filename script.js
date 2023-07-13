function fab (str){
  var obj = {};
  for(let i=0;i<str.length;i++){
    if(obj[str[i]]){
      obj[str[i]]++;
    }
    else{
      obj[str[i]] = 1;
    }
  }
  for(let i =0; i<str.length;i++){
    if(obj[str[i]]===1){
      return str[i];
    }
  }
}