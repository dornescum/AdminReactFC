const TopHeader = (props) =>{
    return  <div className="content-heading">
        <div>
            <h3>{props.title}</h3>
            <p className='font-para-title'>{props.body}</p>
            <p className='font-para-title'>{props.footer}</p>
        </div>
    </div>
}

export default TopHeader;
