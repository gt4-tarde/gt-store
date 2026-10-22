import CartContext from "./CartContext";
import { useState } from "react";

export default function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    // Adiciona um produto ou aumenta sua quantidade.
    function addItem(product) {
        setItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === product.id)

            if (existingItem) {
                return currentItems.map((item) => (
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ))
            }

            return [...currentItems, { ...product, quantity: 1 }]
        })
    }

    // Remove um produto pelo seu id.
    function removeItem(productId) {
        setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
    }

    // Esvazia o carrinho após a compra.
    function clearCart() {
        setItems([])
    }

    // Atualiza a quantidade ou remove quando ela chega a zero.
    function updateQuantity(productId, quantity) {
        if (quantity < 1) {
            removeItem(productId)
            return
        }

        setItems((currentItems) => currentItems.map((item) => (
            item.id === productId ? { ...item, quantity } : item
        )))
    }

    const value = {
        items,
        addItem,
        removeItem,
        clearCart,
        updateQuantity,
        itemCount: items.reduce((total, item) => total + item.quantity, 0),
        total: items.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}
