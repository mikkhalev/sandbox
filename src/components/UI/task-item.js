import React from 'react';
import classes from "../../css/components/UI/task-item.module.scss";

const TaskItem = ({task, remove, end}) => {


    return (
        <div className={`${classes.item} flex-box-row space-between ${task.status === 'end' ? classes.endTask : ''}`}>
            <div className={`${classes.title} flex-box-row`}>
                <img src={'/img/drug.svg'} alt={``}/>
                <span>
                    {
                        task.text
                    }
                </span>
            </div>
            <div className={`${classes.delDone} flex-box-row`}>
                <img src={'/img/done.svg'} alt={``} onClick={end}/>
                <img src={'/img/del.svg'} alt={``} onClick={remove}/>
            </div>
        </div>
    );
};

export default TaskItem;