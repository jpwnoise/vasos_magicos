"use client";

import { FaTimes, FaPlus, FaMinus, FaTrash, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();

  const phoneNumber = "523313262108";

  const generateWhatsAppMessage = () => {
    let message = "¡Hola! Me gustaría hacer un pedido:%0A%0A";
    items.forEach((item) => {
      message += `• ${item.product.name} x${item.quantity} - $${item.product.price * item.quantity}%0A`;
    });
    message += `%0ATotal: $${totalPrice}%0A%0A¡Gracias!`;
    return message;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Cart Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-2xl text-accent-green" />
            <h2 className="text-xl font-bold text-text-dark font-fredoka">
              Mi Pedido ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-text-light hover:text-text-dark transition-colors"
            aria-label="Cerrar carrito"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FaWhatsapp className="text-6xl text-pastel-purple mb-4" />
              <p className="text-lg text-text-light">
                Tu carrito está vacío
              </p>
              <p className="text-sm text-text-light mt-2">
                Agrega vasos para empezar tu pedido
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200"
              >
                {/* Product Image */}
                <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${item.product.colors[0]}, ${item.product.colors[1]})`,
                  }}
                >
                  {item.product.image ? (
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-2xl">🥤</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-text-dark truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-text-light mt-1">
                    ${item.product.price} c/u
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-full text-text-dark hover:bg-gray-100 transition-colors"
                      aria-label="Reducir cantidad"
                    >
                      <FaMinus className="text-xs" />
                    </button>
                    <span className="text-sm font-bold text-text-dark w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-full text-text-dark hover:bg-gray-100 transition-colors"
                      aria-label="Aumentar cantidad"
                    >
                      <FaPlus className="text-xs" />
                    </button>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="ml-auto w-7 h-7 flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      aria-label="Eliminar producto"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="flex flex-col items-end justify-center">
                  <span className="text-sm font-bold gradient-text">
                    ${item.product.price * item.quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4 bg-white">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-text-dark">Total:</span>
              <span className="text-2xl font-bold gradient-text font-fredoka">
                ${totalPrice}
              </span>
            </div>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="w-full py-2 text-sm text-text-light hover:text-red-500 transition-colors"
            >
              Vaciar carrito
            </button>

            {/* WhatsApp Order Button */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-green to-emerald-500 text-white py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              Ordenar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  );
}
