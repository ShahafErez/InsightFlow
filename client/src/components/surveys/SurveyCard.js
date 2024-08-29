export default function SurveyCard({ survey }) {
  const { _id, title, body, dateSent, yes, no } = survey;

  return (
    <div className="card" key={_id}>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{body}</p>
        <p className="right">
          Sent On: {new Date(dateSent).toLocaleDateString()}
        </p>
        <div className="card-action">
          <span className="users-response">Yes: {yes}</span>
          <span className="users-response">No: {no}</span>
        </div>
      </div>
    </div>
  );
}
