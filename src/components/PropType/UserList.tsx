type UserListProps = {
    name: string;
    age: number;
    hobbies: string[];
};

export let UserList = ({ name, age, hobbies }: UserListProps) => {
    console.log(typeof age);

    let check = (e)=>{
        console.log(e);
    }

    let checkinput = (e)=>{
        console.log(e);
    }


    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
            width: "250px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            fontFamily: "Arial, sans-serif",
        }}>
            <h2>{name}</h2>
            <p>Age: {age}</p>

            <h4>Hobbies:</h4>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index} onClick={check} data-manoj={hobby}>{hobby}</li>
                ))}
            </ul>

            <input type="text" onChange={checkinput} />
        </div>
    );
};