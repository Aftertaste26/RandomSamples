
let jollibee = {
    name: 'Jollibee',
    description: '',
    location: 'Festive Mall',
    specialty:' "Chickenjoy" fried chicken',
    category: [{
        name: 'Burger and Sandwich',
        menu: [
            { name: 'champ', price: 158 },
            { name: 'cheesy bacon mushroom Champ', price: 172 },
            { name: 'Yum', price: 72 },
            { name: 'Yum and cheese', price: 82 },
            { name: 'Yum with TLC', price: 97 },
            { name: 'Cheesy Bacon Mashroom Yum', price: 99 },
            { name: 'Aloha Champ', price: 182 },
            { name: 'Jolly Hotdog Classic', price: 87 }
        ]
    }, {
        name: 'Chickenjoy',
        menu: [
            { name: '1pc Chickenjoy', price: 85 },
            { name: '2pc Chickenjoy', price: 145 },
            { name: '1pc Chickenjoy with Jollibee Spagehetti', price: 120 },
            { name: '1pc Chickenjoy with palabok', price: 140 },
            { name: 'Chickenjoy Super Value Meals', price: 120 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 130 },
            { name: '1pc Burger Steak', price: 53 },
            { name: '1pc Burger Steak w/ 3pcs Shanghai Rolls', price: 72 },
            { name: '2pc Burger Steak', price: 83 },
            { name: 'Garlic Pepper Beef', price: 53 },
            { name: 'Garlic Pepper Beef w/3pcs Shanghai Rolls', price: 72 },
            { name: 'Shanghai Rolls', price: 53 },
        ]
    }, {
        name: 'Noodles',
        menu: [
            { name: 'Jolly Spaghetti w/ Reg. Fries', price: 78 },
            { name: 'Jolly Spaghetti w/ Yum', price: 82 },
            { name: 'Jolly Spaghetti w/ Yum and Twirl', price: 92 },
            { name: 'Jolly Spaghetti w/ Jolly Hotdog', price: 92 },
            { name: 'Palabok', price: 88 }
        ]
    }
    ]
    ,
    rating: 0,
    review: [
        {
            post: 'This was my first visit to a Jollibee in the Philippines, having only visited before in Brunei and Hong Kong.I love the Palabok and chicken joy!!!!This is great Filipino fast food - go Jollibee!',
            by: 'Frank',
            rating: 4,
            appetite: 0,
            appetite_peps: [],
            date: '10/05/2019',
            date_ID: 1570276015310
        },
        {
            post: 'Best fast food We ate at Jolibee several times during our 21 day stay in the Philippines. It was a great meal and cheap. You have to get Sarsi pop and the mango peach pie to go with it!',
            by: 'Feliz',
            rating: 3,
            appetite: 0,
            appetite_peps: [],
            date: '10/05/2019',
            date_ID: 1570276015328
        },
        {
            post: 'Bida ang sya with jollibee',
            by: 'Benjie Ian',
            rating: 3,
            appetite: 0,
            appetite_peps: [],
            date: '10/05/2019',
            date_ID: 1570276015332
        }
    ]
}
let mcdo = {
    name: 'Mcdonalds',
    description: '',
    location: 'Festive',
    specialty: 'hamburgers, cheeseburgers and french fries',
    category: [{
        name: 'Burgers',
        menu: [
            { name: 'Big Mac', price: 201 },
            { name: 'Burger McDo', price: 108 },
            { name: 'Cheeseburger', price: 124 },
            { name: 'Cheeseburger deluxe', price: 149 },
            { name: 'Cheesy Burger McDo', price: 119 },
            { name: 'Ebi Burger Meal', price: 177 },
            { name: 'McCrispy Chicken Fillet Sandwich', price: 119 },
            { name: 'Double Cheesburger', price: 166 },
            { name: 'filet-O-Fish', price: 172 },
            { name: 'McChicken', price: 172 },
            { name: 'Quarter Pounder with Cheese', price: 201 }

        ]
    }, {
        name: 'Chicken & Platters',
        menu: [
            { name: '1pc Chickenjoy', price: 128 },
            { name: '2pc Chickenjoy', price: 118 },
            { name: '1pc Chickenjoy with Jolly Spagehetti', price: 128 },
            { name: '1pc Chickenjoy with palabok', price: 128 },
            { name: 'Chickenjoy Super Value Meals', price: 128 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 128 },
            { name: '1pc Burger Steak', price: 118 },
            { name: 'Pepper Beef', price: 128 },
            { name: 'Shanghai Roll', price: 128 }
        ]
    }
    ],
    rating: 0,
    review: [{
        post: 'This is a fast food chain - you may find this store everywhere in Iloilo. Good for those who are in hurry and hangry.. I love the McDonald\'s new burger and hot fries!',
        by: 'Kyle',
        rating: 3,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015335
    }]
}
let chowking = {
    name: 'Chowking',
    description: '',
    location: 'Time Square',
    specialty: 'Chinese-cuisine food',
    category: [{
        name: 'Family Lauriat',
        menu: [
            { name: 'Family A', price: 329 },
            { name: 'Family B', price: 604 }
        ]
    }, {
        name: 'Lauriat',
        menu: [
            { name: 'Chinese Style Fried Chicken', price: 164 },
            { name: 'Chicken Supreme', price: 193 },
            { name: 'Tender Beef Broccoli', price: 164 },
            { name: 'Sweet & Sour Pork', price: 142 },
            { name: 'Orange Chicken', price: 142 },
            { name: 'Breaded Pork', price: 142 },
            { name: 'Breaded Fish', price: 142 },
            { name: 'Shanghai', price: 142 }
        ]
    }, {
        name: 'Chinese Rice Meal',
        menu: [
            { name: 'Quarter Chicken Supreme', price: 131 },
            { name: 'Boneless Bangus with Garlic Rice', price: 127 },
            { name: 'tender Beef Broccoli', price: 109 },
            { name: 'Chopsuey', price: 109 },
            { name: 'Sweet and Sour Pork', price: 98 },
            { name: 'Orange chicken', price: 98 }
        ]
    }, {
        name: 'Chao Fan',
        menu: [
            { name: 'Yang Chao', price: 98 },
            { name: 'Spicy', price: 98 },
            { name: 'Chorizo', price: 54 },
            { name: 'Pork', price: 54 },
            { name: 'Beef', price: 54 }
        ]
    }, {
        name: 'Dimsum & Sidedish',
        menu: [
            { name: '3pcs. Pork/Beef Siomai', price: 32 },
            { name: '2pcs. Buchi Lotus', price: 32 },
            { name: '3pcs. Lupiang Shainghai', price: 32 },
            { name: 'Plain Tofu', price: 32 },
            { name: 'Pork Tofu', price: 43 },
            { name: 'Kangkong with Bagoong', price: 32 },
            { name: 'Chicharap', price: 32 },
            { name: 'Siopao Asado/ Bola-Bola Regular', price: 32 },
            { name: 'Siopao Asado/ Bola-Bola Large', price: 54 }
        ]
    }, {
        name: 'Noodles',
        menu: [
            { name: 'Emperior\'s Beef Mami Classic', price: 98 },
            { name: 'Pancit Canton', price: 72 },
            { name: 'Emperior\'s Wanton Mami Classic', price: 109 },
        ]
    }, {
        name: 'Desserts',
        menu: [
            { name: 'Halo-Halo Regular with 1 Scoop Ice Cream', price: 72 },
            { name: 'Halo-Halo Large with 1 Scoop Ice Cream', price: 105 },
            { name: 'Halo-Halo Regular', price: 61 },
            { name: 'Halo-Halo Large', price: 94 },
            { name: 'Halo-Halo with 14 Sarap-Tamis Ingredients', price: 72 }
        ]
    }
    ],
    rating: 0,
    review: [{
        post: 'Fast food Chinese style. The food is cheap version of Chinese food. Not to bad. Fast cheap and clean. If you need quick ok food and like Chinese this is the place .',
        by: 'Edelynn',
        rating: 3,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015337
    }]
}
let greenwich = {
    name: 'Greenwich',
    post: '',
    location: 'Robinsons Jaro',
    specialty: 'Pizza & Pasta',
    category: [],
    rating: 0,
    review: [{
        post: 'I ordered thick crust but got thin crust Terrible: cashier has no change, so my change was incorrect.I ordered thick crust for take out.When I got home and opened the carton it was thin crust.DISAPOINTED',
        by: 'Benji John',
        rating: 3,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015388
    }]
}
let burgerking = {
    name: 'Burgerking',
    post: '',
    location: 'Sm City',
    specialty: 'Burgers',
    category: [],
    rating: 0,
    review: [{
        post: 'Where big burgers are served. Burger king is the most worth burger I have ever tasted. Their burgers are tender and juicy and the rest of the ingredients are perfectly cooked. Everyone can eat this. I assure you, whooper is the best thing to order.',
        by: 'Luke',
        rating: 3,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015419
    }]
}
let kfc = {
    name: 'KFC',
    post: '',
    category: [],//menu
    location: 'Festive Mall',
    specialty: 'Fried chicken',
    rating: 0,
    review: [{
        post: 'Eating out in KFC Philippines unlike in India is a always a different experience since they also serve rice along with Hot&Crispy chicken as an addon. I love it since I\'m a rice eater.',
        by: 'Ron',
        rating: 3,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015438

    }]
}
let mangInasal = {
    name: 'Mang Inasal',
    post: '',
    location: 'Festive Mall',
    specialty: 'native-style and “nuot-sarap” Chicken Inasal ',
    category: [],
    rating: 0,
    review: [{
        post: 'I loved experiencing Mang Inasal\'s chicken.It is good value for money and there\'s unlimited rice too. I will definitely be back one day!',
        by: 'Jay',
        rating: 4,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015453
    }]
}
let macao = {
    name: 'Macao Imperial Tea',
    post: '',
    category: [],//menu
    location: 'Festive Mall',
    specialty: '',
    rating: 0,
    review: [{
        post: 'Their drinks are so delicious and their staffs are friendly one of best tea shops ever.',
        by: 'Kyle',
        rating: 4,
        appetite: 0,
        appetite_peps: [],
        date: '10/5/2019',
        date_ID: 1570287197281
    },
    {
        post: 'I really liked the packaging, especially the little red crown on top. T\'was super cute!',
        by: 'Jane',
        rating: 4,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015455
    }]
}
let sharetea = {
    name: 'Sharetea',
    post: '',
    category: [],//menu
    location: 'Sm City',
    specialty: '',
    rating: 0,
    review: [{
        post: 'I am big fan of their custard pudding with a soft, smooth and silky texture which simply slides down my throat with every slurp.',
        by: 'Jane',
        rating: 4,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015469
    }]
}
let jo_anns = {
    name: 'Jo-ann\'s Fishball',
    description: '',
    category: [],//menu
    location: 'Molo Plaza, Iloilo City',
    specialty: 'Authentic Fish Ball',
    rating: 0,
    review: [
        {
            post: 'So delicious! I can\'t get enough.',
            by: 'Kyle',
            rating: 4,
            appetite: 0,
            appetite_peps: [],
            date: '10/5/2019',
            date_ID: 1570286690178
        },
        {
            post: 'must try fishball in town with sauce levels 1-4. try the stall across molo mansion',
            by: 'Edelynn',
            rating: 4,
            appetite: 0,
            appetite_peps: [],
            date: '10/05/2019',
            date_ID: 1570276015471
        }]
}
let robertos = {
    name: 'Robertos',
    description: '',
    category: [],//menu
    location: 'JM Basa St., Iloilo City',
    specialty: 'Queens Siopao & Meatballs',
    rating: 0,
    review: [{
        post: 'I love the siopao, meatballs, and lomi. i\'d loved to comeback and taste other meals they offer.but the restaurant is crowded i hope they could expand',
        by: 'Edelynn',
        rating: 5,
        appetite: 0,
        appetite_peps: [],
        date: '10/5/2019',
        date_ID: 1570289865694
    },
    {
        post: 'My favorite place to eat in all of Iloilo City. The Siopao are amazing! I cannot say enough good things about them. Will definitely return!',
        by: 'Kyle',
        rating: 4,
        appetite: 0,
        appetite_peps: [],
        date: '10/5/2019',
        date_ID: 1570287487067
    }
    ]
}
let kapIsing = {
    name: 'Kap Ising Pancit Molo',
    description: '',
    category: [],//menu
    location: 'Brgy. South San Jose, Molo, Iloilo',
    specialty: 'Filipino Soup Retaurant',
    rating: 0,
    review: [{
        post: 'We have been ordering pancit molo from kap ising for years. Still the best. The fresh lumpia is also delicious.',
        by: 'Cherry',
        rating: 4,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015483
    },
    {
        post: 'Went to Molo Park, visited Molo Church and Molo Mansion.Asked the security guard at the church where to eat and he suggested that we take a trycycle to Kap Ising’s Pancit Molo.We ordered pancit molo and fresh lumpia.These items were to die for.It was that good.',
        by: 'Edelynn',
        rating: 4,
        appetite: 0,
        appetite_peps: [],
        date: '10/05/2019',
        date_ID: 1570276015488
    }]

}

let all = []


// E X P O R T S
module.exports.Restaurants = {
    name: 'Restaurant',
    list: [
        robertos,
        kapIsing
    ]
}
module.exports.StreetFood = {
    name: 'Street Food',
    list: [jo_anns]
}
module.exports.FastFood = {
    name: 'Fast Food',
    list: [
        jollibee,
        chowking,
        greenwich,
        mcdo,
        burgerking,
        mangInasal,
        kfc
    ]
}
module.exports.Milktea = {
    name: 'Milktea',
    list: [
        macao,
        sharetea
    ]
}
module.exports.All = {
    name: 'All',
    list: all.concat(
        this.Milktea.list,
        this.FastFood.list,
        this.StreetFood.list,
        this.Restaurants.list
    )
}

module.exports.Type = [
    this.All,
    this.FastFood,
    this.Milktea,
    this.StreetFood,
    this.Restaurants
]
