import {useEffect, useState} from "react";
import {deleteUser, getUsers} from "../../services/Userservices";
import "./Table.css"
import {RiDeleteBin5Line} from 'react-icons/ri';
import AddUser from "../Modal/User/AddUser";
import UpdateUser from "../Modal/User/UpdateUser";
import {toast} from "react-toastify";
import {FaEdit} from "react-icons/fa";

const Table = () => {
    const [user, setUser] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editUser, setEditUser] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mount = true;
        if (user.length && isUpdated) {
            return;
        }
        getUsers().then(data => {
            if (mount) {
                setUser(data)
            }
        })
        return () => {
            mount = false;
            setIsUpdated(false)
        }
    }, [isUpdated, user])

    const handleUpdate = (e, user) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditUser(user);
    };
    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };
    const handleDelete = (e, UserId) => {
        if (window.confirm('Are you sure ?')) {
            e.preventDefault();
            deleteUser(UserId)
                .then((result) => {
                        toast.success(result);
                        setIsUpdated(true);
                    },
                    (error) => {
                        toast.error("Failed to Delete Student");
                    })
        }
    };
    let AddModelClose = () => setAddModalShow(false);
    let EditModelClose = () => setEditModalShow(false);
    return (
        <div>
           <AddUser  onClick={handleAdd} show={addModalShow} setUpdate={setIsUpdated} onHide={AddModelClose}/>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {user.map((item,key) => (
                    <tr key={item.UserId}>
                        <td>{item.UserId}</td>
                        <td>{item.FirstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.UserName}</td>
                        <td>{item.Email}</td>
                        <td>{item.Password}</td>
                        <td className="btn-table">
                              <button className="btn-edit"
                    onClick={event => handleUpdate(event,item)}>
                        <FaEdit/>
                  </button>
                            <UpdateUser show={editModalShow} user={editUser} setUpdated={setIsUpdated} onHide={EditModelClose}></UpdateUser>
                            <button className="btn-delete"  onClick={event => handleDelete(event,item.UserId)}><RiDeleteBin5Line/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table