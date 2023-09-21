import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteUser, getUser, getUsers, updateUser } from "@/components/Api/usrers";

export const useGetUsers = () =>{
  return useQuery('users', getUsers);
}
export const useGetUser = (id) => {
  return useQuery(['user',id] ,() =>getUser(id)  )
}

export const useUpdateUser = () => {
  return useMutation(updateUser)
};
export const useDeleteUser = () => {
  return useMutation(deleteUser)
};