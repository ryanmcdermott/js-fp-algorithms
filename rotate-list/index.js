import _ from 'lodash';

const rotateList = (list, k) => [].concat(_.drop(list, k), _.take(list, k));
export default rotateList;
