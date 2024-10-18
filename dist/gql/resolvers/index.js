import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            return db.products.find((product) => product.id === args.productId) || null;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            return db.categories.find((category) => category.id === args.categoryId) || null;
        },
        reviews: () => db.reviews,
        review: (parent, args, context) => {
            return db.reviews.find((review) => review.id === args.reviewId) || null;
        },
    },
    Product: {
        category: (parent, args, context) => {
            // console.log(parent.categoryId)
            return db.categories.find(categorie => categorie.id === parent.categoryId);
        }
    },
    Category: {
        products: (parent, args, context) => {
            // console.log(parent.id)
            return db.products.filter(product => product.categoryId === parent.id);
        }
    }
};
