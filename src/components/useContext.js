import React, {useContext } from 'react';
const themes = {
    red: {
      color: "white",
      background: "red"
    },
    yellow: {
      color: "black",
      background: "yellow"
    }
  };
  
  const ColorContext = React.createContext(themes.yellow);
  
  const ComponentWithContext = () => {
    return (
        <>
      <ColorContext.Provider value={themes.red}/>
        
    {/* //   </ColorContext.Provider> */}
      <ParentComponent />
      </>
    );
  }
  
  const ParentComponent = () => {
    return (
      <div>
        <ChildComponent/>
      </div>
    );
  }
  
  const ChildComponent = () => {
    const theme = useContext(ColorContext);
    return (
        <div className='component'>
            <span style={{ background: theme.background, color: theme.color }}>
                Стили из контекста
            </span>
        </div>
      
    );
  }

  export default ComponentWithContext