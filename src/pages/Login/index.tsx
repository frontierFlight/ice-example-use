/* eslint-disable no-console */
import { useParams } from 'ice';

function Login() {
  const params = useParams();
  console.log('获取动态路由参数', params);
  return (
    <div>
      Login
    </div>
  );
}

export default Login;
