import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableHeader from '../Pagination/TableHeader.jsx'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import { TableContainer, TableHead } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'


// Override CSS Styles in Table //
const useStyles = makeStyles((theme) => ({
  
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    estado: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }

  }
));
// Ends Override CSS Styles in Table //

const rowInformation = [
    {"name": "Boku wa Tomodachi ga Sukunai ", "estado": "En Traducción"},
    {"name": "Goblin Slayer", "estado": "En Publicación"},
    {"name": "Isekai Maou to Shoukan Shoujo no Dorei Majutsu", "estado": "En Publicación"},
    {"name": "Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahō to Skill Copy no Chōetsu Heal", "estado": "En Publicación"},
    {"name": "Kono Subarashii Sekai ni Shukufuku wo!", "estado": "Finalizado"},
    {"name": "Kumo Desu Ga, Nani Ka?", "estado": "En Publicación"},
    {"name": "Mushoku Tensei: Isekai Ittara Honki Dasu", "estado": "Finalizado"},
    {"name": "No Game No Life", "estado": "Finalizado"},
    {"name": "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", "estado": "En Publicación"},
    {"name": "Novela", "estado": "En Publicación"},
]

function descendingComparator(a,b,orderBy) {
    if(b[orderBy] < a[orderBy]){
        return -1
    }
    if(b[orderBy] > a[orderBy]){
        return 1
    }
    return 0
};

function getComparator(order, orderBy) {
    return order === "Desc"
    ? (a,b) => descendingComparator(a,b, orderBy)
    : (a,b) => -descendingComparator(a,b, orderBy)
};

const sortedRowInformation = (rowArray, comparator) => {
    const stabilizedRowArray = rowArray.map((el, index) => [el, index])
    stabilizedRowArray.sort((a,b) => {
        const order = comparator(a[0], b[0])
        if(order !==0) return order
        return a[1] - b[1]
    })
    return stabilizedRowArray.map((el) => el[0])
}

export default function TableContent(props) {

    const classes = useStyles()
    const [orderDirection, setOrderDirection] = React.useState('Asc')
    const [valueToOrderBy, setValueToOrderBy] = React.useState('name')
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleRequestSort = (event, property) => {
        const isAscending = (valueToOrderBy === property && orderDirection === 'Asc')
        setValueToOrderBy(property)
        setOrderDirection(isAscending ? 'Desc' : 'Asc')
    }

    // Cambio de pagina en TablePagination//
    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value), 10)
        setPage(0)
    }
    // **** ///

    return (

        <>
        <TableContainer>
            <Table>
                <TableHeader 
                    valueToOrderBy={valueToOrderBy}
                    orderDirection={orderDirection}
                    handleRequestSort={handleRequestSort}
                />
                {
                    sortedRowInformation(rowInformation, getComparator(orderDirection, valueToOrderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((novela, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                {novela.name}
                            </TableCell>
                            <TableCell>
                                <Typography 
                                    className={classes.estado}
                                    style={{
                                        backgroundColor: 
                                        ((novela.estado === 'En Publicación' && 'green') ||
                                        (novela.estado === 'En Traducción' && 'orange')||
                                        (novela.estado === 'Pausado' && 'maroon')||
                                        (novela.estado === 'Finalizado' && 'grey'))
                                    }}
                                    >{novela.estado}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15, 30]}
            component="div"
            count={rowInformation.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </>
    )
}