const isValid = (price) => {
  if (price <= 0) {
    alert("no negative number in price input");
    return;
  }
  const reg = new RegExp("^[0-9]*$");
  if (!reg.test(price)) {
    alert("you can write only number in price input");
    return;
  }
  return true;
};

export default isValid;
