import { renderImgEditor } from './img-upload-form.js';
import { getData } from './api.js';
import { showDataError } from './notification.js';
import { renderPictures } from './pictures.js';
import { configFilter } from './filter.js';

getData()
  .then((data) => {
    renderPictures(data);
    configFilter(data);
  })
  .catch(showDataError);

renderImgEditor();
