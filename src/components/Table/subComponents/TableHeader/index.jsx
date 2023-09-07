import { useState } from "react";

const TableHeader = (props) => {
    const {columns, handleSort } = props;
    const [field, setField] = useState(null);
    const [order, setOrder] = useState('asc');

    const handleClick = (dataIndex) => {
        setField(dataIndex);
        let newOrder = dataIndex === field && order === 'asc' ? 'desc' : 'asc';
        setOrder(newOrder);
        handleSort(field, order);
    }

    return (
        <tr>
            {
                columns.map((column, index) => 
                    <th 
                        style={{width: column.width}}
                        key={index}
                        onClick={column.sortable ? () => handleClick(column.dataIndex) : null}
                    >
                        {column.title} 
                    </th>
                )
            }
        </tr>
    )
}


//danh sach hoc sinh

export default TableHeader;