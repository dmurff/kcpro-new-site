CREATE TABLE hoops (
id UUID PRIMARY KEY gen_random_uuid(),
name TEXT,
brand TEXT NOT NULL,
model TEXT NOT NULL,
price DECIMAL(10, 2) NOT NULL,
description TEXT,
install_price DECIMAL,
can_sell BOOLEAN DEFAULT false,
can_install_only BOOLEAN,
backboard_size TEXT,
backboard_material TEXT,
post_size TEXT,
adjustment_range TEXT,
anchor_type TEXT,
description TEXT,
is_featured BOOLEAN DEFAULT false,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);





[
  {
    "brand": "Ironclad",
    "model": "GC-55-LG",
    "price": 1899,
    "installPrice": 950,
    "canSell": true,
    "canInstallOnly": false,
    "backboardSize": 60,
    "backboardMaterial": "Tempered glass",
    "postSize": "5 x 5",
    "adjustmentRange": "7.5-10",
    "anchorType": "Bolt-down",
    "description": "Our most popular choice! This hoop sets the gold standard for driveway basketball. It's sturdy 60 inch board delivers a true rebound!"
  },
  {
    "brand": "Ironclad",
    "model": "TPT-553-LG",
    "price": 2499,
    "installPrice": 950,
    "canSell": true,
    "canInstallOnly": false,
    "backboardSize": 60,
    "backboardMaterial": "Tempered glass",
    "postSize": "5 x 5",
    "adjustmentRange": "5.5-10",
    "anchorType": "Bolt-down",
    "image": "",
    "description": "Durable, versatile, and perfect for any space. This hoop was designed with quality and longevity in mind. Offering the lowest adjustment on the market, this hoop is great for all ages!"
  },
  {
    "brand": "Ironclad",
    "model": "FCH-664-XL",
    "price": 2599,
    "installPrice": 950,
    "canSell": true,
    "canInstallOnly": false,
    "backboardSize": 60,
    "backboardMaterial": "Tempered glass",
    "postSize": "6 x 6",
    "adjustmentRange": "5.5-10",
    "anchorType": "Bolt-down",
    "description": "This hoop is a beast and has unparalelled curb appeal. Built for abuse this hoop is heavy and can handle hanging on the rim. A great blend of performance and fun with a low minumum height setting!"
  },
  {
    "brand": "Ironclad",
    "model": "FCH-684-XXL",
    "price": 2799,
    "installPrice": 950,
    "canSell": true,
    "canInstallOnly": false,
    "backboardSize": 72,
    "backboardMaterial": "Tempered glass",
    "postSize": "6 x 8",
    "adjustmentRange": "5.5-10",
    "anchorType": "Bolt-down",
    "description": "This hoop brings the gymnasium home. Designed with serious players in mind the backboard has regulation dimensions. A great blend of performance and fun with a low minumum height setting!"
  }
]
// Our units were designed by Ironclad Sports Inc. with performance
//           and quality in mind. For over 30 years they've innovated, producing
//           goals that set the standard for residential in-ground hoops. All units
//           are bolt-down and come with full padding and a lifetime warranty.
