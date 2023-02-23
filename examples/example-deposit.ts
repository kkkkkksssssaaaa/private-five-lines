function deposit(to: string, amount: number) {
  let accountId = databse.find(to);
  database.updateOne(account, {$inc: {balance: amount}});
}

function transfer(from: string, to: string, amount: number) {
  deposit(from, -amount);
  deposit(to, amount);
}