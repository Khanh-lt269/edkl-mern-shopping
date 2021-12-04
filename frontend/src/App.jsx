import "./App.css";
import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Screens

import HomeScreen from "./screen/HomeScreen"
import ProductScreen from "./screen/ProductScreen"
import CartScreen from "./screen/CartScreen"

// Components
import Navbar from "./components/Navbar"
import Backdrop from "./components/Backdrop"
import SideDrawer from "./components/SideDrawer"

function App() {

    const [sideToggle, setSideToggle] = useState(false)

    return (
        <Router>
            {/* navbar */}
            <Navbar click={() => setSideToggle(true)} />
            {/* sidedrawer */}
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
            {/* backdrop */}
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <main>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/product/:id" component={ProductScreen} />
                    <Route exact path="/cart" component={CartScreen} />
                </Switch>
            </main>
            

        </Router>

    );
}

export default App;