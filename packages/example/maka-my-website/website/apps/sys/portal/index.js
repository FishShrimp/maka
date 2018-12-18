import pkgJson from './package.json'
import view from './view'
import action from './action'
import state from './state'
import './img/logo.png'
import './img/photo.png'
import './style.less'

const name = pkgJson.name

export {
    name,
    view,
    state,
    action
}

