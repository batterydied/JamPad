import { DeleteBtnProps } from "./interface";
function DeleteBtn(props: DeleteBtnProps){
    return (
        <>
        <button className="del-btn" onClick={props.del}>DELETE</button>
        </>
    )
}

export default DeleteBtn;
