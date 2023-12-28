import './Card.css'

const Card = ({ poto, saxeli, info , feri , btntxt , border }) => {
    return (
        <div className={`card ${feri}`} >
            <img src={poto} alt="" />
            <p className='saxelwodeba'>{saxeli}</p>
            <p className='informacia'>{info}</p>
            <button className={`${btntxt} ${border} `}>Learn More</button>
        </div>
    )

}


export default Card