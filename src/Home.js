export default function Home(props){
    return (

        <>
            <h1>Home</h1>
            <h2>Welcome {props.username}, {props.status}</h2>
        </>
    );
}