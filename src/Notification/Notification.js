import './Notification.css'
import { useState, createContext, useContext } from "react"

const Notification = ({message, severity, otherClass}) => {
    const estiloNotificacion = {
        position: "absolute",
        top: 100,
        right: 5,
        width: "auto",
        height: "auto",
        color: "#000",
        background: "#fff",
        padding: "1rem 2rem",
        borderRadius: "1rem"
    }

    const sett = true ? {
        style: estiloNotificacion,
        className: `${severity === 'error' ? 'Error' : 'Success'} ${otherClass || ''}`
    } : {}

        if (message === '') return
            return (
                <div {...sett}>
                    {message}
                </div>
            )
}

const NotificationContext = createContext ()

    export const NotificationProvider = ({children}) => {
        const [msgSett, setMsgSett] = useState ({
            severity: 'success',
            message: ''
        })

        const [otherClass, setOtherClass] = useState('')
        const setNotification = (sev, msg, timeout = 3) => {
            setMsgSett ({ severity: sev, message: msg})
            setTimeout(() => {
                setOtherClass('Animacion')
            }, (timeout - 1) * 1000);

            setTimeout(() => {
                setMsgSett({...msgSett, message: ''})
            }, timeout * 1000);
        }

        return(
            <NotificationContext.Provider value = {setNotification}>
                <Notification message={msgSett.message} severity={msgSett.severity} otherClass = {otherClass}/>
                {children}    
            </NotificationContext.Provider>
        )
    }

    export const useNotification = () => {
        return useContext(NotificationContext)
    }