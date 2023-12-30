import {createSlide} from "@reduxjs/toolkit"
import {html, css , js} from "../assets/index"


const initialState = [
    {
        id:1,
        lang: "html",
        imgURL: html, 
        buttonContent: "HTML",
        code: `<div>
        <h1>Editeur de code avec react</h1>
        <p>Codez directement sur votre navigateur..</p>
        </div>
        `
    },

    {
        id:3,
        lang: "javascript",
        imgURL: js, 
        buttonContent: "JavaScript",
        code: `console.log("hello World);`
    },
    

    
]

export const codeUpdater = createSlide({
    name: "code-updater",
    initialState,
    reducers: {
        updateCode: (state, action) => {
            state.find(obj => obj.id === action.payload.id).code = action.payload.value
        }
    }
})

export const {updateCode} = codeUpdater.actions