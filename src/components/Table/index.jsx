import TableHeader from './subComponents/TableHeader'
import TableRow from './subComponents/TableRow';
import './style.css';
const Table = (props) => {

    const {columns, data, handleSort} = props;

    return (
        <table>
            <thead>
                <TableHeader handleSort={handleSort} columns={columns}/>
            </thead>
            <tbody>
                <TableRow columns={columns} data={data}/>
            </tbody>
        </table>
    )
}
export default Table;