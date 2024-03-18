import CategoryList from "./_components/CategoryList";


const layout = ({ children}) => {
    return (
        <div className="grid grid-cols-4">
            <div className="hidden md:block">
                {/* catagory  */}
                <CategoryList />
            </div>
            <div className="col-span-3" >

                {children}
            </div>
        </div>
    );
}

export default layout;