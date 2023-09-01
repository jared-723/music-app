import { Navigate, Outlet } from "react-router";
import { useUserInfo } from "../../store/userInfo";
import PrincipalLayout from "../layout/PrincipalLayout";

const PrivateRoutes = () => {
  const user = useUserInfo((state) => {
    state.useUserInfo;
  });

  if (user.token) {
    return (
      <PrincipalLayout>
        <Outlet />
      </PrincipalLayout>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
};
export default PrivateRoutes;
