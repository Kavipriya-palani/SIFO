export const CustomerService = {
    getCustomersMedium() {
        return fetch('/demo/data/customers-medium.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => {
                console.log('Fetching Customers Medium:', res);
                return res.json();
            })
            .then((d) => {
                console.log('Customers Medium Data:', d);
                return d.data;
            });
    },

    getCustomersLarge() {
        return fetch('/customers-large.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => {
                console.log('Fetching Customers Large:', res);
              //  const result = [ { Name: "John Doe", Country: "USA", Agent: "Agent A", Date: "2023-11-14", Balance: 1000.50, Status: "Active", Activity: "Purchase", Verified: true }, { Name: "Jane Smith", Country: "Canada", Agent: "Agent B", Date: "2023-11-13", Balance: 250.75, Status: "Inactive", Activity: "Sale", Verified: false }];
                return res.json();
            })
            .then((d) => {
                console.log('Customers Large Data:', d);
                return d.data;
            });
    }
};
