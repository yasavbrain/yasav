import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import { ActivityTypeEnum } from 'yasav/src/const';
import { addInterlocutor } from 'yasav/src/components/interlocutor/screens/InterlocutorAdd/actions/index';
import ActivityAddEditView from '../views/ActivityAddEditView';
import { addActivity, editActivity, addTags, getTags } from '../actions/index';
import { getActivityFromId } from '../../ActivityDisplay/actions/index';
import { cleanTag } from 'yasav/src/utils/functions'

moment.locale('fr');

class ActivityAddEditContainer extends React.Component {
  constructor(props) {
    super(props);
    let type = ActivityTypeEnum.CONTENT;
    if (props.type >= 0) {
      type = props.type;
    }
    this.state = {
      isFormValid: false,
      activity: {
        title: '',
        description: '',
        date: moment(),
        type,
        contentSource: '',
        tags: [],
      },
      interlocutor: null,
      autocompleteTagList: [],
      cursor: null,
    };

    this.addActivity = this.addActivity.bind(this);
    this.editActivity = this.editActivity.bind(this);
    this.addTodoActivity = this.addTodoActivity.bind(this);
    this.setTypeEvent = this.setTypeEvent.bind(this);
    this.setTypeMeeting = this.setTypeMeeting.bind(this);
    this.setTypeContent = this.setTypeContent.bind(this);
    this.setContentSource = this.setContentSource.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.getInterlocutorState = this.getInterlocutorState.bind(this);
    this.cleanTags = this.cleanTags.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.selectTag = this.selectTag.bind(this);
    this.updateSearchTags = this.updateSearchTags.bind(this);
  }

  componentDidMount() {
    this.props.getTags();
    if (this.props.id !== -1) {
      this.props.getActivityFromId(this.props.id)
        .then(() => {
          // Temporary: because tags are not persisted in DB.
          // When it'll be done: this.setState(this.props.activityDisplay)
          this.setState(
            { ...this.props.activityDisplay, activity: { ...this.props.activityDisplay.activity, tags: [] } },
            () => this.validateForm(),
          );
        });
    }
  }

  onSelectionChange(e) {
    const pos = e.nativeEvent.selection;
    this.setState({
      ...this.state,
      cursor: pos,
    });
  }


  getInterlocutorState(interlocutor) {
    this.setState({ ...this.state, interlocutor });
  }

  setTitle(title) {
    this.setState({
      ...this.state,
      activity: { ...this.state.activity, title },
    }, this.validateForm);
  }

