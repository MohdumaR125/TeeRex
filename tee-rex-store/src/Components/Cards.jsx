const Cards = (props) =>{
    const {data}=props;
    console.log(data[0])

    return(
        <>
        <div>
            {data.map((el)=>(
                <div key={el.id+el.imageURL}>
                    <div ><img src={el.imageURL} alt="product image" /></div>
                    <h4>{el.name}</h4>
                    <div>
                        <h5>{el.price}</h5>
                        <button>Add To Cart</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default Cards