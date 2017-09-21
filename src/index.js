module.exports = function check(str, bracketsConfig) {
  const openBrackets = {},
        closeBrackets = {},
        sameBrackets = [],
        stack = [],
        splitStr = str.split('');
  let result = true;
  bracketsConfig.forEach((item) => {
    if (item[0] === item[1]) sameBrackets.push(item[0]);
    else {
      openBrackets[item[0]] = item[1];
      closeBrackets[item[1]] = item[0];
    }
  });
  splitStr.forEach((item) => {
    if (openBrackets[item]){
      stack.push(item);
      return;
    }
    if (closeBrackets[item]){
      if(stack.pop() !== closeBrackets[item]) result = false;
      return;
    }
    if (sameBrackets.indexOf(item) > -1) stack.slice(-1).pop() === item ? stack.pop() : stack.push(item);
  });
  if (stack.length > 0) result = false;
  return result;
}
