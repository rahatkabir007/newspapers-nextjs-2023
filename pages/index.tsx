import { useSelector } from "react-redux";
import HomePage from "../components/pages/HomePage/HomePage";
import { controller } from "../src/state/StateController";
import { GetServerSidePropsContext, NextPage } from "next";
import { INewspaper } from "../interfaces/models";

interface NewspaperProps {
  newspaperList: INewspaper[]
}


const index: NextPage<NewspaperProps> = ({ newspaperList }) => {
  const states = useSelector(() => controller.states);
  return <HomePage />
};


export default index;
