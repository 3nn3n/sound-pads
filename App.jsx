import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
  const [pads, setPads] = React.useState(padsData)

  function toggle(id){
    setPads(prev => prev.map(item => {
        return (item.id === id ? {...item, on: !item.on} : item)
    }))
  }





  const buttonElements = pads.map(elements => (<Pad toggle={toggle} id={elements.id} key={elements.id} color={elements.color} on={elements.on}/>))


    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
