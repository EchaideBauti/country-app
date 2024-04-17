import { useEffect, useState } from 'react'

const Switch = () => {

    const [theme, setTheme] = useState('light')

    const handleTheme = (e) => {
        console.log(e)
        setTheme(e.target.checked ? 'dark' : 'light')
        console.log(theme)
    }

    useEffect(() => {

        document.body.setAttribute('data-theme', theme);

    }, [theme]);
    return (
        <div className="form-check form-switch form-check-reverse">
            <span>Change Theme </span>
            <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onChange={handleTheme} checked={theme === 'dark'}/>
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default Switch