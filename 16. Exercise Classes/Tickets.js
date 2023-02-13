function solve(list, sortCriteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let tickets = [];
  for (let ticket of list) {
    let [destination, price, status] = ticket.split("|");
    tickets.push(new Ticket(destination, Number(price), status));
  }

  return tickets.sort((a, b) => {
    if (typeof a[sortCriteria] === "string") {
      return a[sortCriteria].localeCompare(b[sortCriteria]);
    } else {
      return a[sortCriteria] - b[sortCriteria];
    }
  } );
}

solve(
  [
    "Philadelphia|94.20|available",

    "New York City|95.99|available",

    "New York City|95.99|sold",

    "Boston|126.20|departed",
  ],

  "destination"
);
