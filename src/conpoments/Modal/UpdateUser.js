import {updateuser} from "../../services/Userservices";
import "./Modal.css"
import Modal from 'react-modal';
import {useState} from "react";
import {CgClose} from "react-icons/cg";
import Image from "../../assets/image";
import {toast} from 'react-toastify';
import {RiImageAddFill} from "react-icons/ri";
import {FaEdit} from "react-icons/fa";

const customStyles = {
    content: {
        width: '50%',
        height: 'auto',
        top: '50%',
        left: '40%',
        right: '20%',
        bottom: 'auto',
        marginRight: '-50%',
        marginLeft: '10%',
        transform: 'translate(-50%, -50%)',
    },
};
const UpdateUser = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateuser(props.user.UserId,e.target)
            .then((res) => {
                    toast.success(res);
                    props.setUpdated(true);
                },
                (error) => {
                    toast.error("Failed to Update User");
                })
           closeModal();
    }

    return (
        <div>
            <button className="btn-edit" onClick={openModal} ><FaEdit/></button>
            <Modal
                {...props}
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Add new user</h2>
                <CgClose className="close" size={30} onClick={closeModal}>close</CgClose>

                <form onSubmit={handleSubmit}>
                    <div className="add-user">
                        <div className="item-img">
                            <img src={Image.noAvt}/>
                            <div>
                                <label htmlFor="file"><RiImageAddFill size={30}/></label>
                                <input type="file" id="file" style={{display: 'none'}}/>
                            </div>
                            <div className="item-input btn-modal">
                                <button className="btn-save">Save</button>
                                <button className="btn-cancel" onClick={closeModal}>Cancel</button>
                            </div>
                        </div>
                        <div className="item-form">
                            <div className="item-input">
                                <label>
                                    First Name
                                </label>
                                <input type="text" placeholder="First Name" name="FirstName" defaultValue={props.user.FirstName} />
                            </div>
                            <div className="item-input">
                                <label>
                                    Last Name
                                </label>
                                <input type="text" placeholder="Last Name" name="LastName" defaultValue={props.user.LastName} />
                            </div>
                            <div className="item-input">
                                <label>
                                    User Name
                                </label>
                                <input type="text" placeholder="User Name" name="UserName" defaultValue={props.user.UserName} />
                            </div>
                            <div className="item-input">
                                <label>
                                    Email
                                </label>
                                <input type="text" placeholder="Email" name="Email" defaultValue={props.user.Email} />
                            </div>
                            <div className="item-input">
                                <label>
                                    Password
                                </label>
                                <input type="password" placeholder=" Password" name="Password" defaultValue={props.user.Password} />
                            </div>
                            <div className="item-input">
                                <label>
                                    Role
                                </label>
                                <input type="text" placeholder="Role"/>
                            </div>

                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
export default UpdateUser