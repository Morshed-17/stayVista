import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();
  const { data, isLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getRole(user?.email),
    queryKey: ["role"],
  });
  const role = data?.role
  return [role, isLoading];
};

export default useRole;
