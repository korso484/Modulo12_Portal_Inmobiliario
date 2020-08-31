import { history } from '../../core/router';
import { getPropertyDetail } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyFromApiToViewModel } from './property-detail.mappers';

const params = history.getParams();
console.log(params);


getPropertyDetail(params.id).then(result => {
    const viewModelProperty = mapPropertyFromApiToViewModel(result);
    console.log(viewModelProperty);
    setPropertyValues(viewModelProperty);
});

