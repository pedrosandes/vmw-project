/* Components  */
import { PageError } from "../../components";

const PageNotFound = () => {
  return (
    <PageError
      errorTitle="Página não encontrada"
      errorText="Oops! Parece que a página não foi desenvolvida pela KillJoy."
    />
  );
};

export default PageNotFound;