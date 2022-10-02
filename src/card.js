function Card({detail,addToCart,cartitems}){
    console.log(addToCart);
    return <>
    <div className="col-md-4" style={{textAlign:"center"}}>
        <div className="card-group" style={{height:"310px",marginBottom:"20px"}}>
            <div className="card" style={{backgroundColor:"white"}}>
                <div><img src={detail.img} className="card-img-top" style={{height:"150px",width:"100px"}}/></div>
                <div className="card-body">
                    <h5 className="card-title">{detail.name}</h5>
                    <p className="card-text">Rs.{detail.price}</p>
                    <button disabled={cartitems.some(obj=>obj.id===detail.id)} onClick={()=>{
                        addToCart(detail)
                    }} className="btn btn-primary" style={{fontSize:"10px",padding:"5px"}} id="cartbutton">{
                        cartitems.some(obj=>obj.id===detail.id)? "ADDED TO CART" : "ADD TO CART"
                    }</button>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Card;