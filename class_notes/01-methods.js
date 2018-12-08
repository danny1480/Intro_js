let restaurant = {
    name: 'Mohammad Cafe',
    guestCapacity: 80,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize;
    }
}

//Seat party
restaurant.seatParty(77);
//console.log(restaurant.checkAvailability(4));
//Remove party
restaurant.removeParty(7);
console.log(restaurant.checkAvailability(5));