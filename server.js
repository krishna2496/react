const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
    first_name: "Krishna",
    last_name: "Desai",
    email: "krishnadhanani456@gmail.com",
  });
});

app.use("/slider", (req, res) => {
  res.send([
    {
      title: "Slider 1",
      img: "slider1.jpg",
      description: { en: "Brushes english", fr: "Brushes french" },
    },
    {
      title: "Slider 2",
      img: "slider2.jpg",
      description: { en: "Eye shadow english", fr: "Eye shadow french" },
    },
    {
      title: "Slider 1",
      img: "slider3.jpeg",
      description: { en: "lipstick english", fr: "lipstick french" },
    },
  ]);
});

app.use("/brand", (req, res) => {
  res.send([
    {
      title: "Lakme",
      id: 1,
    },
    {
      title: "Maybelline",
      id: 2,
    },
    {
      title: "Sugar",
      id: 3,
    },
  ]);
});

app.use("/category", (req, res) => {
  res.send([
    {
      title: "lips",
      id: 1,
    },
    {
      title: "eyes",
      id: 2,
    },
  ]);
});

app.use("/product", (req, res) => {
  res.send({
    total: 12,
    product: [
      {
        id: 1,
        brand_id: 1,
        category_id: 2,
        brand_name: "lakme",
        product_name: "Lakme Insta Eye Liner - Blue (9 ml)",
        description:
          "The Lakme Insta-Liner comes in a small package with a sleek, thin brush which is also portable. The brush holder of this product is of a comfortable length, thus making the application of the eyeliner easier.",
        no_rating: 1721,
        star: 4.1,
        price: 500,
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/213532/lakme-eyeconic-liquid-eyeliner-black-4-5-ml_1_display_1609163307_fc67b1cd.jpg",
      },
      {
        id: 2,
        brand_id: 1,
        category_id: 1,
        brand_name: "lakme",
        product_name:
          "Lakme Absolute Plush Matte Lip Crayon 401 Peach Fizz (2.8 g)",
        description:
          "Lakme Absolute Plush Matte Lip Crayon 401 Peach Fizz (2.8 g) Lakme Absolute Plush Matte Lip Crayon 401 Peach Fizz (2.8 g)",
        no_rating: 459,
        star: 4,
        price: 550,
        slider: [
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/213532/lakme-eyeconic-liquid-eyeliner-black-4-5-ml_1_display_1609163307_fc67b1cd.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/213532/lakme-eyeconic-liquid-eyeliner-black-4-5-ml_2_display_1609163307_6efd525b.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/213532/lakme-eyeconic-liquid-eyeliner-black-4-5-ml_3_display_1609163308_a53c15ed.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/213532/lakme-eyeconic-liquid-eyeliner-black-4-5-ml_4_display_1609163308_42b39bc0.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/213532/lakme-eyeconic-liquid-eyeliner-black-4-5-ml_5_display_1609163309_4a19d5f3.jpg",
        ],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/238251/lakme-absolute-plush-matte-lip-crayon-401-peach-fizz-2-8-g_2_display_1620127756_d39d5763.jpg",
      },
      {
        id: 3,
        brand_id: 1,
        category_id: 1,
        brand_name: "lakme",
        product_name:
          "Lakme Absolute Plush Matte Lip Crayon 301 Iced Mocha (2.8 g)",
        description:
          "The Lakme Insta-Liner comes in a small package with a sleek, thin brush which is also portable. The brush holder of this product is of a comfortable length, thus making the application of the eyeliner easier.",
        no_rating: 1721,
        star: 4,
        price: 550,
        slider: [
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/238254/lakme-absolute-plush-matte-lip-crayon-301-iced-mocha-2-8-g_2_display_1620127855_666c23ac.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/238254/lakme-absolute-plush-matte-lip-crayon-301-iced-mocha-2-8-g_1_display_1620127854_fedb3329.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/238254/lakme-absolute-plush-matte-lip-crayon-301-iced-mocha-2-8-g_3_display_1620127856_e8a966ce.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/238254/lakme-absolute-plush-matte-lip-crayon-301-iced-mocha-2-8-g_4_display_1620127856_8ee5e843.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/238254/lakme-absolute-plush-matte-lip-crayon-301-iced-mocha-2-8-g_5_display_1620127862_6cd30dba.jpg",
        ],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/238254/lakme-absolute-plush-matte-lip-crayon-301-iced-mocha-2-8-g_2_display_1620127855_666c23ac.jpg",
      },
      {
        id: 4,
        brand_id: 1,
        category_id: 1,
        brand_name: "lakme",
        product_name: "Lakme Eyeconic Liquid Eyeliner, Black (4.5 ml)",
        description:
          "The Lakme Insta-Liner comes in a small package with a sleek, thin brush which is also portable. The brush holder of this product is of a comfortable length, thus making the application of the eyeliner easier.",
        no_rating: 1721,
        star: 4,
        price: 550,
        slider: [
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/152941/maybelline-new-york-color-show-intense-mystic-mauve-3-5-g-11_4_display_1580115903_dd57d5f1.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/152941/maybelline-new-york-color-show-intense-mystic-mauve-3-5-g_1_display_1506064066_f3451d00.jpg",
          "https://media6.ppl-media.com/tr:h-75,w-75,c-at_max/static/img/product/152941/maybelline-new-york-color-show-intense-mystic-mauve-3-5-g-11_3_display_1580115903_26964fbf.jpg",
        ],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/213532/lakme-eyeconic-liquid-eyeliner-black-4-5-ml_1_display_1609163307_fc67b1cd.jpg",
      },
      /** Maybelline  */
      {
        id: 5,
        brand_id: 2,
        category_id: 2,
        brand_name: "Maybelline",
        product_name:
          "Maybelline Colossal Kajal &amp; Baby Lips Pink lolita &amp; Fit Me Compact Combo (16.9 g)",
        description:
          "Maybelline Colossal Kajal &amp; Baby Lips Pink lolita &amp; Fit Me Compact Combo (16.9 g) Maybelline Colossal Kajal &amp; Baby Lips Pink lolita &amp; Fit Me Compact Combo (16.9 g) Maybelline Colossal Kajal &amp; Baby Lips Pink lolita &amp; Fit Me Compact Combo (16.9 g)",
        no_rating: 1721,
        star: 4.1,
        price: 500,
        slider: [],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/238919/maybelline-colossal-kajal-and-baby-lips-pink-lolita-and-fit-me-compact-combo-16-9-g_1_display_1620799698_e948481c.jpg",
      },
      {
        id: 6,
        brand_id: 2,
        category_id: 1,
        brand_name: "Maybelline",
        product_name:
          "Maybelline New York Baby Lips Alia Loves New York (Pack of 2) - Broadway Red, Brooklyn Bronze",
        description:
          "Maybelline New York Baby Lips Alia Loves New York (Pack of 2) - Broadway Red, Brooklyn Bronze ",
        no_rating: 1721,
        star: 4.1,
        price: 500,
        slider: [],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/207714/maybelline-new-york-baby-lips-alia-loves-new-york-pack-of-2-broadway-red-brooklyn-bronze_1_display_1622638616_30995a3c.jpg",
      },
      {
        id: 7,
        brand_id: 2,
        category_id: 1,
        brand_name: "Maybelline",
        product_name:
          "Maybelline New York Super Stay Matte Ink Liquid Lipstick - Amazonian 70 (5 g)",
        description:
          "Maybelline New York Super Stay Matte Ink Liquid Lipstick - Amazonian 70 (5 g) Maybelline New York Super Stay Matte Ink Liquid Lipstick - Amazonian 70 (5 g)",
        no_rating: 1721,
        star: 4.1,
        price: 500,
        slider: [],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/244799/maybelline-new-york-super-stay-matte-ink-liquid-lipstick-70-amazonian-5-g_8_display_1568192874_d7d3c1b4.jpg",
      },
      {
        id: 8,
        brand_id: 2,
        category_id: 2,
        brand_name: "Maybelline",
        product_name:
          "Maybelline New York Fashion Brow Cream Pencil - Dark Grey (0.78 g)",
        description:
          "Maybelline Colossal Kajal &amp; Baby Lips Pink lolita &amp; Fit Me Compact Combo (16.9 g) Maybelline Colossal Kajal &amp; Baby Lips Pink lolita &amp; Fit Me Compact Combo (16.9 g) Maybelline Colossal Kajal &amp; Baby Lips Pink lolita &amp; Fit Me Compact Combo (16.9 g)",
        no_rating: 1800,
        star: 4.1,
        price: 250,
        slider: [],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/182243/maybelline-new-york-fashion-brow-cream-pencil-grey-1-1-g-13_2_display_1569932869_2f44f6a8.jpg",
      },
      // Sugar
      {
        id: 9,
        brand_id: 3,
        category_id: 1,
        brand_name: "Sugar",
        product_name:
          "SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4",
        description:
          "SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4 SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4",
        no_rating: 1800,
        star: 4.1,
        price: 250,
        slider: [],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/201469/sugar-cosmetics-smudge-me-not-liquid-mini-lipstick-set-nude-set-4-4-ml-79_7_display_1624950112_a536d648.jpg",
      },
      {
        id: 10,
        brand_id: 3,
        category_id: 1,
        brand_name: "Sugar",
        product_name:
          "SUGAR Cosmetics Matte Attack Transferproof Lipstick - 03 The Grandberries Dark Berry (2 g)",
        description:
          "SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4 SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4",
        no_rating: 1800,
        star: 4.1,
        price: 250,
        slider: [],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/190801/sugar-cosmetics-matte-attack-transferproof-lipstick-03-the-grandberries-dark-berry-2-g_7_display_1614228537_9e12c93b.jpg",
      },
      {
        id: 11,
        brand_id: 3,
        category_id: 1,
        brand_name: "Sugar",
        product_name:
          "SUGAR Cosmetics Matte Attack Transferproof Lipstick - 05 Tan Halen Chocolate Brown (2 g)",
        description:
          "SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4 SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4",
        no_rating: 1800,
        star: 4.1,
        price: 250,
        slider: [],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/190803/sugar-cosmetics-matte-attack-transferproof-lipstick-05-tan-halen-chocolate-brown-2-g_8_display_1614228569_f6a02a6f.jpg",
      },
      {
        id: 12,
        brand_id: 3,
        category_id: 2,
        brand_name: "Sugar",
        product_name:
          "SUGAR Cosmetics Kohl Of Honour Intense Kajal - 02 Brown Bag (0.25 g)",
        description:
          "SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4 SUGAR Cosmetics Smudge Me Not Liquid Mini Lipstick Set (Nude Set)(1.7g/0.03 Oz ) *4",
        no_rating: 1800,
        star: 4.1,
        price: 250,
        slider: [],
        img: "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max/static/img/product/195756/sugar-cosmetics-kohl-of-honour-intense-kajal-02-brown-bag-0-25-g_4_display_1582866185_82da87bb.jpg",
      },
    ],
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
