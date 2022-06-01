// 通过路由高阶组件可以对路由组件实现统一的业务逻辑（比如鉴权、埋点等）
import { Redirect } from 'ice';

const LoginWrapper = (WrappedComponent) => {
  const LoginWrappedPage = (props) => {
    const isLogin = true; // 替换成业务逻辑
    return <>{isLogin ? <WrappedComponent {...props} /> : <Redirect to="/login" />}</>;
  };

  return LoginWrappedPage;
};

export default LoginWrapper;
