import pkgJson from '../package.json'
import { load, getComponent } from 'maka'
import './style.less'
import view from './view'
import action from './action'
import state from './state'

const name = pkgJson.name

async function beforeRegister(){
    await load(['antd', 'action', 'i18n'])
}

function viewDecorator() {
    return getComponent('antd.Form').create()
}

export {
    name,
    state,
    action,
    view,
    viewDecorator,
    beforeRegister
}