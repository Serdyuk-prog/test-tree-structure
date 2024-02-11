import { DataTreeProps } from "./DataTreeProps";
import "./DataTree.css"

export const DataTree: React.FC<DataTreeProps> = ({tree}) => {
    return (
        <ul className="data-tree">
        {tree.map((service) => (
            <li key={service.id}>
            {service.node === 0 ? `${service.name} (${service.price} $)` : ''}
            {service.node === 1 && (
            <details>
                <summary>{service.name}</summary>
                {service.children && <DataTree tree={service.children}/>}
            </details>
            )}
            </li>
        ))}
        </ul>
    );
}