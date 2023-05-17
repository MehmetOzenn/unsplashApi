import ImageItem from "./ImageItem";

function ListImage({imagePlaceHolder}) {
    return ( <div className="imageList">
        {imagePlaceHolder.map((image,index)=>{
            return <ImageItem key={index} image={image}/>
        })}
    </div> );
}

export default ListImage;