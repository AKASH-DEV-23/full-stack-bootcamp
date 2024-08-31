import React,{createContext,useContext,useState} from 'react'
const ThemeContext=createContext('light')
const Theme = () => {
    const theme =useContext(ThemContext)
  return (
    <div style={{background:theme === 'light'?'#000':'#fff'}}>
        the current theme is {theme}
      
    </div>
  )
}





// export default Conthj
export default function Change() {
    const [theme,setTheme]=useState('light')
    return (
      <ThemContext.Provider value={theme}>
        <button onClick={()=>setT
(theme=='light'?'dark':'light')}>change theme</button>
        <Conthj/>
      </ThemContext.Provider>
    )
  }

const ThemContext=createContext('light')
const Conthj = () => {
    const theme =useContext(ThemContext)
  return (
    <div style={{background:theme === 'light'?'#000':'#fff'}}>
        the current theme is {theme}
      
    </div>
  )
}
// export default Conthj
export default function Chang() {
    const [theme,setTheme]=useState('light')
    return (
      <ThemContext.Provider value={theme}>
        <button onClick={()=>setTheme(
theme=='light'?'dark':'light')}>change theme</button>
        <Conthj/>
      </ThemContext.Provider>
    )
  }