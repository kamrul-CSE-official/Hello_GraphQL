import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent: any, args: { productId: string }, context: any) => {
      return (
        db.products.find((product) => product.id === args.productId) || null
      );
    },

    categories: () => db.categories,
    category: (parent: any, args: { categoryId: string }, context: any) => {
      return (
        db.categories.find((category) => category.id === args.categoryId) ||
        null
      );
    },

    reviews: () => db.reviews,
    review: (parent: any, args: { reviewId: string }, context: any) => {
      return db.reviews.find((review) => review.id === args.reviewId) || null;
    },
  },
  Product: {
    category: ({ categoryId }, args, context) => {
      // console.log(parent.categoryId)
      return db.categories.find((categorie) => categorie.id === categoryId);
    },
    reviews: ({ id }, args, context) => {
      return db.reviews.filter((review) => review.productId === id);
    },
  },
  Category: {
    products: ({ id }, args, context) => {
      // console.log(parent.id)
      return db.products.filter((product) => product.categoryId === id);
    },
  },
};
