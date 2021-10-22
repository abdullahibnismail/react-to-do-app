import TaskList from '../../commonComponents/List/TaskList';
import {UseTasks} from "./UseTasks";
function Tasks() {
    const [tasks,errorMessage,name,Batch,roll,stuClass,flag,updatedIndex,loading,ctaLoading,deleteHandler,updateHandler,ctaHandler,ctaUpdateHandler,setName,setBatch,setRoll,setStuClass] = UseTasks();
return (
    <div>
        <h1>Add New Task </h1>
        <input type="text" value={name} name="name" placeholder="title" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={Batch} name="s" placeholder="description" onChange={(e) => setBatch(e.target.value)} />
        <input type="text" value={roll} placeholder="task" onChange={(e) => setRoll(e.target.value)} />
        <input type="date" value={stuClass} placeholder="date" onChange={(e) => setStuClass(e.target.value)} />

        {flag ?
            <button onClick={ctaUpdateHandler}>update</button>
            :
            <button onClick={ctaHandler}>{ctaLoading ? "loading...": "submit"}</button>
        }

        <p style={{ backgroundColor: "red", color: 'white' }}>
            {
                errorMessage
            }
        </p>
        <hr />
        <h1>List of tasks</h1>
        <table>
            <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Task</th>
                <th>Date</th>
            </tr>

            {
                tasks.map((item, index) => {
                    return <TaskList index={index} task={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                })
            }

            {loading && <div>Loading....</div>}


        </table>
    </div>
)
}

export default Tasks;