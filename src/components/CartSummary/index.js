import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(eachItem => {
        totalAmount += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="total-price">
            Order Total: <span className="amount">Rs {totalAmount}/-</span>
          </h1>
          <p className="cart-summary-quantity">
            {cartList.length} items in cart
          </p>
          <button className="checkout-button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
