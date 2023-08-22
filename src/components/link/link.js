import El from "../../utils/El.js";
import { Routes } from "../../routes/routes.js";
export const Link = ({ to, child,classMore }) => {
    return El({
        element: 'a',
        className:classMore,
        onclick() {
            history.pushState(null, null, to)
            Routes()
        },
        child,
    })
}
