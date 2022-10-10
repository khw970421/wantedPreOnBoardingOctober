const useRouter = (params) => {
  window.history.pushState({}, "", params);
  console.log("useRouter");
};

export default useRouter;
