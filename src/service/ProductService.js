export const ProductService = {
    getProductsSmall() {
        return fetch('/demo/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => {
                console.log('Fetching Products Small:', res);
                return res.json();
            })
            .then((d) => {
                console.log('Products Small Data:', d);
                return d.data;
            });
    },

    getProducts() {
        return fetch('/demo/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => {
                console.log('Fetching Products:', res);
                return res.json();
            })
            .then((d) => {
                console.log('Products Data:', d);
                return d.data;
            });
    },

    getProductsWithOrdersSmall() {
        return fetch('/demo/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => {
                console.log('Fetching Products with Orders Small:', res);
                return res.json();
            })
            .then((d) => {
                console.log('Products with Orders Small Data:', d);
                return d.data;
            });
    }
};
