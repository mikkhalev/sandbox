import React from 'react';
import PageTitle from "../../components/UI/page-title";
import PageDescription from "../../components/UI/page-description";
import classes from "../../css/pages/to-do.module.scss"
import Button from "../../components/UI/button";
import TaskItem from "../../components/UI/task-item";
import {useDispatch, useSelector} from "react-redux";
const ToDo = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.todos)
    let addTask = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_TASK', payload: {text: event.target.task.value}})
        event.target.task.value = ''
    }

    return (
            <div className={`${classes.todo} flex-box-column`}>
                <PageTitle>
                    To Do
                </PageTitle>
                <PageDescription>
                    Стандартный ту ду лист
                </PageDescription>
                <div className={`${classes.wrapper} flex-box-column`}>
                    <div className={`${classes.listTitle} flex-box-column`}>
                        <form onSubmit={(e) => addTask(e)} className={'flex-box-row'}>
                            <input id={'task'} type={"text"} placeholder={'Добавить задачу'}/>
                            <Button type={'submit'}>
                                Добавить
                            </Button>
                        </form>
                    </div>
                    <div className={`${classes.list} flex-box-column`}>
                        {
                            tasks.map(task =>
                                <TaskItem task={task} key={task.id} remove={() => dispatch({type: 'REMOVE_TASK', payload: {id: task.id}})} end={() => dispatch({type: 'END_TASK', payload: {id: task.id}})}/>
                            )
                        }
                    </div>
                </div>
            </div>
    );
};

export default ToDo;