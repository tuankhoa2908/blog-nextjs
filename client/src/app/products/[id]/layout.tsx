const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            <div>
                <h2>Feature products sections</h2>
            </div>
        </div>
    )
}

export default ProductLayout;