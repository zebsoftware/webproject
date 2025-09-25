
buttonhandle = ()=>{
    console.log("login button clicked");
}
function Event(){
        return (
            <>
            <button onClick={buttonhandle("login")}>login</button>
            </>
        );

    


}
export default Event;