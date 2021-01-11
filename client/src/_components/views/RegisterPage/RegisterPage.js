import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom'


function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEamilHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (Password !== ConfirmPassword) {
            return alert('비밀번호가 일치하지 않습니다')
        }

        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body))
            .then(response => {
                if (response.payload.success) {
                    props.history.push('/login')
                }else {
                    alert("회원가입에 실패했습니다.")
                }
            })
    }
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems:'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
                
                <label>Email</label>
                <input type="email" value={Email} onChange={onEamilHandler}></input>

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}></input>

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}></input>

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>

                <br/>

                <button type="submit">
                    회원가입
                </button>

            </form>
        </div>
    )
}

export default withRouter(RegisterPage)