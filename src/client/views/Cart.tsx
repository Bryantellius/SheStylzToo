import * as React from "react";

const Cart: React.FC<ICartProps> = () => {
  return (
    <main className="container">
      <h1 className="text-center text-dark p-2 border-bottom border-dark">
        Cart
      </h1>
      <div className="card my-3">
        <div className="card-body">
          <h3 className="border-bottom border-dark text-dark p-2">Review Items:</h3>
          <ol className="list-group p-2">
            <li className="list-item">Summer Dress</li>
          </ol>
          <hr />
          <h5 className="text-right">Total: $59.99</h5>
          <hr />
          <button className="btn btn-primary d-block w-100">Proceed to Checkout</button>
        </div>
      </div>
    </main>
  );
};

export interface ICartProps {}

export default Cart;
