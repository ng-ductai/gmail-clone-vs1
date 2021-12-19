import { CheckBoxOutlineBlank, LabelOutlined, StarBorder } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { openMessage } from '../../features/mailSlice'
import './index.css'

const Body = ({name, subject, message, time, email}) => {
    const history = useNavigate();
    const dispatch = useDispatch()

    const setMail = () => {
        dispatch(openMessage({
            name,
            subject,
            message, 
            email,
            time
        }))
        history('/email')
    }
    return (
        <div className='body' onClick={setMail}>
            <div className="body__left">
                <CheckBoxOutlineBlank/>
                <StarBorder/>
                <LabelOutlined/>
                <h4>{name}</h4>
            </div>
            <div className="body__middle">
                <div className="body__middle__msg">
                    <p>{subject} - {message}</p>
                </div>
            </div>
            <div className="body__right">
                <p>{time}</p>
            </div>
        </div>
    )
}

export default Body
