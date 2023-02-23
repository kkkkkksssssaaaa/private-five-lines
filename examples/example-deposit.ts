const database: any = {
  find(param: string): number {
    return 1;
  },

  updateOne(id: number, amount: number): void {
    console.log(`${id} updated.`);
  }
}

function transfer(from: string, to: string, amount: number) {
  let fromAccountId = database.find(from);
  database.updateOne(fromAccountId, {$inc: {balance: -amount}});

  let toAccountId = database.find(to);
  database.updateOne(toAccountId, {$inc: {balance: amount}});
}

