import { useState, useEffect } from "react"
import { UserList } from "./UserList";
import { HocFunction } from "./HocFunction";


let UserListWithLoading = HocFunction(UserList);

export let HighOrderComponent = ()=> {
    let [isLoading, setIsLoading] = useState(true);
    let [users, setUsers] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            setUsers([
                { id: 1, name: "Amit" },
                { id: 2, name: "Rahul" },
            ]);
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <UserListWithLoading isLoading={isLoading} users={users} />
    );
}