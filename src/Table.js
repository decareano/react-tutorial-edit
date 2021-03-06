const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Date</th>
                <th>Reading</th>
                <th>Remove Me</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
    
    const rows = props.characterData.map((row, index) => {
        
        return (
           
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button type="button" className="btn btn-primary" onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
            
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        );
}

export default Table;
