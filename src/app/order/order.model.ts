class Order{
    constructor(
        public address: string,
        public quantity: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = []
    ){}
}

class OrderItem{
    constructor(public quantity: number, public menuId: string){ }
}

export { Order, OrderItem }