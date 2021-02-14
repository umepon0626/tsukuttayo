// Amplify reactのauth context
// 参考: https://qiita.com/G-awa/items/99cb84c62fcd113943a6
// -------------------------------------------------------
// API
// 項目	概要
// isAuthenticated	ログインしているか
// isLoading	ローディング中か（画面制御で使用）
// user	ログインしているユーザの情報
// error	ログイン処理、サインアップ処理などでエラーがあれば詰める
// signIn	サインインする。
// signUp	サインアップする。
// confirmSignUp	サインアップ確認コードを入力する
// signOut	サインアウトする。
// -------------------------------------------------------

import React, { useContext, useEffect, useState } from 'react'
import Amplify, { Auth } from 'aws-amplify'

const initialContext = {
  isAuthenticated: false,
  isLoading: false
}

export const AuthContext = React.createContext(initialContext);
export const useAuth = () => useContext(AuthContext);

const CognitoAuthProvider = (props) => {
  Amplify.configure(props.amplifyConfig)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [user, setUser] = useState()

  useEffect(() => {
    checkAuthenticated();
    currentAuthenticatedUser();
  }, []);

  const checkAuthenticated = () => {
    setIsLoading(true);
    Auth.currentSession()
      .then((data) => {
        if (data) setIsAuthenticated(true);
      })
      .catch((err) => console.log("current session error", err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const currentAuthenticatedUser = async () => {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user);
  }

  const signIn = async ({ username, password }) => {
    setIsLoading(true);
    try {
      await Auth.signIn(username, password);
      setIsAuthenticated(true);
    } catch(error) {
      console.log("error signing in", error);
      setError(error);
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }

  const signUp = async (param) => {
    setIsLoading(true);
    let result;
    try {
      result = await Auth.signUp(param);
      setUser(result.user)
    } catch (error) {
      console.log('error signing up', error);
      setError(error);
    }
    setIsLoading(false);
    return result?.user;
  }

  const confirmSignUp = async ({username, code}) => {
    setIsLoading(true);
    try {
      await Auth.confirmSignUp(username, code);
      setIsAuthenticated(true);
    } catch(error) {
      console.log("error confirm sign up", error);
      setError(error);
    }
    setIsLoading(false);
  }

  const signOut = () => {
    setIsLoading(true);
    Auth.signOut()
      .then(() => {
        setIsAuthenticated(false);
      })
      .catch((err) => console.log('error signing out', err))
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        signIn,
        signUp,
        confirmSignUp,
        signOut,
        user,
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default CognitoAuthProvider;