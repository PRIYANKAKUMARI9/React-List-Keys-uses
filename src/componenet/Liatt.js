import React from 'react'

class Liatt extends React.Component{
    render(){
        const items=['bag','theala','sabji','fruits'];
        const item2=[111,222,333,444,555,666,777];
        const item3=["laptop","car","house","travel","money"];
        const item4=["ipl","kpl","spl","hpl"];
        return(
            <div>
                <ul>
                    {items.map((items,index)=>(<li key={index}>{items}</li>))}
                </ul>
                <div>
                    <ol>
                        {item2.map((item2,index)=>(<li key={index}>{item2}</li>))}
                    </ol>
                </div>
                <div>
                    <ul>
                    {item3.map((item3,index)=>(<li key={index}>{item3}</li>))}
                    </ul>
                </div>
                <div>
                    <ol>
                        {item4.map((item4,index)=>(<li key={index}>{item4}</li>))}
                    </ol>
                </div>
            </div>
            
        )
    }
}

export default Liatt;