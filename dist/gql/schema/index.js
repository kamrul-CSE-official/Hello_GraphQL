export const typeDefs = `
    type Product {
        id: ID!
        name: String
        image: String
        description: String
        price: Float
        quantity: Int
        onStock: Boolean
        categoryId: String
        category: Category
        reviews: [Reviews]
    }

    type Category {
        id: ID!
        name: String
        products: [Product]
    }

    type Reviews {
        id: ID!
        review: String
        rating: Float
        date: String
        productid: String    
    }

    type Query {
        products: [Product]
        product(productId: ID!): Product

        categories: [Category]
        category(categoryId: ID!): Category

        reviews: [Reviews]
        review(reviewId: ID!): Reviews
    }
`;
