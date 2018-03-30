import { executeSql } from 'yasav/src/Database';
import { GET_ALL_WEIGHTED_TAGS } from './types';


export function getAllWeightedTags() {
  return dispatch => executeSql(
    `SELECT COUNT(*) as count, tag_id, name
     FROM activity_tag, tag
     WHERE tag.id = tag_id
     GROUP BY tag_id`)
    .then((res) => {
      const tags = res.rows._array.map(tag => ({
        id: tag.tag_id,
        name: tag.name,
        weight: tag.count,
      }));
      dispatch({ type: GET_ALL_WEIGHTED_TAGS, weightedTagList: tags });
    });
}
