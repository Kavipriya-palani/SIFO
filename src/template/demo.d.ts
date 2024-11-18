declare namespace Demo {
    interface Task {
        id?: number;
        name?: string;
        description?: string;
        completed?: boolean;
        status?: string;
        comments?: string;
        attachments?: string;
        members?: Member[];
        startDate?: string;
        endDate?: string;
    }

    interface Member {
        name: string;
        image: string;
    }

    interface DialogConfig {
        visible: boolean;
        header: string;
        newTask: boolean;
    }

    interface Mail {
        id: number;
        from: string;
        to: string;
        email: string;
        image: string;
        title: string;
        message: string;
        date: string;
        important: boolean;
        starred: boolean;
        trash: boolean;
        spam: boolean;
        archived: boolean;
        sent: boolean;
    }

    interface User {
        id: number;
        name: string;
        image: string;
        status: string;
        messages: Message[];
        lastSeen: string;
    }

    interface Message {
        text: string;
        ownerId: number;
        createdAt: number;
    }

    //ProductService
    type Product = {
        id?: string;
        code?: string;
        name: string;
        description: string;
        image?: string;
        price?: number;
        category?: string;
        quantity?: number;
        inventoryStatus;
        rating;
        orders?: ProductOrder[];
     
    };

    type ProductOrder = {
        id?: string;
        productCode?: string;
        date?: string;
        amount?: number;
        quantity?: number;
        customer?: string;
        status;
    };

    type Payment = {
        name: string;
        amount: number;
        paid: boolean;
        date: string;
    };

    //CustomerService
    type Customer = {
        id?: number;
        name?: string;
        country;
        company?: string;
        date: Date;
        status?: string;
        activity?: number;
        balance?: number | string;
        verified?: boolean;
        amount?: number;
        price?: number;
        rating?: number;
        image?: string;
        orders?: Demo.Customer[];
        inventoryStatus?: string;
        representative: {
            name: string;
            image: string;
        };
    };

    interface Event  {
        location?: string;
        description?: string;
        tag?: {
            name: string;
            color: string;
        };
    }

    // PhotoService
    type Photo = {
        title: string;
        itemImageSrc?: string | undefined;
        thumbnailImageSrc?: string | undefined;
        alt?: string | undefined;
    };

    type Country = {
        name: string;
        code: string;
    };

    // IconService
    type Icon = {
        icon?: {
            paths?: string[];
            attrs?: [{}];
            isMulticolor?: boolean;
            isMulticolor2?: boolean;
            grid?: number;
            tags?: string[];
        };
        attrs?: [{}];
        properties?: {
            order?: number;
            id: number;
            name: string;
            prevSize?: number;
            code?: number;
        };
        setIdx?: number;
        setId?: number;
        iconIdx?: number;
    };
}