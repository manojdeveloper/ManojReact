import { useLayoutEffect, useEffect, useState, useRef } from "react";
import { UserList } from "./UserList.js"

export let PropTypeCheck = () => {

    return (
        <>
            <UserList name={30} age="manoj" hobbies={["Reading", "Coding", "Cricket"]} />
        </>
    )
}