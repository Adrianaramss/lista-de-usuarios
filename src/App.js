import { GlobalStyles } from "./GlobalStyles";
import {HomePage} from "./Pages/HomePage";


function App() {
// const [userlist, setUserlist] = useState([]); // variavel para armazenar dados api
    
//     useEffect(() => {
//       getUsers()
//     }, [])
    
//     const getUsers = async () => {
//       try {
    
//         const response = await axios.get("https://randomuser.me/api/?results=5")
    
//         setUserlist(response.data.results)
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     console.log(userlist)

//     const context = {
//       userlist,
//       setUserlist
//       };

  return (
    <>
    <GlobalStyles/>
    {/* <GlobalContext.Provider value={context}> */}
    <HomePage/>
    {/* </GlobalContext.Provider> */}

    </>
  );
}

export default App;
