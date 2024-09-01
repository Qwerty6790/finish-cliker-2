'use client';
import './task.css';
import { Toaster, toast } from "sonner";
import { useRouter } from 'next/navigation'

type TaskProps = {
  task_in_db: string;
  task_name: string;
  task_price: number;
  url_of_btn: string;
  user_id: number;
};

export default function Task({
  task_in_db,
  task_name,
  task_price,
  url_of_btn,
  user_id,
}: TaskProps) {
  const router = useRouter()

  // Function to send a request to complete the task
  const tryDoTask = async () => {
    try {
      const response = await fetch(`https://localhost:9000/tryDoTask/${user_id}/${task_in_db}/${task_price}`);
      const data = await response.json();
      if (!data.success){
        toast.info("Ты уже сделал это задание!")
      } else{
        router.push(url_of_btn)
        toast.success("Ты успешно выполнил задание! ")
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Call the tryDoTask function when the button is clicked
  const handleButtonClick = () => {
    tryDoTask();
  };

  return (
    <>
      <div className="task">
        <p className="task-name">{task_name}</p>
        <p className="task-price">{task_price}</p>
        <button className="claim-btn" onClick={handleButtonClick}>
          <a>Join</a>
        </button>
      </div>
    </>
  );
}
