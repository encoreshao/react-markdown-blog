export default function ErrorPage() {
  const errorPageStyle = {
    maxWidth: '80rem',
    marginTop: '10rem',
    padding: '0 2rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column'
  }

  return (
    <div id="container" style={errorPageStyle}>
      <h1>Oops!</h1>
      <br />
      <div>Sorry, an unexpected error has occurred.</div>
    </div>
  );
}