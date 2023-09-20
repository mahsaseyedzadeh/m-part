import { useQuery } from "react-query";
import { getUsers } from "@/components/Api/usrers";

export const useGetUsers = () =>{
  return useQuery('users', getUsers);
}