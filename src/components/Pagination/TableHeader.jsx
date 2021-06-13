import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

export default function TableHeader(props) {

    const {valueToOrderBy, orderDirection, handleRequestSort} = props

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property)
    }

    return (
        <TableHead>
            <TableRow>
                <TableCell key="name">
                    <TableSortLabel
                        active={valueToOrderBy === "name"}
                        direction={valueToOrderBy ===  "name" ? orderDirection: "Asc"}
                        onClick={createSortHandler("name")}
                    >
                        Nombre
                    </TableSortLabel>
                </TableCell>
                <TableCell key="estado">
                    <TableSortLabel
                        active={valueToOrderBy === "estado"}
                        direction={valueToOrderBy ===  "estado" ? orderDirection: "Asc"}
                        onClick={createSortHandler("estado")}
                    >
                        Estado
                    </TableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    )
}