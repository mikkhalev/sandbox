import React from 'react';
import classes from '../../css/pages/excel.module.scss'
import PageTitle from "../../components/UI/page-title";
import PageDescription from "../../components/UI/page-description";
import Button from "../../components/UI/button";
import {headers} from './data'
import {useDispatch, useSelector} from "react-redux";

const Excel = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.excel)

    function editBook(event, bookId,key) {
        const newValue = event.target.value;

        // Создаем новый массив книг, обновляя только нужную книгу
        const updatedBooks = state.books.map(book =>
            book.id === bookId
                ? { ...book, [key]: newValue }
                : book
        );

        // Диспатчим обновленный массив книг
        dispatch({
            type: 'EDIT_BOOK',
            payload: {
                books: updatedBooks
            }
        });
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
                                <th onClick={() => dispatch({type: 'SORT_BOOKS', payload: {key: header.key}})} key={index}>{header.header}</th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        state.books.map(book =>
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
            <Button onClick={() => dispatch({type: 'ADD_BOOK'})}>
                Добавить
            </Button>
        </div>
    );
};

export default Excel;