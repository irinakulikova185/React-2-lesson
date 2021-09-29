import NamesList from "./namesList"

const NamesBlock = (props) => {

    const {loading} = props
    const namesBlock = loading ? <div>loading...</div> : <NamesList {...props}/>
    return(
        <>
        <h3>Список из рандомных имен</h3>
        {namesBlock}
        </>
    ) 
  }


export default NamesBlock;  