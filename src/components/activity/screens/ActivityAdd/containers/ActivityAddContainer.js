import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fr';
import { ActivityTypeEnum } from 'yasav/src/const';
import { addInterlocutor } from 'yasav/src/components/interlocutor/screens/InterlocutorAdd/actions/index'
import ActivityAddView from '../views/ActivityAddView';
import { addActivity } from '../actions/index';

moment.locale('fr');

class ActivityAddContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormValid: false,
      tagInput: '',
      activity: {
        title: '',
        description: '',
        date: moment(),
        type: ActivityTypeEnum.CONTENT,
        contentSource: '',
        tags: [],
        key: this.props.lastID + 1,
        interlocutorKey: null,
      },
      interlocutor: {},

    }
    this.addActivity = this.addActivity.bind(this);
    this.addTodoActivity = this.addTodoActivity.bind(this);
    this.setTypeEvent = this.setTypeEvent.bind(this);
    this.setTypeMeeting = this.setTypeMeeting.bind(this);
    this.setTypeContent = this.setTypeContent.bind(this);
    this.setContentSource = this.setContentSource.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.manageTag = this.manageTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.getInterlocutorState = this.getInterlocutorState.bind(this);
  }

  getInterlocutorState(interlocutor) {
    this.setState({
      ...this.state,
      interlocutor,
      activity: {
        ...this.state.activity,
        interlocutorKey: interlocutor.key,
      },
    });
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
      activity: { ...this.state.activity, description },
    }, this.validateForm);
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

  addActivity() {
    if (this.state.activity.type === ActivityTypeEnum.MEETING) {
      this.props.addInterlocutor(this.state.interlocutor);
    }
    this.props.addActivity(this.state.activity);
    this.props.goBack();
  }

  addTodoActivity() {
    if (this.state.activity.type === ActivityTypeEnum.MEETING) {
      this.props.addInterlocutor(this.state.interlocutor);
    }
    this.props.addActivity(this.state.activity);
    this.props.navigateToTodoAddScreen(this.state.activity.key);
  }

  removeTag(tag) {
    this.setState({
      ...this.state,
      activity: {
        ...this.state.activity,
        tags: this.state.activity.tags.filter(item => item !== tag),
      },
    });
  }

  manageTag(string) {
    if (string.indexOf(',') !== -1) {
      const newTagsRessource = string.split(',');
      const newTags = [];
      newTagsRessource.forEach((element) => {
        const elt = element.trim();
        if (elt !== '') {
          newTags.push(elt);
        }
      });
      const concatenated = this.state.activity.tags.concat(newTags);
      const updatedState = concatenated.filter((item, pos) =>
        concatenated.indexOf(item) === pos);
        
      this.setState({
        ...this.state,
        tagInput: '',
        activity: { ...this.state.activity, tags: updatedState },
      });
    } else {
      this.setState({ ...this.state, tagInput: string });
    }
  }

  validateForm() {
    let isFormValid = true;
    if (this.state.activity.type === ActivityTypeEnum.CONTENT) {
      isFormValid = isFormValid && this.state.activity.contentSource.length > 0;
    }
    isFormValid = isFormValid && this.state.activity.title.length > 0;

    this.setState({ isFormValid });
  }


  render() {
    return (
      <ActivityAddView
        goBack={this.props.goBack}
        addActivity={this.addActivity}
        addTodoActivity={this.addTodoActivity}
        setTitle={this.setTitle}
        setDescription={this.setDescription}
        setContentSource={this.setContentSource}
        contentSource={this.state.activity.contentSource}
        setTypeEvent={this.setTypeEvent}
        setTypeMeeting={this.setTypeMeeting}
        setTypeContent={this.setTypeContent}
        type={this.state.activity.type}
        tags={this.state.activity.tags}
        manageTag={this.manageTag}
        tagInput={this.state.tagInput}
        removeTag={this.removeTag}
        isFormValid={this.state.isFormValid}
        getInterlocutorState={this.getInterlocutorState}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    lastID: state.activity.lastID,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addActivity: activity => dispatch(addActivity(activity)),
    addInterlocutor: interlocutor => dispatch(addInterlocutor(interlocutor)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityAddContainer);
