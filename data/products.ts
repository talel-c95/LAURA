import { Product } from "@/types";

// Available shoe images (randomly shuffled)
const shoeImages = [
  { main: "/images/6_6767-2.jpg.jpeg", hover: "/images/6_6767-2.jpg_2.jpeg" },
  { main: "/images/4_6767-1.jpg.jpeg", hover: "/images/4_6767-1.jpg_3.jpeg" },
  { main: "/images/5_6767-1.jpg.jpeg", hover: "/images/5_6767-1.jpg_4.jpeg" },
  { main: "/images/2_5251-1.jpg.jpeg", hover: "/images/2_5251-1.jpg_3.jpeg" },
  { main: "/images/4_5251-2.jpg.jpeg", hover: "/images/4_5251-2.jpg_2.jpeg" },
  { main: "/images/5_5251-2.jpg.jpeg", hover: "/images/5_5251-2.jpg_2.jpeg" },
  { main: "/images/4_9851-1.jpg.jpeg", hover: "/images/4_9851-1.jpg_2.jpeg" },
  { main: "/images/5_9851-1.jpg.jpeg", hover: "/images/5_9851-1.jpg_2.jpeg" },
  { main: "/images/5_5400-2.jpg.jpeg", hover: "/images/5_5400-2.jpg_2.jpeg" },
  { main: "/images/5_5400-3.jpg.jpeg", hover: "/images/5_5400-3.jpg_3.jpeg" },
  { main: "/images/6_5400-2.jpg.jpeg", hover: "/images/6_5400-2.jpg_2.jpeg" },
  { main: "/images/6_5400-3.jpg.jpeg", hover: "/images/6_5400-3.jpg_2.jpeg" },
];

// Available clothing images (randomly shuffled)
const clothingImages = [
  { main: "/images/1112391.png", hover: "/images/1112391.png_2.jpeg" },
  { main: "/images/1112393.JPG.jpeg", hover: "/images/1112393.JPG_2.jpeg" },
  { main: "/images/1112432.png.jpeg", hover: "/images/1112432.png_2.jpeg" },
  { main: "/images/1112433.JPG.jpeg", hover: "/images/1112433.JPG_2.jpeg" },
  { main: "/images/w24SLF111244E1150_1.jpg.jpeg", hover: "/images/w24SLF111244E1150_3.jpg.jpeg" },
  { main: "/images/W24SLF111239E1153_1(1).jpg.jpeg", hover: "/images/W24SLF111239E1153_320(1).jpg.jpeg" },
];

// Available perfume images
const perfumeImages = [
  { main: "/images/JO_1.png", hover: "/images/JO_1.png_2.jpeg" },
  { main: "/images/JO_2.png", hover: "/images/JO_2.png_2.jpeg" },
  { main: "/images/laura_rossa_just_once_perfume_1.png.jpeg", hover: "/images/laura_rossa_just_once_perfume_1.png_1.jpeg" },
  { main: "/images/laura_rossa_just_once_perfume_2.png.jpeg", hover: "/images/laura_rossa_just_once_perfume_2.png_1.jpeg" },
];

// Available bag images - using only actual bag images
const bagImages = [
  { main: "/images/bags_hp.png", hover: "/images/bags_hp.png" },
  { main: "/images/bags_hp.png", hover: "/images/bags_hp.png" },
  { main: "/images/bags_hp.png", hover: "/images/bags_hp.png" },
  { main: "/images/bags_hp.png", hover: "/images/bags_hp.png" },
];

// Available sunglasses images - using only actual sunglasses images
const sunglassesImages = [
  { main: "/images/laurarossasunglassesrozette.jpg.jpeg", hover: "/images/laurarossasunglassesrozette.jpg.jpeg" },
  { main: "/images/laurarossasunglassesrozette.jpg.jpeg", hover: "/images/laurarossasunglassesrozette.jpg.jpeg" },
  { main: "/images/laurarossasunglassesrozette.jpg.jpeg", hover: "/images/laurarossasunglassesrozette.jpg.jpeg" },
  { main: "/images/laurarossasunglassesrozette.jpg.jpeg", hover: "/images/laurarossasunglassesrozette.jpg.jpeg" },
];

