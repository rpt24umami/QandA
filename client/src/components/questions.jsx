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

function displayFlag(flagInt) {
  console.log(flagInt);
  const unFlagged = <img src='https://www.flaticon.com/svg/static/icons/svg/455/455582.svg' className='flag' />;
  const flagged = <img src='https://www.flaticon.com/svg/static/icons/svg/455/455885.svg' className='flag' />;

  if(flagInt === 0) {
    return unFlagged;
  } else {
    return flagged;
  }
};


function Questions(props) {
  const list = props.list;
  const avatar = props.avatar;
  const listQsandAs = list.map((qa) => {
    const qDate = formatDate(qa.question_date);
    const qFlag = displayFlag(qa.question_flag);
    const aDate = formatDate(qa.answer_date);
    const aFlag = displayFlag(qa.answer_flag);

    return (
      <div key={qa.id}>
        <div className='question-box'>
          <span className='avatar-box'>{avatar}</span>
          <div className='heading'>Question
            <div className='line'> | </div>
            <div className='date'>{qDate} from </div>
             {qa.author}
            <div className='question'>{qa.question}
            {qFlag}</div>
          </div>
          <div className='answer-box'>
            <span className='avatar-box'>{avatar}</span>
            <div className='heading'>Answer
              <div className='line'> | </div>
              <div className='date'>{aDate} from </div>
              {qa.seller} <div className='date'>(TpT Seller)</div>
            </div>
              <div className='question'>{qa.answer}
                <div className='helpful'><div>Helpful</div>{aFlag}</div>
              </div>
          </div>
        </div>
      </div>
    )}
  );
  return (
    <div className='list'>{listQsandAs}</div>
  );

}

export default Questions;