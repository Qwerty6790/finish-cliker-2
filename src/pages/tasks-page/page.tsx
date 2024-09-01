import React from 'react'
import "./tasks-page-styles.css";
import Task from '@/components/task/task';
import { Toaster, toast } from "sonner";  

const TasksPage = () => {
  return (
    <>
    <div>
        <Toaster position="top-center" richColors />
        <img className='central-top-logo' 
          src='./images/жетон прозрачный.png' 
          alt='Монета' 
          height={95}
          width={100}
          />
       <h2 className='task-title'>Социальные сети</h2>
       <div className='task-container'>
        <Task task_in_db={'task1'} task_name={'task_name'} task_price={40000} url_of_btn={'https://web.telegram.org/a/#5714132496'} user_id={9999999999}/>
        <Task task_in_db={'task2'} task_name={'task_name'} task_price={40000} url_of_btn={'https://web.telegram.org/a/#5714132496'} user_id={9999999999}/>
        <Task task_in_db={'task3'} task_name={'task_name'} task_price={40000} url_of_btn={'https://web.telegram.org/a/#5714132496'} user_id={9999999999}/>
        <Task task_in_db={'task4'} task_name={'task_name'} task_price={40000} url_of_btn={'https://web.telegram.org/a/#5714132496'} user_id={9999999999}/>
      </div>
    </div>
    </>
  )
}

export default TasksPage
