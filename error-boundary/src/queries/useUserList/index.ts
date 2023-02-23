import { useQuery } from '@tanstack/react-query';
import { getUserList } from '@/api/user';

const useUserList = () => {
  const query = useQuery(['userList'], getUserList, {
    suspense: true,
  });

  return query;
};

export default useUserList;
