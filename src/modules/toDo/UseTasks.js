import { useState,useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {fetchTasks,addTask,deleteTask,updateTask} from "../../store/actions/ToDoAction";

export function UseTasks() {
    // const [students, setStudents] = useState([])
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)
    const [loading, setLoading] = useState(false);
    const [ctaLoading, setCtaLoading] = useState(false);

    const dispatch = useDispatch();
    // store data
    const tasks = useSelector(state => state.ToDoReducer.tasks)
    console.log("tasks from studentReducer",tasks);
    // setStudents(studentsData)
    // end of store data


    useEffect(() => {
    //    action call for fetching students
    console.log("call the action in custom hook for fetching setudents from firebase");
    dispatch(fetchTasks(setLoading))
    }, [])

    // api request for fetching data?

    const deleteHandler = (docID) => {
     
        dispatch(deleteTask(docID, setLoading))
        // setStudents([...newStudents]);
        // console.log("newStudents", newStudents);
    }

    const updateHandler = (task, index) => {
        console.log("need to update stu ", task);
        setUpdatedIndex(task.docID);
        setName(task.name);
        setStuClass(task.class);
        setRoll(task.roll);
        setBatch(task.batch);
        setFlag(true);
    }

    const ctaHandler = () => {
        setMessage("")
        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let task = {
                name,
                batch: Batch,
                roll,
                class: stuClass,
                createdAt: new Date()
            }
            console.log("student for passing to actions, // call action to add new data in firebase", task);
            
            // call action to add new data in firebase
            dispatch(addTask(task, setCtaLoading))
            setName("");
            setStuClass("");
            setRoll("");
            setBatch("");

        }
        else {
            setMessage(" Found few of params empty! Params can't be empty.")
        }
    }


    const ctaUpdateHandler = () => {
        setMessage("")
        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let task = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
            console.log("task", task);

          console.log("docID", updatedIndex);
            
             dispatch(updateTask(updatedIndex,task, setLoading))
        }
          
    

    // setStudents([...updateStudents]);
    setName("");
    setStuClass("");
    setRoll("");
    setBatch("");
    setFlag(false);

}
 



return [tasks,errorMessage,name,Batch,roll,stuClass,flag,updatedIndex,loading,ctaLoading,deleteHandler,updateHandler,ctaHandler,ctaUpdateHandler,setName,setBatch,setRoll,setStuClass]
}