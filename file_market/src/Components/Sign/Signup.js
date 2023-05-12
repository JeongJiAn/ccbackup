import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SignupModal from './SignupModal';
import styles from "../../assets/css/Sign/Signup.module.css";

const LeftBlock = () => {
    return(
        <div className={styles.left_block_wrapper} />
    )
}

const RightBlock = () => {
    const navigate = useNavigate();
    const [nameValue, setName] = useState('');
    const [idValue, setId] = useState('');
    const [pwValue, setPw] = useState('');
    const [rePwValue, setRePw] = useState('');

    const [modalOpen, setModalOpen] = useState('');

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const checkSignupAvailable = () => {
        if (nameValue !== '' && idValue !== '' && pwValue !== '' && rePwValue !== '' && pwValue === rePwValue) {
            return true;
        } else {
            return false;
        }
    }

    return(
        <div className={styles.right_block_outer_wrapper}>
            <div className={styles.signup_wrapper}> 
                <div className={styles.signup_header_wrapper}>
                    Who're You?
                </div>
                <div className={styles.signup_block_wrapper}>
                    <div className={styles.signup_input_wrapper}>
                        <input
                            id="name_input"
                            name="name_input"
                            placeholder='Name'
                            value={nameValue}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                            className={styles.signup_input}
                        />
                    </div>
                    <div className={styles.signup_input_wrapper}>
                        <input
                            id="id_input"
                            name="id_input"
                            placeholder='ID'
                            value={idValue}
                            onChange={(event) => {
                                setId(event.target.value);
                            }}
                            className={styles.signup_input}
                        />
                    </div>
                    <div className={styles.signup_input_wrapper}>
                        <input
                            id="pw_input"
                            name="pw_input"
                            placeholder='Password'
                            value={pwValue}
                            onChange={(event) => {
                                setPw(event.target.value);
                            }}
                            className={styles.signup_input}
                        />
                    </div>
                    <div className={styles.signup_input_wrapper}>
                        <input
                            id="rePw_input"
                            name="rePw_input"
                            placeholder='Confirm Password'
                            value={rePwValue}
                            onChange={(event) => {
                                setRePw(event.target.value);
                            }}
                            className={styles.signup_input}
                        />
                    </div>
                    <div className={styles.signup_button_wrapper}>
                        <button className={styles.signup_button}
                            onClick={() => {navigate('/')}}>
                                Cancel
                        </button>
                        <button className={styles.signup_button}
                            onClick={() => {
                                if (checkSignupAvailable()) {
                                    openModal()
                                } else {
                                    alert("Warning!");
                                }
                                }}>
                            Sign up
                        </button>
                        {modalOpen && <SignupModal openModal={openModal} closeModal={closeModal} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Signup = () => {
    return(
        <div className={styles.signup}>
            <LeftBlock />
            <RightBlock />
        </div>
    )
}

export default Signup;