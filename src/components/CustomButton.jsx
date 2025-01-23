import { Button } from "react-bootstrap";
import { Link } from "react-router";

export default function CustomButton({ linkTo, btnText, btnId, btnVariant, btnStyle }) {

    return (
        <Link to={linkTo}>
            <Button variant={btnVariant} id={btnId} style={btnStyle}>
                {btnText}
            </Button>
        </Link>
    )
}