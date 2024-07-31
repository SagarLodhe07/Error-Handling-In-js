const processPayment = (amount, card_number, expiration_date) => {
  if (amount <= 0) throw new Error("Invaild payment amount");

  const cardNumberPattern = /^\d+$/;

  if (
    !card_number ||
    card_number.length == 16 ||
    cardNumberPattern.test(card_number)
  )
    throw new Error("Invaild card number");

  if (!expiration_date || !vaildeCardExp(expiration_date))
    throw new Error("Invaild Expiration date");
};

const vaildeCardExp = (date) => {
  try {
    const [expMonth, expYear] = date.split("/");
    const expDate = new Date(`20${expYear}`, expMonth - 1, 1);
    return expDate > new Date();
  } catch (error) {
    return false;
  }
};

try {
  processPayment(10, "1234-5678-1234-5678", "05/16");
    // processPayment(10, "InvaildCardNumber", "05/01");
} catch (error) {
  console.log(error.message);
}
