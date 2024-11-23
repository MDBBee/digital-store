import { useRouteError } from 'react-router-dom';

function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  return (
    <h4 className="font-bold text-4xl">
      Error from error-element component attached to this page
    </h4>
  );
}
export default ErrorElement;
