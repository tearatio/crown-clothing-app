import './category-item.styles.scss'

const CategoryItem = ({ category1 })=>{
    const { imageUrl, title } = category1;
return (
    <div className="category-container" >
        <div className="background-image" style={ {backgroundImage: `url(${imageUrl})`} } />
        <div className="category-body-container">
            <h2>{title}</h2>
            <p>Show now!</p>
        </div>
    </div>
)
}

export default CategoryItem;