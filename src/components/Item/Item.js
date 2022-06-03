
const Item = ({name, img}) => {
    return (
        <li>
            {name}
            <img src={img} alt={name}/>
        </li>
    )
}

export default Item