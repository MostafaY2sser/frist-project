
import "./category.css"
import imageCategory from "../../FackeAPI/ApiCategory"

const Category = () => {




    return (
        <div className="category">
            <div className="content">
                {imageCategory.map((item)=> (
                    <div key={item.category} className="item">
                        <img src={item.img} alt={item.name} />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category
