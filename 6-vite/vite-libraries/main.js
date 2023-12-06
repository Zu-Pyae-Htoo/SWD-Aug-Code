import Typed from 'typed.js'
import './style.css'

const typeUi = document.querySelector("#typeUi")
const options = {
    strings : ["Companies <span class='text-primary-700'>.</span>","House <span class='text-primary-700'>.</span>","Organizations <span class='text-primary-700'>.</span>"],
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000,
    loop : true,
    contentType: 'html',
}
const type = new Typed(typeUi,options)
