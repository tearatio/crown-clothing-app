import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'

const DirectoryComponent = ({ categories })=>{


    return (
        <div className="directory-container">
            {categories.map((category)=>{
                return (<CategoryItem key={category.id} category1={category} />) // категори1 должно совпадать с названием пропса в компоненте
            })}
        </div>

    );

}

export default DirectoryComponent;