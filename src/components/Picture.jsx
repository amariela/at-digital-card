import { Image } from "react-bootstrap"

export default function Picture({ imageSrc, altText, imageId, imageStyle }) {
    return (
        <Image src={imageSrc} alt={altText} id={imageId} style={imageStyle} fluid />
    )
}