import { createSlice } from '@reduxjs/toolkit';
import product1 from './product-1.png';
import product2 from './product-2.png';
import product3 from './product-3.png';
import product4 from './product-4.png';
import product5 from './product-5.png';
import product6 from './product-6.png';
import product7 from './product-7.png';
import product8 from './product-8.png';
import product9 from './product-10.png';
import product10 from './product-11.png';
import product11 from './product-12.png';
import product12 from './product-13.jpg';
import product13 from './product-14.png';
import product14 from './product-15.png';
import product15 from './product-16.png';
import product16 from './product-17.png';
import product17 from './product-18.png';
import product18 from './product-19.png';

const initialState = {
  isCartOpen : false,
    products: [
      {
        id: 1,
        name: "'cerulean flora', by Rachel Schultz, 2022",
        brand: "Picture Room",
        price: 510,
        image: product1,
        desciption: " "
      },
      {
        id: 2,
        name: "floral gesture, by Rachel Schultz, 2021",
        brand: "Picture Room",
        price: 480,
        image: product2,
        desciption: "In a curated selection with the Picture Room, this work by Rachel Schultz, floral gestures unfold intuitively across the page. Schultz, an artist based in New York City, offers up a landscape amongst which emotions and relations can linger, or transit."
      },
      {
        id: 3,
        name: "forest flora, by Rachel Schultz, 2022",
        brand: "Picture Room",
        price: 510,
        image: product3,
        desciption: "In a curated selection with the Picture Room, this work by Rachel Schultz, floral gestures unfold intuitively across the page. Schultz, an artist based in New York City, offers up a landscape amongst which emotions and relations can linger, or transit."
      },
      {
        id: 4,
        name: "A Line Mirror",
        brand: "Form & Refine",
        price: 695,
        image: product4,
        desciption: "Form & Refine’s A Line Mirror is a minimal free-standing mirror with rhombus-shaped two legs and a good height. Durable yet light, the design offers a unique presence that’s both rooted in craftsmanship and sleek modernity. This mirror is meant to lean against the wall, with no fixing needed."
      },
      {
        id: 5,
        name: "A Line Stepstool",
        brand: "Form & Refine",
        price: 395,
        image: product5,
        desciption: "This sturdy and versatile self-supporting stepstool can be used in any space as a stepstool, a bedside table or as extra seating. The A Line Stepstool features a number of important design elements throughout such as curved edge detailing, an extended lower step that creates extra space for storage and the addition of a handle beneath the upper step to serve as a grip and make it easy to move the stool from room to room."
      },
      {
        id: 6,
        name: "A Line Storage Bench 111",
        brand: "Form & Refine",
        price: 1495,
        image: product6,
        desciption: "Form & Refine’s A Line Storage bench  is an updated version of the classic stowaway bench where functionality meets clean form. This piece is solid and versatile with lighter, slightly-reduced dimensions for a standard bench, giving it a minimalistic attitude.Attractive and practical, the design offers a large area for storage with an easy-use lid that is lifted via a small leather handle. Note: the construction of the piece holds the lid in place while in use. The lower cut of the two legs and angles gives this bench a feeling of being uplifted, while the overall design is solid and robust. We recommend this piece as a stand-alone item in a hallway, bedroom or any seating area – it can fit 2 people and hold weight up to 441 lbs."
      },
      {
        id: 7,
        name: "A Line Storage Bench 68",
        brand: "Form & Refine",
        price: 895,
        image: product7,
        desciption: "Form & Refine’s A Line Storage bench  is an updated version of the classic stowaway bench where functionality meets clean form. This piece is solid and versatile with lighter, slightly-reduced dimensions for a standard bench, giving it a minimalistic attitude. Attractive and practical, the design offers a large area for storage with an easy-use lid that is lifted via a small leather handle. Note: the construction of the piece holds the lid in place while in use. The lower cut of the two legs and angles gives this bench a feeling of being uplifted, while the overall design is solid and robust. We recommend this piece as a stand-alone item in a hallway, bedroom or any seating area – it can fit 2 people and hold weight up to 441 lbs."
      },
      {
        id: 8,
        name: "Abstract Collection",
        brand: "Calico",
        price: 10,
        image: product8,
        desciption: "$10 price shown is for an 8 x 10 inch sample. Price per square foot is $30. Inspired by the richness of our unconscious imaginings, Abstract explores the ways of the mind through the use of line, color, and shape. It’s synaptic patterns seek out the subconscious and find expression for that which goes beyond words. Drawing on Calico Wallpaper Co-Founder Rachel’s training as an art therapist, the collection mobilizes Jungian dream-inspired motifs that capture the uninhibited state of raw creation. The result is a sophisticated subliminal composition filled with delicate gestures, bold forms, and overlapping color washes. Abstract invites you on a journey through introspective dreamscapes. Giving way to intuitive forms, it hints at that which exists below the surface. In abstraction, other truths can be found."
      },
      {
        id: 9,
        name: "ADA Sconce",
        brand: "Ravenhill Studio",
        price: 600,
        image: product9,
        desciption: "The Ada Sconce gets its name and its raison d’être from the Americans with Disabilities Act (ADA), which dictates that hallway sconces must not protrude from the wall more than 4”. But the Ada Sconce gets its inspiration from Charlotte Perriand’s archetypal CP-1, in our opinion one of the best sconces ever made. Solid sheet metal construction, modern LED technology, and wet rating make our update both classic and contemporary. Ada is fully suitable for both indoor and outdoor applications and can be mounted vertically or horizontally. "
      },
      {
        id: 10,
        name: "ADA Sconce Corten Steel",
        brand: "Ravenhill Studio",
        price: 900,
        image: product10,
        desciption: "The Ada Sconce gets its name and its raison d’être from the Americans with Disabilities Act (ADA), which dictates that hallway sconces must not protrude from the wall more than 4”. But the Ada Sconce gets its inspiration from Charlotte Perriand’s archetypal CP-1, in our opinion one of the best sconces ever made. Solid sheet metal construction, modern LED technology, and wet rating make our update both classic and contemporary. Ada is fully suitable for both indoor and outdoor applications and can be mounted vertically or horizontally. "
      },
      {
        id: 11,
        name: "ADA Sconce Oak",
        brand: "Ravenhill Studio",
        price: 900,
        image: product11,
        desciption: "The Ada Sconce gets its name and its raison d’être from the Americans with Disabilities Act (ADA), which dictates that hallway sconces must not protrude from the wall more than 4”. But the Ada Sconce gets its inspiration from Charlotte Perriand’s archetypal CP-1, in our opinion one of the best sconces ever made. Solid sheet metal construction, modern LED technology, and wet rating make our update both classic and contemporary. Ada is fully suitable for both indoor and outdoor applications and can be mounted vertically or horizontally. "
      },
      {
        id: 12,
        name: "Agra Rug",
        brand: "Armadillo",
        price: 4740,
        image: product12,
        desciption: "Worked in a single color with a deep cut pile that reflects the light, Agra brings life, character and timeless elegance to contemporary and traditional interiors. Hand-knotted from the finest abrash-dyed wool, this rug is a true celebration of artisanal craftsmanship with luxurious results."
      },
      {
        id: 13,
        name: "Alchimia Intreccio",
        brand: "Elitis",
        price: 10,
        image: product13,
        desciption: "In these graphic and textured designs are woven all the colours of the Memphis movement. They bring together different geometric shapes, forms and effects. The freedom to intersect lines in any direction, to add texture to the fabric, to add subtle references to the great Italian non-conformists, to play with colour."
      },
      {
        id: 14,
        name: "Alfalfa Izra Rug",
        brand: "General Assembly",
        price: 1000,
        image: product14,
        desciption: "The elemental makeup of each rug’s design tells the story of time and craftsmanship. Each column represents the number of artisans at the loom while each box of color proudly shows the ‘IZRA’ – the weave of that particular day. Made up of 100% live wool, this wool was dyed utilizing a blend of natural florals & spices.  Each rug's name showcases the ingredients used to achieve its color way. "
      },
      {
        id: 15,
        name: "Alice Flushmount",
        brand: "Atelier de Troupe",
        price: 1400,
        image: product15,
        desciption: "The Alice collection by Atelier de Troupe, is inspired by brutalist modular architecture. The textured hand blown glass cubes are sandblasted to create a soft glow. Base is available in Satin Brass or Matte Black."
      },
      {
        id: 16,
        name: "Alien Orb Pendant",
        brand: "In Common With",
        price: 1050,
        image: product16,
        desciption: "Every Alien Pendant begins as a slab of clay which is draped by hand over a press mold. This gives it uniformity with a little bit of individuality. Hanging from a cord, it comes in peace. Bulb included."
      },
      {
        id: 17,
        name: "Alien Orb Surface Mount",
        brand: "In Common With",
        price: 900,
        image: product17,
        desciption: "Each shade is made by hand, one at a time. Concealed threading holds an Orb diffuser in the middle, like a pearl inside an oyster. Bulb included.This fixture comes hardwired. We also offer a plug-in version (in case you can’t hardwire, but still want your space to be cute)."
      },
      {
        id: 18,
        name: "Alien Orb Surface Mount, Plug-in",
        brand: "In Common With",
        price: 1150,
        image: product18,
        desciption: "Each shade is made by hand, one at a time. Concealed threading holds an Orb diffuser in the middle, like a pearl inside an oyster. Bulb included. This fixture is a plug-in (in case you can't hardwire but still want your space to be cute). We also offer a hardwired version."
      },
    ],
    cart: [],
    productCounts: {},
  };
  

