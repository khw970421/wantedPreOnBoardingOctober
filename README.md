# 📖  React와 History API 사용하여 SPA Router 기능 구현하기
**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**

# 📚 구현 내용
<img width="273" alt="image" src="https://user-images.githubusercontent.com/59253551/194791526-8875503f-853c-45bc-a4b3-2a03ea4fcd17.png">

## 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링
해당 주소에 접근을 위해 `window.history.pushState({}, "", Params);`를 사용

## 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동
 `window.history.pushState({}, "", Params);`와 더하여 상태값을 두어 버튼을 클릭하거나 뒤로가기버튼(`window.onpopstate`) 이벤트가 발생시에 상태값을 변경하여 페이지에 따르는 결과가 갱신되게 처리

## Router, Route 컴포넌트를 구현
처음에 했을 때는 Router,Route를 별 생각없이 `react-router-dom` 라이브러리를 사용했었는데 실제는 그런 과제 의도가 아니었다. 😂😂

### Router의 목적은?
여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할

* 즉, Router에서 pathname에 해당하는 Route만 보여주게 처리하도록 하는 역할이라 생각

#### Router.jsx
```js
const Router = ({ children }) => {
  // 자식 태그들중에 path가 현재 pathname과 같은 것만 리턴
  return (
    <>
      {children.filter(({ props }) => {
        return props.path === window.location.pathname;
      })}
    </>
  );
};

export default Router;
```
따라서 해당 filter를 통해 조건에 해당하는 것만 filter로 처리해준다. 
이를 Route가 받아서 그에 해당하는 component만 처리하게 하는 것이다. 

#### Route.jsx
```js
const Route = ({ component }) => {
  // 받은 컴포넌트를 보여주게 처리
  return <>{component}</>;
};

export default Route;
```
## 최소한의 push 기능을 가진 useRouter Hook을 작성
`const { push } = useRouter();` 해당 형태가 되게 useRouter를 작성하였고 `/root`에 대해서는 `/` 로 처리해야하므로 해당 부분을 고려하여 useRouter 코드를 작성

#### useRouter.js
```js
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
```

## 📑 깨달은 점
1. 우리가 평소 당연시 쓰고 있던 react-router-dom을 직접 historyAPI를 이용해 처리해서 새로움을 얻었다.
2. 예상보다 쉬운줄 알았지만 어려웠었다. 처음 의도를 이해 못해서 다소 시간을 소비했다고 생각한다.
3. pushState만 해도 렌더링이 저절로 되는 것이 아니라 직접 렌더링 처리도 해야 하는 부분이 react-router-dom에서 해당 부분을 내부에서 처리하고 있는 것이 아닐까 라고 생각을 하게 된다.  [해당 실행 링크](https://github.com/khw970421/wantedPreOnBoardingOctober/tree/firstProject(+ReactRouterDom))
4.  부모태그의 자식태그에 대한 처리로 `children` props를 이용해 처리할 수 있는 부분과 해당 `chilren` 부분을 리턴해도 태그로 처리되어 쉽게 다룰 수 있는 부분이 신기했다.
```js
{children.filter(({ props }) => {
        return props.path === window.location.pathname;
 })}
```
