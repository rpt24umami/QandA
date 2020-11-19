function formatDate(date) {
  const year = date.slice(0,4);
  const month = date.slice(5,7);
  const day = date.slice(8,10);

  var months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  };

  for (var key in months) {
    if (key === month) {
        var newmonth = months[key];
    }
  }

  return `${newmonth} ${day}, ${year}`
  };


function Questions(props) {
  const list = props.list;
  const avatar = props.avatar;
  const flag = props.flag;
  const listQsandAs = list.map((qa) => {
    const date = formatDate(qa.question_date);
    return (
      <div key={qa.id}>
        <span className='avatar-box'>{avatar}</span>
          <div className='heading'>Question
            <div className='line'> | </div>
            <div className='date'>{date} from </div>
             {qa.author}
          <div className='question'>{qa.question} <div>
            {flag}
          </div>
          </div>

      </div>
        <li>{avatar} {qa.answer}</li>
      </div>
    )}
  );
  return (
    <div className='list'>{listQsandAs}</div>
  );

}

export default Questions;