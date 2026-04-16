import { useState } from "react";
import "./TodoListTask.scss";

export let TodoListTask = () => {

    let dataArray = JSON.parse(localStorage.getItem("todolist")) || [];

    let [todoItemsArray, SettodoItemsArray] = useState(dataArray);


    let getListItem = ()=> {
        let getthis = document.querySelector("#itemText");
        
        SettodoItemsArray((prevData)=>{
            let newData = [...prevData];

            if(getthis.value.trim() !== "" && !newData.includes(getthis.value.trim())){
                newData.push(getthis.value.trim());
                localStorage.setItem("todolist", JSON.stringify(newData));
            }

           return newData;
        });
        
    }

    let onEnterHit = (event) =>{
        //console.log(event);
        if(event.key === "Enter"){
            getListItem();
        }
    }

    let deleteItem = (getitemid) =>{        
        SettodoItemsArray((prevData)=>{
            let newData = [...prevData];
            newData.splice(getitemid, 1);
            localStorage.setItem("todolist", JSON.stringify(newData));
            return newData;
        });
    }

    let clearAll = ()=>{
        SettodoItemsArray((prevData)=>{
            localStorage.removeItem("todolist");
            return [];
        });
    }

    return (
        <div className="todoListWrapper">
            <div className="todoListContainer">
                <h2>Todo List</h2>
                <DateTime />
                <AddItems onenterhit={onEnterHit} getListItem={getListItem} />
                <div className="itemListContainer">
                    {todoItemsArray.map((data, index)=>{
                        return <ItemsList key={index} itemdata={data} itemdataindex={index} deleteItem={deleteItem} />
                    })}
                </div>

                <ClearAll clearallitems={clearAll} />
            </div>
        </div>
    );
}

let DateTime = () => {

    let [currentDate, SetcurrentDate] = useState(new Date().toLocaleDateString());
    let [currentTime, SetcurrentTime] = useState(new Date().toLocaleTimeString());
    
    setInterval(()=>{
        SetcurrentDate(()=>{
            return new Date().toLocaleDateString();
        });

        SetcurrentTime(()=>{
            return new Date().toLocaleTimeString();
        });
    },1000);  

    

    return (
        <div className="dateTimeBox">
            {currentDate} - {currentTime}
        </div>
    );
}

let AddItems = (props) => {

    return (
        <div className="addItemBox">
            <input type="text" id="itemText" onKeyUp={props.onenterhit} placeholder="Add item here" />
            <button type="button" onClick={props.getListItem}>Add</button>
        </div>
    )
}

let ItemsList = (props) => {
    return (
        <div className="listItems">
            <p>{props.itemdata}</p>
            <button className="checkButton" type="button"></button>
            <button className="deleteButton" onClick={()=> props.deleteItem(props.itemdataindex)} type="button">X</button>
        </div>
    )
}

let ClearAll = (props) => {
    return (
        <button className="clearAllButton" onClick={props.clearallitems} type="button">Clear all</button>
    )
}