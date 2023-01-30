const database = {
    guests: [{
        id: 1,
        name: "Alphonse Meron",
    }, {
        id: 2,
        name: "Damara Pentecust",
    }, {
        id: 3,
        name: "Anna Bowton",
    }, {
        id: 4,
        name: "Hunfredo Drynan",
    }, {
        id: 5,
        name: "Elmira Bick",
    }, {
        id: 6,
        name: "Bernie Dreger",
    }, {
        id: 7,
        name: "Rolando Gault",
    }, {
        id: 8,
        name: "Tiffanie Tubby",
    }, {
        id: 9,
        name: "Tomlin Cutill",
    }, {
        id: 10,
        name: "Arv Biddle",
    }, {
        id: 11,
        name: "Marvin Hamlish", 
    }, {
        id: 12,
        name: "Alfred Prufroct"
    }],
    services: [{
        id: 1,
        name: "Rafting",
        parkIds: [1] 
    }, {
        id: 2,
        name: "Canoeing",
        parkIds: [1] 
    }, {
        id: 3,
        name: "Fishing",
        parkIds: [1, 4] 
    }, {
        id: 4,
        name: "Hiking",
        parkIds: [2, 4, 6] 
    }, {
        id: 5,
        name: "Picnicking",
        parkIds: [2, 3, 6] 
    }, {
        id: 6,
        name: "Rock climbing",
        parkIds: [2] 
    }, {
        id: 7,
        name: "Lodging",
        parkIds: [3, 5] 
    }, {
        id: 8,
        name: "Food",
        parkIds: [3, 6] 
    }, {
        id: 9,
        name: "Parking",
        parkIds: [3, 5] 
    }, {
        id: 10,
        name: "Information",
        parkIds: [3, 5] 
    }, {
        id: 11,
        name: "Chidren play areas",
        parkIds: [5] 
    }, {
        id: 12,
        name: "Zipline",
        parkIds: [6] 
    }],
    parks: [{
        id: 1,
        name: "Chamfort River",
        serviceIds: [1, 2, 3],
        guestIds: [1, 2]

    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        serviceIds: [4, 5, 6],
        guestIds: [3, 4]

    }, {
        id: 3,
        name: "Lodge",
        serviceIds: [5, 7, 8, 9, 10],
        guestIds: [5, 6]

    }, {
        id: 4,
        name: "Gander River",
        serviceIds: [3, 4],
        guestIds: [7, 8]

    }, {
        id: 5,
        name: "Campgrounds",
        serviceIds: [7, 9, 10, 11],
        guestIds: [9, 10]

    }, {
        id: 6,
        name: "Pine Bluffs Trail",
        serviceIds: [4, 5, 8, 12],
        guestIds: [11, 12]

    }]
}