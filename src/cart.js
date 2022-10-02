function Cart({ cartitems, removeCartItems }) {
    return <>
        <ol class="list-group list-group-numbered">
            {
                cartitems.map((items) => {
                    return <li class="list-group-item d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">{items.name}</div>
                            {items.price}
                        </div>
                        <button class="btn btn-primary" style={{ height: "30px", width: "30px", padding: "0px" }} onClick={()=>{
                            removeCartItems(items)
                        }
                        }>X</button>
                    </li>
                })
            }
            <div className="position">TOTAL: Rs.{
                cartitems.reduce((initial, current) => {
                    return current = initial + current.price
                }, 0)
            }
            </div>
        </ol>
    </>
}

export default Cart;