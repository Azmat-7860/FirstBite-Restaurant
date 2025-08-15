import { createContext, useReducer, useEffect } from "react";


// Context
export const CartContext = createContext({
    cartFood: [],
    totalBillAmt: 0,
    addCartFood: () => { },
    removeCartFood: () => { },
    increseQty: () => { },
    decreseQty: () => { },
    subTotal: () => { },
    storeOrder : () => {}
});// context

// Reducer
const cartContextReducer = (currCartItem, action) => {
    let newCartItem = currCartItem;

    if (action.type === "ADD-ITEM") {
        newCartItem = [
            ...currCartItem,
            {
                foodid: action.payload.foodid,
                name: action.payload.name,
                price: action.payload.price,
                image: action.payload.image,
                qty: 1,
            }
        ];

    } else if (action.type === 'REMOVE-ITEM') {
        newCartItem = currCartItem.filter((item) => item.foodid !== action.payload.foodid);

    } else if (action.type === 'INCRESE-QTY') {
        newCartItem = currCartItem.map((item) =>
            item.foodid === action.payload.foodid
                ? { ...item, qty: item.qty + 1 }
                : item
        );

    } else if (action.type === 'DECRESE-QTY') {
        newCartItem = currCartItem.map((item) =>
            item.foodid === action.payload.foodid && item.qty > 1
                ? { ...item, qty: item.qty - 1 }
                : item
        );
    } else if (action.type === 'CLEAR-CART') {
      return [];
    }

    return newCartItem;
};

const CartContextProvider = ({ children }) => {
    // Load from localStorage OR fallback to InitialCart
    const storedCart = JSON.parse(localStorage.getItem("cartFood"));

    const [cartFood, dispatchCartFood] = useReducer(cartContextReducer, storedCart);

    // ✅ Save to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cartFood", JSON.stringify(cartFood));
    }, [cartFood]);

    const addCartFood = (foodid, name, price, image) => {
        dispatchCartFood({
            type: "ADD-ITEM",
            payload: { foodid, name, price, image, qty: 1 }
        });
    };

    const removeCartFood = (foodid) => {
        dispatchCartFood({ type: "REMOVE-ITEM", payload: { foodid } });
    };

    const increseQty = (foodid) => {
        dispatchCartFood({ type: "INCRESE-QTY", payload: { foodid } });
    };

    const decreseQty = (foodid) => {
        dispatchCartFood({ type: "DECRESE-QTY", payload: { foodid } });
    };
    const storeOrder = () => {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];

        const orderItems = cartFood.map((item) => ({
            name: item.name,
            qty: item.qty,
            price: item.price

        }));

        const newOrder ={
            orderId : `ORD-${Date.now()}`,
            orderDate : new Date().toLocaleString(),
            items : orderItems,
            totalAmount : subTotal(),
        }
        orders.push(newOrder);
        localStorage.setItem("orders",JSON.stringify(orders))

        localStorage.setItem("cartFood",JSON.stringify([]))
        dispatchCartFood({type : "CLEAR-CART"})

    }
    const subTotal = () => {
        return cartFood.reduce((total, item) => total + item.price * item.qty, 0);
    };

    return (
        <CartContext.Provider
            value={{ cartFood, addCartFood, removeCartFood, subTotal, increseQty, decreseQty ,storeOrder}}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
