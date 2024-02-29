import Button from "./Button";

function App () {

    let tab = 0
    let n = 10

    for (let c = 0; c <= n; c++) {
        tab = n * c
    }

    return (
        <div>
           <h2>Hello, World!</h2>
           <Button />
        </div>
    )
}

export default App;