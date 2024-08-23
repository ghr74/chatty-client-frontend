import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const SendButton = ({
    handler,
    disabled,
}: {
    handler: () => void;
    disabled: boolean;
}) => {
    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handler}
            disabled={disabled}
        >
            <Send />
        </Button>
    );
};

export default SendButton;
