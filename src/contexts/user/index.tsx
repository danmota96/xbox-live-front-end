import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import api from "services/api";
  import { User } from "types";
  
  interface UserProviderProps {
    children: ReactNode;
  }
  
  interface UserProviderData {
    users: User[];
    handleGetUsers: () => void;
  }
  
  const UserContext = createContext<UserProviderData>({} as UserProviderData);
  
  export const UserProvider = ({ children }: UserProviderProps) => {
    /* const { logged } = useAuth(); -- terminar o auth */
  
    const [users, setUser] = useState<User[]>([]);
  
    const handleGetUsers = () => {
      const token = localStorage.getItem("token");
  
      const headers = { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      api.get("/user", headers).then((res) => {
        setUser(res.data);

      }
     );
    };
  
    useEffect(() => {
      handleGetUsers();
    }, []);
  
    return (
      <UserContext.Provider value={{ users, handleGetUsers }}>{children}</UserContext.Provider>
    );
  };
  
  export const useUsers = () => useContext(UserContext);
  