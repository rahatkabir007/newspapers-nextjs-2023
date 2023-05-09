import { useSelector } from "react-redux";
import HomePage from "../components/pages/HomePage/HomePage";
import { controller } from "../src/state/StateController";
import { GetServerSidePropsContext, NextPage } from "next";
import { INewspaper } from "../interfaces/models";

interface NewspaperProps {
  newspaperList: INewspaper[]
}

async function fetchJsonFile() {
  const response = await fetch('/newspaperlist.json');
  const data = await response.json();
  return data;
}

fetchJsonFile().then(data => {
  console.log(data); // do something with the data
});

const index: NextPage<NewspaperProps> = ({ newspaperList }) => {
  const states = useSelector(() => controller.states);
  return <HomePage />
};


// export async function getServerSideProps() {
//   try {
//     const response = await fetch('/newspaperlist.json');
//     const newsPapers = await response.json();

//     return {
//       props: {
//         newspaperList: newsPapers || []
//       }
//     }
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         newspaperList: []
//       }
//     }
//   }

// }
export default index;
