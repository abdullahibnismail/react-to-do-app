function TaskList({task, index,deleteHandler, updateHandler,d}) {

    return (
        <tr>
            <td>{index}</td>
            <td>{task.name}</td>
            <td>{task.batch}</td>
            <td>{task.roll}</td>
            <td>{task.class}</td>
            <td>
                <button onClick={()=> deleteHandler(task.docID)}>
                    delete
                </button>
            </td>

            <td>
                <button onClick={()=> updateHandler(task, index,)}>update item</button>
            </td>
        </tr>
    )
}


export default TaskList;