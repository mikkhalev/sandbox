const initialTasks = [
        {
            id: 0,
            text: 'Почистить зубы',
            status: 'active',
        },
        {
            id: 1,
            text: 'Сварить кофе',
            status: 'active',
        },
        {
            id: 2,
            text: 'Прочитать книгу',
            status: 'active',
        },
        {
            id: 3,
            text: 'Выучить стихотворение',
            status: 'active',
        },
        {
            id: 4,
            text: 'Посадить дерево',
            status: 'end',
        }]


const todoReducer = (tasks = initialTasks, action) => {
    switch (action.type) {

        case 'ADD_TASK':
            return [{id: tasks.length, text: action.payload.text, status: 'active'}, ...tasks]

        case 'REMOVE_TASK':
            return [...tasks].filter(el => el.id !== action.payload.id)

        case 'END_TASK':
            let updTasks = tasks.map(el => {
                if (el.id === action.payload.id) {
                    return {...el, status: 'end'}
                }
                return el
            })
            let sortTasks = [];
            updTasks.reverse().forEach(el => {
                if (el.status === 'active') {
                    sortTasks.unshift(el)
                } else if (el.status === 'end') {
                    sortTasks.push(el)
                }
            })
            return sortTasks;

        default:
            return tasks;
    }
}

export default todoReducer;