import { db } from "../../config/Firebase";
import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  FETCH_TASKS,
} from "../types/Type";

// network requests can only be made in actions ( api , firebase )

// fetch students from firebase action
export const fetchTasks = (setLoading) => async (dispatch, previouState) => {
  try {
    setLoading(true);
    let snapshot = await db.collection("tasks").get();
    let tasks = [];
    snapshot.forEach((doc) => {
      tasks.push({
        docID: doc.id,
        ...doc.data(),
      });
    });

    console.log("data from firebase into action", tasks);
    dispatch({
      type: FETCH_TASKS,
      payload: tasks,
    });
  } catch (error) {
    console.log("error", error);
    alert(error);
  } finally {
    setLoading(false);
  }
};

// add student in firebase action
export const addTask =
  (data, setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      await db.collection("tasks").add(data);
      console.log("data added into firebase in action",);
      dispatch({
        type: ADD_TASK,
        payload: data,
      });
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };


  // delete student in firebase action
export const deleteTask =
(docID, setLoading) => async (dispatch, previouState) => {
  try {
    setLoading(true);
    await db.collection("tasks").doc(docID).delete();
    console.log("data delete into firebase in action",);
    dispatch({
      type: DELETE_TASK,
      payload: docID,
    });
  } catch (error) {
    console.log("error", error);
    alert(error);
  } finally {
    setLoading(false);
  }
};


// update student in firebase action
export const updateTask =
  (docID,data, setLoading) => async (dispatch, previouState) => {
    try {
      setLoading(true);
      await db.collection("tasks").doc(docID).update(data);
      console.log("data added into firebase in action",);
      dispatch({
        type: UPDATE_TASK,
        payload: {docID,data},
      });
    } catch (error) {
      console.log("error", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };