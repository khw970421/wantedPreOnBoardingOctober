const useRouter = (params) => {
  window.history.pushState({}, "", params);
};

export default useRouter;
