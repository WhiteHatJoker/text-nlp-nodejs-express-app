import './styles/resets.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

import { getAppKey } from './js/getKey'
import { postMeaningCloudApi } from './js/postApi'
import { handleSubmit } from './js/formHandler'

export {
    getAppKey,
    postMeaningCloudApi,
    handleSubmit
}