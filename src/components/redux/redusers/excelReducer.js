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
const initialSortCfg = { columnKey: null, direction: 0 };
const excelReducer = (state = {books: initialBooks, sortCfg: initialSortCfg}, action) => {
    switch (action.type) {

        case 'SORT_BOOKS':
            let direction = 0;
            if ((state.sortCfg.columnKey === action.payload.key || state.sortCfg.columnKey === null) && direction === state.sortCfg.direction) {
                direction = 1
            }
            let sortedBooks = [...state.books].sort((a, b) => {
                if (action.payload.key !== 'rating') {
                    if (a[action.payload.key] !== null) {
                        return direction === 0 ? a[action.payload.key].localeCompare(b[action.payload.key]) : b[action.payload.key].localeCompare(a[action.payload.key])
                    }
                } else {
                    return direction === 0 ? a.rating - b.rating : b.rating - a.rating
                }
            })
            return {
                ...state,
                books: sortedBooks,
                sortCfg: { columnKey: action.payload.key, direction: direction }
            };

        case 'ADD_BOOK':
            let book = {
                id: state.books.length+1,
                rating: 0,
                name: '',
                author: '',
                country: ''
            }
            return {
                ...state,
                books: [...state.books].concat(book)
            };

        case 'EDIT_BOOK':
            return {
                ...state,
                books: action.payload.books
            };

        default:
            return state;
    }
}

export default excelReducer;