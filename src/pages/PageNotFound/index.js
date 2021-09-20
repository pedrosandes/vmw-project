/* Components  */
import { PageError } from "../../components";

const PageNotFound = () => {
  return (
    <PageError
      errorTitle="Págine não encontrada"
      errorText="Ah não! Parece que a página não foi desenvolvida pela KillJoy."
    />
  );
};

export default PageNotFound;
