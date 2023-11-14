function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}


function sortAccountsByLastName(accounts) {
  // Use the sort method to sort the accounts array by last names
  return accounts.sort((account1, account2) =>
    account1.name.last.localeCompare(account2.name.last)
  );
}


function getAccountFullNames(accounts) {
  // Use the map method to create an array of full names
  return accounts.map(account => `${account.name.first} ${account.name.last}`);
}


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
