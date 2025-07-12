export const categoryGroups = {
  "패션/액세서리": [
    "Mens Shirts",
    "Mens Shoes",
    "Mens Watches",
    "Womens Dresses",
    "Womens Bags",
    "Womens Jewellery",
    "Womens Shoes",
    "Womens Watches",
    "Tops",
    "Sunglasses"
  ],
  전자제품: ["Smartphones", "Tablets", "Laptops", "Mobile Accessories"],
  "뷰티/헬스": ["Beauty", "Skin Care", "Fragrances"],
  "식료품/주방": ["Groceries", "Kitchen Accessories"],
  "가구/인테리어": ["Furniture", "Home Decoration"],
  "스포츠/차량": ["Sports Accessories", "Motorcycle", "Vehicle"]
} as const;

export type MainCategory = keyof typeof categoryGroups;