// Helper function to get random image pair
function getRandomImage(images: typeof shoeImages | typeof clothingImages | typeof perfumeImages | typeof bagImages | typeof sunglassesImages, index: number) {
  const imgIndex = index % images.length;
  const img = images[imgIndex];
  return {
    image: img.main,
    hoverImage: img.hover,
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Bordélise",
    description: "Burgundy sandals made of glossy genuine leather, with straps, pointed toe, and 10 cm heel",
    price: 243.66,
    image: "/images/6_6767-2.jpg.jpeg",
    hoverImage: "/images/6_6767-2.jpg_2.jpeg",
    category: "shoes",
    slug: "bordelise-burgundy-sandals",
  },
  {
    id: "2",
    name: "Ébonisse",
    description: "Black sandals made of glossy genuine leather, with straps, pointed toe, and 10 cm heel",
    price: 243.66,
    image: "/images/5_5251-2.jpg.jpeg",
    hoverImage: "/images/5_5251-2.jpg_2.jpeg",
    category: "shoes",
    slug: "ebonisse-black-sandals",
  },
  {
    id: "3",
    name: "Azurélisse",
    description: "Blue sandals made of genuine leather, with straps, round toe, and 10 cm heel",
    price: 233.83,
    ...getRandomImage(shoeImages, 2),
    category: "shoes",
    slug: "azurelisse-blue-sandals",
  },
  {
    id: "4",
    name: "Noirise",
    description: "Black sandals made of genuine leather, with straps, round toe, and 10 cm heel",
    price: 233.83,
    ...getRandomImage(shoeImages, 3),
    category: "shoes",
    slug: "noirise-black-sandals",
  },
  {
    id: "5",
    name: "Tenélisse",
    description: "Black sandals made of patent leather with an 9 cm hourglass heel",
    price: 243.66,
    ...getRandomImage(shoeImages, 4),
    category: "shoes",
    slug: "tenelisse-black-sandals",
  },
  {
    id: "6",
    name: "Saphérisse",
    description: "Electric blue suede shoes with 10 cm heel",
    price: 253.48,
    ...getRandomImage(shoeImages, 5),
    category: "shoes",
    slug: "sapherisse-electric-blue-suede-shoes",
  },
  {
    id: "7",
    name: "Cannelisse",
    description: "Brown suede shoes with 10 cm heel",
    price: 253.48,
    ...getRandomImage(shoeImages, 6),
    category: "shoes",
    slug: "cannelisse-brown-suede-shoes",
  },
  {
    id: "8",
    name: "Bruméline",
    description: "Granite gray long dress with short sleeves and degrade look",
    price: 176.65,
    ...getRandomImage(clothingImages, 0),
    category: "clothing",
    slug: "brumeline-granite-gray-dress",
  },
  {
    id: "9",
    name: "Valrouge",
    description: "Long-sleeved ruffled dress in red jersey with long sleeves and a deep cut",
    price: 147.18,
    ...getRandomImage(clothingImages, 1),
    category: "clothing",
    slug: "valrouge-red-jersey-dress",
  },
  {
    id: "10",
    name: "Valnuit",
    description: "Ruffle dress in black jersey with long sleeves and a deep cut",
    price: 147.18,
    ...getRandomImage(clothingImages, 2),
    category: "clothing",
    slug: "valnuit-black-jersey-dress",
  },
  {
    id: "11",
    name: "Liris",
    description: "Short dress with loop details and side slits",
    price: 160.93,
    ...getRandomImage(clothingImages, 3),
    category: "clothing",
    slug: "liris-short-dress",
  },
  {
    id: "12",
    name: "Cléane",
    description: "Black patent leather ankle boots with 9 cm metallic heel",
    price: 336.01,
    ...getRandomImage(shoeImages, 7),
    category: "shoes",
    slug: "cleane-ankle-boots",
  },
  {
    id: "13",
    name: "Royane",
    description: "Black shoes in shiny genuine leather with flower accessory with zircon stones and 10 cm heel",
    price: 224.01,
    ...getRandomImage(shoeImages, 8),
    category: "shoes",
    slug: "royane-black-shoes",
  },
  {
    id: "14",
    name: "Extrait de parfum – Just once I",
    description: "Signature perfume extract with bold floral notes",
    price: 137.35,
    ...getRandomImage(perfumeImages, 0),
    category: "perfumes",
    slug: "just-once-i-perfume",
  },
  {
    id: "15",
    name: "Extrait de parfum – Just once II",
    description: "Signature perfume extract with bold floral notes",
    price: 137.35,
    ...getRandomImage(perfumeImages, 1),
    category: "perfumes",
    slug: "just-once-ii-perfume",
  },
  {
    id: "16",
    name: "Élégance Bag",
    description: "Luxurious handbag made of genuine leather with elegant design",
    price: 299.99,
    image: "/images/bags_hp.png",
    hoverImage: "/images/bags_hp.png",
    category: "bags",
    slug: "elegance-bag",
  },
  {
    id: "17",
    name: "Sophisticate Bag",
    description: "Classic leather handbag with modern details and spacious interior",
    price: 349.99,
    image: "/images/bags_hp.png",
    hoverImage: "/images/bags_hp.png",
    category: "bags",
    slug: "sophisticate-bag",
  },
  {
    id: "18",
    name: "Chic Clutch",
    description: "Elegant evening clutch with sophisticated design",
    price: 199.99,
    image: "/images/bags_hp.png",
    hoverImage: "/images/bags_hp.png",
    category: "bags",
    slug: "chic-clutch",
  },
  {
    id: "19",
    name: "Luxe Tote",
    description: "Spacious tote bag in premium leather with adjustable straps",
    price: 379.99,
    image: "/images/bags_hp.png",
    hoverImage: "/images/bags_hp.png",
    category: "bags",
    slug: "luxe-tote",
  },
  {
    id: "20",
    name: "Rozette Sunglasses",
    description: "Stylish sunglasses with UV protection and elegant frame design",
    price: 129.99,
    image: "/images/laurarossasunglassesrozette.jpg.jpeg",
    hoverImage: "/images/laurarossasunglassesrozette.jpg.jpeg",
    category: "sunglasses",
    slug: "rozette-sunglasses",
  },
  {
    id: "21",
    name: "Aviator Classic",
    description: "Classic aviator sunglasses with premium lenses and metal frame",
    price: 149.99,
    image: "/images/laurarossasunglassesrozette.jpg.jpeg",
    hoverImage: "/images/laurarossasunglassesrozette.jpg.jpeg",
    category: "sunglasses",
    slug: "aviator-classic",
  },
  {
    id: "22",
    name: "Cat Eye Elegance",
    description: "Elegant cat-eye sunglasses with retro-inspired design",
    price: 139.99,
    image: "/images/laurarossasunglassesrozette.jpg.jpeg",
    hoverImage: "/images/laurarossasunglassesrozette.jpg.jpeg",
    category: "sunglasses",
    slug: "cat-eye-elegance",
  },
  {
    id: "23",
    name: "Oversized Glamour",
    description: "Oversized sunglasses with glamorous design and UV400 protection",
    price: 159.99,
    image: "/images/laurarossasunglassesrozette.jpg.jpeg",
    hoverImage: "/images/laurarossasunglassesrozette.jpg.jpeg",
    category: "sunglasses",
    slug: "oversized-glamour",
  },
];

