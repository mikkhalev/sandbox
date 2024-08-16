import React, {useState} from 'react';
import classes from '../css/pages/excel.module.scss'
import PageTitle from "../components/UI/page-title";
import PageDescription from "../components/UI/page-description";
import Button from "../components/UI/button";
import Modal from "../components/UI/modal";
const Excel = () => {

    let headers = [
        {
            header: '№',
            key: 'rating'
        },
        {
            header: 'Название',
            key: 'name'
        },
        {
            header: 'Автор',
            key: 'author'
        },
        {
            header: 'Страна автора',
            key: 'country'
        }
    ]
    let initialBooks  = [
        {
            id:'1',
            rating: 1,
            name: '«Властелин колец»',
            author: 'Джон Р. Р. Толкин',
            country: 'Великобритания'
        },
        {
            id:'2',
            rating: 2,
            name: '«Гордость и предубеждение»',
            author: 'Джейн Остин',
            country: 'Великобритания'
        },
        {
            id:'3',
            rating: 3,
            name: '«Тёмные начала»',
            author: 'Филип Пулман',
            country: 'Великобритания'
        },
        {
            id:'4',
            rating: 5,
            name: '«Гарри Поттер и Кубок огня»',
            author: 'Джоан Роулинг',
            country: 'Великобритания'
        },
        {
            id:'5',
            rating: 7,
            name: '«Винни Пух»',
            author: 'Алан Александр Милн',
            country: 'Великобритания'
        },
        {
            id:'6',
            rating: 9,
            name: '«Лев, колдунья и платяной шкаф»',
            author: 'Клайв Стэйплз Льюис',
            country: 'Великобритания'
        },
        {
            id:'7',
            rating: 15,
            name: '«Над пропастью во ржи»',
            author: 'Джером Сэлинджер',
            country: 'США'
        },
        {
            id:'8',
            rating: 20,
            name: '«Война и мир»',
            author: 'Лев Толстой',
            country: 'Россия'
        },
    ]
    const [books, setBooks] = useState(initialBooks)
    const [sortCfg, setSortCfg] = useState({columnKey: null, direction: 0})

    function sortBooks(columnKey) {
        let direction = 0;
        if (columnKey === sortCfg.columnKey && direction === sortCfg.direction) {
            direction = 1
        }
        let sortedBooks = [...books].sort((a, b) => {
            if (columnKey !== 'rating') {
                if (a[columnKey] !== null) {
                    return direction === 0 ? a[columnKey].localeCompare(b[columnKey]) : b[columnKey].localeCompare(a[columnKey])
                }
            } else {
                return direction === 1 ? b.rating - a.rating : a.rating - b.rating
            }
        })
        setBooks(sortedBooks)
        setSortCfg({columnKey: columnKey, direction: direction})
    }
    function addBook() {
        let book = {
            id: books.length+1,
            rating: null,
            name: null,
            author: null,
            country: null
        }
        setBooks([...books].concat(book))
    }
    function editBook(event, book,key) {
        let editBooks = [...books]
        editBooks[editBooks.findIndex(bk => bk.id === book)][key] = event.target.value
        setBooks(editBooks)
    }
    return (
        <div className={`${classes.excel} flex-box-column`}>
            <PageTitle>Excel</PageTitle>
            <PageDescription>Таблица с возможность изменять содержимое клеток, а так же сортировать по колонкам.</PageDescription>
            <table>
                <thead>
                    <tr>
                        {
                            headers.map((header, index) =>
                                <th onClick={() => sortBooks(header.key)} key={index}>{header.header}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book =>
                            <tr key={book.id}>
                                <td>
                                    <input type={'text'} value={book.rating} onChange={(e) => editBook(e, book.id, 'rating')}/>
                                </td>
                                <td>
                                    <input type={'text'} value={book.name} onChange={(e) =>  editBook(e, book.id, 'name')}/>
                                </td>
                                <td>
                                    <input type={'text'} value={book.author} onChange={(e) =>  editBook(e, book.id, 'author')}/>
                                </td>
                                <td>
                                    <input type={'text'} value={book.country} onChange={(e) =>  editBook(e, book.id, 'country')}/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <Button onClick={() => addBook()}>
                Добавить
            </Button>
        </div>
    );
};

export default Excel;