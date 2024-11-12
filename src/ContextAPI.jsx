import { createContext, useEffect } from "react";
import { useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const Store = createContext({});




// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {



// -------------------------------------------------------------------------------------------------------------------------------------------
    // get wishlist Itme from localStorage or initialize it as an empty array
    const [wishlistitem, setWishListItem] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Add Item to Wishlist
    const addToWishlist = (item) => {
        setWishListItem((prevWishlist) => {
            const updatedWishlist = [...prevWishlist, item];
            // Save to localStorage
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    // Remove Item from Wishlist
    const removeFromWishlist = (itemId) => {
        setWishListItem((prevWishlist) => {
            const updatedWishlist = prevWishlist.filter(item => item.id !== itemId);
            
            // Save updated wishlist to localStorage
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    // Save any change in WishList and get it new 
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlistitem));
    }, [wishlistitem]);
// -------------------------------------------------------------------------------------------------------------------------------------------





// -------------------------------------------------------------------------------------------------------------------------------------------

    //  intainal State to  ShoppingCart 
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });


    // Function To add Product in Shoppimg Cart
    const addToCart = (item) => {
        setCartItem((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            let updatedCart;

            if (existingItem) {
                updatedCart = prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                updatedCart = [...prevCart, { ...item, quantity: 1 }];
            }

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };


    // Function To Remove Product from Shoppimg Cart
    const removeFromCart = (itemId) => {
        setCartItem((prevCart) => {
            const updatedCart = prevCart
                .map(cartItem => 
                    cartItem.id === itemId
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter(cartItem => cartItem.quantity > 0);

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };


    // Function To Delete All Products From Shopping Cart 
    const clearCart = () => {
        setCartItem([]);
        localStorage.removeItem('cart');
    };


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }, [cartItem]);

//--------------------------------------------------------------------------------------------------------------------------------------------




    return (
        <Store.Provider value={{
            wishlistitem,
            setWishListItem,
            addToWishlist,
            removeFromWishlist,
            cartItem,
            addToCart,
            removeFromCart,
            clearCart,
        }}>
            {children} 
        </Store.Provider>
    );
};

export default StoreProvider;
