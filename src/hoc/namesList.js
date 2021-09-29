const NamesList = (props) => {
    const {data, count} = props
    let nameListElem;
    if(/[1-9]/.test(count)) {
        console.log(/[1-9]/.test(count))
        nameListElem = (
                    <ol>
                      {data.map((person, i) => {
                        const {first, last} = person.name
                        return <li key={i}>{first} {last}</li>
                      })}
                    </ol>
                )
    } else {
        nameListElem = (
            nameListElem = <p>Введите число больше 0</p>
        )
    }
    return (
        <> 
          {nameListElem}
        </>
      )  
} 
export default NamesList