import { useLayoutEffect, useEffect, useState, useRef } from "react";
import { UserList } from "./UserList.tsx"

export let PropTypeCheck = () => {

    return (
        <>
            <UserList name="manoj kumar" age={30} hobbies={["Reading", "Coding", "Cricket"]} />
        </>
    )
}