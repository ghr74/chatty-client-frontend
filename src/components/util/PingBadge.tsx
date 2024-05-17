import { FC } from "react";
import { Badge } from "../ui/badge";

const PingBadge: FC<{ pingCount: number | null | undefined }> = ({
    pingCount,
}) => {
    if (!pingCount) return null;

    return(
                    <Badge
                        variant={"destructive"}
                        className="rounded-full h-6 w-6 justify-center"
                    >
                        {pingCount}
                    </Badge>)
};

export default PingBadge;
