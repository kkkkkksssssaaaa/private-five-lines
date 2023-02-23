const database: any = {
  find(param: string): number {
    return 1;
  },

  updateOne(id: number, amount: number): void {
    console.log(`${id} updated.`);
  }
}

function deposit(to: string, amount: number) {
  let accountId = database.find(to);
  database.updateOne(accountId, {$inc: {balance: amount}});
}

function transfer(from: string, to: string, amount: number) {
  deposit(from, -amount);
  deposit(to, amount);
}

