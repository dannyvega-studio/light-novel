import React from 'react'
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TableHeader from '../Pagination/TableHeader.jsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import { TableContainer, TableHead } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import SearchBar from "material-ui-search-bar";


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
    {"name": "Ano Orokamono ni mo Kyakkou wo!", "estado": "En Traducción", "link": "kyakko"},
    {"name": "Boku no Kanojo Sensei", "estado": "En Traducción" , "link": "bokusensei"},
    {"name": "Boku no Sensei wa, Houkago Kawaii Konyakusha", "estado": "En Publicación" , "link": "bokunosensei"},
    {"name": "Boku wa Tomodachi ga Sukunai", "estado": "En Traducción" , "link": "bwtgs"},
    {"name": "Full Metal Panic!", "estado": "Finalizado", "link": "fmp"},
    {"name": "Goblin Slayer", "estado": "En Publicación", "link": "gs"},
    {"name": "Hentai Ouji to Warawanai Neko", "estado": "Finalizado", "link": "henneko"},
    {"name": "Hige wo Soru. Soshite Joshi Kōsei wo Hirou", "estado": "En Traducción", "link": "hige"},
    {"name": "Isekai Maou to Shoukan Shoujo no Dorei Majutsu", "estado": "En Publicación", "link": "isekaimaou"},
    {"name": "Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahō to Skill Copy no Chōetsu Heal", "estado": "En Publicación", "link": "kaiyari"},
    {"name": "Kono Kamen no Akuma ni Soudan wo!", "estado": "Finalizado", "link": "kamen"},
    {"name": "Kono Subarashii Sekai ni Bakuen wo!", "estado": "Finalizado", "link": "bakuen"},
    {"name": "Kono Subarashii Sekai ni Bakuen wo! Zukko", "estado": "Finalizado", "link": "bakuenzukko"},
    {"name": "Kono Subarashii Sekai ni Shukufuku wo!", "estado": "Finalizado", "link": "konosuba"},
    {"name": "Kumo Desu Ga, Nani Ka?", "estado": "En Publicación", "link": "kdgnk"},
    {"name": "Majo no Tabitabi", "estado": "En Publicación", "link": "elaina"},
    {"name": "Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo?", "estado": "Finalizado", "link": "mondaiji"},
    {"name": "Mushoku Tensei: Isekai Ittara Honki Dasu", "estado": "Finalizado", "link": "mushoku"},
    {"name": "Musume Janakute Mama ga Suki nano!?", "estado": "En Publicación", "link": "mamasuki"},
    {"name": "Nihon e Youkoso Elf-san", "estado": "En Publicación", "link": "elfsan"},
    {"name": "No Game No Life", "estado": "Finalizado", "link": "ngnl"},
    {"name": "Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta...", "estado": "En Publicación", "link": "bakarina"},
    {"name": "Overlord", "estado": "En Publicación", "link": "overlord"},
    {"name": "Re:Zero kara Hajimeru Isekai Seikatsu", "estado": "En Publicación", "link": "rz"},
    {"name": "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai", "estado": "En Publicación", "link": "sby"},
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
    const [rowsPerPage, setRowsPerPage] = React.useState(15)

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
        <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
                margin: '10px',
                maxWidth: 800
            }}
        />
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
                                    <Link className="btn-light-text" to={`/light-novel/${novela.link}/`} key={novela.link}>
                                        {novela.name}
                                    </Link>
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
            rowsPerPageOptions={[10, 15, 30]}
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