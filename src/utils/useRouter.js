const useRouter = () => {
  return {
    path: (params) => {
      // 조건에 따라 pushState params 처리
      const checkParams = params === "root" ? "/" : `/${params}`;
      window.history.pushState({}, "", checkParams);
    },
  };
};

export default useRouter;
