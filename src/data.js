const data = [
  {
    "category": "Electronics",
    "products": [
      {
        "id": 1,
        "name": "Smartphone XYZ",
        "price": 799,
        "category": "Electronics",
        "rating": 4.5,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
        "description": "A high-performance smartphone featuring a sleek design, powerful processor, and an excellent camera for all your daily needs."
      },
      {
        "id": 2,
        "name": "Laptop Pro 15",
        "price": 1199,
        "category": "Electronics",
        "rating": 4.7,
        "inStock": false,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/d/t/n/-original-imahf92dfffymjrc.jpeg?q=70",
        "description": "A powerful laptop with a 15-inch display, ideal for professionals who need high-end performance and portability."
      },
      {
        "id": 3,
        "name": "Bluetooth Headphones",
        "price": 199,
        "category": "Electronics",
        "rating": 4.2,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/j/p/r/-original-imah3dwf6xjtzk7d.jpeg?q=70",
        "description": "Enjoy crystal-clear audio with these Bluetooth headphones, designed for comfort and long listening hours."
      },
      {
        "id": 4,
        "name": "4K TV",
        "price": 999,
        "category": "Electronics",
        "rating": 4.8,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/television/s/8/c/-original-imah2fk5n3vtbfsf.jpeg?q=70",
        "description": "A stunning 4K TV offering vibrant colors, sharp detail, and an immersive viewing experience for your home."
      },
      {
        "id": 5,
        "name": "Smartwatch Z",
        "price": 299,
        "category": "Electronics",
        "rating": 4.6,
        "inStock": false,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/h/d/-original-imah4nbwffswptnx.jpeg?q=70",
        "description": "A stylish and feature-packed smartwatch, perfect for tracking your fitness goals and staying connected on the go."
      }
    ]
  },
  {
    "category": "Fashion",
    "products": [
      {
        "id": 6,
        "name": "Men's Jacket",
        "price": 129,
        "category": "Fashion",
        "rating": 4.4,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/k/v/j/l-no-19547292-wrogn-original-imagk7qgsaqgfgpy.jpeg?q=70",
        "description": "A trendy and comfortable jacket for men, perfect for both casual outings and colder weather."
      },
      {
        "id": 7,
        "name": "Women's Handbag",
        "price": 249,
        "category": "Fashion",
        "rating": 4.7,
        "inStock": false,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/0/f/j/-original-imaggbwdhx2m3knk.jpeg?q=70",
        "description": "A stylish handbag for women, combining elegance and functionality for all your essentials."
      },
      {
        "id": 8,
        "name": "Sneakers",
        "price": 99,
        "category": "Fashion",
        "rating": 4.3,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/v/n/q/8-snk-331-wht-blu-8-bruton-white-blue-original-imah4d6ybhyatpza.jpeg?q=70",
        "description": "Comfortable and durable sneakers that offer a stylish look, perfect for everyday wear."
      },
      {
        "id": 10,
        "name": "Watch",
        "price": 199,
        "category": "Fashion",
        "rating": 4.5,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/g/f/-original-imagrk9rypmyhjmq.jpeg?q=70",
        "description": "A fashionable wristwatch, combining modern design with reliable functionality for any occasion."
      }
    ]
  },
  {
    "category": "Home Appliances",
    "products": [
      {
        "id": 11,
        "name": "Vacuum Cleaner",
        "price": 299,
        "category": "Home Appliances",
        "rating": 4.6,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/vacuum-cleaner/l/e/t/-original-imahy8dcqjzah4ae.jpeg?q=70",
        "description": "A powerful vacuum cleaner that ensures spotless cleaning with ease, designed for both home and office use."
      },
      {
        "id": 12,
        "name": "Air Conditioner",
        "price": 799,
        "category": "Home Appliances",
        "rating": 4.8,
        "inStock": false,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/air-conditioner-new/w/i/x/-original-imagq54j45sxhsmw.jpeg?q=70",
        "description": "An efficient air conditioner that keeps your room cool and comfortable even on the hottest days."
      },
      {
        "id": 13,
        "name": "Microwave Oven",
        "price": 149,
        "category": "Home Appliances",
        "rating": 4.2,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/microwave-new/9/j/r/-original-imah2hyhhzdqjj4r.jpeg?q=70",
        "description": "A compact and easy-to-use microwave oven, ideal for quick meals and reheating leftovers."
      },
      {
        "id": 14,
        "name": "Washing Machine",
        "price": 499,
        "category": "Home Appliances",
        "rating": 4.7,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/c/a/b/-original-imahfs4fhngph7ak.jpeg?q=70",
        "description": "A top-loading washing machine with advanced features to make laundry easier and more efficient."
      },
      {
        "id": 15,
        "name": "Refrigerator",
        "price": 899,
        "category": "Home Appliances",
        "rating": 4.9,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/o/r/k/-original-imah3yy4twjegua5.jpeg?q=70",
        "description": "A spacious and energy-efficient refrigerator that keeps your food fresh for longer, with ample storage space."
      }
    ]
  },
  {
    "category": "Books",
    "products": [
      {
        "id": 16,
        "name": "Science Fiction Novel",
        "price": 19,
        "category": "Books",
        "rating": 4.6,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/jpinjbk0/book/4/8/9/singing-my-him-song-original-imafbqqvh6vh2as7.jpeg?q=70",
        "description": "An engaging science fiction novel that takes you on an exciting adventure through futuristic worlds."
      },
      {
        "id": 17,
        "name": "History Book",
        "price": 25,
        "category": "Books",
        "rating": 4.3,
        "inStock": false,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/book/o/v/n/a-brief-history-of-modern-india-original-imah56b2wvs2vaqf.jpeg?q=70",
        "description": "A comprehensive history book that explores the key events and figures that shaped modern times."
      },
      {
        "id": 18,
        "name": "Cooking Guide",
        "price": 15,
        "category": "Books",
        "rating": 4.7,
        "inStock": true,
        "image":"https://rukminim2.flixcart.com/image/612/612/kxnl6kw0/regionalbooks/u/y/j/mughal-shahi-dastar-khwan-hindi-cooking-recipes-original-imagafkagh9mnhr8.jpeg?q=70",
        "description": "A complete guide to cooking, filled with delicious recipes and tips for both beginners and experts."
      },
      {
        "id": 19,
        "name": "Fantasy Novel",
        "price": 20,
        "category": "Books",
        "rating": 4.5,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/c/d/b/the-power-of-now-original-imaf22syczadbczp.jpeg?q=70",
        "description": "A thrilling fantasy novel that transports readers to magical lands filled with epic battles and mythical creatures."
      },
      {
        "id": 20,
        "name": "Mystery Thriller",
        "price": 18,
        "category": "Books",
        "rating": 4.5,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/kqidx8w0/book/g/l/2/the-case-book-of-sherlock-holmes-original-imag4g3szhgxzcsa.jpeg?q=70"
      },
    ]
  },
  {
    "category": "Sports",
    "products": [
      {
        "id": 21,
        "name": "Football",
        "price": 49,
        "category": "Sports",
        "rating": 4.5,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/krgohow0/ball/s/z/y/300-320-22-5-astra-1-108astrayellow-football-marman-original-imag58aa9vhkjvgy.jpeg?q=70",
        "description": "A durable football designed for both casual and competitive play, with excellent grip and control."
      },
      {
        "id": 22,
        "name": "Cricket Bat",
        "price": 99,
        "category": "Sports",
        "rating": 4.6,
        "inStock": false,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/bat/j/9/r/850-powerstrike-bat-cricket-for-adults-heavy-plastic-tennis-bat-original-imagxqktpewvn8a2.jpeg?q=70",
        "description": "A high-quality cricket bat made from premium willow, perfect for both professionals and beginners."
      },
      {
        "id": 23,
        "name": "Tennis Racket",
        "price": 149,
        "category": "Sports",
        "rating": 4.7,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/kit/y/f/2/cricket-tennis-trainer-rebound-ball-solo-tennis-training-for-original-imah4hfwhgcgfhah.jpeg?q=70",
        "description": "A lightweight tennis racket with excellent balance and control, ideal for players of all skill levels."
      },
      {
        "id": 24,
        "name": "Basketball",
        "price": 39,
        "category": "Sports",
        "rating": 4.3,
        "inStock": true,
        "image": "https://rukminim2.flixcart.com/image/612/612/kkimfm80/ball/4/r/2/100-7-engraver-nv-201-basketball-nivia-original-imafzungs7v2zkny.jpeg?q=70", 
        "description": "A sturdy and well-designed basketball that provides excellent bounce and grip for outdoor play."
      },
      {
        "id": 25,
        "name": "Badminton Racket",
        "price": 59,
        "category": "Sports",
        "rating": 4.4,
        "inStock": false,
        "image": "https://rukminim2.flixcart.com/image/612/612/xif0q/shuttle/l/j/m/smash-hit-22-nylon-shuttle-cock-badminton-shuttlecock-6-79-nylon-original-imaghxd9mx9bthxw.jpeg?q=70",
        "description": "A durable and lightweight badminton racket, offering superior control and power for every shot."
      }
    ]
  }
];
export default data;
