const SingleProduct = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    return <div>
        <h1>Product ID: {id}</h1>
        <p>This is the details of product with ID: {id}</p>
    </div>

}

export default SingleProduct;