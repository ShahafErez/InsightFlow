export default function SurveyCard({ survey }) {
  const { _id, title, body, subject, dateSent, yes, no } = survey;

  return (
    <div className="card" key={_id}>
      <div className="card-body">
        <h5 className="card-header ps-0">{title}</h5>
        <h5 class="card-subtitle text-muted mt-2">{subject}</h5>
        <p class="card-text">{body}</p>
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
