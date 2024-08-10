import { ReactNode } from "react";

interface NewProps {
    children: ReactNode;
}

function New({ children }: NewProps) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    );
}

export default New;