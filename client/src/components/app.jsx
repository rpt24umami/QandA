/* eslint-disable no-undef */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import Questions from './questions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 45,
      list: [],
      avatar: <img src="https://static-assets.teacherspayteachers.com/images/avatars/default.jpg" className="avatar-img" alt="" />,
      thumbs: <img src="https://www.flaticon.com/svg/static/icons/svg/633/633759.svg" className="thumbs" alt="" />,
    };
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleFlag = this.handleFlag.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    fetch(`http://localhost:3004/product/${productId}/q-and-a`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          list: result,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleHelpful(event) {
    const answerId = Number(event.target.attributes[0].nodeValue);
    const tempList = this.state.list;
    for (let i = 0; i < tempList.length; i += 1) {
      if (tempList[i].answer_id === answerId) {
        tempList[i].answer_helpful += 1;
      }
    }
    this.setState({
      list: tempList,
    });

    event.preventDefault();

    const { productId } = this.state;
    fetch(`http://localhost:3004/product/${productId}/helpful`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answerId }),
    })
      .catch((err) => {
        throw err;
      });
  }

  // eslint-disable-next-line class-methods-use-this
  handleFlag() {
    // eslint-disable-next-line no-alert
    alert('Log in to mark inappropriate');
  }

  render() {
    return (
      <div className="q-and-a-section">
        <h3>Questions & Answers</h3>
        <p className="login">
          Please
          {' '}
          <a className="login-link" href="">
            log in
          </a>
          {' '}
          to post a question.
        </p>
        <div className="list-box">
          <Questions
            list={this.state.list}
            avatar={this.state.avatar}
            thumbs={this.state.thumbs}
            handleHelpful={this.handleHelpful}
            handleFlag={this.handleFlag}
          />
        </div>
      </div>
    );
  }
}

export default App;