export const productSlice = createSlice({
name: "products",
initialState,
reducers: {
  addToCart: (state, action) => {
    const { productId, count } = action.payload;
    const productToAdd = state.products.find(
      (product) => product.id === productId
    );
  
    if (productToAdd) {
      const existingProduct = state.cart.find(
        (product) => product.id === productId
      );
  
      if (existingProduct) {
        existingProduct.count += count;
      } else {
        state.cart.push({ ...productToAdd, count });
      }
    }
  },
    removeFromCart: (state, action) => {
    state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
    );
    },
    incrementProductCount: (state, action) => {
      const { productId } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (product) => product.id === productId
      );
      console.log(state);
      console.log(state.cart);

      if (existingProductIndex !== -1) {
        console.log(state.cart[existingProductIndex].count);
        state.cart[existingProductIndex].count += 1;
      }
    },
    
  
      decrementProductCount: (state, action) => {
        const { productId } = action.payload;
        const productToAdd = state.products.find(
          (product) => product.id === productId
        );
      
        if (productToAdd) {
          const existingProduct = state.cart.find(
            (product) => product.id === productId
          );
      
          if (existingProduct && existingProduct.count > 0) {
            existingProduct.count -= 1;
          }
        }
      },
      
      setIsCartOpen: (state) =>{
        state.isCartOpen = !state.isCartOpen;
    }
},
});

export const {
    addToCart,
    removeFromCart,
    incrementProductCount,
    decrementProductCount,
    setIsCartOpen,
  } = productSlice.actions;

export default productSlice.reducer;
