    export type ProductsResponse = {
        data: Product[];
        meta: ProductsMeta;
    };
    
    export type Product = {
        id: number;
        attributes: {
            category: string;
            company: string;
            createdAt: string;
            description: string;
            featured: boolean;
            image: string;
            price: string;
            publishedAt: string;
            shipping: boolean;
            title: string;
            updatedAt: string;
            colors: string[];
            };
    };
    
    export type ProductsMeta = {
        categories: string[];
        companies: string[];
        pagination: Pagination;
    };

    export type SingleProductResponse = {
        data: Product;
        meta: {};
    };

    
    export type Pagination = {
        page: number;
        pageCount: number;
        pageSize: number;
        total: number;
    };

    export type Params = {
        search?: string;
        category?: string;
        company?: string;
        order?: string;
        price?: string;
        shipping?: string;
        page?: number;
    };
    
    export type ProductsResponseWithParams = ProductsResponse & { params: Params };    