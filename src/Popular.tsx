import { ReactNode } from "react";

interface PopularProps {
    children: ReactNode;
}

function Popular({ children }: PopularProps) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {children}
        </div>
    );
}

export default Popular;