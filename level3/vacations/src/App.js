import React from "react";

import Product from "./Product"
import vacationSpots from "./vaction"

function App() {
    const productComponents = vacationSpots.map(item => <Product key={item.id} product={item}/>)
    return (
        <div>
            {productComponents}
        </div>
    )
}
export default App