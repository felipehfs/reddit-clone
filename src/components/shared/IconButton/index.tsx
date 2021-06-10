import { ReactNode } from "react";
import { Button} from "./IconButton.styles"

interface IconButtonProps {
    icon: ReactNode;
}

export default function IconButton(props: IconButtonProps) {
    return (
        <Button>
            {props.icon}
        </Button>
    )
}