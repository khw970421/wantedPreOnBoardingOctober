const useRouter = () => {
  return {
    path: (params) => {
      const checkParams = params === "root" ? "/" : `/${params}`;
      window.history.pushState({}, "", checkParams);
    },
  };
};

export default useRouter;
