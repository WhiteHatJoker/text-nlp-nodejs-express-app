import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

import { getAppKey } from './js/getKey'
import { postMeaningCloudApi } from './js/postApi'
import { getDataTable } from './js/buildTable'
import { handleSubmit } from './js/formHandler'

import mainLogo from './img/logo.png'

document.getElementById('mainLogo').src = mainLogo

export {
    getAppKey,
    postMeaningCloudApi,
    getDataTable,
    handleSubmit
}