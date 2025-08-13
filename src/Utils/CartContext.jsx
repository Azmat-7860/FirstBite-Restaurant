import { act, createContext, useReducer } from "react";

const InitialCart = [
    { "foodid": 23, "name": "French Fries", "qty": 1, "price": 80, "categories": "Fast Food", "image": "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg" },
    { "foodid": 24, "name": "Pasta Alfredo", "qty": 1, "price": 200, "categories": "Italian", "image": "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg" },
    { "foodid": 25, "name": "Margherita Pizza", "qty": 1, "price": 250, "categories": "Italian", "image": "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" },

];
export const CartContext = createContext({
    cartFood: [],
    totalBillAmt: 0,
    addCartFood: () => { },
    removeCartFood: () => { },
    increseQty: () => { },
    decreseQty: () => { },
    subTotal: () => { },
})

const cartContextReducer = (currCartItem, action) => {
    let newCartItem = currCartItem;
    if (action.type === "ADD-ITEM") {
        newCartItem = [
            ...currCartItem, {
                foodid: action.payload.foodid,
                name: action.payload.name,
                price: action.payload.price,
                image: action.payload.image,
                qty : 1,
            }
        ];

    } else if (action.type === 'REMOVE-ITEM') {
        newCartItem = currCartItem;
        newCartItem = currCartItem.filter((item) => item.foodid !== action.payload.foodid);
    }
    else if (action.type === 'INCRESE-QTY') {
        newCartItem = currCartItem;
        newCartItem = currCartItem.map((item) => item.foodid === action.payload.foodid ? { ...item, qty: item.qty + 1 } : item)
    }
    else if (action.type === 'DECRESE-QTY') {
        newCartItem = currCartItem;
        newCartItem = currCartItem.map((item) => item.foodid === action.payload.foodid && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item)
    }

    return newCartItem;

}
const CartContextProvider = ({ children }) => {
    const [cartFood, dispatchCartFood] = useReducer(cartContextReducer, InitialCart);

    const addCartFood = (foodid, name, price, image) => {
        const newItemAction = {
            type: "ADD-ITEM",
            payload: {
                foodid,
                name,
                price,
                image,
                qty: 1,
            }
        }
        dispatchCartFood(newItemAction);
    }

    const removeCartFood = (foodid) => {
        const removeCartAction = {
            type: "REMOVE-ITEM",
            payload: { foodid }
        }

        dispatchCartFood(removeCartAction);
    }
    const increseQty = (foodid) => {
        const increseQtyAction = {
            type: "INCRESE-QTY",
            payload: { foodid }
        }
        dispatchCartFood(increseQtyAction)
    }
    const decreseQty = (foodid) => {
        const decreseQtyAction = {
            type: "DECRESE-QTY",
            payload: { foodid }
        }
        dispatchCartFood(decreseQtyAction)
    }
    const subTotal = () => { return cartFood.reduce((total, item) => total + item.price * item.qty, 0) };
    return (<CartContext.Provider value={{ cartFood, addCartFood, removeCartFood, subTotal ,increseQty,decreseQty}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider;