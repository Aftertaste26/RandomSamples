
let jollibee = {
    name: 'Jollibee',
    description: 'Jollibee is that happy place where one can savor a crispy chicken with joy, hence the name Chickenjoy!',
    category: [{
        name: 'Burger and Sandwich | Value Meal |',
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
        name: 'Chickenjoy | Value Meal |',
        menu: [
            { name: '1pc Chickenjoy | original or Spicy |', price: 85 },
            { name: '2pc Chickenjoy | original or Spicy |', price: 145 },
            { name: '1pc Chickenjoy | original or Spicy | with Jollibee Spagehetti', price: 120 },
            { name: '1pc Chickenjoy | original or Spicy | with palabok', price: 140 },
            { name: 'Chickenjoy Super Value Meals', price: 120 }
        ]
    }, {
        name: 'Rice Meals | Value Meal |',
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
        name: 'Noodles | Value Meal |',
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
    rating: [3, 3, 5, 5], //set of number
    review: [
        { description: 'This was my first visit to a Jollibee in the Philippines, having only visited before in Brunei and Hong Kong.I love the Palabok and chicken joy!!!!This is great Filipino fast food - go Jollibee!', appetite: 8, by: 'Frank' },
        { description: 'Best fast food We ate at Jolibee several times during our 21 day stay in the Philippines. It was a great meal and cheap. You have to get Sarsi pop and the mango peach pie to go with it!', appetite: 15, by: 'Feliz' },
        { description: 'Bida ang sya with jollibee', appetite: 2, by: 'Benjie Ian' }
    ]
}
let mcdo = {
    name: 'Mcdonalds',
    description: 'Jollibee is that happy place where one can savor a crispy chicken with joy, hence the name Chickenjoy!',
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
            { name: '1pc Chickenjoy | original or Spicy |', price: 128 },
            { name: '2pc Chickenjoy | original or Spicy |', price: 118 },
            { name: '1pc Chickenjoy | original or Spicy | with Jolly Spagehetti', price: 128 },
            { name: '1pc Chickenjoy | original or Spicy | with palabok', price: 128 },
            { name: 'Chickenjoy Super Value Meals', price: 128 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 128 },
            { name: '1pc Burger Steak', price: 118 },
            { name: 'Pepper Beef', price: 128 },
            { name: 'Shanghai Roll', price: 128 },
        ]
    },
    ],
    rating: [5, 5, 5, 5], //set of number
    review: [{
        description: 'This is a fast food chain - you may find this store everywhere in Iloilo. Good for those who are in hurry and hangry.. I love the McDonald\'s new burger and hot fries!', appetite: 5, by: 'Chem'
    }]
}
let chowking = {
    name: 'Chowking',
    description: 'not yet',
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
            { name: 'Chicken Supreme with drink', price: 193 },
            { name: 'Tender Beef Broccoli with drink', price: 164 },
            { name: 'Sweet & Sour Pork with drink', price: 142 },
            { name: 'Orange Chicken with drink', price: 142 },
            { name: 'Breaded Pork with drink', price: 142 },
            { name: 'Breaded Fish with drink', price: 142 },
            { name: 'Shanghai with drink', price: 142 }
        ]
    }, {
        name: 'Chinese Rice Meal',
        menu: [
            { name: 'Quarter Chicken Supreme with drink', price: 131 },
            { name: 'Boneless Bangus with Garlic Rice and drink', price: 127 },
            { name: 'tender Beef Broccoli with drink', price: 109 },
            { name: 'Chopsuey with drink', price: 109 },
            { name: 'Sweet and Sour Pork with drink', price: 98 },
            { name: 'Orange chicken with drink', price: 98 }
        ]
    }, {
        name: 'Chao Fan',
        menu: [
            { name: 'Yang Chao', price: 98 },
            { name: 'Spicy with drink', price: 98 },
            { name: 'Chorizo with drink', price: 54 },
            { name: 'Pork with drink', price: 54 },
            { name: 'Beef with drink', price: 54 }
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
            { name: 'Halo-Halo with 14 Sarap-Tamis Ingredients', price: 72 },
        ]
    }
    ],
    rating: [3, 3, 3, 3], //set of number
    review: [{ description: 'Fast food Chinese style. The food is cheap version of Chinese food. Not to bad. Fast cheap and clean. If you need quick ok food and like Chinese this is the place .', appetite: 5, by: 'Em' }]
}
let greenwich = {
    name: 'Greenwich',
    description: 'not ye',
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
            { name: '1pc Chickenjoy | original or Spicy |', price: 128 },
            { name: '2pc Chickenjoy | original or Spicy |', price: 118 },
            { name: '1pc Chickenjoy | original or Spicy | with Jolly Spagehetti', price: 128 },
            { name: '1pc Chickenjoy | original or Spicy | with palabok', price: 128 },
            { name: 'Chickenjoy Super Value Meals', price: 128 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 128 },
            { name: '1pc Burger Steak', price: 118 },
            { name: 'Pepper Beef', price: 128 },
            { name: 'Shanghai Roll', price: 128 },
        ]
    },
    ],
    rating: [2, 3, 1, 1], //set of number
    review: [{
        description: 'I ordered thick crust but got thin crust Terrible: cashier has no change, so my change was incorrect.I ordered thick crust for take out.When I got home and opened the carton it was thin crust.DISAPOINTED', appetite: 5, by: 'Benji John'
    }]
}
let burgerking = {
    name: 'Burgerking',
    description: 'not yet',
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
            { name: '1pc Chickenjoy | original or Spicy |', price: 128 },
            { name: '2pc Chickenjoy | original or Spicy |', price: 118 },
            { name: '1pc Chickenjoy | original or Spicy | with Jolly Spagehetti', price: 128 },
            { name: '1pc Chickenjoy | original or Spicy | with palabok', price: 128 },
            { name: 'Chickenjoy Super Value Meals', price: 128 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 128 },
            { name: '1pc Burger Steak', price: 118 },
            { name: 'Pepper Beef', price: 128 },
            { name: 'Shanghai Roll', price: 128 },
        ]
    },
    ],
    rating: [1, 1, 2, 5], //set of number
    review: [{
        description: 'Where big burgers are served. Burger king is the most worth burger I have ever tasted. Their burgers are tender and juicy and the rest of the ingredients are perfectly cooked. Everyone can eat this. I assure you, whooper is the best thing to order.', appetite: 5, by: 'Luke'
    }]
}
let kfc = {
    name: 'KFC',
    description: 'not yet',
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
            { name: '1pc Chickenjoy | original or Spicy |', price: 128 },
            { name: '2pc Chickenjoy | original or Spicy |', price: 118 },
            { name: '1pc Chickenjoy | original or Spicy | with Jolly Spagehetti', price: 128 },
            { name: '1pc Chickenjoy | original or Spicy | with palabok', price: 128 },
            { name: 'Chickenjoy Super Value Meals', price: 128 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 128 },
            { name: '1pc Burger Steak', price: 118 },
            { name: 'Pepper Beef', price: 128 },
            { name: 'Shanghai Roll', price: 128 },
        ]
    },
    ],
    rating: [2, 3, 2, 2], //set of number
    review: [{
        description: 'Eating out in KFC Philippines unlike in India is a always a different experience since they also serve rice along with Hot&Crispy chicken as an addon. I love it since I\'m a rice eater.', appetite: 5, by: 'Ron'
    }]
}
let mangInasal = {
    name: 'Mang Inasal',
    description: 'not yet',
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
            { name: '1pc Chickenjoy | original or Spicy |', price: 128 },
            { name: '2pc Chickenjoy | original or Spicy |', price: 118 },
            { name: '1pc Chickenjoy | original or Spicy | with Jolly Spagehetti', price: 128 },
            { name: '1pc Chickenjoy | original or Spicy | with palabok', price: 128 },
            { name: 'Chickenjoy Super Value Meals', price: 128 }
        ]
    }, {
        name: 'Rice Meals',
        menu: [
            { name: 'Unltimate Burger Steak ', price: 128 },
            { name: '1pc Burger Steak', price: 118 },
            { name: 'Pepper Beef', price: 128 },
            { name: 'Shanghai Roll', price: 128 },
        ]
    },
    ],
    rating: [3, 3, 2, 2], //set of number
    review: [{ description: 'I loved experiencing Mang Inasal\'s chicken.It is good value for money and there\'s unlimited rice too. I will definitely be back one day!', appetite: 5, by: 'Jay' }]
}
let macao = {
    name: 'Macao Imperial Tea',
    description: 'not yet',
    category: [{
        name: 'tea',
        menu: [
            { name: 'Milk tea', price: 201 },
        ]
    }],
    rating: [3, 3, 2, 2], //set of number
    review: [{ description: 'I really liked the packaging, especially the little red crown on top. T\'was super cute! ', appetite: 5, by: 'Mikee' }]
}
let sharetea = {
    name: 'Sharetea',
    description: 'not yet',
    category: [{
        name: 'tea',
        menu: [
            { name: 'Milk tea', price: 201 },
        ]
    }],
    rating: [3, 3, 2, 2], //set of number
    review: [{ description: 'I am big fan of their custard pudding with a soft, smooth and silky texture which simply slides down my throat with every slurp.', appetite: 5, by: 'Jane' }]
}
let all = []
module.exports.FastFood = { name: 'Fast Food', list: [jollibee, chowking, greenwich, mcdo, burgerking, mangInasal, kfc] }
module.exports.Milktea = { name: 'Milktea', list: [macao, sharetea] }
module.exports.All = { name: 'All', list: all.concat(this.Milktea.list, this.FastFood.list) }
module.exports.Category = [this.All, this.FastFood, this.Milktea]