  setDescription(description) {
    this.setState({
      ...this.state,
      activity: { ...this.state.activity, description, tags: this.cleanTags(description.match(/#\S+/g)) },
    }, () => { this.updateSearchTags(); this.validateForm(); });
  }

  setContentSource(source) {
    this.setState({
      ...this.state,
      activity: { ...this.state.activity, contentSource: source },
    }, this.validateForm);
  }

  setTypeContent() {
    this.setState({
      ...this.state,
      activity: { ...this.state.activity, type: ActivityTypeEnum.CONTENT },
    }, this.validateForm);
  }

  setTypeMeeting() {
    this.setState({
      ...this.state,
      activity: { ...this.state.activity, type: ActivityTypeEnum.MEETING },
    }, this.validateForm);
  }

  setTypeEvent() {
    this.setState({
      ...this.state,
      activity: { ...this.state.activity, type: ActivityTypeEnum.EVENT },
    }, this.validateForm);
  }

  updateSearchTags() {
    const pos = this.state.cursor;
    let isUpdated = false;
    if (pos && pos.start === pos.end) {
      const descriptionToCursor = this.state.activity.description.substr(0, pos.start);
      const tagBegin = descriptionToCursor.lastIndexOf('#');
      if (tagBegin > -1) {
        const tagToSearch = descriptionToCursor.substr(tagBegin);
        if (tagToSearch.indexOf(' ') === -1) {
          if (tagToSearch.length > 1) { // If length == 1, then it's just "#"
            const slugBeginningToTest = cleanTag(tagToSearch);
            isUpdated = true;
            this.setState({
              ...this.state,
              autocompleteTagList: this.props.tagList.filter(item => item.slug.indexOf(slugBeginningToTest) > -1 && item.slug !== slugBeginningToTest),
            });
          }
        }
      }
    }
    if (isUpdated === false) {
      this.setState({
        ...this.state,
        autocompleteTagList: [],
      });
    } 
  }

  selectTag(name) {
    const previousDescription = this.state.activity.description;
    let descriptionBegin = previousDescription.substr(0, this.state.cursor.start);
    descriptionBegin = descriptionBegin.substr(0, descriptionBegin.lastIndexOf('#'));

    let descriptionEnd = previousDescription.substr(this.state.cursor.start);
    if (descriptionEnd.indexOf(' ') > 0) {
      descriptionEnd = descriptionEnd.substr(descriptionEnd.indexOf(' '));
    } else {
      descriptionEnd = '';
    }
    const description = `${descriptionBegin}#${name}${descriptionEnd}`;
    this.setState({
      ...this.state,
      activity: { ...this.state.activity, description, tags: this.cleanTags(description.match(/#\S+/g)) },
      autocompleteTagList: [],
    });
  }

  addActivity() {
    if (this.state.activity.type === ActivityTypeEnum.MEETING) {
      const promises = [this.props.addInterlocutor(this.state.interlocutor), this.props.addTags(this.state.activity.tags)];
      Promise.all(promises)
        .then ((results) => {
          this.props.addActivity(this.state.activity, results[1], results[0])
        }
        );
    } else {
      this.props.addTags(this.state.activity.tags)
      .then((tagsId) => {
        this.props.addActivity(this.state.activity, tagsId)

      });
    }
    this.props.goBack();
  }

  editActivity() {
    // TODOODODODOO
    if (this.state.activity.type === ActivityTypeEnum.MEETING) {
      // EDIT INTERLOCUTOR ASSOCIATED !! TODO
      this.props.addInterlocutor(this.state.interlocutor)
        .then((interlocutorId) => {
          this.props.editActivity(this.state.activity, interlocutorId);
        });
    } else {
      this.props.editActivity(this.state.activity);
    }
    this.props.goBack();
  }

  addTodoActivity() {
    if (this.state.activity.type === ActivityTypeEnum.MEETING) {
      this.props.addInterlocutor(this.state.interlocutor)
        .then((interlocutorId) => {
          this.props.addActivity(this.state.activity, interlocutorId);
        });
    } else {
      this.props.addActivity(this.state.activity);
    }
    this.props.navigateToTodoAddScreen(this.state.activity.id);
  }

  validateForm() {
    let isFormValid = true;
    if (this.state.activity.type === ActivityTypeEnum.CONTENT) {
      isFormValid = isFormValid && this.state.activity.contentSource && this.state.activity.contentSource.length > 0;
    }
    isFormValid = isFormValid && this.state.activity.title.length > 0;

    this.setState({ isFormValid });
  }

  cleanTags(tags) {
    if (tags) {
      let newTags = [];
      tags.forEach((tag) => {
        const newTag = {
          slug: cleanTag(tag),
          value: tag.substr(1),
        };
        newTags = newTags.concat(newTag);
      });
      return newTags;
    }
    return tags;
  }


  render() {
    return (
      <ActivityAddEditView
        goBack={this.props.goBack}
        addActivity={this.addActivity}
        editActivity={this.editActivity}
        addTodoActivity={this.addTodoActivity}
        setTitle={this.setTitle}
        setDescription={this.setDescription}
        setContentSource={this.setContentSource}
        setTypeEvent={this.setTypeEvent}
        setTypeMeeting={this.setTypeMeeting}
        setTypeContent={this.setTypeContent}
        activity={this.state.activity}
        isFormValid={this.state.isFormValid}
        getInterlocutorState={this.getInterlocutorState}
        isEdit={this.props.id !== -1}
        onSelectionChange={this.onSelectionChange}
        autocompleteTagList={this.state.autocompleteTagList}
        selectTag={this.selectTag}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    activityDisplay: state.activity.activityDisplay,
    tagList: state.activity.tagList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editActivity: activity => dispatch(editActivity(activity)),
    addActivity: (activity, tagsId, interlocutorId) => dispatch(addActivity(activity, tagsId, interlocutorId)),
    addInterlocutor: interlocutor => dispatch(addInterlocutor(interlocutor)),
    getActivityFromId: id => dispatch(getActivityFromId(id)),
    getTags: () => dispatch(getTags()),
    addTags: tags => dispatch(addTags(tags)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityAddEditContainer);
