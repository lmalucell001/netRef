import { set } from "js-cookie";
import React from "react";
import logo from './logor.webp';
import { useRef } from "react";

// let itop = "100";
// let ileft = "200";

const SetCadre = () => {

    const [indiceDivSelected, setIndiceDivSelected] = React.useState(0)
    const [itop, setItop] = React.useState(["500"])
    const [ileft, setIleft] = React.useState(["500"])
    const [cadres, setCadres] = React.useState(["0"])
    const [number, setNumber] = React.useState(1)
    var dragging = new Boolean(false)
    const cadro = useRef(0)

    const addCadres = () => {
        setNumber(prevNumber => prevNumber + 1)
        // console.log(number)
        setCadres([...cadres, number.toString()])
        // console.log("addca", cadres)
    }
    
    // const onClickDiv = (i) => {
    //     alert( "DIV CURRENT NUM="+i)
    //     setIndiceDivSelected(i)
    // }
    

    const ondragStart = () => {
        dragging = true;
    }
    const ondragging = (i,e) => {
        if (dragging) {
            let g = e.clientX
            let k = e.clientY
            g = g-75
            k = k-75
            let cla = ileft.slice()
            let clb = itop.slice()
            cla[i] = g.toString()
            clb[i] = k.toString()
            setIleft(cla)
            setItop(clb)
        }
    }
    const ondragEnd = () => {
        dragging = false;
    }
    
    const onMouseDown = (e) => {
        let Y = e.clientY;
        let X = e.clientX;
        Y = Y-75;
        X = X-75;
        setItop([...itop, Y.toString()])
        setIleft([...ileft, X.toString()])
        console.log(itop);
        console.log(cadres);
        // console.log(e.clientX + " et " + e.clientY)
        // console.log(ileft + " et " + itop)
        addCadres()
        // document.documentElement.style.setProperty('--coorX', e.clientX - 50 + "px")
        // document.documentElement.style.setProperty('--coorY', e.clientY - 50 + "px")
    }

    function removeDummy() {
        if (cadres.length === 1) {
            setCadres(["0"])
        }
        else {
            cadres.pop();
            ileft.pop();
            itop.pop();
            setNumber(prevNumber => prevNumber - 1)
            // console.log(cadres)
            if (number < 0) {
                setNumber(0)
            }
        }

        console.log(itop);
        console.log(cadres);
    }

    const rizète = () => {
        setCadres(["0"])
        setNumber(1)
        setIleft(["500"])
        setItop(["500"])
    }

    console.log(cadro)


    return (
        <div>
            <button onClick={removeDummy}>enlever la dernière div</button> <button onClick={rizète}>reset</button>
            <div
                onMouseDown={onMouseDown}
                style={{ height: "100vh", width: "100%" }}>
                {/* <img src={logo} alt="pas là" width="100px" style={{ position: "absolute", top: itop + "px", left: ileft + "px" }} /> */}
            </div>
            <div>{cadres.map((cadre) => (<div onMouseDown={ondragStart} onMouseMove={(e) => ondragging(cadre,e)} onMouseUp={ondragEnd} style={{ height: "150px", width: "150px", backgroundColor: "red", position: "absolute", top: `${itop[cadre]}` + "px", left: `${ileft[cadre]}` + "px" }} ></div>))}
            </div>

        </div>
    );

}

export default SetCadre;