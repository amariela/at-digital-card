import { Button } from "react-bootstrap";

export default function CustomButton({ linkTo, btnText, btnId, btnVariant, btnStyle }) {

    return (
        <Button href={linkTo} variant={btnVariant} id={btnId} style={btnStyle}>
            {btnText}
        </Button>
    )
}