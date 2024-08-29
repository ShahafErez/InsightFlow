const re =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function validateEmails(emails) {
  const invalidEmailsArray = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => !re.test(email));

  if (invalidEmailsArray.length > 0) {
    return `The following emails are invalid: ${invalidEmailsArray}`;
  }
  return;
}
